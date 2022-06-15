// Obtain the img element, and assign it to the image variable
let image = document.getElementById('pet')
// image.src= "file:///Users/apple/Documents/rambo.%20Search_files/876bb7a8-e8dd-4e36-ab3a-f0b9aba942e5.jpg"
//     document.getElementById.append(img)

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById('shrink-grow')

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})