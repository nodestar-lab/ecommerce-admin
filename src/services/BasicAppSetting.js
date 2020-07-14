const appConfig = require("../../config/app");
class BasicAppSetting {
  constructor(config, jr) {
    this.config = config;
    this.jr = jr;
    logger.info("[-BasicAppSetting] ");
  }
  handler(req, res) {
    res.send(appConfig);
  }
}

module.exports = BasicAppSetting;
