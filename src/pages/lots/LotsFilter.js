import './LotsFilter.css';
export default function LotsFilter(){
    return <div className="filter row mb-4">
    <div className="col-md-2 text-center selectedFilter">
        <button type="button" className="btn btn-warning active" data-bs-toggle="button" aria-pressed="true">ETH</button>
        <button type="button" className="btn btn-light" disabled data-bs-toggle="button">ERC20</button>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2 text-center selectedFilter">
        <button type="button" className="btn btn-success active" data-bs-toggle="button" aria-pressed="true">Buy</button>
        <button type="button" className="btn btn-light" disabled data-bs-toggle="button">Sell</button>
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
            <option selected>All payments</option>
            <option value="1">Kaspi</option>
            <option value="2">Halyk</option>
            <option value="3">Jusan</option>
          </select>
    </div>
</div>;
}