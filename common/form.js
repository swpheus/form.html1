//form check
function check(f){
	if(f.name2.value.trim()==""){
		alert("한글 이름을 입력하세요");
		f.name2.focus();
		return false;
	}
	if(f.name3.value.trim()=="" || f.name4.value.trim()==""){
		alert("영문 이름을 입력하세요");
		f.name3.focus();
		return false;
	}
	if(f.email_01.value.trim()=="" || f.email_02.value.trim()==""){
		alert("이메일을 입력하세요");
		f.email_01.focus();
		return false;
	}
	if(f.phone_02.value.trim()=="" || f.phone_03.value.trim()==""){
		alert("핸드폰을 입력하세요");
		f.phone_02.focus();
		return false;
	}
	if(f.post_num.value.trim()=="" || f.addres_02.value.trim()==""){
		alert("주소를 입력하세요");
		f.post_num.focus();
		return false;
	}
}
//이메일 체크 select 선택시 onchange 이벤트실행
function check_email(e){
	console.log("선택한 이메일 : "+e.value);
	var ff=document.myform;
	var index=e.selectedIndex;
	console.log("순서 : "+index);
	if(index==""){//첫번재 매일선택시
		ff.email_02.value="";
	}else if(index==1){//직접입력
		ff.email_02.value="";
		ff.email_02.focus();
	}else if(index>1){//나머지 다른 메일 선택시
		ff.email_02.value=e.value;
	}
}

function open_layer(i){
	console.log("주소찾기 : "+i);
	if(i==2){
		//layer 팝업오픈
		document.getElementById('layer').style.display="block";
	}else{
		//window 팝업오픈
	}
}

function layer_close(){
	document.getElementById('layer').style.display="none";
	document.getElementsByClassName('step2')[0].style.display="none";
	document.getElementsByClassName('step3')[0].style.display="none";
}
function input(f){
	console.log("하하하");
	f.value="";
}
function search(){
	var vil=document.form1.village1.value;
	console.log("동이름 : "+vil);
	if(vil=="") document.getElementById('p').innerHTML="동이름을 적으세요. ex)양재동";
	else{
		document.form1.village1.value="예)양재동";
		document.getElementsByClassName('step2')[0].style.display="block";
		document.getElementById('p').innerHTML="";
	}
}

var addr1,addr2,post_Number;
function sendOK(addr){
	console.log("post_Number : "+addr.getElementsByTagName('span')[0].innerHTML);
	console.log("addr1 : "+addr.getElementsByTagName('span')[1].innerHTML);
	document.getElementsByClassName('step1')[0].style.display="none";
	document.getElementsByClassName('step2')[0].style.display="none";
	document.getElementsByClassName('step3')[0].style.display="block";
	//step3 에서 class="addr" 이곳에 우편번호랑 주소를 입력해줌. 끝~~~
	post_Number+addr.getElementsByTagName('span')[0].innerHTML;
	addr1=addr.getElementsByTagName('span')[1].innerHTML;
	document.getElementsByClassName('addr')[0].innerHTML="["+post_Number+"]"+addr1;
}
function back1() {
		//팝업이 열리는 처음상태로 이동
		document.getElementsByClassName('step1')[0].style.display="block";
		document.getElementsByClassName('step2')[0].style.display="none";
		document.getElementsByClassName('step3')[0].style.display="none";
}
function OK(n) {//n=1(레이어팝업),2(window팝업)
	//주소 post_Number,addr1,addr2 가지고 myform 이동해서 값을 입력!!
	if (n==1) {
		document.getElementById('layer').style.display="none";
		document.myform.post_num.value=post_Number;
		document.myform.addres_01.value=addr1;
		document.myform.addres_02.value=document.form2.add4.value;
	}else{
		//n=2(팝업)
	}

}
