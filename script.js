// Show/Hide converters
function showConverter(id) {
    document.querySelectorAll('.converter').forEach(div => div.style.display='none');
    document.getElementById(id).style.display='block';
}

// Temperature
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
function computeTemp(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "celsius":
            kelvinEl.value = (val + 273.15).toFixed(2);
            fahrenheitEl.value = (val * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((val - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (val - 273.15).toFixed(2);
            fahrenheitEl.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
            break;
    }
}

// Distance
const kmEl = document.getElementById("km");
const milesEl = document.getElementById("miles");
const metersEl = document.getElementById("meters");
function computeDistance(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "km":
            milesEl.value = (val * 0.621371).toFixed(2);
            metersEl.value = (val * 1000).toFixed(2);
            break;
        case "miles":
            kmEl.value = (val / 0.621371).toFixed(2);
            metersEl.value = (val / 0.621371 * 1000).toFixed(2);
            break;
        case "meters":
            kmEl.value = (val / 1000).toFixed(2);
            milesEl.value = (val / 1000 * 0.621371).toFixed(2);
            break;
    }
}

// Weight
const kgEl = document.getElementById("kg");
const gramsEl = document.getElementById("grams");
const lbsEl = document.getElementById("lbs");
function computeWeight(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "kg":
            gramsEl.value = (val * 1000).toFixed(2);
            lbsEl.value = (val * 2.20462).toFixed(2);
            break;
        case "grams":
            kgEl.value = (val / 1000).toFixed(2);
            lbsEl.value = (val / 1000 * 2.20462).toFixed(2);
            break;
        case "lbs":
            kgEl.value = (val / 2.20462).toFixed(2);
            gramsEl.value = (val / 2.20462 * 1000).toFixed(2);
            break;
    }
}

// Time
const secEl = document.getElementById("sec");
const minEl = document.getElementById("min");
const hoursEl = document.getElementById("hours");
function computeTime(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "sec":
            minEl.value = (val / 60).toFixed(2);
            hoursEl.value = (val / 3600).toFixed(2);
            break;
        case "min":
            secEl.value = (val * 60).toFixed(2);
            hoursEl.value = (val / 60).toFixed(2);
            break;
        case "hours":
            secEl.value = (val * 3600).toFixed(2);
            minEl.value = (val * 60).toFixed(2);
            break;
    }
}

// Volume
const litersEl = document.getElementById("liters");
const mlEl = document.getElementById("milliliters");
const gallonsEl = document.getElementById("gallons");
function computeVolume(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "liters":
            mlEl.value = (val * 1000).toFixed(2);
            gallonsEl.value = (val * 0.264172).toFixed(2);
            break;
        case "milliliters":
            litersEl.value = (val / 1000).toFixed(2);
            gallonsEl.value = (val / 1000 * 0.264172).toFixed(2);
            break;
        case "gallons":
            litersEl.value = (val / 0.264172).toFixed(2);
            mlEl.value = (val / 0.264172 * 1000).toFixed(2);
            break;
    }
}

// Area
const sqmEl = document.getElementById("sqm");
const sqftEl = document.getElementById("sqft");
const acresEl = document.getElementById("acres");
function computeArea(event){
    const val = +event.target.value;
    switch(event.target.name){
        case "sqm":
            sqftEl.value = (val * 10.7639).toFixed(2);
            acresEl.value = (val * 0.000247105).toFixed(5);
            break;
        case "sqft":
            sqmEl.value = (val / 10.7639).toFixed(2);
            acresEl.value = (val / 43560).toFixed(5);
            break;
        case "acres":
            sqmEl.value = (val / 0.000247105).toFixed(2);
            sqftEl.value = (val * 43560).toFixed(2);
            break;
    }
}
