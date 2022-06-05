import './LotItem.css'
export const LotItem = () => {
    return <tr className="lotItem">
      <th className="text-success lead" scope="row">Trader 1</th>
      <td className="price"><b>120000 KZT</b></td>
      <td>
          <div className="row"><div className="col-md-6"><b>Available:</b></div><div className="col-md-6 text-large available">0.51 ETH</div></div>
          <div className="row"><div className="col-md-6"><b>Limit:</b></div><div className="col-md-6 text-large limit">0 - 3.48 ETH</div></div>
      </td>
      <td>
          <img className="pr-5 payment" alt="img"
           src="https://play-lh.googleusercontent.com/VzuwBDTtj6qCoJWIxikZAJ8Y5I1YGdlxzWhUo3-Xe51J7p_vD-RYtmpb0ffmh64iWeg" />
          <img className="payment" alt="img" 
          src="https://yt3.ggpht.com/31UROWnFyNpEtqLoybpTgL0_vv_kE4IU6V6n2tRaaW8AiI1gbdQx64kfBgmZAKNTuQtZ_g3lNw=s900-c-k-c0x00ffffff-no-rj" />
      </td>
      <td><button type="button" className="btn btn-success d-block">Buy ETH</button></td>
            </tr>;
}