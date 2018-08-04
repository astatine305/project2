function allLiked() {
      var query = "SELECT * products FROM Liked";
      connection.query(function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
      });
    });
}

$(function() {
  $(".change-liked").on("click", function (event) {
    var id = $(this).data("id");
    var newLiked = $(this).data("newliked");

    var newLikedState = {
      liked: newLiked
    };

    // Send the PUT request.
    $.ajax("/api/products/" + id, {
      type: "PUT",
      data: newLikedState
    }).then(
      function() {
        console.log("changed liked to", newLiked);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newProduct = {
      name: $("#ca").val().trim(),
      liked: $("[name=liked]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/products", {
      type: "POST",
      data: newProduct
    }).then(
      function () {
        console.log("added new product");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-product").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/products/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted product", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
