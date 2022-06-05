import { useRef, useState } from "react";
import { createLot, createPayment } from "../../lib/lot_api";
/*
{
  "price": 500000,
  "supply": 1.3,
  "min_limit": 150000,
  "max_limit": 375000,
  "lot_type": "sell",
  "fiat_currency": "kzt",
  "crypto_currency": "eth",
  "payment": [
    5,6,7
  ]
} 

{
  "bank_name": "Jusan",
  "requisite_number": "1234 5678 9123 4567",
  "payment_type": "bank_number"
}


*/


export default function LotForm(props) {
  const [lotStatus, setLotStatus] = useState({ err: false, mes: '' });
  const priceRef = useRef();
  const supplyRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  const sellRef = useRef();
  const currencyRef = useRef();
  const bankRef = useRef();
  const creditRef = useRef();
  const paymentRef = useRef();

  const onCreatePayment = async () => {
    let payment = {
      bank_name: bankRef.current.value,
      requisite_number: creditRef.current.value,
      payment_type: paymentRef.current.value
    };
    return await createPayment(payment);
  }

  const onCreateLot = (e) => {
    e.preventDefault();
    onCreatePayment().then(payment => {
      if (payment === null || payment === undefined)
        setLotStatus({ err: true, mes: 'Failed to attach payment' });
      else {
        let lot = {
          price: priceRef.current.value,
          supply: supplyRef.current.value,
          min_limit: minRef.current.value,
          max_limit: maxRef.current.value,
          lot_type: sellRef.current.value,
          fiat_currency: "kzt",
          crypto_currency: currencyRef.current.value,
          payment: [
            payment.id
          ]
        };
        createLot(lot).then(r => {
          if (r !== null && r !== undefined)
            window.location.href = '/';
          else
            setLotStatus({ err: true, mes: 'Failed to create lot' });
        });
      }
    });
  }

  return <form onSubmit={onCreateLot} className="col-6 p-5">
    <h2 className="text-center">Lot details</h2>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Choose price:</label>
      <input type="number" className="form-control" id="lotPrice" ref={priceRef} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Choose supply</label>
      <input type="number" step='any' className="form-control" id="exampleInputEmail1" ref={supplyRef} />
    </div>
    <div className="mb-3">
      <label htmlFor="min" className="form-label">Choose minimum limit:</label>
      <input type="number" className="form-control" id="min" ref={minRef} />
    </div>
    <div className="mb-3">
      <label htmlFor="min" className="form-label">Choose maximum limit:</label>
      <input type="number" className="form-control" id="max" ref={maxRef} />
    </div>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Choose type of lot:</label>
      <select className="form-control" ref={sellRef}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Choose type of currency htmlFor lot:</label>
      <select className="form-control" ref={currencyRef}>
        <option value="eth">ETH</option>
        <option value="erc20">ERC20</option>
      </select>
    </div>
    <h3 className="text-center">Requisite details: </h3>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Choose bank:</label>
      <select className="form-control" ref={bankRef}>
        <option value="Kaspi">Kaspi</option>
        <option value="Jusan">Jusan</option>
        <option value="Halyk">Halyk</option>
        <option value="Forte">Forte</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Type your credit card number:</label>
      <input type="text" className="form-control" ref={creditRef} />
    </div>
    <div className="mb-3">
      <label htmlFor="lotPrice" className="form-label">Choose type of currency for lot:</label>
      <select className="form-control" ref={paymentRef}>
        <option value="phone">By phone</option>
        <option value="bank_number">By credit card number</option>
      </select>
    </div>

    {lotStatus.err && <div className="mb-3 text-danger text-center">{lotStatus.mes}</div>}

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>;
}