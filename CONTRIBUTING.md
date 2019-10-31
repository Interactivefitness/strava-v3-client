# Contributing to the strava v3 client module

We are glad you want to contribute to the strava v3 client module! The first
step is the desire to improve the project.

## Quick-contribute

* Create an issue on the github [issue tracker](https://github.com/interactivefitness/strava-v3-client/issues)
* Link to your patch as a rebased git branch or pull request from the ticket

We regularly review contributions and will get back to you if we have
any suggestions or concerns.

### Branches and Commits

You should submit your patch as a git branch named after the change.

It is a best practice to have your commit message have a _summary
line_, followed by an empty line and then a brief description of
the commit. This also helps other contributors understand the
purpose of changes to the code.

### Github and Pull Requests

We don't require you to use Github, and we will even take patch diffs
attached to tickets on the issue tracker. However Github has a lot of
convenient features, such as being able to see a diff of changes
between a pull request and the main repository quickly without
downloading the branch.

## Functional and Unit Tests

This project is setup to run tests using Jest.

If any don't pass, investigate them before submitting your patch.

Please do not modify the version number in the package.json the maintainer
will select the appropriate version based on the release cycle
information above.

Please do not update the CHANGELOG.md for a new version. Not all
changes to a module may be merged and released in the same versions.
We will update the CHANGELOG.md when releasing a new version of
the module.
