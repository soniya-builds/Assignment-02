function calculateAiCost(tokensUsed){
    if (typeof tokensUsed!=="number"||tokensUsed<0){
        return "Invalid";
    }
    if (tokensUsed<=500){
        return 0;
    }
    let extraTokens =tokensUsed-500;
    let chargeable = Math.floor(extraTokens/100);
    let cost = chargeable * 5;
    return cost;
}

// console.log(calculateAiCost(300));
// console.log(calculateAiCost(1000));
// console.log(calculateAiCost("500"));