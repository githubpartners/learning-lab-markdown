# GitHub Actions: Write Docker container actions

_Learn how to write your own GitHub Docker container action!  This course will empower you to begin automating customized tasks unique to your workflow._

![](https://repository-images.githubusercontent.com/225716226/6762dd00-6aa2-11ea-912d-7cfb0e2457f6)

**Tags**: Docker, Containers, Workflows, Application programming interface (API), Publishing GitHub Actions

---

# Hi there 👋!

Hello @{{user.login}}, I'm so excited to teach you how to create your own custom Docker based action 😄

GitHub Actions are enabled on your repository by default, but we still have to tell our repository to use them. We do this by creating a workflow file in our repository.

#### What is a workflow file?

A **workflow** file can be thought of as the recipe for automating a task. They house the start-to-finish instructions, in the form of `jobs` and `steps`, for what should happen based on specific triggers.

Your repository can contain multiple **workflow** files that carry out a wide variety of tasks. It is important to consider this when deciding on a name for your **workflow**. The name you choose should reflect the tasks being performed.

_In our case, we will use this one **workflow** file for many things, which leads us to break this convention for teaching purposes._

---

<!-- 💻 Actively learn about workflows by enrolling in [this Learning Lab course which has no name or content yet]() -->

📖 Read more about [workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow#choosing-the-type-of-actions-for-your-workflow)


## Oh no...  I found an error ⚠️

**Error**
The title of this pull request isn't what I expected!

**Solution**
Verify the name of your pull request is **{{title}}** and keep in mind that this is case-sensitive.

Follow these steps to rename your pull request:
1. Click on **Edit** next to the pull request's title. 
1. The title will turn to a text field, **{{ title }}** in the title field.
1. Click **Save**.

I'll respond when I detect this pull request has been renamed.

## A new pull request

Now, let's move to the [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.


## You have triggered a workflow!

Great job adding the workflow. Adding that file to this branch is enough for GitHub Actions to begin running on your repository. The time this takes will vary based on the complexity of the workflow. At this point we can ignore the workflow because it doesn't do anything yet, but while this runs I'll briefly explain the components of the workflow you just added.

If you want to inspect your running workflow you can do so by heading over to the [Actions tab]({{actionsUrl}}) of this repository.


## Anatomy of GitHub Actions

GitHub Actions is a unique world that lives alongside your repository.  It is one made up of many moving parts and having a general understanding of these parts will help us understand the behavior we are going to program into our action.

From 30,000 feet GitHub Actions is made up of the following components, with each component having its own complexities:

| Component           | Description                                                                                                                                                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action              | Individual tasks that you combine as **steps** to create a **job**. **Actions** are the smallest portable building block of a workflow.  To use an **action** in a workflow, you **must include it as a step**.                                                                                                   |
| Artifact            | <b>Artifacts</b> are the files created when you build and test your code. <b>Artifacts</b> might include binary or package files, test results, screenshots, or log files.  <b>Artifacts</b> can be used by the other <b>jobs</b> in the workflow or deployed directly by the <b>workflow</b>.                    |
| Event               | A specific activity that triggers a <b>workflow</b> run.                                                                                                                                                                                                                                                          |
| Job                 | A defined task made up of <b>steps</b>. Each <b>job</b> is run in a fresh instance of the <b>virtual environment</b>. <b>Jobs</b> can run at the same time in parallel or be dependent on the status of a previous <b>job</b> and run sequentially.                                                               |
| Runner              | Any machine with the GitHub Actions <b>runner</b> application installed. You can use a <b>runner</b> hosted by GitHub or host your own <b>runner</b>. A <b>runner</b> waits for available <b>jobs</b>. <b>Runners</b> run one <b>job</b> at a time reporting the progress, logs, and final result back to GitHub. |
| Step                | A <b>step</b> is a set of tasks performed by a <b>job</b>.  <b>Steps</b> can run <b>commands</b> or <b>actions</b>.                                                                                                                                                                                               |
| Virtual Environment | The <b>virtual environment</b> of a GitHub-hosted <b>runner</b> includes the virtual machine's hardware configuration, operating system, and installed software.                                                                                                                                                  |
| Workflow            | A configurable automated process that you can set up in your repository.  <b>Workflows</b> are made up of one or more <b>jobs</b> and can be scheduled or activated by an <b>event</b>.                                                                                                                           |

### How these pieces fit together

![Actions workflow diagram](https://i.imgur.com/CwxGobh.png)

When a repository is configured with a **workflow** file, like we just created, the following series of events occurs.

1.  Your GitHub repository listens for an event
2.  That event triggers a workflow run which starts a runner
3.  The runner, regardless of the hosting method, is responsible for carrying out the jobs which are defined
4.  A job is series of steps, which can be actions or commands
5.  When the steps complete a report is generated and can be viewed by anyone with access to the repository









## Go on... Tell me more!

I'm glad you asked. Let's take a look at the workflow file that we just committed to this repository.

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Run a one-line script
        run: echo Hello, world!
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
```

This file is made up of a series of metadata, as well as behaviors that we wish to happen when the workflow is triggered.

Let's take a second to talk about each of the pieces that we see here:

- `name: CI`
  - This is the user-defined name for the workflow. This shows up on the Actions tab so we can see which workflows, and their statuses, run on this repository.
  - As you can see, our's is currently named `CI`
- `on: [push]`
  - This defines the **event** that will tigger a workflow on this repository. Currently we are listening for any [push event](https://developer.github.com/v3/activity/events/types/#pushevent) that happens within this repository.
  - Also note that this is an array, which means we can trigger this workflow [on more than one event](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#about-workflow-events) if that is our intended behavior.
- `Jobs:`
  - This is our first block of instructions. We are defining our first job for this workflow.
  - In this case, the job has been named `build`
  - We also define the runner for the job as `runs-on: ubuntu-latest`
  - Finally we define the steps for this job which can either rely on specific actions, or run commands directly. As we can see there are three steps which show a mixed usage of actions and commands.
    - `uses: actions/checkout@v1`
    - ```
      name: Run a one-line script
      run: echo Hello, world!
      ```
    - ```
      name: Run a multi-line script
      run: |
        echo Add other actions to build,
        echo test, and deploy your project.
      ```

---

📖Take a deeper dive into [workflow components](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-workflows)
📖Read more about [configuring workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-workflows)


## Digging into a step

As I mentioned earlier, a step is a task that is either an action or a command. This can be slightly confusing, so I want to take a little time to ensure I explain it to you before moving on.

#### Actions

Actions are powerful. They are small programs written in either JavaScript or running inside of Docker containers, that add some functionality to your repository.

The things you can do with actions are limited only by your imagination. Want to send a tweet every time you tag a release? What about ordering 🍕just by creating an issue?

Let's not forget the more practical usage of actions, testing the source code of a repository or letting your team know that you are out of office 🏝 when they @ mention your name in issues or pull requests.

You can define an action's inputs, outputs, and environment variables to create reusable building blocks for your workflow.

Actions are portable. You are free to publish your actions to the [Actions Marketplace](https://github.com/marketplace?type=actions) where others can use your creation in their workflows! You can also share actions without publishing them to the marketplace by referencing the repository that contains the actions code!

Actions can even run commands 😏

📖Learn more [About Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-actions)

#### Commands

Commands are useful in the own respect, but are much more limited than actions.

Think about the tasks you might do from the command line of your local machine. Maybe you run `npm install` to install all of the dependencies for your project before running your unit tests. Maybe you run `docker build` to execute a Dockerfile.

You can accomplish the same set of tasks inside of a workflow but using `run` as a step in your job.

Commands are not easily shareable. There is no central location where you can consume the popular commands used in workflows. You do not have access to fine tuning the inputs, outputs or environment variables.

This does not mean commands offer no value in a workflow, but you should use them wisely and if you find yourself reusing the same commands repeatedly, consider turning them into actions.

---

<details><summary>Has Learning Lab stopped responding?  Your Actions workflow might be failing. Click here for troubleshooting help.</summary>

When a GitHub Actions workflow is running, you should see some checks in progress, like the screenshot below.

![Checks in progress box](https://i.imgur.com/uO6iqYd.png)

If the checks don't appear or if the checks are stuck in progress, there's a few things you can do to try and trigger them:

- Refresh the page, it's possible the workflow ran and the page just hasn't been updated with that change
- Try making a commit on this branch. Our workflow is triggered with a `push` event, and committing to this branch will result in a new `push`
- Edit the workflow file on GitHub and ensure there are no red lines indicating a syntax problem
  </details>


## Edit the current workflow

Currently `my-workflow.yml` is not set up correctly for our use-case. It worked great for allowing us to take a high-level look at workflows, but if we want to use our custom actions there are some changes that we have to make to it.

### :keyboard: Activity: Remove boilerplate steps from `my-workflow.yml`

1. [Edit]({{workflowFile}}) the `.github/workflows/my-workflow.yml` so that it has the contents below:

   ```yaml
   name: Docker Actions

   on: [push]

   jobs:
     action:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v1
   ```

1. Commit these file changes to this branch

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Finishing the workflow

@{{user.login}} you're doing great so far 😄! You've had to do a lot of workflow set up so we can begin writing custom actions. We have just one more thing to add to our `my-workflow.yml` file before we get to the action side of things.

#### Recap

Before we make our final workflow change let's do a quick recap about what we've done.

| Action                                                            | Key Takeaways                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Created `my-workflow.yml` inside of `.github/workflows` directory | GitHub repositories look in the `.github/workflows` folder for workflow files.                                                                                                                                                                         |
| Used a templated workflow                                         | GitHub provides many templates for workflow files. This is a great spot to look when setting up a new workflow. If you can't find what you are looking for, you can always click the `setup a workflow yourself` button for a minimal starter template |
| Workflow environment                                              | You learned, from a high level, how a repository uses a workflow file to run commands or actions based on triggers. You also learned that where these commands or actions execute is something that can be specified                                   |
| Workflow syntax                                                   | You were briefly introduced to the workflow YAML syntax.                                                                                                                                                                                               |

If that seems like a lot of things just to get started... well, it is! GitHub Actions is a robust platform designed to automate a wide range of tasks for your repositories.

If you'd like to see more examples of workflows and actions then check out these Learning Lab courses all about GitHub Actions:

- [GitHub Actions: Continuous Integration](https://lab.github.com/githubtraining/github-actions:-continuous-integration)
- [GitHub Actions: Continuous Delivery](https://lab.github.com/githubtraining/github-actions:-continuous-delivery)
- [GitHub Actions: Publish to GitHub Packages](https://lab.github.com/githubtraining/github-actions:-publish-to-github-packages)

## Add an action reference to the workflow

### :keyboard: Activity: Reference our custom action from `my-workflow.yml`

1. [Edit]({{workflowFile}}) the `my-workflow.yml` to have the following contents:

   ```yaml
   name: Docker Actions

   on: [push]

   jobs:
     action:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v1

         - name: hello-action
           uses: ./.github/actions/hello-world
   ```

1. Commit these file changes to this branch

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Hello world with Docker 🐳

@{{user.login}} we are going to start with the typical "Hello World" example and build something more complex after, but first let's decide if a Docker based action is the right action for us!

#### Why use Docker when writing GitHub Actions?

That's a super great question to ask. Before we talk about the components that make up Docker based actions, we should understand the good and the bad of Docker based actions.

| Advantages                                                                                                                                                                                                                  | Disadvantages                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Docker actions package the source code that will be executed right alongside any dependencies that source code has.                                                                                                         | Slower execution time because the image containing your source code and dependencies gets built with every workflow run. |
| Docker containers package the environment with the GitHub Actions code. This creates a more consistent and reliable unit of work because the consumer of the action does not need to worry about the tools or dependencies. | Docker container actions can only execute in the GitHub-hosted Linux environment.                                        |
| Ideal for running in environments with very specific configurations and tools.                                                                                                                                              | Debugging can be difficult with containers.                                                                              |
| Actions can be written in any language you choose.                                                                                                                                                                          | More files to maintain when changes to the action occur.                                                                 |

#### Got it, what now?

Let's begin by exploring the components of a Docker based action and discuss how they fit together!


## Anatomy of an action

Earlier you learned how the different pieces of GitHub Actions work together. Now you will learn about the components that make up an individual action.

Remember, an action is the unit of work that a workflow file executes when it reaches that task. They are called by referencing them as the value to the `uses:` key in a workflow step.

### What makes up an action?

Docker actions consist of three key components:

| Component                | Description                                                                                                                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action source code files | These files contain the logic of your action. This includes any dependencies or custom modules that your main logic may need.                                                                                               |
| Action metadata file     | This file contains information that the actions source code can use. An example of this is allowing a developer to specify an API key as an input variable for your action to consume. This file MUST be named `action.yml` |
| Dockerfile               | This file defines the environment and dependencies for the action. It is best practice that this file be named `Dockerfile`                                                                                                 |

### Let's take a look at how those components fit together.

- **The workflow, usually `workflow.yml`**, is the **user** facing component. It must be housed in `.github/workflows/` and doesn't need to be called `workflow.yml`, but its essence is a workflow. This is what we interact with directly when we want to supply input, or consume the output of a given action. You can think of `workflow.yml` as a user-interface for the `action.yml` file.
- **The action's metadata, called `action.yml`**, is the **interface** between the **user** and the **source code** of the action. It is housed in a directory just for the action. This file may contain default values for inputs and outputs that the source code relies on. Those values can be overwritten by the `workflow.yml` file, but their default values live here and allow the action to execute properly if no values are supplied. This file also defines a high-level environment for the source code, such as whether to use Docker or Node.js and the execution entry point.
- **The action's source code** files define the logic of an action. It is housed in a directory just for the action. The **user** doesn't interact with these files directly. There could be as little as one source code file, but there is no hard rule on how modular an action can be!
- **`Dockerfile`** is only needed when creating Docker based actions and it is responsible for packaging up the environment as well as the source code for the given action. It is housed in a directory just for the action. This file is read and a Docker image is created from it. Once the image is created a container is created from the image and the action is executed.

_Although the **workflow** file is used to allow us to set the `inputs` and `outputs` using the `with:` keyword it is **not** a required component of an individual action._

---

**The failing workflow**

You may be following along on the [Actions tab]({{actionsUrl}}) of this repository. If you are, you'll notice that the workflow we set up previously is failing. That is the currently expected behavior: we referenced an action in the `hello-world` directory, which doesn't yet exist. We will be fixing that as we move forward with the lesson.


## Action metadata

Since every GitHub Action that we write needs to be accompanied by a metadata file this is the file we will create first.

This file has a few rules to it, lets outline those now:

- Filename **must** be `action.yml`
- Required for both Docker container and JavaScript actions
- Written in YAML syntax

This file defines the following information about your action:

| Parameter   | Description                                                                                                                                            |      Required      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------: |
| Name        | The name of your action. Helps visually identify the actions in a job.                                                                                 | :white_check_mark: |
| Description | A summary of what your action does.                                                                                                                    | :white_check_mark: |
| Inputs      | Input parameters allow you to specify data that the action expects to use during runtime. These parameters become environment variables in the runner. |         ❌         |
| Outputs     | Specifies the data that subsequent actions can use later in the workflow after the action that defines these outputs has run.                          |         ❌         |
| Runs        | The command to run when the action executes.                                                                                                           | :white_check_mark: |
| Branding    | You can use a color and Feather icon to create a badge to personalize and distinguish your action in GitHub Marketplace.                               |         ❌         |

---

📖Read more about [Action metadata](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions)


## Create the action metadata

Now that we know what action metadata is, let's create the metadata for our **hello-world** action.

### :keyboard: Activity: Create an `action.yml` file and add necessary metadata

💡All of the following steps take place inside of the `.github/actions/hello-world` directory.

We will start with using the parameters that are **required** and later implement some optional parameters as our action knowledge grows.

1. Create and add the following contents to the `.github/actions/hello-world/action.yml` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```yaml
   name: "my hello action"

   description: "say hello with GitHub Actions"

   runs:
     using: "docker"
     image: "Dockerfile"
   ```

1. Commit the changes to a new branch named `hello-world`
1. Create a pull request titled **Add a Hello World action**.
1. Supply the pull request body content and click `Create pull request`.

---

I'll respond when you create a new pull request.

## Great Job 👍

Your workflow is now set up to execute two actions when any `push` event happens on this repository.

For now, this workflow will fail.  It fails because we have not yet created the `hello-world` action, so this is expected.

Head [over here]({{issueUrl}}) to get started in creating the `hello-world` action!

## Oh no...  I found an error ⚠️

**Error**
The title of this pull request isn't what I expected!

**Solution**
Verify the name of your pull request is **{{title}}** and keep in mind that this is case-sensitive.

Follow these steps to rename your pull request:
1. Click on **Edit** next to the pull request's title. 
1. The title will turn to a text field, **{{ title }}** in the title field.
1. Click **Save**.

I'll respond when I detect this pull request has been renamed.

## Write the Hello World source code

Great job @{{user.login}}, you now have action metadata for your first action. The next piece we will add will be the logic of our action. In this case, our logic will be written in Go.

If you are not familiar with Go programming that's perfectly okay, you are here to learn about writing actions! All the necessary code for each language will be provided for you!

The first iteration of our action will follow the traditional path of logging "Hello World" 👋to the console. We will expand on this as we move forward, for now it's a good test to make sure all of our files are set up correctly 😄

### :keyboard: Activity: Create `main.go` containing the Hello World source code

1. Create and add the following contents to the `.github/actions/hello-world/main.go` file:
   You can use [this link]({{quicklink}}) to easily create this file in the proper location.

   ```golang
   package main

   import "fmt"

   func main() {
       fmt.Println("Hello Docker Actions")
   }
   ```

2. Commit the changes to this branch
3. Click the green `Commit new file` button

📖 [Learn Go programming](https://tour.golang.org/welcome/1)

---

I'll respond when you push changes to this pull request.


## Great job 👍

I have created a [new pull request]({{pullUrl}}) where we will continue this lesson.  Click the link to meet me over there.

In the meantime I have closed this issue since we wont be needing it anymore 😄


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory



Awesome 🎉

This action now has two of the three key files it needs to run:

- Source code
- Metadata

## Create the action's `Dockerfile`

Lastly we will create the `Dockerfile`. Like with Go programming, it is perfectly okay if you are not a Docker guru, we will provide the needed code snippets for your `Dockerfile`.

### :keyboard: Activity: Create a `Dockerfile` containing the Docker instructions

1. Create and add the following contents to the `.github/actions/hello-world/Dockerfile` file:
   You can use [this link]({{quicklink}}) to easily create this file in the proper location.

   ```dockerfile
   FROM golang:1.15
   WORKDIR /go/src/hello
   COPY . .
   RUN go get -d -v ./...
   RUN go install -v ./...
   CMD ["hello"]
   ```

2. Commit the changes to this branch
3. Click the green `Commit new file` button

📖 [Become a `Dockerfile` guru](https://docs.docker.com/engine/reference/builder/)

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Congratulations 🎉

Your very first Docker action has been written and executed within a workflow! You may be wondering how I know that and the truth is that GitHub Actions provide real-time logging of the events happening within the runner! Since our action prints to the console we can just expand that step in our workflow and look at the standard output that is on our screen.

You can do this in your own [Actions tab]({{actionsUrl}}) or you can settle for examining the screenshot below to see our **Hello World** statement in place of where our previous errors existed.

![hello world success](https://user-images.githubusercontent.com/38021615/73961700-f71d4500-48c1-11ea-9304-b0d9abe99044.png)

---

Whoa, that's a lot of output for a simple hello world! Don't let this alarm you, the output you see is from the `Docker build` operation that packages up your files into a Docker image.

📖 Learn about [Docker build](https://docs.docker.com/engine/reference/commandline/build/)


## Using input parameters

A "Hello World" message is great, but let's personalize it a little bit. We will do this by adding an **input** parameter to the `action.yml`, `workflow.yml` and `main.go` files.

Although this example may seem a little lightweight input parameters have a very flexible use case. Consider a scenario where you need to access secret API key with your action, or when you need to specify the path to a given file. Inputs allows for these problems to be easily solved.

#### A quick example

To add inputs we need to add the `inputs:` parameter to the `action.yml` file. The `inputs:` parameter has a few parameters of its own.

| Parameter      | Description                                                        | Required                      |
| -------------- | ------------------------------------------------------------------ | ----------------------------- |
| `description:` | String describing the purpose of the input                         | True                          |
| `required:`    | Boolean value indicating if the input parameter is required or not.  (Default value is True) | False |
| `default:`     | String representing a default value for the input parameter        | False                         |

---

Let's take a look at how this fits into an `action.yml` file.

**`action.yml`**

```yaml
name: "my hello action"

description: "say hello with actions"

inputs:
  firstGreeting:
    description: "who would you like to greet in the console"
    required: true
    default: "Hubot"

  secondGreeting:
    description: "another person to greet"
    required: true
    default: "Mona the Octocat"

  thirdGreeting:
    description: "a third greeting"
    required: false
```

_The placement of your `inputs:` is not strictly enforced, however it has become commonplace to ensure the `runs:` statement is defined after your `inputs:` and `outputs:` in your `action.yml` file._

---

## So what is actually happening here?

Well, in the `my-workflow.yml` file we could specify values for inputs we just created:

- first-greeting
- second-greeting
- third-greeting

Or we could leave them out and rely on their default values.

The example below demonstrates a mix of both:

**`my-workflow.yml`**

```yaml
name: "Docker Actions"

on: [push]

jobs:
  action:
    runs-on: "ubuntu-latest"
    steps:
      - uses: actions/checkout@v1

      - name: "hello-action"
        uses: ./.github/actions/hello-world
        with:
          firstGreeting: "Learning Lab User"
```

Now that there are inputs in the action's metadata the **user** can interface with them by supplying values. In this case **Learning Lab User** was passed as the value for the `firstGreeting` input which overrides the **default** value, specified in the `action.yml`, of **Hubot**

---

**main.go**

```golang
package main

import (
	"fmt"
	"os"
)

func main() {

  // Access Inputs as environment vars
  firstGreeting := os.Getenv("INPUT_FIRSTGREETING")
  secondGreeting := os.Getenv("INPUT_SECONDGREETING")
  thirdGreeting := os.Getenv("INPUT_THIRDGREETING")

  // Use those inputs in the actions logic
  fmt.Println("Hello " + firstGreeting)
  fmt.Println("Hello " + secondGreeting)

  // Someimes inputs are not "required" and we can build around that
  if thirdGreeting != "" {
    fmt.Println("Hello " + thirdGreeting)
    }

}
```

In our actions source code we can access the inputs as if they are environment variables. GitHub Actions takes every `inputs:` value and converts it by adding `INPUT_` and making the value uppercase.

For example:

- `firstGreeting` = `INPUT_FIRSTGREETING`
- `secondGreeting` = `INPUT_SECONDGREETING`
- `someInput` = `INPUT_SOMEINPUT`

_How you access environment variables will vary by language_

---

📖Read more about the [input parameter](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)


## Add input parameters to Hello World's metadata

Now that we know what input parameters are, let's edit the metadata for our **hello-world** action.

### :keyboard: Activity: Update `action.yml` to accept input parameters for Hello World

💡All of the following steps take place inside of the `.github/actions/hello-world` directory.

1. Add the following contents to the `.github/actions/hello-world/action.yml` file:
   You can use [this link]({{quicklink}}) to easily edit this file.

   ```yaml
   name: "my hello action"

   description: "say hello with GitHub Actions"

   inputs:
     firstGreeting:
       description: "who would you like to greet in the console"
       required: true
       default: "Hubot"

     secondGreeting:
       description: "another person to greet"
       required: true
       default: "Mona the Octocat"

     thirdGreeting:
       description: "a third greeting"
       required: false

   runs:
     using: "docker"
     image: "Dockerfile"
   ```

1. Commit the changes to this branch

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Use input parameters in the source code

Great job 👍 next let's update our source code to consume the inputs that are now defined.

### :keyboard: Activity: Extend Hello World's source code to accept the input parameters

💡All of the following steps take place inside of the `.github/actions/hello-world` directory.

1. Add the following contents to the `.github/actions/hello-world/main.go` file:
   You can use [this link]({{quicklink}}) to easily edit this file.

   ```go
   package main

   import (
       "fmt"
       "os"
   )

   func main() {

   // Access Inputs as environment vars
   firstGreeting := os.Getenv("INPUT_FIRSTGREETING")
   secondGreeting := os.Getenv("INPUT_SECONDGREETING")
   thirdGreeting := os.Getenv("INPUT_THIRDGREETING")

   // Use those inputs in the actions logic
   fmt.Println("Hello " + firstGreeting)
   fmt.Println("Hello " + secondGreeting)

   // Someimes inputs are not "required" and we can build around that
   if thirdGreeting != "" {
       fmt.Println("Hello " + thirdGreeting)
       }

   }
   ```

1. Commit the changes to this branch

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Use input parameters in the workflow

The last piece to this actions puzzle is to edit the workflow file so that we can set custom values for these inputs.

### :keyboard: Activity: Assign values to the newly created input parameters in `my-workflow.yml`

💡All of the following steps take place inside of the `.github/workflows` directory.

1. Add the following contents to the `.github/workflows/my-workflow.yml` file:
   You can use [this link]({{quicklink}}) to easily edit this file.

   ```yaml
   name: "Docker Actions"

   on: [push]

   jobs:
     action:
       runs-on: "ubuntu-latest"
       steps:
         - uses: actions/checkout@v1

         - name: "hello-action"
           uses: ./.github/actions/hello-world
           with:
             firstGreeting: "Learning Lab User"
   ```

1. Commit the changes to this branch

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Take a 👀 at what you made!

Great Job 👍 making those changes @{{user.login}}. I will take just a moment to walk you through what happened.

If you look at the screenshot below you will see a very similar output to what your results should show. If you'd like you can open your own [Actions tab]({{actionsUrl}}) to follow along.

![results from using input](https://user-images.githubusercontent.com/38021615/73969834-f50eb280-48d0-11ea-8a1e-3704d226a76e.png)

Your action now says hello to **Learning Lab User** which was the specified value for the `firstGreeting` input parameter which was added to the `my-workflow.yml` file.

What's interesting though, is that we also see **Mona the Octocat** and if you recall that is the value of the `secondGreeting` parameter in the `action.yml` file.

Why do we see the value of the `secondGreeting` 🤔

If you remember, we made the `secondGreeting` input parameter **required**. This means that even if it is not specified in `my-workflow.yml` it will be executed by the `main.js` code using whatever value was set as **default**. It cannot be ignored like our `thirdGreeting` was.

Circling back to the `fistGreeting` you may have noticed that you were able to overwrite the **default** value of `Hubot` by being explicit in the `my-workflow.yml` file.

Had you been explicit with `thirdGreeting` in the `my-workflow.yml` file then the `if` statement in the `main.go` file would have executed and you would have three inputs.


## Explore your input parameters

Take a few minutes to play with the current code you have. I don't suggest editing the `main.go`, `Dockerfile`, or `action.yml` files, rather I think there is a lot to gain by changing the `my-workflow.yml` file to include or exclude certain input parameters.

### :keyboard: Activity: View the results of changing input parameters

1. Remove all the input parameters from the `my-workflow.yml` file. What happens when your action executes?
2. Add all three input parameter and be explicit with their values in the `my-workflow.yml` file. What happens when your action executes?
3. Specify only the `third-greeting` input parameter in the `my-workflow.yml` file. what happens when your action executes?

When you are finished experimenting and examining the results merge this pull request into the **main** branch.

Our next lesson will show you how to add external libraries to an action as well as interact with external APIs.

---

When I notice that you have **merged this branch** I will open a new issue in your repository to continue guiding you.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Cat Facts anyone?

![Kittens everywhere meme](https://user-images.githubusercontent.com/38021615/74055102-361bcb00-4994-11ea-9525-3aef295f0373.png)

The next action we write is going to reach out to an external API and fetch data for consumption. Although your action is bound to a step, which is bound to a workflow within your repository it is NOT bound to an isolated network. This means that we can leverage APIs from our favorite cloud providers, favorite pizza shops, social media or whatever API our developers need.

<details><summary>Unsure what an API is?  Click here!</summary>

### What is an API

If you ask this question to anyone in the industry you'll likely get the obvious answer of "Application Programming Interface", which although true, doesn't exactly explain what one **is** or **does**.

Let's do a thought experiment to help understand the concept of an API.

I think most people are familiar with a car 🚗 either through personal experience or some form of media. I also think it's safe to say that most people understand the concepts behind driving a car. By examining how we drive a car we can understand how APIs work in a fun way.

**Car Components**
When driving a car there are a few components of the car that the driver interacts with directly. This wont be an all inclusive list, and each car varies to some degree, but so does each API. We will use the following components for our example:

- Gas pedal
- Brake pedal
- Steering wheel
- Gear shift

As the driver of the car when we push one of the pedals, move the gear shift position or turn the steering wheel the car responds. Most of us don't know **exactly** how it responds though. We actually don't even think about the system that is in place to amplify the force applied to the steering wheel when we make a turn. We probably don't know if our vehicle has a hydraulic, electro-hydraulic or fully electric power steering system. What we do know is that when we turn the steering wheel the car responds by turning.

The steering wheel has become an API between the driver and the inner workings of the power steering system and the systems that it communicates with. You see, steering the car eventually turns the wheels of the car and that takes place through further interconnected systems that are abstracted away from the driver.

The same is true with the gear shift. When we move our car into a different state using the gear shift a series of events take place throughout the car to reflect that change. This could be going from a stopped position to driving forward. It could be going from forward motion to reverse. It could even be cycling through gears in the case of a manual transmission. Ultimately, by moving the gear shift we tell the car what to do when we apply the gas pedal.

Very simply the gas pedal changes the speed of our car. We press it down to go faster or lift pressure off of it to stop going faster. What about if we want to fully stop? The gas pedal, gear shift and steering wheel wont exactly help us do that, hence the need for a brake pedal.

All of these systems, these APIs designed to help a human drive a car, are constantly communicating with one another to produce a moving vehicle. The driver didn't have to concern themselves with the implementation, platform, architecture, complex queries or manufacturer differences of each car. No, the driver just needed to concern themselves with how a steering wheel, gas pedal, brake pedal and gear shift work.

What gets even better is that the API for a car is pretty standard from one car to the next. Once you learn one steering wheel you pretty much know them all!

**Standard API Types:**

This concept is also prevalent in real world APIs. There are many **standard** types of APIs and if you understand each standard then you ultimately understand how to use that API to your advantage.

The most common types of API at the time this course was written are:

- REST
- SOAP
- XML-RPC
- JSON-RPC

Going into detail about each standard is beyond the scope of this course, however it's important to understand that there are many standards out there. Although there are many standards the purpose of each API is to give your program or service the ability to communicate easily with another program or service without the need to know the implementation details.

APIs also give you, the developer, the ability to give others access to specific functionality or resources within your own program or service.

📺 [Watch](https://www.youtube.com/watch?v=BWnDYH_59SY) this 30 second video on APIs

</details>

### How does that apply to our next action?

We are now going to write an action that reaches out to a service through its REST API to get us a random cat fact. We will then display that fact on the [Actions tab]({{actionsUrl}}).

For our purposes the API we use will not require authentication, however that is a limitation of the course content and not the GitHub Actions platform. If you need to store secrets, like API keys, for your workflow to use you will need to configure [secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) as inputs.

What are we waiting for, let's get started 😉


## Setting up the next action

Before we continue we are going to need to do a few things. First and foremost our workflow is currently setup to run each time there is a `push` event to this repository. As you can imagine, this generates a lot of noise when learning.

Let's comment out our current workflow to prevent things from running but preserve the things you've worked on up to this point.

### :keyboard: Activity: Comment out the lines in the workflow to prevent unwanted runs

1. [Edit]({{workflowFile}}) your workflow file by commenting out every single line with the `#` character. The resulting file should look like this:

   ```yaml
   # name: Docker Actions

   # on: [push]

   # jobs:
   #   action:

   #     runs-on: ubuntu-latest

   #     steps:
   #     - uses: actions/checkout@v1

   #     - name: hello-action
   #       uses: ./.github/actions/hello-world
   #       with:
   #         firstGreeting: "Learning Lab User"
   ```

2. Commit the changes to a new branch and name it `action-two`.
3. Create a pull request named **External APIs**
4. Supply the pull request with body content. Remember, this area can be used a notes later.
5. Click `Create pull request`.

You will still see the workflow trying to execute with every push if you look at the [Actions tab]({{actionsUrl}}), however it will seem as though it fails. This is because there is a workflow file in the `.github/workflows` directory. The failure isn't actually a failure either, if you expand it you will see that there is simple no triggers for that given workflow and therefore it doesn't run. I have placed a screenshot below so you can become familiar with what this error looks like without the need to go to your [Actions tab]({{actionsUrl}}).

![No trigger screenshot](https://i.imgur.com/rARtXc1.png)

---

I'll respond when you create a new pull request.

## Congrats on your first Action 🎉

Congratulations {{user.login}} you have officially written your first GitHub Docker action!!!

That's super exciting news, but this lesson has just started, so let's head over to the [new issue I've opened]({{issueUrl}}) to continue writing GitHub Actions.


## Oh no...  I found an error ⚠️

**Error**
The title of this pull request isn't what I expected!

**Solution**
Verify the name of your pull request is **{{title}}** and keep in mind that this is case-sensitive.

Follow these steps to rename your pull request:
1. Click on **Edit** next to the pull request's title. 
1. The title will turn to a text field, **{{ title }}** in the title field.
1. Click **Save**.

I'll respond when I detect this pull request has been renamed.

## A new pull request

Now, let's move to the [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.


## Add metadata to the cat-fats action

### :keyboard: Activity: Create the cat-facts metadata file

💡All of the following steps take place inside of the `.github/actions/cat-facts` directory.

Our action does not require much metadata for it to run correctly. We will not be accepting any inputs, we will however be setting a single output this time.

We will not use the `fact` in in this portion of the course. There will be a later step that will rely on this actions output.

1. Create and add the following contents to the `.github/actions/cat-facts/action.yml` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```yaml
   name: "my cat fact action"

   description: "Get external data with GitHub Actions"

   outputs:
     fact:
       description: Resulting cat fact from the https://cat-fact.herokuapp.com/facts api

   runs:
     using: "docker"
     image: "Dockerfile"
   ```

1. Commit the changes to the branch named `action-two`

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Fetch a cat fact

**Cat Fact API**

We will be using the [cat-fact API](https://cat-fact.herokuapp.com/facts) for our action. This API does not require any authentication making it an ideal teaching tool.

When we make our request to this API we will get back an array JSON Objects in the response. An individual Object looks like this:

```json
{
  "_id": "58e008ad0aac31001185ed0c",
  "text": "The frequency of a domestic cat;s purr is the same at which muscles and bones repair themselves.",
  "type": "cat",
  "user": {
    "_id": "58e007480aac31001185ecef",
    "name": {
      "first": "Kasimir",
      "last": "Schulz"
    }
  },
  "upvotes": 6,
  "userUpvoted": "None"
}
```

It contains many **key:value** pairs of data that we can use in our own program or service. In our case, we are only interested in the `text` field.

Our action will extract the `text` field in a new array, then select a random index to display in the console as our random cat fact.

To further demonstrate the flexibility of Docker actions we will create this one using Python.

If Python is a new programming language to you, like always don't worry. You are here to learn about actions and we will supply all the necessary source code for you.

### :keyboard: Activity: Create the Python source code for the cat-fats action

1. Create and add the following contents to the `.github/actions/cat-facts/src/main.py` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```python
   import requests
   import random
   import sys

   # Make an HTTP GET request to the cat-fact API
   cat_url = "https://cat-fact.herokuapp.com/facts"
   r = requests.get(cat_url)
   r_obj_list = r.json()

   # Create an empty list to store individual facts in
   # This will make it easy to select a random one later
   fact_list = []

   # Add the "text" of every object into the fact_list list
   for fact in r_obj_list:
       fact_list.append(fact["text"])

   # Select a random fact from the fact_list and return it
   # into a variable named random_fact so we can use it
   def select_random_fact(fact_arr):
       return fact_arr[random.randint(0, len(fact_list)+1)]

   random_fact = select_random_fact(fact_list)

   # Print the individual randomly returned cat-fact
   print(random_fact)

   # Set the fact-output of the action as the value of random_fact
   print(f"::set-output name=fact::{random_fact}")
   ```

1. Commit the changes to this branch:

📖 [Learn Python programming](https://www.learnpython.org/)

---

I'll respond when you push changes to this pull request.


Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Add Python dependencies

### :keyboard: Activity: Create `requirements.txt` with your Python dependencies

💡All of the following steps take place inside of the `.github/actions/cat-facts` directory.

A `requirements.txt` file is required so that the Python package manger, PIP, knows which dependancies to install when our Docker image get's built. In our case we will only need to add the `requests` package to our `requirements.txt`

1. Create and add the following contents to the `.github/actions/cat-facts/requirements.txt` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```text
   requests
   ```

1. Commit the changes to this branch.

📖[Learn PIP](https://www.pythonforbeginners.com/pip/)

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Add the cat-fact `Dockerfile`

Awesome 🎉

This action now has three of the four key files it needs to run:

- Source-code
- Metadata
- Requirements.txt

### :keyboard: Activity: Create `Dockerfile` for the cat-fat action

Lastly we will create the `Dockerfile`, just like we did with our first action.

1. Create and add the following contents to the `.github/actions/cat-facts/Dockerfile` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```dockerfile
   FROM python:3

   COPY requirements.txt ./

   RUN pip install --no-cache-dir -r requirements.txt

   COPY . .

   CMD [ "python", "/src/main.py" ]
   ```

2. Commit the changes to this branch
3. Click the green `Commit new file` button

📖 [Become a `Dockerfile` guru](https://docs.docker.com/engine/reference/builder/)

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Use the cat-fat action

At this point we can't expect much from our workflow, if you remember all of its contents are commented out. Let's go ahead and fix that now so that we can see our action fetch us a cat fact.

We are going to add a new trigger to our workflow to make it easier for us to trigger it without the need to push changes to the repository. Remember that every time our workflow runs this action we should see a new cat fact which means we need a good way to make it run a few times. If you recall there are many [events](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#webhook-events) that trigger a workflow run.

We will use the `pull_request` event and specify the activity type to be when an issue get's `labeled`. This will allow us to trigger our workflow by simply placing a label on this pull request.

### :keyboard: Activity: Restore the workflow file

Let's change the tigger and add the cat fact action

1. [Edit]({{workflowFile}}) your current workflow file. It should have the following contents:

   ```yaml
   name: Docker Actions

   on:
     pull_request:
       types: [labeled]

   jobs:
     action:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v1

         - name: hello-action
           uses: ./.github/actions/hello-world

         - name: meow
           uses: ./.github/actions/cat-facts
   ```

1. Commit the changes to this branch

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## {{user.login}} get ready to purr

Great job! Everything is all set up and now we are ready to start learning about cats 🐈. You will find you have some cat fact related labels available to you in this repository. You don't have to use them, any label will trigger our workflow, but it might be easier to follow along with me if you use the labels I suggest.

### :keyboard: Trigger a cat fact

1. Apply the `first-cat-fact` label to this pull request
2. Wait a few seconds and then apply the `second-cat-fact` label to this pull request
3. Check the workflow results on the [Actions tab]({{actionsUrl}})

Feel free to continue adding labels to this pull request if you want to see more facts.

---

When you are ready to move forward in the lesson merge this pull request into the `main` branch. I will respond when you've merged this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Action three

Two actions down, one more to go! Before we move on with building our final action let's take a second to do a quick recap since this lesson has thrown a lot of information at you.

**The workflow**
We started out by explaining what a workflow is and how it pertains to the GitHub Actions platform. You learned about how a defined event sets your workflow orchestra in motion.

You learned about runners, jobs, steps and have dabbled in the syntax of a workflow file at every step in this course. I don't want to spoil too much here, but you'll be doing it again in this one as well 😉.

**Action metadata**
You learned that every action is accompanied by an `action.yml` file which contains a series of metadata for how the action behaves. This file defines all of an actions inputs, outputs, runtime environment, name, description and even branding.

**Hello action**
Your first Docker action took the traditional path of a "Hello World" introduction. You ended up expanding that action to accept `inputs` to help make it a little more dynamic. Ultimately, the key takeaway was to understand that you can pass input that is defined in the workflow to an action as long as the action's metadata supports it.

When consuming or creating actions it is incredibly helpful to take care to understand that actions metadata file.

**Cat fact action**
You second Docker action demonstrated that your workflow environment is capable of communicating outside of it's own network. We reached out to an external API and used that information to set `outputs` for another action to consume. As with `inputs` your actions metadata must support the ability to set `outputs` if you want to use this option.

**What next?**
Your third, and final, Docker action of this course is going to do quite a bit to tie everything together. Let's take a look at what we will build:

- Although we can write actions directly in JavaScript, we can also create Docker actions using JavaScript as the language of choice. Our third action will be containerized JavaScript.
- Since it is JavaScript we can use the [Actions ToolKit](https://github.com/actions/toolkit).
- It is also going to consume the `outputs` of your cat action and use them to help create issues in your repository.

## Reference the issue-maker action

We need to make some edits to the `my-workflow.yml` file to get it configured to use this final action.

### :keyboard: Activity: Reference issue-maker in the `my-workflow.yml`

1. [Edit]({{workflowFile}}) your `.github/workflows/my-workflow.yml` file to contain the following contents:

   ```yaml
   name: Docker Actions

   on:
     pull_request:
       types: [labeled]

   jobs:
     action:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v1

         - name: hello-action
           uses: ./.github/actions/hello-world

         - name: meow
           uses: ./.github/actions/cat-facts
           id: cat

         - name: create-issue
           uses: ./.github/actions/issue-maker
           with:
             repoToken: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
             catFact: {% raw %}${{steps.cat.outputs.fact}}{% endraw %}
             issueTitle: "a cat fact for you"
   ```

1. Commit the changes to a new branch and name it `action-three`.
1. Create a pull request named **Use outputs**


---

I'll respond when you create a new pull request.


## Congrats on your second action 🎉

Congratulations {{user.login}} you have officially written two GitHub Docker based actions!!!

Next, you'll write your final action of this course, so let's head over to the [new issue I've opened]({{issueUrl}}) to continue.


## Oh no...  I found an error ⚠️

**Error**
The title of this pull request isn't what I expected!

**Solution**
Verify the name of your pull request is **{{title}}** and keep in mind that this is case-sensitive.

Follow these steps to rename your pull request:
1. Click on **Edit** next to the pull request's title. 
1. The title will turn to a text field, **{{ title }}** in the title field.
1. Click **Save**.

I'll respond when I detect this pull request has been renamed.

## A new pull request

Now, let's move to the [new pull request]({{pullUrl}}) where we will continue this lesson. Click the link to meet me over there.


## {{user.login}} it's time to get ready for the third action: issue-maker 🎉

As with the other actions we wrote, we are going to need to setup a few directories and files.

## Add dependencies for issue-maker action

This time we will start with the dependencies for our action. JavaScript projects can be packaged with a `package.json` file which contains metadata and configuration information about a project. In our case we will use some pieces of the [actions toolkit](https://github.com/actions/toolkit).

### :keyboard: Activity: Add `package.json` to issue-maker

1. Create and add the following contents to the `.github/actions/issue-maker/package.json` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```json
   {
     "name": "issue-maker",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "@actions/core": "^1.2.2",
       "@actions/github": "^2.1.0"
     }
   }
   ```

1. Commit the changes to this branch.
1. Click the green `Commit new file` button

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Create the issue-maker's action metadata

Like our "hello world" action, this action will require at least one `input:` parameter. We need this parameter so that our JavaScript for this action has access to the `output:` from the joke action.

If you recall, in the `my-workflow.yml` file, we stated this action would take a specific input named `catFact:` and we set it's value to the output of the previous action.

```yaml
- name: create-issue
  uses: ./.github/actions/issue-maker
  with:
    catFact: {% raw %}${{steps.cat.outputs.fact}}{% endraw %}
```

Because of this, we need to define `catFact:` as one of our `inputs:` for this action. Remember when we did this with the first action? It looked a little like this:

```yaml
inputs:
  catFact:
    description: "the cat fact retreived from a previous action"
    required: true
    default: "Mona is an Octocat"
```

We also will also need to authenticate to GitHub with the action so that we can interact with the GitHub API. For that we will use a special token that gets created for us when we use actions called [GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)

Our action will also need to accept an input so that we can let the user specify a name for the issue that will be created when this action runs.

### :keyboard: Activity: Add `action.yml` for issue-maker

💡All of the following steps take place inside of the `.github/actions/issue-maker` directory.

1. Create and add the following contents to the `.github/actions/issue-maker/action.yml` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```yml
   name: "issue maker"

   description: "create and issue with a cat fact as the body"

   inputs:
     issueTitle:
       description: "A name for the cat-fact issue"
       required: true
       default: "A cat fact for you"

     catFact:
       description: "the cat fact retreived from a previous action"
       required: true
       default: "Mona is an Octocat"

     repoToken:
       description: "Authentication token, use secrets.GITHUB_TOKEN"
       required: true

   runs:
     using: "docker"
     image: "Dockerfile"
   ```

1. Commit the changes to this branch.
1. Click the green `Commit new file` button

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Add the issue-maker action's source code

### :keyboard: Activity: Add `src/index.js` for issue-maker

💡All of the following steps take place inside of the `.github/actions/issue-maker/src` directory.

1. Create and add the following contents to the `.github/actions/issue-maker/src/index.js` file:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```javascript
   const core = require("@actions/core");
   const github = require("@actions/github");

   async function run() {
     const issueTitle = core.getInput("issueTitle");
     const catFact = core.getInput("catFact");

     const token = core.getInput("repoToken");
     try {
       const octokit = new github.GitHub(token);

       const newIssue = await octokit.issues.create({
         repo: github.context.repo.repo,
         owner: github.context.repo.owner,
         title: issueTitle,
         body: catFact
       });
     } catch (error) {
       core.setFailed(error.message);
     }
   }

   run();
   ```

1. Commit the changes to this branch.
1. Click the green `Commit new file` button

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


## Add the issue-maker action's `Dockerfile`

### :keyboard: Activity: Create `Dockerfile` for issue-maker

One more piece to add and that is this actions `Dockerfile`. Once you complete this you will have all the pieces in place to use your final action!

1. Create and add the following contents to `.github/actions/issue-maker/Dockerfile`:
   You can use [this link]({{quicklink}}) to easily create this file.

   ```dockerfile
   FROM node:slim

   COPY package*.json ./

   RUN npm install

   COPY . .

   CMD [ "node", "/src/index.js" ]
   ```

2. Commit the changes to this branch
3. Click the green `Commit new file` button

📖 [Become a `Dockerfile` guru](https://docs.docker.com/engine/reference/builder/)

---

I'll respond when you push changes to this pull request.

Uh oh, I was expecting {{ expected }}

I'll respond when I detect the expected action. 

## Oops....

It seems as though your file is located here:

`{{haveFile}}`

and it should be located here:

`{{needFile}}`

**Solution**
Click [here]({{editLink}}) to edit `{{fileName}}` and move it to the proper directory


# Great job!

You did it 🎉

You have successfully written three different Docker actions.

Let's take a quick look at all the things you learned in this course:

**Workflows**
Along the way you learned a little about workflows and how to configure them. You managed to accomplish all these things:

- Define two different event triggers
- Filter an event trigger to run only when a label is added to a pull request
- You configured one unique job containing three unique steps within a workflow
- You learned how to overwrite default action values by defining them in a workflow
- One of your steps consumed a secret
- One of your steps consumed the output of a previous step

That's quite a bit for a course that doesn't cover workflows!

**Action metadata**

- You became familiar with over 1/2 of the syntax keywords that can be used in an `action.yml` file
- Using `inputs:` and `outputs:` allowed you to create more dynamic and reusable metadata files for your actions.
- You've mow written the metadata for three different actions

**Docker actions**
Wow, what a series of tasks! You started with the traditional `hello world` in the console, which was then expanded to use the `input:` parameters specified in the actions metadata. Through the use of that metadata you were able to be flexible with your greeting.

You learned how GitHub Actions behave when consuming external APIs and you also used the response from an external API as an `output:` parameter for a later step in the workflow.

Lastly you saw how to use actions to interact with a repository by creating an issue containing a joke.

You used multiple languages to write your action source code.

**At this point you are armed with everything you need to know to go out there and begin creating your own custom Docker actions.**

### We aren't done yet 😉

I also want to take a few minutes to point you to the information you need to place your own custom actions on the [GitHub Marketplace](https://github.com/marketplace?type=actions) for others to use.


# Trigger all the things 🎉

Let's trigger your new workflow!

1. Add a label to this pull request, it can be any label you choose.
1. After adding a label head over to your [Actions tab]({{actionsUrl}}) if you want to watch the workflow.
1. Once your workflow has completed check your [issues tab]({{repoUrl}}/issues) and you should see a new issue with a cat fact as the body!

Continue experimenting with this workflow for as long as you'd like.

Try adding another label and see if you get a new fact!

---

When you have finished experimenting, merge this pull request and meet me [in this issue]({{issueUrl}}) to finish wrapping things up.

## Publishing your actions

Publishing your actions is a great way to help others in your team and across the GitHub community. Although actions do not need to be published to be consumed by adding them to the marketplace you make them easier to find.

Some notable actions you will find on the marketplace are:

- [Actions for Discord](https://github.com/marketplace/actions/actions-for-discord)
- [GitHub Action for Slack](https://github.com/marketplace/actions/github-action-for-slack)
- [Jekyll action](https://github.com/marketplace/actions/jekyll-action)
- [Run Jest](https://github.com/marketplace/actions/run-jest)

And that just scratches the surface of the 2000+ and counting actions you will find on the marketplace 😄

📖Follow [this guide](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace#publishing-an-action) to learn how to publish your actions to the GitHub Marketplace


## The End 😭

It was so fun having you as a student while taking this course. I'll forever cherish our time together {{user.login}}

You can keep this repository forever to remember our time... I actually encourage you to do so! This has now become your central point for notes on writing Docker actions 😄

I really do think of everything!

Make sure to visit [Learning Lab](lab.github.com) for more courses on GitHub Actions and other awesome tech content.

We would love to hear what you thought about this course, share your experience with us and others in the [Community forum](https://github.community/t5/GitHub-Learning-Lab/bd-p/learn)

---

To fully complete your course **close this issue**


