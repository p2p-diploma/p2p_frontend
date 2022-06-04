import { LotItem } from "./LotItem";

export const LotsList = () => {
    return <table className="table table-hover table-responsive table-striped">
    <thead>
      <tr>
        <th scope="col">Lots</th>
        <th scope="col">Price</th>
        <th scope="col">Limit/Available</th>
        <th scope="col">Payment</th>
        <th scope="col">Trade</th>
      </tr>
    </thead>
    <tbody>
    <LotItem />
    <LotItem />
    <LotItem />
    </tbody>
  </table>;
}