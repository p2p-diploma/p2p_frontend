import React from "react";
import reactDom from "react-dom";
import { useRef, useState } from "react";
import './LotModal.css';
function LotModal(props) {
    const currency = props.lot.crypto_currency === 'eth' ? ' ETH' : ' ERC20';
    const [currencyStatus, setCurrencyStatus] = useState({currency: 0, isOutbound: false, message: ''});
    const price = props.lot.price;
    const minLimit = props.lot.min_limit;
    const maxLimit = props.lot.max_limit;
    const amountRef = useRef();
    const onTypeAmount = () => {
        let amount = amountRef.current.value;
        if(amount > maxLimit || amount < minLimit){
            setCurrencyStatus({currency: 0, isOutbound: true, message: 'Amount of KZT is out of limits'});
        }
        else setCurrencyStatus({currency: amount / price, isOutbound: false, message: ''});
    }

    const modal = (
        <div className="modal fade" id="lotModal" tabIndex="-1" aria-labelledby="lotModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Buy {currency}
                        </h5>
                        <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="lotHeader p-3">
                            <div className="firstTitle row">
                                <span id="lotowner" className="d-block col-lg-6">{props.lot.lot_initiator_email}</span>
                                <div className="col-lg-6 row"><div className="col-md-4">Payment:</div>
                                    <div className='d-flex col-md-8 justify-content-between flex-wrap'>
                                        {props.lot.payment.map(p => {
                                            switch (p.bank_name) {
                                                case "Kaspi":
                                                    return <img key={p.bank_name} className="modalPayment" alt="img"
                                                        src="https://play-lh.googleusercontent.com/VzuwBDTtj6qCoJWIxikZAJ8Y5I1YGdlxzWhUo3-Xe51J7p_vD-RYtmpb0ffmh64iWeg" />;
                                                case "Jusan":
                                                    return <img key={p.bank_name} className="modalPayment" alt="img"
                                                        src="https://yt3.ggpht.com/sBUpXp7ZSwo108NZABpX15K_KXYQ8TuFJa09NBEAZb3Kj8rZ4ArpHT2k_p6FhRpneLgdWH5RG4A=s900-c-k-c0x00ffffff-no-rj" />;
                                                case "Halyk":
                                                    return <img key={p.bank_name} className="modalPayment" alt="img"
                                                        src="https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/64/f3/84/64f384cd-69aa-8e1d-5e04-6211aa535865/AppIcon-1x_U007emarketing-0-0-85-220-9.png/1024x1024bb.png" />;
                                                default:
                                                    return <img alt='bank' />
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="secondTitle mt-2 row">
                                <div className="col-lg-6">Price: <span id="price" className="text-warning">{props.lot.price} KZT</span></div>
                                <div className="col-lg-6">Available: <span className="text-success">{props.lot.supply + ' ' + currency}</span></div>
                            </div>
                        </div>
                        <div className="mt-3 p-2">
                            <div className="details pb-4">
                                <h3 className="pb-2 text-center">Trade details</h3>
                                <p>I will be busy from 14:00 to 15:00, so please wait for
                                    my confirmation.</p>
                            </div>
                            <div className="pb-4 row">
                                <div className="col-lg-6">Write the amount of KZT to pay: </div>
                                <div className="col-lg-6"><input onBlur={onTypeAmount} type="number" ref={amountRef}  
                                className="form-control" /></div>
                            </div>
                            <div className="pb-4 row d-block text-danger text-center">
                                {currencyStatus.isOutbound && currencyStatus.message}
                            </div>
                            <div className="pb-4 row">
                                <div className="col-lg-6">Amount of {currency} to be transferred: </div>
                                <div className="col-lg-6 text-success modalCurrency">{currencyStatus.currency} {currency}</div>
                            </div>
                            <p className="text-muted text-center">Please note, that the standard time for starting a trade is 15 minutes. </p>
                        </div>
                    </div>
                    <div className="modal-footer buttons d-flex pb-4">
                        <button type="submit" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-outline-primary">Go to trade</button>
                    </div>
                </div>
            </div>
        </div>);

    return reactDom.createPortal(
        modal, document.getElementById("lotModal-root")
    );
}

export default LotModal;