let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.autoplay)


});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate/=.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime +=10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Video current time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"

	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("The current value is", video.volume)
	video.volume = this.value/100
	console.log("The current value is", video.volume)
	console.log(document.querySelector("#volume"))
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"

});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});