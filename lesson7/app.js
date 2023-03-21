// let a = "hello";
// let = 10;

//Nhập dữ liệu từ bàn phím và gắn giá trị vào trong 1 biến
// let input = prompt("hãy nhập vào đây để gán giá trị cho biến input: ");// dữ liệu có kiểu string

// let x = Number(prompt("Nhập số x = "));
// let y = Number(prompt("Nhập số y = "));
// let z = x + y;
// console.log(z);

// console.log("Bạn vừa nhập vào " + input);

// let name = "Huy";

// {
//     //bên trong 1 khối lệnh
//     let name= "Someone else";
//     let age = 20;
//     {
//         let address ="Hà Nội";
//         //dùng được age ở chỗ này

//         //address chỉ tồn tại ở đây
//     }

//     console.log(age);
// }

// console.log(age);//Không tồn tại ở đây

// let age = prompt("Nhập vào tuổi của bạn: ");

// //nếu age nhỏ hơn 18 thì in ra không cho vào
// // nếuage lớn hơn hoặc bằng 18 thì vào thoải mái

// if(age < 18){
//     console.log("không cho vào");
// }else{
//     console.log("vào thoải mắi")
// }

//Nhập vào phân loại của 1 thằng học sinh: 1, 2, 3
//nếu là loại 1 =>"Thằng này xứng đáng có 10 ny"
//nếu phân loại 2 =>'9.5 điểm'
//nếu phân loại là 3 =>"Cần có gắng hơn"

// let rank = prompt("Nhập vào phân loại");

// if(rank == 1){
//     console.log("Thằng này xứng đáng có 10 ny");
// } else if(rank == 2){
//     console.log("9.5 điểm");
// } else if(rank == 3) {
//     console.log("Cần có gắng hơn");
// } else{
//     console.log("Đề nghị nhập đúng rank của bạn!")
// }
// let text = prompt("Nhập vào 1 chuỗi");

// if(text.length < 8){
//     console.log("Chuỗi ngắn quá");
// } else{
//     console.log("Chuỗi này được!");
// }
//in ra dòng "I love you!" 500 lần, mỗi dòng có dánh số thứ tự.
// for(let i = 1; i <= 500; i++){
//     console.log(i + ". I love you");
// }
// let sum = 0;
// for(let i = 1; i <= 50; i++){
//     sum += i;
    
// }
// console.log("Tổng các số từ 1 đến 50= " +sum);

// let num = 10;
// while (num >= 6) {
//     console.log(num);
//     num = Math.floor(Math.random() *10);
// }

// let index = 1;
// while (index <= 200 ){
//     console.log(index);
//     index++;
// }

// let s = prompt("Chuỗi s");
// let l = prompt("số l");
// while (s.length<l){
//     s+='a';
// }
// console.log(s);

// let x = prompt("Nhập số x= ");
// let y = prompt("Nhập số y= ");
// if( x >= 0 && y>=0 && y<=100){
//     while( x < y){
//         x++;
//         y--;
//     }
//     console.log(x, y);
// } else{
//     console.log("tại Hoàng ngu!")
// }

// Bài tập 1

// for(let i = 1; i <= 500; i++){
//     console.log(i);
// }

// Bài tập 2
// for(let i = 1; i <= 300; i++){
//     if(i%2==0 && i%3==0){
//         console.log(i);
//     }
// }

//Bài tập 3
// let sum = 0;
// for(let i = -30; i <= 50; i++){
//     if(i%2==0){
//         sum += i;
//     }
// }
// console.log(sum);

//Bài tập 4
// let n = prompt("Nhập n= ");
// let num = 1;
// for(let i = 1; i <= n; i++){
//     num *= i;
// }
// console.log(num);

//Bài 5
// let a = Number(prompt("Nhập a ="));
// let b = Number(prompt("Nhập b= "));
// let x = Number(prompt("Nhập x= "));
// let res = null;
// for(let i =a; i<= b; i ++){
//     if( i % x ==0){
//         res = i;
//         break;
//     }
// }
// console.log(res);

//bài 5 cách 2
// let a = Number(prompt("Nhập a ="));
// let b = Number(prompt("Nhập b= "));
// let x = Number(prompt("Nhập x= "));
// let res = NaN;
// let count = a;
// while(count <= b && res % x != 0){
//     if(count % x ==0) res = count;
//     count ++;
// }
// console.log(res);



//bài 6
// let S = 0;
// let n = prompt("Nhập n= ");
// for(let i =1; i <= n; i++ ){
//     S += 1/(i*(i+1));
// }
// console.log("Tổng S=" +S);
