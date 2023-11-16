const app = new window.Webex.Application();
var id = "";
var connected = false;

function debug(key, value, data) {
  const obj = JSON.parse(data);

  if (obj.data.id !== id) {
    connected = false;

    if (obj.data.state === "Connected") {
      connected = true;
      id = obj.data.id;
      log("anruf", obj);
    }
    
    if ((obj.data.state === "Disconnected") & (connected === false)) {
      connected = true;
      id = obj.data.id;
      log("anruf", obj);
    }
  }

  // fetch(
  //   `https://bac7-2003-c4-3f06-63d8-d4c1-9bef-4311-b201.ngrok-free.app/debug?${key}&${value}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: data,
  //   }
  // );
}
