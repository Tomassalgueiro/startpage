const dateElement = document.getElementById("date");

function showTime(){
	const date = new Date();

	const options_weekday = {
		weekday: "long",
	};

	const options_hour = {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}; 
	const options_day = { 
		day: "2-digit",
	};


	const weekday = date.toLocaleString("en-GB", options_weekday);
	const hour = date.toLocaleString("en-GB", options_hour);
	const day = date.toLocaleString("en-GB", options_day);

	dateElement.innerHTML = `${hour} - ${weekday}, ${day}`;
}

setInterval(showTime, 1000);
showTime();
