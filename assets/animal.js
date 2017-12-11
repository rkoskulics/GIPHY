// Empty array to hold the animal the user types in
var animalList = ["sparrows", "fox", "bulldog"];

function renderButtons() {
        // Delete the content inside the animal-view div prior to adding new animal
        $("#animal-view").html("<h1></h1>");
        // Loop through the array of animals, then generate buttons for each animals in the array
        for(var i = 0; i < animalList.length; i++ ) {
          var animalButton= $('<input type="button" value="' + animalList[i] + '"/>');
          animalButton.addClass("animal");
          animalButton.attr("data-name", animalList[i])
        $("#animal-view").append(animalButton);
        }

      };

// This function handles events where the add animal button is clicked
$("#add-animal").on("click", function(event) {
    event.preventDefault();
    // Write code to grab the text the user types into the input field
    var animal = $("#animal-input").val().trim();
    // Write code to add the new movie into the animalList array
    animalList.push(animal);
    console.log(animalList)
    renderButtons();
    });

function displayAnimalGif() {
	var animalName = $(this).attr("data-name");
	console.log(animalName);
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lzcGYta9bfMdDiwu3ZImzoJH3rgRatgC&q=" + animalName + "&limit=10&offset=0&&lang=en";
	$.ajax({
      url: queryURL,
      // The next line tells the previous URL what we want to do to it.
      method: "GET"
      // the next line says to stop the request, then run a function.
    }).done(function(response) {
    	for (var i = 0; i < response.data.length - 1; i++) {
    		// Check to see if it pulls the right URL
    		console.log(response.data[i].images.fixed_height_still.url)
    		// Saves the URL in a variable to use later
    		var imageUrl = response.data[i].images.fixed_height_still.url
    		// creates an image tag to put into the HTML
    		var animalImage = $("<img>");
    		//Adds the src attribute and url to the image tag, and alt text
        	animalImage.attr("src", imageUrl);
        	animalImage.attr("alt", "animal image");
        	// Puts the GIF on the HTML
        	$("#gifs").prepend(animalImage);    	}
    	
    });
};
// Adding click event listeners to all elements with a class of "animal"
$(document).on("click", ".animal", displayAnimalGif);
// Starts the website with a few buttons
renderButtons();