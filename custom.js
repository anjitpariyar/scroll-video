var akuvideo= document.getElementById('akunohana');
var videoParent=document.getElementById('video-section');
var i=0;
akuvideo.currentTime=5;
var index= [0,1,2,3,4,5];
var textArray=[];
var text= document.getElementById('text');
changeText= (index,text)=> {
	var i=0;
	setTimeout(function(){
		for(i=0;i<3;i++){
			text.children[i].style.opacity='0.0';
		}
		for(i=0;i<3;i++){
			text.children[i].classList.remove('active');
		}
		text.children[index].classList.add('active');
		text.children[index].style.opacity='1';
	},1000);
	
}
window.addEventListener('scroll', function(e) {
	var pageY=window.pageYOffset;
	var top = videoParent.offsetTop ;

	if(pageY>(top-400)){
		// console.log('hurrey');
		addPageY=pageY+400;
		i=addPageY-top;
		i=i*0.03;
		setTimeout(function(){
			akuvideo.currentTime=i;
			akuvideo.pause();
		}, 50);
	}
	// console.log(pageY);
	if(pageY<(top-150)){
		changeText(index[0],text);
	}
	else if(pageY>(top-150)&&pageY<(top+50)){
			changeText(index[1],text);
	}
	else{
		changeText(index[2],text);
	}
	
	
});
