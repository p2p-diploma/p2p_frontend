import {useRef, useState} from 'react';
export default function RefundForm(props) {
    const selectedCurrencyRef = useRef();
    const amountRef = useRef();
    const [transferStatus, setTransferStatus] = useState({
        ok: false, message: ''
    });
    const refundFromP2P = (e) => {
        e.preventDefault();
        let amount = amountRef.current.value;
            if(amount === 0 || amount === undefined || amount === null){ setTransferStatus({
                ok: false, message: 'Amount must be greater than 0'
            });
        }
        else {
        let body = {
            "walletId": props.walletId,
            "amount": parseFloat(amount)
        };
        if(selectedCurrencyRef.current.value === 'eth'){
            fetch('http://localhost:3227/eth/transfer/refund', {method: 'POST', credentials: 'include', body: JSON.stringify(body),
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
                fetch('http://localhost:3227/erc20/transfer/refund', {method: 'POST', credentials: 'include', body: JSON.stringify(body),
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
    }
    return <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Refund (Transfer from P2P)
        </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body"> 
        {transferStatus.ok && <p className='text-success'>{transferStatus.message}</p>}
        {!transferStatus.ok && <p className='text-danger'>{transferStatus.message}</p>}
        <form onSubmit={refundFromP2P} id="refund" className="accordion-body">
                <div className="form-group mb-3">
                    <label htmlFor="fromP2PAmount" className="mb-3">Please, choose the type of currency</label>
                    <select ref={selectedCurrencyRef} defaultValue='eth' className="form-select">
                        <option value='eth'>ETH</option>
                        <option value='erc20'>ERC20</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="toP2PAmount" className="mb-3">Please, specify the amount of currency</label>
                    <input min='0' ref={amountRef} step='any' className="form-control" id="fromP2PAmount" type='number' />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary btn-large'>Refund</button>
                </div>
            </form>
        </div>
    </div>
</div>;
}