//Khái niệm DOM
//-là viết tắt của Document Object Modal
/*
- dịch các page HTML thành mô hình DOM, thường sử dụng cho JavaScript. 
- Mô hình DOM đặc trưng là một cây logic, mỗi nhánh trong cây là một node, mỗi node chứa các đối tượng
- Các phương thức trong DOM cho phép truy cập vào cây, thay đổi cấu trúc, style hoặc nội dung dữ liệu
- DOM đại diện cho tài liệu dưới dạng các node và element do đó ngôn ngữ lập trình có thể tương tác với trang web.
**
--DOM không phải là ngôn ngữ lập trình, mà là một API web được sử dụng để xây dựng trang web
- Thông qua DOM:
+ JS có thể thay đổi tất cả các yếu tố (elements) trong HTML
+ JS có thể thay đổi tất cả các thuộc tính (attributes) trong HTML
+ JS có thể thay đổi tất cả các style CSS trong page
+ JS có thể gỡ bỏ các HTML-el hiện có và HTML-att
+ JS có thể thêm mới các HTML-ele và HTML-att
+ JS có thể thêm mới các HTML-ele và HTML-att
+ JS có thể thao tác với tất cả các HTML-eve trong trang
+ JS có thể tạo mới HTML-eve trong trang.
-- theo W3C:
Mô hình đối tượng tài liệu W3C (DOM) là một nền tảng và giao diện ngôn ngữ trung lập cho phép các chương trình và tập lệnh 
truy cập động và cập nhật nội dung, cấu trúc và kiểu của tài liệu."
-- HTML DOM method: là các phương thức có thể thực thi trong HTML documents
-- HTML DOM properties: là các giá trị trong HTML documents có thể thiết lập hoặc thay đổi
- Trong DOM tất cả các HTML-ele được định nghĩa là các object.
//--------------------
//----JAVASCRIPT DOCUMENTs-----------------------------
//Tìm kiếm các HTML-ele:
- Để tìm kiếm các HTML-ele:
+ tìm bằng id
+ tìm bằng tagname
+ tìm bằng classname
+ tìm bằng CSS selectors
+ tìm bằng HTML object collections
*/
//-----------------
//1. Tìm HTML-ele bằng ID: tìm một HTML-ele
//ví dụ:
/*var idElement = document.getElementById("id");
console.log(idElement);//trả về 1 object: */
//2. Tìm HTML-ele bằng tagname: tìm tất cả các HTML-ele <tagname>
//ví dụ1:
/*var tagNameElement = document.getElementsByTagName("p");
console.log(tagNameElement);// trả về 1 HTMLcollection*/
//ví dụ 2: tìm HTML-ele qua id="id" rồi tìm tất cả các HTML-ele bằng tagname: p
/*
var idElement = document.getElementById("id");
var pElement = idElement.getElementsByTagName("p");
console.log(pElement);// trả về 1 HTML-collection
*/
//3. Tìm HTML-ele bằng className:
//ví dụ: tìm các thẻ có class = "intro"
/*
var classElement = document.getElementsByClassName("intro");
console.log(classElement);// trả về HTML collection
*/
//4. Tìm HTML-ele bằng CSS selector:
//ví dụ: tìm các thẻ p có class = "intro"
/*
var cssElement = document.querySelector("p.intro");// tìm thẻ p có class ="intro" đầu tiên
console.log(cssElement);
var cssElements = document.querySelectorAll("p.intro");//tìm tất cả các thẻ p có class = "intro";
console.log(cssElements);//trả về 1 NodeList
*/
//5. Tìm HTML-ele bằng HTML object collection
//ví dụ: tìm các HTML-ele trong form có id = "fr-1":
// var formElement = document.forms["fr-1"];//ngoặc vuông
// console.log(formElement);//trả về 1 form
//------------thêm---------------------
//có thể dùng:
//1. document.anchors:chỉ trả về các thẻ a có 1 thuộc tính name//Đã không còn được sử dụng
//
/*
2. document.body: set hoặc return một đối tượng body, setting : sẽ ghi đè tất cả các elements trong body
- cú pháp:
+ return: document.body
+setting: document.body = newContent
*/
// var docuElement = document.body;
// console.log(docuElement);
//chỉnh màu background:
//docuElement.style.background = 'red';
//3. document.embeds: trả về một tập hợp các element được nhúng trong tài liệu
//thuộc tính: embeds là thuộc tính chỉ đọc
//nhúng trong Javascript:
//--------------------------Thay đổi nội dung HTML-------------------
//- Cách dễ nhất để thay đổi nộ dung của HTML-ele là sử dụng thuộc tính innerHTML
//syntax: document.getElementById(id).innerHTML = new HTML
//ví dụ:
//document.getElementById("p1").innerHTML  = "Xin chào các bạn !"
//-Thay đổi giá trị của một thuộc tính
//syntax: document.getElementById(id).attribute = new value
//ví dụ:
//document.getElementById("p1").style.color = 'purple';
//-----------------------------Dynamic HTML content-----------------
// JS có thể tạo ra dynamic HTML data:
//document.getElementById("p1").innerHTML = "Date: " + Date();//Kết quả trả về là ngày, giờ
//-----------------------------Document.write()----------------
// Trong JS document.write() có thể được sử dụng để ghi trực tiếp vào luồng đầu
// ra của HTML. Không bao giờ được sử dụng document.write( sau khi document đc tải , nó sẽ ghi đè
// document)
//document.write("Đang test");

//-----------------------------Javascript FORMS-------------------
//- HTML FORM có thể được sử dụng trong JS
//- nếu như là 1 form trống, hàm thông báo sẽ hiện lên, trả về giá trị false để ngăn form gửi đi
// function validateForm() {
//     var x = document.forms["form"]["fname"].value;
//     if(x == ""){
//         alert("Bạn chưa nhập gì cả!");
//         return false;
//     }
// }
//-----------------------------DOM CSS--------------------------------------
//- dùng để thay đổi style của HTML-ele
//document.getElementById("p1").style.color = 'purple';
//-ví dụ: nhấn chuột để thay đổi màu chữ
// -------------------------DOM Animation-------------------------
//Tất cả các animation nên được tạo trong một khối: container
//khối container nên đặt một style: position: relative
//khối animation nên đặt một style: position: absolute.
//tạo hàm chuyển động animation
// function my_move (){
//     var id = null;
//     var pos = 0;
//     var movAnimation = document.getElementById("animation");
//     id = setInterval(frame, 5);
//     function frame(){
//         if(pos == 350){
//             clearInterval(id);
//         } else {
//             pos++;
//             movAnimation.style.top = pos + 'px';
//             //movAnimation.style.left = pos + 'px';//

//         }
//     }
// }

// ---------------------------------DOM Event-----------------------
//Để thực hiện phản ứng lại với sự kiện xảy ra, thêm 1 đoạn code và thuộc tính
// HTML event.
//Syntax: onclick=JavaScript
//Dùng JS DOM
// function changeText(event){
//     event.innerHTML = "Bạn lại bị lừa rồi, Hihi!";
// }
//Để gán một event vào một HTML-ele, có thể:
//- viết trực tiếp vào trong tag ở file HTML
//- sử dụng HTML DOM:
//-dùng getbyId:
// document.getElementById("check").onclick = changeText;
// function changeText(){
//     this.innerHTML = "Bạn tiếp tục bị lừa rồi nhé!";
// }
//----------------------On change event-------------------------------------
//ví dụ : onchange: thực thi khi nội dung của HTML-ele thay đổi
// chạy bằng DOM
// var checkElement = document.getElementById("number");
// checkElement.onchange = upperCase;
// function upperCase(){
//     checkElement.value = checkElement.value.toUpperCase();
// }
//---------------------Onmouseover/ onmouseout -----------------------------
//- sử dụng khi user sử dụng chuột để over một HTML-ele hoặc out of HTML-ele
// onmouseover:
// var overMouseElement = document.getElementsByClassName("box")[0];
// overMouseElement.onmouseover = function(){
//     overMouseElement.innerHTML = 'Hí Anh EM';
// }
//onmouseout
// overMouseElement.onmouseout = function(){
//     overMouseElement.innerHTML = 'Có thông báo mới';
// }
//-------------------onmouseup/ onmousedown-----------------------------
// holdMouseElement = document.getElementsByClassName("box")[0];
// //onmousedown
// imgChangeElement = document.querySelector(".image");
// imgChangeElement.onmousedown = function(){
//     imgChangeElement.src = "./image/socnau.jpg"
// }
// holdMouseElement.onmousedown = function(){
//     holdMouseElement.innerHTML = "Bạn đang nhấn rồi đó!";
//     holdMouseElement.style.backgroundColor = 'blue';
// }
// //onmouseup
// holdMouseElement.onmouseup = function(){
//     holdMouseElement.innerHTML = "Có thông báo mới";
//     holdMouseElement.style.backgroundColor = 'red';
// }
// imgChangeElement.onmouseup = function(){
//     imgChangeElement.src = "./image/vet.jpg"
// }
//-----------------on focus-----------------------
// var focusElement = document.querySelector(".input");
// focusElement.onfocus = function(){
//     focusElement.style.backgroundColor = 'blue';
// }
//---------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//-----------------------JavaScript HTML DOM EventListener---------------------
// addEventListener() method: đính thêm một xử lý sự kiện xác định
//syntax: element.addEventListener(event, function, useCapture);
//para-1: type of event: click, mousedown
//para-2: function được gọi đến khi sự kiện diễn ra
//para-3: trả về mộ boolean, tham số này là tùy chọn
//ví dụ
// document.querySelector("input").addEventListener('click', function(){
//     alert("Thêm đi bạn trẻ");
// })
//ví dụ 2:
// var sumElement = document.querySelector(".input");
// sumElement.addEventListener('click',function(){
//     sumValue(p1, p2);
// });
// var p1 = 10;
// var p2 = 20;
// function sumValue(p1, p2){
//     p1 = p1 + p2;
//     sumElement.value = p1;
// }
// --------------------------------------DOM NAVIGATION-------------------------------
//---theo như W3C HTML DOM: tất cả mọi thứ trong HTML document đều là 1 node
//Node_relationships:
//- Các nốt đều có quan hệ thứ bậc đối với một node khác:
//- node cao nhất trong tree-node là root
//- ngoại trừ root, tất cả các node đều có chính xác 1 node cha.
//-----child-node và node-value
//truy cập bằng thuộc tính innerHTML giống nhu việc truy cập giá trị node là con đầu tiên
//nodeName: thuộc tính chỉ định tên của một node
//--nodeValue của textNode là text của chính nó, của attribute Node là attribute của chính nó.
//--nodeType: trả về loại node.
//-----------------------------------DOM NOTE-----------------------------------------
//---tạo ra một new HTML element(Nodes): để tạo ra 1 element trong HTML DOM, phải tạo ra 1 element
//sau đó nối element đó vào 1 phần tử hiện có
// var eleElement = document.createElement("p");
// var txtElement = document.createTextNode("Xin chào các bạn !");
// eleElement.appendChild(txtElement);
// //eleElement.classList += "class1 class2";
// var bodyElement = document.querySelector("body");
// bodyElement.appendChild(eleElement);
//--xóa bỏ một HTML-ele sử dụng phương thức remove/ removeChild(khi get về Parent của node):
// var checkElement = document.querySelector(".para");
// console.log(checkElement);
// checkElement.remove();
//--thay thế một HTML-ele sử dụng phương thức replaceChild;
// var checkElement = document.querySelector(".test");
// var checkElement_2 = document.querySelector(".para");
// //tạo ra 1 element mới
// var newElement = document.createElement("p");
// var newTxtElement = document.createTextNode("Đây là test thử");
// newElement.appendChild(newTxtElement);
// //checkElement.appendChild(newElement);
// checkElement.replaceChild(newElement, checkElement_2 );
// console.log(newElement);