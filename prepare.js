var fs = require('fs');

var config = `
    window.cosmicJsConfig = {
        bucket: {
            slug: '${process.env.COSMIC_BUCKET}',
            read_key: '${process.env.COSMIC_READ_KEY}'
        }
    }
`;

fs.writeFile("./config.js", config, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
