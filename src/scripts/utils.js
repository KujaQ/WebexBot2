/**
 * Displays a log of information onto the page
 * @param {String} type Label of the information about to be logged
 * @param {Object} data Object that can be JSON stringified
 */

var debugMode = false;

function getCurrentDateTime() {
  const now = new Date();

  // Datum
  const day = now.getDate();
  const month = now.getMonth() + 1; // Monate beginnen bei 0
  const year = now.getFullYear();

  // Uhrzeit
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Formatierung mit führenden Nullen
  const formattedDate = `${padNumber(day)}.${padNumber(month)}.${year}`;
  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;

  // Gesamtes Datum und Uhrzeit
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return formattedDateTime;
}

// Hilfsfunktion für führende Nullen
function padNumber(num) {
  return num.toString().padStart(2, '0');
}

function quickdebug(){
  var currentDateTime = getCurrentDateTime();

  var header = document.createElement("p");
  var headerMessage = document.createTextNode(
    `${currentDateTime}: Angenommener Anruf`
  );
  header.classList.add("missed-call");
  header.appendChild(headerMessage);

  var infoUl = document.getElementById("console");
  var infoIl = document.createElement("li");
  //Person
  var customerTel = document.createElement("p");
  var customerTelText = document.createTextNode(
    `Tel. Nummer 1: +4917615206382`
  );
  customerTel.appendChild(customerTelText);

  var customerTel2 = document.createElement("p");
  var customerTel2Text = document.createTextNode(
    `Tel. Nummer 2: +4917615206382`
  );
  customerTel2.appendChild(customerTel2Text);

  var customerTel3 = document.createElement("p");
  var customerTel3Text = document.createTextNode(
    `Tel. Nummer 3: +4917615206382`
  );
  customerTel3.appendChild(customerTel3Text);

  var customerTel4 = document.createElement("p");
  var customerTel4Text = document.createTextNode(
    `Tel. Nummer 4: +4917615206382`
  );
  customerTel4.appendChild(customerTel4Text);

  var customerMail = document.createElement("p");
  var customerMailText = document.createTextNode(
    `Email Privat: KarlHeinz@gmx.de`
  );
  customerMail.appendChild(customerMailText);

  var customerMail2 = document.createElement("p");
  var customerMail2Text = document.createTextNode(
    `Email Beruflich: KarlHeinzArbeit@gmx.de`
  );
  customerMail2.appendChild(customerMail2Text);

  var customerName = document.createElement("p");
  var customerNameText = document.createTextNode(
    `Name: Karl Heinz`
  );
  customerName.appendChild(customerNameText);

  var customerStreet = document.createElement("p");
  var customerStreetText = document.createTextNode(
    `Adresse: Bachstraße 17`
  );
  customerStreet.appendChild(customerStreetText);

  var customerPlz = document.createElement("p");
  var customerPlzText = document.createTextNode(
    `Plz: 56659`
  );
  customerPlz.appendChild(customerPlzText);

  var customerVin = document.createElement("p");
  var customerVinText = document.createTextNode(
    `VIN: WAUZZZ1234567899`
  );
  customerVin.appendChild(customerVinText);

  var customerOrderNo = document.createElement("p");
  var customerOrderNoText = document.createTextNode(
    `Letzte Auftragsnummer: ABC12345`
  );
  customerOrderNo.appendChild(customerOrderNoText);

  var customerOrderDate = document.createElement("p");
  var customerOrderDateText = document.createTextNode(
    `Auftragsdatum: 23.10.23`
  );
  customerOrderDate.appendChild(customerOrderDateText);

  //Fahrzeug
  var vhecileApproval = document.createElement("p");
  var vhecileApprovalText = document.createTextNode(
    `Erstzulassung: 23.10.23`
  );
  vhecileApproval.appendChild(vhecileApprovalText);

  var vehicleColor = document.createElement("p");
  var vehicleColorText = document.createTextNode(
    `Farbe: Mitternachts Pink`
  );
  vehicleColor.appendChild(vehicleColorText);

  var vehiclePlate = document.createElement("p");
  var vehiclePlateText = document.createTextNode(
    `Kennzeichen: GG : WP 420`
  );
  vehiclePlate.appendChild(vehiclePlateText);

  var vehicleCustomerApproval = document.createElement("p");
  var vehicleCustomerApprovalText = document.createTextNode(
    `Kunden Zulassungsdatum: 23.10.23`
  );
  vehicleCustomerApproval.appendChild(vehicleCustomerApprovalText);

  var lastServiceDate = document.createElement("p");
  var lastServiceDateText = document.createTextNode(
    `Letzer Werkstattbesuch: 23.10.23`
  );
  lastServiceDate.appendChild(lastServiceDateText);

  var lastKM = document.createElement("p");
  var lastKMText = document.createTextNode(
    `Letzer KM Stand: 11`
  );
  lastKM.appendChild(lastKMText)

  var salesPerson = document.createElement("p");
  var salesPersonText = document.createTextNode(
    `Name: Peter Schmittinger`
  );
  salesPerson.appendChild(salesPersonText);

  var salesPhone = document.createElement("p");
  var salesPhoneText = document.createTextNode(
    `Telefonnummer Mobil: 0157 123456789`
  );
  salesPhone.appendChild(salesPhoneText);

  var salesPhoneMobil = document.createElement("p");
  var salesPhoneMobilText = document.createTextNode(
    `Telefonnummer: 02652 123456789`
  );
  salesPhoneMobil.appendChild(salesPhoneMobilText);

  var salesEmail = document.createElement("p");
  var salesEmailText = document.createTextNode(
    `Email: Peter Schmittinger`
  );
  salesEmail.appendChild(salesEmailText);

  var hr = document.createElement('hr');
  var hr2 = document.createElement('hr');
  var hr3 = document.createElement('hr');

  var recallButton = document.createElement('button');
  recallButton.innerHTML = 'Rückruf';
  recallButton.classList.add("button");
  recallButton.classList.add("is-success");
  recallButton.onclick = function(){
    restDebugger("recallButton", "Event");
  };

  infoIl.appendChild(header);
  infoIl.appendChild(customerName);
  infoIl.appendChild(customerPlz);
  infoIl.appendChild(customerStreet);
  infoIl.appendChild(customerOrderNo);
  infoIl.appendChild(customerOrderDate);

  infoIl.appendChild(hr);

  infoIl.appendChild(customerTel);
  infoIl.appendChild(customerTel2);
  infoIl.appendChild(customerTel3);
  infoIl.appendChild(customerTel4);
  infoIl.appendChild(customerMail);
  infoIl.appendChild(customerMail2);

  infoIl.appendChild(hr2);

  infoIl.appendChild(vhecileApproval);
  infoIl.appendChild(vehicleColor);
  infoIl.appendChild(vehiclePlate);
  infoIl.appendChild(vehicleCustomerApproval);
  infoIl.appendChild(lastServiceDate);
  infoIl.appendChild(lastKM);

  infoIl.appendChild(hr3);

  infoIl.appendChild(salesPerson);
  infoIl.appendChild(salesPhone);
  infoIl.appendChild(salesPhoneMobil);
  infoIl.appendChild(salesEmail);
  infoIl.appendChild(customerVin);

  infoIl.appendChild(recallButton);

  infoUl.appendChild(infoIl);

  }   


if (debugMode === true){
  quickdebug();
}

function log(type, data) {

  let currentDateTime = getCurrentDateTime();

  var ul = document.getElementById("console");
  var li = document.createElement("li");
  var header = document.createElement("p");
  var headerMessage = document.createTextNode(
    `${currentDateTime}: ${type}`
  );

  if (type === "Angenommener Anruf"){
    header.classList.add("accepted-call");
  } else {
    header.classList.add("missed-call");
  }

  header.appendChild(headerMessage);


  var infoUl = document.createElement("ul");
  var infoIl = document.createElement("il");

  var customerTel = document.createElement("p");
  var customerTelText = document.createTextNode(
    `Tel. Nummer: ${data.data.remoteParticipants[0].callerID}`
  );
  customerTel.appendChild(customerTelText);

  var customerName = document.createElement("p");
  var customerNameText = document.createTextNode(
    `Name: Max Mustermann`
  );
  customerName.appendChild(customerNameText);

  var customerStreet = document.createElement("p");
  var customerStreetText = document.createTextNode(
    `Adresse: Musterstraße 17`
  );
  customerStreet.appendChild(customerStreetText);

  var customerPlz = document.createElement("p");
  var customerPlzText = document.createTextNode(
    `Plz: 4711`
  );
  customerPlz.appendChild(customerPlzText);

  var customerVin = document.createElement("p");
  var customerVinText = document.createTextNode(
    `VIN: WAUZZZ1234567899`
  );
  customerVin.appendChild(customerVinText);
  
  var recallButton = document.createElement('button');
  recallButton.innerHTML = 'Rückruf';
  recallButton.classList.add("button");
  recallButton.classList.add("is-success");
  recallButton.onclick = function(){
    recall('+4915734692268');
  };

  infoIl.appendChild(customerTel);
  infoIl.appendChild(customerName);
  infoIl.appendChild(customerStreet);
  infoIl.appendChild(customerPlz);
  infoIl.appendChild(customerVin);
  infoIl.appendChild(recallButton);
  infoUl.appendChild(infoIl);
  
  li.appendChild(header);
  li.appendChild(infoUl);
  ul.prepend(li);
}

/**
 * Logs the app object from `new window.Webex.Application();`
 */
function handleDisplayAppInfo() {
  log("Webex Embedded App Application Object", app);
}


/**
 * Calls and logs the user data from `app.context.getUser()`
 */
function handleGetUser() {
  app.context
    .getUser()
    .then((u) => {
      log("getUser()", u);
    })
    .catch((error) => {
      log(
        "getUser() promise failed with error",
        Webex.Application.ErrorCodes[error]
      );
    });

  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
      // Add any other headers if needed
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the response data
      log(
        "fetchcalls()",
        response.json()
      );
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Fetch error:', error);
    });

  app.context
    .get
}

/**
 * Calls and logs the meeting data from `app.context.getMeeting()`
 */
function handleGetMeeting() {
  app.context
    .getMeeting()
    .then((m) => {
      log("getMeeting()", m);
    })
    .catch((error) => {
      log(
        "getMeeting() promise failed with error",
        Webex.Application.ErrorCodes[error]
      );
    });
}

/**
 * Calls and logs the space data from `app.context.getSpace()`
 */
function handleGetSpace() {
  app.context
    .getSpace()
    .then((s) => {
      log("getSpace()", s);
    })
    .catch((error) => {
      log(
        "getSpace() promise failed with error",
        Webex.Application.ErrorCodes[error]
      );
    });
}

/**
 * Initiates the System Browser OAuth flow for SSO
 */
function handleSystemBrowserOAuth() {
  // System Browser OAuth Support is only for 1.5.0 SDK and above
  log('app.isSdkSupported("1.5.0")', app.isSdkSupported("1.5.0"));
  if (!app.isSdkSupported("1.5.0")) {
    return;
  }
  // The redirect from your SSO flow needs to return to this Webex address
  const webexAppRedirectUri =
    "https://oauth-helper-prod.wbx2.com/helperservice/v1/callback";
  // We are utiling mocklab to demonstrate an SSO Flow
  // Be sure to add the SSO domain to your "valid domains" configuration
  const SSOAuthUrl = `https://oauth.mocklab.io/oauth/authorize?response_type=code&redirect_uri=${webexAppRedirectUri}`;

  log("Initiating SSO flow in system browser", true);
  // Initiate SSO flow in system browser
  app
    .initiateSystemBrowserOAuth(SSOAuthUrl)
    .then(function (response) {
      // Promise fulfilled, get authorization code from JSON response
      let authCode = response;
      log("SSO flow got authorization code", authCode);
      // Exchange authorization code for a token with ID provider.
      // This part of the OAuth flow is the responsibility of the embedded app, for example:
      // exchangeCodeForToken(authCode);
    })
    .catch(function (reason) {
      console.error(
        "initiateSystemBrowserOAuth() failed with reason=",
        window.Webex.Application.ErrorCodes[reason]
      );
    });
}

function TestRest(){
  fetch(
    `http://127.0.0.1:3000/debug`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: data,
    }
  );

}

function copyToClipBoard() {
  var content = document.getElementById('textArea');

  navigator.clipboard.writeText(content.textContent)
  .then(()=>{
    alert('Text successfully copied to clipboard');
  })
  .catch(err => {
    alert('Unable to copy text to clipboard');
  });
}
