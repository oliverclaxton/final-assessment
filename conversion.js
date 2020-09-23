function convertMass(amount, unit){
    if (unit === 'pound'){
        return Math.round(amount * 453.592);
    } else if(unit ==='ounce') {
        return Math.round(amount * 28.35);
    };
}


console.log('10 pounds returns 4536 grams:', convertMass(10, 'pound') === 4536)
console.log('four ounces returns 113 grams:', convertMass(4, 'ounce') === 113) 

console.log("I passed the course", convertMass(10, 'pound') === 4536 && convertMass(4, 'ounce') === 113)