function generate(){
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var nums = "1234567890";
    var syms = "!@#$%^&*()_+";
    var all = uppercase + lowercase + nums + syms;
    var sliderValues = document.getElementById("slider").value;
    var password = "";

    for(var i = 0; i <= sliderValues; i++){
        password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length - 1)));
    }
    document.getElementById("display").value = password;

    document.getElementById("lastPasswords").innerHTML += password + "<br>";
    console.log(password)
}
function clipboard(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Your password is copied!")
}