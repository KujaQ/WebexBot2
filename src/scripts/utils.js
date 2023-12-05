/**
 * Displays a log of information onto the page
 * @param {String} type Label of the information about to be logged
 * @param {Object} data Object that can be JSON stringified
 */


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

function toggleActive(event) {
  var call = event.target.closest('.call');
  if (call.classList.contains('inactiveCall')) {
    call.classList.remove('inactiveCall');
  } else {
    call.classList.add('inactiveCall');
  }
  if (call) {
    var childDivs = call.querySelectorAll('div');

    childDivs.forEach(function (childDiv) {
      if (childDiv.classList.contains('callState')) return

      if (childDiv.classList.contains('personalData')) {
        if (childDiv.classList.contains('active')) {
          childDiv.classList.remove('active');
        } else {
          childDiv.classList.add('active')
        }
      }

      if ((childDiv.classList.contains('inactive') && (!childDiv.classList.contains('personalData')))) {
        childDiv.classList.remove('inactive');
      } else if ((!childDiv.classList.contains('inactive') && (!childDiv.classList.contains('personalData')))) {
        childDiv.classList.add('inactive')
      }
    });

    var childh2 = call.querySelectorAll('h2');
    childh2.forEach(function (childh2) {
      if (childh2.classList.contains('active')) {
        childh2.classList.remove('active');
      } else {
        childh2.classList.add('active');
      }
    });
  }
}

function loggCall(type, data) {

  var darkModeActive = document.getElementById('darkmode-toggle');

  var currentDateTime = getCurrentDateTime();
  
  var calls = document.getElementById('calls');

  var call = document.createElement('div');
  call.classList.add('call');
  call.classList.add('inactiveCall');
  if (darkModeActive.checked){call.classList.add('dark-theme')};
  call.addEventListener('click', toggleActive)

  var callState = document.createElement('div');
  callState.classList.add('callState');

  var personalData = document.createElement('div');
  personalData.classList.add('personalData');
  personalData.classList.add('active');
  if (darkModeActive.checked){personalData.classList.add('dark-theme')};
  var headingElement = document.createElement('h2');
  headingElement.classList.add('active');
  if (darkModeActive.checked){headingElement.classList.add('dark-theme')};
  headingElement.textContent = 'Persönliche Daten:';
  personalData.appendChild(headingElement);

  var contactDetails = document.createElement('div');
  contactDetails.classList.add('contactDetails');
  contactDetails.classList.add('inactive');
  if (darkModeActive.checked){contactDetails.classList.add('dark-theme')};
  var headingElement = document.createElement('h2');
  headingElement.classList.add('active');
  if (darkModeActive.checked){headingElement.classList.add('dark-theme')};
  headingElement.textContent = 'Kontaktinformationen:';
  contactDetails.appendChild(headingElement);

  var vehicleData = document.createElement('div');
  vehicleData.classList.add('vehicleData');
  vehicleData.classList.add('inactive');
  if (darkModeActive.checked){vehicleData.classList.add('dark-theme')};
  var headingElement = document.createElement('h2');
  headingElement.classList.add('active');
  if (darkModeActive.checked){headingElement.classList.add('dark-theme')};
  headingElement.textContent = 'Fahrzeuginformationen:';
  vehicleData.appendChild(headingElement);

  var sellerInformations = document.createElement('div');
  sellerInformations.classList.add('sellerInformations');
  sellerInformations.classList.add('inactive');
  if (darkModeActive.checked){sellerInformations.classList.add('dark-theme')};
  var headingElement = document.createElement('h2');
  headingElement.classList.add('active');
  if (darkModeActive.checked){headingElement.classList.add('dark-theme')};
  headingElement.textContent = 'Verkäuferinformationen:';
  sellerInformations.appendChild(headingElement);

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var header = document.createElement("p");
  var headerMessage = document.createTextNode(
    `${currentDateTime}: ${type}`
  );

  if (type === "Angenommener Anruf") {
    header.classList.add("accepted-call");
  } else {
    header.classList.add("missed-call");
  }

  header.appendChild(headerMessage);
  callState.prepend(header);

  //Person
  var customerTel = document.createElement("li");
  var customerTelText = document.createTextNode(
    `Tel. Nummer: ${data.data.remoteParticipants[0].callerID}`
  );
  customerTel.appendChild(customerTelText);

  var customerTel2 = document.createElement("li");
  var customerTel2Text = document.createTextNode(
    `Tel. Nummer 2: +4917615206382`
  );
  customerTel2.appendChild(customerTel2Text);

  var customerTel3 = document.createElement("li");
  var customerTel3Text = document.createTextNode(
    `Tel. Nummer 3: +4917615206382`
  );
  customerTel3.appendChild(customerTel3Text);

  var customerTel4 = document.createElement("li");
  var customerTel4Text = document.createTextNode(
    `Tel. Nummer 4: +4917615206382`
  );
  customerTel4.appendChild(customerTel4Text);

  var customerMail = document.createElement("li");
  var customerMailText = document.createTextNode(
    `Email Privat: KarlHeinz@gmx.de`
  );
  customerMail.appendChild(customerMailText);

  var customerMail2 = document.createElement("li");
  var customerMail2Text = document.createTextNode(
    `Email Beruflich: KarlHeinzArbeit@gmx.de`
  );
  customerMail2.appendChild(customerMail2Text);

  var customerName = document.createElement("li");
  var customerNameText = document.createTextNode(
    `Name: Karl Heinz`
  );
  customerName.appendChild(customerNameText);

  var customerStreet = document.createElement("li");
  var customerStreetText = document.createTextNode(
    `Adresse: Bachstraße 17`
  );
  customerStreet.appendChild(customerStreetText);

  var customerPlz = document.createElement("li");
  var customerPlzText = document.createTextNode(
    `Plz: 56659`
  );
  customerPlz.appendChild(customerPlzText);

  var customerVin = document.createElement("li");
  var customerVinText = document.createTextNode(
    `VIN: WAUZZZ1234567899`
  );
  customerVin.appendChild(customerVinText);

  var customerOrderNo = document.createElement("li");
  var customerOrderNoText = document.createTextNode(
    `Letzte Auftragsnummer: ABC12345`
  );
  customerOrderNo.appendChild(customerOrderNoText);

  var customerOrderDate = document.createElement("li");
  var customerOrderDateText = document.createTextNode(
    `Auftragsdatum: 23.10.23`
  );
  customerOrderDate.appendChild(customerOrderDateText);

  //Fahrzeug
  var vhecileApproval = document.createElement("li");
  var vhecileApprovalText = document.createTextNode(
    `Erstzulassung: 23.10.23`
  );
  vhecileApproval.appendChild(vhecileApprovalText);

  var vehicleColor = document.createElement("li");
  var vehicleColorText = document.createTextNode(
    `Farbe: Mitternachts Pink`
  );
  vehicleColor.appendChild(vehicleColorText);

  var vehiclePlate = document.createElement("li");
  var vehiclePlateText = document.createTextNode(
    `Kennzeichen: GG : WP 420`
  );
  vehiclePlate.appendChild(vehiclePlateText);

  var vehicleCustomerApproval = document.createElement("li");
  var vehicleCustomerApprovalText = document.createTextNode(
    `Kunden Zulassungsdatum: 23.10.23`
  );
  vehicleCustomerApproval.appendChild(vehicleCustomerApprovalText);

  var lastServiceDate = document.createElement("li");
  var lastServiceDateText = document.createTextNode(
    `Letzer Werkstattbesuch: 23.10.23`
  );
  lastServiceDate.appendChild(lastServiceDateText);

  var lastKM = document.createElement("li");
  var lastKMText = document.createTextNode(
    `Letzer KM Stand: 11`
  );
  lastKM.appendChild(lastKMText)

  var salesPerson = document.createElement("li");
  var salesPersonText = document.createTextNode(
    `Name: Peter Schmittinger`
  );
  salesPerson.appendChild(salesPersonText);

  var salesPhone = document.createElement("li");
  var salesPhoneText = document.createTextNode(
    `Telefonnummer Mobil: 0157 123456789`
  );
  salesPhone.appendChild(salesPhoneText);

  var salesPhoneMobil = document.createElement("li");
  var salesPhoneMobilText = document.createTextNode(
    `Telefonnummer: 02652 123456789`
  );
  salesPhoneMobil.appendChild(salesPhoneMobilText);

  var salesEmail = document.createElement("li");
  var salesEmailText = document.createTextNode(
    `Email: Peter Schmittinger`
  );
  salesEmail.appendChild(salesEmailText);

  var emailDiv = document.createElement("div");
  emailDiv.classList.add('emailContainer');
  var emailInput = document.createElement("input");
  emailInput.classList.add('input');
  emailInput.classList.add('is-primary');
  emailInput.classList.add('has-text-weight-bold');
  emailInput.classList.add('has-text-dark');
  emailInput.classList.add('emailInput');
  emailInput.placeholder = 'E-Mail'
  emailDiv.appendChild(emailInput);

  var recallButton = document.createElement('button');
  recallButton.innerHTML = 'Rückruf';
  recallButton.classList.add("button");
  recallButton.classList.add("is-success");

  recallButton.id = 'recallButton';
  recallButton.onclick = function () {
    recall('+4915734692268');
  };

  var mailToButton = document.createElement('button');
  mailToButton.innerHTML = 'Mail Senden';
  mailToButton.classList.add("button");
  mailToButton.classList.add("is-link");

  mailToButton.id = 'mailToButton';
  mailToButton.onclick = function () {
    mailTo("mailToButton", "Event");
  };

  var webexMessageButton = document.createElement('button');
  webexMessageButton.innerHTML = 'PN Senden';
  webexMessageButton.classList.add("button");
  webexMessageButton.classList.add("is-info");

  webexMessageButton.id = 'webexMessageButton';
  webexMessageButton.onclick = function () {
    pnTo("webexMessageButton", "Event");
  };

  var info1Ul = document.createElement("ul");

  info1Ul.appendChild(customerName);
  info1Ul.appendChild(customerPlz);
  info1Ul.appendChild(customerStreet);
  info1Ul.appendChild(customerOrderNo);
  info1Ul.appendChild(customerOrderDate);

  personalData.appendChild(info1Ul);

  var info2Ul = document.createElement("ul");

  info2Ul.appendChild(customerTel);
  info2Ul.appendChild(customerTel2);
  info2Ul.appendChild(customerTel3);
  info2Ul.appendChild(customerTel4);
  info2Ul.appendChild(customerMail);
  info2Ul.appendChild(customerMail2);

  contactDetails.appendChild(info2Ul)

  var info3Ul = document.createElement("ul");

  info3Ul.appendChild(vhecileApproval);
  info3Ul.appendChild(vehicleColor);
  info3Ul.appendChild(vehiclePlate);
  info3Ul.appendChild(vehicleCustomerApproval);
  info3Ul.appendChild(lastServiceDate);
  info3Ul.appendChild(lastKM);

  vehicleData.appendChild(info3Ul);
  // vehicleData.appendChild(pageButtons);

  var info4Ul = document.createElement("ul");

  info4Ul.appendChild(salesPerson);
  info4Ul.appendChild(salesPhone);
  info4Ul.appendChild(salesPhoneMobil);
  info4Ul.appendChild(salesEmail);
  info4Ul.appendChild(customerVin);

  sellerInformations.appendChild(info4Ul);

  emailDiv.appendChild(mailToButton);
  emailDiv.appendChild(webexMessageButton);

  // buttons.appendChild(mailToButton);
  buttons.appendChild(recallButton);
  // buttons.appendChild(webexMessageButton);


  call.appendChild(callState);
  call.appendChild(personalData);
  call.appendChild(contactDetails);
  call.appendChild(vehicleData);
  call.appendChild(sellerInformations);
  call.appendChild(emailDiv);
  call.appendChild(buttons);
  calls.prepend(call);
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
      loggCall("getUser()", u);
    })
    .catch((error) => {
      loggCall(
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
      loggCall(
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
      loggCall("getMeeting()", m);
    })
    .catch((error) => {
      loggCall(
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
      loggCall("getSpace()", s);
    })
    .catch((error) => {
      loggCall(
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
  loggCall('app.isSdkSupported("1.5.0")', app.isSdkSupported("1.5.0"));
  if (!app.isSdkSupported("1.5.0")) {
    return;
  }
  // The redirect from your SSO flow needs to return to this Webex address
  const webexAppRedirectUri =
    "https://oauth-helper-prod.wbx2.com/helperservice/v1/callback";
  // We are utiling mocklab to demonstrate an SSO Flow
  // Be sure to add the SSO domain to your "valid domains" configuration
  const SSOAuthUrl = `https://oauth.mocklab.io/oauth/authorize?response_type=code&redirect_uri=${webexAppRedirectUri}`;

  loggCall("Initiating SSO flow in system browser", true);
  // Initiate SSO flow in system browser
  app
    .initiateSystemBrowserOAuth(SSOAuthUrl)
    .then(function (response) {
      // Promise fulfilled, get authorization code from JSON response
      let authCode = response;
      loggCall("SSO flow got authorization code", authCode);
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

function copyToClipBoard() {
  var content = document.getElementById('textArea');

  navigator.clipboard.writeText(content.textContent)
    .then(() => {
      alert('Text successfully copied to clipboard');
    })
    .catch(err => {
      alert('Unable to copy text to clipboard');
    });
}
