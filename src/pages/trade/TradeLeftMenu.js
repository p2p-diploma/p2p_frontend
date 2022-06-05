import PaymentWindow from "./PaymentWindow";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { approveTrade } from "../../lib/trade_api";
const payload = Cookies.get("jwt-access");
const my_email = payload ? jwt_decode(payload)["user_id"] : "";

const TradeLeftMenu = (props) => {
  console.log(props.tradeData);
  console.log(my_email);

  const onApprove = () => {
    approveTrade(props.tradeData.id);
  };

  return (
    <div className="d-flex flex-column col-md-6 align-items-center justify-content-around">
      <div className="d-flex flex-column">
        <div className="d-flex fs-5">
          <div className="fw-bold">Trade Status</div>
          <div>: {props.tradeData.status} </div>
        </div>
        <div className="d-flex fs-5">
          <div className="fw-bold">You will pay</div>
          <div>
            : {props.tradeData.fiat_amount}{" "}
            {props.tradeData.fiat_type.toUpperCase()}
          </div>
        </div>
        <div className="d-flex fs-5">
          <div className="fw-bold">You will receive</div>
          <div>
            : {props.tradeData.amount}{" "}
            {props.tradeData.crypto_type.toUpperCase()}
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column bg-light justify-content-evenly p-3"
        style={{ height: "400px", width: "50%", maxWidth: "100%" }}
      >
        <div className="d-flex flex-column align-items-center">
          {props.lotData.payment.map((p) => {
            switch (p.bank_name) {
              case "Kaspi":
                return (
                  <PaymentWindow
                    payment={p}
                    image={
                      "https://play-lh.googleusercontent.com/VzuwBDTtj6qCoJWIxikZAJ8Y5I1YGdlxzWhUo3-Xe51J7p_vD-RYtmpb0ffmh64iWeg"
                    }
                    key={p.bank_name}
                  />
                );
              case "Jusan":
                return (
                  <PaymentWindow
                    payment={p}
                    image={
                      "https://yt3.ggpht.com/sBUpXp7ZSwo108NZABpX15K_KXYQ8TuFJa09NBEAZb3Kj8rZ4ArpHT2k_p6FhRpneLgdWH5RG4A=s900-c-k-c0x00ffffff-no-rj"
                    }
                    key={p.bank_name}
                  />
                );
              case "Halyk":
                return (
                  <PaymentWindow
                    payment={p}
                    image={
                      "https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/64/f3/84/64f384cd-69aa-8e1d-5e04-6211aa535865/AppIcon-1x_U007emarketing-0-0-85-220-9.png/1024x1024bb.png"
                    }
                    key={p.bank_name}
                  />
                );
              default:
                return <img alt="bank" />;
            }
          })}
        </div>
        <button
          className="btn btn-primary"
          onClick={onApprove}
          disabled={props.tradeData.initiator === my_email ? false : true}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default TradeLeftMenu;
