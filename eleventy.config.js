require("dotenv").config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("edgeUri", "https://edge.sitecorecloud.io/api/graphql/v1");
};
