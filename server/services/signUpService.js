
const fileService = require('./fileService')
const {v4: uuidv4, validate} = require('uuid')

exports.validateData = (credentials)=>{
    //const {username, email, password} = {...credentials};
    const data = [];
    data.push(credentials);

    const formValidate = data.reduce((validObj, check)=>{

        // validate username formate
        if(check.username.length < 4 || /[^a-zA-Z0-9\-\/ ]/.test(check.username)){
            validObj.message = "Name cannot be too short or contains special characters";
        }else{
            validObj.isValidName = true;
        }

        // validate email formate
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(check.email)){
            validObj.isValidEmail = true;
        }
        else{
            validObj.message = "Invalid Email format";
        }

        // validate password formate
        if(check.password.length < 6 || check.password.length > 12){
            validObj.message = "Password must be 6-12 characters"; 
        }else{
            validObj.isValidPassword = true;
        }
        
        // if all data correct formated write new object in users.json
        if(validObj.isValidName===true && validObj.isValidEmail===true && validObj.isValidPassword===true){
            let newid = uuidv4()
            credentials.id = newid;
            fileService.writeFileContents('../data/users.json', credentials)
            validObj.message = "Register Success!";
        }

        return validObj
        
    }, {isValidName:false, isValidEmail:false, isValidPassword:false, message:null})

    return formValidate
}

// TEST
/* const credentials = { "username": "William#", "email": "test@gmail.com", "password": "12354567" }
const returnValue = validateData(credentials)
console.log(returnValue.message); */


