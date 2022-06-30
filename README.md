# scout

Command line interface written in Node.js to solve doubts during coding sessions.

## Working

You can search through Google as well as Stackoverflow from the terminal itself and open the required search result from the terminal in a new browser window. You will also have the option to save/bookmark any result for future reference.  
The user has options to load the saved results and modify/delete them as well as open the required links from the saved results from the terminal itself.

## Pre-requisites

Register a Google Search API Key [here](https://rapidapi.com/apigeek/api/google-search3/)  
(No API Key required for Stackoverflow)

## Recommended

It is highly recommended that you use PostgreSQL database to unlock all the capabilities of scout. The database may be on localhost or provided by Cloud providers like AWS (AWS RDS). Cloud-based host for database (like AWS RDS) will ensure that your saved/bookmarked results will be in sync across all your devices.

## Usage

### Using npm

```
npm i @adi611/scout
```

### Using npx

```
npx @adi611/scout@latest
```

`@latest` ensures that always the latest version of the package will be used.

### Locally

```
npm install

npm link
```

## Setup

Run `scout key set` and it will ask you for your Google Search API Key. Enter it.  
For PostgreSQL setup (required for save/bookmark feature), run `scout db set`. It will then ask you for your `host/endpoint`, `port`, `database name`, `username` and `password`. Enter these details.

## Commands

```
# Help & Commands
scout -h

# Version
scout -V

# API Key Commands
scout key set   # Set API key
scout key show  # Show API Key
scout key remove    # Remove API key

# DB Commands
scout db set    # Set-up PostgreSQL database
scout db show   # Show cuurent PostgreSQL database configuration

# Search Commands
scout search web --text "text-to-search"    # Web Search
scout search sof --text "text-to-search"    # Stackoverflow Search

# Saved/Bookmarked Result Commands
scout saved show    # Show the saved/bookmarked results
scout saved delete --id <id>    # Delete the saved/bookmarked result(s)

```

## Testing

Unit tests for the CLI is written with Jest, and can be found under the `tests` directory. To run the tests:

```
npm test
```

## Deployment

This CLI is automatically published through CD to [npm](https://www.npmjs.com/package/@adi611/scout) using Github Actions on every push, and also supports CI of pull requests after running unit tests with Jest.
