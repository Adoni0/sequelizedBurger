$(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).children('.burgers-uneaten').val();
    alert(id);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      method: "PUT"
    }).then(
      function() {
        console.log(id);
        // Reload the page to get the updated list
        window.location.reload();
      }
    );
  });

  $('#submitBtn').on("click", () => {
    console.log('BUTTON CLICKED');
    window.location.reload();
  });

});

