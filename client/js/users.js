

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
            <li>${item.username}</li>
            <li>${item.email}</li>
            <li>${item.password}</li>
            <li>${item.id}</li>
        </ul>
        `

        document.createRange().createContextualFragment()

        document.querySelector('#userData').insertAdjacentElement("afterbegin", renderData)

    })

})


