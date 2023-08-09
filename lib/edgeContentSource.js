const query = `query GetNavigation($name: String) {
  allNavigation(where: {
  name_eq: $name
} ) {
  results {
    id
    name
    pages {
      results {
        type: __typename
        ... on Title {
          id
          name
          title
          author
          date
          hashtags
          backgroundImage(first: 1) {
            ...mediaInfo
          }
        }
        ... on Bio {
          id
          name
          title
          author
          jobTitle
          highlights
          mastodon
          headerImage(first: 1) {
            ...mediaInfo
          }
          profileImage(first: 1) {
            ...mediaInfo
          }
        }
        ... on Text {
          id
          name
          title
          text
          headerImage(first: 1) {
            ...mediaInfo
          }
          images {
            ...mediaInfo
          }
        }
        ... on SectionTitle {
          id
          name
          title
          subtitle
          backgroundImage(first: 1) {
            results {
              fileName
              fileUrl
              fileWidth
              fileHeight
              fileSize
            }
          }
          layout(first: 1) {
            results {
              id
            }
          }
        }
      }
    }
  }
}
}

fragment mediaInfo on MediaList {
  results {
    fileName
    fileUrl
    fileWidth
    fileHeight
    fileSize
  }
}`

async function fetchContent(uri, token) {
    const response = await fetch(uri, {
        method: "POST",
        headers: {
            "X-GQL-Token": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query,
            variables: {
                name: "Primary Navigation"
            }
        })
    });

    var json = await response.json();
    return json.data.allNavigation.results[0].pages.results;
}

module.exports = { fetchContent };
