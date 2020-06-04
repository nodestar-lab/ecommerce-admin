module.exports = {
    identifier: "mobile",
    header: "Mobile",
    pageTitle: "Home",
    default: true,
    mType: "visual", // visual , listing
    access: { deny: ["user"], allow: ["admin"] },
    items: [
        {
            // this should be replace by the db call and take from the product manager
            //later movie this code to smaller modulecomponent
            type: "lister",
            display: {},
            fields: ["src", "headers", "description"],
            action: ["dashboard-edit", "dashboard-delete"],
            /**
            items  ; loop 
            123454 item.src == 'flo' return {text : item.src , color : 'red', type : 'tag'}
            **/
            items: [
                {
                    src: "https://getuikit.com/docs/images/photo.jpg",
                    header: "headerOne",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/dark.jpg",
                    header: "headerOne",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/light.jpg",
                    header: "headerOne",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/photo2.jpg",
                    header: "headerOne",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/photo3.jpg",
                    header: "headerOne",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]
        }
    ]
};
