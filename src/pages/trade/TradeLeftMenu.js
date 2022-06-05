const TradeLeftMenu = (props) => {
  console.log(props.lotData);

  return (
    <div className="d-flex flex-column col-md-6 align-items-center justify-content-around">
      <div className="d-flex flex-column">
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
        <div className="d-inline-flex justify-content-evenly w-100 h-25">
          {props.lotData.payment.map((p) => {
            switch (p.bank_name) {
              case "Kaspi":
                return (
                  <img
                    key={p.bank_name}
                    className="payment"
                    alt="img"
                    src="https://play-lh.googleusercontent.com/VzuwBDTtj6qCoJWIxikZAJ8Y5I1YGdlxzWhUo3-Xe51J7p_vD-RYtmpb0ffmh64iWeg"
                  />
                );
              case "Jusan":
                return (
                  <img
                    key={p.bank_name}
                    className="payment"
                    alt="img"
                    src="https://yt3.ggpht.com/sBUpXp7ZSwo108NZABpX15K_KXYQ8TuFJa09NBEAZb3Kj8rZ4ArpHT2k_p6FhRpneLgdWH5RG4A=s900-c-k-c0x00ffffff-no-rj"
                  />
                );
              case "Halyk":
                return (
                  <img
                    key={p.bank_name}
                    className="payment"
                    alt="img"
                    src="https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/64/f3/84/64f384cd-69aa-8e1d-5e04-6211aa535865/AppIcon-1x_U007emarketing-0-0-85-220-9.png/1024x1024bb.png"
                  />
                );
              default:
                return <img alt="bank" />;
            }
          })}
        </div>

        <div className="p-10 d-flex flex-column justify-content-around h-75">
          <div className="p-10 d-flex flex-column justify-content-center align-items-center">
            <h5>Name and Surname:</h5>
            <a>Sultanbek Khassenov</a>
          </div>

          <div className="p-10 d-flex flex-column justify-content-center align-items-center">
            <h5>Credit Card Number:</h5>
            <a>1234 5678 9123 4567</a>
          </div>

          <button className="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default TradeLeftMenu;
