Field = function( params ){
	this.extend = function (params){return( _.extend((function(){return(this)}), params) );}
	
	this.setValue = function( value ){
		this.currentValue = value;
		this.render();
	};
	
	this.render = function(){
		
	}
	
	this.reset = function(){
		this.setValue( this.value );
		this.render( );
	}
	
	this.change = function(value){
		this.currentValue = value;
	}
	
	this.label = "Unassigned";
	this.name = "Unassigned";
	this.value = "Unassigned";
	this.currentValue = params.value;
	this.template = "formText";
	this.selector = "";
}

Date = _.extend(new Field, {
	label : "Unassigned date label",
	name : "unassignedDateName",
	value : "yyyy-mm-dd",
	currentValue: this.value,
	"class" : "date",
	template : "formDate"
});

Text = _.extend(new Field, {
	label : "Unassigned text label",
	name : "unassignedTextName",
	value : "",
	currentValue: this.value,
	"class" : "text",
	template : "formText"
});

Checkbox = _.extend(new Field, {
	label : "Unassigned checkbox label",
	name : "unassignedCheckboxName",
	value : "0",
	currentValue: this.value,
	"class" : "checkbox",
	template : "formCheckbox"
});

CheckboxList = _.extend(new Field, {
	label : "Unassigned checkbox list label",
	name : "unassignedCheckboxListName",
	value : new Object(),
	elements : new Array(),
	currentValue: this.value,
	"class" : "checkbox-list",
	template : "formCheckboxList"
});

DateRange = _.extend(new Field, {
	label : "Unassigned date range label",
	name : "unassignedDateRangeName",
	fromDate : "",
	toDate : "",
	value : new Object(),
	currentValue: this.value,
	"class" : "daterange",
	template : "formDateRange"
});

Location = _.extend(new Field, {
	label : "Unassigned location label",
	name : "unassignedLocationName",
	value : { city : "", state : "" },
	currentValue : this.value,
	"class" : "checkbox-list",
	template : "formCheckboxList"
});

Select = _.extend(new Field, {
	label : "Unassigned select label",
	name : "unassignedSelectName",
	value : "",
	options : new Array(),
	currentValue : this.value,
	"class" : "select",
	template : "formCheckboxList"
});

Phone = _.extend(new Field, {
	label : "Unassigned option label",
	name : "unassignedOptionName",
	value : "",
	options : new Array(),
	currentValue : this.value,
	"class" : "checkbox-list",
	template : "formCheckboxList"
});

RadioList = _.extend(new Field, {
	label : "Unassigned radio button list label",
	name : "unassignedRadioListName",
	value : new Object(),
	elements : new Array(),
	currentValue: this.value,
	"class" : "checkbox-list",
	template : "formRadioList"
});