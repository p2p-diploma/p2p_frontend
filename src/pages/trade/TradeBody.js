import TradeLeftMenu from "./TradeLeftMenu";
import TradeRightMenu from "./TradeRightMenu";

const TradeBody = (props) => {
  if (props.tradeData.created_at === undefined) {
    return <></>;
  }

  if (props.lotData.crypto_currency === undefined) {
    return <></>;
  }

  const FIFTEEN_MINS_IN_MS = 15 * 60 * 1000;
  const targetDate =
    new Date(props.tradeData.created_at).getTime() + FIFTEEN_MINS_IN_MS;

  return (
    <div className="d-flex justify-content-between align-items-center mx-auto">
      <TradeLeftMenu lotData={props.lotData} tradeData={props.tradeData} />
      <TradeRightMenu tradeData={props.tradeData} targetDate={targetDate} />
    </div>
  );
};

export default TradeBody;
