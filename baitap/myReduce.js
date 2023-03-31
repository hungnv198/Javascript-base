/*
//--------------------------------Reduce với mảng đơn giản---------------------
// Syntax:


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//Kết quả trả về phụ thuộc vào hàm gọi

var arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Tính tổng: 
//Dùng reduce có sẵn của Array:
var i = 0;
function numberHandle(accumulator, currentValue){
    i++;
    console.table({
        'luot chay :': i,
        'bien tich tru: ' : accumulator,
        'gia tri hien tai: ' : currentValue
    });
    return accumulator + currentValue;
}
// var total_1 = arr_1.reduce(numberHandle, 0);
// console.log(total_1);
//Tự tạo một hàm reduce mới
//Sử dụng thuộc tính protype để tạo một phương thức mới
//hàm reduce nhận 2 đối số là callbackfuction và giá trị khởi tạo
*/
/*
Array.prototype.reduce_2 = function(callback, result){
    //Tính độ dài của mảng
    var leng = this.length;
    var i = 0;
    //Xét trường hợp không truyền giá trị khởi tạo thì gán giá trị đầu tiên của mảng
    //là giá trị khởi tạo
    if(arguments.length < 2){
        result = this[0];
        i = 1;
    }
    //Chạy vòng lặp các phần tử của mảng
    for(; i < leng; i++){
        if(this.hasOwnProperty(i)){
            result = callback(result, this[i], i, this);
        }
    }
    //trả về kết quả
    return result;
}
/*
var total_2 = arr_1.reduce_2(numberHandle);
console.log(total_2);
*/
//-----------------------------------reduce với mảng phức tạp-----------------
/*
var arr_2 = [
    {
        name: 'JavaScript',
        course: {
            id: 1,
            coin: 100
        }
    },
    {
        name: 'PHP',
        course: {
            id: 2,
            coin: 100
        }
    },
    {
        name: 'Ruby',
        course: {
            id: 3,
            coin: 100
        }
    }
]
var sum_2 = arr_2.reduce_2(function(totalCoin, currentCoin){
    return totalCoin + currentCoin.course.coin;
}, 0);

console.log(sum_2);
*/