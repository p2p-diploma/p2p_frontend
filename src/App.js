import "dotenv/config";

import { Route, Routes, Navigate } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LotsPage from "./pages/lots/LotsPage";
import Layout from "./components/layout/Layout";
import AppealsPage from "./pages/appeals/AppealsPage";
import WalletOption from "./components/authentication/Wallet/WalletOption";
import LotForm from './components/lots/LotForm';
import Chat from "./components/chat/Chat";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/lots" />} />
        <Route path="/new_wallet" element={<WalletOption />} />
        <Route path="/appeals" element={<AppealsPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />}/>
        <Route path="/lots" element={<LotsPage />} />
        <Route path="/lots/create" element={<LotForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
