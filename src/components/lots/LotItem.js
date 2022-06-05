import './LotItem.css';
export const LotItem = (props) => {
    return <tr className="lotItem">
      <th className="text-success lead" scope="row">{props.lot.lot_initiator_email}</th>
      <td className="price">{props.lot.price} KZT</td>
      <td>
          <div className="row"><div className="col-md-4">Available:</div>
          <div className="col-md-8 text-large available">{props.lot.supply} ETH</div></div>
          <div className="row"><div className="col-md-4">Limit:</div>
          <div className="col-md-8 text-large limit">{props.lot.min_limit} - {props.lot.max_limit} KZT</div></div>
      </td>
      <td className={props.lot.payment.length > 1 ? 'd-flex justify-content-between flex-wrap' : ''}>
        {props.lot.payment.map(p => {
            switch(p.bank_name) {
                case "Kaspi":
                    return <img key={p.bank_name} className="payment" alt="img"
           src="https://play-lh.googleusercontent.com/VzuwBDTtj6qCoJWIxikZAJ8Y5I1YGdlxzWhUo3-Xe51J7p_vD-RYtmpb0ffmh64iWeg" />;
                case "Jusan":
                    return <img key={p.bank_name} className="payment" alt="img" 
          src="https://yt3.ggpht.com/sBUpXp7ZSwo108NZABpX15K_KXYQ8TuFJa09NBEAZb3Kj8rZ4ArpHT2k_p6FhRpneLgdWH5RG4A=s900-c-k-c0x00ffffff-no-rj" />;
                case "Halyk":
                    return <img key={p.bank_name} className="payment" alt="img" 
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/64/f3/84/64f384cd-69aa-8e1d-5e04-6211aa535865/AppIcon-1x_U007emarketing-0-0-85-220-9.png/1024x1024bb.png" />;
                default:
                    return <img alt='bank' />
            }
        })}
      </td>
      <td>
        <button type="button" className="btn btn-success d-block">
        {props.lot.crypto_currency === 'eth' && 'Buy ETH'}
        {props.lot.crypto_currency === 'erc20' && 'Buy ERC20'}
        </button>
      </td>
    </tr>;
}