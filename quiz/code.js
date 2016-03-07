var question= [
		{
			quiz : "Ai là cầu thủ đạt QBV Châu Âu 2015",
			choice:[
				 'Cristiano Ronaldo',
				 "Luis Suarez",
				 "Neymar Jr.",
				 "Lionel Messi",
			],
			key : "Lionel Messi",
		},
			{
			quiz : "Đâu là ngọn núi cao thứ 3 ở Việt Nam",
			choice:[
				"Putaleng",
				"Fansipang",
				"Pusilung",
				"Everest",
			],
			key : "Pusilung",
		},
			{
			quiz : "Ai là người viết ra Thuyết Tương đối",
			choice:[
				"Isaac Newton",
				"Albert Einstein",
				"Galileo Galilei",
				"Thomas Edison",
			],
			key : "Albert Einstein",
		},
			{
			quiz : "Trong một cuộc đua, nếu bạn vượt qua người thứ 2, bạn sẽ trở thành người ở vị trí nào",
			choice:[
			 "Số 1",
			 "Số 2",
			 "Số 3",
		 	 "Số 4",
			],
			key : "Số 2",
		},
			{
			quiz : "Louis Van Gaal hiện đang là HLV đội bóng nào",
			choice:[
				"Manchester United",
				"Manchester City",
				"Chelsea",
				"Asenal",
			],
			key : "Manchester United",
		},
	];
	var i=0;
	var dem=0;
	$("#all").append("<h1>"+ question[i].quiz+"</h1>");
	for(var j=0; j<4; j++){
		$("#all").append('<input type="button" value="'+ question[i].choice[j] +'">');

	};

$( "#all" ).delegate( "input", "click", function() {
			if(i<question.length-1){
  			i++;
  			$("input").remove();
			$("h1").replaceWith('<h1>'+question[i].quiz+'</h1>');
			for(var j=0;j<4;j++){
				$("#all").append('<input type="button" value="'+ question[i].choice[j] +'">')}
					$("input").click(function(){
					if(this.value==question[i].key){
						dem++;
					}
				})
			if(i==question.length-1){
				if(this.value==question[i].key){
					dem++;}
				$("input").click(function(){
					window.location.href="chucmung.html?dem="+ dem;
					$("wrap").append('<h1>Bạn đã trả lời đúng '+ dem+' câu</h1>')
					}
				)
			}
  		}
  		
	

});