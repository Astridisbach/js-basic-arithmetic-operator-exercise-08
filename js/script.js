"use strict";

// 4. Opret variabler med startværdier
let subtotal = 80; // Delbeløb starter på 80 dollars
let discount = 15; // Rabat på 15 dollars
let shipping = 10; // Fragt koster 10 dollars

// 5. Brug -= for at trække rabatten fra delbeløbet
subtotal -= discount;

// 6. Beregn totalbeløbet som delbeløb + fragt
let total = subtotal + shipping;

// 7. Hent HTML-elementerne
let subtotalElement = document.getElementById("subtotal"); // Finder delbeløbs-elementet
let shippingElement = document.getElementById("shipping"); // Finder fragt-elementet
let totalElement = document.getElementById("total"); // Finder totalbeløbs-elementet

// Opdater HTML-indholdet med de beregnede værdier
subtotalElement.textContent = subtotal.toFixed(2); // Opdaterer delbeløbet og viser 2 decimaler
shippingElement.textContent = shipping.toFixed(2); // Opdaterer fragtbeløbet
totalElement.textContent = total.toFixed(2); // Opdaterer totalbeløbet

// Log værdierne til konsollen for fejlfinding
console.log("Subtotal:", subtotal);
console.log("Shipping:", shipping);
console.log("Total:", total);
