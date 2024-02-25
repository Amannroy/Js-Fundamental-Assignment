// Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
// "overnight" would be delivered the next day.

function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "unknown";
    }

    return deliveryTime;
}

// Test the function with different package types
console.log("Package Type: standard, Estimated Delivery Time:", calculateDeliveryTime("standard"));
console.log("Package Type: express, Estimated Delivery Time:", calculateDeliveryTime("express"));
console.log("Package Type: overnight, Estimated Delivery Time:", calculateDeliveryTime("overnight"));
console.log("Package Type: unknown, Estimated Delivery Time:", calculateDeliveryTime("unknown"));
