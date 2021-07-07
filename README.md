
# Code.Ca.Gov - Unlocking the potential of the California State Government’s software

## Introduction

[Code.ca.gov](https://cagov.github.io/codecagov/) is a website promoting good practices in code development, collaboration, and reuse across the California state Government. Code.ca.gov provides tools and guidance to help agencies implement and share open source code. It also includes an inventory of California state government custom code to promote reuse between agencies and provides tools to help government and the public collaborate on open source projects.

Code.ca.gov is an open source project, so we invite your contributions, be it in the form of code, design, or ideas.

## Requirements

The development of code.ca.gov is guided by the requirements set forth in the [Code California Playbook](https://codecagov-playbook.readthedocs.io/en/latest/README/)

## Getting Started

After you have cloned this repo, you can use `npm install` to install all of the
project’s dependencies.

You can then run the server using `npm run start`.

By default, the development server will listen on <http://localhost:8080/>. You can change the default port by setting the `PORT` environment variable before starting the server (for example, `PORT=3000 npm start`).

## Testing

Unit testing is done using the [jest](https://github.com/facebook/jest) framework with [enzyme](https://github.com/airbnb/enzyme). 

Use `npm run test` to run unit tests a single time. This will generate a code coverage report.

Use `npm run test-watch` to run unit tests continuously, re-running each time a file is saved. By default only files changed since the last commit will be ran, follow the command line prompt for customizing how tests are ran. Snapshot tests can be updated while running this command, by pressing `u` to updated them.

Note: console.log/warn/error are mocked in unit tests and will not print anything to avoid cluttering the command line. Use a different logging, such as console.info for debugging while running tests

## Deployment

Read about how to publish to Github pages, Federalist and elsewhere [here](DEPLOYMENT.md)

## Generating License Data

To update the `dependency_licenses.json` file, run `npm run licenses`.

## File Structure

The directories in `src` are organized around the pillars of  React, along
with several additional custom file types. When creating new files, be sure to
add your file and any necessary templates, styles, and tests to a directory
dedicated to your new file in the appropriate place.

## License

As stated in [CONTRIBUTING](CONTRIBUTING.md):

> [..] this project is in the worldwide public domain (in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/)).

> All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
