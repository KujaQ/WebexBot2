const app = new window.Webex.Application();


function debug(key, value, data) {
  fetch(`https://bac7-2003-c4-3f06-63d8-d4c1-9bef-4311-b201.ngrok-free.app/debug?${key}&${value}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: data
});
console.log(data);
log("Anruf", data);


}



// debug("test2","hauptfunktionalität");
