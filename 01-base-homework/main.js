// create 3 variables 
const applePrice = 15.678;
const orangePrice = 123.965;
const bananaPrice = 90.2345;

// Math.min/max
const minGoodsPrice = Math.min(applePrice, orangePrice, bananaPrice); 
const maxGoodsPrice = Math.max(applePrice, orangePrice, bananaPrice); 
console.log(`Min value: ${minGoodsPrice}`);
console.log(`Max value: ${maxGoodsPrice}`);

// sum all of goods
const totalPrice = applePrice + orangePrice + bananaPrice;
console.log(`Total price: ${totalPrice}`);

// rounded to down 
const roundedToDown = Math.floor(applePrice) + Math.floor(orangePrice) + Math.floor(bananaPrice);
console.log(`Rounded sum of goods: ${roundedToDown}`);

// rounded to up hundreds 
const roundedToHundreds = Math.ceil(totalPrice / 100) * 100;
console.log(`Rounded to hundreds: ${roundedToHundreds}`);

// boolean check for even number
console.log(`The total price is even: ${Math.floor(totalPrice) % 2 === 0 ? true : false}`);
console.log(`The total price is odd: ${Math.floor(totalPrice) % 2 === 1 ? true : false}`);

// change
const customerPayment = 500;
const customerChange = (customerPayment - totalPrice).toFixed(2); 
console.log(`The change from 500 UAH is: ${customerChange}`);

// average price 
console.log(`The average prices are: Apples - ${applePrice.toFixed(2)}, Oranges - ${orangePrice.toFixed(2)}, Bananas - ${bananaPrice.toFixed(2)}`);

// random discount 
const customerDiscount = Math.floor(Math.random() * 30 + 1) / 100; // range 1...30

// price with discount
const discountPrice = ((totalPrice) - (totalPrice * customerDiscount)).toFixed(2);
console.log(`Price with discount of ${customerDiscount * 100}% is ${discountPrice}`);

// profit with discount 
const profit = ((totalPrice / 2) - (totalPrice - discountPrice)).toFixed(2);
console.log(`Profit with customer discount is: ${profit}`);

const templateString = `
    Max price - ${maxGoodsPrice}
    Min price - ${minGoodsPrice}
    Total price - ${totalPrice}
    Rounded and sum prices of goods with floor method (to down) - ${roundedToDown}
    Rounded sum of goods to hundreds with ceil method(to up) - ${roundedToHundreds}
    The total price is even - ${Math.floor(totalPrice) % 2 === 0 ? true : false}
    The total price is odd - ${Math.floor(totalPrice) % 2 === 1 ? true : false}
    The change from 500 UAH is - ${customerChange}
    The average prices are: Apples - ${applePrice.toFixed(2)}, Oranges - ${orangePrice.toFixed(2)}, Bananas - ${bananaPrice.toFixed(2)}
    Price for customer with discount of ${customerDiscount * 100}% is - ${discountPrice}
    Profit with customer discount is - ${profit}
`;

console.log(templateString);