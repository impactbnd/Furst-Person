if(null==$.cookie("pop_notification")){$.cookie("pop_notification","1",{expires:7});var cookie_value=1}else{var cookie_value=$.cookie("pop_notification");cookie_value=parseInt(cookie_value),cookie_value++,$.cookie("pop_notification",cookie_value,{expires:7})}console.log(cookie_value),(1===cookie_value||2===cookie_value)&&setTimeout(function(){var o=$(".hs-input[name='already_subscribed_to_blog']").val();"Yes"===o?($("#subscribe-pop").css("display","none"),$(".subscribe-overlay").css("display","none")):setTimeout(function(){$("#subscribe-pop").fadeIn(),$(".subscribe-overlay").fadeIn()},5e3),$("#subscribe-pop .close").click(function(){$("#subscribe-pop").fadeOut("slow"),$(".subscribe-overlay").fadeOut("slow")})},1e3);