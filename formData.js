formValues = {
    pages: [
    	{
    		name:"Personal_Information",
	        title: "Personal Information",
	        type: "formPage",
	        sections: [
	            {
	            	name: "Student_Type",
	                title: "",
	                fields: [
	                    {
	                    	name:"stdnt_type",
	                    	label: "Student Type - Check Only One",
	                        type: "RadioListField",
	                        elements: [ {label:"Associate Degree Student", value:"assoc", name:"stdnt_type"}, {label:"Bachelor Degree Student", value:"bach", name:"stdnt_type" }, {label:"Certificate Student", value:"cert", name:"stdnt_type"}, {label:"Non-degree Student", value:"nondeg", name:"stdnt_type"}, {label:"High School Student", value:"highsch", name:"stdnt_type"}, {label:"Guest Student", value:"guest", name:"stdnt_type"}, {label:"Apprenticeship Program",value:"apprent", name:"stdnt_type"}, {label:"Continuing Education Units (CEU)",value:"ceu", name:"stdnt_type"}],
	                        length: 7,
	                        required: true,
	                        error: "string",
	                        show: true
	                    }
	                ]
	            },
	            {
	            	name: "Student_Status",
	                title: "Student Status - Check all that apply",
	                fields: [
	                    {
	                    	name: "stts_frmer",
	                        type: "CheckboxField",
	                        label: "Former Student",
	                        value: "",
	                        length: 1,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "stts_othCllge",
	                        type: "CheckboxField",
	                        label: "Attended another college",
	                        value: "",
	                        length: 1,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "stts_frstCllge",
	                        type: "CheckboxField",
	                        label: "First time in any college",
	                        value: "",
	                        length: 1,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "stts_inatStdnt",
	                        type: "CheckboxField",
	                        label: "International student",
	                        value: "",
	                        length: 1,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "stts_permAln",
	                        type: "CheckboxField",
	                        label: "A permanent resident alien",
	                        value: "",
	                        length: 1,
	                        error: "string",
	                        show: true
	                    }
	                ]
	            },
	            {
	            	name: "Identification",
	                title: "Identification",
	                fields: [
	                    {
	                    	name: "smc_id",
	                        type: "TextField",
	                        label: "SMC Student ID",
	                        value: "",
	                        length: 32,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "birthdate",
	                        type: "DateField",
	                        label: "Birth Date",
	                        value: "",
	                        length: 10,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "birthPlace",
	                    	type: "LocationField",
	                    	label: "Birth Place",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                    },
	                    {
	                    	name: "gender",
	                    	type: "BooleanField",
	                    	label: "Gender",
	                        options: [{label: "Male", value:"1"}, {label: "Female", value:"0"}],
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "language",
	                    	type: "TextField",
	                    	label: "Native Language",
	                    	name: "language",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                    }
	                    
	                ]
	            },
	            {
	            	name: "Ethnic",
	                title: "Ethnic Background Information",
	                fields: [
	                	{
	                		name: "race_ltno",
	                    	type: "BooleanField",
	                    	label: "Are you Hispanic/Latino?",
	                        elements: [{label: "Yes", value: "1"}, {label: "No", value: "0"}],
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    {
	                    	name: "race",
	                    	type: "CheckboxListField",
	                        label: "Regardless of your answer to the prior question, please indicate how you identify yourself. (Check all that apply)",
	                        elements: [{label: "Black or African American", value: "", name: "race_afrAm"}, {label: "Asian", value: "", name: "race_asian"}, {label: "Native Hawaiian or Other Pacific Islander", value: "", name: "race_hwii"}, {label: "American Indian or Alaska Native", value: "", name: "race_amInd"}, {label: "White", value: "", name:"race_whte"}, {label: "Non-Resident Alien", value: "", name: "race_nResAln"}],
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    }
	                ]
	            }
	        ]
	    },
	    {
	    	name: "Contact",
	    	title: "Contact Information",
	    	type: "formPage",
	    	sections: [
	    		{
	    			name: "Name_Info",
	    			fields: [
	    				{
	    					name: "nameFirst",
	                    	type: "TextField",
	                    	label: "First Name",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	    				},
	    				{
	    					name: "nameMiddle",
	                    	type: "TextField",
	                    	label: "Middle Name",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	    				},
	    				{
	    					name: "nameLast",
	                    	type: "TextField",
	                    	label: "Last Name",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	    				},
	    				{
	    					name: "nameMaiden",
	                    	type: "TextField",
	                    	label: "Maiden Name",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	    				}
	    			]
	    		},
	    		{
	    			name: "Permanent",
	                title: "Permanent Address",
	                fields: [
	                	{
	                		name: "perm_addr",
	                    	type: "TextField",
	                    	label: "Street Address",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "perm_location",
	                    	type: "LocationField",
	                    	label:"Permenant City/State",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "perm_zip",
	                    	type: "TextField",
	                    	label: "Zip Code",
	                    	value: "",
	                    	length: 10,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	}
	                ]
	           },
	           {
	    			name: "Mailing",
	                title: "Mailing Address",
	                fields: [
	                	{
	                		name: "mail_addr",
	                    	type: "TextField",
	                    	label: "Street Address",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "mail_location",
	                    	type: "LocationField",
	                    	value: "",
	                    	label: "Mailing City/State",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "mail_zip",
	                    	type: "TextField",
	                    	label: "Zip Code",
	                    	value: "",
	                    	length: 10,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "county",
	                    	type: "TextField",
	                    	label: "County",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "township",
	                    	type: "TextField",
	                    	label: "Township",
	                    	value: "",
	                    	length: 256,
	                    	required: false,
	                    	error: "string",
	                    	show: true
	                	}
	                ]
	           },
	           {
	    			name: "Phone",
	                title: "Phone",
	                fields: [
	                	{
	                		name: "home",
	                    	type: "PhoneField",
	                    	label: "Home Phone",
	                    	value: "",
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "cell",
	                    	type: "PhoneField",
	                    	label: "Cell Phone",
	                    	value: "",
	                    	required: false,
	                    	error: "string",
	                    	show: true
	                	},
	                	{
	                		name: "conf_info",
	                        type: "CheckboxField",
	                        label: "Make my information confidential",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                	}
	                ]
	           }
	    	]
	    },
	    {
    		name:"Education",
	        title: "Education Information",
	        type: "formPage",
	        sections: [
	            {
					name:"Education_Information",
					title: "Education Information",
					fields: [
					  {
	                    	name: "edu_goal",
							label: "What is your primary educational goal?check only one",
	                        type: "RadioListField",
	                        elements: [ {label:"Specific Occupational Program", value:"spec", name:"edu_goal"}, {label:"University/College Transfer", value:"tran", name:"edu_goal"}, {label:"Bachelor's Degree at SMC/Ferris", value:"bach", name:"edu_goal"}, {label:"Continued Personal/Professional Development", value:"cont", name:"edu_goal"}],
	                        length: 4,
	                        required: true,
	                        error: "string",
	                        show: true
					  },
					  {
	                    	name: "edu_high_grad",
							label: "Have you graduated from a high school or an adult education program?",
	                        type: "RadioListField",
	                        elements: [ {label:"Yes", value:"1"}, {label:"No", value:"0"}, {label:"Current high school student", value:"cur"}],
	                        length: 3,
	                        required: true,
	                        error: "string",
	                        show: true
					  }
				]
				},
				{
					name: "Education_HighSchool_AdultEd",
					title: "High School or Adult Education Program",
					fields: [
					{
						name: "edu_school",
						type: "TextField",
						label: "School/Program",
						value: "",
						length: 256,
						required: true,
						error: "string",
						show: true
					},
					{
						name: "edu_school_location",
						type: "LocationField",
						label: "City and State",
						value: "",
						length: 256,
						required: true,
						error: "string",
						show: true
					},
					{
						name: "edu_diploma",
						type: "TextField",
						label: "What year did you or will you receive a high school diploma?",
						value: "",
						length: 4,
						required: true,
						error: "string",
						show: true
					},
					{
						  name: "edu_ged",
						  label: "Did you receive a GED?",
						  type: "BooleanField",
						  elements: [ {label:"Yes", value:"1"}, {label:"No", value:"0"}],
						  required: true,
						  error: "string",
						  show: true
					},
					{
						name: "edu_ged_when",
						type: "TextField",
						label: "If so, what year did you receive your GED?",
						value: "",
						length: 4,
						required: false,
						error: "string",
						show: true
					},
					{
						  name: "edu_parents",
						  label: "Did either your father or mother graduate from a four-year college?",
						  type: "BooleanField",
						  elements: [ {label:"Yes", value:"yes"}, {label:"No", value:"0"}],
						  required: true,
						  error: "string",
						  show: true
					},
					{
						name: "edu_when_year",
						type: "TextField",
						label: "What year do you plan to start attending Ferris/SMC?",
						value: "",
						length: 4,
						required: true,
						error: "string",
						show: true
					},
					{
						  name: "edu_when_semester",
						  label: "Which Semester?",
						  type: "RadioListField",
						  elements: [ {label:"Fall (Late August)", value:"fall", name:"edu_when_semester"}, {label:"Winter (January)", value:"wint", name:"edu_when_semester"}, {label:"Spring (May)", value:"spri", name:"edu_when_semester"}],
						  length: 4,
						  required: true,
						  error: "string",
						  show: true
	                    }
	                ]
	            },
				{
	            	name: "Previous_Colleges_Attended",
	                title: "Previous Colleges Attended",
	                fields: [
					   {
	                    	name: "pre_name1",
	                        type: "TextField",
	                        label: "Name",
	                        value: "",
	                        length: 256,
	                        required: false,
	                        error: "string",
	                        show: true
	                    },
					   {
	                    	name: "pre_location1",
	                        type: "TextField",
	                        label: "Location",
	                        value: "",
	                        length: 256,
	                        required: false,
	                        error: "string",
	                        show: true
	                    },					
					  {				  
							name: "pre_date1",
							type: "DateRangeField",
							label: "Dates of Attendance",
							value: "",
							required: false,
							error: "string",
							show: true,
					  },
					   {
	                    	name: "pre_name2",
	                        type: "TextField",
	                        label: "Name",
	                        value: "",
	                        length: 256,
	                        required: false,
	                        error: "string",
	                        show: true
	                    },
					   {
	                    	name: "pre_location2",
	                        type: "TextField",
	                        label: "Location",
	                        value: "",
	                        length: 256,
	                        required: false,
	                        error: "string",
	                        show: true
	                    },					
					  {				  
							name: "pre_date2",
							type: "DateRangeField",
							label: "Dates of Attendance",
							value: "",
							required: false,
							error: "string",
							show: true,
	                    }
	                ]
	            }
	        ]
	    },
	    {
    		name:"Emergency",
	        title: "Emergency Information and Authorization",
	        type: "formPage",
	        sections: [
	            {
	            	name: "Main_Emergency_Contact",
	                title: "People to contact in case of an emergency",
	                fields: [
					   {
	                    	name: "emg_mfname",
	                        type: "TextField",
	                        label: "First Name",
	                        value: "",
	                        length: 256,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
					   {
	                    	name: "emg_mlname",
	                        type: "TextField",
	                        label: "Last Name",
	                        value: "",
	                        length: 256,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },					
					  {				  
							name: "emg_mphone1",
							type: "PhoneField",
							label: "Phone 1",
							value: "",
							required: true,
							error: "string",
							show: true,
					  },
					  {				  
							name: "emg_mphone2",
							type: "PhoneField",
							label: "Phone 2",
							value: "",
							required: false,
							error: "string",
							show: true,
					  }
	                ]
	            },
				{
	            	name: "Secondary_Emergency_Contact",
	                title: "Secondary Emergency Contact",
	                fields: [
					   {
	                    	name: "emg_sfname",
	                        type: "TextField",
	                        label: "First Name",
	                        value: "",
	                        length: 256,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
					   {
	                    	name: "emg_slname",
	                        type: "TextField",
	                        label: "Last Name",
	                        value: "",
	                        length: 256,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },					
					  {				  
							name: "emg_sphone1",
							type: "PhoneField",
							label: "Phone 1",
							value: "",
							required: true,
							error: "string",
							show: true,
					  },
					  {				  
							name: "emg_sphone2",
							type: "PhoneField",
							label: "Phone 2",
							value: "",
							required: false,
							error: "string",
							show: true,
	                    }
	                ]
	            }
	        ]
	    }
    ]
};