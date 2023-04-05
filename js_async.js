//------------------------JS Callback----------------------------
//Các hàm trong JS được thực thi theo trình tự được gọi chứ không theo trình tự định nghĩa
/* ví dụ:
function firstFunction(){
    show("Hello");
}
function secondFunction(){
    show("Hi");
}
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
firstFunction();
secondFunction();
//Kết quả: Hi
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
function sum(a, b){
    if(isFinite(a) && isFinite(b)){
        var sum = a + b;
        return sum;
    } else {
        return "Giá trị không xác định!"
    }
}
show(sum(3, "a"));
*/
//-------------------------------------JavaSCript Callback----------------------------------
//Callback: là một hàm được truyền như một đối số cho hàm khác
/*
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
function sum(a, b, callbackfn){
    if(isFinite(a) && isFinite(b)){
        var sum = a + b;
        callbackfn(sum)
    } else {
       callbackfn("Giá trị không xác định")
    }
}
sum(10, 10, show);// truyền dưới dạng đối số, chỉ lấy tên hàm, không lấy dấu ngoặc đơn

*/
//Callback thường được sử dụng trong các chức năng không đồng bộ, một chức năng phải đợi 
//một chức năng khác
//-các hàm chạy song song với hàm khác được gọi là không đồng bộ
//-trong thực tế, hàm callback được sử dụng với hàm không đồng bộ: tiêu biểu là setTimeout();
/*
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = "i love you";
}
setTimeout(show, 3000);
*/
/* thay vì truyền tên hàm như 1 đối số, có thể truyền toàn bộ hàm 
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
setTimeout(function(){
    show("iloveyou")
}, 4000);
*/
//Sử dụng hàm setInterval() có thể gọi lại hàm callback sau 1 khoảng tgian đợi
/*
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
function timeElement(){
    var dateElement = new Date();
    var half = "";
    if (0 <= dateElement.getHours() < 12){
        half += "am";
    } else {
        half += "pm";
    }
    return `${dateElement.getHours()}:${dateElement.getMinutes()}:${dateElement.getSeconds()} ${half}`;
}
setInterval(function(){
    show(timeElement());
}, 1000);
*/
//nhược điểm: callbackfn rất khó để viết và để gỡ lỗi. Vì vậy để sử dụng lập trình không đồng bộ sẽ giải quyết
//bằng promise.
//-------------------------------------PROMISE--------------------------------------
/*
-- Producing code: là code chạy trong một khoảng thời gian
-- Consuming code: là code phải đợi một kết quả
--> Promise là một JS object liên kết producing code và consuming code
*/
//syntax:
/*
var myPromise = new Promise(function(myResolve, myReject){
    //producing code
    myResolve();//khi thành công.
    myReject();//khi thất bại.
});
myPromise
    .then(
        //consuming code
        function(value){
            //code is successfull !
        },
        function(error){
            //code is some error !
        }
);
*/
/* Một JS Promise hỗ trợ hai thuộc tính: state (trạng thái) và result (kết quả)
Một JS Promise có thể là:
-- Pending: đang làm việc - kết quả trả về là undefined
-- Fulfilled: kết quả là một giá trị
-- Rejected: kết quả là một error object
*/
//ví dụ:
/*
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
var myPromise = new Promise(function(myResolve, myReject){
    var x = 0;
    if(x == 0){
        myResolve("Dữ liệu đúng rồi bạn nhé");
    } else {
        myReject("Dữ liệu sai rồi bạn nhé");
    }
})
myPromise
    .then(
        function(value){
            show(value);
        },
        function(error){
            show(error);
        }
);
*/
//-----------------------Ví dụ Promise----------------------
//Ví dụ: waiting for a timeout
/*
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
var myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myResolve("iloveyou");
    }, 3000);
}) 

myPromise
    .then(
        function(value){
            show(value);
        }
);
function show(value){
    var showElement = document.querySelector(".show");
    showElement.innerHTML = value;
}
var d = new Date();
var myPromise = new Promise(function(myResolve, myReject){
    myResolve(
        `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    );
})

myPromise
    .then(
        function(value){
            show(value)
        }
);
*/
var userList = [
    {
        id: 1,
        name: "Hùng"
    },
    {
        id: 2,
        name: "Nam"
    },
    {
        id: 3,
        name: "Phong"
    }
];
var commentList = [
    {
        id: 1,
        user_id: 1,
        content: "Xin chào, mình là Hùng. Bạn tên là gì?"
    },
    {
        id: 2,
        user_id: 2,
        content: "Chào bạn, mình là Nam. Rất vui được gặp bạn!"
    },
    {
        id: 3,
        user_id: 3,
        content: "Chào các bạn, mình là người mới!"
    },
    {
        id: 4,
        user_id: 1,
        content: "Cùng nhau cố gắng nhé!"
    }
]
//Bước 1: Get comments
function getComments(){
    return new Promise(function(resolve, reject){
        resolve(commentList);
    })
}
//Bước 2:get user by id
function getUserByID(arrID){
    return new Promise(function(resolve, reject){
        var users = userList.filter(function(cur){
            return arrID.includes(cur.id);
        })
        resolve(users);
    })
}
getComments()
    .then(function(comments){
        var userIdList = comments.map(function(cur){
            return cur.user_id;
        })
        return getUserByID(userIdList)
                .then(function(user){
                    return {
                        user: user,
                        comment: comments
                    }
            })
    })
    .then(function(data){
        var showElement = document.querySelector(".show");
        var html = "";
        data.comment.forEach(function(currComment){
            var users = data.user.find(function(currUser){
                return currComment.user_id === currUser.id;
            })
            html += `<li>${users.name}: ${currComment.content}</li>`
        });
        showElement.innerHTML = html;
    })