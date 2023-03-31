//----------------------------Làm việc với method map trong array----------
/*
//Syntax
//array.map(function(currentValue, index, arr), thisValue)
//Giá trị trả về: Array
//Dùng map có sẵn
var arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function test_1(value, index, array){
    return value * index;
}
// console.log(arr_1.map(test_1));
//Tạo ra một phương thức map mới:
Array.prototype.map_2 = function(cb){
    var a_r_r = []
    for(var index in this){
        //Để loại bỏ prototype ta dùng câu lệnh
        if(this.hasOwnProperty(index)){
            a_r_r.push((cb(this[index], index, this)));
        }
    }
    return a_r_r;
}
console.log(arr_1.map_2(test_1))//[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
*/