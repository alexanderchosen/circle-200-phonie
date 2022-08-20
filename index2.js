let username = document.getElementById('username');
let password = document.getElementById('password');
let phoneNumber = document.getElementById('phone');
let email = document.getElementById('email');

let usernameError = document.getElementById('username-error')
let passwordError = document.getElementById('password-error')
let numberError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let phoneCodeElement = document.querySelector('#phone-code-list')


email.addEventListener('input', function(e){
  let emailPattern = email.getAttribute('pattern')
  let mailPattern = new RegExp(`${emailPattern}`,'gi')
  console.log(mailPattern)
  let emailValue = e.target.value
  if (emailValue.length ===0){
    emailError.style.display = 'none'
  }
  console.log(emailValue)
  let emailResult = mailPattern.test(emailValue)
  console.log(emailResult)
  if(emailResult || emailValue.length === 0){
      emailError.style.display = 'none'
  }
  else{
      emailError.style.display = 'block'
  }
})

password.addEventListener('input', function(e){
  let passwordPattern = password.getAttribute('pattern')
  let newPattern = new RegExp (`${passwordPattern}`,'g')
  console.log(newPattern)
  let passwordValue = e.target.value
  console.log(passwordValue)
  let passwordResult = newPattern.test(passwordValue)
  console.log(passwordResult)
  // add functionality to turn password inputs to *
  if(passwordResult || passwordValue.length === 0){
      passwordError.style.display = 'none'
  }
  else{
      passwordError.style.display = 'block'
  }
})

let arr = [
    {
        "name":"MTN",
        "code":["0803","0806","0703","0706","0810","0813","0814","0816","0903","0906","07026","07025","0704"]
    },
    {
        "name":"GLO",
        "code":["0805","0807","0811","0705","0815","0905"]
    },
    {
        "name":"AIRTEL",
        "code":["0802","0808","0812","0701","0708","0902","0907","0901","0904"]
    },

    {
        "name":"9MOBILE",
        "code":["0809","0817","0818","0908","0909","0809"]
    }
]


phoneNumber.addEventListener('input', function(e){
    let numberPattern = phoneNumber.getAttribute('pattern')
    let newPattern = new RegExp (`${numberPattern}`,'g')
    console.log(newPattern)
    let numberValue = e.target.value
    console.log(numberValue)
    let numberResult = newPattern.test(numberValue)
    console.log(numberResult)
    // add functionality to turn password inputs to *
    if(numberResult || numberValue.length ===0){
        numberError.style.display = 'none'
        // window.getComputedStyle('numberError').display = 'none'
    }
    else{
        numberError.style.display = 'block'
    }

    let numbers = [];
    let matches = arr.filter(match =>{
        // const regex = new RegExp(`^${numberValue}`, 'gi');
        // const regex = /(?:\"code\":)(`${searchText}`)/gi;
        
        for(let i=0; i< match.code.length; i++){
            numbers.push(match.code[i] )
            
        }
        return numbers;
       
        // return numbers;
    })

    // loadData(matches, phoneCodeElement);
    if(numberValue ===0){
        matches = []
    }
    outputHtml(matches);

    //filter the array of codes

    let objFound = arr.find((each)=>
    each.code.includes(numberValue));

    console.log(objFound.code)
    console.log(objFound.name)

}
)

const outputHtml = matches =>{
    if(matches.length > 0){
        let innerElement=''
        const html = matches.map(
            match => innerElement +=`
            <li> ${match.code}  </li>
            `
        ).join('');

        phoneCodeElement.innerHTML = html;
    }
}

// function loadData(data, element){
//     if (data){
//         element.innerHTML ="";
//         let innerElement = "";
//         data.forEach((item) =>{
//             innerElement += `<li>${item}</li>`;
//         })
//     }
// }

username.addEventListener('input', function(e){
    let usernamePattern = username.getAttribute('pattern')
    let pattern = new RegExp (`${usernamePattern}`,'g')
    let usernameValue = e.target.value
    console.log(usernameValue)
    let usernameResult = pattern.test(usernameValue)
    console.log(usernameResult)
    if(usernameResult || usernameValue.length === 0){
        usernameError.style.display = 'none'
    }
    else{
        usernameError.style.display = 'block'
    }
})


//  const network = [
//     {
//         name: "MTN", 
//         code:[0803, 0806, 0703, 0706, 0810, 0813,0814,0816,0903,0906,07026,07025,0704]
//     },

//     {
//         name: "GLO", 
//         code: [0805,0807,0811,0705,0815,0905]
//     },

//     {
//         name: "AIRTEL",
//         code: [0802, 0808,0812,0701,0902,0907, 0901,0904, 0708]
//     },
//     {
//         name: "9MOBILE",
//         code: [0809,0817,0818,0908,0909,0809]
//     },

// ]




// const networkJSON = JSON.parse(network)
// console.log(networkJSON)

// search the networkCodes.json and filter it

// const searchNetwork = async searchText =>{
//     const res = await fetch('/networkCodes.json');
//     const networks = await res.json();

//     console.log(networks)
//     const myCodes = JSON.stringify(networks);

//     console.log(myCodes)
    
//     //get matches to current number input

//     let numbers = '';
//     let matches = networks.filter(network =>{
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         // const regex = /(?:\"code\":)(`${searchText}`)/gi;
        
//         for(let i=0; i< network.code.length; i++){
//             numbers +=network.code[i]  + ", ";
//         }

//          console.log(network)
//         // return numbers.match(regex)
//         return network.code[numbers].test(regex) ;

//         // network.code.match(regex)
//     });

//     console.log(matches)

//     //  console.log(matches)
// }

// phoneNumber.addEventListener('input', () => searchNetwork(phoneNumber.value))