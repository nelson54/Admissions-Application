(function(window, undefined){
	var formField = {} 
	
	formField.Field = Backbone.Model.extend({
	    defaults: {
			label : "Unassigned",
			name : "Unassigned",
			title : "Unassigned",
			value : "Unassigned",
			template : "formText",
			errorMessage : "This field contains an error.",
	    },
	    initialize : function (){
	    	this.set({"selector":"input[name=\""+this.get("name")+"\"]"});
	    	this.set({ "fieldHtml": this.render() });
	    },
		setValue : function( value ){
			this.set({ "currentValue" : value });
			return (value);
		},
		render : function(){
			this.isValid();
			var objTemplate = templateFactory.getTemplate(this.get("template"));
			return( objTemplate.render( this.toJSON() ) );
		},
		reset : function(){
			this.setValue( this.get("value") );
		},
		getValue : function(){
			var curVal = $(this.get("selector")).val();
			this.set({ "currentValue" : curVal });
			return( curVal );
		},
		isValid : function(){
			this.set({ "invalid" : false });
			if (this.requireValidate()){ this.set({ "invalid" : true }); return false; };
			if (this.minLengthValidate()){ this.set({ "invalid" : true }); return false; };
			if (this.maxLengthValidate()){ this.set({ "invalid" : true }); return false; };
			if (this.regexValidate()){ this.set({ "invalid" : true }); return false; };
			return true;
		},
		requireValidate : function(){
			if( this.get("required") ){
				return( !this.get("value") == true );
			};
		},
		minLengthValidate : function(){
			if(this.get("minLength")){
				return( !this.get("value").length < this.get("minLength") );
			}
		},
		maxLengthValidate : function(){
			if(this.get("maxLength")){
				return( !this.get("value").length < this.get("minLength") );
			}
		},
		regexValidate : function(){
			if(this.get("regex")){
				var rexp = new RegExp( this.get("regex") );
				return( !this.get("value").match(rexp) );
			}
		}
	});
	
	formField.DateField = formField.Field.extend({
	    defaults: {
			label : "Unassigned date label",
			name : "unassignedDateName",
			title : "Unassigned",
			value : "yyyy-mm-dd",
			template : "formDate",
			regex : /^\d{1,2}\/\d{1,2}\/\d{4}$/
	    }
	});
	
	formField.TextField = formField.Field.extend({
		defaults: {
			label : "Unassigned text label",
			name : "unassignedTextName",
			title : "Unassigned",
			value : "",
			"class" : "text",
			errorMessage : "This field contains an error.",
			template : "formText"
		}
	});
	
	formField.CheckboxField = formField.Field.extend({
		defaults: {
			label : "Unassigned checkbox label",
			title : "Unassigned",
			name : "unassignedCheckboxName",
			value : "0",
			"class" : "checkbox",
			template : "formCheckbox"
		}
	});
	
	formField.CheckboxListField = formField.Field.extend({
		defaults: {
			label : "Unassigned checkbox list label",
			title : "Unassigned",
			name : "unassignedCheckboxListName",
			value : new Object(),
			elements : new Array(),
			"class" : "checkbox-list",
			template : "formCheckboxList"
		}
	});
	
	formField.DateRangeField = formField.Field.extend({
		defaults: {
			label : "Unassigned date range label",
			title : "Unassigned",
			name : "unassignedDateRangeName",
			fromDate : "",
			toDate : "",
			value : new Object(),
			"class" : "daterange",
			template : "formDateRange"
		}
	});
	
	formField.LocationField = formField.Field.extend({
		defaults: {
			label : "Unassigned location label",
			title : "Unassigned",
			name : "unassignedLocationName",
			value : { city : "" , state : "" },
			"class" : "locationField",
			template : "formLocation",
			errorMessage : "This field contains an error."
		},
		requireValidate : function(){
			if( this.get("required") ){
				return( (!this.get("value")["city"] == true) && (!this.get("value")["city"] == true) );
			}
		}
	});
	
	formField.SelectField = formField.Field.extend({
		defaults: {
			label : "Unassigned select label",
			title : "Unassigned",
			name : "unassignedSelectName",
			value : "",
			options : new Array(),
			"class" : "select",
			template : "formSelect"
		}
	});
	
	formField.PhoneField = formField.Field.extend({
		defaults: {
			label : "Unassigned option label",
			title : "Unassigned",
			name : "unassignedPhoneName",
			errorMessage : "This field contains an error.",
			value : { num1 : "", num2 : "", num3 : "" },
			options : new Array(),
			"class" : "phone",
			template : "formPhone"
		},
		setValue : function( num1, num2, num3 ){
			this.set({ "currentValue" : { "num1" : num1, "num2" : num2, "num3" : num3 } });
			return (value);
		},
		requireValidate : function(){
			if( this.get("required") ){
				return( (!this.get("num1") == true) && (!this.get("num2") == true) && (!this.get("num3") == true) );
			}
		}
	});
	
	formField.BooleanField = formField.Field.extend({
		defaults: {
			label : "Unassigned boolean label",
			title : "Unassigned",
			name : "unassignedBooleanName",
			value : "",
			options : [{label: "Yes", value:1}, {label: "No", value:0}],
			"class" : "radio-list",
			errorMessage : "This field contains an error.",
			template : "formBoolean"
		}
	});
	
	formField.RadioListField = formField.Field.extend({
		defaults: {
			label : "Unassigned radio button list label",
			title : "Unassigned",
			name : "unassignedRadioListName",
			value : "",
			errorMessage : "This field contains an error.",
			elements : new Array(),
			"class" : "radio-list",
			template : "formRadioList"
		}
	});
	
	window.formField = formField;
})(window)