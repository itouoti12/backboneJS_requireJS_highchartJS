require.config({
    baseUrl: "js",
    paths: {
        "util": "lib/util"
    }
});
require(['./HelloWorld'])();
