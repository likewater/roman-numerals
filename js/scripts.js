var romanNumbIndex = [ ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                       ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                       ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                       ["M", "MM", "MMM", "MMMM"] ]

var index;
//backend logic
var RomanNumOnes = function(textInput) {
  var inputLength = textInput.length;
  alert(inputLength);
  var index = textInput;
  alert(textInput);
  if (inputLength = 1) {
    return romanNumbIndex[0][index - 1];
  //} else {
  }
}






//front end logic
$(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var numbInput = $("input#textInput").val();
    var result = RomanNumOnes(numbInput);
    console.log(romanNumbIndex);
    //$("#output").text(romanNumbIndex[0][3]);
    $("#output").text(result);
  });
});
