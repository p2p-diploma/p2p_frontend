import "./Chat.css";
import { TradeTimer } from "./TradeTimer";

const TradeRightMenu = (props) => {
  return (
    <div className="d-flex col-md-6 flex-column">
      <TradeTimer targetDate={props.targetDate} />
      <div
        className="d-flex flex-column justify-content-start chat"
        style={{ height: "400px", width: "300px", maxWidth: "100%" }}
      >
        <div className="d-flex justify-content-center p-3 w-100 head">
          <h5>testseller@gmail.com</h5>
        </div>

        <div
          className="d-flex flex-column h-75 w-100 p-3"
          style={{ overflowY: "scroll" }}
        >
          <div>
            <div className="chatter p-2">
              <a>Hi, send me money</a>
            </div>
          </div>

          <div>
            <div className="me p-2">
              <a>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit qui vel aliquid repudiandae? Soluta, repellat.
                Molestias accusantium iste quam tenetur eos, doloribus maiores
                consequuntur adipisci, commodi, quasi animi pariatur quas.
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row p-3">
          <input className="form-control w-75" type="text" />
          <input className="btn btn-success w-25" type="submit" value="Send" />
        </div>
      </div>
    </div>
  );
};

export default TradeRightMenu;
