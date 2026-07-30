//greater than a specific value 

function isElevatorSafe(weights){
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    let allWeight = 0;
    for(let i=0;i<weights.length;i++){
        allWeight+=weights[i];                               //allWeight+Array[i];
    }
    if(allWeight<=400){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isElevatorSafe([60, 75, 50]));
// console.log(isElevatorSafe([90, 100, 95, 120]));
// console.log(isElevatorSafe([400]));
// console.log(isElevatorSafe("60,75,50")); 