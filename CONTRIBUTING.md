# Contributing

From opening a bug report to creating a pull request every contribution is
appreciated and welcome 😍. If you're planning to implement a new feature or make a change in the
the existing codebase please create an issue first 📝. This way we can ensure that your precious
work is not in vain 🙂.

## Issues

**If you have discovered a bug 🐛 or have a feature suggestion 🤔, please [create an issue on GitHub](https://github.com/treebohotels/leaf-ui/issues/new).**

## Setup

[Setup leaf-ui locally on your machine](SETUP.md)

## Submitting Changes

After getting some feedback, push to your fork and submit a pull request. We
may suggest some changes or improvements or alternatives ✏️, but for small changes
your pull request should be accepted quickly ✅.

Some things that will help us to quickly accept your pull request:

* Follow the existing coding style.
* Before committing anything type `npm run commit`. By doing so you'll be prompted to fill out commit fields. Enter proper details as prompted for each section.
* We use [commitizen](https://github.com/commitizen/cz-cli) to better construct the commit messages.
* We use [semantic-release](https://github.com/semantic-release/semantic-release) for creating automatic releases. So the messages that you type in while committing are fed to semantic-release and based on the type of commit i.e (fix, feat, perf etc.) semantic-release decides the type of release i.e (min, major, patch) 

**Here's the list of conventional commit types:**
| Type    | Description |
| ------ | ------------- |
| feat | A new feature |
| fix |     	A bug fix |
|docs | 	Documentation only changes |
|style|   	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.|
|refactor | A code change that neither fixes a bug or adds a feature |
|perf |    	A code change that improves performance |
|test |    	Adding missing tests |
|chore |   	Changes to the build process or auxiliary tools and libraries such as documentation generation |
|revert |  	Reverts a previous commit |

## Documentation

We use [storybook](https://storybook.js.org/) 📔 to browse our component library, view the different states of each component, and interactively develop and test components.
