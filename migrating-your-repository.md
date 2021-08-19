# Migrating your repository to GitHub

_You're a migration away from using a full suite of development tools and premier third-party apps on GitHub. This course helps you seamlessly move code to GitHub and sets you up to do more after you make the move._

![](https://repository-images.githubusercontent.com/139504208/4e815600-586d-11ea-8a49-3c4e95226613)

**Tags**: Git, GitHub

---

## Step 1: Plan the migration

Migrating your repository to GitHub gives you the feature-rich tools and collaboration needed to elevate your project to the next level. This course will guide you through the necessary steps to migrate your repository from another version control system to GitHub.

I know some people like to get straight to the point while others like more information. For those who like more information, be sure to check out the drop-downs like this one :arrow_down:

<details>
  <summary>Why move to GitHub?</summary>
  <hr>

  ### Why move to GitHub?

  You may be wondering what this GitHub thing is all about and why you should use it. If this sounds like you, here are a few reasons to make GitHub your project's new home:

  - **Version control** — Everything on GitHub is stored in [Git](http://git-scm.com), the best version control system around. Version control allows you to experiment and make mistakes in code without messing up your final product.
  - **Keep your code in one place** — Whether you work on multiple computers or just want to get some important projects off your computer, GitHub is the perfect place to store your projects online.
  - **Collaboration** — Once your code is on GitHub, you can invite others to work on your code with you, share it with the world, or send a link to a friend to help you debug a problem.

  <hr>
</details>

### Important considerations for migrations

If you are moving from another version control system such as Mercurial, Subversion, or another Git platform, you will need to make a few decisions:

1. Do you need all of the history?
2. Is there project data that lives outside of the history you need to preserve? (ex: Issues, Discussions, Pull Requests)

#### Should you keep all of the history?

If you are moving your project to GitHub as a public project, you may want to consider what is in your history. For example:

- Is there sensitive information in historical commit <sup>[:book:](https://help.github.com/articles/github-glossary/#commit)</sup> messages?
- Do you want to use [private email addresses](https://help.github.com/articles/setting-your-commit-email-address-on-github/) on GitHub?

| If ... | Then ... |
| ------- | --------- |
| If you do want to keep the history | Check out the **Using the GitHub Importer** section under Next steps.|
| If you do **not** want all of this history | We recommend you do a clean cutover to "restart" version control and remove any unwanted history. If this sounds like the right option for you, check out the **Doing a clean cutover** section under Next steps. |

#### Should you keep non-Git data?

Mapping users, keeping commit comments, and other data migrations are more complex, but not impossible. For most version control systems there are helpful Open Source <sup>[:book:](https://help.github.com/articles/github-glossary/#open-source)</sup> tools available. Here are a few resources:

  - [GitHub's documentation on importing from other VCS](https://help.github.com/en/enterprise/admin/migrations/importing-data-from-third-party-version-control-systems)
  - [Blog post about GitHub Migrator tool](https://github.com/blog/2110-migrate-your-code-with-the-github-importer)

### Other scenarios

<details>
  <summary>Your project is on another site not using version control, such as CodePen or Glitch</summary>
  <hr>

  ### Moving your project from another site not using version control

  If you are moving your project from a site not using version control, such as CodePen or Glitch, the steps are a bit different that migrating your project from a source that is using version control. Because of this, we have a dedicated course for uploading your local project to GitHub. If this is your situation, please join the [Uploading your local project to GitHub](https://lab.github.com/githubtraining/uploading-your-project-to-github) course to learn how to handle your case.

  <hr>
</details>

<details>
  <summary>Your project is already on your local machine</summary>
  <hr>

  ### Your project is already on your local machine

  :sparkles: Terrific! @{{ user.username}} since you already have the project locally, you are _almost_ ready to move it to GitHub.

  But, this course guides you through the necessary steps to migrate your repository from another version control system unto GitHub. Since your project is already on your local machine, you need slightly different instructions. Please join the [Uploading your local project to GitHub]({{ host }}/courses/uploading-your-local-project) course to learn how to handle your case.

  <hr>
</details>

### :keyboard: Activity: Next steps

Choose the drop-down below that best fits your current situation.

If you don't have a repository to use for this activity, you are welcome to use this one: https://github.com/githubtraining/github-move


<details>
  <summary>Using the GitHub Importer</summary>
  <hr>

  ### Using the GitHub Importer

  GitHub has a terrific import tool that will allow you to import your repository in just a few minutes.

  First, let's make sure your repository <sup>[:book:](https://help.github.com/articles/github-glossary/#repository)</sup> is Git friendly. **Close this issue** and I will open a new issue with next steps.

  <hr>
</details>

<details>
  <summary>Doing a clean cutover</summary>
  <hr>

  ### Doing a clean cutover

  To do a clean cutover, you will need to remove the existing history. Some people like to save a back up of the project with the history. To start the process:

  1. Download a copy of the project to your local machine.
  1. Remove version control (with Git this is as simple as running `rm -rf .git` inside the repository).
  1. Now that your project is local on your machine and you have removed any history being tracked by Git, the remaining steps in this course largely cover migrating that Git history. Since you just removed that aspect of your project, please join the [Uploading your local project to GitHub]({{ host }}/courses/uploading-your-local-project) course to see the next steps to upload your local project to GitHub.

  <hr>
</details>

<details>
  <summary>Migrating non-Git data</summary>
  <hr>

  ### Migrating non-Git data

  These migrations are more nuanced and outside the scope of this course. I recommend you go through these steps with a simple repository so you can learn best practices and then apply them to your more complex migration.

  <hr>
</details>

### Ready to move on?

**Close this issue to signal you are finished with this step**. I will open a new issue to show you how to optimize your repository for Git operations. :tada:

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: I'm waiting for you to close the issue before moving on.

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


## Step 2: Prepare the project

### Working with Binary files

In general, there are two types of files: text files and binary files.

Text files, like most code files, are easily tracked with Git <sup>[:book:](https://help.github.com/articles/github-glossary/#git)</sup> and are very lightweight.

However, binary files like spreadsheets, presentations with slides, and videos don't work well with Git. If your repository already has some of these files, it's best to have a plan in place before you enable Git version control.

You could choose to remove the binary files, or use another tool like [git-lfs](https://git-lfs.github.com/) (Git Large File Storage). We won't get into detail on how to set up git-lfs in this course, but we will talk about `.gitignore` files next, which are key to protecting your code from becoming bloated with binaries.

### Add a `.gitignore`

As we convert your project to a Git repository, it should only include the source code necessary to build or compile your project. In addition to avoiding binaries as we discussed above, you will also want to keep build artifacts out of your version controlled code. 

To do this, you will create a file in your current project named `.gitignore`. Git will use the `.gitignore` to determine which files and directories should not be tracked under version control. The [`.gitignore` file](https://help.github.com/articles/ignoring-files/) is stored in your repository in order to share the ignore rules with any other users that interact with the repository. 

Since the files to be ignored are dependent on the language you are using, the open source community has contributed some great templates for `.gitignore` files in the [`github/gitignore`](https://github.com/github/gitignore) repository.

### :keyboard: Activity: Prepare your repository

1. Remove any binary files from your repository.
1. In your local environment, [create a `.gitignore` file](https://help.github.com/articles/ignoring-files/). You can use a [template](https://github.com/github/gitignore) or create your own.

> When you are finished, close this issue. I will open a new issue with the next steps. :tada:

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: I'm waiting for you to close this issue before moving on.


Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>


## Step 3: Private or Public?

You have one more decision to make before you migrate your code! Right now, your repository is set to {% if private %}private{% else %}public{% endif %}.

You can change the visibility of a repository to Private or Public at any time in your repository's **Settings** tab, but there are some things you should know.

### Private Repositories
If your repository is private, the only people who can see your code are you and the collaborators <sup>[:book:](https://help.github.com/articles/github-glossary/#collaborator)</sup> you've invited.

### Public Repositories
In public repositories, anybody can see your code. Millions of open source repositories on GitHub are public, too!

Licenses, code of conduct, and other files are important when you create a public repository. There are many benefits to this, but it's also a large responsibility. Keep in mind that once a repository is public _and_ open source, there are certain implications about keeping it public, depending on the license chosen.

It's important to note that **public does not equal open source**! The license associated with code determines whether or not it is open source.

> When you are finished, close this issue. I will open a new issue with the next steps. :tada:

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: I'm waiting for you to close this issue before moving on.


Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>


## Step 4: Complete the Import

It's time for the big move! Since your source code is in Subversion, Mercurial, Team Foundation Server, or another Git repository, you can move it to GitHub using **GitHub Importer**. GitHub Importer doesn't bring over every piece of data, but it does bring the history. You can read more about GitHub Importer's capabilities [here](https://help.github.com/articles/about-github-importer/).

### :keyboard: Activity: Import your project using GitHub Importer

1. Copy the URL for your existing repository on Subversion, Mercurial, TFS, or another Git server
1. Navigate to the **Code** tab of this repository and scroll down to the section labeled **…or import code from another repository**
1. Click **Import code**
1. Paste the URL for your repository in its current location
1. Click **Begin import**

> Pro-tip, since this repository is empty, you can also import by simply going to: https://github.com/{{ user.username }}/github-move/import

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: Once I see you have pushed your project to GitHub, I'll close this issue


## Welcome to GitHub @{{ user.username }}

As soon as I see code in this repository, I will close this issue and stop responding in this repository. So, before I say good-bye, I want to recap all the tasks you've accomplished. You:

- Learned what to do with an empty repo on GitHub :sparkles:
- Created a .gitignore and removed bulky binaries
- Used GitHub Importer for the first time
- Set your code up in a GitHub repository :fireworks:

## What's Next?

After you've migrated your Git repository to GitHub, managing your repository and adding collaborators are common next steps. Here is another course we think you might be interested in:

[Community Starter Kit]({{ host }}/courses/community-starter-kit)
Hosting a project on GitHub enables you to share your work with millions of other developers. This course will walk you through the different items you can add to your repository to welcome new contributors and make it easier for them to report issues, suggest new features, or potentially submit a pull request! 

There's so much more you can do with GitHub, and you have a solid start. Now...[what will you learn next]({{ host }}/courses)?


Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>


