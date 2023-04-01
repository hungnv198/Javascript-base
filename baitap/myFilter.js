//Khởi tạo và làm việc với phương thức filter
//Trả về một mảng với các phần tử thỏa mãn một điều kiện.
//filter không thực thi đối với các element trống.
//filter không làm thay đổi mảng gốc
//Cú pháp: array.filter(function(currentValue, index, arr), thisValue)
//Kết quả trả về một mảng chứa các đối tượng đúng với yêu cầu
/*
//Ví dụ 1:
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);//(3) [32, 33, 40]
//Tự tạo phương thức filter
Array.prototype.myFilter = function(callback){
    //Tạo một mảng để chứa kết quả trả về
    var result_arr = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            //Đặt biến để nhận các giá trị điều kiện
            var check = callback(this[index], index, this);
            //Các element thỏa mãn điều kiện sẽ đc push vào mảng
            if(check){
                result_arr.push(this[index]);
            }
        }
    }
    //Trả về kết quả của mảng.
    return result_arr;
}
var result_2 = ages.myFilter(checkAdult);
console.log(result_2);
*/