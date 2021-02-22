$(document).ready(function(){
	
	/* "인재채용" 페이지 채용부문 탭메뉴 */
	$('.tab1').css({'display':'block'});
	$('.tab2').css({'display':'none'});
	$('.tab3').css({'display':'none'});
	$('.tab4').css({'display':'none'});	
	$('.tab5').css({'display':'none'});	

	changeContent(1); //1. "개발" 클릭 시
	changeContent(2); //2. "기획" 클릭 시
	changeContent(3); //3. "디자인" 클릭 시
	changeContent(4); //4. "홍보/마케팅" 클릭 시
	changeContent(5); //5. "영업" 클릭 시
	
	function changeContent(num){
		/* [START] 초기값 */
		var btn = $('.btn'+num);
		var btn_other = $('.btn'+num).siblings();
		var cont = $('.tab'+num);
		var cont_other = $('.tab'+num).siblings();
		/* [END] 초기값 */
		
		$('.btn'+num).click(function(event){
			btn.addClass('greenOn');
			cont.css({'display':'block'});
			btn_other.removeClass('greenOn');
			cont_other.css({'display':'none'});
			event.preventDefault(event);
		});
	}
	
	
	/* 전체메뉴 클릭 시 */
	$("#infoSub").slideUp(); //초기값 설정
	
	$(".wholemenu").click(function(){
		$("#infoSub").slideToggle(400);
	});
	
});