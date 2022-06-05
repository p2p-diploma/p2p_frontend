import './AppealsPage.css';
import AppealsList from "../../components/appeals/AppealsList";
import AppealForm from '../../components/appeals/AppealForm';
export default function AppealsPage() {
  return (
    <div className="container-fluid bg-dark p-2">
      <h3 className="text-right"><button className="btn btn-outline-danger p-2">Sign out</button></h3>
      <h1 className="display-6 text-center text-light">Appeals</h1>
      <div className='mb-4'>
        <AppealForm transactionId='1fdfb686-34d2-4112-919c-5519fd42227d' />
      </div>
      <div className="container">
        <AppealsList />
      </div>
    </div>
  );
}