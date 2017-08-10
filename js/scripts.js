$(document).ready(function(){
  $("#match-form").submit(function(event){
    var age = $("#age").val();
    var movie  = $("input:radio[name=movies]:checked").val();
    var music  = $("input:radio[name=music]:checked").val();
    var sports = $("input:radio[name=sports]:checked").val();
    var gender  = $("input:radio[name=gender]:checked").val();
    age = parseInt(age);
    if (age){
      if(age > 15){
        $('.match').hide();
        if(music === 'yes'){
          if(gender === 'male'){
            $('#justin').show()
          }
          else {
            $('#selena').show();
          }
        }
        if(movie === 'yes'){
          if(gender === 'male'){
            $('#christoph').show();
          } else {
            $('#helen').show();
          }
        }
        if(sports === 'yes'){
          if(gender === 'male'){
            $('#marshawn').show();
          } else {
            $('#venus').show();
          }
        }
      }
      else alert("you are not suitable of dating.you should focus on studies and sports");
    }
    else {
      alert("you must enter the age");
    }
    (event).preventDefault();
  });
});
