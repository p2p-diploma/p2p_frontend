import { useEffect, useState } from "react";
import { LotItem } from "./LotItem";
import LotsPagination from "./LotsPagination";
import {fetchLots as getLots } from '../../lib/lot_api';

export const LotsList = (props) => {
  const [lotsInfo, setLotsInfo] = useState({
    lots: [], totalCount: 1
  });
  const [currentPage, setCurrentPage] = useState(1);
  const onLotsChange = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
      getLots(currentPage, props.filter).then(lots => {
          if(lots.length === 0){
            setLotsInfo({lots: [], totalCount: 0});
          }
          else setLotsInfo({lots: lots.results, totalCount: lots.count});
      });
    }, [currentPage, props.filter]);

    return (lotsInfo.totalCount > 0 ? <div className="pb-5 pt-5">
    <table className="table table-hover table-responsive table-striped">
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
    {lotsInfo.lots.map(l => <LotItem key={l.id} lot={l}/>)}
    </tbody>
  </table>
  <LotsPagination currentPage={currentPage} totalCount={lotsInfo.totalCount} pageSize={1} onPageChange={page => onLotsChange(page)} />
  </div> : <div className="alert alert-danger text-danger">No lots found.</div>);
}