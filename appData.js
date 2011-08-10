formValues = {
    pages: {
    	"Personal_Information" : {
	        title: "Personal Information",
	        sections: {
	            "Student_Type": {
	                title: "Student Type - Check Only One",
	                fields: {
	                    "stdnt_type": {
	                    	name:"stdnt_type",
	                        type: "formRadioList",
	                        elements: [ {label:"Associate Degree Student", value:"assoc", name:"stdnt_type"}, {label:"Bachelor Degree Student", value:"bach", name:"stdnt_type"}, {label:"Certificate Student", value:"cert", name:"stdnt_type"}, {label:"Non-degree Student", value:"nondeg", name:"stdnt_type"}, {label:"High School Student", value:"highsch", name:"stdnt_type"}, {label:"Guest Student", value:"guest", name:"stdnt_type"}, {label:"Apprenticeship Program",value:"apprent", name:"stdnt_type"}, {label:"Continuing Education Units (CEU)",value:"ceu", name:"stdnt_type"}],
	                        length: 7,
	                        required: true,
	                        error: "string",
	                        show: true
	                    }
	                }
	            },
	            "Student_Status": {
	                title: "Student Status - Check all that apply",
	                fields: {
	                    "stts_frmer": {
	                    	name: "stdnt_type",
	                        type: "formCheckbox",
	                        label: "Former Student",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "stts_othCllge": {
	                        type: "formCheckbox",
	                        label: "Attended another college",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "stts_frstCllge": {
	                        type: "formCheckbox",
	                        label: "First time in any college",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "stts_inatStdnt": {
	                        type: "formCheckbox",
	                        label: "International student",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "stts_permAln": {
	                        type: "formCheckbox",
	                        label: "A permanent resident alien",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    }
	                }
	            },
	            "Identification": {
	                title: "Identification",
	                fields: {
	                    "smc_id": {
	                        type: "formText",
	                        label: "SMC Student ID",
	                        name: "smc_id",
	                        value: "",
	                        length: 32,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "birthdate": {
	                        type: "formDate",
	                        label: "Birth Date",
	                        name: "birthdate",
	                        value: "",
	                        length: 10,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "birthcity": {
	                    	type: "formText",
	                    	label: "Birth Place",
	                    	name: "birthcity",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                    },
	                    "birthstate": {
	                    	type: "formOption",
	                    	label: "",
	                    	name: "birthstate",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                    },
	                    "gender": {
	                    	type: "formBoolean",
	                    	label: "Gender",
	                    	name:"gender",	                        
	                        elements: [{label: "Male", value: "1", name: "gender"}, {label: "Female", value: "2", name: "gender"}],
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "language": {
	                    	type: "formText",
	                    	label: "Native Language",
	                    	name: "language",
	                    	value: "",
	                    	length: 256,
	                    	required: true,
	                    	error: "string",
	                    	show: true
	                    }
	                    
	                }
	            },
	            "Ethnic": {
	                title: "Ethnic Background Information",
	                fields: {
	                	"race_ltno": {
	                    	type: "formBoolean",
	                    	label: "Are you Hispanic/Latino?",
	                    	name:"race_ltno",
	                        elements: [{label: "Yes", value: "1", name: "race_ltno"}, {label: "No", value: "2", name: "race_ltno"}],
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    },
	                    "race": {
	                    	type: "formCheckboxList",
	                        label: "Regardless of your answer to the prior question, please indicate how you identify yourself. (Check all that apply)",
	                        elements: [{label: "Black or African American", value: "", name: "race_afrAm"}, {label: "Asian", value: "", name: "race_asian"}, {label: "Native Hawaiian or Other Pacific Islander", value: "", name: "race_hwii"}, {label: "American Indian or Alaska Native", value: "", name: "race_amInd"}, {label: "White", value: "", name:"race_whte"}, {label: "Non-Resident Alien", value: "", name: "race_nResAln"}],
	                        name: "race",
	                        value: "",
	                        length: 1,
	                        required: true,
	                        error: "string",
	                        show: true
	                    }	                    
	                }
	            }
	        }
	    },
	    "Page 2" : {
	    	
	    },
	    "Page 3" : {
	    	
	    }
    }
};