//Khởi tạo và làm việc với phương thức every trong Mảng
//Phương thức thực thi một hàm cho từng phần tử trong mảng,
//hàm trả về true nếu tất cả các phần tử đều trả về true.
//Hàm trả về false nếu một phần tử trả về false.
//
//Syntax: array.every(function(currentValue, index, arr), thisValue)
//Kết quả: boolean: True hoặc False
const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "Yes"}
  ];
//Tạo một phương thức mới:
Array.prototype.myEvery = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var check = callback(this[index], index, this);
            if(!check){
                return false;
            }
        }
    }
    return true;
}

//---------------
function isSameAnswer(el, index, arr) {
    if (index == 0) {
      return true;
    } else {
        return el.answer === arr[index - 1].answer;
    }
}
let result = survey.every(isSameAnswer);
console.log(result);
let result_2 = survey.myEvery(isSameAnswer);
console.log(result_2);