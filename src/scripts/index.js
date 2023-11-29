const app = new window.Webex.Application();

const url = 'https://webexapis.com/v1/telephony/calls/dial';
const bearerToken = 'ZjE5N2RjNzEtNDk5Zi00OGVmLWEwYWMtMTZkMWU0YmViYzMyNmYyMjZkN2UtZDEy_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b';
var id = "";
var connected = false;


// Referenz zur Checkbox erhalten
var checkbox = document.getElementById('darkmode-toggle');
var isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  checkbox.checked = true;
  htmlElement = document.documentElement;
  htmlElement.style.backgroundColor = '#1B1E1F';
  h1elements = document.querySelectorAll('h1');
  h1elements.forEach(h1 =>{
    h1.classList.add('dark-theme');
  });
}else{
  checkbox.checked = false;
  htmlElement = document.documentElement;
  htmlElement.style.backgroundColor = 'white';
  h1elements = document.querySelectorAll('h1');
  h1elements.forEach(h1 =>{
    h1.classList.remove('dark-theme');
  });
}

// Event-Handler für Änderungen im Zustand der Checkbox hinzufügen
checkbox.addEventListener('change', function() {
  // Überprüfen, ob die Checkbox aktiviert (checked) ist

  localStorage.setItem('darkMode', checkbox.checked);

  if (checkbox.checked) {
    htmlElement = document.documentElement;
    htmlElement.style.backgroundColor = '#1B1E1F';

    listCalls = document.querySelectorAll('div.call');
    listCalls.forEach(call => {
      call.classList.add('dark-theme');
    });

    listPersonalData = document.querySelectorAll('div.personalData');
    listPersonalData.forEach(pd => {
      pd.classList.add('dark-theme');
    });

    listContactDetails = document.querySelectorAll('div.contactDetails');
    listContactDetails.forEach(cd => {
      cd.classList.add('dark-theme');
    });

    listVehicleData = document.querySelectorAll('div.vehicleData');
    listVehicleData.forEach(vd => {
      vd.classList.add('dark-theme');
    });

    listSellerInformations = document.querySelectorAll('div.sellerInformations');
    listSellerInformations.forEach(si => {
      si.classList.add('dark-theme');
    });

    h1elements = document.querySelectorAll('h1');
    h1elements.forEach(h1 =>{
      h1.classList.add('dark-theme');
    });

    h2elements = document.querySelectorAll('h2');
    h2elements.forEach(h2 =>{
      h2.classList.add('dark-theme');
    });

  } else {

    localStorage.setItem('darkMode', checkbox.checked);

    htmlElement = document.documentElement;
    htmlElement.style.backgroundColor = 'white';

    listCalls = document.querySelectorAll('div.call');
    listCalls.forEach(call => {
      call.classList.remove('dark-theme');
    });

    listPersonalData = document.querySelectorAll('div.personalData');
    listPersonalData.forEach(pd => {
      pd.classList.remove('dark-theme');
    });

    listContactDetails = document.querySelectorAll('div.contactDetails');
    listContactDetails.forEach(cd => {
      cd.classList.remove('dark-theme');
    });

    listVehicleData = document.querySelectorAll('div.vehicleData');
    listVehicleData.forEach(vd => {
      vd.classList.remove('dark-theme');
    });

    listSellerInformations = document.querySelectorAll('div.sellerInformations');
    listSellerInformations.forEach(si => {
      si.classList.remove('dark-theme');
    });

    h1elements = document.querySelectorAll('h1');
    h1elements.forEach(h1 =>{
      h1.classList.remove('dark-theme');
    });

    h2elements = document.querySelectorAll('h2');
    h2elements.forEach(h2 =>{
      h2.classList.remove('dark-theme');
    });

  }
});


function SDKHook(key, value, data) {
  const obj = JSON.parse(data);

  if (obj.data.callType !== "Received") return
  
  if (obj.data.id !== id) {
    connected = false;

    if (obj.data.state === "Connected") {
      connected = true;
      id = obj.data.id;
      loggCall("Angenommener Anruf", obj);
    }
    
    if ((obj.data.state === "Disconnected") & (connected === false)) {
      connected = true;
      id = obj.data.id;
      loggCall("Verpasster Anruf", obj);
    }
  }
}

function recall(destination){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer ZjE5N2RjNzEtNDk5Zi00OGVmLWEwYWMtMTZkMWU0YmViYzMyNmYyMjZkN2UtZDEy_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b");
  
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

function mailTo(){
  console.log('mail gesendet');
  destination = 'testkevboy@gmail.com';
  body = 'testshit';
  window.location.href = `mailto:${destination}?subject=Bitte um Kundenrückruf&body=${body}`;
}

function pnTo(){
  console.log('pn gesendet');
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

