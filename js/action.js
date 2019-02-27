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
	$(".sc1").fadeIn(0); // 초기값 설정
	$(".sc2").fadeOut(0);
	$(".sc3").fadeOut(0);
	$(".sc4").fadeOut(0);
	
	//1. 오행의 길흉 클릭 시
	$(".serv_btn1").click(function(){
		$(".serv_btn1 a").addClass("greenOn");
		$(".serv_btn2 a").removeClass("greenOn");
		$(".serv_btn3 a").removeClass("greenOn");
		$(".serv_btn4 a").removeClass("greenOn");
		$(".sc1").fadeIn(0);
		$(".sc2").fadeOut(0);
		$(".sc3").fadeOut(0);
		$(".sc4").fadeOut(0);
	});
	
	//2. 81수리 클릭 시
	$(".serv_btn2").click(function(){
		$(".serv_btn1 a").removeClass("greenOn");
		$(".serv_btn2 a").addClass("greenOn");
		$(".serv_btn3 a").removeClass("greenOn");
		$(".serv_btn4 a").removeClass("greenOn");
		$(".sc1").fadeOut(0);
		$(".sc2").fadeIn(0);
		$(".sc3").fadeOut(0);
		$(".sc4").fadeOut(0);
	});
	
	//3. 만세력 클릭 시
	$(".serv_btn3").click(function(){
		$(".serv_btn1 a").removeClass("greenOn");
		$(".serv_btn2 a").removeClass("greenOn");
		$(".serv_btn3 a").addClass("greenOn");
		$(".serv_btn4 a").removeClass("greenOn");
		$(".sc1").fadeOut(0);
		$(".sc2").fadeOut(0);
		$(".sc3").fadeIn(0);
		$(".sc4").fadeOut(0);
	});
	
	//4. 인명용 한자 클릭 시
	$(".serv_btn4").click(function(){
		$(".serv_btn1 a").removeClass("greenOn");
		$(".serv_btn2 a").removeClass("greenOn");
		$(".serv_btn3 a").removeClass("greenOn");
		$(".serv_btn4 a").addClass("greenOn");
		$(".sc1").fadeOut(0);
		$(".sc2").fadeOut(0);
		$(".sc3").fadeOut(0);
		$(".sc4").fadeIn(0);
	});
	
	
	//===== "작명인증서" 영역 탭메뉴 =====
	$(".fc1").fadeIn(0); // 초기값 설정
	$(".fc2").fadeOut(0);
	$(".fc3").fadeOut(0);
	
	//1. 작명인증서(PDF용) 클릭 시
	$(".cert_btn1").click(function(){
		$(".cert_btn1 a").addClass("whiteOn");
		$(".cert_btn2 a").removeClass("whiteOn");
		$(".cert_btn3 a").removeClass("whiteOn");
		$(".fc1").fadeIn(0);
		$(".fc2").fadeOut(0);
		$(".fc3").fadeOut(0);
	});
	
	//2. 이메일 작명인증서 클릭 시
	$(".cert_btn2").click(function(){
		$(".cert_btn1 a").removeClass("whiteOn");
		$(".cert_btn2 a").addClass("whiteOn");
		$(".cert_btn3 a").removeClass("whiteOn");
		$(".fc1").fadeOut(0);
		$(".fc2").fadeIn(0);
		$(".fc3").fadeOut(0);
	});
	
	//3. 고급 케이스 작명인증서 클릭 시
	$(".cert_btn3").click(function(){
		$(".cert_btn1 a").removeClass("whiteOn");
		$(".cert_btn2 a").removeClass("whiteOn");
		$(".cert_btn3 a").addClass("whiteOn");
		$(".fc1").fadeOut(0);
		$(".fc2").fadeOut(0);
		$(".fc3").fadeIn(0);
	});
	
	
	//===== sns로고 마우스오버 시 색상 변경 =====
	//1. 페이스북
	$("#footer_right>ul>li:nth-child(1)>a>img").mouseover(function(){
		$(this).attr('src',$(this).attr('src').replace("sns1_off.png","sns1_on.png"));
	});
	$("#footer_right>ul>li:nth-child(1)>a>img").mouseleave(function(){
		$(this).attr('src',$(this).attr('src').replace("sns1_on.png","sns1_off.png"));
	});

	//2. 인스타그램
	$("#footer_right>ul>li:nth-child(2)>a>img").mouseover(function(){
		$(this).attr('src',$(this).attr('src').replace("sns2_off.png","sns2_on.png"));
	});
	$("#footer_right>ul>li:nth-child(2)>a>img").mouseleave(function(){
		$(this).attr('src',$(this).attr('src').replace("sns2_on.png","sns2_off.png"));
	});
	
	//3. 네이버 블로그
	$("#footer_right>ul>li:nth-child(3)>a>img").mouseover(function(){
		$(this).attr('src',$(this).attr('src').replace("sns3_off.png","sns3_on.png"));
	});
	$("#footer_right>ul>li:nth-child(3)>a>img").mouseleave(function(){
		$(this).attr('src',$(this).attr('src').replace("sns3_on.png","sns3_off.png"));
	});
	
	//4. 유튜브
	$("#footer_right>ul>li:nth-child(4)>a>img").mouseover(function(){
		$(this).attr('src',$(this).attr('src').replace("sns4_off.png","sns4_on.png"));
	});
	$("#footer_right>ul>li:nth-child(4)>a>img").mouseleave(function(){
		$(this).attr('src',$(this).attr('src').replace("sns4_on.png","sns4_off.png"));
	});


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
	var padding = 400;
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