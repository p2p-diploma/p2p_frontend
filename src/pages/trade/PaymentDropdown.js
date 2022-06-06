export default function PaymentDropdown(props) {
  return (
    <div
      className="accordion accordion-flush text-center w-100"
      id="transferOptions"
    >
      {props.children}
    </div>
  );
}
