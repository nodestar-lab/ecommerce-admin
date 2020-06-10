module.exports = {
  identifier: "profile",
  header: "Profile",
  pageTitle: "Profile",
  // default: true,
  mType: "lister", // visual , listing
  access: { allow: ["admin"], deny: ["student"] },
  top_action: [],
  inline_action: [],
  db_config: {
    db: "default",
    coll: "user"
  },
  filter: {},
  display: [
    { key: "email", label: "Email" },
    { key: "username", label: "Username" },
    { key: "password", label: "Password" },
    { key: "region", label: "Region" },
    { key: "city", label: "City" },
    { key: "country_name", label: "Country" },
    { key: "roles", label: "Roles" },
    { key: "type", label: "Type" },
    { key: "updated", label: "Updated" },
    { key: "created", label: "Created" }
  ],
  formatter: (item, jr) => {
    if (item.region_details && item.region_details.city) {
      item.city = item.region_details.city;
      console.log("item city is", item.city);
    }
    if (item.region_details && item.region_details.country_name) {
      item.country_name = item.region_details.country_name;
    }
    if (item.region_details && item.region_details.region) {
      item.region = item.region_details.region;
    }
    delete item.region_details;
    return item;
  }
};
