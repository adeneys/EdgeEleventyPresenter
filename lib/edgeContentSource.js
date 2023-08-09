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
          }
          ... on Bio {
            id
            name
          }
          ... on Text {
            id
            name
          }
          ... on SectionTitle {
            id
            name
          }
        }
      }
    }
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
