module.exports = {
    mType: "nav",
    identifier: "navbar",
    items: [
        {
            label: "Mobile",
            subnav: [
                {
                    label: "Redmi",
                    link: "/_m/mobile?id ='redmi'"
                },
                {
                    label: "Nokia",
                    link: "/_m/mobile/:name"
                },
                {
                    label: "Apple",
                    link: "/_m/mobile/:name"
                }
            ]
        },
        {
            label: "Laptop",
            subnav: [
                {
                    label: "Lenovo"
                },
                {
                    label: "Dell"
                },
                {
                    label: "Acer"
                }
            ]
        },
        {
            label: "Washing Machine",
            subnav: [
                {
                    label: "Godrej"
                },
                {
                    label: "Wirlpool"
                },
                {
                    label: "LG"
                }
            ]
        }
    ]
};
