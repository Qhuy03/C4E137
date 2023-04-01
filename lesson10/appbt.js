// //bài1
// const $urlIput = document.getElementById('url-input');
// const $widthIput = document.getElementById('width-input');
// const $heightIput = document.getElementById('height-input');
// const $borderRadiusIput = document.getElementById('border-radius-input');
// const $altIput = document.getElementById('alt-input');
// const $image = document.getElementById('img');

// $urlIput.onchange = () => $image.setAttribute('src', $urlIput.value);
// $altIput.onchange = () => $image.setAttribute('src', $altIput.value);
// $widthIput.onchange = () => $image.style.width = $widthIput.value + 'px';
// $heightIput.onchange = () => $image.style.height = $heightIput.value + 'px';
// $borderRadiusIput.onchange = () => $image.style.borderRadius = $borderRadiusIput.value + 'px';


//bài 2
const $contentInput = document.getElementById('task-content-input');
const $createBtn = document.getElementById('create-task-btn');
const $taskList = document.getElementById('task-list');


$createBtn.onclick = () => {
    let value = $contentInput.value;

    //tạo 1 li
    const $li = document.createElement('li');
    $li.innerHTML = value;

    $taskList.append($li);
};