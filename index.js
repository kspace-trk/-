function reverseInputText() {
    const inputText = document.getElementById("inputText").value;
    const inputTextArray = inputText.split(/\n/);
    const reverseArray = inputTextArray.reverse();
    let tmp = '';
    reverseArray.forEach((e) => {
      tmp += '<p>' + e + '</p>';
    })
    document.getElementById('outputText').innerHTML = tmp;
  }


  $(document).ready(function(){
    $('.nice-textbox').blur(function() {
         if($(this).val().length === 0){
           $('.nice-label').removeClass("focus");
         }
         else { returns; }
       })
       .focus(function() {
         $('.nice-label').addClass("focus")
       });
 });