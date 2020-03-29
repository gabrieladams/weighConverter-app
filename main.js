"use strict";

let unitSelectorElement = document.getElementById("unitSelector");

let unitName_1_Element = document.getElementById("unitName_1");
let unitName_2_Element = document.getElementById("unitName_2");

let unitInputElement = document.getElementById("unitInput");

let unitValue_1_Element = document.getElementById("unitValue_1");
let unitValue_2_Element = document.getElementById("unitValue_2");

let outputElement = document.getElementById("output");

outputElement.style.visibility = "hidden";

// unitSelectorElement.onchange = function() {};

unitSelectorElement.addEventListener("change", e => {
  let unitName = e.target.value;

  if (unitName === "grammes") {
    unitInputElement.placeholder = "Enter grammes...";

    unitName_1_Element.innerHTML = "Kilograms:";
    unitName_2_Element.innerHTML = "Tonnes:";
  }

  if (unitName === "Kilograms") {
    unitInputElement.placeholder = "Enter kilograms...";

    unitName_1_Element.innerHTML = "grammes:";
    unitName_2_Element.innerHTML = "Tonnes:";
  }

  if (unitName === "Tonnes") {
    unitInputElement.placeholder = "Enter Tonnes...";

    unitName_1_Element.innerHTML = "grammes:";
    unitName_2_Element.innerHTML = "Kilograms:";
  }
});

unitInputElement.addEventListener("input", e => {
  let unitValue = e.target.value;

  outputElement.style.visibility = "visible";

  if (unitSelectorElement.value === "grammes") {
    unitValue_1_Element.innerHTML = unitValue / 1000;
    unitValue_2_Element.innerHTML = unitValue / 1000000;
  }

  if (unitSelectorElement.value === "Kilograms") {
    unitValue_1_Element.innerHTML = unitValue * 1000;
    unitValue_2_Element.innerHTML = unitValue / 1000;
  }

  if (unitSelectorElement.value === "Tonnes") {
    unitValue_1_Element.innerHTML = unitValue * 1000000;
    unitValue_2_Element.innerHTML = unitValue * 1000;
  }
});
