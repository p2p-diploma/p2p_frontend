import { Fragment } from "react";
import LotsFilter from "../../components/lots/LotsFilter";

export default function LotsPage(){
  return (
  <Fragment>
  <h1 className="display-6 text-center p-3">Buy and sell your coins in a fastest way</h1>

  <main className="bg-light container">
      <LotsFilter />
  </main>
  </Fragment>
  );
};
