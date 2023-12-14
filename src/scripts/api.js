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
    checkCookie();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${WebexToken}`);

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
    checkCookie();
    destination = 'kevin.redlich-gaube@haeusler.de';
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${WebexToken}`);

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

    fetch(
        `https://calldata1.haeusler.local:4443/webExBot/getCustomerInformation/${obj.data.remoteParticipants[0].callerID}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: data,
        }
    )
        .then(response => {
            // Überprüfe, ob die Anfrage erfolgreich war (Status-Code im Bereich 200-299)
            if (!response.ok) {
                throw new Error(`HTTP-Fehler! Status: ${response.status}`);
            }

            // Extrahiere die Antwortdaten und gib sie in der Konsole aus
            return response.json();
        })
        .then(data => {
            console.log("Antwortdaten:", data);
            loggCall(callState, data);
        })
        .catch(error => {
            console.error("Fehler bei der Anfrage:", error);
        });
}

function getCustomerDataTest(tel){
    fetch(
        `https://calldata1.haeusler.local:4443/webExBot/getCustomerInformation/${tel}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(response => {
            // Überprüfe, ob die Anfrage erfolgreich war (Status-Code im Bereich 200-299)
            if (!response.ok) {
                throw new Error(`HTTP-Fehler! Status: ${response.status}`);
            }

            // Extrahiere die Antwortdaten und gib sie in der Konsole aus
            return response.json();
        })
        .then(data => {
            console.log("Antwortdaten:", data);
        })
        .catch(error => {
            console.error("Fehler bei der Anfrage:", error);
        });
}