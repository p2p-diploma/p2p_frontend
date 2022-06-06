const TradeHeader = (props) => {
  if (props.lotData.crypto_currency === undefined) {
    return <></>;
  }

  return (
    <div className="d-flex justify-content-between align-items-center mx-auto col-md-10">
      <div className="fs-2 fw-bold row">
        Buy {props.lotData.crypto_currency.toUpperCase()}
      </div>
      <div className="d-flex fs-5">
        <div className="fw-bold">Established price</div>
        <div>
          : {props.lotData.price} {props.lotData.fiat_currency.toUpperCase()}{" "}
          for 1 {props.lotData.crypto_currency.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
