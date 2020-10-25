import $ from 'jquery';
import './styles/index.css';
import meals from './scripts/meals';
import render from './scripts/render'

const main = () => {
    meals.getMeals();
    render.render();
    render.reset();
}

$(main)