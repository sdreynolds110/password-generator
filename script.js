function generate(){
    var sliderValues = document.getElementById("slider").values;
    var values = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+");
    var password = "";

    for(var i = 0; i <= sliderValues; i++){
        password += values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").values = password;

    document.getElementById("lastPasswords").innerHTML += password + "<br>";
    console.log(password)
}
function clipboard(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Your password is copied!")

}
