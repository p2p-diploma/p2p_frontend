import { useCallback, useEffect, useState } from "react";
import { fetchAppealById, fetchReceiptById, deleteAppeal } from "../../lib/appeals_api";
import 'dotenv/config';
let download = require('downloadjs');
export default function AppealModal(props) {
    const [appeal, setAppeal] = useState(null);
    const [err, setError] = useState(false);
    const fetchAppeal = useCallback(() => {
        fetchAppealById(props.id).then(a => {
            setAppeal(a);
        });
    }, [props.id]);
    
    useEffect(() => {
        fetchAppeal();
    }, [fetchAppeal]);

    const downloadReceipt = () => {
        fetchReceiptById(appeal.receiptId).then(receipt => {
            download(receipt, appeal.buyerEmail + '_receipt.pdf', 'application/pdf');
        });
    }

    const deleteAppealById = () => {
            deleteAppeal(appeal.id).then(isSuccessful => {
                if(!isSuccessful){
                    setError(true);
                }
                else window.location.reload();
            });
    }

    return (
        appeal !== null && <div className="modal fade" tabIndex="-1" aria-hidden="true" id={'appeal' + props.id} role="dialog" 
        aria-labelledby={props.id}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={appeal.id}>Transaction: <b><i>{appeal.transactionId}</i></b></h5>
                    </div>
                    <div className="modal-body text-center">
                        <div className="row mb-2">
                            <div className="col-lg-6" id="buyer">
                                <h3 className="text-primary">Buyer</h3>
                                <b className="d-block mb-3">{appeal.buyerEmail}</b>
                                <button onClick={downloadReceipt} type="button" className="btn btn-success">Download receipt</button>
                            </div>
                            <div className="col-lg-6" id="seller">
                                <h3 className="text-primary">Seller</h3>
                                <b className="d-block mb-3">{appeal.sellerEmail}</b>
                                <button type="button" className="btn btn-outline-danger">Freeze wallet</button>
                            </div>
                            {err && <div className="text-danger lead" id="appealError">Failed to delete appeal</div>}
                        </div>
                        <div className="details mt-5">
                            <h4 className="mb-3">Transaction details: </h4>
                            <div className="row">
                                <h5 className="col-md-6">Created at: </h5>
                                <div className="col-md-6 lead">27 May 2022 13:59</div>
                            </div>
                            <div className="row">
                                <h5 className="col-md-6">Updated at: </h5>
                                <div className="col-md-6 lead" >08 May 2022 9:00</div>
                            </div>
                            <div className="row">
                                <h5 className="col-md-6">Status: </h5>
                                <div className="col-md-6 lead">Pending</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={deleteAppealById} type="button" className="btn btn-danger">Delete appeal</button>
                    </div>
                </div>
            </div>
        </div>
    );
}