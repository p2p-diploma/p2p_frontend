import './Wallet.css';
import UserInfo from './UserInfo';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from "js-cookie";
import { useCallback } from 'react/cjs/react.development';

export default function Wallet() {
    const [eth, setETH] = useState(0);
    const [erc20, setErc20] = useState(0);
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullName] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [walletId, setWalletId] = useState();

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

    return (
        <div id="profile" className='text-center bg-light'>
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
                    <h4 mt-2>Address:</h4>
                    <p id="address" className='lead'>{address}</p>
                </div>
                <div className="addressinfo mt-3 pb-5">
                    <h4>Private key</h4>
                    <div className="el">
                        <button type="button" className='btn btn-outline-warning p-2' onClick={fetchPrivateKey}
                            data-bs-toggle="collapse" data-bs-target="#privateKeyCollapse" aria-expanded="false"
                            aria-controls="privateKeyCollapse">Show
                        </button>
                    </div>
                    <div class="collapse" id="privateKeyCollapse" className='text-center text-info'>
                        <b>{privateKey}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}