//--------------------------Khởi tạo và làm việc với phương thức forEach()-------------------
//---------------------
//Giống với map, forEach() khởi tạo một hàm thực thi các phần tử trong mảng
//Syntax: 
//array.forEach(function(currentValue, index, arr), thisValue)
//Giá trị trả về: undefined.
//Dùng hàm có sẵn của array:
/*
let sum = 0;
const numbers_1 = [65, 44, 12, 4];

function myFunction_1(item) {
  sum += item;
}
//Tạo một phương thức mới trong prototype của Array:
Array.prototype.myForEach = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
// numbers_1.myForEach(myFunction_1);
// console.log(sum);
//Ví dụ 2:
function myFunction_2(item, index, arr) {
    arr[index] = item * 10;
}
numbers_1.myForEach(myFunction_2);
console.log(numbers_1);//(4) [650, 440, 120, 40]
*/