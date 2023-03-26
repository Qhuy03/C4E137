let s = ['long', 'short','text', 'width', 'height', 'big', 'text'];

//cau 1
let minStr = s[0];
for(let i = 1; i < s.length; i++){
    if(minStr.length > s[i].length){
        minStr = s[i];
    }
}
console.log(minStr);

//cau 2
// for(let i =0; i < s.length; i++){
//     let array = s[i];
//     if(array == 'text'){
//         console.log(i+1+". "+ array);
//     }
// }