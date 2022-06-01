import { Link } from "react-router-dom";

import classes from "./LotItem.module.css";
import LimitObject from "./LimitObject";
import PaymentObject from "./PaymentObject";

const LotItem = (props) => {
  return (
    <tr>
      <td>{props.seller_id}</td>
      <td>{props.price} KZT</td>
      <td>
        <LimitObject
          supply={props.supply}
          min_limit={props.min_limit}
          max_limit={props.max_limit}
          currency={props.currency}
        />
      </td>
      <td>
        <PaymentObject payments={props.payment} />
      </td>
      <td className={classes["flex-td"]}>
        <Link to={`/lot/${props.id}`} className={classes.btn}>
          {props.lot_type}
        </Link>
      </td>
    </tr>
  );
};

export default LotItem;
