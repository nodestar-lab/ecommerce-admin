module.exports = {
  mType: "nav",
  identifier: "navbar",
  db_config: {
    db: "default",
    coll: "navbar" //specify collection
  },
  // filter: { is_active: true },
  items: [
    // {
    //     label: "Mobile",
    //     subnav: [
    //         {
    //             label: "Redmi",
    //             link: "/_m/mobile?id ='redmi'"
    //         }
    //     ]
    // },
    {
      label: "Add Faculty",
      link: "/_m/faculty"
    },
    {
      label: "Category",
      link: "/_m/category"
    },
    {
      label: "Order",
      link: "/_m/order"
    },
    {
      label: "Inventory",
      link: "/_m/inventory"
    }
  ]
};
