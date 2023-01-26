// TASK 1
// function get(h, m, s){
//     let ans = s*1000;
//     let ans1 = (m*60)*1000;
//     let ans2 = ((h*60)*60)*1000;
//     if(ans>ans1 && ans>ans2){
//         return s
//     }
//     else if(ans1>ans && ans1>ans2){
//         return m
//     }
//     else if(ans2>ans1 && ans2>ans){
//         return h
//     }
// }
// console.log(get(15, 955, 59400));

// TASK 2
// function get(a){
//     let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return week[a.getDay()]
// }
// console.log(get(new Date("12/08/2011")));

// TASK 3
// function get(a, b){
//     let day = 24*60*60*1000;
//     return Math.round((Math.abs(b-a))/day);
// }
// console.log(get((new Date("December 29, 2019")), (new Date("January 1, 2019"))));

// TASK 4
// function get(year, month){
//     if(year == 0 && month == 0){
//         return "year missing"+" , "+"month missing"
//     }
//     if(month == 0){
//         return "month missing"
//     }
//     else if(month<12){
//         return year
//     }
//     else{
//         return year+Math.floor(month/12)
//     }
// }

// console.log(get(1444, 60));
