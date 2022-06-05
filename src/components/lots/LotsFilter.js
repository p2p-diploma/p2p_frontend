import { Fragment, useState } from 'react';
import './LotsFilter.css';
export default function LotsFilter(){
    const [currencyType, setCurrencyType] = useState('eth');
    const [sellType, setSellType] = useState('buy');
    const setERC20 = () => {
        setCurrencyType('erc20');
    }
    const setETH = () => {
        setCurrencyType('eth');
    }
    const setSell = () => {
        setSellType('sell');
    }
    const setBuy = () => {
        setSellType('buy');
    }
    return <div className="filter row mb-4">
    <div className="col-md-2 text-center selectedFilter">
        {currencyType === 'eth' && <Fragment><button type="button" className="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">ETH</button>
        <button type="button" onClick={setERC20} className="btn btn-light" data-bs-toggle="button">ERC20</button></Fragment>
        }
        {currencyType === 'erc20' && <Fragment><button type="button" onClick={setETH} className="btn btn-light" data-bs-toggle="button">ETH</button>
        <button type="button" className="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">ERC20</button></Fragment>}
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2 text-center selectedFilter">
        {sellType === 'buy' && <Fragment>
        <button type="button" className="btn btn-success active" data-bs-toggle="button" aria-pressed="true">Buy</button>
        <button type="button" onClick={setSell} className="btn btn-light" data-bs-toggle="button">Sell</button></Fragment>}
        {sellType === 'sell' && <Fragment>
        <button type="button" onClick={setBuy} className="btn btn-light" data-bs-toggle="button">Buy</button>
        <button type="button" className="btn btn-success active" aria-pressed="true" data-bs-toggle="button">Sell</button></Fragment>}

    </div>
    <div className="col-md-1"></div>
    <div className="col-md-3">
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">Search</button>
          </div>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2">
        <select className="form-select" aria-label="Default select example">
            <option defaultValue={1}>All payments</option>
            <option value="1">Kaspi</option>
            <option value="2">Halyk</option>
            <option value="3">Jusan</option>
          </select>
    </div>
</div>;
}