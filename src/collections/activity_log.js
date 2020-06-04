module.exports = {
	collection_name: "activity_log",
	indexFields: [],
	fields: {
		log: String,
		user_id: String,
		user_name: Array,
		created: Date,
		action: String
	}
};
