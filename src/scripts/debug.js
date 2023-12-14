var debugMode = true;
var currentVehicle = 0;
var data = {
    "getCustomerInformationResult": {
        "customerData": {
            "city": "KOblenz",
            "eMailBusiness": "eMail@Business.de",
            "eMailPrivate": "eMail@Privat.de",
            "firstName": "Lars",
            "handyNoBusiness": "01756213163",
            "handyNoPrivate": "016765128974",
            "lastName": "Schaub",
            "no": "122492",
            "phoneNo": "",
            "phoneNoBusiness": "0261/73293",
            "phoneNoPrivate": "0261/47641",
            "postCode": "56001"
        },
        "serviceOrder": {
            "DocNo": "WVAN007945",
            "OrderDate": "29.11.2023",
            "VIN": "W0L0HAF682G020477"
        },
        "vehicleDataList": [
            {
                "Color": "rot",
                "Plate": "KO-AS 499",
                "brand": "OPEL",
                "customerNo": "122492",
                "customerRegistrationDate": "25.02.2020",
                "dateLastServiceContact": "09.09.2021",
                "firstRegistrationDate": "14.03.02",
                "milage": "12200",
                "model": "Corsa",
                "salesPerson": {
                    "code": "31",
                    "eMail": "AhmetG@Mail.com",
                    "firstName": "Ahmet",
                    "lastName": "Gezer",
                    "phoneNo": "0196 666 666"
                },
                "salesPersonCode": "31",
                "vin": "W0L0HAF682G021208"
            },
            {
                "Color": "rotx",
                "Plate": "KO-AS 499x",
                "brand": "FIAT",
                "customerNo": "122492x",
                "customerRegistrationDate": "25.02.2020x",
                "dateLastServiceContact": "09.09.2021x",
                "firstRegistrationDate": "14.03.02x",
                "milage": "12200x",
                "model": "Schrotthaufenx",
                "salesPerson": {
                    "code": "31x",
                    "eMail": "AhmetG@Mail.comx",
                    "firstName": "Ahmetx",
                    "lastName": "Gezerx",
                    "phoneNo": "0196 666 666x"
                },
                "salesPersonCode": "31x",
                "vin": "W0L0HAF682G021208x"
            }
        ]
    }
}



data = data.getCustomerInformationResult;
var length = data.vehicleDataList.length - 1;


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

    var recallButton = document.createElement("button");
    recallButton.innerHTML = "Rückruf";
    recallButton.classList.add("button");
    recallButton.classList.add("is-success");

    recallButton.id = "recallButton";
    recallButton.onclick = function () {
        recall("+4915734692268");
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

    contactDetails.appendChild(info2Ul);

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

if (debugMode === true) {
    quickdebug("green");
}