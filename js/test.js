(function(){
	var audio = new Howl({
		urls: ['assets/in_my_life.mp3'],
		onplay: function(){
			beginSlideShow();
		}
	});
	
	var width = window.innerWidth,
	    height = window.innerHeight;
	var duration = 3;
	var memoryDuration = 5;
	var rollInSpeed = .5;
	var phrases = ["Hello, Amber.",
					// "This is a love letter.",
					// "An e-love letter.",
					// "Soon, you'll start an adventure.",
					// "One that I can't be a part of.",
					// "So, I wanted to create a place",
					// "that you can always get to,",
					// "no matter where you are,",
					// "a place to jog your memory.",
					"Let the feelings commence!"];

	var memories = ["First Date",
					"The apartment",
					"Forts"];
	var textModels = _.map(phrases, function(phrase){
		return new TextModel(phrase, duration);
	});
	$("svg").attr('width', Math.min(width, height)/3);
	$("svg").attr('height', Math.min(width, height)/3);
	var tl = new TimelineLite({paused:true});
	

	function beginSlideShow(){
		var shapeMorphTime = .5;
		var shapeHoldTime = "+="+ (memoryDuration - shapeMorphTime);
		var tl = new TimelineLite();
		tl.delay(11);
		tl.staggerFromTo($memories, //object
									rollInSpeed, //duration of animation
									{opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 2 *rollInSpeed, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 2 *rollInSpeed, yoyo: true},
									memoryDuration,
									showReplayButton) //staggerwait

		var artTimeLine = new TimelineLite();
		artTimeLine.delay(10);
		artTimeLine.to("#svgContainer", 1, {opacity: 1})
		.to("#start", shapeMorphTime, {morphSVG: "#end"}, shapeHoldTime)
		.to("#start", shapeMorphTime, {morphSVG: "#shape"}, shapeHoldTime);
	}

	function showReplayButton(){

	}

	function playSong(){
		audio.play();
	};

	var appendQuoteDivs = function(phrases){
		_.each(phrases, function(phrase){
			var divString = '<div class="quote" style="opacity:0; top:'+height/3+';">'+phrase+'</div>';
			$('body').append(divString);
		});

		
	};
	appendQuoteDivs(phrases);

	var appendMemoryDivs = function(memories){
		_.each(memories, function(memory){
			var divString = '<div class="memory" style="opacity:0; top:'+height/5+';">'+memory+'</div>';
			$('body').append(divString);
		});

		$('#svgContainer').css({'top': height/2, 'opacity':0});

	}
	appendMemoryDivs(memories);

	var $quotes = $(".quote");
	var $memories = $(".memory");

	TweenMax.staggerFromTo($quotes, //object
		rollInSpeed, //duration
		{opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:duration, yoyo: true}, //vars
		{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:duration, yoyo: true},
		rollInSpeed*2 + duration,
		playSong); //staggerwait
}())