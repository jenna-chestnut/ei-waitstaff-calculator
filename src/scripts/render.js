import $ from 'jquery';
import meals from './meals'

// builds our calculator
const grabCalculator = () => {
    let totalMeals = meals.store.meals.length;
    let index = totalMeals - 1;
    let lastMeal = meals.store.meals;
    return `<div class="block mealdetails">
    <h3>MEAL DETAILS</h3>
    <hr>
    <p>Base Meal Price: $ <input type="text" id="mealPrice" /></p>
    <p>Tax Rate: % <input type="text" 
      style="width: 50px" id="taxRate"/></p>
    <p>Tip Percentage: % <input type="text" 
      style="width: 50px" id="tipPercent"/></p>
      <div class="submitcancel">
    <button id="cancel">Cancel</button>
    <button id="submit">Submit</button></div>
  </div>

    <div class="group">
      <div class="item block">
          <h3>CHARGES</h3>
          <hr>
          <p>Subtotal:<b> ${index >= 0 ? 
            lastMeal[index].price.toFixed(2) : "0.00"}</b></p>
          <p>Tip:<b> ${index >= 0 ? 
            lastMeal[index].tip.toFixed(2) : "0.00"}</b></p>
          <p>Total:<b> ${index >= 0 ?
             lastMeal[index].total.toFixed(2) : "0.00"}</b></p>
      </div>
      <div class="item block">
          <h3>EARNINGS</h3>
          <hr>
          <p>Total Tips:<b> ${meals.store.totaltips.toFixed(2)}</b></p>
          <p>Total Meals:<b> ${totalMeals}</b></p>
          <p>Avg Tip:<b> ${index >= 0 ? (meals.store.totaltips/totalMeals).toFixed(2) : "0.00"}</b></p>
      </div>
    </div>
<div class="reset"><button id="reset">reset</button></div>`
}

// creates our calculator using store variables
const render = () => {
    $('main').html(grabCalculator());

    $('main').on('click', "#cancel", event => {
        $('#mealPrice').val("");
        $('#taxRate').val("");
        $('#tipPercent').val("")
    })
}

// resets our store and re-renders
const reset = () => {
    $('main').on('click', '#reset', event => {
        meals.store.meals = [];
        meals.store.totaltips = 0;
        render();
    })
}

export default {
    render,
    reset
}