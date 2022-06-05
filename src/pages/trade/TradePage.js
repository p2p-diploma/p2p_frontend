import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTradeDetail } from "../../lib/trade_api";
import { getLotDetail } from "../../lib/lot_api";
import TradeHeader from "./TradeHeader";
import TradeBody from "./TradeBody";

export default function TradePage(props) {
  const params = useParams();

  const { lotId, tradeId } = params;
  const [lotData, setLotData] = useState({});
  const [tradeData, setTradeData] = useState({});

  useEffect(() => {
    getTradeDetail(tradeId).then((data) => setTradeData(data));
  }, [tradeId]);

  useEffect(() => {
    getLotDetail(lotId).then((data) => setLotData(data));
  }, [lotId]);

  return (
    <main className="container mt-5">
      <TradeHeader lotData={lotData} />
      <TradeBody lotData={lotData} tradeData={tradeData} />
    </main>
  );
}
