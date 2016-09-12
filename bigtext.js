HTMLDivElement.prototype.bigText = function(options){
	var defaultOptions = {
		rotateText: null,
		fontSizeFactor: 0.8,
		maximumFontSize: null,
		limitingDimension: "both",
		horizontalAlign: "center",
		verticalAlign: "center",
		textAlign: "center",
		whiteSpace: "nowrap"
	};
	
	//Merge provided options and default options
	options = options || {};
	for (var opt in defaultOptions)
		if (defaultOptions.hasOwnProperty(opt) && !options.hasOwnProperty(opt))
			options[opt] = defaultOptions[opt];
	
	var style = this.style;
	var computedStyle = document.defaultView.getComputedStyle(this);
	var parent = this.parentNode;
	var parentStyle = parent.style;
	var parentComputedStyle = document.defaultView.getComputedStyle(parent);
	
	//hides the element to prevent "flashing"
	style.visibility = "hidden";
	
	//Set some properties
	style.display = "inline-block";
	style.clear = "both";
	style.float = "left";
	style.fontSize = (1000 * options.fontSizeFactor) + "px";
	style.lineHeight = "1000px";
	style.whiteSpace = options.whiteSpace;
	style.textAlign = options.textAlign;
	style.position = "relative";
	style.padding = 0;
	style.margin = 0;
	style.left = "50%";
	style.top = "50%";

	var parentPadding = {
		top: parseInt(parentComputedStyle.getPropertyValue("padding-top")),
		right: parseInt(parentComputedStyle.getPropertyValue("padding-right")),
		bottom: parseInt(parentComputedStyle.getPropertyValue("padding-bottom")),
		left: parseInt(parentComputedStyle.getPropertyValue("padding-left")),
	};
	
	var box = {
		width: this.offsetWidth, //Note: This is slightly larger than the jQuery version
		height: this.offsetHeight,
	};
	
}
