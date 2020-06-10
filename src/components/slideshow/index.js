module.exports = {
  identifier: "slideShow",
  type: "slide-show",
  db_config: {
    db: "default",
    coll: "user"
  },
  display_config: {
    // this configuration will allow to resize or sliding interval , theme which kind of card should render here
    ratio: "5:1",
    autoplay: true,
    autoplay_interval: 3000,
    theme: "light"
  },
  filter: {},
  fields: ["name", "email"], // these will be the fields which we have to fetch from the db
  formatter: (item, jr) => {
    return item;
  }
};
