var myImage = document.querySelector('img');
	myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
		if(mySrc === 'images/mochai2.jpg') {
			myImage.setAttribute ('src','images/mochai.jpg');
		} else {
			myImage.setAttribute ('src','images/mochai2.jpg');
		}
	}


/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
	} else {
		var storedName = localStorage.getItem('name');
			myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
	}






