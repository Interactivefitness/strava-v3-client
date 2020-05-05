# @interactivefitness/strava-v3-client

## Installation

```bash
npm install @interactivefitness/strava-v3-client
```
## Description

This Strava API client was generated from Strava's official Swagger API spec. See the [Strava API playground](https://developers.strava.com/playground/) to see what's supported. Note that methods for the OAuth flow are not provided. 

## Quick start

The below assumes you already have a valid athletes access token.

```javascript

process.env.STRAVA_ACCESS_TOKEN = access_token
process.env.STRAVA_CLIENT_ID = client_id
process.env.STRAVA_CLIENT_SECRET = client_secret
process.env.STRAVA_REDIRECT_URI = redirect_uri

const strava = require("@interactivefitness/strava-v3-client")

strava
 .then(client => {
    if(client.errors) {
      throw new Error(client.errors);
    }
    return client.apis.Athletes.getLoggedInAthlete({})
 })
 .then(json => {
    console.log("got: ", json);
 });
 .catch(error => {
   console.error("error", error);
 });
```

## Obtain Access Token

See http://developers.strava.com/docs/authentication/ for how to trigger an oauth flow to get athletes oauth code.

_For Example_:

You will need to pass in the appropriate environment variables including the minimal scope your application needs.
It is best if you are already logged in as a test user to strava.

The following command will open up Google Chrome for enough access to run the just unit tests.

```bash
export STRAVA_CLIENT_ID=
export STRAVA_REDIRECT_URI=
export STRAVA_SCOPE="activity:read_all,profile:read_all,profile:write"
open -a /Applications/Google\ Chrome.app \
   "https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${STRAVA_REDIRECT_URI}approval_prompt=force&scope=${STRAVA_SCOPE}"
```

Now you should see your application asking oauth access for your test user. Push "Authorize" and you will be redirected to your redirect uriwith query string that include the `code` parameter.

This `code` is used below as STRAVA_CODE.

```bash
export STRAVA_CODE=
export STRAVA_CLIENT_SECRET=
export STRAVA_CLIENT_ID=
curl -X POST https://www.strava.com/api/v3/oauth/token \
  -d client_id=${STRAVA_CLIENT_ID} \
  -d client_secret=${STRAVA_CLIENT_SECRET} \
  -d code=${STRAVA_CODE} \
  -d grant_type=authorization_code
```

This will return an object that includes a `access_token` and `refresh_token` for your test user that your application can use to act on behalf of your test user.
