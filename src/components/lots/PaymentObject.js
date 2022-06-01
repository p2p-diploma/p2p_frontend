import classes from "./PaymentObject.module.css";

const PaymentObject = (props) => {
  return (
    <div className={classes.payment}>
      {props.payments.map((payment) => (
        <>
          <div className={classes["payment-row"]}>
            <p>
              {payment.bank_name.charAt(0).toUpperCase() +
                payment.bank_name.slice(1)}
            </p>
          </div>
        </>
      ))}
    </div>
  );
};

export default PaymentObject;
