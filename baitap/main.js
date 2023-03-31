/*
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

var list_course = arr_2.reduce(function(courseItem, currentItem) {
    return courseItem.concat(currentItem.course);
}, []);
console.log(list_course);

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

*/
/*
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
function calculateRating(value) {
    var filmByNolan = []
    for(var key in value){
        if(value[key].Director === "Christopher Nolan") {
            filmByNolan.push(value[key]);
        }
    }
    var leng = filmByNolan.length;
    var sumImdbRating = filmByNolan.reduce(function(imdbPoint, currentPoint, index){
        return imdbPoint + Number(currentPoint.imdbRating);
    }, 0);//initial Value
    return sumImdbRating/leng;
}
// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
*/
// Expected results:
/*
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(value) {
    var Obj = value.reduce(function(storeItem, currentItem){
        storeItem[currentItem[0]] = currentItem[1];
        return storeItem;
    }, {});
    return Obj;
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
*/
  
  
  
  
  
  
