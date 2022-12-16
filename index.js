const button = document.querySelector(".btn");
const span = document.querySelector("span");
function OTPGENERATOR(){
const digits = '0123456789';
let OTP = '';
for(let i=0;i<6;i++){
    OTP += digits[Math.floor(Math.random()*10)];
}
return OTP;
}
// const Generate = OTPGENERATOR();
// console.log(Generate)
button.addEventListener("click",()=>{
    const Generate = OTPGENERATOR();
    span.textContent = Generate;
})