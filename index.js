const app = new window.Webex.Application();


async function gibher(){
  const sidebar = await app.context.getSidebar();
  const calls = await sidebar.getCalls();
  const isBadgeSet = await sidebar.clearBadge();
  const isBadgeSet2 = await sidebar.showBadge({
    badgeType: 'count',
    count: 100
  });

  console.log(sidebar);
  console.log(calls);
  console.log(isBadgeSet);
  console.log(isBadgeSet2);

}

gibher();

app.onReady().then(() => {
  app
    .listen()
    .then(() => {

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
