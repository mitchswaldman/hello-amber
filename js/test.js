(function(){
	var width = window.innerWidth,
	    height = window.innerHeight;
	var duration = 2;
	var phrases = ["Hello, Amber.",
					"This is Mitch speaking.",
					"Well, not quite \"Mitch\",",
					"More, like, \"Mitch's heart\".",
					"Because unlike me,",
					"My heart will always be here,",
					"right here, actually,",
					"right at this web address.",
					"Why? Well,",
					"I won't always be able",
					"to say \"I love you,\"",
					"or sing nonsense to you,",
					"or pet puppy dogs with you,",
					"because, sadly, I won't be there.",
					"There's a big adventure ahead,",
					"but it's for you.",
					"And though I can't go,",
					"I can write this love letter",
					"that can't be lost,",
					"that can't be forgotten,",
					"that uses little cellular data,",
					"that you can always read.",
					"I love you, Amber.",
					"But I'm just kidding:",
					"I can always be there!",
					"Scroll down!"];
	var textModels = _.map(phrases, function(phrase){
		return new TextModel(phrase, duration);
	});
	
	
	var appendQuoteDivs = function(phrases){
		_.each(phrases, function(phrase){
			var divString = '<div class="quote" style="opacity:1; top:'+height/3+';">'+phrase+'</div>';
			$('body').append(divString);
		})
	};
	appendQuoteDivs(phrases);
	var $quotes = $(".quote");
	// var tl = new TimelineLite({paused:true}), 
 //    mySplitText = new SplitText($quotes, {type:"chars"}), 
 //    chars = mySplitText.chars; //an array of all the divs that wrap each character
    TweenMax.staggerFrom($quotes, .5, {opacity: 0, rotationX: 90, transformOrigin: "0% 100% -50", ease:Expo.easeOut, repeat: 1, repeatDelay:2, yoyo: true}, 3.0)
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