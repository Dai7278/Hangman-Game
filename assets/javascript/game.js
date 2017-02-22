//javascript


var textarea = document.querySelector("textarea");
  textarea.addEventListener("keydown", function(event) {
 

  });

  function replaceSelection(field, word) {
    var from = field.selectionStart, to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word +
                  field.value.slice(to);
    
    field.selectionStart = field.selectionEnd =
      from + word.length;
  }
};

var