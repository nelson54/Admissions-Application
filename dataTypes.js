(function(window, undefined){
	var formField = {} 
	
	formField.Form = function ( params ){
		this.self = self = this;
	
		this.addSection = function (section, title){
			this.sections[section.name] = new formField.Section(section, templateFactory);
			_.extend( this.fields , this.sections[section.name].fields)
		};
	
		this.render = function (){
			this.sectionsHtml = new Array();
			for (section in this.sections){
				this.sectionsHtml.push( this.sections[section].render() );
			};
			return( this.template.render(this) );
		};
	
		this.getTemplate = function(){
			this.template = templateFactory.getTemplate(this.type);
		};
	
		this.updateValues = function(){
			for ( field in this.fields ){
				this.fields[field].getValue();
			}
		}
		
		this.title = params.title;
		this.sectionsHtml = [];
		this.type = "formPage";
		_.extend(this, params);
		
		this.sections = new Object();
		this.fields = new Object();
		
		_.map(params.sections, this.addSection, self);
	
		this.templateFactory = templateFactory;
		this.getTemplate();
	}
	
	formField.Section = function (params, templateFactory){
		this.self = self = this;
		
		this.template = "formSection";
		
		this.render = function (){
			this.fieldsHtml = new Array();
			for (field in this.fields){
				this.fieldsHtml.push( this.fields[field].render() )
			}
			return( this.template.render(this) );
		}
		
		this.render = function(){
			this.fieldsHtml = new Array();
			for (field in this.fields){
				this.fieldsHtml.push( this.fields[field].render() )
			}

			var objTemplate = this.templateFactory.getTemplate(this.template);
			this.sectionHtml = objTemplate.render( this );
			return( this.sectionHtml );
		},
		
		this.addField = function (field){
			this.fields[field.name] = new formField[field.type](field);
		}
		
		this.title = params.title;
		this.type = "formSection";
		this.fieldsHtml = new Array();
		this.sectionHtml = "";
		
		_.extend(this, params);
		
		this.fields = new Object();
		
		_.map(params.fields, this.addField, self);
		
		this.templateFactory = templateFactory;
	}
	
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
	    	this.reset();
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
				return( !this.get("currentValue") == true );
			};
		},
		minLengthValidate : function(){
			if(this.get("minLength")){
				return( !this.get("currentValue").length < this.get("minLength") );
			}
		},
		maxLengthValidate : function(){
			if(this.get("maxLength")){
				return( !this.get("currentValue").length < this.get("minLength") );
			}
		},
		regexValidate : function(){
			if(this.get("regex")){
				var rexp = new RegExp( this.get("regex") );
				return( !this.get("currentValue").match(rexp) );
			}
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
		},
	    initialize : function (){
	    	this.set({"selector":"input[name=\""+this.get("name")+"\"]:checked"});
	    	this.set({ "fieldHtml": this.render() });
	    },
		getValue : function(){
			var curVal = $(this.get("selector")).val();
			this.set({ "currentValue" : curVal });
			return( curVal );
		},
		setValue : function( value ){
			this.set({ "currentValue" : value });
			for ( radio in elements ){
				if( radio.name === value ){
					this.set({ "checked" : true });
				} else {
					this.set({ "checked" : false });
				}
			}
			
			return (value);
		}
	});
	
	formField.DateField = formField.Field.extend({
	    defaults: {
			label : "Unassigned date label",
			name : "unassignedDateName",
			errorMessage : "This field must contain a valid date.",
			title : "Unassigned",
			value : "yyyy-mm-dd",
			template : "formDate",
			regex : /^\d{1,2}\/\d{1,2}\/\d{4}$/
	    },
	});
	
	formField.DateRangeField = formField.Field.extend({
		defaults: {
			label : "Unassigned date range label",
			title : "Unassigned",
			name : "unassignedDateRangeName",
			value : { fromDate : "" , toDate : "" },
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
			if (num1 && num2 && num3){
				this.set({ "num1" : num1 });
				this.set({ "num2" : num2 });
				this.set({ "num3" : num3 });
			} else {
				this.set({ "num1" : "" });
				this.set({ "num2" : "" });
				this.set({ "num3" : "" });
			}
			return (this.get("currentValue"));
		},
		requireValidate : function(){
			if( this.get("required") ){
				return( (!this.get("num1") == true) && (!this.get("num2") == true) && (!this.get("num3") == true) );
			}
		}
	});
	
	window.formField = formField;
})(window)