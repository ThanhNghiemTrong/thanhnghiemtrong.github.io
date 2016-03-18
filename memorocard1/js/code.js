var card=[
	{
		front : "img/front1.jpg",
		back: "img/back.jpg"
	},
	{
		front : "img/front2.jpg",
		back: "img/back.jpg"
	},
	{
		front : "img/front3.jpg",
		back: "img/back.jpg"
	},
		{
		front : "img/front4.jpg",
		back: "img/back.jpg"
	},
		{
		front : "img/front5.jpg",
		back: "img/back.jpg"
	},
];


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
shuffle(card);
for(var i=0; i<card.length; i++){
	$("#card").append('<div class="magic" onclick="thanh(this)" id="'+ i+ '"</div>');
	$("#"+i).append('<img id="front" src="'+ card[i].back +'" />');
	$("#"+i).append('<img id="back" src="' + card[i].front +'"/>');
}
function thanh(x){
	x.className="magic1"
}
	
