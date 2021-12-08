# Securing your workflows

_Learn security best practices and keep your project’s contributions—and contributors—safe._

![](https://repository-images.githubusercontent.com/146712073/d450d180-586c-11ea-970c-db8c045bb792)

**Tags**: Git, GitHub

---

This course will show you how to build, host, and maintain a secure repository on GitHub. By following simple security best practices, you can rest easy knowing your project is secure for contributors and contributions today and in the future.

Collaboration is key to building great software. As you welcome more contributions, keeping your project secure becomes more important than ever.

## What you'll learn

In this course, you’ll learn how to:
- Enable security features for repositories hosted in GitHub
- Detect vulnerable dependencies in repositories when notified by GitHub's security alerts
- Utilize best practices to keep sensitive data out of repositories

You'll be able to answer questions like:

- How do I protect my open-source project?
- What should I keep out of my GitHub repository?
- How do I keep sensitive data out of my repository?
- How do I keep track of package vulnerabilities?

## What you'll build

Our [Octocat](https://octodex.github.com/) memory game is a fun simple project for you to work with as you learn security strategies.

![Screenshot_2020-02-25 Octocat Memory Game](https://user-images.githubusercontent.com/1221423/75282149-5f768c80-57c5-11ea-933f-f85c235b8178.png)

## What you need to know

We assume you know GitHub concepts before you start this course. If you need a review, try out [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github). We assume you understand what a package and [package manager](https://en.wikipedia.org/wiki/Package_manager) or dependency manager is.

## What we'll use

This project can use GitHub pages to host the memory game. The game uses some minimal JavaScript and CSS. You don't need to work with either in this course. You won't need to do anything outside of the GitHub interface for this course.

## Who this is for

This is a great course for anyone who has a GitHub repository, public or private. These practices will help keep your project safe. This is also a great course for anyone who wants to start a new project on GitHub.


---

## Update the dependency

Next, we'll go through the GitHub Flow to make some changes. If you aren't sure how to do this, try the [Introduction to GitHub course](https://lab.github.com/githubtraining/introduction-to-github) and then come back to give it another try.

> _Note: Before doing this with real world code, make sure that the upgraded package works with your code. Good unit tests and CI (continuous integration) will help you update with confidence._

## Step 4: Updating dependency versions

Now that you know the recommended version, it's time to edit the `package.json` file. You'll upgrade the package to a non-vulnerable version.

### :keyboard: Activity: Update the `package.json` file

1. Within this pull request, go to **Files changed**.
1. Click the ellipsis (`...`) in the right upper corner and click **Edit file** to edit the `package.json` file.
1. Fix the vulnerability by updating to the latest version of the dependency that you took note of earlier.
1. Scroll down, and commit your change.


## :tada: Welcome to Securing your workflows!

In this course, you'll learn how to build and host a secure repository in GitHub.  A secure repository is important for many reasons.
- Prevents exposing sensitive data
- Enforces secure development best practices
- Guards against unintended access rights permissions

In this course you will learn how to:

- Opt-in to vulnerability alerts for private repositories
  - _Note: These security settings are default for public repositories that are not forks._
- Detect and fix vulnerable dependencies when notified by a vulnerability alert
- Follow security best practices to protect sensitive data by using a `.gitignore` file

### New to GitHub?

For this course, you'll need to be comfortable with the GitHub Flow. If you need a refresher on the GitHub flow, check out the [the Introduction to GitHub course]({{ host}}/courses/introduction-to-github).

## Step 1: Your project on GitHub Pages

This project is centered around a memory game that will be deployed with GitHub Pages.

{% if private %}

### :keyboard: Activity: Enable vulnerability alerts & GitHub Pages


1. Click the [**Settings**]({{ repoUrl }}/settings) tab in your repository.
1. Scroll down until you see **Security & Analysis** in the navigation side bar.
1. Under **Security & Analysis**, click the check boxes to enable all the data services.
1. Scroll down to **GitHub Pages** and select `main` as a **Source**.

{% else %}

### :keyboard: Activity: Enable GitHub Pages


1. Click the [**Settings**]({{ repoUrl }}/settings) tab in your repository.
1. Scroll down to **GitHub Pages** and select `main` as a **Source**.

{% endif %}

For a printable version of the steps in this course, check out the [Quick Reference Guide]({{ host }}/public/{{ course.slug }}.pdf).

> Turning on GitHub Pages creates a deployment of your repository. I may take up to a minute to respond as I await the deployment.

<hr>
<h3 align="center">Return to this issue for my next comment.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds. Then refresh the page for your next steps._


## Taking advantage of the `.gitignore` file for security

From time to time, there are files you don't want Git to check in to GitHub. You may want to ignore files that contain sensitive credentials or information which should not be pushed to your repository. There are a few ways to tell Git which files to ignore.

### Ignoring files

Git uses a file called `.gitignore` to decide which files and directories to ignore when committing.  Keep files containing sensitive data, like configuration or `env` files, out of your repositories. This is one way to promote security best practices.

The `.gitignore` file can, and should, be committed into your repository.  By sharing this file and making it part of your code, it will also help others. Other users that contribute to the repository will also avoid committing sensitive data. There are many examples of `.gitignore` files available for you to use in your own repositories. You can find them in the [gitignore](https://github.com/github/gitignore) repository.

## Step 5: Ignore files

In this pull request, I'm adding a `.gitignore` file. Files ending with `.env` commonly include sensitive data. This helps you keep files with sensitive data secure and private. Let's add those files to the `.gitignore`.

### :keyboard: Activity: Updating the .gitignore file

1. Within this pull request, go to **Files changed**.
1. Click the ellipsis (`...`) in the right upper corner and click **Edit file** to edit the `.gitignore` file.
1. Edit the file by adding `.env` to line 1.
1. Scroll down, and commit your change.

 > _Note: Even after adding a file to the `.gitignore`, the previous commits that have edited that file still exist. If you accidentally committed sensitive data, first change any tokens or passwords. Then, contact GitHub Support for help correcting your history._

For a printable version of the steps in this course, check out the [Quick Reference Guide]({{ host }}/public/{{ course.slug }}.pdf).

<hr>
<h3 align="center">Return to this pull request for my next comment.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds. Then refresh the page for your next steps._


## Finding vulnerable dependencies

Security vulnerabilities can cause a range of problems for your project or the people who use it.  A vulnerability could affect the confidentiality, integrity, or availability of a project.  Sometimes vulnerabilities aren't in the code you write, but in the code your project depends on. Staying up-to-date with the most recent versions is the best line of defense.

This repository has some existing dependencies which will need updating to stay secure.

### How can we identify dependencies and if they are vulnerable?

This repository is a Node.js project utilizing NPM. Because of that, the `package.json` defines this repository's dependencies.  For our time together, we'll be focusing on these JavaScript dependencies. Keep in mind that different programming languages may have different dependency files. You might work with a `Gemfile`, `Gemfile.lock`, `*.gemspec`, `requirements.txt`, `pipfile.lock`, or other files.

How can we know these dependencies are secure? It's not always easy, but GitHub is watching out.

### GitHub's security alerts for vulnerable dependencies

You may notice some alerts from GitHub about this repository. You may get an email, or see a yellow bar warning you about the `package.json` file.

![dependency vulnerability alert](https://user-images.githubusercontent.com/9906718/46882979-c275b680-ce50-11e8-9f47-2081daf20b98.png)

GitHub tracks public vulnerabilities in Ruby gems, NPM, Python, Java, and .Net packages.

GitHub receives a notification of a newly-announced vulnerability. Next, we check for repositories that use the affected version of that dependency. We send security alerts to a set of people within those affected repositories. The owners are contacted by default. But, it's possible to configure specific teams or individuals to get these important notifications.

**GitHub never publicly discloses identified vulnerabilities for any repository.**

## Step 2: Find this repository's vulnerable dependencies

Use GitHub's security alerts to identify a vulnerable NPM dependency.

### :keyboard: Activity: Identify the suggested version update

1. Click the **Insights** tab in your repository.
2. On the left hand navigation bar, click **Dependency graph**.
3. Scroll down until you see a yellow bar highlighting the dependency named `debug`, and click on the right hand side of the yellow `debug` section.
4. Take note of the suggested version.
5. Comment in this issue with the suggested update version.


> _**GitHub Enterprise Server only:** This is all possible on GitHub Enterprise through GitHub Connect. It may take up to an hour to refresh the alerts and make them visible. After waiting a reasonable amount of time, if you are still not seeing the yellow bar in the Dependency Graph, you may want to contact your administrator. In the mean time, to move along with the course, we'll give you a hint - the recommended upgraded version is `2.6.9`._

For a printable version of the steps in this course, check out the [Quick Reference Guide]({{ host }}/public/{{ course.slug }}.pdf).

<hr>
<h3 align="center">Return to this issue for my next comment.</h3>


Great work. Make sure to complete the first few steps in your settings. Then, you should be able to see your published [memory game on GitHub Pages]({{ pages }}).

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

_Note: You might notice that this repository has a `package.json` file, but no `package-lock.json` file. We are doing all parts of this activity on GitHub.com. If you work with other repositories, you might notice some differences. Regardless of what dependency files you use, the main concepts of this course still apply._

### :keyboard: Activity: Merge
1. Merge this pull request.


Oh no! @{{ user.username }}, it looks like you have accidentally closed this issue. To complete this activity, please use the instructions provided to close this issue in its correct sequence of steps. I'll open it again for you.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


Nice job merging @{{ user.username }}. Go ahead and delete the branch.

<hr>
<h3 align="center">Let's learn about <code>.gitignore</code> files in the <a href="{{ repoUrl }}/pull/3">next pull request.</a></h3>


Uh oh @{{ user.username }}, something went wrong! I wasn't expecting this change. Please go over the instructions again and make sure you've followed them as exactly as you can.

### Hint:
It looks like you've made a commit but there's still something not right about the `.gitignore`. Did you include the `.env` file?

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 6: Merge this pull request

This looks great @{{ user.username }}, thanks for adding a `.env` file to the `.gitignore`. Feel free to add any other file or potential sensitive data to the `.gitignore` file.

### :keyboard: Activity: Merge
1. Merge this pull request.


It looks like you have accidentally closed this pull request. To complete this activity, please use the instructions provided to try again. I've reopened it so you can continue.

If you would like help troubleshooting, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Nice work

![celebrate](https://octodex.github.com/images/benevocats.jpg)

Congratulations @{{ user.username }}, you've completed this course!

When considering the security of your repository, consider the installed applications, like me. Every app installed on your repository has access to some of your data. Even if it is harmless (like me), it is a good idea to periodically check and prune the list of installed apps and integrations on your repositories. Look for things like active use, or  permissions giving more access than necessary.

### Manage app permissions

As much as it pains me to leave you, I want you to uninstall me from this repository. I won't be able to congratulate you on achieving this task, but know I'm excited about your progress.

Follow the guidelines in [GitHub's documentation](https://help.github.com/articles/reviewing-your-authorized-integrations/#reviewing-your-authorized-github-apps) to review authorized OAuth and GitHub Apps. If you'd like to practice, you can uninstall Learning Lab from this repository.

### What went well

Before I say good-bye, here's a recap of all the tasks you've accomplished in your repository:

- Enable vulnerable dependency detection for private repositories
- Detect and fix outdated dependencies with security vulnerabilities
- Keep sensitive data out of your repository by leveraging the use of a `.gitignore` file

### What's next?

Want to learn more options to secure your repository? Check out the [documentation for security alerts](https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies/), as well as some [GitHub apps for security](https://github.com/marketplace/category/security) that might help you keep your code safe.

### Keep Learning

Want to keep learning? Feel free to [check out our other courses]({{ host }}/courses).

<hr>
<h3 align="center">I won't respond to this issue, go ahead and close it when finished.</h3>


Congratulations, you've done it @{{ user.username }}! Go ahead and delete the branch.

<hr>
<h3 align="center">Find your final issue <a href="{{ url }}">here</a> now.</h3>


