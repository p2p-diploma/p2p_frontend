import jwtDecode from 'jwt-decode';
import {useEffect, useCallback, useState } from 'react';
import Cookies from "js-cookie";
export default function ShowP2PBalanceDropdown() {
    const [ethP2P, setEthP2P] = useState(0);
    const [erc20P2P, setErc20P2P] = useState(0);
    const fetchP2P = useCallback(async () => {
        let email = jwtDecode(Cookies.get('jwt-access'))['user_id'];
        const responses = await Promise.all([
            fetch(`http://localhost:3227/wallets/eth/email/${email}/p2p`, { credentials: 'include' }),
            fetch(`http://localhost:3227/wallets/erc20/email/${email}/p2p`, { credentials: 'include' })
        ]);
        if (responses.some(r => !r.ok)) {
            alert('Fetch error');
        } else {
            let ethWallet = await responses[0].json();
            let erc20Wallet = await responses[1].json();
            setEthP2P(ethWallet.balance);
            setErc20P2P(erc20Wallet.balance);
        }
    }, []);
    useEffect(() => {
        fetchP2P();
    }, [fetchP2P]);


    return <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Show P2P balance
        </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            {erc20P2P} ERC20 <br /> <br />
            {ethP2P} ETH
        </div>
    </div>
</div>;
}