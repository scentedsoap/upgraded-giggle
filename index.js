const test = document.querySelector('.test')
const submit = document.querySelector('.submit')

submit.addEventListener('click', load)


/* callback function gets called whenever the submit button is pressed */
function load() {
    gapi.client.setApiKey('')
    const locationInput = document.querySelector('#location-input').value
    lookup(locationInput, renderResults)
}

/* searches the address passed in from load function
 * create a request using the api, pass in object with path and params specified
 */
function lookup(address, callback) {

    let electionID = 2000
    const req = gapi.client.request({
        'path' : 'civicinfo/v2/representatives',
        'params' : {'electionId' : electionID, 'address' : address}
    })
    req.execute(callback)
}

/* render out the response from making the api request*/
function renderResults(response, rawResponse) {
    if (!response || response.error) {
        test.innerHTML = `<p> Error while trying to fetch polling place`
    }
        test.innerHTML = `<p>${JSON.stringify(response)}</p>`

}
