//Khoi tao va lam viec voi ham some trong array
//Kiểm tra xem có bất kì phần tử nào thỏa mãn điều kiện đặt ra không.
//Phương thức trả về : True nếu một trong các phần tử trả về là true
//Phương thức trả về : False nếu tất cả các phần tử trả về là false

//Syntax:array.some(function(value, index, arr), this)
//Return: boolean: True hoặc False
//Ví dụ:
/*
var ages = [30, 20, 33, 28, 19, 60, 5];
var Adult = []
function checkAdult(value){
    return value > 98;
}
//Dùng hàm some có sẵn của Array
// var result = ages.some(checkAdult);
//Tự tạo phương thức some cho Array:
Array.prototype.mySome = function(callback){
    for(var key in this){
        if(callback(this[key], key, this)){
            return true;
        };   
    }
    return false;
}
var result = ages.mySome(checkAdult);

console.log(result);//True
*/