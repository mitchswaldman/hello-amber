(function(){
	var duration = 2000;
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

	var tl = new TimelineLite, 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

	TweenLite.set("#quote", {perspective:400});

	tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "e0");
}())