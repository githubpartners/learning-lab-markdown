# Security strategy essentials

_Learn security best practices and keep your project’s contributions—and contributors—safe._

![](https://repository-images.githubusercontent.com/217131252/e134dd00-57fa-11ea-9b3d-5e0060cd29ab)

**Tags**: Security, Dependency management, Rebasing, Auditing, Dependabot

---

## Update the dependency

Next, we'll go through the GitHub Flow to make some changes. If you aren't sure how to do this, try the [Introduction to GitHub course](https://lab.github.com/githubtraining/introduction-to-github) and then come back to give it another try.

> _Note: For production code, it's a good idea to do some integration testing to make sure that the upgraded package works with your code. Good unit tests and Continuous Integration (CI) will help you update with confidence. The Learning Lab course [GitHub Actions: Continuous Integration](https://lab.github.com/githubtraining/github-actions:-continuous-integration) can teach you how to set up CI!_

## Step 4: Updating dependency versions

Now that you know the recommended version, it's time to edit the `package.json` file. You'll upgrade the package to a non-vulnerable version.

### :keyboard: Activity: Update the `package.json` file

1. Within this pull request, go to **Files changed**.
1. Click the ellipsis (`...`) in the right upper corner and click **Edit file** to edit the `package.json` file.
1. Fix the vulnerability by updating to the latest version of the dependency that you took note of earlier, version `2.6.9` of `debug`.
1. Scroll down, and commit your change.


## :tada: Welcome to security strategy essentials!

In this course, you'll learn how to build and host a secure repository in GitHub.  A secure repository is important for many reasons, including:
- Prevents exposing sensitive data
- Enforces secure development best practices
- Guards against unintended access rights and permissions

In this course you will learn how to:

- Opt-in to security alerts for private repositories
  - _Note: Vulnerability monitoring and security alerts are enabled by default for public repositories that are not forks._
- Fix vulnerable dependencies when notified by a security  alert
- Automate security fixes with Dependabot
- Follow security best practices to protect sensitive data by using a `.gitignore` file
- Remove sensitive data and files committed to a repository

### New to GitHub?

For this course, you'll need to be comfortable with the GitHub Flow. If you need a refresher on the GitHub flow, check out the [the Introduction to GitHub course]({{ host}}/courses/introduction-to-github).

## Step 1: Your project on GitHub Pages

This project is centered around a memory game that will be deployed with GitHub Pages.

{% if private %}

### :keyboard: Activity: Enable vulnerability alerts & GitHub Pages


1. Click the [**Settings**]({{ repoUrl }}/settings) tab in your repository.
1. Scroll down until you see **Data services**.
1. Under **Data services**, click the check boxes to enable all the data services.
2. Scroll down to **GitHub Pages** and set your [default branch as the source](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), usually `main`.

{% else %}

### :keyboard: Activity: Enable GitHub Pages


1. Click the [**Settings**]({{ repoUrl }}/settings) tab in your repository.
2. Scroll down to **GitHub Pages** and set your [default branch as the source](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), usually `main`.

{% endif %}


> Turning on GitHub Pages creates a deployment of your repository. I may take up to a minute to respond as I await the deployment.

<hr>
<h3 align="center">Return to this issue for my next comment.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds. Then refresh the page for your next steps._


## Finding vulnerable dependencies

Security vulnerabilities can cause a range of problems for your project or the people who use it.  A vulnerability could affect the confidentiality, integrity, or availability of a project.  Sometimes vulnerabilities aren't in the code you write, but in the code your project depends on. Staying up-to-date with the most recent versions is the best line of defense, but has the potential to cause integration issues, so GitHub alerts you of the safest next-version of a dependency.

This repository has some existing dependencies which will need updating to stay secure.

<details>
  <summary>How can we identify dependencies and if they are vulnerable?</summary>
  <hr>

This repository is a Node.js project utilizing NPM. Because of that, [`package.json`]({{ repoUrl }}/blob/main/package.json) defines this repository's dependencies.  For our time together, we'll be focusing on these JavaScript dependencies. Keep in mind that different programming languages may have different dependency manifests. You might work with a `Gemfile`, `Gemfile.lock`, `*.gemspec`, `requirements.txt`, `pipfile.lock`, or other files.

How can we know these dependencies are secure? GitHub monitors a number of reputable [data sources](https://docs.github.com/en/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies) to track vulnerabilities across projects.

  <hr>
</details>

### GitHub's security alerts for vulnerable dependencies

You may notice some alerts from GitHub about this repository. You may get an email, or see a yellow bar warning you about the `package.json` file.

![dependency vulnerability alert](https://user-images.githubusercontent.com/9906718/46882979-c275b680-ce50-11e8-9f47-2081daf20b98.png)

GitHub tracks vulnerabilities for a number of supported languages and their associated [package ecosystems](https://docs.github.com/en/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems), including RubyGems, NPM, Python PIP, Maven, and .NET.

GitHub receives a notification of a newly-announced vulnerability. Next, we check for repositories that use the affected version of that dependency. We send security alerts to a set of people within those affected repositories. The owners are contacted by default and it's possible to configure specific teams or individuals to get these important notifications.

**GitHub never publicly discloses identified vulnerabilities for any repository.**

## Step 2: Find this repository's vulnerable dependencies

Use Dependabot alerts to identify a vulnerable NPM dependency.

### :keyboard: Activity: Identify the suggested version update

1. Click the **Security** tab in your repository.
2. On the left hand navigation bar, click **Dependabot alerts**.
3. Follow the instructions to enable Dependabot alerts, if they're not already enabled. 
4. Click on the `debug` alert.
5. Take note of the suggested version.
6. Comment in this issue with the suggested update version.


> _**GitHub Enterprise Server only:** This is all possible on GitHub Enterprise through GitHub Connect. It may take up to an hour to refresh the alerts and make them visible. After waiting a reasonable amount of time, if you are still not seeing the yellow bar in the Dependency Graph, you may want to contact your administrator. In the mean time, to move along with the course, we'll give you a hint - the recommended upgraded version is `2.6.9`._

<hr>
<h3 align="center">Return to this issue for my next comment.</h3>


Great work. Make sure to complete the first few steps in your settings. Then, you should be able to see your published [memory game on GitHub Pages]({{ pagesUrl }}).

<hr>
<h3 align="center">I've opened <a href="{{ url }}">another issue with the next steps.</a></h3>


Nice work!

<hr>
<h3 align="center">I've opened a <a href="{{ repoUrl }}/pull/1">pull request with your next steps.</a></h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

If this is a pull request, so you can keep editing the file here. Keep trying, you'll get there!

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 3: Merge this pull request

Great job, @{{ user.username }}, your pull request looks good. Thank you for fixing the vulnerable dependency!

_Note: You might notice that this repository has a `package.json` file, but no `package-lock.json` file. In production code it's a good idea to have both files to avoid conflicts resolving the proper version of a dependency. For simplicity, we'll use only `package.json`, but GitHub monitors both files in addition to the gamut of supported languages and packages_

### :keyboard: Activity: Merge
1. Merge this pull request.


Oh no! @{{ user.username }}, it looks like you have accidentally closed this issue. To complete this activity, please use the instructions provided to close this issue in its correct sequence of steps. I'll open it again for you.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Automated dependency updates with Dependabot

Manually going through your dependencies for alerts and outdated versions is tedious work. Let's automate this process!

**Meet Dependabot**

![Dependabot icon](https://user-images.githubusercontent.com/6351798/67623352-53f86200-f7e1-11e9-957d-47bb009f030f.png)

Dependabot alerts you and creates pull requests to keep your dependencies secure and up-to-date!

### How does Dependabot work?

Dependabot is the actor for GitHub's [automated security updates](https://docs.github.com/en/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates). 

1. GitHub uses the dependency graph and security alerts to scan your repository and notify you of potential dependency updates
1. If any dependencies are out-of-date, Dependabot opens a pull request to update each one
1. If tests pass, and the updated version looks good, you simply merge the pull request

### Configuring Dependabot security updates

You can enable automated security updates for any repository that uses security alerts and the dependency graph. You can disable automated security updates for an individual repository or for all repositories owned by your user account or organization. GitHub will automatically enable automated security updates in every repository that uses security alerts and the dependency graph.

![screenshot of a Dependabot alert, showing debug dependency](https://user-images.githubusercontent.com/6351798/67711794-5c3ed180-f988-11e9-97ba-41451996a2fb.png)

Here, we have a security alert on the **debug** dependency. Clicking on **debug** will show you the pull request created by Dependabot to update the dependency. We just updated to `2.6.9` but Dependabot noticed we are still outdated.

If you navigate to your [closed pull requests]({{ repoUrl }}/pulls?q=is%3Apr+is%3Aclosed), you'll notice Dependabot has done its job and is trying to bump, or update, the version of `debug`.

## Close this issue when done

<hr>
<h3 align="center">I'll respond below when you close the issue.</h3>


Nice job merging @{{ user.username }}. Go ahead and delete the branch.

<hr>
<h3 align="center">Let's see how we can automate this process. Navigate to <a href="{{ url }}">your next issue.</a></h3>


## Adding a security policy

Just like most repositories have a `README.md` file to provide instructions on how to contribute to the repository, a `SECURITY.md` file highlights security related information and instructions on how to handle security related issues and best practices.

This gives collaborators the important security information they need, but it also documents a place where maintainers can think about how they should deal with security disclosures, updates, and general security practices within this repository.

### What should I include in my security policy?

Just like a `README.md` file, it really depends on your repository and the requirements and workflows. Here are a few common topics that are documented in a security policy:

- Supported versions
- How to responsibly report a security vulnerability
- Security related configuration
- Known security gaps and future enhancements


## Step 6: Add a SECURITY.md file

1. Navigate to the [Security]({{ repoUrl }}/network/alerts) tab
1. Click on Security Policy located in the left sidebar
1. Click the **Start Setup** button
1. Commit the template security policy to the new branch as selected `{{ user.username }}-patch-1`
1. Commit the new file and create the pull request

Alternatively, you could also create a new file in the root directory called `SECURITY.md`, write up a quick security policy, and open a pull request. 

<hr>
<h3 align="center">I'll respond in your pull request with next steps.</h3>


Nice job getting to know Dependabot.


<hr>
<h3 align="center">Let's learn about adding a <code>SECURITY.md</code> policy to your repository. Navigate to your <a href="{{ url }}">next issue.</a></h3>


Nice work opening this pull request. I went ahead and approved it, go ahead and merge when ready.

### :keyboard: Activity: Merge
1. Merge this pull request.

<hr>
<h3 align="center">I'll respond below when merge your pull request.</h3>


Oh no! @{{ user.username }}, it looks like you have accidentally closed this pull request. To complete this activity, please use the instructions provided to close this issue in its correct sequence of steps. I'll open it again for you.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


### Game update

By popular demand, this pull request adds the wolverine image to the game:

![xtocat](https://octodex.github.com/images/xtocat.jpg)


## Removing sensitive information

A contributor opened a pull request to add a new image to the memory game. However, it appears that this contributor also committed a sensitive `.env` file that shouldn't be included. Contributors may commit sensitive information by accident or on purpose without knowing the consequences of these actions.

Before we approve this pull request and merge it in, we need to remove this sensitive `.env` file from the pull request.

## Step 8: Remove sensitive data in a pull request

We can do this by cloning this repository to our computer, and then running a few local Git commands before pushing up a fix on the contributor's branch on GitHub.

1. Clone this repository locally by running `git clone {{ repoUrl }}.git`
1. CD into your newly cloned repository with `cd security-strategy-essentials`
1. Checkout to the contributor's branch with `git checkout add-wolverine-image`
1. Remove the unwanted commit that introduced the `.env` file with a rebase. You can do this with `git rebase -i main` and then remove the entire commit so only the `Add wolverine image to game` commit remains
1. Run `git push -f` to force push your changes to the branch on GitHub

<hr>
<h3 align="center">I'll respond below when you push up a fix to remove the `.env` file.</h3>


Nice, @{{ user.username }}! Go ahead and delete the branch.

You can view your newly published [security policy]({{ repoUrl }}/security/policy) in the Security tab.

<hr>
<h3 align="center">Find your <a href="{{ url }}">next pull request here.</a></h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


Nice job removing that `.env` file!

Notice that the commit has been removed from the pull request and that the file no longer persists in the "files changed" tab. **You may need to refresh your page to see the previous commits disappear.**

However, even though we removed the commit, the historical reference to this commit can still be found if you know the commit id. In a real world situation, you'll need to contact **GitHub Support** to perform the following:

- Run garbage collection on the repository to remove the unreferenced commit(s)
- Invalidate the Git cache

For our situation, we can skip contacting GitHub Support for this example! :smile:

Now that the sensitive information has been removed, let's now approve this contributor's pull request

## Step 9: Approve the pull request
1. Approve this pull request.

<hr>
<h3 align="center">I'll respond below when I see your approval.</h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

### Hint:
Make sure you approve this pull request.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


Removing the previous `.env` file from the branch is great, but it's reactive. We need to ensure future contributions don't include sensitive files by mistake. We can do this by adding a `.gitignore` file to our repository.

## Taking advantage of the `.gitignore` file

From time to time, there are files you don't want Git to check in to GitHub. You may want to ignore files that contain sensitive credentials or information which should not be pushed to your repository. There are a few ways to tell Git which files to ignore.

### Ignoring files

Git uses a file called `.gitignore` to decide which files and directories to ignore when committing.  Keep files containing sensitive data, like configuration or `.env` files, out of your repositories. This is one way to promote security best practices.

The `.gitignore` file can, and should, be committed into your repository.  By sharing this file and making it part of your code, future contributors to the repository will avoid committing sensitive data. There are many examples of `.gitignore` files available for you to use in your own repositories. You can find them in the [gitignore](https://github.com/github/gitignore) repository.

## Step 10: Add a `.gitignore` file

In this pull request, I'm adding a `.gitignore` file. Files ending with `.env` commonly include sensitive data. This helps you keep files with sensitive data secure and private. Let's add those files to the `.gitignore`.

### :keyboard: Activity: Updating the .gitignore file

1. Within this pull request, go to **Files changed**.
1. Click the ellipsis (`...`) in the right upper corner and click **Edit file** to edit the `.gitignore` file.
1. Edit the file by adding `.env` to line 1.
1. Scroll down, and commit your change.

 > _Note: Even after adding a file to the `.gitignore`, the previous commits that have edited that file still exist. If you accidentally committed sensitive data, first change any tokens or passwords. Then, contact GitHub Support for help correcting your history._


<hr>
<h3 align="center">Return to this pull request for my next comment.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds. Then refresh the page for your next steps._


Nice job removing that `.env` file and approving the game update from a contributor!

With your approval, I merged in the pull request!

<hr>
<h3 align="center">Let's now learn about adding a <code>.gitignore</code> file in your <a href="{{ url }}">next pull request.</a></h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

### Hint:
It looks like you've made a commit but there's still something not right about the `.gitignore`. Did you include the `.env` file?

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


This looks great @{{ user.username }}, thanks for adding a `.env` file to the `.gitignore`. Feel free to add any other file or potential sensitive data to the `.gitignore` file.

### :keyboard: Activity: Merge
1. Merge this pull request.

> _Sometimes I respond too fast for the page to update! You may need to refresh the page before you can merge._


It looks like you have accidentally closed this pull request. To complete this activity, please use the instructions provided to try again. I've reopened it so you can continue.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Sensitive data elsewhere in the repository contents

Often sensitive data is buried deep in a repository's history. The process for removing these files and commit data is a bit tricker and more involved.

In our repository's history, there is a reference to a `.env` file with sensitive information. We've since added a `.gitignore` to prevent this from happening in the future, but it doesn't modify any previously committed references from the history.

There are a few things we need to think about and take into consideration before we start altering our historical content. But for now, let's start with identifying the commit in question by going through our commit history.

## Step 12: Find historical reference to a previous `.env` file

1. Navigate to the Code tab of the repository and click on the `commits` link directly under the Code tab
1. Scanning through the commit history, locate the commit that added the `.env` file
1. Copy and paste the commit SHA ID as a comment in this issue

<hr>
<h3 align="center">I'll respond below when you add your comment to this issue.</h3>


Nice work, @{{ user.username }}! Go ahead and delete the branch.

<hr>
<h3 align="center">We have one more thing to take care of. Let's go to your <a href="{{ url }}">next issue here.</a></h3>


Good guess, but the commit SHA ID that added the `.env` file is 848cd8c2043f6161a4f0043bffee212777281494

Try typing that commit id in a comment to move on.

<hr>
<h3 align="center">I'll respond below when I see your comment</h3>


Nice, that's the commit that added the `.env` file. We'll need to remove the contents of this commit, as well as the commit that removed it from the history.

## Step 13: Remove historical reference to a previous `.env` file

We can do this with the following commands:

1. Since we cloned the repository earlier, let's run `git checkout main` to put us back on the main branch
1. Run `git pull` to update your local repository with the changes we merged from the contributor's pull request
1. Run `git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD` to remove the historical reference to the `.env` file

  **Note:** There is a lot going on with this command. We won't be diving into everything this command is doing, but it's filtering through the main branch and removing any cached reference to a `.env` file.

1. Next, let's run `git push -f` to force push this change to the main branch
1. Let's now run `git log --oneline` to get a list of our modified commit history
1. Paste your log output into this issue as a comment

<details>
  <summary>Here is an example of a log output using `git log --oneline`:</summary>
  <hr>

```
d27dde6 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #8 from {{ user.username }}/add-gitignore
65c1b71 Update .gitignore
a9b1b74 Merge add-wolverine-image into main
e2262cd Add wolverine image to game
9414843 Merge pull request #6 from {{ user.username }}/a-a-ron-patch-1
16d5372 Create SECURITY.md
28b3625 Merge pull request #1 from {{ user.username }}/update-dependency
3f7b819 Update package.json
e9ae69a Change package.json file to highlight where dependency update should go
831b1d1 Add empty .gitignore file
78cfef0 Remove .env file
8f08f15 Add .env file
e6e2377 Update README.md and Octocat game
528248c Initial commit
```
  <hr>
</details>

<hr>
<h3 align="center">I'll respond below when I see your comment</h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

### Hint:
Make sure you use one of the below commands to remove reference to these commits.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Nice work

![celebrate](https://octodex.github.com/images/Fintechtocat.png)

Congratulations @{{ user.username }}, you've completed this course! You can see your published [memory game on GitHub Pages]({{ pagesUrl }}) with the updated wolverine image.

When considering the security of your repository, consider the installed applications, like me. Every app installed on your repository has access to some of your data. Even if it is harmless (like me), it is a good idea to periodically check and prune the list of installed apps and integrations on your repositories. Look for things like active use, or permissions giving more access than necessary.

## In summary

We learned how to:

- Enable vulnerable dependency detection for private repositories
- Detect and fix outdated dependencies with security vulnerabilities
- Automate the detection of vulnerable dependencies with Dependabot
- Add a security policy with the a `SECURITY.md` file
- Remove a commit exposing sensitive data in a pull request
- Keep sensitive files out of your repository by leveraging the use of a `.gitignore` file
- Remove historical commits exposing sensitive data deep in your repository

### What's next?

Want to learn more options to secure your repository? Check out the [documentation for security alerts](https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies/), as well as some [GitHub apps for security](https://github.com/marketplace/category/security) that might help you keep your code safe.

### Keep Learning

Want to keep learning? Feel free to [check out our other courses]({{ host }}/courses).

<hr>
<h3 align="center">I won't respond to this issue, go ahead and close it when finished.</h3>


Nice, your log output is no longer showing reference to those previous commits. So, what exactly just happened?

### Our commit history has been modified

You probably noticed that when you ran the `git filter-branch` command, Git did some rewriting to some commits in the repository's history. Since we needed to alter the commits that referenced the `.env` file, it altered the commit ID, and all proceeding commits that point back to those commits.

This is why you need to consider local work and branches that are based on this previous history. This is okay to run, as long as everyone contributing in the repository is aware of the situation and can plan accordingly.

### Is the sensitive information gone?

Those commits no longer show in the file contents in your repository history. You can see this by navigating to your <a href="{{ repoUrl }}/commits/main">repository's commit history</a> and clicking on the "Add .env file" commit. Notice that there are now no referenced files or content recorded.

However, we can still access the cached commit if we know the old commit ID: {{ repoUrl }}/commit/848cd8c2043f6161a4f0043bffee212777281494

### Removing the old cached commits

This is where we'll need to contact the amazing GitHub Support team for assistance.

Even though we removed these commits, the historical reference to them can still be found if you know the commit ID. In a real world situation, you'll need to contact **GitHub Support** to perform the following:

- Run garbage collection on the repository to remove these unreferenced commit(s)
- Invalidate the Git cache to permanently remove any cached references

For our situation, we can skip contacting GitHub Support for this example! :smile:

<hr>
<h3 align="center">Find your final issue <a href="{{ url }}">here</a> now.</h3>


