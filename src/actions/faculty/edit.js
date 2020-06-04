module.exports = {
	identfier: "faculty-edit",
	button: [{ label: "Save" }, { label: "Cancel" }],
	form: {
		type: "simple", // simple wizard or something else ,
		validation: ["form-validation"],
		header: "Edit faculty Details",
		// user lowercase with undescore
		fields: [
			{
				key: "faculty_name",
				label: "Name",
				type: "input" // is not mentioned then also type is input
			},
			{
				key: "type",
				label: "Type",
				type: "select" // dropdown select
			},
			{
				key: "class",
				label: "Access Classes",
				type: "multiple-select" // multiple select
			},
			{
				key: "is_active",
				label: "Is Active",
				type: "checkbox"
			}
		]
	},
	save: async (formVal, db, jr, users) => {
		console.log("formval.......................", formVal);
		return formVal;
	}
};
