const app = new window.Webex.Application();


function debug(key, value) {
  fetch(`https://bac7-2003-c4-3f06-63d8-d4c1-9bef-4311-b201.ngrok-free.app/debug?${key}&${value}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          {
              "roomId": 'Y2lzY29zcGFyazovL3VybjpURUFNOmV1LWNlbnRyYWwtMV9rL1JPT00vM2JhNDYzOTAtODIxNC0xMWVlLTkyNWEtYWZhNzM0MTZmNGM5',
              "text": "hello Kev"
          }
      )
  })
      .then(response => response.text())
      .then(response => console.log(JSON.stringify(response)));
};

debug("test2","hauptfunktionalität");

// app.onReady().then(() => {
//   app
//     .listen()
//     .then(() => {

//       app.on("sidebar:callStateChanged", (call) => {
//         console.log("Call state changed. New call object:", call);
//       });

//       app.on("sidebar:callStateChanged", (call) => {
//         if (call.state = "Started") { 
//             console.log("hier wird angerufen");
//         } 
//       }); 

//       app.on("application:viewStateChanged", (payload) => {
//         console.log("TATDADJGALÖSKDGJF ASLÖDKGJ AÖSLDJG ÖALSDFJG");
//       });

//       app.on("meeting.infoChanged", (event) => {
//         console.log("meetinginfochanged");
//     })
//     app.on("application:themeChanged", (event) => {
// console.log("themechanged");
//     })
//     })
//     .catch((reason) => {
//       console.log(
//         "test fehler amena", reason
//       );
//     });
// });
