// function string_to_array(str) {
//   return str.split(" ");
// }

// console.log(string_to_array("Robin Singh"));

// function removeValue(str, num) {
//     if (str.length > num) {
//       return str.slice(0, num);
//     } else {
//       return str;
//     }
// }
// console.log(removeValue("Robin Singh", 4));
  
  
  function repeat_string(str, count = 0) {
    if (typeof str !== "string" || typeof count !== "number") {
      return "Error in string or count.";
    }
    if (count < 1) {
      return "";
    }
    return str.repeat(count);
  }
  console.log(repeat_string("a", 4));
  


  function search_word(str, word) {
    var count = 0;
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
      if (words[i] == word) {
        count++;
      }
    }
    return "'" + word + "' was found " + count + " times.";
  }
  console.log(search_word("The quick brown fox", "fox"));
  

