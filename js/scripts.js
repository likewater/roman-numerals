var onesArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var index;
//backend logic
var RomanNumOnes = function(textInput) {
  //textInput = )
  alert(textInput);
  if (index = textInput - 1) {
    return onesArray[index];
  //} else {

  }

}

//front end logic
$(function() {
  $("#formOne").submit(function() {

  event.preventDefault();
  var numbInput = $("input#textInput").val();
  var result = RomanNumOnes(numbInput);
  console.log(onesArray);
  $("#output").text(result);


  });
});
