import $ from 'jquery';
import render from './render'

const store = {
    meals: [],
    totaltips: 0
}

// getting the value of our inputs //
const grabValues = () => {
    $('main').on('click', '#submit', event => {
        console.log('createMeal ran');
        //grabbing our values
        let mealPrice = parseFloat($('#mealPrice').val());
        let taxRate = parseFloat($('#taxRate').val());
        let tipPercent = parseFloat($('#tipPercent').val());
        // validating our values
        if (Number.isNaN(mealPrice)
        || Number.isNaN(taxRate)
        || Number.isNaN(tipPercent)) {
                alert(`Please correct input.\nAll fields must have numbers inputted!`);
            } else {
        // creating a meal with our values and adding them to meals array
        addMeal(createMeal(mealPrice, taxRate, tipPercent))
        render.render();
        }
    })
}

const createMeal = (price, taxRate, tipRate) => {
    let tax = taxRate/100 * price;
    let tip = tipRate/100 * price;
    store.totaltips += tip;
    return {
        price: price,
        tax: tax,
        tip: tip,
        total: price + tip + tax
    }
}

const addMeal = (meal) => {
    store.meals.push(meal)
    console.log(store.meals);
}


const getMeals = () => {
    grabValues();
}

export default {
    getMeals,
    store
}