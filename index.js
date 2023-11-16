const app = new window.Webex.Application();
app.onReady().then(() => {
  app
    .listen()
    .then(() => {
      console.log(testKRE);

      app.on("sidebar:callStateChanged", (call) => {
        console.log("Call state changed. New call object:", call);
      });

      app.on("application:viewStateChanged", (payload) => {
        console.log("TATDADJGALÖSKDGJF ASLÖDKGJ AÖSLDJG ÖALSDFJG");
      })
    })
    .catch((reason) => {
      console.error(
        "test fehler amena"
      );
    });
});
