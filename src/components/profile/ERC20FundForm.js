import {useRef, useState} from 'react';
export default function ERC20FundForm(props) {
    const amountRef = useRef();
    const [transferStatus, setTransferStatus] = useState({
        ok: false, message: ''
    });
    const fundP2P = (e) => {
        e.preventDefault();
        let amount = amountRef.current.value;
        if(amount === 0) setTransferStatus({
            ok: false, message: 'Amount must be greater than 0'
        });
        let body = {
            "walletId": props.walletId,
            "amount": parseFloat(amount)
        };
        fetch('http://localhost:3227/erc20/transfer/fund', {method: 'POST', credentials: 'include', body: JSON.stringify(body),
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

    return <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                Fund P2P (ERC20)
            </button>
        </h2>
        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            {transferStatus.ok && <p className='text-success'>{transferStatus.message}</p>}
            {!transferStatus.ok && <p className='text-danger'>{transferStatus.message}</p>}
            <small className='text-warning'>Warning! For transferring and refunding ERC20 tokens you need to have some ETH on 
            your P2P wallet for paying gas - transaction fees. Therefore, you need to fund your P2P wallet for ERC20 by initial
            ETH from your main wallet.</small>
            <form onSubmit={fundP2P} id="fundP2P" className="accordion-body">
                <div className="form-group mb-3">
                    <label htmlFor="fundP2P" className="mb-3">Please, specify the amount of ETH to fund</label>
                    <input min='0' ref={amountRef} step='any' className="form-control" id="fundP2P" type='number' />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary btn-large'>Transfer</button>
                </div>
            </form>
        </div>
    </div>;
}