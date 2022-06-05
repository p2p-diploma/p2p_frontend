import { useEffect, useState } from "react";
import { LotItem } from "./LotItem";
import LotsPagination from "./LotsPagination";
import {fetchLots as getLots } from '../../lib/lot_api';

export const LotsList = () => {
  const [lotsInfo, setLotsInfo] = useState({
    lots: [], totalCount: 1
  });
  const [currentPage, setCurrentPage] = useState(1);
  const onLotsChange = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
      getLots(currentPage).then(lots => {
          setLotsInfo({lots: lots.results, totalCount: lots.count});
      });
    }, [currentPage]);

    return <div className="pb-5 pt-5">
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
  </div>
  ;
}