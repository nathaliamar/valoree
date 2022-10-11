//find current theme and server Ids and go to theme editor


function check_status(){
	if ( $('#CMS_admin_ToolBar').length < 1 ){
		var gateway = "/gateway/login.aspx?override=true";
		var origin = window.location.origin;
		window.location.replace(origin+gateway);
	}
}
function get_server(){
	href = $('li.optionPageOptions .CMS_dropPanel ul li a:contains(Page Properties)').attr('href');
	serverStart = href.indexOf("serverId");
	serverEnd = href.indexOf(',', serverStart+10);
	serverId = href.substring(serverStart+10,serverEnd);
	console.log('serverId',serverId);

}
function get_theme(){
	if ( $('#pageProperties_Theme_ddl').length > 0 ) {
	    $('.ui-dialog,.ui-widget-overlay').css("display", "none");
		theme = $('#pageProperties_Theme_ddl').val();
		console.log("theme",theme);
		if ( theme != 0 && theme != null ){
			console.log("found");
			clearInterval(themeInterval);
			redirect(serverId,theme);
		}
	}
}
function redirect(server,theme){
	origin = window.location.origin;
	themeURL = origin + '/administrate/portal/PortalThemeAe.aspx?serverID=' + server + '&themeId=' + theme + '&pageIndex=0';
	//location.href = themeURL;
	var win = window.open( themeURL, '_blank' );
	if (win) {
	    //Browser has allowed it to be opened
	    //win.focus();
	} else {
	    //Browser has blocked it
	    alert('Please allow popups for this website');
	}
	console.log(themeURL);
}
//jQuery(window).on( "load", function() {
	check_status();
   $('.optionPageOptions .CMS_dropPanel ul li a:contains(Page Properties) span').trigger("click");
   get_server();
   i = 0;
   var themeInterval = setInterval( function(){
      get_theme();
      i++;
      if( i > 40 ){
         clearInterval(themeInterval);
      }
   }, 500);
//})
