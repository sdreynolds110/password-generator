function generate(){
    var complexity = document.getElementById("slider").value;
    var values = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+");
    var password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").values = password;
    document.getElementById("lastPasswords").innerHTML += password + "<br>";
}