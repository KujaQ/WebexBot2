const app = new window.Webex.Application();

const url = 'https://webexapis.com/v1/telephony/calls/dial';
const bearerToken = 'MjI5OTVkNjEtY2IzNy00NGYyLTg1ZmUtMjc1ZjNiZWQxMTc1NzRjY2UyOWItYmZj_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b';
var id = "";
var connected = false;

function debug(key, value, data) {
  const obj = JSON.parse(data);

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
  const data = {
    "destination": `${destination}`,
    "endpointId": "Y2lzY29z..."
  };
  datastring = JSON.stringify(data);
  
  fetch(
    url,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      },
      body: datastring,
    }
  );
}
