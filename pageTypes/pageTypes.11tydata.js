module.exports = {
    layout: "layouts/main.njk",
    eleventyComputed: {
        title: page => page.contentPage.name,
        id: page => page.contentPage.id
    }
}
