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
			{
			quiz : "Người ta thường nói thừa nước đục thả gì ",
			choice:[
				"Bom",
				"Câu",
				"Cá",
				"Cơm",
			],
			key : "Câu",
		},
			{
			quiz : "Câu nào sau đây chỉ người ở trạng thái mê man, không biết gì",
			choice:[
				"Bất tỉnh nhân sự",
				"Bất đắc kì tử",
				"Bất khả xâm phạm",
				"Bất di bất dịch",
			],
			key : "Bất tỉnh nhân sự",
		},
		{
			quiz : "Tổng bí thư Trung ương Đản cộng sản Việt Nam được bầu tại Đại hội XI là ai",
			choice:[
				"Nguyễn Tấn Dũng",
				"Nguyễn Phú Trọng",
				"Nguyễn Minh Triết",
				"Trương Phú Sang",
			],
			key : "Nguyễn Phú Trọng",
		},
		{
			quiz : "Đội tuyển bóng đá nam nào đã vô địch WC2014",
			choice:[
				"Đức",
				"Anh",
				"Pháp",
				"Bra-xin",
			],
			key : "Đức",
		},
		{
			quiz : "Euro 2016 được tổ chức ở đâu",
			choice:[
				"Nga",
				"Pháp",
				"Tây Ban Nha",
				"Thuỵ Điển",
			],
			key : "Pháp",
		},
		{
			quiz : ' Điền vào chỗ chấm "Vắt cổ ... ra nước"',
			choice:[
				"Chày",
				"Tay",
				"Chân",
				"Chim",
			],
			key : "Chày",
		},
		{
			quiz : ' Một con ngựa đau, cả tàu được ...',
			choice:[
				"Ăn thêm cỏ",
				"Bỏ cỏ",
				"Bỏ chạy",
				"Thịt ngựa",
			],
			key : "Bỏ cỏ",
		},



	];
	var i=0;
	var dem=0;
	var sai=0;
	var audio=$("#track")[0];
	var music=$("#track1")[0];
	$("#all").append("<h1>"+ question[i].quiz+"</h1>");
	for(var j=0; j<4; j++){
		$("#all").append('<input type="button" value="'+ question[i].choice[j] +'">');

	};
	$("input").click(function(){
	 	if(this.value==question[i].key){
						dem++;
						audio.play();
					}
		else{
			music.play();
			sai ++;
		}

	});

$( "#all" ).delegate( "input", "click", function() {
			if(i<question.length-1){
  			i++;
  			$("input").remove();
			$("h1").replaceWith('<h1>'+question[i].quiz+'</h1>');
			for(var j=0;j<4;j++){
				$("#all").append('<input type="button" style="" value="'+ question[i].choice[j] +'">')}
					$("input").click(function(){
					if(this.value==question[i].key){
						dem++;
						audio.play();
					}else{
						music.play();
						sai ++;
						if(sai==3){
						window.location.href="chiabuon.html";
						}

					};
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