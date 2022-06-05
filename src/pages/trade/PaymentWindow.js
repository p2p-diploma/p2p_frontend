const PaymentWindow = (props) => {
  return (
    <div>
      <img
        key={props.payment.bank_name}
        className="payment"
        alt="img"
        src={props.image}
      />
      <div className="p-10 d-flex flex-column justify-content-around h-75">
        {props.payment.payment_type === "phone" ? (
          <div className="p-10 d-flex flex-column justify-content-center align-items-center">
            <h5>Phone Number:</h5>
            <a>{props.payment.requisite_number}</a>
          </div>
        ) : (
          <div className="p-10 d-flex flex-column justify-content-center align-items-center">
            <h5>Credit Card Number:</h5>
            <a>{props.payment.requisite_number}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentWindow;
