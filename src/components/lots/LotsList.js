import { useEffect, useState } from "react";
import { LotItem } from "./LotItem";
import LotsPagination from "./LotsPagination";
import {fetchLots as getLots, fetchLotsCount } from '../../lib/lot_api';
/*{
    "id": 1,
    "payment": [
        {
            "id": 1,
            "user_email": "user1@example.com",
            "bank_name": "Kaspi",
            "requisite_number": "1234 5678 9123 4567",
            "payment_type": "phone"
        }
    ],
    "lot_initiator_email": "user1@example.com",
    "initiator_wallet": "0x642Fc66B09FBBFE6455A54959cB272Bb30eFd829",
    "price": 450000.0,
    "supply": 0.5,
    "min_limit": 40000.0,
    "max_limit": 80000.0,
    "lot_type": "sell",
    "fiat_currency": "kzt",
    "crypto_currency": "eth",
    "is_active": true
} */




export const LotsList = () => {
  const [lotsInfo, setLotsInfo] = useState({
    lots: [], totalCount: 1
  });
  const [currentPage, setCurrentPage] = useState(1);
  const onLotsChange = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchLotsCount().then(count => {
      getLots(currentPage).then(lots => {
          setLotsInfo({lots: lots, totalCount: count});
      });
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
  
  <LotsPagination currentPage={currentPage} totalCount={lotsInfo.totalCount} pageSize={5} onPageChange={page => onLotsChange(page)} />
  </div>
  ;
}