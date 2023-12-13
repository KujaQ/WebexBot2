function testflow2() {
    window.location.href = urlflow
}

function testflow3() {
    // Get the current URL
    const currentUrl = window.location.href;

    // Create a URLSearchParams object with the current URL
    const urlParams = new URLSearchParams(currentUrl);

    // Get the value of a specific query parameter
    const parameterValue = urlParams.get('code');

    // Check if the parameter value exists
    if (parameterValue !== null) {
        console.log('Parameter Value:', parameterValue);
    } else {
        console.log('Parameter not found or has no value.');
    }
}