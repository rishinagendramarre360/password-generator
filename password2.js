const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let Pa  =   document.getElementById("pa")
let Pa1 =    document.getElementById("pa1")
let password  = []
let password1 = []

let x = Math.floor(Math.random()*characters.length)
let y = Math.floor(Math.random()*characters.length)



function generatePasswords() {
    for (let i = x; i < characters.length; i += 2) {
        password.push(characters[i])
        if (password.length === 15) {
            Pa.textContent  = password 
       }
    }

    for (let i = y; i < characters.length; i += 2) {
        password1.push(characters[i])
        if (password1.length === 15) {
            Pa1.textContent  = password1
       }
    }
}








