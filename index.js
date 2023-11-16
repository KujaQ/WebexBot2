const app = new window.Webex.Application();
app.onReady().then(() => {
  app
    .listen()
    .then(() => {
      console.log(testKRE);

      app.on("sidebar:callStateChanged", (call) => {
        console.log("Call state changed. New call object:", call);
      });

      app.on("sidebar:callStateChanged", (call) => {
        if (call.state = "Started") { 
            console.log("hier wird angerufen");
        } 
      }); 

      app.on("application:viewStateChanged", (payload) => {
        console.log("TATDADJGALÖSKDGJF ASLÖDKGJ AÖSLDJG ÖALSDFJG");
      });

      app.on("meeting.infoChanged", (event) => {
        console.log("meetinginfochanged");
    })
    app.on("application:themeChanged", (event) => {
console.log("themechanged");
    })




    })
    .catch((reason) => {
      console.log(
        "test fehler amena", reason
      );
    });
});
