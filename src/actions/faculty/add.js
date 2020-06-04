module.exports = {
	identfier: "faculty-add",
	button: [{ label: "Save" }, { label: "Cancel" }],
	type: "create", // update , delete
	db_config: {
		db: "default",
		coll: "faculty"
	},
	form: {
		type: "simple", // simple wizard or something else ,
		validation: ["form-validation"],
		header: "Add faculty Details",
		// user lowercase with undescore
		fields: [
			{
				key: "faculty_name",
				label: "Name",
				type: "input" // is not mentioned then also type is input
			},
			{
				key: "faculty_type",
				label: "Type",
				type: "select",
				values: ["Teacher", "Management"]
			},
			{
				key: "class",
				label: "Access Classes",
				type: "multiple-select", // multiple select
				values: [
					"Class I",
					"Class II",
					"Class III",
					"Class IV",
					"Class V",
					"Class VI",
					"Class VII",
					"Class VIII",
					"Class IX",
					"Class X",
					"Class XI",
					"Class XII"
				],
				value: []
			},
			{
				key: "is_active",
				label: "Is Active",
				type: "checkbox"
			}
		]
	},
	save: async (formVal, db, jr, users) => {
		console.log("formval. ----- > ", formVal);
		return formVal;
	},
	logs: async (formVal, users, jr) => {
		return {
			notification: `${formVal.faculty_name} 's data is save`,
			log: `${formVal.faculty_name} 's data is save`
		};
	},
	after_save_reload: true
};
