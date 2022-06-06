import jsCookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRef, useEffect, useState } from 'react';
const payload = jsCookie.get("jwt-access");
const my_email = payload ? jwtDecode(payload)["user_id"] : "";
const signalR = require('@microsoft/signalr');
export default function Chat(props) {
    const messageRef = useRef();
    const [sender, setSender] = useState({email: '', hubConnection: null});

    const onMessage = () => {
        let message = messageRef.current.value;
        alert(props.transactionId);
        sender.hubConnection.invoke("AddToChat", props.transactionId);
        sender.hubConnection.invoke("Send", message, my_email);
    }


    useEffect(() => {
        let email = my_email;
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:3227/chat")
            .build();

        connection.on("Send", function (data) {
            if(data === messageRef.current.value){
                document.getElementById('chatbox').appendChild(<div><div className="me p-2"><a>{data}</a></div>
                </div>);
            } else {
                document.getElementById('chatbox').appendChild(<div><div className="chatter p-2"><a>{data}</a></div></div>);
            }
        });
        connection.start().then(c => setSender({email: email, hubConnection: c}));
    }, []);

    return <div
        className="d-flex flex-column justify-content-start chat"
        style={{ height: "400px", width: "300px", maxWidth: "100%" }}>

        <div className="d-flex justify-content-center p-3 w-100 head">
            <h5>{props.email}</h5>
        </div>

        <div className="d-flex flex-column h-75 w-100 p-3" id="chatbox" style={{ overflowY: "scroll" }}>
            <div><div className="chatter p-2"><a>Hi, send me money</a></div></div>

            <div>
                <div className="me p-2">
                    <a>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Suscipit qui vel aliquid repudiandae? Soluta, repellat.
                        Molestias accusantium iste quam tenetur eos, doloribus maiores
                        consequuntur adipisci, commodi, quasi animi pariatur quas.
                    </a>
                </div>
            </div>
        </div>

        <div className="d-flex flex-row p-3">
            <input ref={messageRef} className="form-control w-75" type="text" />
            <input onClick={onMessage} className="btn btn-success w-25" type="submit" value="Send" />
        </div>
    </div>;
}
