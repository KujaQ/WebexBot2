const app = new window.Webex.Application();

const url = 'https://webexapis.com/v1/telephony/calls/dial';
const bearerToken = 'ZjE5N2RjNzEtNDk5Zi00OGVmLWEwYWMtMTZkMWU0YmViYzMyNmYyMjZkN2UtZDEy_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b';
var id = "";
var connected = false;

function debug(key, value, data) {
  const obj = JSON.parse(data);

  if (obj.data.callType !== "Received") return
  
  if (obj.data.id !== id) {
    connected = false;

    if (obj.data.state === "Connected") {
      connected = true;
      id = obj.data.id;
      log("Angenommener Anruf", obj);
    }
    
    if ((obj.data.state === "Disconnected") & (connected === false)) {
      connected = true;
      id = obj.data.id;
      log("Verpasster Anruf", obj);
    }
  }
}

function restDebugger(key, value, data){
  fetch(
    ` https://cf3c-2003-c4-3f06-6373-4da6-bd65-c22-baac.ngrok-free.app/debug?${key}&${value}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: data,
    }
  );
}

function recall(destination){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer ZjE5N2RjNzEtNDk5Zi00OGVmLWEwYWMtMTZkMWU0YmViYzMyNmYyMjZkN2UtZDEy_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b");
  
  var raw = JSON.stringify({
    "destination": `${destination}`
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://webexapis.com/v1/telephony/calls/dial", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}