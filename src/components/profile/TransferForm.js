import {useRef, useState} from 'react';
export default function TransferForm(props) {
    const selectedCurrencyRef = useRef();
    const amountRef = useRef();
    const [transferStatus, setTransferStatus] = useState({
        ok: false, message: ''
    });
    const transferToP2P = (e) => {
        e.preventDefault();
        let amount = amountRef.current.value;
        if(amount === 0) setTransferStatus({
            ok: false, message: 'Amount must be greater than 0'
        });
        let body = {
            "walletId": props.walletId,
            "amount": parseFloat(amount)
        };
        if(selectedCurrencyRef.current.value === 'eth'){
            fetch('http://localhost:3227/eth/transfer/to_p2p', {method: 'POST', credentials: 'include', body: JSON.stringify(body),
             headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}}).then(response => {
                 if(response.ok){
                     setTransferStatus({ok: true, message: 'Successful transfer'});
                 } else {
                    setTransferStatus({ok: false, message: 'Failed to transfer. Please, try later.'});
                 }
            }).catch(err => {
                setTransferStatus({ok: false, message: err});
            });
        } else {
            fetch('http://localhost:3227/erc20/transfer/to_p2p', {method: 'POST', credentials: 'include', body: JSON.stringify(body),
             headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}}).then(response => {
                 if(response.ok){
                     setTransferStatus({ok: true, message: 'Successful transfer'});
                 } else {
                    setTransferStatus({ok: false, message: 'Failed to transfer. Please, try later.'});
                 }
            }).catch(err => {
                setTransferStatus({ok: false, message: err});
            });
        }
    }

    return <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Transfer to P2P
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse collapsed" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            {transferStatus.ok && <p className='text-success'>{transferStatus.message}</p>}
            {!transferStatus.ok && <p className='text-danger'>{transferStatus.message}</p>}
            <form onSubmit={transferToP2P} id="transferToP2P" className="accordion-body">
                <div className="form-group mb-3">
                    <label htmlFor="toP2PAmount" className="mb-3">Please, choose the type of currency</label>
                    <select ref={selectedCurrencyRef} defaultValue='eth' className="form-select">
                        <option value='eth'>ETH</option>
                        <option value='erc20'>ERC20</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="toP2PAmount" className="mb-3">Please, specify the amount of currency</label>
                    <input min='0' ref={amountRef} step='any' className="form-control" id="toP2PAmount" type='number' />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary btn-large'>Transfer</button>
                </div>
            </form>
        </div>
    </div>;
}