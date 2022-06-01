import { useEffect } from "react";

import LotList from "../components/lots/LotList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_DATA = [
  {
    id: 1,
    payment: [
      {
        id: 1,
        seller_id: "alem@gmail.com",
        bank_name: "kaspi",
        requisite_number: "87079209311",
        payment_type: "phone",
      },
      {
        id: 2,
        seller_id: "alem@gmail.com",
        bank_name: "halyk",
        requisite_number: "1111 2222 3333 4444",
        payment_type: "bank_number",
      },
    ],
    seller_id: "alem@gmail.com",
    price: 100.0,
    supply: 0.0,
    min_limit: 0.0,
    max_limit: 0.0,
    lot_type: "sell",
    currency: "kzt",
  },
  {
    id: 2,
    payment: [
      {
        id: 3,
        seller_id: "alem1@gmail.com",
        bank_name: "kaspi",
        requisite_number: "87079209311",
        payment_type: "phone",
      },
      {
        id: 4,
        seller_id: "alem1@gmail.com",
        bank_name: "halyk",
        requisite_number: "1111 2222 3333 4444",
        payment_type: "bank_number",
      },
    ],
    seller_id: "alem1@gmail.com",
    price: 100.0,
    supply: 20,
    min_limit: 0.0,
    max_limit: 0.0,
    lot_type: "buy",
    currency: "kzt",
  },
];

const Lots = () => {
  // const {
  //   sendRequest,
  //   status,
  //   data: loadedLots,
  //   error,
  // } = useHttp(getAllQuotes, true);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

  // if (status === "pending") {
  //   return (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  // if (status === "error") {
  //   return <div className="centered focused">{error}</div>;
  // }

  // if (status === "completed" && (!loadedLots || loadedLots.length === 0)) {
  //   return <NoQuotesFound />;
  // }

  return <LotList lots={DUMMY_DATA} />;
};

export default Lots;
