# GitHub Actions: Using GitHub Script

_This course covers how to use GitHub Script to quickly use octokit/rest in a GitHub Actions workflow._

![](https://repository-images.githubusercontent.com/245498811/791eea00-6dec-11ea-9903-b354ff714209)

**Tags**: GitHub Actions, Octokit, Workflow, Automation, Application programming interface (API)

---

# Hi there 👋!

Hello @{{user.login}}, I'm so excited to teach you how to use GitHub Script in your workflows 😄

## What is GitHub Script?

<p align="center">
<img src="https://user-images.githubusercontent.com/38021615/76347761-5ce75d00-62c4-11ea-835b-35660b5188c8.png" alt="octokit logo" height=200/>
</p>

[GitHub Script](https://github.com/actions/github-script) is a really awesome action that allows you to quickly interact with the GitHub API directly in your workflow!

This allows you to use the workflow context to script any API usage that is available through the octokit/rest.js library without the need to build a bulky custom action to do so.

📖 See [octokit/rest.js](https://octokit.github.io/rest.js/) for the API client documentation.

Let's take a closer look at how this action compares to Octokit.

## Create an issue comment

If we take a look at the [Octokit documentation](https://octokit.github.io/rest.js/v17#issues-create-comment) on how to create issue comments we are greeted with the following method:

**someFile.js**

```javascript
octokit.issues.createComment({
  owner,
  repo,
  issue_number,
  body
});
```

Okay, that doesn't seem so hard. Now that we know how to do it with Octokit let's take a look at how to use GitHub Script to create an issue comment:

**my-workflow.yml**

```yaml
- uses: actions/github-script@0.8.0
  with:
    github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
    script: |
    github.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: '👋 Thanks for reporting!'
    })
```

## Open a pull request

Now let's examine what it's like to open a pull request with octokit/rest.js:

**someFile.js**

```javascript
octokit.pulls.create({
  owner,
  repo,
  title,
  head,
  base
});
```

Again, that's not too hard at all. Now let's do the same thing, only using the GitHub Script action:

```yml
- uses: actions/github-script@0.8.0
  with:
    github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
    script: |
    github.pull.create({
        repo: github.context.repo.repo,
        owner: github.context.repo.owner,
        head: github.context.ref,
        base: "main",
        title: "from my action",
        body: "## I totally used GitHub Script to pull this off 🔥"
    })
```

## That's not much different, so why might I want to use GitHub Script?

With GitHub Script you don't have to worry about

- Building a custom action to create this issue comment.
- No Octokit dependencies to worry about.
- No additional packages to manage.
- No need to write action metadata.
- No need to write source code to handle this Octokit method.

Using GitHub Script instead of writing custom actions for repository related tasks can prove to be a much more light-weight solution in most cases.

Anything you can do with Octokit can be accomplished with GitHub Script 🎉!

---

_You may have noticed that when using GitHub Script the method call starts with `github` and not `octokit`. This is because GitHub Script provides you with a pre-authenticated octokit/rest.js client stored in a variable named `github`._

_`context` is a reference to an object containing the [context of the current workflow run](https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts)_

## Using GitHub Script in a workflow

Actions are enabled on your repository by default, but we still have to tell our repository to use them. We do this by creating a workflow file in our repository.

If you've been following the learning path for GitHub Actions then this task is quite familiar to you.

<details><summary>Brand new to GitHub Actions?  Click here to learn about workflows!</summary>

#### What is a workflow file?

A **workflow** file can be thought of as the recipe for automating a task. They house the start to finish instructions, in the form of `jobs` and `steps`, for what should happen based on specific triggers.

Your repository can contain multiple **workflow** files that carry out a wide variety of tasks. It is important to consider this when deciding on a name for your **workflow**. The name you choose should reflect the tasks being performed.

</details>

<br>

<!-- 💻 Actively learn about workflows by enrolling in [this Learning Lab course which has no name or content yet]() -->

📖 Read more about [workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow#choosing-the-type-of-actions-for-your-workflow)

### :keyboard: Activity: Respond to an issue when it gets opened

1. Create a new workflow file titled `.github/workflows/my-workflow.yml` with the following contents:
   You can use [this quicklink]({{quicklink}}) to easily create this file

   ```yaml
   name: Learning GitHub Script

   on:
     issues:
       types: [opened]

   jobs:
     comment:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/github-script@0.8.0
           with:
             github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
             script: |
               github.issues.createComment({
                 issue_number: context.issue.number,
                 owner: context.repo.owner,
                 repo: context.repo.repo,
                 body: "🎉 You've created this issue comment using GitHub Script!!!"
               })
   ```

1. Commit the workflow to a new branch.
1. Create a pull request. I suggest a title like **Automate issue responses**.
1. Supply the pull request body content and click **Create pull request**.

<details><summary>About pull pull request titles and content</summary>

It is important to place meaningful content into the body of the pull requests you create. This repository will stay with you long after you complete the course. We recommend you use the body of your pull requests as a way to take long lived notes about thing you want to remember.

In practice, good pull request titles and content convey information efficiently to your collaborators.

You can fill the body of this pull request with the following recommended content:

> Workflow files are the recipe for task automation. This is where actions are placed if I want to use them for a task.

</details>

---

I am waiting for you to create a new pull request before moving on.

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory

## A new pull request

I have created a [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.

## You have added a workflow!

Great job @{{user.login}}, you successfully added a workflow to this repository 🎉!

Since this workflow has a trigger that pertains to the repository as a whole, rather than just this branch, we will need to merge this pull request before we can start using it.

Let's go ahead and do this now.

### :keyboard: Activity: Merge the workflow

1.  Merge this pull request.

---

I am waiting for you to merge this pull request before moving on.

Once you have merged this pull request I will open a new issue so we can see this workflow in action!

<details><summary>Trouble merging?</summary>Try refreshing the page!</details>

Oops! I was expecting you to take **{{ expected }}**.

I'll respond when you take the expected action.
## Look 👀 at you!

Super awesome job so far!

Do you remember what our workflow trigger was?

```yaml
on:
  issues:
    types: [opened]
```

This means that every time an issue gets opened in this repository the GitHub Script you wrote will execute.

You should expect to see the result right here in this issue!

<details>
  <summary>Workflow not running? Click here for some troubleshooting.</summary>

Try the following troubleshooting steps:
1. Click on the [Actions tab]({{ store.actionsUrl }}) to see the status of your workflow run. See [Managing a workflow run](https://help.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run) on GitHub Help for more information.
1. Edit your [workflow file]( {{ store.workflowEditUrl }}) and look for errors in the linter built into the browser.
1. Look for the [workflow trigger](https://help.github.com/en/actions/reference/events-that-trigger-workflows) and ensure you are performing an action that triggers that workflow.

If you need to make changes to your code, remove the [main branch protection]({{ store.branchSettingsUrl }}) and merge your changes into the `main` branch.
</details>

---

I'll respond in this issue after your workflow runs!

## A new issue has been opened

I have created a [new issue]({{issueUrl}}) where we will continue this lesson. Click the link to meet me over there.

{{debug}}

# Success 🎉!!!

@{{user.login}} you're doing great! You've just used GitHub Script to comment on this issue!

## Why might this be useful?

Using GitHub Actions can really help automate the events that take place in your repositories. Imagine it was a repository visitor who opened a new issue containing information about a critical bug. I assume you'd want to thank them for bringing that to your attention, however this simple task can become overwhelming as your repository attracts more visitors. By automating an issue comment we could easily thank our visitors every single time without the overhead of doing it manually.

## What about us?

For the rest of the course we are going to design a workflow that helps us move issues into a GitHub Project board when they are created. This will give us increased visibility on the work that needs triage!

# Let's add a card to a project board

We have added [a project board]({{ store.projectUrl }}) to this repository for you. We will use this board, named **Learning Lab Project Board**, to add cards to when a new issue is created in your repository!

Like creating comments and opening pull requests, octokit/rest.js can be used for many more types of interactions. Managing GitHub Projects makes that list!

<details><summary>Things aren't always as they appear!</summary>
<br>
Although this is not a course on octokit/rest.js, it is important to tell you a little secret right here before we move on. For you to be able to use the `projects.createCard()` method there were some pieces of information we needed beforehand. Things like the `column_id` so we know which column to add the card to and even a `project_id` so we know which board that column belongs to.

We've gone ahead and done this on our end of things so that we could give you the final piece to the puzzle and demonstrate how to use GitHub Script. So if you try to recreate this on your own, without the help of Learning Lab you will need to get that information and parse it in a way that works well for your use case!

</details>

### :keyboard: Activity: Add newly opened issue to project board

1. [Edit]({{quicklink}}) the current workflow `.github/workflows/my-workflow.yml` to have the following contents:

   ```yaml
   name: Learning GitHub Script

   on:
     issues:
       types: [opened]

   jobs:
     comment:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/github-script@0.8.0
         with:
           github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
           script: |
               github.issues.createComment({
               issue_number: context.issue.number,
               owner: context.repo.owner,
               repo: context.repo.repo,
               body: "🎉 You've created this issue comment using GitHub Script!!!"
               })
               github.projects.createCard({
               column_id: {{columnID}},
               content_id: context.payload.issue.id,
               content_type: "Issue"
               });
   ```

2. Commit the workflow to a new branch.
3. Create a pull request, I suggest the title **Add issues to project board**.
4. Supply the pull request body content and click **Create pull request**.

---

I am waiting for you to create a new pull request before moving on.

I'll respond in the new pull request when I detect it has been created.

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory

## A new pull request

I have created a [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.

## You have added a workflow!

@{{user.login}}, you're a rockstar ✨

Your workflow now has the necessary updates for us to have new issues automatically added to the triage board when they are created!

Like before, this workflow has a trigger that pertains to the repository as a whole, rather than just this branch, we will need to merge this pull request before we can start using it.

Let's go ahead and do this now.

### :keyboard: Activity: Merge the workflow

When you are ready, merge this pull request.

---

I am waiting for you to merge this pull request before moving on.

Once you have merged this pull request I will open a new issue so we can see this workflow in action!

<details><summary>Trouble merging?</summary>Try refreshing the page!</details>

Oops! I was expecting you to take **{{ expected }}**.

I'll respond when you take the expected action.
## Great job @{{user.login}}

Now that your updates have been merged and we've triggered the workflow we should see our workflow begin helping us automate the triage of new issues.

<details>
  <summary>Workflow not running? Click here for some troubleshooting.</summary>

Try the following troubleshooting steps:
1. Click on the [Actions tab]({{ store.actionsUrl }}) to see the status of your workflow run. See [Managing a workflow run](https://help.github.com/en/actions/configuring-and-managing-workflows/managing-a-workflow-run) on GitHub Help for more information.
1. Edit your [workflow file]( {{ store.workflowEditUrl }}) and look for errors in the linter built into the browser.
1. Look for the [workflow trigger](https://help.github.com/en/actions/reference/events-that-trigger-workflows) and ensure you are performing an action that triggers that workflow.

If you need to make changes to your code, remove the [main branch protection]({{ store.branchSettingsUrl }}) and merge your changes into the `main` branch.
</details>

---

I'll respond once your workflow has completed!

## A new issue has been opened

I have created a [new issue]({{issueUrl}}) where we will continue this lesson. Click the link to meet me over there.

{{debug}}

## Let's improve the workflow

@{{user.login}} it looks like you workflow has completed! Let's take a look at the results!

We should be pretty familiar with the first portion of the workflow, it's the same as the first time it ran, and it just creates a comment whenever a new issue has been created.

The second portion may exactly be clear to you, but this issue was added to a project board that is present in this repository. Checkout the [projects tab]({{projectTab}}) if you want to see that this issue has been added!

#### Multiple steps

One benefit of using actions is the ability to separate `jobs` into smaller units of work called `steps`. If we think about what our workflow is doing we can see that it makes more sense to have these two tasks take place across two steps.

As an added advantage, once we break the current workflow into multiple steps we can apply logic through expressions to them. This will let us create rules around when steps are allowed to run. Ultimately this allows us to optimize our workflow run!

Since GitHub Script is simply an action, breaking each unique task into a new step works just fine! We will do this in our next activity!

# Add steps for each action

We will make the following changes to the current workflow file:

- Name each step so we can easily keep track of it in the [actions tab]({{store.actionsUrl}})
- Use expressions to determine `if` a step should execute

### :keyboard: Activity: Add newly opened issue to project board

1. [Edit]({{quicklink}}) the current workflow `.github/workflows/my-workflow.yml` to have the following contents:

   ```yaml
   name: Learning GitHub Script

   on:
     issues:
       types: [opened]

   jobs:
     comment:
       runs-on: ubuntu-latest
       steps:
       - name: Comment on new issue
         uses: actions/github-script@0.8.0
         with:
           github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
           script: |
               github.issues.createComment({
               issue_number: context.issue.number,
               owner: context.repo.owner,
               repo: context.repo.repo,
               body: "🎉 You've created this issue comment using GitHub Script!!!"
               })

       - name: Add issue to project board
         if: contains(github.event.issue.labels.*.name, 'bug')
         uses: actions/github-script@0.8.0
         with:
           github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
           script: |
               github.projects.createCard({
               column_id: {{columnID}},
               content_id: context.payload.issue.id,
               content_type: "Issue"
               });

   ```

2. Commit the workflow to a new branch.
3. Create a pull request, I suggest the title **Create better comments**.
4. Supply the pull request body content and click **Create pull request**.

---

I am waiting for you to create a new pull request before moving on.

I'll respond in the pull request you create

## A new pull request

I have created a [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.

# Improving the issue comment

💡Did you know that GitHub Script also grants you access to a full Node.js environment?

Although we wouldn't recommend using GitHub Script to write the logic for complex actions, there are use cases where you may want to leverage using a little more than just the octokit/rest.js API.

One such use case is our issue comment. Right now it is pretty hard coded the way it is making it less than ideal. What if we wanted to display our contribution guide every time an issue was opened?

Instead of writing the guide directly into our workflow, we can use the Node.js File System module to read a file and use it as the body of our issue comment.

If we want access to the files within our repository, we need to make sure we include the `actions/checkout` action in our workflow as the first step.

## Use a comment template from the repository

We will make the following changes to the current workflow file:

- Add the `actions/checkout` action so we can read the templated response file located at `.github/ISSUE_RESPONSES/comment.md`
- Add JavaScript to use the Node.js File System module to place the contents of our templated response as the body of the issue comment.

### :keyboard: Activity: Use the FS module to use a templated comment

1. [Edit]({{quicklink}}) the current workflow to have the following contents:

   ```yaml
   name: Learning GitHub Script

   on:
     issues:
       types: [opened]

   jobs:
     comment:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repo
           uses: actions/checkout@v2

         - name: Comment on new issue
           uses: actions/github-script@0.8.0
           with:
             github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
             script: |
                const fs = require('fs')
                const issueBody = fs.readFileSync(".github/ISSUE_RESPONSES/comment.md", "utf8")
                github.issues.createComment({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: issueBody
                })

         - name: Add issue to project board
           if: contains(github.event.issue.labels.*.name, 'bug')
           uses: actions/github-script@0.8.0
           with:
             github-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
             script: |
               github.projects.createCard({
               column_id: {{columnID}},
               content_id: context.payload.issue.id,
               content_type: "Issue"
               });

   ```

2. Commit the workflow changes to this branch.

---

I am waiting for you to commit the desired changes to this branch before moving on.

I'll respond once you've committed the changes to this branch

Oops! I was expecting you to take **{{ expected }}**.

I'll respond when you take the expected action.
## Time to see the magic in action!

@{{user.login}}, All of the necessary changes have been made, and our workflow now contains enough information to be quite awesome!

### :keyboard: Activity: Merge the workflow

When you are ready, merge this pull request.

---

I am waiting for you to merge this pull request before moving on.

Once you have merged this pull request I will open a new issue so we can see this workflow in action!

<details><summary>Trouble merging?</summary>Try refreshing the page!</details>

Oops! I was expecting you to take **{{ expected }}**.

I'll respond when you take the expected action.
## A new issue has been opened

I have created a [new issue]({{issueUrl}}) where we will continue this lesson. Click the link to meet me over there.

# Oops!

It seems like there is an issue with your workflow run. You'll need to head to the actions tab to troubleshoot your workflow

## Another workflow success

Great job yet again!

As you can see, there is now a more comprehensive response to a new issue being opened, and it's based on a template in this repository so it's easy to change in the future. Along with that change, this issue has now been added to the project board so that we can be reminded to triage it for work!

**What about all the extra logic?**

You're right! We added some expression logic to the workflow that will only add an issue to the project board, if it contains the `bug` label at the time of creation. Let's see if our logic works as intended!

### :keyboard: Activity: Create a new issue in this repository

1. [Click here]({{quicklink}}) to quickly open a new issue
1. Give the issue a name of your choosing
1. Supply the issue with a body
1. Be sure NOT to include the bug label on this issue
1. Click the `Submit new issue` button

---

I am waiting for you to open a new issue before moving on.

I'll respond in your new issue once you've opened it

# Oops!

It seems like there is an issue with your workflow run. You'll need to head to the actions tab to troubleshoot your workflow

## Whoo hoo 🎉

Super awesome job @{{user.login}}! As you can see, your workflow still commented on this issue, but it did not add it to the project board!

Don't hesitate to experiment with changes to the current workflow to see if what kind of logic you can implement to change the response to an issue based on the conditions that surround your own software development lifecycle!

## What you learned

As we wrap this course up it's important that we revisit the learning points you encountered along the way.

**Things you learned in this course:**

- What GitHub Script is
- How GitHub Script maps to octokit/rest.js
- How to use the GitHub Script action in your workflow
  - By commenting when an issue is opened
  - By adding an issue to a project board when it is opened
- How to read a file from the repository for use with GitHub Script
- How to apply expressions to a workflow file

That should give you quite the start with incorporating the GitHub Script action into your workflows!

---

Congratulations on finishing this course. You will receive no further responses from me, however further action taken in this repo could trigger workflow runs, because of this we recommend commenting out the workflow file if you plan to keep this repository for notes!

