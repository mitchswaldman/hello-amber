(function(){
	var audio = new Howl({
		urls: ['assets/in_my_life.mp3'],
		onPlay: beginSlideShow
	});
	
	var width = window.innerWidth,
	    height = window.innerHeight;
	var duration = 3;
	var rollInSpeed = .5;
	var phrases = ["Hello, Amber.",
					"This is a love letter.",
					"An e-love letter.",
					"Soon, you'll start an adventure.",
					"One that I can't be a part of.",
					"So, I wanted to create a place",
					"that you can always get to,",
					"no matter where you are,",
					"a place to jog your memory.",
					"Let the feelings commence!"];
	var textModels = _.map(phrases, function(phrase){
		return new TextModel(phrase, duration);
	});

	var tl = new TimelineLite({paused:true});
	
	function beginSlideShow(){

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
		})
	};
	appendQuoteDivs(phrases);

	var $quotes = $(".quote");

	TweenMax.staggerFromTo($quotes, //object
		rollInSpeed, //duration
		{opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:duration, yoyo: true}, //vars
		{opacity: 1, rotationX: 0, ease:Expo.easeOut,  repeat: 1, repeatDelay:duration, yoyo: true},
		rollInSpeed*2 + duration,
		playSong); //staggerwait

	

	// var tl = new TimelineLite({paused:true}), 
 //    mySplitText = new SplitText($quotes, {type:"chars"}), 
 //    chars = mySplitText.chars; //an array of all the divs that wrap each character
    
	// TweenLite.set($quotes, {perspective:400});
 //    _.each($quotes, function($quote){

 //    });
	// _.each(textModels, function(textModel){
	// 	mySplitText.revert();
	// 	$quote.text(textModel.phrase);
	// 	mySplitText = new SplitText($quote, {type:"words, chars"});
	// 	chars = mySplitText.chars;
	// 	tl.staggerFrom(chars, textModel.duration, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "e0");	
	// });
	//What are the steps for this?
	//1. Revert
	//2. Set innerHTML to next quote
	//3. get the chars
	//4. set the timeline again
}())