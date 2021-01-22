[![GitHub Build Status](https://img.shields.io/github/workflow/status/okta/odyssey/preview)](https://img.shields.io/github/workflow/status/okta/odyssey/preview)
![Lerna Version](https://img.shields.io/github/lerna-json/v/okta/odyssey)
![Odyssey supports WCAG 2.0 AA standards](https://img.shields.io/badge/wcag-2.0%20AA-informational)
![Odyssey supports WCAG 2.0 AA standards](https://img.shields.io/badge/license-Apache%202.0-informational)

# Odyssey Design System

This repository contains the code for Okta's Design System Odyssey. It includes SCSS, Icons, Web, and React Components used to build products and experiences at Okta.

## Packages

| Package/README                                                                                                        | Description                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [@okta/odyssey](https://github.com/okta/odyssey/tree/master/packages/odyssey/README.md)                               | Odyssey SCSS, includes components, includes base and reset styles.       |
| [@okta/odyssey-icons](https://github.com/okta/odyssey/tree/master/packages/odyssey-icons/README.md)                   | Odyssey SVG icons.                                                       |
| [@okta/odyssey-web-components](https://github.com/okta/odyssey/tree/master/packages/odyssey-web-components/README.md) | Odyssey web components built using [Stencil.js](https://stenciljs.com/). |
| [@okta/odyssey-react](https://github.com/okta/odyssey/tree/master/packages/odyssey-react/README.md)                   | Odyssey react built using [React](https://reactjs.org/).                 |

## Git Workflow
This project takes care to use standard gitflow workflow with minor exceptions.

### Branches
- `master` is our "final" production codebase, code in here is tagged with a semver and release notes. Merge rights here are restricted to certain team members (or in this instance, me alone, because its a technical exercise, not a real live production project, but humor me here...)
- `develop` is a working branch which contains the latest working code from different branches. A pull request is required to merge in to this branch
- `feature/${branch-name}` the feature prefix is reserved for new feature work
- `bugfix/${branch-name}` the bugfix prefix is reserved for existing features that have bugfixes

Additionally, `refactor` and `hotfix` branches may be necessary in certain instances. Use at your discression.

### tl;dr
```

           -▸ develop --▸ feature/branch-name --▸ | --▸ commit #1
                 ▲                                | --▸ commit #2
                 |                                | --▸ commit #3
  Squash & Merge |                                | --▸ commit #4
                 |                                ▼
                 ╰--------- Pull Request ---------╯

```

## Browser Support
Odyssey browser support mirrors Okta's [Supported platforms, browsers, and operating systems](https://help.okta.com/en/prod/Content/Topics/Miscellaneous/Platforms_Browser_OS_Support.htm) and is as follows:

| Browser              | Support Policy                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Internet Explorer 11 | Supported for the desktop mode of Windows 8. Metro Mode is not supported.                                               |
| Edge                 | Latest public version supported.                                                                                        |
| Chrome               | Latest public version supported.                                                                                        |
| Safari               | Latest public version supported.                                                                                        |
| Firefox              | Latest public version for Rapid Release supported. <br /> Latest public version for Extended Support Release supported. |

## Contributing

## Licenses

All source code, imagery, and icons fall under the [Apache Version 2.0 License](https://github.com/okta/odyssey/blob/master/LICENSE).

## Feature Requests, Bugs & Feedback

### Oktanauts
- Log an issue in in JIRA, use the `OKTA` project, and be sure to apply the `Team: UICore Odyssey` component and the apropriate issue type.
- Reach out to us directly in the [#odyssey](https://okta.slack.com/archives/C7T2H3KNJ) Slack channel.
- All other users please open a [GitHub issue](https://github.com/okta/odyssey/issues/new/choose).

## Thank you

If you read this whole thing, thank you! 🌟
