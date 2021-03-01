

let apiBaseUrl = 'http://localhost:5000/';
let apiKey = 'api/v1/users';
let url = apiBaseUrl+apiKey

function userModel(url){
    return    fetch(url, Option)
            .then(res=> res.json())
            .then(result=> result)
}


const data = userModel(url).then(result=>{
    result.map((item, index)=>{
        console.log(item);
        const template = `
        <ul>
            <li>User Name: ${item.username}</li>
            <li>Email: ${item.email}</li>
            <li>Password: ${item.password}</li>
            <li>User ID: ${item.id}</li>
        </ul>
        `

        const element = document.createRange().createContextualFragment(template).children[0];
        console.log(element);

        document.querySelector('#userData').insertAdjacentElement("afterbegin", element)

    })

})


