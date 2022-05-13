import * as queryString from "query-string";
import { GoogleLoginCredential } from "./credentials";
import axios from "axios";

class GoogleAuth {
  credentials: GoogleLoginCredential = {
    client_id: "",
    client_secret: "",
    redirect_uri: "",
    scope: "",
    response_type: "",
    access_type: "",
    prompt: "",
    grant_type: "authorization_code" || ""
  }
  constructor(credentials: GoogleLoginCredential) {
    this.credentials.client_id = credentials.client_id;
    this.credentials.redirect_uri = credentials.redirect_uri;
    this.credentials.scope = credentials.scope;
    this.credentials.response_type = credentials.response_type;
    this.credentials.access_type = credentials.access_type;
    this.credentials.prompt = credentials.prompt;
    this.credentials.client_secret = credentials.client_secret;
    this.credentials.grant_type = credentials.grant_type || "authorization_code";
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
  async getAccessTokenFromCode(code: string) {
    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: 'post',
      data: {
        client_id: this.credentials.client_id,
        client_secret: this.credentials.client_secret,
        redirect_uri: this.credentials.redirect_uri,
        grant_type: this.credentials.grant_type,
        code,
      },
    });
    return data.access_token;
  }
}

export default GoogleAuth