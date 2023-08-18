const edgeContentSource = require("../lib/edgeContentSource");

module.exports = async function(globalData) {
    const pages = await edgeContentSource.fetchContent(globalData.edgeUri, globalData.edgeToken);

    for(let i in pages) {
        pages[i].url = "/" + i + "-" + pages[i].name.toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            + "/";
    }

    return pages;
}
