$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const personName =$("input#name").val();
    const favoriteFood = $("#food").val();
    const favoriteMusic = $("input:radio[name=music]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();


    $(".name").text(personName);

    event.preventDefault();
  })
})