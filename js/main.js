$(".hidden-button").on("click", function() {
		
		$("ul.navigation").show();

});
$(".close-menu").on("click", function() {
		
		$("ul.navigation").hide();

});		


(function($){$.fn.selectbox=function(){$(this).each(function(){var select=$(this);if(select.prev('span.selectbox').length<1){function doSelect(){var option=select.find('option');var optionSelected=option.filter(':selected');var optionText=option.filter(':first').text();if(optionSelected.length)optionText=optionSelected.text();var ddlist='';for(i=0;i<option.length;i++){var selected='';var disabled=' class="disabled"';if(option.eq(i).is(':selected'))selected=' class="selected sel"';if(option.eq(i).is(':disabled'))selected=disabled;ddlist+='<li'+selected+'>'+option.eq(i).text()+'</li>';}var selectbox=$('<span class="selectbox" style="display:inline-block;position:relative">'+'<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">'+optionText+'</div>'+'<b class="trigger"><i class="arrow"></i></b>'+'</div>'+'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">'+'<ul>'+ddlist+'</ul>'+'</div>'+'</span>');select.before(selectbox).css({position:'absolute',top:-9999});var divSelect=selectbox.find('div.select');var divText=selectbox.find('div.text');var dropdown=selectbox.find('div.dropdown');var li=dropdown.find('li');var selectHeight=selectbox.outerHeight();if(dropdown.css('left')=='auto')dropdown.css({left:0});if(dropdown.css('top')=='auto')dropdown.css({top:selectHeight});var liHeight=li.outerHeight();var position=dropdown.css('top');dropdown.hide();divSelect.click(function(){var topOffset=selectbox.offset().top;var bottomOffset=$(window).height()-selectHeight-(topOffset-$(window).scrollTop());if(bottomOffset<0||bottomOffset<liHeight*6){dropdown.height('auto').css({top:'auto',bottom:position});if(dropdown.outerHeight()>topOffset-$(window).scrollTop()-20){dropdown.height(Math.floor((topOffset-$(window).scrollTop()-20)/liHeight)*liHeight);}}else if(bottomOffset>liHeight*6){dropdown.height('auto').css({bottom:'auto',top:position});if(dropdown.outerHeight()>bottomOffset-20){dropdown.height(Math.floor((bottomOffset-20)/liHeight)*liHeight);}}$('span.selectbox').css({zIndex:1}).removeClass('focused');selectbox.css({zIndex:2});if(dropdown.is(':hidden')){$('div.dropdown:visible').hide();dropdown.show();}else{dropdown.hide();}return false;});li.hover(function(){$(this).siblings().removeClass('selected');});var selectedText=li.filter('.selected').text();li.filter(':not(.disabled)').click(function(){var liText=$(this).text();if(selectedText!=liText){$(this).addClass('selected sel').siblings().removeClass('selected sel');option.removeAttr('selected').eq($(this).index()).attr('selected',true);selectedText=liText;divText.text(liText);select.change();}dropdown.hide();});dropdown.mouseout(function(){dropdown.find('li.sel').addClass('selected');});select.focus(function(){$('span.selectbox').removeClass('focused');selectbox.addClass('focused');}).keyup(function(){divText.text(option.filter(':selected').text());li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');});$(document).on('click',function(e){if(!$(e.target).parents().hasClass('selectbox')){dropdown.hide().find('li.sel').addClass('selected');selectbox.removeClass('focused');}});}doSelect();select.on('refresh',function(){select.prev().remove();doSelect();})}});}})(jQuery); 
$(function() {
	$('select').selectbox();
});

//to close modal when click in empty place

    $('#myModal').click(function() {
    	$("#myModal").css({"display" : "none"});
    });
    $("#myModal .sga-modal").click(function(e) {
        e.stopPropagation();
   });  

// datapicker bootstrap
    $('#datetimepicker2').click(function(event){
	    event.preventDefault();
	    $(this).children('.input-group-addon').click();
	});
	$('#datetimepicker3').click(function(event){
	    event.preventDefault();
	    $(this).children('.input-group-addon').click();
	});


// mask in input
	jQuery(function($){
		$(".phone").mask("+7 (999) 999-99-99");
	});

//to reset form
function zero(){
	
	jQuery('.mainform')[0].reset();
	jQuery('.mainform').trigger( 'reset' );
	jQuery('.select').val('');

	// custom select hack
	jQuery('#from-li .text').empty(); 
	jQuery('#where-li .text').empty();   
	jQuery('#type-auto-li .text').empty();     
}