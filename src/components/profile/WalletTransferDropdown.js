import RefundForm from "./RefundForm";
import ShowP2PBalanceDropdown from "./ShowP2PBalanceDropdown";
import TransferForm from "./TransferForm";
import ERC20FundForm from "./ERC20FundForm";

export default function WalletTransferDropdown(props) {
    return <div className="accordion accordion-flush text-center" id="transferOptions">
        <TransferForm walletId={props.walletId} />
        <RefundForm walletId={props.walletId} />
        <ERC20FundForm walletId={props.walletId} />
        <ShowP2PBalanceDropdown />
    </div>;
}