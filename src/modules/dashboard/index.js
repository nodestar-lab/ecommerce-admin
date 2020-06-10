module.exports = {
  identifier: "dashboard",
  header: "Dashboard",
  pageTitle: "Home",
  default: true,
  mType: "visual", // visual , listing
  items: [
    {
      identifier: "sliderCard",
      component: true
      // later on give the support for the position
    },
    {
      identifier: "faculty",
      module: true
      // later on give the support for the position
    }
  ]
  // items: [
  //   {
  //     type: "simple-card",
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
