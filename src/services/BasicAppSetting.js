class BasicAppSetting {
  constructor(config, jr) {
    this.config = config;
    this.jr = jr;
    logger.info("[-BasicAppSetting] ");
  }
  handler(req, res) {
    let appConfig = require("../../config/app");
    res.send(appConfig);
  }
}

module.exports = BasicAppSetting;
