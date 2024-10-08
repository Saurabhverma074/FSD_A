// let x=12;
// function display()
// {
//     let x=14;
//     console.log("hello",x)
// }
// display();
function validate(){
    let pass = document.getElementById("pass").value
    let name = document.getElementById("name").value
    let p1 = document.getElementById("result");
    if(pass == "admin" && name == "admin")
        p1.innerHTML = "Login Successful"
    else
        p1.innerHTML = "Login Fail"
        
}