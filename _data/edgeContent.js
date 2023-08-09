const edgeContentSource = require("../lib/edgeContentSource");

module.exports = async function(globalData) {
    return await edgeContentSource.fetchContent(globalData.edgeUri, process.env.EDGE_TOKEN);
}
