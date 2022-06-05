import { Fragment, useState } from 'react';
import './LotsFilter.css';
import { LotsList } from './LotsList';
export default function LotsFilter(){
    const [filter, setFilter] = useState({
        currencyType: 'eth', sellType: 'sell', paymentType: 'all', email: ''
    });

    const onChangeCurrency = e => {
        setFilter(prevState => ({
            ...prevState,
            currencyType: e.target.innerHTML.toLowerCase()
        }));
    }
    const onChangeSell = e => {
        setFilter(prevState => ({
            ...prevState,
            sellType: e.target.innerHTML.toLowerCase()
        }));
    }
    const onChangePayment = e => {
        let paymentType = '';
        switch (e.target.value){
            case '1':
                paymentType = 'all'; break;
            case '2':
                paymentType = 'Kaspi'; break;
            case '3':
                paymentType = 'Halyk'; break;
            case '4':
                paymentType = 'Jusan'; break;
            default:
                paymentType = 'all'; break;
        }
        setFilter(prevState => ({
            ...prevState,
            paymentType: paymentType
        }));
    }

    const onChangeEmail = e => {
        e.preventDefault();
        let email = document.getElementById('searchEmail').value;
        setFilter(prevState => ({
            ...prevState,
            email: email
        }));
    }

    return <Fragment>
    <div className="filter row mb-4">
    <div className="col-md-2 text-center selectedFilter">
        {filter.currencyType === 'eth' && <Fragment><button type="button" className="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">ETH</button>
        <button type="button" onClick={onChangeCurrency} className="btn btn-light" data-bs-toggle="button">ERC20</button></Fragment>
        }
        {filter.currencyType === 'erc20' && <Fragment><button type="button" onClick={onChangeCurrency} className="btn btn-light" data-bs-toggle="button">ETH</button>
        <button type="button" className="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">ERC20</button></Fragment>}
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2 text-center selectedFilter">
        {filter.sellType === 'buy' && <Fragment>
        <button type="button" className="btn btn-success active" data-bs-toggle="button" aria-pressed="true">Buy</button>
        <button type="button" onClick={onChangeSell} className="btn btn-light" data-bs-toggle="button">Sell</button></Fragment>}
        {filter.sellType === 'sell' && <Fragment>
        <button type="button" onClick={onChangeSell} className="btn btn-light" data-bs-toggle="button">Buy</button>
        <button type="button" className="btn btn-success active" aria-pressed="true" data-bs-toggle="button">Sell</button></Fragment>}

    </div>
    <div className="col-md-1"></div>
    <div className="col-md-3">
        <form onSubmit={onChangeEmail}>
            <div className="input-group">
                <input type="search" id="searchEmail" className="form-control rounded" placeholder="Search"
                aria-label="Search" aria-describedby="search-addon" />
                <button type="submit" className="btn btn-outline-primary">Search</button>
            </div>
        </form>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2">
        <select className="form-select" onChange={onChangePayment} aria-label="Default select example">
            <option defaultValue={1} value="1">All payments</option>
            <option value="2">Kaspi</option>
            <option value="3">Halyk</option>
            <option value="4">Jusan</option>
          </select>
    </div>
</div>
<LotsList filter={filter} />
</Fragment>;
}