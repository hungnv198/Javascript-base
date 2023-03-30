//Khai bao biến trong javascript
//------------Hàm built in
// Hàm alert: Hiển thị một thông báo
//alert("Hiển thị một thông báo");
// Hàm console: In ra một nội dung
//console.log("Đây là lệnh console.log");
// Hàm confirm: Hàm xác nhận điều kiện 
//confirm("Bạn có đủ 18 tuổi ?");
// Hàm promt: Nhập dữ liệu và xác nhận
//prompt("Bạn đến từ đâu ?");
// Hàm setTimeout: hàm cho code thực thi sau 1 khoảng tgian
/*  setTimeout(showAlert, 5000);
    function showAlert(){
    alert("Test hàm setTimeout");
    }*/
//Hàm setInterval: Truyền vào một function và thục thi với chu kì thời gian
/* setInterval(showAlert, 2000);
   function showAlert(){
   alert("Test hàm setInterval");
}*/
//---------------------------------Toán tử trong JavaScript-------------------------------------
//Khai báo biến: var
//Toán tử số học: Phép gán
/*var x = 10;
console.log(x);*/
//Prefix và postfix: Tiền tố và hậu tố
/* prefix: Tăng giá trị rồi mới gán
    postfix: Gán giá trị rồi mới tăng */
// Toán tử nối chuỗi
/*var s1 = 'Đây là chuỗi số 1';
var s2 = 'Đây là chuỗi số 2';
console.log(s1 + ' ' +s2);*/
// Toán tử so sánh: >, <, >=, <=, !=, ==
/*var a = 1;
var b = 2;
if(a < b) {
    console.log('Hí anh em');
}*/
// Kiểu dữ liệu boolean: Trả về giá trị True hoặc False
//6 Giá trị convert sang boolean là False
/*
    - 0
    - false
    - '' hoặc ""
    - undefined
    - NaN
    - null
*/
// Toán tử logical: 
/*  - and: && : 1 giá trị false -> Trả về kiểu boolean: false
    - or: || : 1 giá trị true -> Trả về kiểu boolean: true
    - not: !
*/
//---------------Kiểu dữ liệu trong JavaScript------------------
//Kiểu dữ liệu nguyên thủy: String, number, boolean, undefined, null, symbol
/*
//string
var a = 'Đây là chuỗi';
//number
var b = 10;
//boolean
var c = true;
//undefined
var d;
*/
//Kiểu dữ liệu phức tạp: function, object, complex data
/*
//function
var show = function(){}
//object: array, object
var array = [
    'name',
    'age' ,
    'address'
]
var object = {
    name: 'hùng',
    age: 20,
    address: 'hưng yên'
} */
//Để kiểm tra kiểu dữ liệu dùng câu lệnh typeof .
/* var x = 10;
console.log(typeof x); */
//Toán tử so sánh tuyệt đối: giá trị và kiểu dữ liệu: === và !==
/*
var a = 10;
var b = '10';

console.log(a == b);//True
console.log(a === b);//False */
//------------------------Làm việc với hàm : function---------------------------
//Khởi tạo hàm: function
// đặt tên hàm: a-z, A-Z, 0-9, _, $
// không đặt kí tự đầu tiên là số
//Cách 1: Declaration function
/*
function testFunction(){
} */
//Cách 2: Expression function : function được gán cho một biến
/*
var testFunction = function(){
} */

//-----------------------------------------------------------------------------------------------------//
//-----------------------------Làm việc với chuỗi---------------------------------------------//
//1. Cách tạo chuỗi
//C1: sd cặp nháy đơn, kép
/*
var s1 = 'Xin chào nháy đơn';
var s2 = "Xin chào nháy kép";
console.log(s1);
console.log(s2);
*/
//C2: sd từ khóa new và String, kiểu dữ liệu là object
/*
var s1 = new String('a');
console.log(s1); */
// Kiểm tra độ dài chuỗi: dùng length.
/*
var s1 = 'Xin chào các bạn';
console.log(s1.length);// 16
*/
/*
//Find index trong string
var s1 = 'Xin chào tôi là người sử dụng máy tính này';
console.log(s1.indexOf('i'));// vị trí số 1
console.log(s1.indexOf('i', 10));// vị trí số 11
console.log(s1.lastIndexOf('i'));// Vị trí cuối cùng
console.log(s1.search('n'));// so sánh bằng biểu thức chính quy
//Cắt chuỗi
console.log(s1.slice(3,10));//Cắt string từ vị trí số 3 đến vị trí số 10
//Ghi đè chuỗi
console.log(s1.replace('tôi', 'các bạn mình'));
//Chuyển đổi định dạng chuỗi
var s2 = 'Xin chào tôi là Chuỗi';
console.log(s2.toUpperCase());//XIN CHÀO TÔI LÀ CHUỖI
console.log(s2.toLowerCase());//xin chào tôi là chuỗi
//Loại bỏ kí tự whitespace thừa trong chuỗi
var s3 = '          Xin chào           ';
console.log(s3.trim());
//cắt 1 chuỗi thành array, cần có điểm chung để tách thành các chuỗi
var s4 = 'Javascript Python PHP Java C++ Pascal';
console.log(s4.split(" "));
//Lấy một kí tự thông qua giá trị index trong chuỗi
var s5 = 'Cùng test charAt';
console.log(s5[6]);
*/
//-----------------------------------Kiểu dữ liệu number-----------------------------------------
//Khởi tạo biến number
// c1: khai báo nguyên thủy
/*
var n1 = 9;
console.log(n1);
//c2: khai báo dùng new
var n2 = new Number(8);
console.log(n2);
//Chuyển number sang String:
var n3 = 10;
console.log(n3.toString());
//Làm tròn số
var n4 = 1.93734712471371;
console.log(n4.toFixed())// Không truyền đối số : 2
console.log(n4.toFixed(2))// Truyền đối số, làm tròn đến 2 chữ số thập phân : 1.94
*/
//----------------------------------------------------------------------------------------------
//-----------------------------------------Làm việc với mảng-----------------------------------
/* Cách tạo một mảng
//C1: khai báo nguyên thủy
var array1 = [
    'hùng',
    20,
    'hungyen'
];
console.log(array1);
//C2: dùng new
var array2 = new Array('Hello', 10, 'zimba');
console.log(array2);
//Kiểm tra đối tượng là mảng dùng hàm isArray
var array3 = 10;
var array4 = [
    'Sorry'
]
console.log(Array.isArray(array3));
console.log(Array.isArray(array4));
*/
//-------------------------------Làm việc với Array
/*
var array5 = [
    'name',
    'age',
    'address',
    'phone',
    'email',
    'facebook',
]
//Tính chiều dài mảng, số phần tử trong mảng: dùng length
console.log(array5.length);// 6
//Lấy phần tử theo index
console.log(array5[2]);// address
//Chuyển kiểu dữ liệu Array thành String
console.log(array5.toString());// name,age,address,phone,email,facebook
//Chuyển mảng thành chuỗi dùng join
console.log(array5.join(' '));// name age address phone email facebook
//Xóa phần tử cuối mảng, trả lại phần tử xóa
console.log(array5.pop());//facebook
//Thêm phần tử vào cuối mảng, trả về độ dài mới
console.log(array5.push('instagram'));//7
//Xóa phần tử đầu mảng trả về phần tử đã xóa
console.log(array5.shift());//name
//Thêm phần tử vào đầu mảng , trả về độ dài mới
console.log(array5.unshift('firstname','secondname'));// 8
//Xóa phần tử trong mảng: splice(index, số phần tử xóa, phần tử chèn vào chỗ bị xóa)
console.log(array5.splice(2, 2, 'new page'));// ['age', 'address']
console.log(array5);// ['firstname', 'secondname', 'new page', 'phone', 'email', 'facebook', 'instagram']
//Hàm nối 2 mảng: concat()
var array6 = [
    'test',
    'zui'
]
console.log(array5.concat(array6));// ['firstname', 'secondname', 'new page', 'phone', 'email', 'facebook', 'instagram', 'test', 'zui']
//Cắt mảng; trả về mảng cắt
console.log(array5.slice(3, 7));// ['phone', 'email', 'facebook', 'instagram']
*/
//Thêm phương thức sử dụng với mảng
/*var a_1 = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'six',
    'six'
]*/
//Xóa phần tử của mảng bằng delete sẽ để lại vị trí bằng empty
//delete a_1[1];
//Giảm kích thước một mảng bằng hàm flat();
/*
var a_2 = [
    [1,2],
    [3,4],
    [5,6],
]
console.log(a_2.flat());//[1, 2, 3, 4, 5, 6]: tạo thành một mảng
*/
//thêm phần tử vào mảng bằng splice
//a_1.splice(10, 0, 'eleven');//['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
//Tìm phần tử trong mảng: trả về một giá trị
/*var result = a_1.find(function(value){
    return value === 'six';
});
console.log(result);*/
//Tìm phần tử trong mảng: trả về tất cả các giá trị
/*var result = a_1.filter(function(value){
    return value === 'six';
});
console.log(result);*/
//console.log(a_1);
//Sử dụng Array.map() để chỉnh sửa các element và tạo ra mảng mới
var a_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var new_a_3 = a_3.map(function(value) {
    if(value > 5){
        return value * value;
    }
    else{
        return value;
    }
});
console.log(new_a_3);//[1, 2, 3, 4, 5, 36, 49, 64, 81, 100]
//Sử dụng Array.reduce() để trả về một kết quả duy nhất
var sum_a_3 = a_3.reduce(function(sum, currentValue) {
    return sum + currentValue;
}, 0);
console.log(sum_a_3);//55
var a_4 = [1, 2, [[3, 4], 5], 6, [7, 8, 9], 10];
console.log(a_4.flat(2));// Trong đó : 2 trong hàm flat là mức độ sâu của mảng để làm phẳng
//----------------------------------------------------------------------------------------------------------
//-------------------------------------------Kiểu Object----------------------------------------------------
//Khởi tạo bằng một cặp ngoặc nhọn, chứa các cặp key:value
/*
var obj_1 = {
    name: 'hùng',
    age: 20,
    address: 'hungyen'
}
console.log(obj_1);//{name: 'hùng', age: 20, address: 'hungyen'}
//thêm cặp key:value trong object
obj_1.email = '123@gmail.com';
console.log(obj_1);//{name: 'hùng', age: 20, address: 'hungyen', email: '123@gmail.com'}
//lấy value khi biết key
console.log(obj_1.age);// 20
//xóa key
delete obj_1.address;
console.log(obj_1);//{name: 'hùng', age: 20, email: '123@gmail.com'}
*/
//----------------------------------------------------Object Contructor----------------------------------------------------
//example
/*
function Person(fName, lName, age, eye) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.eye = eye;
    this.nationality = 'VietNam';//thêm trực tiếp
    this.changeName = function(name){ //Thêm hàm đổi tên
        return this.fName = name;
    }
}
//Đôi khi cần phải có "blueprint: bản thiết kế" cho các đối tượng có cùng type
//Các đối tượng được khởi tạo bằng cách gọi object contructor với các đối sối và từ khóa new
var myFriend_1 = new Person('Hùng', 'Nguyễn' ,20 ,'blue' );
var myFriend_2 = new Person('Nam', 'Nguyễn' ,20 ,'black' );
console.log(myFriend_1);//Person {fName: 'Hùng', lName: 'Nguyễn', age: 20, eye: 'blue'}
console.log(myFriend_2);//Person {fName: 'Nam', lName: 'Nguyễn', age: 20, eye: 'black'}
//Thêm một thuộc tính vào đối tượng
//Thuộc tính được thêm sẽ không ảnh hưởng đến đối tượng còn lại
myFriend_1.email = '1123@gmail.com';
console.log(myFriend_1);//Person {fName: 'Hùng', lName: 'Nguyễn', age: 20, eye: 'blue', email: '1123@gmail.com'}
console.log(myFriend_2);//Person {fName: 'Nam', lName: 'Nguyễn', age: 20, eye: 'black'}
//Thêm một phương thức vào đối tượng
//Phương thức được thêm sẽ không ảnh hưởng đến đối tượng còn lại
myFriend_2.fullname = function() {
    return this.fName + " " + this.lName;
};
console.log(myFriend_1);//Person {fName: 'Hùng', lName: 'Nguyễn', age: 20, eye: 'blue', email: '1123@gmail.com'}
console.log(myFriend_2.fullname());//Nam Nguyễn
//Không thể thêm một thuộc tính vào object contructor như thêm vào một object có sẵn
//Thêm thuộc tính trực tiếp vào trong object contructor
myFriend_2.changeName('Hiệp');
console.log(myFriend_2);//Person {fName: 'Hiệp', lName: 'Nguyễn', age: 20, eye: 'black', nationality: 'VietNam', …}
*/
//----------------------------------------------------------Làm việc với đối tượng Date----------------------------------
/*
//Khởi tạo biến Date:
//Có 9 cách để tạo một đối tượng Date
//C1: value = full display, current Date and Time
var d1 = new Date();
console.log(d1);//Thu Mar 30 2023 15:02:02 GMT+0700 (Giờ Đông Dương)
//C2: value = 'date string'
var d2 = new Date('2023-3-30');
console.log(d2);//Thu Mar 30 2023 00:00:00 GMT+0700 (Giờ Đông Dương)
//c3: new Date(year, month, ...) tạo ra một thời gian xác định
//7 tham số xác định : year, month, day, hour, minute, second và millisecond
//Tháng được đánh số từ Tháng 1: 0 đến Tháng 12: 1
//Truyền đối số là năm và tháng:
var d3 = new Date(2023, 2);//Wed Mar 01 2023 00:00:00 GMT+0700 (Giờ Đông Dương)
console.log(d3);
//Truyền đối số là năm,tháng và ngày:
var d4 = new Date(2023, 2, 16);//Thu Mar 16 2023 00:00:00 GMT+0700 (Giờ Đông Dương)
console.log(d4);
//Truyền đối số là năm,tháng,ngày và giờ:
var d5 = new Date(2023, 2, 16, 10);//Thu Mar 16 2023 10:00:00 GMT+0700 (Giờ Đông Dương)
console.log(d5);
//Truyền đối số là năm,tháng,ngày,giờ và phút:
var d6 = new Date(2023, 2, 16, 10, 10);//Thu Mar 16 2023 10:10:00 GMT+0700 (Giờ Đông Dương)
console.log(d6);
//Truyền đối số là năm,tháng,ngày,giờ,phút và giây:
var d7 = new Date(2023, 2, 16, 10, 10, 10);//Thu Mar 16 2023 10:10:10 GMT+0700 (Giờ Đông Dương)
console.log(d7);
//Truyền đối số là năm,tháng,ngày,giờ,phút,giây và milligiay:
var d8 = new Date(2023, 2, 16, 10, 10, 10, 998);//Thu Mar 16 2023 10:10:10 GMT+0700 (Giờ Đông Dương)
console.log(d8);
//Truyền đối số là milligiay, tính thêm vào zero time: January 01, 1970
var d9 = new Date(10000);//Thu Jan 01 1970 08:00:10 GMT+0800 (Giờ Đông Dương)
console.log(d9);
//Date hiển thị trong html tự động chuyển sang kiểu String
*/
//Chuyển sang các kiểu date có thể đọc được
/*
var d10 = new Date();
//kiểu 1: 
console.log(d10.toDateString());//Thu Mar 30 2023
//kiểu 2:
console.log(d10.toUTCString());//Thu, 30 Mar 2023 08:30:33 GMT
//kiểu 3:
console.log(d10.toISOString());//2023-03-30T08:31:05.627Z
*/
//-------------------------------------------------------------Math Object------------------------------------------------
/*
//Cho phép thực hiện các task với số học 
//Math object không có hàm tạo
//Các thuộc tính và phương thức có thể được sử dụng mà không cần tạo Math Object trước
//Các hàng số của Math:
console.log(Math.E);//2.718281828459045: hằng số Euler
console.log(Math.PI);//3.141592653589793: trả về số pi
//Các phương thức với Math
//làm tròn với số nguyên gần nhất: round
console.log(Math.round(3.5422));//4
//làm tròn lên
console.log(Math.ceil(6.5422));//7
//làm tròn xuống
console.log(Math.floor(10.5422));//10
//trả về phần nguyên của số
console.log(Math.trunc(102.54223));//102
//trả về dấu của số được truyền đối số
console.log(Math.sign(102.54223));//1: số dương > 0
console.log(Math.sign(- 102.54223));//-1: số âm < 0 
console.log(Math.sign(0));// 0: số 0
console.log(Math.sign(-0));//-0
//trả về lũy thừa của một số
console.log(Math.pow(3, 4));//3^4  = 81
//trả về khai căn bậc 2 của một số
console.log(Math.sqrt(4));//2
//trả về trị tuyệt đối của một số
console.log(Math.abs(-4));//4 
//trả về số nhỏ nhất trong một danh sách số
console.log(Math.min(-4, 10, 20, 0, 9, 4, -20));// -20
//trả về số lớn nhất trong một danh sách số
console.log(Math.max(-4, 10, 20, 0, 9, 4, -20));// 20
//trả về một số ngẫu nhiên
console.log(Math.random());// số từ 0 đến 1: 0.1740823127026403
*/
//---------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------Vòng lặp --------------------------------------------------------
/*-------------Vòng lặp FOR--------------
//- với 3 biểu thức điều kiện
//- bthuc 1:  đặt ra 1 biến trước khi vòng lặp bắt đầu. Nếu khai báo bằng :let thì biến sẽ ko đc khai báo lại
//- bthuc 2:  xác định điều kiện cho vòng lặp
//- bthuc 3:  tăng giá trị mỗi khi code được thực thi
for (var i = 0; i < 10; i++ ){
    console.log(i);// 0,1,2,3...,9
}
*/
/*-----------Vòng lặp For in----------------
//Lặp các thuộc tính trong một Object
/* Cú pháp:
    for (key in object) {
        //code block
    }
*/
/*
//Dùng trong Object
var Person = {
    fName: 'Hùng',
    lName: 'Nguyễn',
    age: 20,
    address: 'Hưng Yên',
}
//Lấy các key trong object
for(var key in Person){
    console.log(key);//
}
//Lấy các value tương ứng với các key trong trong object
for(var key in Person){
    console.log(Person[key]);//
}*/
// Dùng trong Array
/*
var Array = [10, 20, 43, 'name', 90];
for(var key in Array) {
    console.log(key);// In ra index các phần tử của mảng
}
for(var key in Array) {
    console.log(Array[key]);// In ra giá trị các phần tử của mảng
}
*/
/*
// Dùng trong chuỗi
var s_for_in = "Xin chào các bạn";
for(var key in s_for_in) {
    console.log(key); // in ra index các phần tử của chuỗi
}
for(var key in s_for_in) {
    console.log(s_for_in[key]); // in ra các giá trị các phần tử của chuỗi
}
*/
//---------------------vòng lặp FOR OF-----
//---------------------vòng lặp While
//Lặp một khối mã khi xảy ra điều kiện là đúng
/*
var i = 0;
var text = "";
while (i < 10){
    console.log(i);
    text += i;
    i++;
}
console.log(text);//0123456789 */
//do...while: thực hiện vòng lặp ít nhất 1 lần sau đó mới kiểm tra điều kiện lặp
/*
var i = 0;
do{
    console.log('Số thứ tự:', i);
    i++;
}
while(i < 10);
*/
//-----------------------------------------------------------
