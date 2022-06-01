import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LotItem from "./LotItem";
import classes from "./LotList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedLots = sortQuotes(props.lots, isSortingAscending);

  const changeSortingHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.lot_header}>
        Buy and sell your crypto in a fastest way
      </div>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <table className={classes["styled-table"]}>
        <thead>
          <tr>
            <th>Lots</th>
            <th>Price</th>
            <th>Limit/Available</th>
            <th>Payment</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {sortedLots.map((lot) => (
            <LotItem
              key={lot.id}
              seller_id={lot.seller_id}
              price={lot.price}
              supply={lot.supply}
              payment={lot.payment}
              min_limit={lot.min_limit}
              max_limit={lot.max_limit}
              lot_type={lot.lot_type}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default QuoteList;
