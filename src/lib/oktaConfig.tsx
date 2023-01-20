export const oktaConfig = {
    clientId:'0oa80l937gyV9hwlp5d7',
    issuer : 'https://dev-59615844.okta.com/oauth2/default',
    redirectUri : 'http://localhost:3000/login/callback',
    scopes : ['openid' , 'profile' ,'email'],
    pkce :true,
    disableHttpsCheck : true 
}