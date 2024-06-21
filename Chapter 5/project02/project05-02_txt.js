"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Joseph Gjelaj
      Date:   6.21.24

      Filename: project05-02.js
*/
const images = document.querySelectorAll('#photo_bucket img'); // Select all images in photo_bucket
const photoBucket = document.getElementById('photo_bucket'); // Reference to photo bucket element
const photoList = document.getElementById('photo_list'); // Reference to photo list element

// Event listener for each image
images.forEach(image => {
   image.onclick = function() {
      if (this.parentElement.id === 'photo_bucket') {
         // Move image to photo_list
         let newItem = document.createElement('li');
         newItem.appendChild(this);
         photoList.appendChild(newItem);
      } else {
         // Move image back to photo_bucket
         let oldItem = this.parentElement;
         photoBucket.appendChild(this);
         oldItem.parentElement.removeChild(oldItem);
      }

      // Renumber the photo_list
      renumberPhotoList();
   };
});

// Function to renumber the items in photo_list
function renumberPhotoList() {
   const items = photoList.getElementsByTagName('li');
   for (let i = 0; i < items.length; i++) {
      items[i].textContent = `Photo ${i + 1}`; // Update text content to reflect the new order
   }
}
