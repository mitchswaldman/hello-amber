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
	var shapeMorphTime = .5;
	var shapeHoldTime = "+="+ (memoryDuration);
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
					"Forts",
					"Watching the blood moon",
					"Dancing to Mickey and Sylvia",
					"Europe",
					"Venice",
					"Train rides in Germany",
					"The elevator in Amsterdam",
					"Hot trash in New York",
					"Flying with Jason",
					"Star Wars",
					"Camping out for First City",
					"Late-night McDonald's",
					"Walking Otter",
					"Bird watching at the reservation",
					"Magic Mountain",
					"Fallout 4",
					"Watching our shows",
					"I love you, Amber"];
	var textModels = _.map(phrases, function(phrase){
		return new TextModel(phrase, duration);
	});
	$("svg").attr('width', Math.min(width, height)/3);
	$("svg").attr('height', Math.min(width, height)/3);
	var tl = new TimelineLite({paused:true});
	

	//NOTE: Put the name of the next shape in the morphSVG item.
	function addFirstDate(tl){
		return tl.addLabel("firstDate", 1)
		.to("#start", shapeMorphTime, {morphSVG: "#apartment"}, "firstDate"+ shapeHoldTime)
		.fromTo("#start1", shapeMorphTime, {opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true},
									"firstDate")
		.fromTo("#start2", shapeMorphTime, {opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true},
									"firstDate");
	}

	function addApartment(tl) {
		var rooftopBuffer = .5;
		return tl.addLabel("apartment", "firstDate"+shapeHoldTime)
			     .to("#start", shapeMorphTime, {morphSVG: "#fort"}, "apartment"+shapeHoldTime)
			     .fromTo("#doorknob",shapeMorphTime, {opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true},
									"apartment+=.5")
			     .fromTo(".roof",shapeMorphTime, {opacity: 0, rotationX: 90, rotationY: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime - rooftopBuffer, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, rotationY: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime - rooftopBuffer, yoyo: true},
									"apartment+="+rooftopBuffer);
	}

	function addFort(tl){

		return tl.addLabel("fort", "apartment"+shapeHoldTime)
			     .to("#start", shapeMorphTime, {morphSVG: "#end"}, "fort"+shapeHoldTime)
			     .fromTo("#hook",shapeMorphTime, {opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true},
									"fort")
			     .fromTo(".chair",shapeMorphTime, {opacity: 0, rotationX: 90, rotationY: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, rotationY: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime , yoyo: true},
									"fort")
			     .fromTo(".tv",shapeMorphTime, {opacity: 0, rotationX: 90, rotationY: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, rotationY: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 3 *shapeMorphTime , yoyo: true},
									"fort");
	}
	function beginSlideShow(){
		
		var tl = new TimelineLite();
		tl.delay(11);
		tl.staggerFromTo($memories, //object
									rollInSpeed, //duration of animation
									{opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:memoryDuration - 2 *rollInSpeed, yoyo: true}, //vars
									{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:memoryDuration - 2 *rollInSpeed, yoyo: true},
									memoryDuration, //stagger wait
									showReplayButton); 

		var artTimeLine = new TimelineLite();
		artTimeLine.delay(10);
		artTimeLine.to("#svgContainer", 1, {opacity: 1});
		addFirstDate(artTimeLine);
		addApartment(artTimeLine);
		addFort(artTimeLine);
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