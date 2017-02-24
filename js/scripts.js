var romanNumbIndex = [ ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                       ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                       ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                       ["M", "MM", "MMM", "MMMM"] ]


//backend logic
var RomanNumOnes = function(textInput) {
  var result = []
  var splitInput = textInput.split("").reverse();

  for (i = 0; i < splitInput.length; i++) {
    if(splitInput[i] === "0") {
    } else {
      var inputInt = parseInt(splitInput[i]);
      result.unshift(romanNumbIndex[i][inputInt-1]);
    }
  }
  return result.join("");
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
