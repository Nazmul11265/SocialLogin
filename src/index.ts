import * as queryString from "query-string";
import { GoogleLoginCredential } from "./credentials";


class GoogleAuth {
  credentials: GoogleLoginCredential = {
    client_id: "",
    redirect_uri: "",
    scope: "",
    response_type: "",
    access_type: "",
    prompt: "",
  }
  constructor(credentials: GoogleLoginCredential) {
    this.credentials.client_id = credentials.client_id;
    this.credentials.redirect_uri = credentials.redirect_uri;
    this.credentials.scope = credentials.scope;
    this.credentials.response_type = credentials.response_type;
    this.credentials.access_type = credentials.access_type;
    this.credentials.prompt = credentials.prompt;
  }
  getGoogleLoginUrl() {
    const googleParams = queryString.stringify({
      client_id: this.credentials.client_id,
      redirect_uri: this.credentials.redirect_uri,
      scope: this.credentials.scope, // space seperated string
      response_type: this.credentials.response_type,
      access_type: this.credentials.access_type,
      prompt: this.credentials.prompt
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${googleParams}`
  }
}

export default GoogleAuth