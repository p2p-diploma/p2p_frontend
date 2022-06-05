import './Wallet.css';
import UserInfo from './UserInfo';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from "js-cookie";
import { useCallback } from 'react/cjs/react.development';
import WalletTransferDropdown from './WalletTransferDropdown';
import reactDom from 'react-dom';
export default function Wallet() {
    const [eth, setETH] = useState(0);
    const [erc20, setErc20] = useState(0);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullName] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [walletId, setWalletId] = useState('');

    const fetchUserData = useCallback(async (email) => {
        const responses = await Promise.all([
            fetch('http://localhost:3227/user', { credentials: 'include' }),
            fetch(`http://localhost:3227/wallets/eth/email/${email}`, { credentials: 'include' }),
            fetch(`http://localhost:3227/wallets/erc20/email/${email}`, { credentials: 'include' })
        ]);
        if (responses.some(r => !r.ok)) {
            alert('Fetch error');
        } else {
            let user = await responses[0].json();
            let ethWallet = await responses[1].json();
            let erc20Wallet = await responses[2].json();
            setFullName(user.full_name);
            setEmail(user.email);
            setETH(ethWallet.balance);
            setErc20(erc20Wallet.balance);
            setAddress(ethWallet.address);
            setWalletId(ethWallet.id);
        }
    }, []);


    useEffect(() => {
        let decodedToken = jwt_decode(Cookies.get('jwt-access'));
        let email = decodedToken.user_id;
        fetchUserData(email).catch(console.error);
    }, [fetchUserData]);

    const fetchPrivateKey = async () => {
        const privateKeyResponse = await fetch(`http://localhost:3227/wallets/eth/${walletId}/privateKey`, { credentials: 'include' });
        if (!privateKeyResponse.ok) alert(privateKeyResponse.statusText);
        let privateKey = await privateKeyResponse.text();
        setPrivateKey(privateKey);
    }

    const modal = (
        <div className="modal fade" id="walletModal" tabIndex="-1" aria-labelledby="walletModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Your profile
                        </h5>
                        <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center bg-light">
                            <UserInfo email={email} fullName={fullname} />
                            <div className="title erc20title">
                                <img src="/erc20.png" alt='' className='img-fluid' />
                            </div>
                            <div id="erc20"><span className="value">{erc20}</span> ERC20</div>
                            <div className="title ethtitle">
                                <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1200px-Ethereum_logo_translucent.svg.png" />
                            </div>
                            <div id="eth">
                                <div className="el"><span className="value">{eth}</span> ETH</div>
                                <div className="addressinfo mt-3">
                                    <h4 className="mt-2">Address:</h4>
                                    <p id="address" className='lead'>{address}</p>
                                </div>
                                <div className="addressinfo mt-3 pb-5">
                                    <h4>Private key</h4>
                                    <div className="el">
                                        <button type="button" className='btn btn-outline-warning p-2' onClick={fetchPrivateKey}
                                            data-bs-toggle="modal" data-bs-target="#privateKeyCollapse" aria-expanded="false"
                                            aria-controls="privateKeyCollapse">Show
                                        </button>
                                    </div>
                                    <div className="modal fade" id='privateKeyCollapse' tabindex="-1">
                                        <div className="modal-dialog">
                                            <h3 className='modal-header text-primary bg-light'>Your private key</h3>
                                            <div className="modal-content">
                                                <div className="modal-body privateKey">
                                                    {privateKey}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <WalletTransferDropdown walletId={walletId} />
                    </div>
                </div>
            </div>
        </div>);

    return reactDom.createPortal(
        modal, document.getElementById("profile-root")
    );
}

