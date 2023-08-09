require("dotenv").config();

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("edgeUri", "https://edge.sitecorecloud.io/api/graphql/v1");

    eleventyConfig.addCollection("titlePages", async collectionApi => {
        const pages = collectionApi.getAll()[0].data.edgeContent;
        return pages.filter(x => x.type == "Title");
    });

    eleventyConfig.addCollection("bioPages", async collectionApi => {
        const pages = collectionApi.getAll()[0].data.edgeContent;
        return pages.filter(x => x.type == "Bio");
    });

    eleventyConfig.addCollection("textPages", async collectionApi => {
        const pages = collectionApi.getAll()[0].data.edgeContent;
        return pages.filter(x => x.type == "Text");
    });

    eleventyConfig.addCollection("sectionTitlePages", async collectionApi => {
        const pages = collectionApi.getAll()[0].data.edgeContent;
        return pages.filter(x => x.type == "SectionTitle");
    });
};
