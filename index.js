function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  // Replace img
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  // Display results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit( event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log(`App loaded! Waiting for submit.`);
  watchForm();
})