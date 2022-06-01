import classes from "./LimitObject.module.css";

const LimitObject = (props) => {
  return (
    <div className={classes.limit}>
      <div className={classes["limit-row"]}>
        <p>Available</p>
        <p>
          {props.supply} {props.currency}
        </p>
      </div>
      <div className={classes["limit-row"]}>
        <p>Limit</p>
        <p>
          {props.min_limit} - {props.max_limit} {props.currency}
        </p>
      </div>
    </div>
  );
};

export default LimitObject;
