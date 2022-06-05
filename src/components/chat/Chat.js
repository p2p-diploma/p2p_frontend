export default function Chat(props) {
  // function chat(){
  //     const hubConnection = new signalR.HubConnectionBuilder()
  //         .withUrl("http://localhost:3227/chat")
  //         .build();

  //     hubConnection.on("Send", function (data) {
  //         let elem = document.createElement("p");
  //         elem.appendChild(document.createTextNode(data));
  //         let firstElem = document.getElementById("chatroom").firstChild;
  //         document.getElementById("chatroom").insertBefore(elem, firstElem);

  //     });

  //     document.getElementById("sendBtn").addEventListener("click", function (e) {
  //         let message = document.getElementById("message").value;
  //         hubConnection.invoke("Send", message, "username");
  //     });
  //     hubConnection.start();
  //     hubConnection.invoke("AddToChat", props.transactionId);
  // }

  return (
    <div class="col-sm-3 col-sm-offset-4 frame">
      <ul></ul>
      <div>
        <div class="msj-rta macro">
          <div class="text text-r" style="background:whitesmoke !important">
            <input class="mytext" placeholder="Type a message" />
          </div>
        </div>
        <div style="padding:10px;">
          <span class="glyphicon glyphicon-share-alt"></span>
        </div>
      </div>
    </div>
  );
}
