import "./Chat.css";
import { TradeTimer } from "./TradeTimer";
import Chat from "../../components/chat/Chat";
const TradeRightMenu = (props) => {
  return (
    <div className="d-flex col-md-6 flex-column">
      <TradeTimer targetDate={props.targetDate} />
      <Chat transactionId={props.transactionId} email={props.email} />
    </div>
  );
};

export default TradeRightMenu;
