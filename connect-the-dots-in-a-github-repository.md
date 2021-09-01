# Connect the dots in a GitHub repository

_This course will teach you skills for finding relevant conversations, commits, and projects in a repository._

![](https://repository-images.githubusercontent.com/206795795/9607e200-586d-11ea-97a7-4ecd37d628fc)

**Tags**: none

---

Have you ever worked in a repository with a lot of history? Perhaps you've had to track down related issues and pull requests in the past, or you've had to find who committed a particular change. If you've ever found yourself in any of these situations, you'll know how important it is to navigate your workspace.

## What you'll learn

- Find relevant issues and pull requests
- Search history to find context
- Make connections within GitHub to help others find things

## What you'll build

![screenshot of webpage on github pages as final product](https://user-images.githubusercontent.com/9906718/75549655-70770600-5a30-11ea-97f8-970ddd6fb16f.png)

- A GitHub Pages site with documentation about how to communicate effectively on GitHub

## Prerequisites

Before you take this course, you may want to go through the [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github) course on Learning Lab.

## Projects used

- [docsify](https://docsify.js.org/#/), a magical documentation site generator

## Audience

Developers, GitHub users, users new to Git, students, managers, teams

---

# Welcome!

Welcome to this Learning Lab course about finding your way through the history of GitHub repositories. For example, you could be working in repositories with a lot of history, many collaborators, or many files.

Before you take this course, you may want to go through the [Introduction to GitHub]({{ host }}/{{ course.Owner.login }}/introduction-to-github) course on Learning Lab.

In this course, you'll learn how to do lots of things, like:

- Find relevant issues and pull requests
- Search history to find context
- Make connections within GitHub to help others find things

### Cross-linking issues and pull requests

GitHub has special capabilities to help reference other information on GitHub. For example, when you reference another issue or pull request by number, that number will be hyperlinked. At the same time, a cross-reference is created in the linked issue or pull request. This two-way reference helps people track the relationship of information across GitHub.

![a screenshot of an issue linking to a PR, and a PR with a cross-reference to the issue](https://user-images.githubusercontent.com/16547949/67594663-d9710900-f732-11e9-8df8-d3173d952bd5.png)

## Step 1: Find an issue

Below, you will see a reference to another issue. The other issue references _this_ issue. The other issue appears to be a duplicate, so it would be a good idea to close it.

### :keyboard: Activity: Find and close the cross-linked issue

1. Navigate to the other issue referenced from this issue
2. Close that issue

<hr>
<h3 align="center">I will respond with your next steps in that issue.</h3>


# Welcome!

Welcome to the course! We're going to walk through some strategies for dealing with large repositories. This is a similar issue to #1. Please close this issue.


# Documentation structure

This pull request introduces the structure for the documentation.


# Adding new pages

This pull request introduces new pages to the documentation.

# Add navigation

This pull request introduces navigation to the documentation.

_Note: in a step in this course, you'll be asked to perform the steps below. They're listed here for your convenience._

### :keyboard: Activity: Add to v1.0.0 project

1. Click on **Projects** on the right side of this pull request.
1. Choose the `v1.0.0` project from the list. You'll then see it's _Awaiting triage_
1. Click on the project drop down, and place it into the **Done** column.

I'll respond back in the original issue where you were asked to do this.

# Adding Git Tips

This pull request adds a page to the documentation about tips and tricks for using Git.

_Note: This is the pull request that you should assign yourself to in step 5._

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



_Note: the content of this comment simulates common usage of issues as a way to request features of report bugs. Scroll down to the next comment in this issue for your instructions._

There's no sidebar! Is this user error or is it actually missing?

# Finding relevant history

When you're working in a repository, you might want to find other issues or pull requests. Maybe someone has told you about a conversation, but they didn't send you a direct link. Or, maybe you remember an issue from the past but you don't know exactly where it is.

In this case, we want to see if there's another reference to the broken sidebar somewhere on this repository, and track down any work that's been attempted related to this. Let's see what we can find out!

### Finding issues and pull requests

You can search for issues and pull requests in many ways, like by author, title, or even the most recently updated. You can also search closed issues. You can read all about the different ways to search in the [Searching Issues or Pull Requests](https://help.github.com/en/articles/searching-issues-and-pull-requests#search-by-open-or-closed-state) article.

### Creating references

When you link to another issue, a reference within GitHub is automatically created. In fact, you don't even need to include the full link. If you were to type `#5` within a comment, that would turn into a link to issue or pull request number 5.

When you want to create a crosslink, try typing the title of an issue or pull request directly after you type the `#` symbol. GitHub will suggest issues or pull requests that will link to the right place. To learn even more, check out the [Autolinked References and URLs](https://help.github.com/en/articles/autolinked-references-and-urls) article.

## Step 2: Create crosslinks

### :keyboard: Activity: Find and link to a related issue

1. Please find the issue that is similar to this one
   - This does _not_ mean that the issue is referenced, like in the last step. This time, we're looking for a related issue that hasn't been connected to this one in any way.
   - Try looking in the [Issues]({{ repoUrl }}/issues) tab to find an issue with a similar title to this one.
2. Comment in this issue with a reference to the related issue and a short description, something along the lines of "this is a duplicate of issue #(number)".

I'll respond when you comment on this issue.


I think this project would be better if it had a sidebar.

[Your next steps can be found here]({{ repoUrl }}/issues/7).

[Your next steps can be found here]({{ repoUrl }}/issues/7).

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



Great job finding the duplicate issue! Feel free to close the other issue as a duplicate of this one, but I'll leave it up to you. Let's move on to finding out if these issues ever led to a sidebar being added to our project!

# Finding commits

An important part of version control is the ability to look into the past. By using `git blame`, and finding the story behind a commit, we're able to do more than _blame_ people for code. We're able to see the story around why a commit was made - what is the associated pull request? Who approved the pull request? What tests were run on that commit before it was merged?

The obvious reason to find things in history is to know about history. With issues and pull requests, we see a more complete story about history - not just the bare minimum.

### What's `git blame`?

`git blame` is a Git functionality that shows what revision and author last modified each line of a file. Information like who made a commit, when, and even why can be found this way. If you aren't sure who introduced certain changes to a file, you can use `git blame` to find out. While `git blame` sounds rather accusatory, this can be used to understand the context around decisions.

### What's a SHA?

A SHA is a reference to a specific object. In this case, it's a reference to a commit. On GitHub, you can look at a specific commit to see the changes introduced, by whom, and if they were a part of a pull request.

## Step 3: Find the commit

### :keyboard: Activity: Find and reference the navigation commit

1. Navigate to the [Code tab of this repository]({{ repoUrl }})
   - _Tip: start this process in a new tab, since you will need it later_
2. Click `docs` to navigate into the `/docs` directory
3. Click `_sidebar.md` to view the file
4. On the top right side of the file, click **Blame** to see the details of the most recent revision
5. Click the commit message, `add sidebar to documentation` to see the commit details
6. Copy some part of the SHA (at least the first 6 characters of the 40 character hexadecimal string listed after `commit`)
7. Comment (at least the first 6 characters of) the SHA in **this issue**


It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



Thanks for finding that commit! We now know that the sidebar was indeed added, and it was done in that commit. Let's see if we can dig a little deeper to find out if any planning or conversation occurred around this change. 

# Context

As we've already seen, conversations in issues and pull requests can reference other work.

But the amount of context goes much further than crosslinks - Remember, Git is version control! For example, the commit that you found in the last step is connected with much more information: 

- Who made the commit
- What other changes were included
- When the commit was made
- Which pull request the commit was a part of

The pull request is important because it goes beyond knowing when a commit happened - you can know _why_ a commit happened. Finding history is not about _blaming_ anyone, but about seeing the bigger picture. Why were decisions made? Who was involved? What were the build outputs and test results for each commit? Who requested changes, and who approved them?

### A story about finding experts

Imagine you find an internal white-paper on a really exciting topic. You're looking for experts to help you research this topic for an upcoming project. When you find this article, you're ecstatic! But, there's no author referenced in the plain text.

You can see that it's written in markdown, and it's versioned in GitHub. It's already a part of the `main` branch, but you want to know who was involved in creating this. You use `git blame` to see the author(s), and you can find the pull request associated with that branch. Now, you can see who all of the authors were, who the reviewers were, and if there are any other issues or conversations related to this topic.

Just like that, you've found the people at your company who can help move your project forward. :tada:

### Finding a pull request from a commit

When you're looking at a commit on GitHub, you can see a lot of information. From this view, you can also find a link to the pull request in which the commit was created. We'll use this in the next step.

![screenshot of a view of a commit on GitHub, highlighting the link to the pull request](https://user-images.githubusercontent.com/16547949/67341250-3edbb480-f4fd-11e9-805a-6bce5a8ba2d1.png)

## Step 4: Give more context

To help others find relevant context, we want to collate the information that you found in the prior steps.

![a screenshot of this issue with the projects section highlighted on the right, and a second screenshot of v1.0.0 project](https://user-images.githubusercontent.com/16547949/67590688-b0984600-f729-11e9-8d46-cc243d666331.png)

One way we can do this, is by using [GitHub Projects](https://help.github.com/en/github/managing-your-work-on-github/about-project-boards). You'll notice that this issue is part of [Project v1.0.0]({{ repoUrl }}/projects/1), which tells us that the sidebar is part of the work related to our version 1.0.0 release. Let's add the related pull request to the same project so that the two artifacts can be tracked in tandem.

### :keyboard: Activity: Use a project to track related efforts

1. Go back to {{ commitId }}.
1. Click the link to the related pull request.
1. In the pull request, click on **Projects** on the right side, and choose the `v1.0.0` project from the list.
1. When the PR is added to the project, you'll see it's _Awaiting triage_, let's triage it! Click on the project drop down, and place it into the **Done** column.

I'll respond in this issue when you've added the pull request to the Done column of the v1.0.0 project.

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



Great! Now that both this issue and the associated pull request are in the same project, it will be easier to track and organize the related work. 

# More commit context

Historical context of development includes references to other related work, like tests.

### Real life examples

If you'd like to see what this looks like in active repositories, take a look at [Electron](https://github.com/electron/electron/pulls) or [Visual Studio Code](https://github.com/microsoft/vscode/pulls). You can look through pull requests, see pull request statuses, and maybe even see the log outputs.

## Step 5: Find the broken build

There's an open pull request in this repository with a failing status. Before we fix it, let's find it!

### :keyboard: Activity:

1. In the [Pull requests tab]({{ repoUrl }}/pulls), find the pull request with the failing build
2. Using the **Assignees** section on the right side, assign yourself to the pull request

<hr>
<h3 align="center">I will respond with your next steps in that pull request.</h3>

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



# Fix the build

Now that you've seen that a status can be associated with a commit, let's fix this pull request up. The commit that you make will not only show the work you've done in history, but it will also show that you fixed the status as a part of a bigger picture.

People in the future could look for this work and find out lots of things. They could find who made the fix, what the build status was before the fix, or who asked you to make the fix. This information is created automatically, without any extra work from the developer.

## Step 6: Fix the build

### :keyboard: Activity: Correct the spelling to fix the build

1. [Edit the `docs/git-tips.md` file]({{ repoUrl }}/edit/add-git-tips/docs/git-tips.md)
2. Correct the spelling of the word `trics` on line 3 by changing it into `tricks`
3. Commit the changes on the `add-git-tips` branch

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



## Step 6: Merge

Great work! By correcting the spelling, your commit triggered another status. You can see this represented by the green check mark next to your commit in the pull request timeline. :tada:

### :keyboard: Activity: Merge this pull request

1. Merge this pull request
2. Delete the branch

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!



# Congratulations!

Great job! In this course, you've learned a lot about finding and sharing information. Within a GitHub repository, you can find history about what changes were made, and more importantly, _why_ changes were made.

If you'd like to see this project on GitHub Pages, go to the [Settings tab]({{ repoUrl }}/settings) of this repository and scroll down. Then, under **GitHub Pages**, select the **`main` branch `/docs` folder** as the source.

Want to keep learning? Feel free to [check out our other courses]({{ host }}/courses).

<hr>
<h3 align="center">I won't respond to this issue, just close it when you are done!</h3>

Great job! Find your [final issue here]({{ repoUrl }}/issues/9).

