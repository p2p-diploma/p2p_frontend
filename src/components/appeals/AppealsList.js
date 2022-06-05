import React, { useState, useEffect, Fragment } from "react";
import AppealRow from "./AppealRow";
import AppealModal from './AppealModal';
import { fetchAppeals, fetchAppealsCount } from '../../lib/appeals_api';
import AppealsPagination from "./AppealsPagination";
export default function AppealsList() {
  const [appealsInfo, setAppealsInfo] = useState({
    appeals: [], totalCount: 1
  });
  const [currentPage, setCurrentPage] = useState(1);
  const onAppealsChange = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchAppealsCount().then(count => {
      fetchAppeals(currentPage).then(appeals => {
          setAppealsInfo({appeals: appeals, totalCount: count});
      });
    });
    }, [currentPage]);

  return (
    <Fragment>
      <table className="table table-hover table-striped table-responsive table-dark">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {appealsInfo.appeals.map(a => <AppealRow key={a.id} id={a.id} transactionId={a.transactionId}
            buyerEmail={a.buyerEmail} sellerEmail={a.sellerEmail} createdAt={a.createdAt} />)}
        </tbody>
      </table>
      {appealsInfo.appeals.map(a => <AppealModal key={a.id} id={a.id}/>)}
      <AppealsPagination onPageChange={page => onAppealsChange(page)} currentPage={currentPage} totalCount={appealsInfo.totalCount}
      pageSize={5}  />
    </Fragment>
  );
}