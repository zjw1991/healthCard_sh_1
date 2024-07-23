 //忘记密码
 function showWin(url,title,isClose,width,height){
 	if(title!=''){
	  $.layer({
	        type: 2,
	        title: [title, 'font-size:14px;'] ,
	        shadeClose: isClose, 
	        area : [width , height],
	        offset : ['100px', ''],
	        border : [0, 0.5, '#f00'],
	        iframe: {src: url}
	    });
    }else{
    	$.layer({
	        type: 2,
	        title: false ,
	        shadeClose: isClose, 
	        area : [width , height],
	        offset : ['100px', ''],
	        border : [0, 0.5, '#f00'],
	        iframe: {src: url}
	    });
    }
}