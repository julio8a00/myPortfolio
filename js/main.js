$(function() {

	$.when(
	  $.getJSON('js/data.json', function(data) {
		var servicesTemplate = $('#servicesTemplate').html();
		var servicesResults = Mustache.to_html(servicesTemplate, data);
		$('#services ul').append(servicesResults);
  
		var experienceTemplate = $('#experienceTemplate').html();
		var experienceResults = Mustache.to_html(experienceTemplate, data);
		$('#experience').append(experienceResults);
  
		var blockTemplate = $('#blockTemplate').html();
		var blockResults = Mustache.to_html(blockTemplate, data);
		$('#blocks-container').append(blockResults);
  
		var iconTemplate = $('#iconTemplate').html();
		var iconResults = Mustache.to_html(iconTemplate, data);
		$('#project-menu .center').append(iconResults);
  
		var aboutTemplate = $('#aboutTemplate').html();
		var aboutResults = Mustache.to_html(aboutTemplate, data);
		$('#aboutMe').append(aboutResults);
  
		var navigationTemplate = $('#navigationTemplate').html();
		var navigationResults = Mustache.to_html(navigationTemplate, data);
		$('nav .wrapper ul').append(navigationResults);
  
		var socialTemplate = $('#socialTemplate').html();
		var socialResults = Mustache.to_html(socialTemplate, data);
		$('footer .center').append(socialResults);
	  }) //getJSON
  
	).done(function() {
		$("#about").removeClass("debut");
		$("#contact").removeClass("debut");
	  
		var vTop = 0;
		var mLeft = 0;
		var bgColor = "#FFFFFF";
		var currentProject = 0;
		var fromicon = false;
	  
		var windowScroll = 0;
		$(window).trigger('scroll');
		$(window).scroll(function(event){
		  windowScroll = $(window).scrollTop();
		});
	  
		$(".about").click(function(){
		  if (rubOpen == false) {
			$("#about").css("left", "0");
			$("#contact").css("left", "100%");
			menuderoule();
			aboutOpen = true;
			$(this).addClass("current");
			$('#about').addClass("shadow-heavy")
		  }
		  else {
			if(contactOpen == true) {
			  $("#contact").css("left", "100%");
			  $("#contact").removeClass("shadow-heavy");
			  $("#about").addClass("shadow-heavy");
			  $("#about").css("left", "0");
			  $("#about").css("left", "0");
			  contactOpen = false;
			  aboutOpen = true;
			  $("#header a").removeClass("current");
			  $(this).addClass("current");
			}
			else {
			  menuferme();
			  aboutOpen = false;
			  $('#about').removeClass('shadow-heavy');
			}
		  }
		  return false;
		});
	  
		$(".contact").click(function(){
		  if (rubOpen == false) {
			$('#contact').addClass("shadow-heavy")
			$("#about").css("left", "-100%");
			$("#contact").css("left", "0");
			menuderoule();
			contactOpen = true;
			$("#header a.contact").addClass("current");
		  }
		  else {
			if(aboutOpen == true) {
			  $("#about").css("left", "-100%");
			  $("#contact").css("left", "0");
			  $("#contact").addClass("shadow-heavy");
			  $("#about").removeClass("shadow-heavy");
			  aboutOpen = false;
			  contactOpen = true;
			  $("#header a").removeClass("current");
			  $(".contact").addClass("current");
			}
			else {
			  menuferme();
			  contactOpen = false;
			$('#contact').removeClass("shadow-heavy")
			}
		  }
		  return false;
		});
	  
		$(".work").click(function(){
		  if (rubOpen == true) {
			menuferme();
			$('#contact, #about').removeClass("shadow-heavy")
		  }
		  return false;
		});
	  
		function menuderoule() {
		  $("#about").css("marginTop", 0);
		  $("#contact").css("marginTop", 0);
		  $("#header a").removeClass("current");
		  $("#header").css("top", "550px");
		  setTimeout(function() {
			$("#about").addClass("visible");
			$("#contact").addClass("visible");
		  }, 300);
		  rubOpen = true;
		}
	  
		function menuferme() {
		  $("#about").css("marginTop", "-550px");
		  $("#contact").css("marginTop", "-550px");
		  $("#header a").removeClass("current");
		  $(".work").addClass("current");
		  $("#header").css("top", "0");
		  $("#about").removeClass("visible");
		  $("#contact").removeClass("visible");
		  rubOpen = false;
		}
	  
		$(".block").click(function(){
		  if ($(this).hasClass("block1")) { $("#projet").load("projects/zip-tapestry/index.html", function(){ currentProject = 1; openprojet() } ); } ;
		  if ($(this).hasClass("block2")) { $("#projet").load("projects/urb-ob-site/index.html", function(){ currentProject = 2; openprojet() } ); } ;
		  if ($(this).hasClass("block3")) { $("#projet").load("projects/urb-ob-ui/index.html", function(){ currentProject = 3; openprojet() } ); } ;
		  if ($(this).hasClass("block4")) { $("#projet").load("projects/public-health/index.html", function(){ currentProject = 4; openprojet() } ); } ;
		  if ($(this).hasClass("block5")) { $("#projet").load("projects/inca/index.html", function(){ currentProject = 5;openprojet() } ); } ;
		  if ($(this).hasClass("block6")) { $("#projet").load("projects/save-me/index.html", function(){ currentProject = 6; openprojet() } ); } ;
		  if ($(this).hasClass("block7")) { $("#projet").load("projects/industries/index.html", function(){ currentProject = 7; openprojet() } ); } ;
		  if ($(this).hasClass("block8")) { $("#projet").load("projects/workforce/index.html", function(){ currentProject = 8; openprojet() } ); } ;
		  if ($(this).hasClass("block9")) { $("#projet").load("projects/dashboard/index.html", function(){ currentProject = 9; openprojet() } ); } ;
		  if ($(this).hasClass("block10")) { $("#projet").load("projects/web-app-builder/index.html", function(){ currentProject = 10; openprojet() } ); } ;
		  if ($(this).hasClass("block11")) { $("#projet").load("projects/my-esri/index.html", function(){ currentProject = 11; openprojet() } ); } ;
		  if ($(this).hasClass("block12")) { $("#projet").load("projects/city-engine/index.html", function(){ currentProject = 12; openprojet() } ); } ;
		});
	  
		$(".icon").click(function(){
		  fromicon = true;
		  bgColor = $(this).find(".fond").css("background-color");
		  $("#projet").removeClass("visible");
		  if ($(this).hasClass("icon1")) { $("#projet").load("../projects/zip-tapestry/index.html", function(){ currentProject = 1; vTop2 = "400px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon2")) { $("#projet").load("../projects/urb-ob-site/index.html", function(){ currentProject = 2; vTop2 = "400px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon3")) { $("#projet").load("../projects/urb-ob-ui/index.html", function(){ currentProject = 3; vTop2 = "400px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon4")) { $("#projet").load("../projects/public-health/index.html", function(){ currentProject = 4; vTop2 = "830px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon5")) { $("#projet").load("../projects/inca/index.html", function(){ currentProject = 5; vtop2 = "830px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon6")) { $("#projet").load("../projects/save-me/index.html", function(){ currentProject = 6; vtop2 = "830px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon7")) { $("#projet").load("../projects/industries/index.html", function(){ currentProject = 7; vTop2 = "1260px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon8")) { $("#projet").load("../projects/workforce/index.html", function(){ currentProject = 8; vTop2 = "1260px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon9")) { $("#projet").load("../projects/dashboard/index.html", function(){ currentProject = 9; vTop2 = "1260px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon10")) { $("#projet").load("../projects/web-app-builder/index.html", function(){ currentProject = 10; vTop2 = "1260px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon11")) { $("#projet").load("../projects/my-esri/index.html", function(){ currentProject = 11; vTop2 = "1260px"; openprojet() } ); } ;
		  if ($(this).hasClass("icon12")) { $("#projet").load("../projects/city-engine/index.html", function(){ currentProject = 12; vTop2 = "1260px"; openprojet() } ); } ;
	  
		});
	  
		function openprojet() {
		  $('#blocks-container').css('marginTop', '50px');
		  $(".icon").removeClass("current");
		  $(".icon"+currentProject).addClass("current");
		  if (fromicon == true) {
			$("#projet").addClass("visible");
			$('#fond_projet.actif').animate({backgroundColor: bgColor},'600')
			$('html,body').delay(0).animate({scrollTop: 0},'10');
		  }
		  if (fromicon == false) {
			$("#fond_projet").addClass("actif");
			$("#projet").addClass("visible");
			$("#project-menu").addClass("visible");
			$("#fond_projet.actif").css("top", 0);
			$("#fond_projet.actif").css("left", 0);
			$("#fond_projet.actif").css("marginLeft", 0);
			$("#fond_projet.actif").css("height", "100%");
			$("#fond_projet.actif").css("width", "100%");
			$("#fond_projet.actif").css("background-color", bgColor);
			$('html,body').delay(300).animate({scrollTop: 0},'10');
		  }
		  if(rubOpen == true) {
			menuferme();
			contactOpen = false;
			aboutOpen = false;
		  }
		  fromicon = false;
		}
	  
		$(".block").mouseover(function(){
		  vTop = $(this).css("Top");
		  vTop2 = vTop;
		  vTop = parseInt(vTop) - windowScroll;
		  mLeft = $(this).css("marginLeft");
		  bgColor = $(this).find(".fond").css("background-color");
		  $("#fond_projet").css("top", vTop+"px");
		  $("#fond_projet").css("marginLeft", mLeft);
		  $("#fond_projet").css("left", "50%");
		  $("#fond_projet").css("height", "380px");
		  $("#fond_projet").css("background-color", bgColor);
		});
	  
		$(".back").click(function(){
		  $('#blocks-container').css('marginTop', '280px');
		  $("#projet").removeClass("visible");
		  $("#project-menu").removeClass("visible");
		  $("#fond_projet").removeClass("actif");
		  $("#fond_projet").css("top", vTop2);
		  $("#fond_projet").css("left", "50%");
		  $("#fond_projet").css("marginLeft", mLeft);
		  $("#fond_projet").css("height", "380px");
		  $("#fond_projet").css("width", "300px");
		  $("#fond_projet").css("background-color", bgColor);
		  $('html,body').delay(320).animate({scrollTop: parseInt(vTop2)-100},'10');
		});
	  
		var windowW = $(window).width();
		var windowW2 = -(windowW / 2);
		gestionResize();
	  
		$(window).resize(function() {
		  windowW = $(window).width();
		  windowW2 = -(windowW / 2);
		  gestionResize();
		});
	  
		function gestionResize(){
		  if( $(window).width() > 1920) {
			$(".banner img").css("width", windowW);
			$(".banner img").css("marginLeft", windowW2);
		  }
		  else {
			$(".banner img").css("width", "1920px");
			$(".banner img").css("marginLeft", "-960px");
		  }
		}
	  
	   $('.icon').hover(
		   function() {
			 var popupText = $(this).children('div').attr('alt');
			 var popupContent = ('<div class="popup-text"><span>'+ popupText + '</span></div>');
			 $(popupContent).prependTo($(this));
		   }, function() {
			 $('.popup-text').remove();
		   });
	  
	  });
  }); //function
  