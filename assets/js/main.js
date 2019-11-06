$(document).ready(function(){


 $("#owl-example").owlCarousel({
    // Most important owl features
    pagination : true,
    paginationSpeed : 1000,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    slideSpeed : 800,
    singleItem:true
 });

	$("#navigation").sticky({
		topSpacing : 75,
	});

    // animation scroll js
    var html_body = $('html, body');
    $('nav li a').on('click', function () { //use page-scroll class in any HTML tag for scrolling
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500, "easeInOutExpo");
                return false;
            }
        }
    });

    // easeInOutExpo Declaration
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    var path = window.location.pathname;
    if(path != '/'){
      $("#top-nav li a[href*='"+path+"']").parent().addClass("active");
    }
//Initiat WOW JS
    new WOW().init();

    $('.search-btn a').click(function(e){
      e.preventDefault();
      $('.search').toggle();
    });

    //stars
	var j;
	var starAppend = '';
	var screenWidth = $(window).width();

	if(screenWidth > 800){
		var numberOfStar = 12;
	}else if(screenWidth > 479){
		var numberOfStar = 6;
	}
	else{
		var numberOfStar = 4;
	}

	$(window).resize(function(){
		var screenWidth = $(window).width();
		if(screenWidth > 782){
			$('.star:nth-child(7)').show();
			$('.star:nth-child(8)').show();
			$('.star:nth-child(9)').show();
			$('.star:nth-child(10)').show();
			$('.star:nth-child(11)').show();
			$('.star:nth-child(12)').show();
		}
	});

	// randomize
	function shuffle(arr) {
		var shuffled = arr.slice(0), i = arr.length, temp, index;
		while (i--) {
			index = Math.floor(i * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled;
	}

	var star_array = [
		'star__105_Layer.jpg',
		'star__096_Layer.jpg',
		'star__112_Layer.jpg',
		'star__035_Layer.jpg',
		'star__034_Layer.jpg',
		'star__110_Layer.jpg',
		'star__056_Layer.jpg',
		'star__063_Layer.jpg',
		'star__062_Layer.jpg',
		'star__006_Layer.jpg',
		'star__130_Layer.jpg',
		'star__097_Layer.jpg',
		'star__041_Layer.jpg',
		'star__088_Layer.jpg',
		'star__017_Layer.jpg',
		'star__027_Layer.jpg',
		'star__011_Layer.jpg',
		'star__049_Layer.jpg',
		'star__106_Layer.jpg',
		'star__108_Layer.jpg',
		'star__120_Layer.jpg',
		'star__066_Layer.jpg',
		'star__054_Layer.jpg',
		'star__123_Layer.jpg',
		'star__078_Layer.jpg',
		'star__170_Layer.jpg',
		'star__030_Layer.jpg',
		'star__173_Layer.jpg',
		'star__071_Layer.jpg',
		'star__127_Layer.jpg',
		'star__058_Layer.jpg',
		'star__069_Layer.jpg',
		'star__168_Layer.jpg',
		'star__045_Layer.jpg',
		'star__057_Layer.jpg',
		'star__171_Layer.jpg',
		'star__042_Layer.jpg',
		'star__086_Layer.jpg',
		'star__076_Layer.jpg',
		'star__004_Layer.jpg',
		'star__021_Layer.jpg',
		'star__094_Layer.jpg',
		'star__060_Layer.jpg',
		'star__029_Layer.jpg',
		'star__037_Layer.jpg',
		'star__090_Layer.jpg',
		'star__019_Layer.jpg',
		'star__129_Layer.jpg',
		'star__022_Layer.jpg',
		'star__115_Layer.jpg',
		'star__087_Layer.jpg',
		'star__114_Layer.jpg',
		'star__167_Layer.jpg',
		'star__091_Layer.jpg',
		'star__007_Layer.jpg',
		'star__117_Layer.jpg',
		'star__016_Layer.jpg',
		'star__001_Layer.jpg',
		'star__163_Layer.jpg',
		'star__010_Layer.jpg',
		'star__082_Layer.jpg',
		'star__070_Layer.jpg',
		'star__028_Layer.jpg',
		'star__068_Layer.jpg',
		'star__023_Layer.jpg',
		'star__033_Layer.jpg',
		'star__174_Layer.jpg',
		'star__166_Layer.jpg',
		'star__119_Layer.jpg',
		'star__055_Layer.jpg',
		'star__084_Layer.jpg',
		'star__093_Layer.jpg',
		'star__038_Layer.jpg',
		'star__075_Layer.jpg',
		'star__013_Layer.jpg',
		'star__059_Layer.jpg',
		'star__072_Layer.jpg',
		'star__162_Layer.jpg',
		'star__103_Layer.jpg',
		'star__064_Layer.jpg',
		'star__187_Layer.jpg',
		'star__081_Layer.jpg',
		'star__039_Layer.jpg',
		'star__015_Layer.jpg',
		'star__169_Layer.jpg',
		'star__052_Layer.jpg',
		'star__164_Layer.jpg',
		'star__085_Layer.jpg',
		'star__104_Layer.jpg',
		'star__125_Layer.jpg',
		'star__065_Layer.jpg',
		'star__008_Layer.jpg',
		'star__111_Layer.jpg',
		'star__053_Layer.jpg',
		'star__100_Layer.jpg',
		'star__113_Layer.jpg',
		'star__092_Layer.jpg',
		'star__061_Layer.jpg',
		'star__040_Layer.jpg',
		'star__095_Layer.jpg',
		'star__020_Layer.jpg',
		'star__024_Layer.jpg',
		'star__018_Layer.jpg',
		'star__044_Layer.jpg',
		'star__014_Layer.jpg',
		'star__009_Layer.jpg',
		'star__083_Layer.jpg',
		'star__132_Layer.jpg',
		'star__050_Layer.jpg',
		'star__012_Layer.jpg',
		'star__047_Layer.jpg',
		'star__080_Layer.jpg',
		'star__003_Layer.jpg',
		'star__002_Layer.jpg',
		'star__074_Layer.jpg',
		'star__026_Layer.jpg',
		'star__109_Layer.jpg',
		'star__043_Layer.jpg',
		'star__073_Layer.jpg',
		'star__116_Layer.jpg',
		'star__101_Layer.jpg',
		'star__051_Layer.jpg',
		'star__172_Layer.jpg',
		'star__107_Layer.jpg',
		'star__121_Layer.jpg',
		'star__067_Layer.jpg',
		'star__099_Layer.jpg',
		'star__025_Layer.jpg',
		'star__089_Layer.jpg',
		'star__046_Layer.jpg',
		'star__165_Layer.jpg',
		'star__122_Layer.jpg',
		'star__098_Layer.jpg',
		'star__124_Layer.jpg',
		'star__048_Layer.jpg',
		'star__118_Layer.jpg',
		'star__079_Layer.jpg',
		'star__005_Layer.jpg',
		'star__032_Layer.jpg',
		'star__036_Layer.jpg',
		'star__134_Layer.jpg',
		'star__135_Layer.jpg',
		'star__136_Layer.jpg',
		'star__137_Layer.jpg',
		'star__139_Layer.jpg',
		'star__140_Layer.jpg',
		'star__141_Layer.jpg',
		'star__143_Layer.jpg',
		'star__144_Layer.jpg',
		'star__145_Layer.jpg',
		'star__147_Layer.jpg',
		'star__149_Layer.jpg',
		'star__150_Layer.jpg',
		'star__151_Layer.jpg',
		'star__152_Layer.jpg',
		'star__153_Layer.jpg',
		'star__155_Layer.jpg',
		'star__156_Layer.jpg',
		'star__158_Layer.jpg',
		'star__160_Layer.jpg',
		'star__177_Layer.jpg',
		'star__179_Layer.jpg',
		'star__180_Layer.jpg',
		'star__182_Layer.jpg',
		'star__183_Layer.jpg',
		'star__184_Layer.jpg',
		'star__185_Layer.jpg',
		'star__186_Layer.jpg',
		'star__190_Layer.jpg',
		'star__191_Layer.jpg',
		'star__192_Layer.jpg',
		'star__193_Layer.jpg',
		'star__194_Layer.jpg',
		'star__195_Layer.jpg',
		'star__196_Layer.jpg',
		'star__197_Layer.jpg',
		'star__198_Layer.jpg',
		'star__199_Layer.jpg',
		'star__200_Layer.jpg',
		'star__201_Layer.jpg'
	];
	var star_array_shuffled = shuffle(star_array);

	for(j = 1; j <= numberOfStar; j++){
		var star_img = star_array_shuffled[j];
		var star_id = parseInt(star_img.match( /^\D+(\d+).*/)[1]);

		starAppend += "<div class='star'><a target='_blank' href='https://spuul.com/stars/"+star_id+"'><img style='width: 100%;' src='"+window.location.origin+"/images/stars/"+star_img+"'></a></div>";
	}

	$('.stars_container').html(starAppend);

  $('#mc-embedded-subscribe-form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        url: 'https://spuul.us11.list-manage.com/subscribe/post?u=87bb608900441d7994804719a&amp;id=b7684f3731',
        type: 'POST',
        Host: "https://spuul.com",
        Origin: "https://spuul.com",
        data: $('#mc-embedded-subscribe-form').serialize(),
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
           if (data['result'] != "success") {
                //ERROR
                console.log(data['msg']);
           } else {
                //SUCCESS - Do what you like here
           }
        }
    });
  });



  commentBox('5750258092998656-proj');

});
