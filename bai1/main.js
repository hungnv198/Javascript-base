
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(array){
    var sum = array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.gold;
    }, 0);
    return sum;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23






