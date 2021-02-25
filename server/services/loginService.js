/* 
  Login Service Will Authenticate an email and password
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the dashboard.html
*/
const fileService = require('./fileService')
 
<<<<<<< HEAD
// common js module  import === require
// export import es modules  Browser...
// exports or module.exports  requre commonjs  NODE (BUNDLER RUN BROWSER)
exports.authenticate = (credential)=>{
 
   const {email, password} = {...credential}
   const users = fileService.getFileContents('../data/users.json');
   // flush the authentication
   
 const authUser =  users.reduce((authObj, user)=>{
     
    if(user.email === email){
      authObj.validEmail = true;
    }else{
       // errorObj
    }

    if(user.password === password){
      authObj.validPassword = true;
    }else{
      // passwordError authObj.passwordError = "something"
    }

    if(authObj.validEmail===true && authObj.validPassword===true){
        authObj.user = user;
    }
         
    return authObj

   }, {validEmail:false, validPassword:false, user:null})

    // ternary opertoar   ()?true:false
    // if() else
    // truthy falsy
   const auth0 = authUser.user ? authUser.user: formatErrors(authUser);
   return auth0

}
 
const formatErrors = function(user){
  let passwordWarning = ""
  let emailWarning = ""

  if(user.validPassword === false){passwordWarning= `password doesn't seem to be correct`}
  if(user.validEmail === false){ emailWarning= `email doesn't seem to be correct`}

  return {user:null, emailWarning, passwordWarning}
}
=======
exports.authenticate = (credential)=>{
  
   const {email, password} = {...credential}
   const users = fileService.getFileContents('../data/users.json');
 
   // authUser = {validEmail, validPassword, user}
  const authUser = users.reduce((authObj, user)=>{

       // Authentication Checks
       if(user.email === email){
         authObj.validEmail = true;
       }

       if(user.password === password){
         authObj.validPassword = true;
       }

       if(authObj.validEmail === true && authObj.validPassword === true){
         authObj.user = user
       }
       
       // YOU MUST RETURN THE ACCUMULATOR OR THE VALUE WILL BE UNDEFINED.....
       return authObj
    
   }, {validEmail:false, validPassword:false, user:null})
    // ternary opertor   (statement/condition)?true:false;    if else short block
    // truthy and falsy

   const auth0 =  authUser.user? authUser.user : formatErrors(authUser)

}

const formatErrors = function (authObj){
     // create error warnings...
     let emailWarning = ''
     let passwordWarning = ''

     if(authObj.validEmail === false){
       emailWarning = "couldn't find user with this email address"
     }

     if(authObj.validPassword === false){
      passwordWarning = "the password doesn't match this email address"
    }

    return {user:null, emailWarning, passwordWarning}
}
 
 
 
>>>>>>> b57d4ac6fc2a3ee17f60dd507fcb8966c5f287d0
