let bt = document.getElementById("bt");
const Name = document.getElementById("Name");
const Email = document.getElementById("Email")

window.onscroll= function(){
    if(scrollY >= 200){
     bt.style.display="block";
    }else{
        bt.style.display="none";
    }
}
bt.onclick =function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    })

}
