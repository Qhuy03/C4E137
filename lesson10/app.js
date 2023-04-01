// //quy ước nhỏ: tất cả biến lưu phần tử đểu có dấu $ hoặc _

// //truy xuất phần  tử thông qua id
// const $title = document.getElementById('big-title');
// console.log($title);

// //truy xuất phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph');//trả về html collecttion
// for(const $paragraph of $paragraphs){
//     console.log($paragraph.parentElement);
// }
// console.log($paragraphs);

// //truy xuất thông qua tên thẻ 
// const $images = document.getElementsByTagName('img');
// console.log($images);

// // document.querySelector(), document.querySelectorAll => tìm hiểu thêm
// //lấy ra nội dung của phần tử
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// //thay dổi thuộc tính của phần tử
// $title.innerHTML = "Nội dung mới 😁";

// //lấy ra thuộc tính của 1 phần tử
// let titleAttributeValue = $title.getAttribute('data-hello');
// console.log(titleAttributeValue);

// //thêm mới / thay đổi thuộc tính của 1 phần tử 
// $title.setAttribute('data-goodbye', 'This is goodbye');
// $title.setAttribute('data-hello', 'This is hello');

// //xóa  thuộc tính 1 phần tử
// $title.removeAttribute('data-goodbye');


// //thay dổi định dạng của phần tử 
// $title.style.color = 'red';
// $title.style.background = 'black';
// $title.style.display = 'flex';

// //thêm phần tử vào trang wed
// const $link = document.createElement("a");
// $link.innerHTML = "This is link to somewhere";
// $link.setAttribute('href', 'http://google.com');
// // document.body.append($link);
// // $title.append($link); //Them link vào trong title
// // $title.after($link); //them link vào sau title
// // $title.before($link); //them link vao trc title

// //xóa 1 phần tử trên trang wed
// // $title.remove();


// //listener sau ghi đè lên listener trước
// $title.addEventListener('click', handleClickTitle1);
// $title.addEventListener('click', handleClickTitle2);

// // $title.onclick = handleClickTitle1;
// // $title.onclick = handleClickTitle2;

// function handleClickTitle1(){
//     console.log('Hello');
// }

// function handleClickTitle2(){
//     console.log('goodbye');
// }

// const $emailImput = document.getElementById('my-email');
// $emailImput.onchange = function(){
//     let email = $emailImput.value; // lấy giá trị nhập vào cửa o input
//     if(!isEmailValid(email)) alert('Hãy nhập lại email');
// }

//hoặc
// $emailImput.onchange = function(){
//     return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };


// function isEmailValid(email){
//     return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };


const $numberA = document.getElementById('number-a');
const $numberB = document.getElementById('number-b');
const $plusBtn = document.getElementById('plus-btn');
const $subBtn = document.getElementById('sub-btn');

$plusBtn.onclick = function (){
    let a = Number($numberA.value);
    let b = Number($numberB.value);

    alert(a + b);
}

$subBtn.onclick = function (){
    let a = Number($numberA.value);
    let b = Number($numberB.value);

    alert(a - b);
}