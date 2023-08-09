module.exports = {
    layout: "layouts/main.njk",
    eleventyComputed: {
        title: page => page.contentPage.title,
        id: page => page.contentPage.id
    }
}
