# Edge 11ty Presenter #

An [11ty](https://www.11ty.dev/) website showing presentation content from Sitecore Experience Edge and managed in [Content Hub ONE](https://www.sitecore.com/products/content-hub-one).

# Getting Started #

## Requirements ##

This project requires:

- [Node.js](https://nodejs.org) with minimum version 18.
- A Sitecore Experience Edge tenant populated from Content Hub ONE, using the content from https://github.com/adeneys/EdgeContentPresenter/tree/feature/ch1/chone.

## Steps ##

1. Restore the NPM packages.
    ````shell
    npm install
1. Create a `.env` file in the root of the repository and set the `EDGE_TOKEN` variable to the X-GQL-Token for the Edge tenant being used.

1. Optional. If using an Edge environment other than production, set the GraphQL endpoint in the `EDGE_URI` variable in the `.env` file.

1. Run the `build` command to generate the static site
    ````shell
    npm run build
