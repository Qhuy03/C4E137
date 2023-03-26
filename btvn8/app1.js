let arr = [3,5,2,6,11,21,14];

//cau 4
// let dem = 0;
// let sum = 0;
// let TB = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     dem++;
// }
// TB = sum / dem;
// console.log(TB);

//cau 5
// function isprime(n){
    
//     let flag = 1;

//     if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
//     /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
//     let i = 2;
//     while(i <n){
//         if( n%i==0 ) {
//             flag = 0;
//             break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
//         }
//         i++;
//     }

//     return flag;
// }
// let SoNT = [];
// for (let i = 0; i < arr.length; i++){
//   if (isprime(arr[i]) == 1)  SoNT.push( arr[i] );
// }
// console.log(SoNT);

//cau 6
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 10){
//         console.log("Phần tử trong mảng nhỏ hơn 10 là: " +arr[i]);
//     }
// }

//cau 7
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 20){
//         console.log("Phần tử trong mảng lớn hơn 20 là: " +arr[i]);
//     }
// }

//cau 8
// let n = Number(prompt("Nhập vào giá trị n= "));
// for(let i = 0; i <= n; i++){
//     arr.push(i);
// }
// console.log(arr);


//cau 9
let temp =arr[0];
      for (let i = 0 ;i<arr.length-1;i++){
        for(let j= i+1;j <arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[j];
               arr[j]=arr[i];
               arr[i]=temp;
            }
        }
      }
      console.log("mảng sau khi sắp xếp tăng dần là ")

      for(let i = 0 ;i<arr.length;i++){
        console.log(arr[i]);
      }
