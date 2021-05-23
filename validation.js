
var myForm = function(){
alert('Submit Clicked!');
}




var myInput = document.getElementById("psw");

var letter = document.getElementById("letter");

var capital = document.getElementById("capital");

var number = document.getElementById("number");

var length = document.getElementById("length");

var special = document.getElementById("special");

var maxLength = document.getElementById("maxLength");

var myForm = document.getElementById("validateForm");



// When the user clicks on the password field, show the message box

myInput.onfocus = function() {

  document.getElementById("message").style.display = "block";

}




// When the user clicks outside of the password field, hide the message box

myInput.onblur = function() {

  document.getElementById("message").style.display = "none";

}




// When the user starts to type something inside the password field

myInput.onkeyup = function() {

  // Validate lowercase letters

  var lowerCaseLetters = /[a-z]/g;

  if(myInput.value.match(lowerCaseLetters)) {  

    letter.classList.remove("invalid");

    letter.classList.add("valid");

  } else {

    letter.classList.remove("valid");

    letter.classList.add("invalid");

  }

  

  // Validate capital letters

  var upperCaseLetters = /[A-Z]/g;

  if(myInput.value.match(upperCaseLetters)) {  

console.log(myInput.value.match(upperCaseLetters));

    capital.classList.remove("invalid");

    capital.classList.add("valid");

  } else {

    capital.classList.remove("valid");

    capital.classList.add("invalid");

  }




  // Validate numbers

  var numbers = /[0-9]/g;

  if(myInput.value.match(numbers)) {  

    number.classList.remove("invalid");

    number.classList.add("valid");

  } else {

    number.classList.remove("valid");

    number.classList.add("invalid");

  }

  

  // Validate length

  if(myInput.value.length >= 8) {

    length.classList.remove("invalid");

    length.classList.add("valid");

  } else {

    length.classList.remove("valid");

    length.classList.add("invalid");

  }

  // Validate Max length

  if(myInput.value.length <= 16) {

    maxLength.classList.remove("invalid");

    maxLength.classList.add("valid");

  } else {

    maxLength.classList.remove("valid");

    maxLength.classList.add("invalid");

  }

  // Validate Special Character

  var specials = /[#?!@$%^&*-+]/g;//[#?!@$%^&*-]

    if(myInput.value.match(specials)) {

      special.classList.remove("invalid");

      special.classList.add("valid");

    } else {

      special.classList.remove("valid");

      special.classList.add("invalid");

    }

}

function validatePassword(){
    try{
        var usrname = document.getElementById("usrname").value;
        var i = document.getElementById("psw").value;

        var str = i;
        var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$");
        var res = patt.test(str);
        if(Boolean(res) && !Boolean(currentYear(i)) && Boolean(spaceRest(i))  && Boolean(checkConNumber(i))){
//            alert("Entered Password is valid");
            //alert(i);
            document.getElementById("main").innerHTML = "&#128512;";
            document.getElementById("main").style.fontSize = "100px";
        }else{
            alert("Entered Password is invalid");
            return false;
        }
    }
    catch(e){
        alert(e);
    }
}
function currentYear(i){
    // returns the current year
    var year = new Date().getFullYear();
    return n = i.includes(year);
}
function spaceRest(i){
    var str = i;
    //alert("space"+i.indexOf(' '));
    if(i.indexOf(' ') == 0 || i.indexOf(' ')==i.length-1){
        return false;
    }else {
        if(i.indexOf(' ')!=-1){
            var l = i.length;
            //alert(l);
            //alert(i.split(' ').length-1);
            var n = i.split(' ').length - 1;
            //alert(n);
            if(n/l*100>15)
            return false;
        }

    }
    return true;
    //alert("space --"+res);

}

function checkConNumber(i) {
    var s = i;
    try{
        for (var i = 0; i < s.length-1; i++)
        {
            var res = s.charAt(i);

            //alert(res+" "+isNaN(s.charAt(i+1)));

            if(!isNaN(s.charAt(i)) && !isNaN(s.charAt(i+1))){
                if(parseInt(s.charAt(i))==parseInt(s.charAt(i+1))-1){
                    //alert("");
                    return false;
                }
            }
        }
    }
    catch(e){
        alert(e);
    }
    return true;
}

