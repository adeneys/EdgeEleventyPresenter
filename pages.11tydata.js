module.exports = {
    eleventyComputed: {
        title: page => page.contentPage.name
    },
    layout: "layouts/title.njk"
}
