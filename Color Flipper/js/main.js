document.querySelector('#submit').addEventListener('click',blue)

function blue(){
	if(document.getElementById('insert').value.toLowerCase() === 'green'){
		document.getElementById('color').style.background = '#014421'
	}else if(document.getElementById('insert').value.toLowerCase() === 'blue'){
		document.getElementById('color').style.background = '#0000ff'
	}else if(document.getElementById('insert').value.toLowerCase() === 'red'){
		document.getElementById('color').style.background = '#FF0000'
	}else if(document.getElementById('insert').value.toLowerCase() === 'yellow'){
		document.getElementById('color').style.background = '#FFFF00'
	}else if(document.getElementById('insert').value.toLowerCase() === 'purple'){
		document.getElementById('color').style.background = '#800080'
	}else if(document.getElementById('insert').value.toLowerCase() === 'dog'){
		document.getElementById('color').style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg')"
	}else{
		console.log("Not a color I want to deal with") 
	}
	
}