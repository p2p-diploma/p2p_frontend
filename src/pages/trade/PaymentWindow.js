const PaymentWindow = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button bg-light collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          {props.payment.bank_name}
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
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
    </div>
  );
};

export default PaymentWindow;
