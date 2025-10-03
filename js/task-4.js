function getShippingCost(country){
    let price;
    switch (country) {
        case "China":
        price = 100;
            break;
        case "Chile":
        price = 250;
        break;
        case "Australia":
        price = 170;
        break;
        case "Jamaica":
        price = 120;
            break;
        default:
            "Sorry, there is no delivery to your country"
            break;
    }
    return `Shipping to ${country} will cost ${price} credits`;
}
/*
China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів


*/



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
