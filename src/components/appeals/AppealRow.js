export default function AppealRow(props) {
    return (
        <tr>
        <th scope="row">{props.id}</th>
        <td className="text-success">{props.transactionId}</td>
        <td className="text-warning">{props.buyerEmail}</td>
        <td className="text-warning">{props.sellerEmail}</td>
        <td className="text-primary">{props.createdAt}</td>
        <td>
        <button type="button" className="btn btn-success" data-bs-toggle="modal" 
        data-bs-target={`#appeal${props.id}`}>Learn more...</button></td>
        </tr>
    );
}