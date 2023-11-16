const app = new webex.Application();
app.onReady().then(() => {
  app
    .listen()
    .then(() => {
      console.log(testKRE);

      app.on("sidebar:callStateChanged", (call) => {
        console.log("Call state changed. New call object:", call);
      });
    })
    .catch((reason) => {
      console.error(
        "listen: fail reason=" + webex.Application.ErrorCodes[reason]
      );
    });
});
