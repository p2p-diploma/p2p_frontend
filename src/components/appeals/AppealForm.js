import './AppealForm.css';
import { useRef, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from "js-cookie";
import {createAppeal as submitAppeal} from '../../lib/appeals_api';
export default function AppealForm(props) {
    const sellerEmailRef = useRef();
    const receiptRef = useRef();
    const [isAppealCreated, setIsAppealCreated] = useState(false);
    const createAppeal = () => {
        let decodedToken = jwt_decode(Cookies.get('jwt-access'));
        let buyerEmail = decodedToken.user_id;
        let data = new FormData();

        data.append("buyerEmail", buyerEmail);
        data.append("sellerEmail", sellerEmailRef.current.value);
        data.append("transactionId", props.transactionId)
        data.append("receipt", receiptRef.current.files[0]);
        submitAppeal(data).then(isSuccess => {
            if(isSuccess){
                setIsAppealCreated(true);
            }
        });
    }
    return <form onSubmit={createAppeal} className="bg-light col-4 p-3">
    <h1 className="p-4 text-center">Write an appeal</h1>
    {isAppealCreated && <p className='d-block text-center text-success'>Appeal created successfully</p>}
    <p className="d-block text-center"><small>Write an appeal only in case if you was scammed. The
        tech support will review your appeal and report as soon as possible.</small></p>
    <div className="mb-3">
      <label for="sellerEmail" className="form-label"><b>1.</b>Please, write the email of seller</label>
      <input type="email" className="form-control" placeholder='Example: evil_scammer@gmail.com' 
      id="sellerEmail" aria-describedby="emailHelp" ref={sellerEmailRef} />
    </div>
    <div className="mb-3">
      <label for="receipt" className="form-label"><b>2.</b>Please, attach your receipt of payment of fiat.
       By these means, we will be sure that you got scammed.</label>
        <input class="form-control form-control-lg" id="receipt" type="file" ref={receiptRef} />
    </div>
    <button type="submit" className="btn btn-outline-primary">Submit</button>
  </form>;
}