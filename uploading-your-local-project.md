# Uploading your project to GitHub

_You’re an upload away from using a full suite of development tools and premier third-party apps on GitHub. This course helps you seamlessly upload your code to GitHub and introduces you to exciting next steps to elevate your project._

![](https://repository-images.githubusercontent.com/139493629/c438f200-586c-11ea-99da-b64e59deeed3)

**Tags**: Git, GitHub

---

## Step 1: Planning the move

Uploading your project to GitHub gives you the feature-rich tools and collaboration needed to elevate your project to the next level. Not to mention, it's also pretty exciting. If you're doing this for the first time, you have a few options when uploading your project to GitHub. This course will guide you through the necessary steps to upload a local project to be hosted on GitHub.

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

### Where is your project?

Most users find it is easiest to upload a project that is already located on their local machine, so **the goal of this first step is to make a local copy of the repository.** First, let's make sure this course is going to give you the right steps:

<details>
  <summary>Is your project on another version control system, such as Mercurial, Subversion, or another Git platform?</summary>
  <hr>

  ### Moving your project from another version control system

  If you are moving your project from another version control system, the steps are a bit different that uploading your project from your local machine. Because of this, we have a dedicated course for migrating your project to GitHub.

  If you are moving your project from Mercurial, Subversion, or another Git platform, join the [Migrating your project to GitHub]({{ host }}/courses/migrating-your-repository-to-github) course to migrate your project to GitHub.

  <hr>
</details>

<details>
  <summary>Is your project using version control?</summary>
  <hr>

  ### Is your project using version control

  If you aren't sure whether or not your code is under version control, it probably isn't. However, here are a few tests you can apply to know for certain:

  - Can you view a history of the changes you have made?
  - Can you easily roll back to a previous version of your project?
  - Are you required to provide "messages" or "commits" when you make changes?

  If none of these are true, your project isn't using version control.

  <hr>
</details>

### :keyboard: Activity: Exporting your project

Choose the drop-down below that best fits your current situation.

<details>
  <summary>Your project is already on your local machine</summary>
  <hr>

  ### Your project is already on your local machine

  :sparkles: Terrific! @{{ user.username}} since you already have the project locally, you are _almost_ ready to move it to GitHub.

  To confirm: You have a project directory on your computer and you want to save it on GitHub.

  - **If this is correct**, close this issue to signal you are finished with this step. I will open a new issue to show you how to optimize your repository for Git operations.  

  - **If this is incorrect**, please use the next drop-down to learn how to export your project to your local machine or join the [Migrating your project to GitHub]({{ host }}/courses/migrating-your-repository-to-github) course to migrate your project to GitHub.

  <hr>
</details>

<details>
  <summary>Your project is on a non-version controlled site, such as CodePen or Glitch</summary>
  <hr>

  ### General instructions

  There are many platforms that allow users to create and store projects. We can't cover them all, but we will do our best to cover the more common examples. First, let's cover general instructions:

  - Export your project using the tools available on the current site. This will usually happen via a .zip, or some other compressed format, downloaded directly to your local machine
  - Save the .zip file
  - Extract the .zip file

  Now let's talk about specific platforms:

  #### Exporting from CodePen

  From the main page of your CodePen project:

  1. Click the **Export** button in the bottom right corner
  2. Save the exported .zip file in your local directory
  3. Extract the .zip file

  #### Exporting from Glitch

  From your Glitch project page:

  1. Click the dropdown next to your project name in the top right corner
  1. Select **Advanced Options**
  1. Select **Download Project**
  1. Save the exported file in your local directory
  1. Extract the file
  1. Rename the `app` folder as desired

  <hr>
</details>

### Ready to move on?

**Close this issue to signal you are finished with this step.** I will open a new issue to show you how to optimize your repository for Git operations. :tada:

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: I'm waiting for you to close the issue before moving on.

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._

## Step 2: Prepare the project

### Working with Binary files

In general, there are two types of files: text files and binary files.

Text files, like most code files, are easily tracked with Git and are very lightweight.

However, binary files like spreadsheets, presentations with slides, and videos don't work well with Git. If your repository already has some of these files, it's best to have a plan in place before you enable Git version control.

You could choose to remove the binary files, or use another tool like [git-lfs](https://git-lfs.github.com/) (Git Large File Storage). We won't get into detail on how to set up git-lfs in this course, but we will talk about `.gitignore` files next, which are key to protecting your code from becoming bloated with binaries.

### Add a `.gitignore`

As we convert your project to a Git repository, it should only include the source code necessary to build or compile your project. In addition to avoiding binaries as we discussed above, you will also want to keep build artifacts out of your version controlled code. 

To do this, you will create a file in your current project named `.gitignore`. Git will use the `.gitignore` to determine which files and directories should not be tracked under version control. The [`.gitignore` file](https://help.github.com/articles/ignoring-files/) is stored in your repository in order to share the ignore rules with any other users that interact with the repository. 

Since the files to be ignored are dependent on the language you are using, the open source community has contributed some great templates for `.gitignore` files in the [`github/gitignore`](https://github.com/github/gitignore) repository.

### :keyboard: Activity: Prepare your repository

1. Remove any binary files from your repository.
2. In your local environment, [create a `.gitignore` file](https://help.github.com/articles/ignoring-files/). You can use a [template](https://github.com/github/gitignore) or create your own.

> When you are finished, close this issue. I will open a new issue with the next steps. :tada:

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: I'm waiting for you to close this issue before moving on.

Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>

## Step 3: Make the move

Having a project already stored locally enables you to move it to GitHub rather quickly. The following activity provides instructions to move your local project to GitHub using various tools. Select the tool you are most comfortable with and get importing :smile:.

### :keyboard: Activity: Moving your local project

1. In the **Code** tab of this repository, copy the URL shown under **Quick Setup**.
1. Follow the instructions below based on what tool you'd like to use locally.

<details>
  <summary>Using the command line</summary>
  <hr>

  ### Using the command line

  1. In your command line, navigate to your project directory. Type `git init` to initialize the directory as a Git repository.
  2. Type `git remote add origin {{ repoUrl }}.git`
  3. Type `git add .`
  4. Type `git commit -m "initializing repository"`
  5. Type `git push -u origin main` to push the files you have locally to the remote on GitHub. (You may be asked to log in.)

  **Note:** You can also use a password protected SSH key to connect to GitHub. See [Connecting to GitHub with SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) in our documentation to learn more.

  <hr>
</details>

<details>
  <summary>Using GitHub Desktop</summary>
  <hr>

  ### Using GitHub Desktop

GitHub Desktop doesn't allow you to add a new remote for an existing directory, so instead we'll copy the contents of your existing folder to our repo. If you'd like to keep your existing folder, you may want to use the command line or one of the other tools.

  1. In GitHub Desktop, click on **File** and **Clone a repository**.
  2. Click on the **URL** tab.
  3. Paste the URL from this repository.
  4. Move the contents of your local repository to this directory.
  5. Create a commit by entering a commit message and then clicking on **Commit to main**
  6. Click **Publish branch** in the top right corner to push your repository to GitHub.

  <hr>
</details>

<details>
  <summary>Using Visual Studio Code</summary>
  <hr>

  ### Using Visual Studio Code

  1. In Visual Studio Code, open the folder for your project.
  1. Click the icon on the left for **Source Control**.
  1. On the top of the Source Control panel, click the **Git icon**.
  1. If the files you see match the repository you want to create, click **Initialize Repository**.
  1. Next to the word **CHANGES**, click the symbol of the plus sign to stage all of the changes.
        - This is part of the two stage commit. You can use this staging function to create meaningful commits throughout the development process.
  1. In the box in the Source Control panel, type a commit message. Something like "initial commit - moving project" could work.
  1. Click the checkmark at the top of the Source Control panel.
  1. Open the integrated terminal found under View > Integrated Terminal.
  1. In your command line, type `git remote add origin {{ repoUrl }}`
  1. In the Source Control Panel, click the expandable three dots that open a menu of options.
  1. When asked if you'd like to publish the branch, click **Okay**.

  <hr>
</details>

<details>
  <summary>Using Atom</summary>
  <hr>

  ### Using Atom

  1. In Atom, open the folder for your project
  1. At the top of your screen, click **Packages**. Select **GitHub**, and then toggle the **Git Tab** from the drop-down menu.
  1. Select **Create Repository** within the Git tab on the right-hand size of your screen.
  1. Select **Init** to accept the default prompt of the pop up window
  1. In the Git tab, you can see that your files are ready for staging. It _should_ be accounted for, but double check to make sure that none of your binaries or files that you listed in the .gitignore are listed in this dialog menu.
          - If they are, double check your .gitignore file to make sure they're included or remove them from your directory.
  1. Select **Stage All**
          - This is part of the two stage commit. You can use this staging function to create meaningful commits throughout the development process.
  1. In the box at the bottom of the Git panel, type a commit message. Something like "initial commit - moving project" could work.
  1. Select **Commit**
  1. Close Atom
  1. In your command line, navigate to your project directory.
  2. Type `git remote add origin {{ repoUrl }}`
  3. Return to Atom, and select the [Up/Down arrow icon](https://user-images.githubusercontent.com/13326548/36766999-34ff2bb2-1bed-11e8-90c6-3c97d0837244.png) at the bottom of your Git Tab
  4. Click [Push](https://user-images.githubusercontent.com/13326548/36767211-5fd34ce6-1bee-11e8-964a-f49bed227c02.png), above the noted dialog.
  5. Return to your repository, and note a successful push by finding your files on GitHub's code tab.

  <hr>
</details>

<details>
  <summary>Using Eclipse</summary>
  <hr>

  ### Using Eclipse

  1. In Eclipse, from the Eclipse Marketplace, install the [eGit](http://www.eclipse.org/egit/) GitHub plugin.
  2. Open your existing project.
  3. Display the **Git Repositories** window by selecting Window > Show View > Other > Git > Git Repositories.
  3. Click the **Create a Git Repository** button on the Git Repositories pane.
  4. Make changes to your project and create a commit.
  5. Push the changes to your default branch.
  5. When asked for a remote, paste the URL you copied earlier.
  6. Click next, and enter the branch name.

  <hr>
</details>

<hr>
<h3 align="center">Watch below for my response</h3>

> :robot: Once you push your project to GitHub, I'll provide the next steps in your journey.

Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>

I just wanted to remind you that I recommend having a `.gitignore` file in your project, if it needs one. Some projects might not need a `.gitignore` file and that is just fine :ok_hand:. If you decide later that you want to add a `.gitignore` file, use these [instructions](https://help.github.com/articles/ignoring-files/).
## Step 4: Private or Public?

Right now, your repository is set to {% if private %}private{% else %}public{% endif %}.

You can change the visibility of a repository to Private or Public at any time in your repository's **Settings** tab, but there are some things you should know.

### Private Repositories
If your repository is private, the only people who can see your code are you and the collaborators <sup>[:book:](https://help.github.com/articles/github-glossary/#collaborator)</sup> you've invited.

### Public Repositories
In public repositories, anybody can see your code. Millions of open source repositories on GitHub are public, too!

Licenses, code of conduct, and other files are important when you create a public repository. There are many benefits to this, but it's also a large responsibility. Keep in mind that once a repository is public _and_ open source, there are certain implications about keeping it public, depending on the license chosen.

> It's important to note that public does **not** equal open source! The license associated with code determines whether or not it is open source.

<hr>
<h3 align="center">Watch below for my response!</h3>

:robot: I'm waiting for you to close this issue.

Great job @{{ user.username}}! I see that content has now been added to this repository. :tada:

I'm going to close this issue. Next, I'm going to open one last [issue]({{ issueURL }}) to discuss some important repository settings.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>

# Nice Work

![celebrate](https://octodex.github.com/images/Professortocat_v2.png)

Congratulations @{{ user.username }}, you've completed this course! :tada:

## What went well

Before I say good-bye, I want to recap all the tasks you've accomplished. You:

- Learned what to do with an empty repo on GitHub :sparkles:
- Created a .gitignore and removed bulky binaries
- Used your favorite local tools to push existing code
- Set your code up in a GitHub repository :fireworks:

## What's Next?

Now that you've moved your Git repository to GitHub, managing your repository and adding collaborators are common next steps. Here are some recommended courses we think you might be interested in:

[Community Starter Kit]({{ host }}/courses/community-starter-kit)
Hosting a project on GitHub enables you to share your work with millions of other developers. This course will walk you through the different items you can add to your repository to welcome new contributors and make it easier for them to report issues, suggest new features, or potentially submit a pull request!

[Create a release based workflow]({{ host }}/courses/create-a-release-based-workflow)
Now that you have a repository on GitHub learn how to utilize a release workflow to create new releases for your project through an efficient development workflow.

There's so much more you can do with GitHub, and you have a solid start. Now...[what will you learn next]({{ host }}/courses)?

<hr>
<h3 align="center">I won't respond to this issue, just close it when you are done!</h3>

Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>!</h3>

