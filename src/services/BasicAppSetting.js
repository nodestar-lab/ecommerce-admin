class BasicAppSetting {
  constructor(config, jr) {
    this.config = config;
    this.jr = jr;
    logger.info("[-BasicAppSetting] ");
  }
  handler(req, res) {
    console.log("get basic settings user is ...  ", req.query);
    let appConfig = require("../../config/app");
    console.log("app config of the ", appConfig);
    res.send(appConfig);
  }
}

module.exports = BasicAppSetting;
