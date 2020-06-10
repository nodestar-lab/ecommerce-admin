module.exports = {
	identifier: "inventory",
	header: "Faculty",
	pageTitle: "Faculty",
	// default: true,
	mType: "visual", // visual , listing
	access: { allow: ["admin"], deny: ["student"] },
	top_action: [
		{ identifier: "faculty-add", label: "Add Faculty", icon: "plus-circle" }
	],
	inline_action: [{ identifier: "faculty-edit", label: "Edit", icon: "pen" }],
	db_config: {
		db: "default",
		coll: "faculty"
	},
	filter: { is_active: true },
	items: [
		{
			identifier: "sliderCard",
			component: true
		},
		{
			identifier: "faculty",
			module: true
			// later on give the support for the position
		}
	]
};
