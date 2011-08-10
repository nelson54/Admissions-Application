formValues = {
	pages: {
		{
			name: "Page_Identifier",
			title: "Page Title",
			sections: {
				{
					name: "Section_Identifier",
					title: "Section Title",
					fields : {
						{
							name: string,
							type: "formBoolean" | "formCheckbox" | "formCheckboxList" | "formDate" | "formDateRange" | "formLocation" | "formOption" | "formPhone" | "formRadioList" | "formText",
							label: string,
							elements: [{label: string, value: string, name: string}]
							value: string,
							length: int,
							range:[min, max],
							required : true|false,
							error : string,
							show: true
						}
					}
				}
			}		
		}			
	}
}

formBoolean
	Used for any two-option, radio question e.g. gender, yes or no...
	Use label1, label2, value1, value2 to specify. Otherwise, it defaults to Yes, No, 1, 0, respectively.
{
	name: "gender",
	type: "formBoolean",
	label: "Gender",
	name:"gender",
	label1: "Male",
	value1: "1",
	label2: "Female",
	value2: "0",
	length: 1,
	required: true,
	error: "string",
	show: true
}

formCheckbox
	just a check box

formCheckboxList
	group of checkboxes

formDate
	date field

formDateRange
	from date to date

formLocation
	city and state

formOption
	Drop down options

formPhone
	it's a phone!

formRadioList
	lots of radios

formText
	just a plain ol' textbox