// This class uses te weather as part of its Conditionals
const weather = "sunny";

// basic if/else statement
if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else if (weather === "sunny") {
    console.log("Wear your sunglasses!");
} else {
    console.log("Have a nice day!");
}

// Ternanry Operation
console.log(
    weather === "rainy" ? "Don't forget your umbrella!" : weather === "sunny" ? "Wear your sunglasses!" : "Have a nice day!"
);

//Switch case
switch(weather){
    case "rainy" :
        console.log("Don't forget your umbrella!");
        break; // required to escape switch statement
    case "sunny" :
        console.log("Wear your sunglasses!");
        break;
    default :
        console.log("Have a nice day!");
        break;
}

