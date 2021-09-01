# Community starter kit

_There are millions of projects on GitHub, all competing for attention from the millions of open source contributors available to help. Learn how to help your project stand out._

![](https://repository-images.githubusercontent.com/139497182/9dc78680-586d-11ea-89da-f8fda1a0a468)

**Tags**: GitHub, Open Source

---

The open source community is full of the most passionate and talented people in the world. We know, because we work with them every day. Learn how to help the community find and contribute to your project.

In this course, you will learn about the informal standards the community has adopted to make it easier to find and contribute to projects.

## What you'll learn

- How to add metadata and help potential contributors find your project
- The standard files contributors will look for and what they should contain
- Tips for building a healthy, welcoming community
- Other ways you can make your project easy to use

## What you'll build

- You'll build a kit with your own, specialized documents and processes for launching your own community.

## Prerequisites

In this course you will work with issues and pull requests, as well as edit files. If these things are not familiar to you, we recommend you take the [Introduction to GitHub]({{ host }}/githubtraining/introduction-to-github) course, first!

## Projects used

This course uses many inspirations in the community for resources that you will customize and add as you learn.

## Audience

Developers, GitHub users, users new to Git, students, managers, teams, open source contributors, open source maintainers


---

## Meet Mona 

![Monalisa octocat: the original](https://octodex.github.com/images/original.png)

Mona is part of a growing team of developers. To help onboard new teammates, Mona has created a slick [Probot](https://probot.github.io/) app called **Welcome**. Welcome automatically generates friendly messages when new team members create their first issue and open or merge their first pull request. 

So far, Mona has been working with a few members of the team to fine-tune the app, but someone recommended they make the project open source so that other projects can start creating the same awesome experiences for first timers. Mona has never published an open source project before, so after receiving the OK from legal, Mona is looking for some help.

In this course, you will help Mona get the **Welcome-bot** repository ready for the open source community.

### What is Probot

Great question! [Probot](https://probot.github.io/) is an open source framework that allows you to create GitHub apps to automate your GitHub workflow. Probot is also an example of a great community - be sure to stop by and check them out.

### Our Goals

In this course, you will work with Mona to:

- Help others understand how they can use Mona's project
- Recognize the ways people may contribute
- Establish systems to organize contributions
- Set expectations for contributors
- Make Mona's project easy to find

### We :heart: welcome

We want to thank the maintainers of [**welcome-bot**](https://github.com/behaviorbot/welcome), an actual Probot app that welcomes new users, for graciously allowing us to use their awesome app for this course. After your open source project is up and running, we recommend you check out **welcome** and some of the other bots created by [the developers of behaviorbot](https://github.com/behaviorbot).

<hr>
<h3 align="center">Keep reading below to find your first task.</h3>


## Step 1: Add a Repository Description

First, let's focus on helping others understand Mona's project. After all, people are most likely to contribute to projects they use, so `no users === no contributors`.

Users should be able to understand the project at a glance, so let's start by adding a repository description and creating a `README.md`.

Mona is working on a first draft of the `README.md`. Can you help by adding a description to the repository? 

### :keyboard: Activity: Adding a repository description

![A GIF of this issue, scrolling up to the top of the page, clicking on the Code tab, clicking on Edit under the repository navigation tabs, entering a description and URL, and clicking Save](https://user-images.githubusercontent.com/16547949/77772617-d306f600-701e-11ea-89b7-caf8c2d3f1b2.gif)

1. Click on the [**Code**]({{ repoUrl }}) tab of your project.
2. Click the **Edit** button located on the right side of the screen (above the green **Clone or download** button).
3. Enter a description for your project in the **Description** field.
4. (Optional) If you have a website related to your project you can add it in the **Website** field.
5. Click the **Save** button.

{% if GHE_HOST %}

<hr>

> **Protip** If you're planning on publishing your repository on GitHub.com, the [Community profile](https://help.github.com/en/articles/about-community-profiles-for-public-repositories)  has helpful quick-links to complete many of the tasks in this course.

{% else %}

<hr>

> **Protip** If you are working in a public repository, GitHub has created a helpful [Community profile]({{ repoUrl }}/community) in the insights tab. The Community profile has helpful quick-links to complete many of the tasks in this course.

{% endif %}

<hr>
<h3 align="center">I will respond in this issue when you've edited your repository description.</h3>

> :robot: Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps.


## Step 2: Edit the README.md

:wave: @{{ user.username }}, Mona has created a README and needs your help making it great. :sparkles:

### Why you need a README.md

The `README.md` is the landing page for your project. It helps people understand, at a glance, whether your project is something that will be useful to them.

`README.md` files typically include information on:

- What the project does
- The features and benefits of the project
- How users can get started with the project
- Where users can get help with your project
- Who maintains and contributes to the project

### Check it out

Mona's `README.md` is missing some of the information above. Will you help Mona by replacing the placeholder text? I have suggested some changes below. Apply the suggested changes, or modify the file directly if you wish!

### :keyboard: Activity: Editing the README.md

You can follow the manual steps below, or accept the [suggested changes](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in the following comments.

1. Edit [`README.md`]({{ readmeUrl }}) on this branch, or manually change it in the **Files Changed** tab.
1. Find the two placeholder texts labeled **DESCRIPTION PLACEHOLDER** and **FEATURES PLACEHOLDER**.
1. Replace each placeholder with some bulleted information that may be helpful to new users.
1. After editing the `README.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


Write a great description here or accept this suggested change.

```suggestion
A GitHub App built with [probot](https://github.com/probot/probot) that celebrates new user activity within your repository.
```

Write your app's features here or accept this suggested change.

```suggestion
Welcome new users with maintainer defined comments the first time your users:
- Create a new issue
- Open a new pull request
- Merge their first pull request
```

Great work setting your repository description, @{{ user.username }}! Mona has finished the first draft of the README and has opened a pull request. Head over there now to see what's next. 

I'll close this issue since we don't need it anymore!

<hr>
<h3 align="center">Go to <a href="{{ store.readmePrUrl }}">the pull request</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

I was looking for you to replace the description placeholder, but it looks like it's still there. Writing a great :sparkles: project description can be intimidating. What do you think of something like this?

> A GitHub App built with [probot](https://github.com/probot/probot) that celebrates new user activity within your repository.

If you agree this is ok, do you mind adding it to the `README.md` in this pull request where Mona put the placeholder?

### :keyboard: Activity: Add a project description

You can accept the suggested changes, or make the change manually as follows:

1. Access the **Files changed** tab in this pull request.
2. Click the icon to the right of the file to edit the `README.md`.
3. Find the text marked **DESCRIPTION PLACEHOLDER** and add the text recommended above.
4. After editing the `README.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


I was looking for you to replace the features placeholder, but it looks like it's still there. Marketing gave us a with a few bullets for the features (they are so good at this stuff). Here is what they recommended:

> Welcome new users with maintainer defined comments the first time your users:
> - Create a new issue
> - Open a new pull request
> - Merge their first pull request

Do you mind adding it to the `README.md` in this pull request where Mona put the placeholder?

### :keyboard: Activity: Add project features

You can accept the suggested changes, or make the change manually as follows:

1. Access the **Files changed** tab in this pull request.
2. Click the icon to the right of the file to edit the `README.md`.
3. Find the text marked **FEATURES PLACEHOLDER** and add the text recommended above.
4. After editing the `README.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


## Step 3: Approve and merge the pull request.

This `README.md` is looking great! Let's go ahead and merge it. There's a lot more to do!

### :keyboard: Activity: Approve the pull request

1. Clicking on [this quicklink]({{ approveLink }})
1. Select **Approve**
1. Click **Submit review**.

You can also approve by clicking on **Files changed**, clicking on **Review changes**, selecting **Approve** and then **Submit review**.

<hr>
<h3 align="center">I'll respond when you've approved this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 4: Create user documentation

Well written user documentation is the key to a great user experience. Experts say, "if a user can't figure out how to use your project in less than an hour, they will move on." It pays to attract a few technical writers to your project. :wink:

<details>
<summary>Where to create your documentation</summary>
<hr>

 ### Where to create documentation

 Your user documentation should be easy for your users to find. Some prefer to keep it on an externally facing website while others will use a docs folder in their project or the repository wiki.

 #### Getting organized

 As an open source project becomes more popular and more sophisticated, some maintainers find it is easier to move their open source project into an a GitHub organization. This allows you to create separate repositories for your project's promotional website, documentation, source code, etc.

 <hr>
 </details>

### What to include

Documentation needs for open source projects will vary, but at a minimum you should include:

- [ ] Installation instructions
- [ ] Completing essential tasks
- [ ] Customizing and configuring

Will you help Mona ensure the documentation covers these minimum topics?

### :keyboard: Activity: Creating user documentation

You can follow the manual steps below, or accept the [suggested change](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in the following comment.

1. Edit [`docs/getting-started.md`]({{ docsFileUrl }}) on this branch, or manually edit it in the **Files Changed** tab.
1. Find the placeholder text marked **CONFIGS PLACEHOLDER**.
1. Replace the placeholder with some example welcome messages that may be helpful to new users.
4. After editing the `docs/getting-started.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>

Write some example messages for your app here or accept this suggested change.

```suggestion
Welcome to our repository! Thanks for adding an issue, if you are reporting a bug or a feature request, please make sure to assign a label to this issue.
```

The `README.md` is a great introduction, but some documentation will help users feel even more supported as they start using the app. Mona has created a draft. Can you help?

<hr>
<h3 align="center">Check out <a href="{{ store.docsPrUrl }}">the pull request</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

:wave: @{{ user.username }}, the `getting-started.md` file is almost ready to be used, Mona just needs some example welcome messages added. Some example welcome messages you could add are:

#### Example 1
Welcome to our repository! Thanks for adding an issue, if you are reporting a bug or a feature request, please make sure to assign a label to this issue.

#### Example 2
Thank you for submitting a pull request to our repository. If this change is based on an existing issue, please reference that issue in the pull request comment using `Closes #x` where X is the issue number.

### :keyboard: Activity: Updating configuration instructions

Accept the suggested changes or manually edit the file as follows.

1. Access the **Files changed** tab in this pull request.
1. Click the icon to the right of the file to edit the `getting-started.md` document.
1. Find the text marked **CONFIGS PLACEHOLDER** and add some bullets that may be helpful to new users.
1. After editing the `getting-started.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when you commit to this branch.</h3>


## Step 5: Merge the user documentation

This Getting Started guide is going to be a great resource for new users. Let's go ahead and merge it - we can always iterate.

### :keyboard: Activity: Approve the pull request

1. Clicking on [this quicklink]({{ approveLink }})
1. Select **Approve**
1. Click **Submit review**.

You can also approve by clicking on **Files changed**, clicking on **Review changes**, selecting **Approve** and then **Submit review**.

<hr>
<h3 align="center">I'll respond when you've approved this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Understanding contributors

Most contributors take a gradual path to getting involved in an open source community. It usually looks something like this: 

1. Reporting a bug
1. Suggesting a new feature
1. Creating a pull request

More seasoned open source contributors might go straight to creating their first pull request, so adding helpful templates to a repository that makes it easier for _everyone_ to get involved, regardless of their previous experience. 

## Step 6: Adding an issue template

When you add an issue template and pull request template to your repository, project contributors will automatically see the template's contents when they open a new issue or pull request. Templates help you standardize the information you'd like included when contributors open issues.

GitHub offers standard templates for bug reports and for feature requests. We'll utilize those here.

:book: [GitHub help docs: _Configuring issue templates for your repository_](https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository)

### Creating multiple templates

In open source projects, templates make it easy for new contributors to create bug reports, suggest new features, or contribute changes. Can you put one together for bugs?

### :keyboard: Activity: Adding an issue template

![GIF showing a click on the repository's settings tab, scrolling down, clicking on set up templates, selecting a bug report template, a feature request template, and a custom template. Then, clicking on propose changes, changing the branch name to templates, and then committing. Finally, a new PR shows up.](https://user-images.githubusercontent.com/16547949/77784943-c4760a00-7031-11ea-90e0-a8f241ba6683.gif)

1. Access this [quicklink for templates]({{ repoUrl }}/issues/templates/edit) or manually navigate to it as follows:
   - Click on your repository's [**Settings**]({{ repoUrl }}/settings) tab.
   - Scroll down to the _Features_ section
   - Click on **Set up templates**
1. Click on **Add a template: select**
1. Select the bug report template.
   - Feel free to add more than one template, or create custom templates.
1. Click **Propose changes**
1. Enter a commit message, choose a name for your branch, and click **Commit changes**. GitHub will create a new pull request titled **Update issue templates** for you.

<hr>
<h3 align="center">I'll respond when I detect a new pull request titled <b>Update issue templates</b>.</h3>


You have been a huge help to Mona in preparing the repository for new users. Next, let's shift our focus to Mona's future contributors. Mona has been busy putting some thoughts together and is ready for your eyes. :eyes:

<hr>
<h3 align="center">Check out <a href="{{ store.templatesIssueUrl }}">the next issue</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

It looks like you created a new file with a name I wasn't expecting, or in a location I wasn't expecting. In order to use templates, they must be located at `.github/ISSUE_TEMPLATE/`.

I'm specifically looking for the following file: `.github/ISSUE_TEMPLATE/bug_report.md`. You can have additional templates, but I'm doing a quick check to ensure this file exists.

### :keyboard: Activity: Setting the correct issue template

To ensure the issue template exists:

### :keyboard: Activity: Adding an issue template

1. First, click on **Close this pull request** so we can start over.
1. Access this [quicklink for templates]({{ repoUrl }}/issues/templates/edit) or manually navigate to it as follows:
   - Click on your repository's [**Settings**]({{ repoUrl }}/settings) tab.
   - Scroll down to the _Features_ section
   - Click on **Set up templates**
1. Click on **Add a template: select**
1. Select the bug report template.
   - Feel free to add more than one template, or create custom templates.
1. Click **Propose changes**
1. Enter a commit message, choose a name for your branch, and click **Commit changes**. GitHub will create a new pull request titled **Update issue templates** for you.

<hr>
<h3 align="center">I'll respond when I detect a new pull request titled <b>Update issue templates</b>.</h3>


## Step 7: Merge the issue template

These issue templates are going to help users become contributors in no time! Let's go ahead and merge them in. 

### :keyboard: Activity: Merge the pull request

1. Click **Merge pull request** and then **Confirm merge** at the bottom of this pull request.
1. Delete your branch.

<hr>
<h3 align="center">I'll respond when you've merged this pull request.</h3>

Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 8: Add a CONTRIBUTING guide

A contributing guide provides important information to those who are interested in helping you with your project. Without a contributing guide, they might not know what you need help with, how they can get started, or how you like to communicate.

Providing the baseline expectations for a contribution to your project makes it much easier for a new user to contribute to the growth and development of your project.

### What to include

Like the user facing documentation, the contributing guidelines for every project will be very different. Let's keep our first iteration simple and focus on letting people know our system for labels. Don't worry, we'll talk more about labels after you make these edits.

### :keyboard: Activity: Adding CONTRIBUTING guidelines

You can follow the manual steps below, or accept the [suggested change](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in the following comment.

1. Edit [`CONTRIBUTING.md`]({{ contribFileUrl }}) on this branch, or manually edit it in the **Files Changed** tab.
1. Find the text marked **DESCRIPTION PLACEHOLDER**.
1. Replace each placeholder with a description for each label.
4. After editing the `CONTRIBUTING.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>

Write a great description for each label here or accept this suggested change.

```suggestion
- **help-wanted**: used when an issue or PR is up for grabs
```

This is project is looking great @{{ user.username }}. While the issue templates are helpful, community members who want to contribute changes will need a little more support. Can you help Mona put together a CONTRIBUTING guide? Don't worry, I'll give you more information in the pull request.

<hr>
<h3 align="center">Go to the pull request <a href="{{ store.contribPrUrl }}">here</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

It looks like one or more of the labels still need a description. Can you help out with these?

### :keyboard: Activity: Updating label descriptions

Accept the suggested changes or manually edit the file as follows.

1. Access the **Files changed** tab in this pull request.
2. Click the icon to the right of the file to edit the `CONTRIBUTING.md` document.
3. Find the text marked **DESCRIPTION PLACEHOLDER** and add a description for the label.
4. After editing the `CONTRIBUTING.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


## Step 9: Add labels

The open source community uses **labels** to help organize issues and pull requests within their repositories. They also use them to identify issues and pull requests that are looking for contributions from newcomers or to highlight specific skills needed to respond to the request.

By default, a new GitHub repository comes with the following labels out of the box:

- bug
- duplicate
- enhancement
- help wanted
- invalid
- question
- wontfix

These initial labels are awesome, but most maintainers add (or delete) labels to fit their project. Labels like `first-timers-only` make it easy for newcomers to find suitable issues and pull requests, but they also tell the world you are welcoming and supportive to new open source contributors.

### :keyboard: Activity: Adding labels to your repository

1. On the top right side of this pull request view, find the section titled: "Labels".
1. Click the gear icon.
1. Notice the text field at the top says **Filter labels**.
1. Type the name of the label you would like to create.
1. You will see a selection that reads "Create a new label", select that option.
1. Customize your label with a description and color.
1. Click **Save**.
1. Add your new label to this pull request.

<hr>
<h3 align="center">I'll respond when I detect a label on this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 10: Merge the CONTRIBUTING guide

Nice work @{{ user.username }}! You successfully added labels to this project. Labels will help Mona and her community keep things organized and quickly identify what an issue or pull request is trying to accomplish.

Go ahead and merge the `CONTRIBUTING.md` guide.

### :keyboard: Activity: Approve the pull request

1. Clicking on [this quicklink]({{ approveLink }})
1. Select **Approve**
1. Click **Submit review**.

You can also approve by clicking on **Files changed**, clicking on **Review changes**, selecting **Approve** and then **Submit review**.

<hr>
<h3 align="center">I'll respond when you've approved this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 11: Add the LICENSE

Licenses are vital in open source repositories, because they set the rules for how others are allowed to use, change, and contribute to your project. In fact, if Mona doesn't add an open source license to her project, it is not technically open source -- in that case, it could be considered copyrighted work.

Mona did a bunch of research on open source licenses (and we recommend you do too) on https://choosealicense.com/. After a quick consultation with her legal team, Mona has selected the simple and permissive MIT license.

The [Choose a license site](https://choosealicense.com/) has helpful copy/paste links you can use to grab the license text. It is strongly recommended that you do not alter the license in any way, other than filling in your project details as instructed.

Mona has already grabbed the license, can you please make sure the project details are filled in?

### :keyboard: Activity: Adding a License

You can follow the manual steps below, or accept the [suggested change](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in the following comment.

1. Edit [`LICENSE.md`]({{ licenseFileUrl }}) on this branch, or manually edit it in the **Files Changed** tab.
1. Find the placeholders for `[year]` and `[fullname]`.
1. Replace each placeholder with a year and name of your choosing.
1. After editing the `LICENSE.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>

Enter your own year and name, or accept this suggestion.

```suggestion
Copyright (c) 2020 {{ user.login }}
```

There are just a few more things left to do. First, you need to let the world know how they can use Mona's project and second, you need to let them know the kind of behavior Mona expects.

Mona has done a ton of research on licenses, let's see which one she has selected.

<hr>
<h3 align="center">Go to the pull request <a href="{{ store.licensePrUrl }}">here</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

:wave: @{{ user.username }}, there are two placeholders for `[year]` and `[fullname]`. Can you please update these with the year and Mona's name? Oh, maybe you didn't know ... her full name is Monalisa Octocat.

### :keyboard: Activity: Updating placeholder text

Accept the suggested changes or manually edit the file as follows.

1. Access the **Files changed** tab in this pull request.
2. Click the icon to the right of the file to edit the `LICENSE.md` file.
3. Find the placeholder text within the license and edit as needed.
4. After editing the `LICENSE.md` file, scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


## Step 12: Merge the license

Thanks for making those updates @{{ user.username }}! Go ahead and merge the `LICENSE.md` now and we will move on to the Code of Conduct.

### :keyboard: Activity: Approve the pull request

1. Clicking on [this quicklink]({{ approveLink }})
1. Select **Approve**
1. Click **Submit review**.

You can also approve by clicking on **Files changed**, clicking on **Review changes**, selecting **Approve** and then **Submit review**.

<hr>
<h3 align="center">I'll respond when you've approved this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 13: Add the Code of Conduct

Having a Code of Conduct is really important. Instead of re-writing the wheel, Mona wants to adopt the **Contributor Covenant Code of Conduct**.

Can you help her grab the markdown version from [the contributor covenant website](https://www.contributor-covenant.org/) and paste it in to the empty file in this pull request?

### :keyboard: Activity: Add a Code of Conduct

You can follow the manual steps below, or accept the [suggested change](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in the following comment.

1. Edit [`code-of-conduct.md`]({{ cocFileUrl }}) on this branch, or manually edit it in the **Files Changed** tab.
1. Replace the file's contents with the markdown text from the latest version on [the contributor covenant website](https://www.contributor-covenant.org/). Feel free to also replace the placeholder `[INSERT CONTACT METHOD]` with a contact method of your choosing.
4. Scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>

Add your own Code of Conduct, or accept the suggestion below.

```suggestion
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.
```

With your help, this is really flying! Mona has started on the Code of Conduct, she's waiting for you over there.

<hr>
<h3 align="center">Go to the pull request <a href="{{ store.cocPrUrl }}">here</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

Something is not quite right. Do you mind trying again?

### :keyboard: Activity: Add a Code of Conduct

Accept the suggested changes above or manually edit the file as follows.

1. Edit [`code-of-conduct.md`]({{ cocFileUrl }}) on this branch, or manually edit it in the **Files Changed** tab.
1. Replace the file's contents with the markdown text from the latest version on [the contributor covenant website](https://www.contributor-covenant.org/). Feel free to also replace the placeholder `[INSERT CONTACT METHOD]` with a contact method of your choosing.
4. Scroll down and click the **Commit changes** button.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>

## Step 14: Merge the Code of Conduct

We're almost there @{{ user.username }}! Go ahead and merge the Code of Conduct now!

### :keyboard: Activity: Approve the pull request

1. Clicking on [this quicklink]({{ approveLink }})
1. Select **Approve**
1. Click **Submit review**.

You can also approve by clicking on **Files changed**, clicking on **Review changes**, selecting **Approve** and then **Submit review**.

<hr>
<h3 align="center">I'll respond when you've approved this pull request.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## Step 15: Help users find the project

GitHub uses repository topics to help people find projects that might be of interest based on their search patterns or the projects they are working on.

Mona would like to add a few topics to this repository. Can you help her out?

### :keyboard: Activity: Adding Topics to the repository

1. On the **Code** tab, click the **gear** icon located next to the **About** section of the repository and just above the repository description.
1. In the **Topics** field, type the first topic `Probot`. GitHub might also have some **Suggested** topics for this repository.
1. After entering a topic (or topics), click **Done**.

<hr>
<h3 align="center">Close this issue when finished.</h3>

> :robot: I'm waiting for you to close this issue


All of the necessary files are complete! Now we just need to help Mona get eyes :eyes: on her project. I have a few ideas that might help and I've dropped them in [this issue]({{ store.visibilityIssueUrl }}).

<hr>
<h3 align="center">Go to the issue <a href="{{ store.visibilityIssueUrl }}">here</a>.</h3>


Uh oh, you took an action I wasn't expecting. Not to worry!

I was expecting you to **{{ expected }}**.

I will respond when you take the expected action.

## It's a wrap!

Mona's project is all ready to be published as open source, thanks to you @{{ user.username }}!

![congratulations](https://octodex.github.com/images/welcometocat.png)

### What went well

During this course you successfully:

- Helped others understand how they can use Mona's project
- Recognized the ways people may contribute
- Established systems to organize contributions
- Set expectations for contributors
- Made Mona's project easy to find

Want to keep learning? Feel free to [check out our other courses]({{ host }}/courses).


