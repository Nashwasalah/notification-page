var dots = document.getElementsByClassName('circle')
console.log(dots)
var NotificationBackground = document.getElementsByClassName('NotificationBackground')
console.log(NotificationBackground)

var mynumber= document.getElementById('number')
document.getElementById('AllReadBtn').onclick=function(){
    for(var index=0 ; index< dots.length ; index ++ ){
        dots[index].style.display = 'none'
        NotificationBackground[index].style.backgroundColor= 'hsl(0, 0%, 100%)'
        mynumber.innerText='0'
    }
}