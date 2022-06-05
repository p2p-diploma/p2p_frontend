import "dotenv/config";

import { Route, Routes, Navigate, Link } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LotsPage from "./pages/lots/LotsPage";
import Layout from "./components/layout/Layout";
import Wallet from "./components/profile/Wallet";
import AppealsPage from "./pages/appeals/AppealsPage";
import WalletOption from "./components/authentication/Wallet/WalletOption";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/lots" />} />
        <Route path="/new_wallet" element={<WalletOption />} />
        <Route path="/user" element={<Wallet />} />
        <Route path="/appeals" element={<AppealsPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/lots" element={<LotsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
