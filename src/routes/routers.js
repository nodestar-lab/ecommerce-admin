const routers = [
    {
        route: "/settings",
        handler: "BasicAppSetting",
        request_type: "get",
        authenticate: true
    },
    {
        route: "/error",
        handler: "ErrorHandler",
        request_type: "post",
        authenticate: true
    },
    {
        route: "/search",
        handler: "SearchHandler",
        request_type: "post",
        authenticate: true
    },
    {
        route: "/navs",
        handler: "NavService",
        request_type: "post",
        authenticate: true
    },
    {
        route: "/dashboard",
        handler: "DashboardService",
        request_type: "get",
        authenticate: true
    },
    {
        route: "/_wk/:tab",
        handler: "TabHandler",
        request_type: "get",
        authenticate: true
    }
];

module.exports = routers;
