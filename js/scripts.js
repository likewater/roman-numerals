var numbersArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var index;
//backend logic
var RomanNumOnes = function(textInput) {
  //textInput = )
  if (index = textInput - 1) {
    return numbersArray[index];
  } else {

  }

}


//front end logic
$(function() {
  $("#formOne").submit(function() {

  event.preventDefault();
  var textInput2 = $("input#textInput").val();
  var result = RomanNumOnes(textInput2);
  console.log(numbersArray);
  $("#output").text(numbersArray[index]);


  });
});
