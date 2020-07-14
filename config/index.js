module.exports = {
  serverName: "ShoppingApp",
  dbname: "shoppingApp",
  port: "5500",
  email: "nodestar.lab@gmail.com",
  additional_service: "./service",
  base_dir: "basepath",
  path: {
    entity: "/src/collections",
    service: "/src/services/",
    routes: "/src/routes/routers",
    template: "/src/templates",
    server: "/JageeraServer",
    modulePath: "/src/modules",
    component_path: "/src/components",
    actionPath: "/src/actions",
    upload_dir: "../temp_ecom_admin",
  },
  google: {
    oauth2: {
      clientId:
        "84420994973-p916g22s25ep14p7v2tkm7gpatbjs950.apps.googleusercontent.com",
      clientSecret: "peS1Zir5nbzd6pcvni59CPR1",
      refreshToken:
        "1//04D4yxqLWMveoCgYIARAAGAQSNwF-L9IryRd0wc4akxJv4clZu9rCROEMROjc0l1hh5RN6bdtRvBdFqFE49fq7rjWQYO_tySMEEQ",
      accessToken:
        "ya29.Il-3B2oZQ3kVojvADsSILWQ4J6ZeQ6W_f59k0urR1Wdm8ZlEooFMpwoGEZlOX7HTBpt0L6uRYL-uLmBA7IZEgTfOCAW55-KHpVmu5PniAFW3I5jOcOYgbmr7oF-DS0ldeA",
    },
  },
  jwt: {
    audience: "https://*.bipin.io",
    subject: "anonymous",
    issuer: "library",
    algorithm: "HS256",
    expiresIn: "1d",
  },
  secretJWT: "5e1d9c5af3ff740fc791354f",
  assets: ["path/one", "path/two", "path/three"],
};
