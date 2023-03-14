// Add your remove.bg API key here
const API_KEY = "jT3hGzo1oxN8hzAwSuX9brHo";

function removeBackground() {
  // Get the selected image file
  const image = document.getElementById('image').files[0];

  // Create a new FormData object
  const formData = new FormData();
  formData.append('image_file', image);

  // Make a POST request to the remove.bg API
  axios.post('https://api.remove.bg/v1.0/removebg', formData, {
    headers: {
      'X-Api-Key': API_KEY
    },
    responseType: 'blob'
  })
    .then(response => {
      // Create a new image element with the removed background image
      const imageURL = URL.createObjectURL(response.data);
      const img = document.createElement('img');
      img.src = imageURL;

      // Append the image to the result div
      const result = document.getElementById('result');
      result.innerHTML = '';
      result.appendChild(img);

      // Show the download link and set its href to the new image URL
      const downloadLink = document.querySelector('.download-link');
      downloadLink.style.display = 'inline-block';
      downloadLink.href = imageURL;
    })
    .catch(error => {
      console.log(error);
    });
}
