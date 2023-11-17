/**
 * Displays a log of information onto the page
 * @param {String} type Label of the information about to be logged
 * @param {Object} data Object that can be JSON stringified
 */


const url = 'https://webexapis.com/v1/telephony/calls';
const bearerToken = 'NTcxMTNmMmItNzEzMC00MzY1LWE5MzctZTNkZDg3ZDc4MjVjZGFjYzY2MzEtMWRh_PE93_08980031-1243-47be-a32c-fd2fee9a0c3b';


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


function log(type, data) {

  let currentDateTime = getCurrentDateTime();

  var ul = document.getElementById("console");
  var li = document.createElement("li");
  var header = document.createElement("p");
  var headerMessage = document.createTextNode(
    `${currentDateTime.toJSON()}: ${type}`
  );
  header.appendChild(headerMessage);
  li.appendChild(header);
  var code = document.createElement("pre");
  var payload = document.createTextNode(`${JSON.stringify(data, "\n", 2)}`);
  code.appendChild(payload);
  li.appendChild(code);
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
