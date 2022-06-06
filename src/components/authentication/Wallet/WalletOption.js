import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from "js-cookie";
import {createWallet, loadWallet} from '../../../lib/wallets_api';
import { useNavigate } from "react-router-dom";
const payload = Cookies.get("jwt-access");
const email = payload ? jwt_decode(payload)["user_id"] : "";
export default function WalletOption(props) {
    const navigate = useNavigate();
    const [walletStatus, setWalletStatus] = useState({error: false, message: ''});
    const onCreateWallet = () => {
        let user = {
            email: email,
            password: email
        };
        createWallet(user).then(isSuccessful => {
            if(isSuccessful){
                navigate("/lots");
            } else {
                setWalletStatus({error: true, message: "Failed to create wallet"});
            }
        }).catch(err => setWalletStatus({error: true, message: "Failed to create wallet"}));
    }

    const onLoadWallet = (e) => {
        e.preventDefault();
        let privateKey = String(document.getElementById('importedPrivateKey').value);
        if(privateKey.length === 0) 
            setWalletStatus({error: true, message: "Private key is empty"});

        let user = {
            email: email,
            password: email,
            privateKey: privateKey
        };
        loadWallet(user).then(isSuccessful => {
            if(isSuccessful){
                navigate("/lots");
            } else {
                setWalletStatus({error: true, message: "Failed to import wallet"});
            }
        }).catch(err => setWalletStatus({error: true, message: "Failed to import wallet"}));
    }


    return <>
    {walletStatus.error && <div className='alert alert-danger'>{walletStatus.message}</div>}
    <div class="row bg-light text-center position-absolute top-50 start-50 translate-middle">
        <div class="col-md-5 p-3">
        <h2>Create wallet</h2>
        <p>You may create a new wallet on this platform and use it further.</p>
        <button onClick={onCreateWallet} type="button" class="btn btn-large btn-success">Create</button>
        </div>
        <h3 class="col-md-2 p-3 text-center">Or</h3>
        <div class="col-md-5 p-3">
            <h2>Load existing wallet</h2>
            <p>You may use an already existing wallet (The only thing you need is a private key of an Ethereum account).</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" 
            aria-expanded="false" aria-controls="collapseExample">
                Load
            </button>
            <form onSubmit={onLoadWallet} class="collapse" id="collapseExample">
                <div class="mb-3">
                  <label for="importedPrivateKey" class="form-label p-3">Your private key</label>
                  <input type="text" class="form-control" id="importedPrivateKey" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your private key with anyone else.</div>
                </div>
                <button type="submit" class="btn btn-primary">Import</button>
            </form>
        </div>
    </div></>;
}