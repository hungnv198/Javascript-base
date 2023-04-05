/* 
                                            Every thing about JSON

*/
//1. Khái niệm
// JSON là viết tắt của: JavaScript Object Notation
//JSON được sử dụng để gửi dữ liệu giữa các máy tính
//JSON là một kiểu định dạng dữ liệu cho việc lưu trữ và truyền dữ liệu
//JSON là self-describing: tự mô tả
//2. Ví dụ:
//ví dụ 1: '{"name": "Hung", "age": 18}'// JSON string
//3. Tại sao lại sử dụng JSON:
/*
- Về mặt cú pháp tương tự như mã để tạo các đối tượng trong JavaScript,do đó có thể
dễ dàng chuyển đổi dữ liêu JSON thành các đối tượng trong JS
- Khi định dạng là text thì JSON có thể dễ dàng gửi dữ liệu giữa các máy tính
- Chuyển từ JSON string sang JavaScript Object: JSON.parse()
- Chuyển từ JS Object sang JSON string: JSON.stringify()
*/
//4. Quy tắc cú pháp của JSON
/*
- Dữ liệu ở dạng cặp: têm/ giá trị
- Dữ liệu được phân tách bằng dấu phẩy
- Object được viết trong cặp ngoặc nhọn
- Mảng được viết trong dấu ngoặc vuông
*/
//5. JSON Data:
/*
- Viết dưới dạng cặp: tên/ giá trị
- trường name: viết trong dấu ngoặc kép (bắt buộc), phải là string
- theo sau là dấu hai chấm, theo sau là giá trị
- Các giá trị trong JSON:
+ string
+ number
+ object
+ array
+ boolean
+ null
*/
//6. JSON vs XML:
/*
- cả JSON và XML đề có thể được sử dụng để nhận dữ liệu từ web server
*/
//7. Use JSON
/*
- JSON được sử dụng phổ biến để trao đổi dữ liệu từ một web server, khi nhận dữ liệu từ 1 web server thì 
dữ liệu luôn là kiểu string
- Phân tích dữ liệu với phương thức JSON.parse(), dữ liệu sẽ trở thành JS object
*/
// ví dụ: Tạo một đối tượng JS từ JSON
// const txtJSON = '{"name": "hùng", "age": 30, "address": "hungyen"}';
// //Chuyển dạng dữ liệu về JS object
// var jsObject = JSON.parse(txtJSON);
// //---truy cập thẻ trong html
// var testElement = document.querySelector(".test");
// testElement.innerHTML = `${jsObject['name']}, ${jsObject['age']} tuổi đến từ ${jsObject['address']}`;
//ví dụ 2: đối tượng từ JSON là một mảng, khi sử dụng JSON.parse() thì dữ liệu nhận được là một mảng thay vì
// là một object
// var txtJSON_1 = '["JavaScript", "PHP", "Python"]';
// var jsArray = JSON.parse(txtJSON_1);
// console.log(jsArray);
//8. Ngoại lệ
/*
- Date: kiểu không cho phép trong JSON, để sd Date: có thể viết dưới dạng String rồi chuyển đổi sang Date object trong JS
*/
//ví dụ:
//const txtJSON_2 = '{"name": "hùng", "age": 30, "address": "hungyen", "birth": "01-09-1998", "earn" : "function(){return 1500;}" }';
/*
Cách 1: dùng tham số thứ 1 chuyển đổi trực tiếp
var testElement_2 = JSON.parse(txtJSON_2);
console.log(testElement_2);
//chuyển về date
testElement_2['birth'] = new Date (testElement_2['birth']);
document.querySelector(".test").innerHTML = `${testElement_2['name']} sinh ngày ${testElement_2['birth']};`
*/
/*
Cách 2: dùng tham số thứ 2: được gọi là reviver, là một hàm kiểm tra thuộc tính và trả về giá trị
*/
// var testElement_2 = JSON.parse(txtJSON_2, function(key, value){
//     if(key == "birth"){
//         return new Date (value);
//     } else {
//         return value;
//     }
// });
// document.querySelector(".test").innerHTML = `${testElement_2['name']} sinh ngày ${testElement_2['birth']};`
/*
- function: là kiểu dữ liệu không cho phép dùng trong JSON, có thể viết dưới dạng string rồi convert sang function trong JS
- dùng phương thức eval() để chuyển đổi function
*/
// var testElement_3 = JSON.parse(txtJSON_2);
// testElement_3['earn'] = eval("(" + testElement_3['earn'] +")");
// document.querySelector(".test").innerHTML = `${testElement_3['name']} nhận được ${testElement_3['earn']()} đô; `
/*
- Khi gửi dữ liệu lên Web Server, dữ liệu phải là một string, chuyển đổi JS object thành string bằng phương thức JSON.stringify()
*/
//ví dụ: chuyển JS object thành string trong JSON
// var jsobject = {name:"hùng", age: 20, address: "hưng yên"};
// var txtJSON_4  = JSON.stringify(jsobject);
// console.log(txtJSON_4);//{"name":"hùng","age":20,"address":"hưng yên"}
//ví dụ: chuyển JS array thành string trong JSON
// var jsArray = ["Hùng", 30, "hưng yên"];
// var txtJSON_5 = JSON.stringify(jsArray);
// console.log(txtJSON_5);//["Hùng",30,"hưng yên"]
/*
Lưu trữ dữ liệu
*/
//- text luôn là một kiểu dữ liệu hợp pháp dùng để lưu trữ
//ví dụ: lưu trữ dữ liệu
// const myObj = {name: "hùng", age: 30, address: "Hưng Yên", today: new Date(), earn: function(){ return 1500;}};
// myObj['earn'] = myObj['earn'].toString();
// var myJSON = JSON.stringify(myObj);
// //lưu trữ trong bộ nhớ local
// localStorage.setItem("testJSON", myJSON);
// console.log(localStorage);
// //truy xuất dữ liệu
// var text = localStorage.getItem("testJSON");
// console.log(text);
// text = JSON.parse(text);
// console.log(text);
// //Hiển thị dữ liệu
// text['earn'] = eval("(" + text['earn'] +")");
// document.querySelector(".test").innerHTML = `Trong bộ nhớ dữ liệu hôm nay ${text['today']}: ${text['name']}, ${text['age']}, địa chỉ: ${text['address']} nhận được ${text['earn']()} đô`;
//------trong JSON, khi convert function sẽ bị loại bỏ kể cả key và value
// để lưu được hàm, cần chuyển đổi function Javascript về string trước khi convert sang JSON


//----------------------  JSON Object Literals - - - - - - - - 
/*
- đối tượng JSON được đặt trong một dấu ngoặc nhọn, chứa các key:value.
- key phải là string
- value: phải là kiểu dữ liệu cho phép trong JSON: string, number, object, array, boolean, null
- mỗi key:value được ngăn cách nhau bởi dấu phẩy
*/
//Tạo JS object từ một JSON object literals:
var myJSON = '{"name": "Hùng", "age":30, "address":"Hưng Yên"}'
var myJsObj = JSON.parse(myJSON);
//console.log(myJsObj);
//console.log(myJsObj['name']);//truy cập thuộc tính như 1 object
//dùng vòng lặp for
// for(var key in myJsObj){
//     console.log(myJsObj[key]);
// }
//in key trong object
// for(var key in myJsObj){
//     console.log(key);
// }
/*
---------------------JSON ARRAY----------------------------*/
// TRong JSON, array JSON phải là kiểu: string, number, object, array, boolean
/*Tạo mảng trong JS:
var arrJS = ['hùng', 20, "Hưng Yên"];
console.log(arrJS); */
/* Tạo mảng trong JS bằng parse từ JSON
var arrJSON = '["Hùng", 20, "Hưng Yên"]';
console.log(arrJSON);//hiển thị là string
var arrJS = JSON.parse(arrJSON);//phân tích mảng
console.log(arrJS);
// truy cập giá trị mảng
console.log(arrJS[0]);
*/
/* Mảng tron Object 
var objJSON = '{"name":"Hùng", "age":30, "address":"Hưng Yên", "cars":["Toyota", "KIA", "FORD"]}';
//Convert về JS:
var objJS = JSON.parse(objJSON);
console.log(objJS['cars'][2])//FORD
//Dùng vòng lặp:
for (var index in objJS['cars']){
    console.log(objJS['cars'][index]);
}
*/
//----------------------------JSON Server-------------------------------
