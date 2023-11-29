var debugMode = false;

function quickdebug(color) {
    var currentDateTime = getCurrentDateTime();

    var calls = document.getElementById("calls");

    var call = document.createElement("div");
    call.classList.add("call");
    call.classList.add("inactiveCall");

    var callState = document.createElement("div");
    callState.classList.add("callState");

    var personalData = document.createElement("div");
    personalData.classList.add("personalData");
    personalData.classList.add("active");
    personalData.addEventListener("click", toggleActive);
    var headingElement = document.createElement("h2");
    headingElement.classList.add("active");
    headingElement.textContent = "Persönliche Daten:";
    personalData.appendChild(headingElement);

    var contactDetails = document.createElement("div");
    contactDetails.classList.add("contactDetails");
    contactDetails.classList.add("inactive");
    contactDetails.addEventListener("click", toggleActive);
    var headingElement = document.createElement("h2");
    headingElement.classList.add("active");
    headingElement.textContent = "Kontaktinformationen:";
    contactDetails.appendChild(headingElement);

    var vehicleData = document.createElement("div");
    vehicleData.classList.add("vehicleData");
    vehicleData.classList.add("inactive");
    vehicleData.addEventListener("click", toggleActive);
    var headingElement = document.createElement("h2");
    headingElement.classList.add("active");
    headingElement.textContent = "Fahrzeuginformationen:";
    vehicleData.appendChild(headingElement);

    var sellerInformations = document.createElement("div");
    sellerInformations.classList.add("sellerInformations");
    sellerInformations.classList.add("inactive");
    sellerInformations.addEventListener("click", toggleActive);
    var headingElement = document.createElement("h2");
    headingElement.classList.add("active");
    headingElement.textContent = "Verkäuferinformationen:";
    sellerInformations.appendChild(headingElement);

    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    var header = document.createElement("p");
    if (color === "red") {
        var headerMessage = document.createTextNode(
            `${currentDateTime}: Verpasster Anruf`
        );
        header.classList.add("missed-call");
    } else {
        var headerMessage = document.createTextNode(
            `${currentDateTime}: Angenommener Anruf`
        );
        header.classList.add("accepted-call");
    }

    header.appendChild(headerMessage);
    callState.prepend(header);

    //Person
    var customerTel = document.createElement("li");
    var customerTelText = document.createTextNode(
        `Tel. Nummer 1: +4917615206382`
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
    var customerNameText = document.createTextNode(`Name: Karl Heinz`);
    customerName.appendChild(customerNameText);

    var customerStreet = document.createElement("li");
    var customerStreetText = document.createTextNode(`Adresse: Bachstraße 17`);
    customerStreet.appendChild(customerStreetText);

    var customerPlz = document.createElement("li");
    var customerPlzText = document.createTextNode(`Plz: 56659`);
    customerPlz.appendChild(customerPlzText);

    var customerVin = document.createElement("li");
    var customerVinText = document.createTextNode(`VIN: WAUZZZ1234567899`);
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
    var vhecileApprovalText = document.createTextNode(`Erstzulassung: 23.10.23`);
    vhecileApproval.appendChild(vhecileApprovalText);

    var vehicleColor = document.createElement("li");
    var vehicleColorText = document.createTextNode(`Farbe: Mitternachts Pink`);
    vehicleColor.appendChild(vehicleColorText);

    var vehiclePlate = document.createElement("li");
    var vehiclePlateText = document.createTextNode(`Kennzeichen: GG : WP 420`);
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
    var lastKMText = document.createTextNode(`Letzer KM Stand: 11`);
    lastKM.appendChild(lastKMText);

    var salesPerson = document.createElement("li");
    var salesPersonText = document.createTextNode(`Name: Peter Schmittinger`);
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
    var salesEmailText = document.createTextNode(`Email: Peter Schmittinger`);
    salesEmail.appendChild(salesEmailText);

    var emailDiv = document.createElement("div");
    emailDiv.classList.add('emailContainer');
    var emailInput = document.createElement("input");
    emailInput.placeholder = 'E-Mail'
    emailDiv.appendChild(emailInput);

    var recallButton = document.createElement("button");
    recallButton.innerHTML = "Rückruf";
    recallButton.classList.add("button");
    recallButton.classList.add("is-success");

    recallButton.id = "recallButton";
    recallButton.onclick = function () {
        recall("recallButton", "Event");
    };

    var mailToButton = document.createElement("button");
    mailToButton.innerHTML = "Mail Senden";
    mailToButton.classList.add("button");
    mailToButton.classList.add("is-link");

    mailToButton.id = "mailToButton";
    mailToButton.onclick = function () {
        mailTo("mailToButton", "Event");
    };

    var webexMessageButton = document.createElement("button");
    webexMessageButton.innerHTML = "PN Senden";
    webexMessageButton.classList.add("button");
    webexMessageButton.classList.add("is-info");

    webexMessageButton.id = "webexMessageButton";
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

    contactDetails.appendChild(info2Ul);

    var info3Ul = document.createElement("ul");

    info3Ul.appendChild(vhecileApproval);
    info3Ul.appendChild(vehicleColor);
    info3Ul.appendChild(vehiclePlate);
    info3Ul.appendChild(vehicleCustomerApproval);
    info3Ul.appendChild(lastServiceDate);
    info3Ul.appendChild(lastKM);

    vehicleData.appendChild(info3Ul);

    var info4Ul = document.createElement("ul");

    info4Ul.appendChild(salesPerson);
    info4Ul.appendChild(salesPhone);
    info4Ul.appendChild(salesPhoneMobil);
    info4Ul.appendChild(salesEmail);
    info4Ul.appendChild(customerVin);

    sellerInformations.appendChild(info4Ul);

    buttons.appendChild(mailToButton);
    buttons.appendChild(recallButton);
    buttons.appendChild(webexMessageButton);

    call.appendChild(callState);
    call.appendChild(personalData);
    call.appendChild(contactDetails);
    call.appendChild(vehicleData);
    call.appendChild(sellerInformations);
    call.appendChild(emailDiv);
    call.appendChild(buttons);
    calls.appendChild(call);
}

if (debugMode === true) {
    quickdebug("green");
    quickdebug("red");
    quickdebug("red");
    quickdebug("green");
    quickdebug("red");
}

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
