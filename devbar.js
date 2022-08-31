jQuery(document).ready(function(){
    $("body,html").css({"margin":"0","padding":"0","border":"0"});
	var url = window.location.href;
	$("body").empty();
	$("body").prepend('<iframe id="maindoc" width="100%" height="100%" frameborder="0" src="'+ url +'"></iframe>');
	$("body").prepend('<div class="developerBar"><a href="/calendar">calendar</a></div>');
	var height = $( window ).height();
	$("#maindoc").css("height",height+"px");
})
