let s = ['long', 'short','text', 'width', 'height', 'big', 'text7'];

//cau 1
// let minStr = s[0];
// for(let i = 1; i < s.length; i++){
//     if(minStr.length > s[i].length){
//         minStr = s[i];
//     }
// }
// console.log(minStr);

//cau 2 sai
// for(let i =0; i < s.length; i++){
//     let array = s[i];
//     if(array == 'text'){
//         console.log(i+1+". "+ array);
//     }
// }

//cau 2
// let array = [];
// for(let i =0; i < s.length; i++){
//     if(s[i].includes('text')){
//         array.push(s[i]);
//     }
// }
// console.log(array);

//cau 3
// let NewS = [];
// for(let i =0; i < s.length; i++){
//     let str = s[i].slice(0,3);
//     NewS.push(str);
// }
// console.log(NewS);