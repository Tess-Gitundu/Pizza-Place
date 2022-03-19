// business logic
function Summary(choice, size, crust, toppings, number){
    this.choiceOfPizza = choice;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
Summary.prototype.orderSummary = function() {
  return this.choiceOfPizza + "<br> " + this.size + "<br>" + this.crust  + "<br>" + this.toppings + "<br>" + this.number;
}

var pizzaSizePrice = {
  small: 500,
  medium: 800,
  large: 1000
}
var pizzaCrustPrice = {
  crispy: 200,
  stuffed: 200,
  glutenFree: 200
}
var pizzaToppingsPrice = {
  extraCheese: 200,
  extraBacon: 200,
  extraVeggies: 200
}

pricesArray = [
  parseInt(pizzaSizePrice.small),
  parseInt(pizzaSizePrice.medium),
  parseInt(pizzaSizePrice.large),
  parseInt(pizzaCrustPrice.crispy),
  parseInt(pizzaCrustPrice.stuffed),
  parseInt(pizzaCrustPrice.glutenFree),
  parseInt(pizzaToppingsPrice.extraCheese),
  parseInt(pizzaToppingsPrice.extraBacon),
  parseInt(pizzaToppingsPrice.extraVeggies),
];
var customerName = document.getElementById("name").value;
var customerLocation = document.getElementById("location").value;
// user interface logic 

$(document).ready(function() {
    $("form#new-summary").submit(function(event) {
      event.preventDefault();
  
      var inputtedChoice = $("select#new-choice-of-pizza").val();
      var inputtedSize = $("select#new-size").val();
      var inputtedCrust = $("select#new-crust").val();
      var inputtedToppings = $("select#new-toppings").val();
      var inputtedNumber = $("input#new-number-of-pizzas").val();
  
      var newSummary = new Summary(inputtedChoice, inputtedSize, inputtedCrust, inputtedToppings, inputtedNumber);

      if (newSummary.size == "Small") {
        if (newSummary.crust == "Crispy") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[0] + pricesArray[3] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[0] + pricesArray[3] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[0] + pricesArray[3] + pricesArray[8];
          }
        }else if (newSummary.crust == "Stuffed") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[0] + pricesArray[4] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[0] + pricesArray[4] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[0] + pricesArray[4] + pricesArray[8];
          }
        }else if (newSummary.crust == "Gluten Free") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[0] + pricesArray[5] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[0] + pricesArray[5] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[0] + pricesArray[5] + pricesArray[8];
          }
        }
      }else if (newSummary.size == "Medium") {
        if (newSummary.crust == "Crispy") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[1] + pricesArray[3] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[1] + pricesArray[3] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[1] + pricesArray[3] + pricesArray[8];
          }
        }else if (newSummary.crust == "Stuffed") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[1] + pricesArray[4] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[1] + pricesArray[4] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[1] + pricesArray[4] + pricesArray[8];
          }
        }else if (newSummary.crust == "Gluten Free") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[1] + pricesArray[5] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[1] + pricesArray[5] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[1] + pricesArray[5] + pricesArray[8];
          }
        }
      }else if (newSummary.size == "Large") {
        if (newSummary.crust == "Crispy") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[2] + pricesArray[3] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[2] + pricesArray[3] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[2] + pricesArray[3] + pricesArray[8];
          }
        }else if (newSummary.crust == "Stuffed") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[2] + pricesArray[4] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[2] + pricesArray[4] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[2] + pricesArray[4] + pricesArray[8];
          }
        }else if (newSummary.crust == "Gluten Free") {
          if (newSummary.toppings == "Extra Cheese") {
            var sum = pricesArray[2] + pricesArray[5] + pricesArray[6];
          }else if (newSummary.toppings == "Extra Bacon") {
            var sum = pricesArray[2] + pricesArray[5] + pricesArray[7];
          }else if (newSummary.toppings == "Extra Veggies") {
            var sum = pricesArray[2] + pricesArray[5] + pricesArray[8];
          }
        }
      }
  
      $("ul#order").append("<li><span class='summary'>" + newSummary.orderSummary() + " " +sum + "</span></li>");
  
      $("select#new-choice-of-pizza").val("");
      $("select#new-size").val("");
      $("select#new-crust").val("");
      $("select#new-toppings").val("");
      $("input#new-number-of-pizzas").val("");

      
    });
  }); 
  

  function deliver() {
    alert("Hi" + customerName + " your order will be delivered to" + customerLocation);
  }
  