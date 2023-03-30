//Bài tập làm phẳng mảng với reduce trong Array, áp dụng đối với mảng có depth = 2
//Bt1: 
var arr_1 = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var result_1 = arr_1.reduce(function(arr_flat, itemArr_1) {
    return arr_flat.concat(itemArr_1);
}, []);
//console.log(result_1);
//BT2: Lấy ra các khóa học đưa vào một mảng mới
var arr_2 = [
    {
        topic: 'FrondEnd',
        course: [
            {
                id: 1,
                name: 'JavaScript'
            },
            {
                id: 2,
                name: 'PHP'
            }
        ]
    },
    {
        topic: 'BackEnd',
        course: [
            {
                id: 3,
                name: 'Python'
            },
            {
                id: 4,
                name: 'Ruby'
            }
        ]
    }
]
/*
var list_course = arr_2.reduce(function(courseItem, currentItem) {
    return courseItem.concat(currentItem.course);
}, []);
console.log(list_course);
*/
var arr_3 = [];
var arr_4 = [];
var arr_5 = [];
for (var i in arr_2) {
    arr_3.push(arr_2[i].topic);
    for(var j in arr_2[i].course){
        arr_4.push(arr_2[i].course[j].id);
        arr_5.push(arr_2[i].course[j].name);

    }
}
console.log(arr_3);
console.log(arr_4);
console.log(arr_5);


