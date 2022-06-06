import "dotenv/config";

import TradeLeftMenu from "./TradeLeftMenu";
import TradeRightMenu from "./TradeRightMenu";

const TradeBody = (props) => {
  if (props.tradeData.created_at === undefined) {
    return <></>;
  }

  if (props.lotData.crypto_currency === undefined) {
    return <></>;
  }

  const EXPIRATION_MINS_IN_MS =
    parseInt(`${process.env.REACT_APP_EXPIRATION_MINUTES}`) * 60 * 1000;

  const targetDate =
    new Date(props.tradeData.created_at).getTime() + EXPIRATION_MINS_IN_MS;

  return (
    <div className="d-flex justify-content-between align-items-center mx-auto">
      <TradeLeftMenu lotData={props.lotData} tradeData={props.tradeData} />
      <TradeRightMenu tradeData={props.tradeData} targetDate={targetDate} transactionId={props.tradeData.id} email={props.tradeData.seller_email} />
    </div>
  );
};

export default TradeBody;
