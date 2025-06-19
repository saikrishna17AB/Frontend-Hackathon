let b1=document.querySelector("#box1");
let b2=document.querySelector("#box2");
let b3=document.querySelector("#c1");
let b4=document.querySelector("#c2");
let toggled=false;
function img1(){
    if(!toggled){
        b1.style.backgroundImage="url('https://images.unsplash.com/photo-1598528738936-c50861cc75a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        b3.style.visibility="visible";
    }    else{
        b1.style.backgroundImage="url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        b3.style.visibility="hidden";
    }
    toggled=!toggled;
}
let toggled1=false;
function img2(){
    if(!toggled1){
        b2.style.backgroundImage="url('https://images.unsplash.com/photo-1564594326930-17381130fd2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        b4.style.visibility="visible";
    }    else{
        b2.style.backgroundImage="url('https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        b4.style.visibility="hidden";
    }
    toggled1=!toggled1;
}

b1.addEventListener("click",img1);
b2.addEventListener("click",img2);
