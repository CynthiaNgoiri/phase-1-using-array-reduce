const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// a=0, c=4 => a=4
// a=4, c=5 => a=9
// a=9, c=3 => a=12
// a=12 c=4 => a=16
// a=16,c=4 => a=20
// a=20 c=6 => a=26
// a=26 c=5 => a=31
const totalBatteries=batteryBatches.reduce((accum,currentValue)=>{
    let sum=accum+currentValue;
    return sum;

}, 0);
