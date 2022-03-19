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

      // console.log(newSummary);
  
      $("ul#order").append("<li><span class='summary'>" + newSummary.orderSummary() + "</span></li>");
  
      $("select#new-choice-of-pizza").val("");
      $("select#new-size").val("");
      $("select#new-crust").val("");
      $("select#new-toppings").val("");
      $("input#new-number-of-pizzas").val("");

    });
  }); 