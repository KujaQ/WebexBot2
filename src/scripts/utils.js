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
  // data = getCustomerData('+4917615206382');
  data = data.getCustomerInformationResult;
  var length = data.vehicleDataList.length - 1;


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
  var customerNo = document.createElement("li");
  var customerNoText = document.createTextNode(
      `Debitor Nr.: ${data.customerData.no}`
  );
  customerNo.appendChild(customerNoText);

  var customerTel = document.createElement("li");
  var customerTelText = document.createTextNode(
      `Tel. nr.: ${data.customerData.handyNoBusiness}`
  );
  customerTel.appendChild(customerTelText);

  var customerTel1 = document.createElement("li");
  var customerTel1Text = document.createTextNode(
      `Tel. mobil beruflich: ${data.customerData.handyNoBusiness}`
  );
  customerTel1.appendChild(customerTel1Text);

  var customerTel2 = document.createElement("li");
  var customerTel2Text = document.createTextNode(
      `Tel. mobil privat: ${data.customerData.handyNoPrivate}`
  );
  customerTel2.appendChild(customerTel2Text);

  var customerTel3 = document.createElement("li");
  var customerTel3Text = document.createTextNode(
      `Tel. beruflich: ${data.customerData.phoneNoBusiness}`
  );
  customerTel3.appendChild(customerTel3Text);

  var customerTel4 = document.createElement("li");
  var customerTel4Text = document.createTextNode(
      `Tel. privat: ${data.customerData.phoneNoPrivate}`
  );
  customerTel4.appendChild(customerTel4Text);

  var customerMail = document.createElement("li");
  var customerMailText = document.createTextNode(
      `Email Privat: ${data.customerData.eMailPrivate}`
  );
  customerMail.appendChild(customerMailText);

  var customerMail2 = document.createElement("li");
  var customerMail2Text = document.createTextNode(
      `Email Beruflich: ${data.customerData.eMailBusiness}`
  );
  customerMail2.appendChild(customerMail2Text);

  var customerName = document.createElement("li");
  var customerNameText = document.createTextNode(`Name: ${data.customerData.firstName} ${data.customerData.lastName}`);
  customerName.appendChild(customerNameText);

  var customerCity = document.createElement("li");
  var customerCityText = document.createTextNode(`Stadt: ${data.customerData.city}`);
  customerCity.appendChild(customerCityText);

  var customerPlz = document.createElement("li");
  var customerPlzText = document.createTextNode(`Plz: ${data.customerData.postCode}`);
  customerPlz.appendChild(customerPlzText);

  var customerVin = document.createElement("li");
  var customerVinText = document.createTextNode(`VIN: ${data.serviceOrder.VIN}`);
  customerVin.appendChild(customerVinText);

  var customerOrderNo = document.createElement("li");
  var customerOrderNoText = document.createTextNode(
      `Letzte Auftragsnummer: ${data.serviceOrder.DocNo}`
  );
  customerOrderNo.appendChild(customerOrderNoText);

  var customerOrderDate = document.createElement("li");
  var customerOrderDateText = document.createTextNode(
      `Auftragsdatum: ${data.serviceOrder.OrderDate}`
  );
  customerOrderDate.appendChild(customerOrderDateText);

  //Fahrzeug
  var vehicleBrand = document.createElement("li");
  var vehicleBrandText = document.createTextNode(`Marke: ${data.vehicleDataList[currentVehicle].brand}`);
  vehicleBrand.appendChild(vehicleBrandText);

  var vehicleModel = document.createElement("li");
  var vehicleModelText = document.createTextNode(`Model: ${data.vehicleDataList[currentVehicle].model}`);
  vehicleModel.appendChild(vehicleModelText);

  var vehicleVIN = document.createElement("li");
  var vehicleVINText = document.createTextNode(`VIN: ${data.vehicleDataList[currentVehicle].vin}`);
  vehicleVIN.appendChild(vehicleVINText);

  var vhecileApproval = document.createElement("li");
  var vhecileApprovalText = document.createTextNode(`Erstzulassung: ${data.vehicleDataList[currentVehicle].firstRegistrationDate}`);
  vhecileApproval.appendChild(vhecileApprovalText);

  var vehicleColor = document.createElement("li");
  var vehicleColorText = document.createTextNode(`Farbe: ${data.vehicleDataList[currentVehicle].Color}`);
  vehicleColor.appendChild(vehicleColorText);

  var vehiclePlate = document.createElement("li");
  var vehiclePlateText = document.createTextNode(`Kennzeichen: ${data.vehicleDataList[currentVehicle].Plate}`);
  vehiclePlate.appendChild(vehiclePlateText);

  var vehicleCustomerApproval = document.createElement("li");
  var vehicleCustomerApprovalText = document.createTextNode(
      `Kunden Zulassungsdatum: ${data.vehicleDataList[currentVehicle].customerRegistrationDate}`
  );
  vehicleCustomerApproval.appendChild(vehicleCustomerApprovalText);

  var lastServiceDate = document.createElement("li");
  var lastServiceDateText = document.createTextNode(
      `Letzter Werkstattbesuch: ${data.vehicleDataList[currentVehicle].dateLastServiceContact}`
  );
  lastServiceDate.appendChild(lastServiceDateText);

  var lastKM = document.createElement("li");
  var lastKMText = document.createTextNode(`Letzter KM Stand: ${data.vehicleDataList[currentVehicle].milage}`);
  lastKM.appendChild(lastKMText);

  //multiple car windows
  var pageButtons = document.createElement("div");
  pageButtons.classList.add("pageButtonContainer");
  pageButtons.classList.add("inactive");

  var pageButtonStyle = document.createElement("div");
  pageButtonStyle.classList.add("pageButtonStyle");
  pageButtonStyle.classList.add("inactive");

  var prevButton = document.createElement("a");
  var prevButtonText = document.createTextNode("<")
  prevButton.classList.add("previous");
  prevButton.classList.add("round");
  prevButton.appendChild(prevButtonText);
  prevButton.addEventListener('click', (e) => {
      e.stopPropagation();
      lastVehicle(e);
  });
  pageButtonStyle.appendChild(prevButton);

  var nextButton = document.createElement("a");
  var nextButtonText = document.createTextNode(">")
  nextButton.classList.add("next");
  nextButton.classList.add("round");
  nextButton.appendChild(nextButtonText);
  nextButton.addEventListener('click', (e) => {
      e.stopPropagation();
      nextVehicle(e);
  });
  pageButtonStyle.appendChild(nextButton);
  pageButtons.appendChild(pageButtonStyle);


  var salesPerson = document.createElement("li");
  var salesPersonText = document.createTextNode(`Name: ${data.vehicleDataList[currentVehicle].salesPerson.firstName} ${data.vehicleDataList[currentVehicle].salesPerson.lastName}`);
  salesPerson.appendChild(salesPersonText);

  var salesPhone = document.createElement("li");
  var salesPhoneText = document.createTextNode(
      `Tel. Nr.: ${data.vehicleDataList[currentVehicle].salesPerson.phoneNo}`
  );
  salesPhone.appendChild(salesPhoneText);


  var salesEmail = document.createElement("li");
  var salesEmailText = document.createTextNode(`Email: ${data.vehicleDataList[currentVehicle].salesPerson.eMail}`);
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

  info1Ul.appendChild(customerNo);
  info1Ul.appendChild(customerName);
  info1Ul.appendChild(customerPlz);
  info1Ul.appendChild(customerCity);
  info1Ul.appendChild(customerVin);
  info1Ul.appendChild(customerOrderNo);
  info1Ul.appendChild(customerOrderDate);

  personalData.appendChild(info1Ul);

  var info2Ul = document.createElement("ul");

  info2Ul.appendChild(customerTel);
  info2Ul.appendChild(customerTel1);
  info2Ul.appendChild(customerTel2);
  info2Ul.appendChild(customerTel3);
  info2Ul.appendChild(customerTel4);
  info2Ul.appendChild(customerMail);
  info2Ul.appendChild(customerMail2);

  contactDetails.appendChild(info2Ul)

  var info3Ul = document.createElement("ul");

  info3Ul.appendChild(vehicleBrand);
  info3Ul.appendChild(vehicleModel);
  info3Ul.appendChild(vehicleVIN);
  info3Ul.appendChild(vhecileApproval);
  info3Ul.appendChild(vehicleColor);
  info3Ul.appendChild(vehiclePlate);
  info3Ul.appendChild(vehicleCustomerApproval);
  info3Ul.appendChild(lastServiceDate);
  info3Ul.appendChild(lastKM);
  vehicleData.appendChild(info3Ul);
  vehicleData.appendChild(pageButtons);

  var info4Ul = document.createElement("ul");

  info4Ul.appendChild(salesPerson);
  info4Ul.appendChild(salesPhone);
  info4Ul.appendChild(salesEmail);

  sellerInformations.appendChild(info4Ul);

  emailDiv.appendChild(mailToButton);
  emailDiv.appendChild(webexMessageButton);

  buttons.appendChild(recallButton);

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
      log("getUser()", u);
    })
    .catch((error) => {
      log(
        "getUser() promise failed with error",
        Webex.Application.ErrorCodes[error]
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

function nextVehicle(e) {
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
        data = data.getCustomerInformationResult;
        currentVehicle++;
        if (currentVehicle > length) {currentVehicle = 0;}
      
        liList = e.currentTarget.parentNode.parentNode.parentNode.querySelectorAll('li');
        var i = 1;
        liList.forEach(li => {
            switch (i) {
                case 1:
                    li.innerHTML = `Marke: ${data.vehicleDataList[currentVehicle].brand}`;
                    break;
                case 2:
                    li.innerHTML = `Model: ${data.vehicleDataList[currentVehicle].model}`;
                    break;
                case 3:
                    li.innerHTML = `VIN: ${data.vehicleDataList[currentVehicle].vin}`;
                    break;
                case 4:
                    li.innerHTML = `Erstzulassung: ${data.vehicleDataList[currentVehicle].firstRegistrationDate}`;
                    break;
                case 5:
                    li.innerHTML = `Farbe: ${data.vehicleDataList[currentVehicle].Color}`;
                    break;
                case 6:
                    li.innerHTML = `Kennzeichen: ${data.vehicleDataList[currentVehicle].Plate}`;
                    break;
                case 7:
                    li.innerHTML = `Kunden Zulassungsdatum: ${data.vehicleDataList[currentVehicle].customerRegistrationDate}`;
                    break;
                case 8:
                    li.innerHTML = `Letzter Werkstattbesuch: ${data.vehicleDataList[currentVehicle].dateLastServiceContact}`;
                    break;
                case 9:
                    li.innerHTML = `Letzter KM Stand: ${data.vehicleDataList[currentVehicle].milage}`;
                    break;
            }
            i++;
        });
      
        sellerInfo = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelectorAll('div.sellerInformations');
        liList = sellerInfo[0].querySelectorAll('li');
        var i = 1;
        liList.forEach(li => {
            switch (i) {
                case 1:
                    li.innerHTML = `Name: ${data.vehicleDataList[currentVehicle].salesPerson.firstName}  ${data.vehicleDataList[currentVehicle].salesPerson.lastName}`;
                    break;
                case 2:
                    li.innerHTML = `Tel.Nr.: ${data.vehicleDataList[currentVehicle].salesPerson.phoneNo}`;
                    break;
                case 3:
                    li.innerHTML = `Email: ${data.vehicleDataList[currentVehicle].salesPerson.eMail}`;
                    break;
            }
            i++
        });
    })
    .catch(error => {
        console.error("Fehler bei der Anfrage:", error);
    });
  
  
}

function lastVehicle(e) {
  let extractedNumbers = '';
  let tellist = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('div.contactDetails').querySelectorAll('li')
  let liList = e.currentTarget.parentNode.parentNode.parentNode.querySelectorAll('li');
  const numbersArray = tellist[4].innerHTML.match(/\d+/g);
  if (numbersArray && numbersArray.length > 0) {
    extractedNumbers = numbersArray.join('');
  }else{
    extractedNumbers = numbersArray[0];
  }

  fetch(
    `https://calldata1.haeusler.local:4443/webExBot/getCustomerInformation/+${extractedNumbers}`,
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
        data = data.getCustomerInformationResult;

        currentVehicle--;
        if (currentVehicle < 0) {currentVehicle = length;}

        console.log("🚀 ~ file: utils.js:577 ~ lastVehicle ~ e.currentTarget:", e.currentTarget)
      
        var i = 1;
        liList.forEach(li => {
            switch (i) {
                case 1:
                    li.innerHTML = `Marke: ${data.vehicleDataList[currentVehicle].brand}`;
                    break;
                case 2:
                    li.innerHTML = `Model: ${data.vehicleDataList[currentVehicle].model}`;
                    break;
                case 3:
                    li.innerHTML = `VIN: ${data.vehicleDataList[currentVehicle].vin}`;
                    break;
                case 4:
                    li.innerHTML = `Erstzulassung: ${data.vehicleDataList[currentVehicle].firstRegistrationDate}`;
                    break;
                case 5:
                    li.innerHTML = `Farbe: ${data.vehicleDataList[currentVehicle].Color}`;
                    break;
                case 6:
                    li.innerHTML = `Kennzeichen: ${data.vehicleDataList[currentVehicle].Plate}`;
                    break;
                case 7:
                    li.innerHTML = `Kunden Zulassungsdatum: ${data.vehicleDataList[currentVehicle].customerRegistrationDate}`;
                    break;
                case 8:
                    li.innerHTML = `Letzter Werkstattbesuch: ${data.vehicleDataList[currentVehicle].dateLastServiceContact}`;
                    break;
                case 9:
                    li.innerHTML = `Letzter KM Stand: ${data.vehicleDataList[currentVehicle].milage}`;
                    break;
            }
            i++;
        });
      
        sellerInfo = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelectorAll('div.sellerInformations');
        liList = sellerInfo[0].querySelectorAll('li');
        var i = 1;
        liList.forEach(li => {
            switch (i) {
                case 1:
                    li.innerHTML = `Name: ${data.vehicleDataList[currentVehicle].salesPerson.firstName}  ${data.vehicleDataList[currentVehicle].salesPerson.lastName}`;
                    break;
                case 2:
                    li.innerHTML = `Tel.Nr.: ${data.vehicleDataList[currentVehicle].salesPerson.phoneNo}`;
                    break;
                case 3:
                    li.innerHTML = `Email: ${data.vehicleDataList[currentVehicle].salesPerson.eMail}`;
                    break;
            }
            i++
        });
    })
    .catch(error => {
        console.error("Fehler bei der Anfrage:", error);
    });
}

function log(type, data) {
  console.log(JSON.stringify(data, "\n", 2));

}

