let name;
let password;
let mail;
// let accounts = [];

console.log(data)

function verify() {
    name = document.getElementById("nameInput").value
    password = document.getElementById("passwordInput").value
    mail = document.getElementById("mailInput").value
    save(name, password, mail);
    if (accounts.length > 0) {
        load(localStorage.getItem("name") + ", " + localStorage.getItem("mail") + ", " + accounts.length + " Users");

    }
    // saveAccount();
    // accountSaveLocal();
}

function save(name, password, mail) {
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
    localStorage.setItem("mail", mail)
}

function load(output) {
    document.getElementById("output").innerHTML = ""
    document.getElementById("output").innerHTML += output
}

function preload() {
    
}

function adressMe() {
    if (localStorage.getItem('name') == null || localStorage.getItem('password') == null) {
        document.getElementById('adress').innerHTML = "You don't have an account just yet! <a href='profile.html' style='text-decoration: none'>Register</a> for free!!"
    } else {
        document.getElementById('adress').innerText = "Hi " + localStorage.getItem('name') + "!";
        document.getElementById('registryTag').hidden = false;
        document.getElementById('logOut').hidden = false;
        document.getElementById('registryData').innerHTML += "<br> Name: " + localStorage.getItem('name') + "<br> Email: " + localStorage.getItem('mail')
    }

}

function definePaketo(paketoName){
    localStorage.clear();
    localStorage.setItem("pac", paketoName)
}

function loadDynamic(paketo=localStorage.getItem("pac")){
    document.getElementById('imG').src=data[paketo].src;
    document.getElementById('imH').innerText=data[paketo].title;
    document.getElementById('imP').innerText=data[paketo].description
}

// function saveAccount() {
//     if (!name == "" && !password == "") {

//         console.log("im in")

//         if (accounts.length == 0) {
//             console.log("in 2.1")
//             accounts.push({ 'name': name, 'mail': mail, 'password': password })}
//             console.log(accounts)
//         }
//         if(accounts.length>0){
//             console.log("in 2.2")

//             console.log(accounts)

//             for (i = 0; i < accounts.length; i++) {
//                 if (name == accounts[i].name) {
//                     accountExisting('name');
//                 }
//                 if (mail == accounts[i].mail) {
//                     accountExisting('name');
//                 }
//             }
//             // accounts.push({ 'name': name, 'mail': mail, 'password': password })}
        
//     }


// }


// function accountSaveLocal() {
//     // localStorage.setItem('accounts', accounts)
// }

// function accountExisting(existingPart) {
    
//     if (existingPart == 'name') {
//         document.getElementById('output').innerText = "Name already taken."
//     }
//     if (existingPart == 'mail') {
//         document.getElementById('output').innerText = "There is already an account using this e-mail adress."
//     }


// }

// function accountsPush() {
    
// }
