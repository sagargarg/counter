/**
 * Create an instance of TabCounter
 * @constructor
 */
function TabCounter(){
}

/**
 * Object that makes strings
 * @type {Object}  
 */
TabCounter.$ = function(id){
	return document.getElementById(id);
}

/**
 * Set data in the popup, must be fired after DOM is ready
 */
TabCounter.prototype.view = function() {

	//get windows
	chrome.windows.getAll({populate:true},function(windows){
		//get the windows
		nowWind=windows.length;

		//count tabs
		nowTabs=0;
		for(var i in windows){nowTabs += windows[i].tabs.length}


		TabCounter.$('nowTabs').innerHTML = nowTabs;
		TabCounter.$('nowWind').innerHTML = nowWind;


	});

};



//Create new instance of tabcounter (global)
tc = new TabCounter();

//Lisen to opeing tabs
chrome.tabs.onCreated.addListener(function(tab){tc.tabOpened(tc,tab);});

function initVieuw() {

	tc.view()
}

document.addEventListener('DOMContentLoaded', initVieuw);