if ($.cookie('pop_notification') == null) {
   $.cookie('pop_notification', '1', {expires: 7});
   var cookie_value = 1;
} else {
    var cookie_value = $.cookie('pop_notification');
    cookie_value = parseInt(cookie_value);
    cookie_value++;

    $.cookie('pop_notification', cookie_value, {expires: 7});
}

console.log(cookie_value);


if ( cookie_value === 1 || cookie_value === 2 ) {
	setTimeout(function(){

		var inputBlog = $(".hs-input[name='already_subscribed_to_blog']").val();

		if( inputBlog === "Yes"){
			  $("#subscribe-pop").css("display","none");
			  $(".subscribe-overlay").css("display","none");
		 } 
		 else {
			 setTimeout(function(){
		      	$("#subscribe-pop").fadeIn();
		      	$(".subscribe-overlay").fadeIn();
		      },5000);
		}

		$("#subscribe-pop .close").click(function(){
		  $("#subscribe-pop").fadeOut("slow");
		  $(".subscribe-overlay").fadeOut("slow");
		});

	},1000);
}