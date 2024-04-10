// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

function fromDollarToYen (valueInDollars) {
    let valueInYen = valueInDollars * 156.5;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}

const sum = (a, b) => {
    return a + b 
}

console.log(sum(7, 3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};