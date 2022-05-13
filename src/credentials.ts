export interface GoogleLoginCredential{
    client_id: string,
    client_secret: string,
    redirect_uri: string,
    scope: string,
    response_type: string,
    access_type: string,
    prompt: string,
    grant_type: string
}
