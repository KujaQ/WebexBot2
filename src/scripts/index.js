const app = new window.Webex.Application();

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

checkbox.addEventListener('change', function() {

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

    pagebuttons = document.querySelectorAll('a.round');
    pagebuttons.forEach(paBu => {
      paBu.classList.add('dark-theme');
    });

    h1elements = document.querySelectorAll('h1');
    h1elements.forEach(h1 =>{
      h1.classList.add('dark-theme');
    });

    h2elements = document.querySelectorAll('h2');
    h2elements.forEach(h2 =>{
      h2.classList.add('dark-theme');
    });

    listInputs = document.querySelectorAll('input');
    listInputs.forEach(input => {
      input.classList.add('dark-theme');
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

    pagebuttons = document.querySelectorAll('a.round');
    pagebuttons.forEach(paBu => {
      paBu.classList.remove('dark-theme');
    });

    h1elements = document.querySelectorAll('h1');
    h1elements.forEach(h1 =>{
      h1.classList.remove('dark-theme');
    });

    h2elements = document.querySelectorAll('h2');
    h2elements.forEach(h2 =>{
      h2.classList.remove('dark-theme');
    });

    listInputs = document.querySelectorAll('input');
    listInputs.forEach(input => {
      input.classList.remove('dark-theme');
    });

  }
});
