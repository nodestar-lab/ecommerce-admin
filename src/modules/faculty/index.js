module.exports = {
  identifier: "faculty",
  header: "Faculty",
  pageTitle: "Faculty",
  // default: true,
  mType: "lister", // visual , listing
  // actions: require("./forms"),
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
  // items :
  // items: [
  //   {
  //     type: "simpleCard",
  //     display: {
  //       ratio: "5:1",
  //       autoplay: true,
  //       autoplay_interval: 3000,
  //       theme: "light"
  //     },
  //     items: [
  //       {
  //         link: "../../../assets/images/one.jpg",
  //         height: "",
  //         width: ""
  //       },
  //       {
  //         link: "../../../assets/images/two.jpg",
  //         height: "",
  //         width: ""
  //       }
  //     ]
  //   },
  //   {
  //     // this should be replace by the db call and take from the product manager
  //     //later movie this code to smaller modulecomponent
  //     type: "lister",
  //     display: {},
  //     items: [
  //       {
  //         src: "https://getuikit.com/docs/images/photo.jpg",
  //         header: "headerOne",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //       },
  //       {
  //         src: "https://getuikit.com/docs/images/dark.jpg",
  //         header: "headerOne",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //       },
  //       {
  //         src: "https://getuikit.com/docs/images/light.jpg",
  //         header: "headerOne",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //       },
  //       {
  //         src: "https://getuikit.com/docs/images/photo2.jpg",
  //         header: "headerOne",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //       },
  //       {
  //         src: "https://getuikit.com/docs/images/photo3.jpg",
  //         header: "headerOne",
  //         description:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  //       }
  //     ]
  //   }
  // ]
};
