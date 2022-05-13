# SocialLogin
## How to import
```javascript
import GoogleSignIn from 'sns-auth'
```
OR,
```javascript
const GoogleSignIn = require('sns-auth').default;
```
### How to use
After importing, you have to create instance of GoogleSignIn. A example is given below that helps you to get better understand, how to do that.
```javascript
const gogoleAuthObj = new GoogleSignIn({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "), // space seperated string
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
    });
```
After creating the instance to obtain google login URL,
```javascript

const googleLoginUrl = gogoleAuthObj.getGoogleLoginUrl();
```