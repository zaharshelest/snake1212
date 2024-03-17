const url='https://depositphotos.com/ua/photos/hay-field-sunset.html'
const button = document.getElementsByTagName('Button')[0]
console.log(button);
button.addEventListener('click',()=>{
    location.href=url;
})