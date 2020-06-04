const path = require("path");

class DashboardService {
    constructor(config, jr) {
        this.config = config;
        this.jr = jr;
        logger.info("[-DashboardService]");
    }

    async handler(req, res) {
        let dashboard = require("../modules").dashboard;
        res.send({
            dashboard: dashboard
        });
    }

    addData() {}

    getData() {}

    updateData() {}

    deleteData() {}

    functinoname() {}

    /**
    request form link : /form/dashboard/dashboard-edit ? params 
    identfier : "dashboard-edit"
    button : {label : , icon : } 
    functinoname : 
    type : save, delete , update 

    **/
}

module.exports = DashboardService;
