
const form = document.querySelector('#loginform');
const checkInput = document.querySelectorAll('.check');
const labels = document.querySelectorAll('.worning, .gender-label');
const reset = document.querySelector('#reset');
const passInput = document.querySelector('#password');
const checkPass = document.querySelector('#checkPass');
const gender = document.getElementsByName('gender');

// 성별 체크
function check(e) {
    if(e.id == "male") {
        e.nextElementSibling.nextElementSibling.removeAttribute('checked', 'checked');
        e.setAttribute('checked', 'checked');
    } else if(e.id == "female") {
        e.previousElementSibling.previousElementSibling.removeAttribute('checked', 'checked');
        e.setAttribute('checked', 'checked');   
    }
}

// 에러 메세지
for(let i = 0; i < labels.length; i++) {
    let items = labels.item(i);
    items.style.display = 'none';
}

// 비밀번호 체크
checkPass.addEventListener('blur', (e) => {
    if(passInput.value != e.target.value) {
        e.target.style.border = '1px solid red';
        e.target.parentNode.nextElementSibling.style.display = "flex";
    }
});

// 비밀번호 에러 시 클릭하면 에러메세지 비표시
checkPass.addEventListener('click', (e) => {
    e.target.style.border = '1px solid #d9d9d9';
    e.target.parentNode.nextElementSibling.style.display = "none";
});

// 다시 작성 버튼 클릭 이벤트
reset.addEventListener('click', () => {
    for(let i = 0; i < checkInput.length; i++) {
        let items = checkInput.item(i);
        items.parentNode.nextElementSibling.style.display = 'none';
        items.style.border = '1px solid #d9d9d9';
    }
    gender.item(0).parentNode.parentNode.style.border = '1px solid #d9d9d9';
    gender.item(0).parentNode.nextElementSibling.style.display = 'none';
});

// form submit 함수
function jbSubmit() {
    let items;

    // Validation 체크
    for(let i = 0; i < checkInput.length; i++) {
        items = checkInput.item(i);
        mItems = gender.item(0);
        fItems = gender.item(1);

        // 값을 안적으면 에러메세지 표시
        if(items.value == "" || items.value == null || mItems.checked == false || fItems.checked == false ) {

            console.log(items.value);

            items.style.border = '1px solid red';
            items.parentNode.nextElementSibling.style.display = "flex";
            
            items.addEventListener('click', (e) => {
                e.target.style.border = '1px solid #d9d9d9';
                e.target.parentNode.nextElementSibling.style.display = "none";
            });

        } else {
            alert('aaaaaa');
            return true;
        }
    }

    // 성별 Validation 체크
    if(gender.item(0).checked == true || gender.item(1).checked == true) {
        console.log("통과");
    } else {
        gender.item(0).parentNode.parentNode.style.border = '1px solid red';
        gender.item(0).parentNode.nextElementSibling.style.display = 'flex';
    }
    
    return false;

}
