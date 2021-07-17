const express = require("express"),
webApp = express();

const listener = webApp.listen(8908, () => {
    webApp.use(express.static("keys"));
    console.log("listenings");
});