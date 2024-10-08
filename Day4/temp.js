function vali(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    if(name.length < 10 && pass.length < 10){
        return false;
    }else{
        return true;
    }
}