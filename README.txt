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

formCheckbox

formCheckboxList

formDate

formDateRange

formLocation

formOption

formPhone

formRadioList

formText