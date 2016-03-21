var card=[
	{
		front : "img/front1.jpg",
		back: "img/back.jpg",
		name: "f1"
	},
	{
		front : "img/front2.jpg",
		back: "img/back.jpg",
		name: "f2"
	},
	{
		front : "img/front3.jpg",
		back: "img/back.jpg",
		name: "f3"
	},
		{
		front : "img/front4.jpg",
		back: "img/back.jpg",
		name: "f4"
	},
		{
		front : "img/front5.jpg",
		back: "img/back.jpg",
		name: "f5"
	},
];
var current=null;


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }
  return array;
};


function thanh(card){
	$(card).toggleClass("magic1");
	$('.magic1').css('pointer-events','none');
	if(!current){
		current = $(card);
		
	}else {
		if(current.attr('data-name')!= $(card).attr('data-name')){
			setTimeout(function(){
			current.toggleClass("magic1");
			$(card).toggleClass("magic1");
			current=null;
			$('.magic').css('pointer-events','auto')
			},500);

			

		}
		else{
			setTimeout(function(){
				current.css('opacity','0');
				$(card).css('opacity','0');
				current=null;
			},300)
			
		}

	}
}
$(function(){
	card=card.concat(card);
	for(var i=0; i<card.length; i++){
	$("#card").append('<div class="magic" data-name="'+ card[i].name +'"  onclick="thanh(this)" id="'+ i+ '"</div>');
	$("#"+i).append('<img id="front" src="'+ card[i].back +'" />');
	$("#"+i).append('<img id="back" src="' + card[i].front +'"/>');
	
}
});	
shuffle(card);
