
const Swagger = require('swagger-client')
// https://developers.strava.com/docs/#client-code
const specUrl = "https://developers.strava.com/swagger/swagger.json"
const spec = require('./strava-v3-spec')

/*
STRAVA_ACCESS_TOKEN = access_token
STRAVA_CLIENT_ID = client_id
STRAVA_CLIENT_SECRET = client_secret
STRAVA_REDIRECT_URI = redirect_uri
*/

const s = Swagger({ spec: spec, authorizations: {
    strava_oauth: {
      token: {
         token_type: "Bearer",
         access_token:  process.env.STRAVA_ACCESS_TOKEN,
      }
    }
 }
});

module.exports = s
