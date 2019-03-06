$(document).ready(function(){
	//===== 상하 스크롤시 header 영역 배경 생성 및 삭제 =====
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("header").addClass("headerBg");
			$("#nav_wrap>ul>li, #nav_wrap>ul>li a").css({"color":"#222"});
			$(".modulogo").attr('src',$(".modulogo").attr('src').replace("logo1.png","logo2.png"));
		}else{
			$("header").removeClass("headerBg");
			$("#nav_wrap>ul>li, #nav_wrap>ul>li a").css({"color":"#fff"});
			$(".modulogo").attr('src',$(".modulogo").attr('src').replace("logo2.png","logo1.png"));
		}
	});
	
	
	//===== 상하 스크롤시 하단 영역에 top버튼 생성 및 삭제 =====	
	//초기값 설정
	$("#topBtn").fadeOut(0);
	
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#topBtn").fadeIn(400);
		}else{
			$("#topBtn").fadeOut(400);
		}
	});
	
	
	//===== a 태그 기능 제한 =====
	$("#two a,#four a,#seven a").click(function(no){
		no.preventDefault();
	});
	
	
	//===== "복잡하고 어려운 작명, 모두네임은 쉽습니다" 영역 탭메뉴 =====
	// 초기값 설정
	$(".sc1").fadeIn(0); 
	$(".sc2").fadeOut(0);
	$(".sc3").fadeOut(0);
	$(".sc4").fadeOut(0);
	$(".screen>img").eq(0).siblings().css({left:"324px"});

	//1. 오행의 길흉 클릭 시
	gotoSlider(1);
	
	//2. 81수리 클릭 시
	gotoSlider(2);
	
	//3. 만세력 클릭 시
	gotoSlider(3);
	
	//4. 인명용 한자 클릭 시
	gotoSlider(4);

	
	//===== "작명인증서" 영역 탭메뉴 =====
 	// 초기값 설정
	$(".fc1").fadeIn(0);
	$(".fc2").fadeOut(0);
	$(".fc3").fadeOut(0);
	
	//1. 작명인증서(PDF용) 클릭 시
	gotoObjChange(1);
	
	//2. 이메일 작명인증서 클릭 시
	gotoObjChange(2);
	
	//3. 고급 케이스 작명인증서 클릭 시
	gotoObjChange(3);
	
	
	//===== sns로고 마우스오버 시 색상 변경 =====
	//1. 페이스북
	snsColorChange(1);
	//2. 인스타그램
	snsColorChange(2);
	//3. 네이버 블로그
	snsColorChange(3);
	//4. 유튜브
	snsColorChange(4);


	var page_scroll_check = new Array(0/*0*/,0/*1*/,0/*2*/,0/*3*/,0/*4*/,0/*5*/,0/*6*/,0/*7*/);

	
	$(window).scroll(function(){
			var scroll_offset = $(window).scrollTop() + screen.height;
			
			infoTextAni("#under",200,0, scroll_offset, page_scroll_check);
			infoTextAni("#one",200,1, scroll_offset, page_scroll_check);
			infoTextAni("#two",200,2, scroll_offset, page_scroll_check);
			infoTextAni("#three",200,3, scroll_offset, page_scroll_check);
			infoTextAni("#four",200,4, scroll_offset, page_scroll_check);
			infoTextAni("#five",200,5, scroll_offset, page_scroll_check);
			infoTextAni("#six",200,6, scroll_offset, page_scroll_check);
			infoTextAni("#seven",200,7, scroll_offset, page_scroll_check);
	});
	$(window).scroll();

});
function infoTextAni(page_num , delay_time, page_int, scroll_offset, page_scroll_check){
	/* [START] 초기값 */
	var padding = 400;
	/* [END] 초기값 */
	/*
		현재 스크롤 위치가 지정 객체(page_num)가 보이는 위치에 있을 경우
		.page_num 안의 .info_text 를 찾아서 delay_time * (n + (++1)) 만큼 하나씩 실행 된다.
	*/
	if($(page_num).offset().top + padding  < scroll_offset && page_scroll_check[page_int] == 0){
		var delay = 1;
		$(page_num+" .info_text").each(function(){
			var this_obj = $(this);
			setTimeout(function(){
				this_obj.css({"transform":"translate3d(0px, 0px, 0px)","opacity":"1"});
			},delay * delay_time);
			delay++;
		});
		page_scroll_check[page_int] = 1;
	}
}

function snsColorChange(num){
	$("#footer_right>ul>li:nth-child("+num+")>a>img").mouseover(function(){
		$(this).attr('src',$(this).attr('src').replace("sns"+num+"_off.png","sns"+num+"_on.png"));
	});
	$("#footer_right>ul>li:nth-child("+num+")>a>img").mouseleave(function(){
		$(this).attr('src',$(this).attr('src').replace("sns"+num+"_on.png","sns"+num+"_off.png"));
	});
}

/* 휴대폰 슬라이더 함수 */
function gotoSlider(num){
	/* [START] 초기값 */
	var btn = $(".serv_btn"+num+" a");
	var btn_other = $(".serv_btn"+num).siblings().find("a");
	var des = $(".sc"+num);
	var des_other = $(".sc"+num).siblings();
	var this_obj = $(".screen>img").eq(num-1);
	var other_obj = $(".screen>img").eq(num-1).siblings();
	/* [END] 초기값 */

	$(".serv_btn"+num).click(function(){

		btn.addClass("greenOn");
		des.fadeIn(0);
		btn_other.removeClass("greenOn");
		des_other.fadeOut(0);

		this_obj.css({"z-index":"1"}).animate({left:"57px"},450,"easeOutCirc");
		other_obj.css({"z-index":"0"});
		setTimeout(function(){
			this_obj.css({left:"57px","z-index":"0"});
			other_obj.css({"left":"324px"});
		},450)
	});
}

function gotoObjChange(num){
	/* [START] 초기값 */
	var this_obj = $(".cert_btn"+num+" a");
	var other_obj = $(".cert_btn"+num).siblings("li").find("a");

	var this_fc = $(".fc"+num);
	var other_fc = $(".fc"+num).siblings("img");
	
	/* [END] 초기값 */
	$(".cert_btn"+num).click(function(){
		this_obj.addClass("whiteOn");
		other_obj.removeClass("whiteOn");
		this_fc.fadeIn(0);
		other_fc.fadeOut(0);
	});
}

function contactusSubmit(){
	$.ajax({
		url:"http://modumom.com/platform/send_question_naming",
		dataType:"json",
		type:"post",
		data:$('#contact_form').serialize(),
		beforeSend:function(xhr) {
			alert('고객님께서 문의하신 내용을 접수중입니다. 잠시만 기다려 주세요.');
		},
		success:function(response) {
			alert("문의사항이 정상적으로 접수되었습니다. 담당자 확인 후 빠른 시일내에 답변드리겠습니다. 감사합니다.");
			document.contact_form.reset();
		},
		error:function(e) {
			alert("문의사항이 정상적으로 접수되었습니다. 담당자 확인 후 빠른 시일내에 답변드리겠습니다. 감사합니다.");
			document.contact_form.reset();
		}
	});
}