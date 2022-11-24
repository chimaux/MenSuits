// alert(document.body.clientHeight)

const myHeader = document.querySelector('header')
let newcolor = document.querySelector("#down")

window.onscroll = function() {
//   if(window.scrollY > window.innerHeight){
  if(window.scrollY > 399.7){
    myHeader.classList.add('scrolled')
    newcolor.style.color="black";
  }else{
    myHeader.classList.remove('scrolled')
    newcolor.style.color="white";
  }
}