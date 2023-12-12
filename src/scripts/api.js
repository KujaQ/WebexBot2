function restDebugger(key, value, data) {
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

function SDKHook(key, value, data) {

    const obj = JSON.parse(data);
    // console.log("🚀 ~ file: api.js:17 ~ SDKHook ~ data:", data)
    // var phoneNumberData = obj.data.remoteParticipants.callerID;
    // console.log(`Test: ${phoneNumberData}`);
    
    if (obj.data.callType !== "Received") return

    if (obj.data.id !== id) {
        connected = false;

        if (obj.data.state === "Connected") {
            connected = true;
            id = obj.data.id;
            getCustomerData("Angenommener Anruf", obj);
            // loggCall("Angenommener Anruf", obj);
        }

        if ((obj.data.state === "Disconnected") & (connected === false)) {
            connected = true;
            id = obj.data.id;
            getCustomerData("Verpasster Anruf", obj);
            // loggCall("Verpasster Anruf", obj);
        }
    }
}

function recall(destination) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9pZGJyb2tlci1ldS53ZWJleC5jb21cL2lkYiIsImNvbS5jaXNjby51c2VyLnV1aWQiOiJkYmNmN2MyYS03MDA4LTUwMjMtOTUxMC01ZGQ0MDY1NTU0YmYiLCJwaWlfZW5hYmxlZCI6ZmFsc2UsImdpdmVuX25hbWUiOiIiLCJhdWQiOiJZMmx6WTI5emNHRnlhem92TDNWekwwRlFVRXhKUTBGVVNVOU9MelU1WlRaa05XUmpMV014TURJdE5HTTNaQzFpTlRabExUQm1ZbUl6WXpoak5HVm1NUSIsImNvbS5jaXNjby51c2VyLm9yZ2lkIjoiZjkzMjE4NWUtZDQzMS01MmIyLWEwMWItMTdlNzA5NWZiZGUxIiwibmFtZSI6IiIsImNvbS5jaXNjby51c2VyLmxldmVsIjpbImVuaGFuY2VkIl0sImV4cCI6MTcwMTg0Nzg5OCwiaWF0IjoxNzAxNzYxNDk4LCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoiIn0.KpV0h-C9o2tWXBQKdMCvV4qV9t9hTrxS_wrZyfX9Iwy6i-9tYUZtEBEx9LBUN6h5_nvIUH8P1qdDOUdoAK0zna4i8KMkAMcUDLZHu1rJLR19HqFHQ69Ai6svpG8ZUHFUoIkM1HuLJNeuTarQvmJVfcExcil7VnsTjRnD4_YzF42M2jzfP7pv45wnOp9SZjgmVhnxWYXjno-EYBOhcPnKxeY3d1-fiKzNJNS19GuQtzpG2WKTLb1hRAjSuO4zvB33R29-XY5H1LyGRrYv156Staqehrjqc3sTyqasJlSoPzaa-0rsVtJ7slfwPN-pt2BsJ27AiDBBhcWuO11p01sJbQ");

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

function mailTo() {
    console.log('mail gesendet');
    destination = 'testkevboy@gmail.com';
    body = 'testshit';
    window.location.href = `mailto:${destination}?subject=Bitte um Kundenrückruf&body=${body}`;
}

function pnTo() {
    console.log('pn gesendet');
    alert('pn gesendet');
    destination = 'kevin.redlich-gaube@haeusler.de';
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer ZWE1Njk4NTAtNTc3Ny00NWRhLTk1OTktYWNjNGVkM2Y5ZmNlMDZlYTgxNjctNDEx_PE93_076d4c86-4654-4ddb-b8f3-eaf4e6d62e1d");

    var raw = JSON.stringify({
        "toPersonEmail": `${destination}`,
        "text": "test"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://webexapis.com/v1/messages", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function getCustomerData(callState, obj) {
console.log("🚀 ~ file: api.js:98 ~ getCustomerData ~ obj:", obj)
console.log('testasdfklhjas dljkfh ' + obj.remoteParticipants.callerID);
console.log("🚀 ~ file: api.js:98 ~ getCustomerData ~ callState:", callState)

let phoneNumber = '+4917615206382'

    fetch(
        `https://calldata1.haeusler.local:4443/webExBot/getCustomerInformation/${phoneNumber}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: data,
        }
    )
    .then(response => {
        console.log(`response:${response}`);
    })
    .then( json => {
        console.log(json);
        loggCall(callState, json);
    })
    .then( data => {
        console.log(`data: ${data}`);
    })
    .catch(error => {
        console.error(`Fetch error:`, error.message);
    });
}