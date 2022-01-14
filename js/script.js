function inputCheck(){
    if(document.regFrm.id.value == ""){
        alert("아이디를 입력해 주세요.");
        document.regFrm.id.focus();
        return;
    }

    let pwd = document.regFrm.pwd;
    let repwd = document.regFrm.repwd;
    if(pwd.value == ""){
        alert("비밀번호를 입력해 주세요.");
        pwd.focus();
        return;
    }

    if(repwd.value == ""){
        alert("비밀번호 확인을 입력해 주세요.");
        repwd.focus();
        return;
    }

    if(pwd.value != repwd.value){
        alert("비밀번호가 일치하지 않습니다.");
        pwd.value = "";
        repwd.value = "";
        pwd.focus();
    }

    if(document.regFrm.name.value == ""){
        alert("이름을 입력해 주세요.");
        document.regFrm.name.focus();
        return;
    }

    if(document.regFrm.gender.value == ""){
        alert("성별을 입력해 주세요.");
        document.regFrm.gender.focus();
        return;
    }

    if(document.regFrm.birthday.value == ""){
        alert("생년월일을 입력해 주세요.");
        document.regFrm.birthday.focus();
        return;
    }

    let email = document.regFrm.email;
    if(email.value == ""){
        alert("이메일을 입력해 주세요.");
        email.focus();
        return;
    }

    let eStr = email.value;
    let atPos = eStr.indexOf("@");//둘이 위치가 같아야함 처음에서부터 서치
    let atLastPos = eStr.lastIndexOf("@"); //둘이 위치가 같아야함 마지막에서부터
    let dotPos = eStr.indexOf(".");//3보다 이상으로 나와야함 .com , .net등등 또한 @보다 뒤여야함
    let spacePos = eStr.indexOf(" ");//없어야하니까 -1 값이 나와야함
    let commaPos = eStr.indexOf(",");//없어야하니까 -1 값이 나와야함
    let eMailSize = eStr.length;
    if(atPos > 1 && atPos == atLastPos && dotPos > 3 
        && spacePos == -1 && commaPos == -1 
        && atPos < dotPos && dotPos + 1 < eMailSize){
            //
        } else {
            alert("E-mail 형식이 잘못 되었습니다. \n다시 입력해 주세요.");
            email.focus();
            return;
        }

    document.regFrm.submit();
}