// mảng

//cách khai báo
// let names = [
//     "Huy",
//     'Ngọc Trinh',
//     'Chi pu',
//     'Hoàng óc chó',
//     'Chi pu',
//     'Ngọc Trinh',
//     'Đàm Vĩnh Hưng',
//     'Ngọc Trinh',

// ];

// console.log(names);


// let numbers = [1, 100, 40, 3, 20];

// let isRich = false;
// let isHandsome = true;
// let hasGirlfriend = false;

// let features = [isRich, isHandsome, hasGirlfriend];
//thay đổi giá trị phần tử bất kỳ trong mảng
//truy xuất giá trị 1 phần tử bất kỳ trong mảng
// console.log(names[1]);//lấy giá trị phần tử thứ 2 trong mảng
// console.log(names[0]);//lấy giá trị phần tử thứ 1 trong mảng
// console.log(names[3]);
// console.log(names[4]);
// names[0] = 'Hello world!';
// names[4] = 'Goodbye everyone';
// console.log(names);

// console.log(features);

// let array1 = ['a', 'b', 'c'];
// let array2 = ['a', 'b', 'c'];
// let array3 = array1;

//kiểm tra kiểu dữ liệu của mảng?
// console.log(typeof (array1));
// console.log(array1 + array2);//Chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng
// console.log(array1 == array2);
// console.log(array1 == array3);

// array1[0] = 'Hello';
// console.log(array1, array2);

//hoán đổi giá trị của 2 phần tử trong mảng
// let tmp = names[0];
// names[0] = names[3];
// names[3] = tmp;
// console.log(names);


//Duyệt mảng

//c1: dùng for ... let i =0 ...
// for(let i =0; i < names.length; i++){
//     // console.log(i+1+'. '+names[i]);

//     let name = names[i];
//     if(name == 'Ngọc Trinh'|| name == 'Chi pu'){
//         console.log(i+1+". "+ name);
//     }
// }

//c2:for...of
// let i = 0;
// for(const name of names){
//     // làm việc với name ở trong này
//     if(name == 'Ngọc Trinh'|| name == 'Chi pu'){
//         i++;
//         console.log(i+1+". "+ name);
//     }
// }


// const numbers = [1, 7 ,8, -3, 6, 10, 9];
//in ra số chẵn tronh numbers
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 ==0){
//         console.log(numbers[i]);
//     }
// }

//tính tổng phần tử
// let sum=0;
// for(let i = 0; i < numbers.length; i++){
//     sum+=numbers[i];
// }
// console.log(sum);

//tìm phần tử nhỏ nhất
// let min = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//     if(min > numbers[i]){
//         min = numbers[i];
//     }
// }
// console.log(min);

//Thêm 3 số vào đầu mảng
// numbers.unshift(101, 20, -33);
// console.log(numbers);


// thêm vào cuối mảng
// numbers.push(-9, 11, -11);
// console.log(numbers);

//xóa 1 phần tử đầu tiên trong mảng
// let deletedFirstNumber = numbers.shift();
// console.log("Giá trị phần tử đầu tiên bị xóa " + deletedFirstNumber);

//xóa 1 phần tử cuối mảng
// let deletedLastNumber = numbers.pop();
// console.log("Giá trị phần tử cuối bị xóa " + deletedLastNumber);

//Tìm Hiểu Phương Thức splice()?


//bài 1
// let arr = [];
// let n = Number(prompt("Nhập vào n > 0 "));
// for(let i = 0; i < n; i++){
//     arr[i] = Math.random();
// }
//     console.log(arr);


//bài 2
// let arr = [1,2];
// let n = Number(prompt("Nhập vào giá trị n > 2"));
// while(arr.length < n){
//     arr.unshift(0);
// }
// console.log(arr);

//bài 3
// let arr = [1,2,44,-32,2,55,91];
// while(arr.length > 1){
//     arr.pop();
// }
// console.log(arr);


//Thực hành
//bài 1
let arr = [1, 2, 11, -4, 5, 6, -7, -18, -19, 7, 3];
// let tich = 1;
// for(let i = 0; i < arr.length; i++){
//     tich *= arr[i];
// }
// console.log(tich);

let numbersDivideBy2 = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        numbersDivideBy2.push(arr[i]);
    }
}

if(numbersDivideBy2.length == 0){
    console.log("Không có số nào chia hết cho 2");
}else{
    let min = numbersDivideBy2[0];
    for(let i = 0; i < numbersDivideBy2.length; i++){
        if(min > numbersDivideBy2[i]){
            min = numbersDivideBy2[i];
        }
    }
    console.log("Giá trị nhỏ nhất chia hết cho 2 là: " +min);
}
