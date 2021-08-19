# Introduction to GitHub

_If you are looking for a quick and fun introduction to GitHub, you've found it. This class will get you started using GitHub in less than an hour._

![](https://repository-images.githubusercontent.com/136195276/40cbd080-586d-11ea-94a3-6ca7934240ad)

**Tags**: Git, GitHub Pages, Branches, Commits, Pull Requests

---

# :wave: Welcome to GitHub Learning Lab's "Introduction to GitHub"

To get started, I’ll guide you through some important first steps in coding and collaborating on GitHub.

:point_down: _This arrow means you can expand the window! Click on them throughout the course to find more information._
<details><summary>What is GitHub?</summary>
<hr>

## What is GitHub?

I'm glad you asked! Many people come to GitHub because they want to contribute to open source <sup>[:book:](https://help.github.com/articles/github-glossary/#open-source)</sup> projects, or they're invited by teammates or classmates who use it for their projects. Why do people use GitHub for these projects?

**At its heart, GitHub is a collaboration platform.**

From software to legal documents, you can count on GitHub to help you do your best work with the collaboration and security tools your team needs. With GitHub, you can keep projects completely private, invite the world to collaborate, and streamline every step of your project.

**GitHub is also a powerful version control tool.**

GitHub uses Git <sup>[:book:](https://help.github.com/articles/github-glossary/#git)</sup>, the most popular open source version control software, to track every contribution and contributor <sup>[:book:](https://help.github.com/articles/github-glossary/#contributor)</sup> to your project--so you know exactly where every line of code came from.

**GitHub helps people do much more.**

GitHub is used to build some of the most advanced technologies in the world. Whether you're visualizing data or building a new game, there's a whole community and set of tools on GitHub that can get you to the next step. This course starts with the basics, but we'll dig into the rest later!

:tv: [Video: What is GitHub?](https://www.youtube.com/watch?v=w3jLJU7DT5E)
<hr>
</details><br>

<details><summary>Exploring a GitHub repository</summary>
<hr>

## Exploring a GitHub repository

:tv: [Video: Exploring a repository](https://www.youtube.com/watch?v=R8OAwrcMlRw)

### More features

The video covered some of the most commonly-used features. Here are a few other items you can find in GitHub repositories:

- Project boards: Create Kanban-style task tracking board within GitHub
- Wiki: Create and store relevant project documentation
- Insights: View a drop-down menu that contains links to analytics tools for your repository including:
  - Pulse: Find information about the work that has been completed and the work that’s in-progress in this project dashboard
  - Graphs: Graphs provide a more granular view of the repository activity including who contributed to the repository, who forked it, and when they completed the work

### Special Files

In the video you learned about a special file called the README.md. Here are a few other special files you can add to your repositories:

- CONTRIBUTING.md: The `CONTRIBUTING.md` is used to describe the process for contributing to the repository. A link to the `CONTRIBUTING.md` file is shown anytime someone creates a new issue or pull request.
- ISSUE_TEMPLATE.md: The `ISSUE_TEMPLATE.md` is another file you can use to pre-populate the body of an issue. For example, if you always need the same types of information for bug reports, include it in the issue template, and every new issue will be opened with your recommended starter text.

<hr>
</details>

### Using issues

This is an issue <sup>[:book:](https://help.github.com/articles/github-glossary/#issue)</sup>: a place where you can have conversations about bugs in your code, code review, and just about anything else.

Issue titles are like email subject lines. They tell your collaborators what the issue is about at a glance. For example, the title of this issue is Getting Started with GitHub.


<details><summary>Using GitHub Issues</summary>

## Using GitHub issues

Issues are used to discuss ideas, enhancements, tasks, and bugs. They make collaboration easier by:

- Providing everyone (even future team members) with the complete story in one place
- Allowing you to cross-link to other issues and pull requests <sup>[:book:](https://help.github.com/articles/github-glossary/#pull-request)</sup>
- Creating a single, comprehensive record of how and why you made certain decisions
- Allowing you to easily pull the right people and teams into a conversation with @-mentions

:tv: [Video: Using issues](https://www.youtube.com/watch?v=Zhj46r5D0nQ)

<hr>
</details>

<details><summary>Managing notifications</summary>
<hr>

## Managing notifications

:tv: [Video: Watching, notifications, stars, and explore](https://www.youtube.com/watch?v=ocQldxF7fMY)

Once you've commented on an issue or pull request, you'll start receiving email notifications when there's activity in the thread.  

### How to silence or unmute specific conversations

1. Go to the issue or pull request
2. Under _"Notifications"_, click the **Unsubscribe** button on the right to silence notifications or **Subscribe** to unmute them

You'll see a short description that explains your current notification status.

### How to customize notifications in Settings

1. Click your profile icon
2. Click **Settings**
3. Click **Notifications** from the menu on the left and [adjust your notification preferences](https://help.github.com/articles/managing-notification-delivery-methods/)

### Repository notification options

* **Watch**: You'll receive a notification when a new issue, pull request or comment is posted, and when an issue is closed or a pull request is merged  
* **Not watching**: You'll no longer receive notifications unless you're @-mentioned
* **Ignore**: You'll no longer receive any notifications from the repository

### How to review notifications for the repositories you're watching

1. Click your profile icon
2. Click **Settings**
3. Click **Notification** from the menu on the left
4. Click on the [things you’re watching](https://github.com/watching) link
5. Select the **Watching** tab
6. Click the **Unwatch** button to disable notifications, or **Watch** to enable them

<hr>
</details>

<hr>
<h3 align="center">Keep reading below to find your first task</h3>


## Step 1: Assign yourself

Unassigned issues don't have owners to look after them. When you’re assigned to an issue or pull request, it tells repository visitors and contributors that you'll be facilitating the conversation or task :muscle:.

### :keyboard: Activity

1. On the right side of the screen, under the "Assignees" section, click the gear icon and select yourself

For a printable version of the steps in this course, check out the [Quick Reference Guide]({{ host }}/public/{{ course.slug }}.pdf).

<hr>
<h3 align="center">I'll respond when I detect you've assigned yourself to this issue.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


## Step 2: Turn on GitHub Pages

:tada: You're now the proud manager of this issue! Now that you've assigned yourself, people who drop by know that they're welcome to participate, but you'll be carrying this issue across the finish line. :sunglasses:.

### Let's use GitHub Pages

Now, on to business! GitHub Pages allow you to serve a static site from a repository. We've filled this repository with some site content, but the rendered site isn't visible right now. Let's change that.

### :keyboard: Activity: Enable GitHub Pages

1. Click on the [**Settings**]({{ repoUrl }}/settings) tab in this repository
1. Scroll down to the "GitHub Pages" section
1. From the "Source" drop down, select **main branch**

> Note: Even though you'll see an option to choose a theme, do not apply a theme at this point. We've protected the code so you can't make unintended changes. You'll have the opportunity to apply a theme when the course is completed. 

<hr>
<h3 align="center">I'll respond in this issue when I detect GitHub Pages has deployed your site.</h3>

> Turning on GitHub Pages creates a deployment of your repository. I may take up to a minute to respond as I await the deployment.


## Step 3: Close an issue

You turned on GitHub Pages!

Your site is now visible to the public. Check it out at {{ store.pagesUrl }}.

Now that you’ve completed the tasks in this issue, it's time to close it! Closing an issue tells other contributors that this particular conversation or task has come to an end.

### :keyboard: Activity

1. Click the **Close issue** button below

<hr>
<h3 align="center">I'll respond when you've closed this issue.</h3>


### Introduction to GitHub flow

Now that you're familiar with issues, let's use this issue to track your path to your first contribution.

People use different workflows to contribute to software projects, but the simplest and most effective way to contribute on GitHub is the GitHub flow.

:tv: [Video: Understanding the GitHub flow](https://www.youtube.com/watch?v=PBI2Rz-ZOxU)

<hr>
<h3 align="center">Read below for next steps</h3>


## Step 4: Create a branch

Let’s complete the first step of the GitHub flow: creating a branch <sup>[:book:](https://help.github.com/articles/github-glossary/#branch)</sup>.

<details><summary>Creating a branch</summary>

## Creating a branch

:tv: [Video: Branches](https://www.youtube.com/watch?v=xgQmu81G1yY)

You just learned how to create a branch—the first step in the GitHub flow.

Branches are an important part of the GitHub flow because they allow us to separate our work from the `main` branch. In other words, everyone's work is safe while you contribute.

### Tips for using branches

A single project can have hundreds of branches, each suggesting a new change to the `main` branch.

The best way to keep branches organized with a team is to keep them concise and short-lived. In other words, a single branch should represent a single new feature or bug fix. This reduces confusion among contributors when branches are only active for a few days before they’re merged <sup>[:book:](https://help.github.com/articles/github-glossary/#merge)</sup> into the `main` branch.

<hr>
</details>

### :keyboard: Activity: Your first branch

{% if preferences.gitTool == 'cli' %}
1. Open your preferred command line interface, which we'll call your shell from now on.
1. Clone this repository:
      ```shell
      git clone {{ thePayload.repository.clone_url }}
      ```
1. Navigate to the repository in your shell:
      ```shell
      cd {{ thePayload.repository.name }}
      ```
1. Create a branch, use whatever name you like. Feel free to use the suggested name below. 
      ```shell
      git branch my-slide
      ```
1. Push the branch to GitHub:
      ```
      git push --set-upstream origin <BRANCH-NAME>
      ```

{% elsif preferences.gitTool == 'vscode' %}
1. Download and open [Visual Studio Code](https://code.visualstudio.com/Download) (referred to as VS Code) if you don't already have it.
1. In VS Code, open the Command Palette using <kbd>Ctrl+Shift+P</kbd> on Windows, or <kbd>Command ⌘+Shift+P</kbd> on macOS. You can also follow [VS Code's official documentation](https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository) on cloning.
1. Type: `git clone` and press <kbd>Enter</kbd>
      ![a screenshot of vs code with the command palette open](https://user-images.githubusercontent.com/16547949/53639288-bcf9ec80-3bf6-11e9-9d18-d97167168248.png)
1. Paste in the URL of the repository in the new window and press <kbd>Enter</kbd>:
      ```shell
      {{ thePayload.repository.clone_url }}
      ```
1. Select the location in which to save the repository and click **Choose folder**. Then, open the location you selected.
1. The repository folder should now be open in your VS Code project. Click on `main` at the bottom left of the VS Code window. This will bring up the Command Palette with the commands related to Git branches.
      ![a screenshot of the Git branches in VS Code](https://user-images.githubusercontent.com/16547949/53639606-adc76e80-3bf7-11e9-98ac-bd41ae2b40db.png)
1. Click **Create new branch** and enter any branch name you'd like, such as `my-slide`. Then press <kbd>Enter</kbd>.
1. When asked to select the ref to create the branch from, select `main`.
1. Go to the Source Control view, click on the ellipsis (...) and select **Push**. Confirm the dialog box asking you to publish the branch.
      ![a screenshot of the source control view in VS Code](https://user-images.githubusercontent.com/16547949/53640015-ee73b780-3bf8-11e9-8c90-be9022b9555a.png)

{% else %}

1. Navigate to the [Code tab]({{ thePayload.repository.html_url }})
2. Click **Branch: main** in the drop-down
3. In the field, enter a name for your branch, like `my-slide`
4. Click **Create branch: <name>** or press the <kbd>Enter</kbd> key to create your branch

{% endif %}
<hr>
<h3 align="center">I'll respond when I detect a new branch has been created in this repository.</h3>


## Consider this issue finished! :white_check_mark:

<hr>
<h3 align="center">Head over to <a href="{{ issueURL }}">the next issue</a> now!</h3>


## Step 5: Commit a file

:tada: You created a branch!

Creating a branch allows you to make modifications to your project without changing the deployed `main` branch. Now that you have a branch, it’s time to create a file and make your first commit!

<details><summary>Commits 101</summary>

## Commits 101

When you’re finished creating or making changes to a file on GitHub, scroll to the bottom of the page. Then find the "Commit new file" section.

In the first field, type a commit message. The commit message should briefly tell contributors about the changes you are introducing to the file.

### Rules to live by for commit messages:

- Don’t end your commit message with a period.
- Keep your commit messages to 50 characters or less. Add extra detail in the extended description window if necessary. This is located just below the subject line.
- Use active voice. For example, "add" instead of "added" and "merge" instead of "merged".
- Think of your commit as expressing intent to introduce a change.

<hr>
</details>

### :keyboard: Activity: Your first commit

The following steps will guide you through the process of committing a change on GitHub.

{% if preferences.gitTool == 'cli' %}
1. Check out to your branch:
      ```shell
      git checkout {{ thePayload.ref }}
      ```
1. Create a new file named `_posts/0000-01-02-{{ user.username }}.md`.
1. Add the following content to your file:
      ```yaml 
      ---
      layout: slide
      title: "Welcome to our second slide!"
      ---
      Your text
      Use the left arrow to go back!
      ```
1. Stage your new file:
      ```shell
      git add _posts/0000-01-02-{{ user.username }}.md
      ```
1. After adding the text, commit the change while providing a commit message. For guidelines on commit messages, check out the **Commits 101** drop-down, just above these instructions:
      ```shell
      git commit -m "<YOUR-MESSAGE>"
      ```
1. Push your new commit to GitHub:
      ```shell
      git push
      ```

{% elsif preferences.gitTool == 'vscode' %}
1. In the `_posts` folder, create a new file named `0000-01-02-{{ user.username }}.md`. The full path to your file will be: `_posts/0000-01-02-{{ user.username }}.md`.
1. Add the following content to your file and save it:
      ```yaml 
      ---
      layout: slide
      title: "Welcome to our second slide!"
      ---
      Your text
      Use the left arrow to go back!
      ```
1. To stage your new file: go to the Source Control view and click the **+** button next to the file. You can also follow along with [VS Code's official documentation](https://code.visualstudio.com/docs/editor/versioncontrol#_commit).
      ![a screenshot of the staging button in the source control view](https://user-images.githubusercontent.com/16547949/53641057-d5b8d100-3bfb-11e9-9b69-53b0661cd5cd.png)
1. Commit the change by typing a commit message in the text field and pressing <kbd>Ctrl+Enter</kbd> on Windows or <kbd>Command ⌘+Enter</kbd> on macOS.
      ![a screenshot of the commit message on VS Code](https://user-images.githubusercontent.com/16547949/53641276-698a9d00-3bfc-11e9-9b3d-01680fd01d7c.png)
1. Click on the ellipsis (...) and select **Push**.

{% else %}
1. Create a new file on this branch, in a `_posts` folder called `0000-01-02-{{ user.username }}.md`. You can do so using [this shortcut]({{ thePayload.repository.html_url }}/new/{{ thePayload.ref }}?filename=_posts/0000-01-02-{{ user.username }}.md) or manually as follows:
      - Return to the "Code" tab
      - In the branch drop-down, select "{{ thePayload.ref }}"
      - Click **Create new file**
      - In the "file name" field, type `_posts/0000-01-02-{{ user.username }}.md`. Entering the `/` in the filename will automatically place your file in the `_posts` directory.
1. When you’re done naming the file, add the following content to your file:
      ```yaml
      ---
      layout: slide
      title: "Welcome to our second slide!"
      ---
      Your text
      Use the left arrow to go back!
      ```
1. After adding the text, you can commit the change by entering a commit message in the text-entry field below the file edit view. For guidelines on commit messages, check out the **Commits 101** drop-down, just above these instructions
1. When you’ve entered a commit message, click **Commit new file**
{% endif %}
<hr>
<h3 align="center">I'll respond when I detect a new commit on this branch.</h3>


## Step 6: Open a pull request

Nice work making that commit :sparkles:

Now that you’ve created a commit, it’s time to share your proposed change through a pull request! Where issues encourage discussion with other contributors and collaborators on a project, pull requests help you share your changes, receive feedback on them, and iterate on them until they’re perfect!

<details><summary>What is a pull request?</summary>

## Pull requests

Let’s think back to the GitHub flow again. You have created a branch, added a file, and committed the file to your branch. Now it’s time to collaborate on your file with other students taking this class. This collaboration happens in a pull request. Check out this video to learn more:

:tv: [Video: Introduction to pull requests](https://youtu.be/kJr-PIfLDl4)
<hr>
</details>

This pull request is going to keep the changes you just made on your branch and propose applying them to the `main` branch.

### :keyboard: Activity: Create a pull request

1. Open a pull request using [this shortcut]({{ url }}) or manually as follows:
    - From the "Pull requests" tab, click **New pull request**
    - In the "base:" drop-down menu, make sure the "main" branch is selected
    - In the "compare:" drop-down menu, select "{{ branch | remove: 'refs/heads/' }}"
1. When you’ve selected your branch, enter a title for your pull request. For example `Add {{ user.username }}'s file`
1. The next field helps you provide a description of the changes you made. Feel free to add a description of what you’ve accomplished so far. As a reminder, you have: created a branch, created a file and made a commit, and opened a pull request
1. Click **Create pull request**

<hr>
<h3 align="center">I'll respond in your new pull request.</h3>


Good pull requests have a body description that tells other contributors about the change you're suggesting, so they understand the context.

Let's edit this pull request to add a body description.

## :keyboard: Activity: Fixing your pull request

1. The first comment on your pull request will have the default text of **No description provided**. Click on the **...** icon located at the top right corner of the comment box, then click on **Edit** to make an edit
1. Add a description of the changes you've made in the comment box. Feel free to add a description of what you’ve accomplished so far. As a reminder, you have: created a branch, created a file and made a commit, and opened a pull request
1. Click the green **Update comment** button at the bottom right of the comment box when done

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">I'll respond when I detect this pull request's body has been edited.</h3>


Your base branch should be named `main`. Let's open a new pull request to fix this.

### :keyboard: Activity: Adjust PR direction

1. Click on the **Edit** button located to the right of your pull request's title
1. Below the title's comment box, in the "base:" drop-down menu, make sure the “main” branch is selected
1. A pop-up window will appear asking if you want to change the "base". Click the green **Change base** button

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">I'll respond when I detect this pull request's base has been edited.</h3>


I was expecting your file to be named **{{ expected }}**. 

Let's edit this pull request to fix both of these issues.

## :keyboard: Activity: Fixing the file name in your pull request

{% if preferences.gitTool == 'cli' %}
1. Check out to your branch:
    ```shell
    git checkout {{ branch }}
    ```
1. Type `ls` to see a listing of your root directory.
1. Confirm that you've got a folder titled `_posts`.
1. Step into the folder with `cd _posts`.
1. Type `ls` to see a listing of your `_posts` folder.
1. Ensure you've got a file named `{{ expected }}`.
1. If you find you have to make any changes, then stage, commit, and push those changes:
    ```shell
    git add .
    git commit -m "<YOUR-MESSAGE>"
    git push
    ```
{% else %}
1. Click the [Files Changed tab]({{ url }}) in this pull request.
1. Verify that the only file edited is named `{{ expected }}`.
1. If the file is improperly named, or not in a proper location, use the edit function to correct it. 
1. Above the contents of the file, select all text in the field that contains the filename and delete it.
1. Continue pressing your backspace key to also delete any directory names that exist.
1. Type the proper filename:
    ```shell
    {{ expected }}
    ```
1. Scroll to the bottom and enter a commit message and commit in the **Commit Changes** section.

![gif of changing file name in UI](https://user-images.githubusercontent.com/9906718/112817649-f4ac1a80-9082-11eb-972f-4a6609857b20.gif)
{% endif %}

**Note**: You can find directions on how to move files while editing in our [documentation](https://docs.github.com/en/github/managing-files-in-a-repository/moving-a-file-to-a-new-location).

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


## Step 7: Respond to a review

Your pull request is looking great!

Let’s add some content to your file. Replace line 5 of your file with a quotation or meme and witty caption. Remember: [Markdown](https://guides.github.com/features/mastering-markdown/) is supported.

### :keyboard: Activity: Change your file

{% if preferences.gitTool == 'cli' %}
1. Check out to your branch:
    ```shell
    git checkout {{ branch }}
    ```
1. Open the file `_posts/0000-01-02-{{ user.username }}.md`.
1. Replace line 5 of the file with something new. 
1. Stage your new changes:
    ```shell
    git add _posts/0000-01-02-{{ user.username }}.md
    ```
1. Commit your changes:
    ```shell
    git commit -m "<YOUR-MESSAGE>"
    ```
1. Push your edits to GitHub:
    ```shell
    git push
    ```

{% elsif preferences.gitTool == 'vscode' %}
1. Open the file `_posts/0000-01-02-{{ user.username }}.md`.
1. Replace line 5 of the file with something new. 
1. Stage your new changes. As a reminder, you can do this in the Source Control view, click the **+** symbol next to the file.
1. Commit your changes. You can do this in the Source Control view, enter a commit message in the text field and press <kbd>Ctrl+Enter</kbd> on Windows or <kbd>Command ⌘+Enter</kbd> on macOS.
1. Push your edits to GitHub. In the Source Control view, click on the ellipsis (...), and select **Push**.

{% else %}
1. Click the [Files Changed tab]({{ url }}) in this pull request
1. Edit your newly added file
1. Replace line 5 with something new
1. Scroll to the bottom and click **Commit Changes**
{% endif %}

**Note** : Can't find the button to edit the file? It may look like a pencil, or it may look like three dots.

<hr>
<h3 align="center">I'll respond when I detect a commit on this branch.</h3>


## Step 8: Merge your pull request

Nicely done @{{ user.username }}! :sparkles:

You successfully created a pull request, and it has passed all of the tests. You can now merge your pull request.

### :keyboard: Activity: Merge the pull request

{% if preferences.gitTool == 'cli' %}
1. Check out to the `main` branch:
    ```shell
    git checkout main
    ```
2. Merge your branch:
    ```shell
    git merge {{ branch }}
    ```
3. Push the merged history to GitHub:
    ```shell
    git push
    ```
4. Delete your the branch locally:
    ```shell
    git branch -d {{ branch }}
    ```
{% else %}
1. Click **Merge pull request**
1. Click **Confirm merge**
{% endif %}
1. Once your branch has been merged, you don't need it anymore. Click **Delete branch**.

<hr>
<h3 align="center">I'll respond when this pull request is merged.</h3>


### :keyboard: Activity: Reopen pull request

Oooops! It looks like you might have accidentally closed your pull request.

1. Click **Reopen pull request**. If this button is inactive, you will need to click **Restore branch** first
1. Merge the pull request.

<hr>
<h3 align="center">I'll respond when this pull request is merged.</h3>


## Nice work

![celebrate](https://octodex.github.com/images/collabocats.jpg)

Congratulations @{{ user.username }}, you've completed this course!

## What went well

Now, you have your slide deck deployed [here]({{ store.pagesUrl }}) and you've gone through the GitHub Flow.

Before I say good-bye, here's a recap of all the tasks you've accomplished in your repository:

- You learned about issues, pull requests, and the structure of a GitHub repository
- You learned about branching
- You created a commit
- You viewed and responded to pull request reviews
- You edited an existing file
- You enabled GitHub Pages
- You made your first contribution! :tada:  

## Give us feedback

We'd love to hear what you thought of this course. Please share your feedback in [this brief survey](https://www.surveymonkey.com/r/intro-to-github-1).

## What's next?

We hope this course helped you feel more comfortable using GitHub. Remember: You’re always welcome to repeat course topics if you’d like additional practice. If you’re ready to build on your new skills, here are some ideas.

### Contribute to a project

To find projects to contribute to through trending topics and curated collections, check out [GitHub Explore](https://github.com/explore).

### Keep learning

Here are some suggestions for future courses you can take:
- [GitHub Pages]({{ host }}/{{ course.Owner.login }}/github-pages): Continue learning about GitHub Pages, which we touched on in this course.
- [Communicating using Markdown]({{ host }}/{{ course.Owner.login }}/communicating-using-markdown): We used a little Markdown in this course, but if you want to learn all about this :sparkles: syntax, take the course!

[What will you learn next]({{ host }}/courses)?


