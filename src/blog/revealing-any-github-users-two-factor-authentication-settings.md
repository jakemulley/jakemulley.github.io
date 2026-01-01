---
title: Revealing any GitHub user's two-factor authentication settings
date: 2021-08-15
---

_This vulnerability was responsibly disclosed via [GitHub's bug bounty program](https://hackerone.com/github). As this is now resolved, GitHub is happy for me to disclose this publicly._

## Summary

You could reveal whether or not any GitHub user has two-factor authentication on or off without relying on end-user interaction.

This vulnerability was found through the GitHub Enterprise administration panel.

### The vulnerability

GitHub Enterprise, similar to a GitHub organisation, allows you to enforce 2FA for all members and outside collaborators.

If you've had a GitHub Enterprise account for a long time and you want to enforce 2FA, you are likely to want to find out which users _don't_ currently have 2FA enabled. This allows you to reach out to team members, and ask them to enable 2FA before you enforce it organisation or Enterprise wide, so you don't break their workflow. For example, the user might be using old-fashioned username and passwords for authentication on the command line, rather than a personal access token.

GitHub helps you do this by showing each organisation members 2FA status, like this:

<img src="/images/gh-vulnerability-2fa-enabled.png" srcset="/images/gh-vulnerability-2fa-enabled.png 2x" alt="A screenshot of a GitHub user panel, showing that I had two-factor security enabled whilst part of an organisation">

Whilst this is appropriate and useful within your own organisation, this is where the vulnerability lies: this particular page didn't check if you had permission to view 2FA details about the user you're viewing.

The URL of this page is:

```bash
https://github.com/enterprises/${enterpriseSlug}/outside_collaborator/${githubUsername}
```

This vulnerability lets you change `${githubUsername}` to any GitHub user to reveal their 2FA position. For example, the URL for _Fake Enterprise_ with a outside collaborator _jakemulley_ would be:

```bash
https://github.com/enterprises/fake-enterprise/outside_collaborator/jakemulley
```

If I wasn't affiliated to the organisation and had 2FA off, it would show the following:

<img src="/images/gh-vulnerability-2fa-disabled.png" srcset="/images/gh-vulnerability-2fa-disabled.png 2x" alt="A screenshot of a GitHub user panel, showing that I had two-factor security enabled whilst part of an organisation">

I _responsibly_ validated this by using my [partner's](http://thatscotdatasci.com) GitHub username, with his permission, as an example.

That's it - a rather simple vulnerability thanks to the beauty of guessable and hackable URLs 🤷

## Timeline

- 2021-08-04 - Reported
- 2021-08-05 - Vulnerability validated by GitHub
- 2021-08-10 - Severity and impact assessed by GitHub
- 2021-08-10 - Resolved

## Resolution

This was resolved rather quickly - from report to resolution, it was 6 days. That's pretty good.

This was my first time reporting a vulnerability via HackerOne. I'm not a cyber-security expert, and I had no idea what [CVSS](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) score I should have used for this. I didn't even know what weakness it really was. I initially disclosed it as severity: Low, and weakness: Information Disclosure.

After validating the vulnerability, GitHub proactively changed the severity to Medium, and the weakness to Missing Function Level Access Control.

GitHub's process for assessing vulnerabilities is thorough, to help them determine the appropriate bounty, the severity and the weakness:

- they require _at least_ two GitHub security engineers to agree on the severity **and** the bounty amount
- they use several factors to do it, including, but not limited to:
  - potential exposure
  - how simple or complex the vulnerability is to exploit
  - percentage of impacted users and systems

This gave me the confidence that actually - if I had got it wrong (which I did), they'd help rectify the severity and weakness... and the bounty amount 🤑.

## Outcome

For them:

- Vulnerability resolved ✅

For me:

- Free GitHub Pro ✅
- Free GitHub swag ✅
- A cool new GitHub badge ✅ ("[Security Bug Bounty Hunter](https://bounty.github.com)")
- An undisclosed bounty 🤑
