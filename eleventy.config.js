require("dotenv").config();

// todo: move each logical extension to it's own module
const sass = require("sass");
const Renderer = require('@cristata/prosemirror-to-html-js').Renderer;

module.exports = function(eleventyConfig) {
    // Edge config
    eleventyConfig.addGlobalData("edgeUri", process.env.EDGE_URI || "https://edge.sitecorecloud.io/api/graphql/v1");
    eleventyConfig.addGlobalData("edgeToken", process.env.EDGE_TOKEN)

    // Page specific collections from Edge
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

    eleventyConfig.addCollection("socialPages", async collectionApi => {
        const pages = collectionApi.getAll()[0].data.edgeContent;
        return pages.filter(x => x.type == "Social");
    });

    // Sass support. https://www.11ty.dev/docs/languages/custom/#example-add-sass-support-to-eleventy
    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compile: async function(inputContent) {
            let result = sass.compileString(inputContent);
            return async (data) => {
                return result.css;
            }
        }
    });

    // Asset copy
    eleventyConfig.addPassthroughCopy("img");

    // Filters
    eleventyConfig.addFilter("proseConvert", function(value) {
        if(!value) {
            return "";
        }

        const renderer = new Renderer();
        return renderer.render(value);
    });

    eleventyConfig.addFilter("formatDate", function(value) {
        return new Date(value).toDateString();
    });

    eleventyConfig.addFilter("mastodonUrl", function(value) {
        let parts = value.split("@");
        if(parts.length != 3)
            return "";

        return `https://${parts[2]}/@${parts[1]}`
    });
};
