let activeEngine = "https://duckduckgo.com/?t=ffab&q=";
const providers = document.querySelectorAll(".provider");
const sel_provider = document.getElementById("search");

function set_selected_provider(name){
	if(sel_provider) sel_provider.placeholder = `Search on ${name}`;
}


providers.forEach(p => {
	p.addEventListener("click", () => {
		activeEngine = p.dataset.engine;
		set_selected_provider(p.innerText.split('Alt')[0].trim());
	});
});

document.addEventListener("keydown", (e) => {
	if (e.altKey){
		if (e.key === "a") {
			activeEngine = providers[0].dataset.engine; 
			set_selected_provider("DuckDuckGo"); 
		}
		if (e.key === "y") {
			activeEngine = providers[1].dataset.engine; 
			set_selected_provider("Youtube");
		}
		if (e.key === "i") {
			activeEngine = providers[2].dataset.engine; 
			set_selected_provider("Reddit");
		}
	}
});

const searchInput = document.getElementById("search");

document.addEventListener("keydown", (e) => {
	if (e.key === ".") {
		e.preventDefault();
		searchInput.focus();
	}
});

searchInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter"){
		const q = searchInput.value.trim();
		if (q){
			window.open(activeEngine + encodeURIComponent(q), "_blank", "noopener,noreferrer");
		}
	}
});


