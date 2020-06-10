module.exports = {
  identifier: "faculty",
  header: "Faculty",
  pageTitle: "Faculty",
  // default: true,
  mType: "lister", // visual , listing
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
  display: [
    { key: "faculty_name", label: "Faculty Name" },
    { key: "faculty_type", label: "Faculty Type" },
    { key: "class", label: "Class" },
    { key: "is_active", label: "Active" }
  ]
};
