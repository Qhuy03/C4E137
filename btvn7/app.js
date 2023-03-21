//bài 7
// let n = prompt("Nhap n= ");
// let dem = 0;
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         dem++;
//     }
// }
// console.log(dem);



//bài 8
let n = prompt("Nhập vào 1 số nguyên bất kì");
    var flag = true;
    if (n < 2) {
        flag=false;

    }else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                flag=false;
                break;
            } 
        }
    }
    if(flag==true){
        console.log("Đây là số nguyên tố!")
    }else{
        console.log("Đây k phải số nguyên tố!")

    }


//bài 9
// let s = prompt("Chuỗi s");
// let l = prompt("số l");
// while (s.length<l){
//     s+='0';
// }
// console.log(s);


// bài 10
// function UCLN(m,n){
//     m=Math.abs(m);
//     n=Math.abs(n);
  
//     while (n !==0){
//       var r= m%n;
//       m=n;
//       n=r;
//     }
//     return m;
//   }
//   let a = Number(prompt("Nhap vao a= "));
//   let b = Number(prompt("Nhap vao b= "));
//   console.log(UCLN(a,b));


//bài 11
// let a = Number(prompt("Nhap vao a= "));
// let b = Number(prompt("Nhap vao b= "));
// let c = a*b;
// let BCNN;
// for(let i = 1; i <= c; i++){
//     if(i % a ==0 && i % b ==0){
//         BCNN = i;
//         break;
//     }
// }
// console.log(BCNN);


//bài 12
// function guessNumber(){
//     var conrrect = Math.floor(Math.random()*20)+1;
//     // console.log(conrrect); neu muon show dap an ra truoc :)))
//     var wrongCount = 0;
    
//     while(true){
//       var answer  = parseInt(prompt("nhap so doan tu 1-20: "));
    
//       if(answer ===conrrect){
//         console.log("doan dung!");
//         break;
//       }
      
//       wrongCount++;
    
//       if (wrongCount ===5){
//         console.log(" ban da thua, song dung la "+ conrrect + ".");
//         break;
//       }
    
//       console.log("doan sai. hay thu lai.");
//     }
//     }
//     guessNumber();


//bài 13
// function printMultiplicationTable(n) {
//     // Kiểm tra điều kiện đầu vào
//     if (n < 2 || n > 10) {
//       console.log("Vui lòng nhập số n từ 2 đến 10.");
//       return;
//     }
  
//     // In ra bảng cửu chương của số n
//     for (var i = 1; i <= 10; i++) {
//       console.log(n + " x " + i + " = " + n * i);
//     }
//   }
  
//   // Nhập số n từ bàn phím và in bảng cửu chương của n
//   var n = parseInt(prompt("Nhập số n (2-10): "));
//   printMultiplicationTable(n);

//bài 14
// const canh =prompt("Nhập chiều dài");
   
//     let canhhv = ' ';

//     for (let j = 1; j <= canh; j++) {
//       canhhv += '*'

//     }

//     for (let i = 1; i <= canh; i++) {
//         document.write(canhhv);
//       document.write("<br/>");

//       console.log(canhhv)
//     }

//bài 15
// const chieuDai =prompt("Nhập chiều dài");
//     const chieuRong =prompt("Nhập chiều rộng");
//     let canhDai = ''

//     for (let j = 1; j <= chieuRong; j++) {
//       canhDai += '* '

//     }

//     for (let i = 1; i <= chieuDai; i++) {
//         document.write(canhDai);
//       document.write("<br/>");

//       console.log(canhDai)
//     }


//bài 16
// let n = prompt("Nhập vào số n bất kì n>=3");
    
//     for(let i =1;i<=n;i++){
//         for(let j =1;j<=i;j++){
//              document.write("* ")
//         }
//        document.write("<br/>");
//     }


//bài 17
// let w = prompt("Mời nhập cân nặng!");
//     let h = prompt("Mời nhập chiều cao"); 
//     let BMI = w/(h*2);
//     console.log(BMI);
//     if(BMI<18.5){
//         console.log("bạn bị nhẹ cân nhẹ cân!");
//     }else if(18.5<=BMI<23){
//         console.log("Chỉ số của bạn bình thường");

//     }else if(23<=BMI<25){
//         console.log("Cơ thể của bạn đang bị thừa cân");
//     }else{
//         console.log("Cơ thể của bạn đang bị béo phì");

//     }

