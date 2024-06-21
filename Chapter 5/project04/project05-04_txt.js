"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Joseph Gjelaj
      Date:   6.21.24

      Filename: project05-04.js
*/

// project05-04.js

// Assuming the footnotes array is loaded from footnotes.js or directly in this file
let footnotes = [
      "A serf, a person without freedom", 
      "Unnatural, twisted", 
      "Artfullness", 
      "Lost all color", 
      "Appearance, visage", 
      "The wife of King Priam of Troy during the Trojan War",
      "Anything that prompts a speech or action", 
      "An unclear motivation or intent", 
      "An intent which is not delivered or ready for delivery",
      "Head", 
      "A lie that is deep and pervasive", 
      "An oath, short for by God's Wounds", 
      "A temperment that causes one to be quick to anger", 
      "Before", 
      "Fatted all the birds of the air",
      "Entrails", 
      "Devoid of natural feeling or sympathy", 
      "Curse about my condition", 
      "A loose or immoral woman",
      "A kitchen maid, who does the lowliest work", 
      "Change my thoughts!", 
      "A realistic rendition of a scene",
      "Probe his actions to learn his thoughts", 
      "Flinch", 
      "Deludes me to my damnation", 
      "Relevant"
   ];
   
   // Wait for the DOM to be fully loaded before executing JavaScript
   document.addEventListener('DOMContentLoaded', function() {
       // Iterate through all <dfn> elements
       const phrases = document.getElementsByTagName('dfn');
       for (let i = 0; i < phrases.length; i++) {
           phrases[i].onclick = function() {
               // Create elements for popup content
               const phrase = document.createElement('h1');
               phrase.textContent = this.textContent;
   
               const footnote = document.createElement('p');
               footnote.textContent = footnotes[i]; // Retrieve footnote text from footnotes array
               footnote.style.cssText = "font-style: italic; font-size: 1.2em;";
   
               const closeButton = document.createElement('input');
               closeButton.type = 'button';
               closeButton.value = 'Close Footnote';
               closeButton.style.cssText = "display: block; margin: 10px auto;";
   
               // Open a popup window
               const popup = window.open('', 'footnote', 'width=300,height=200,top=100,left=100');
               if (!popup) {
                   alert('Please allow popups for this site.');
                   return;
               }
               popup.document.body.style.cssText = "background-color: ivory; font-size: 16px; padding: 10px;";
   
               // Append elements to the popup window
               popup.document.body.appendChild(phrase);
               popup.document.body.appendChild(footnote);
               popup.document.body.appendChild(closeButton);
   
               // Close popup when closeButton is clicked
               closeButton.onclick = function() {
                   popup.close();
               };
           };
       }
   });
   

  
  