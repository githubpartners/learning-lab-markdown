# Continuous integration with Travis CI

_Learn about the principles of continuous integration with GitHub and Travis CI._

![](https://repository-images.githubusercontent.com/162143652/0e6ea300-586e-11ea-84ed-742413a23188)

**Tags**: continuous integration (CI), test-driven development (TDD), YAML, protected branches, commit status

---

# Welcome

In this repository, we'll be diving into the world of Continuous Integration. **Continuous Integration**, or **CI**, can benefit your projects and change how you work on GitHub. If you're new to Continuous Integration, you may be thinking, "What exactly is it, and do I need it in my project?"

## What is CI? Why should you care?

[CI](https://en.wikipedia.org/wiki/Continuous_integration) can help you stick to your team’s quality standards by running tests and reporting the results on GitHub. CI tools run builds and tests, triggered by commits. The results post back to GitHub in the pull request. This reduces context switching for developers, and improves consistency for testing. The goal is fewer bugs in production and faster feedback while developing.

There are several CI providers that integrate with GitHub. You can find some examples in the [GitHub Marketplace](https://github.com/marketplace/category/continuous-integration). With so many options, you can pick the best tool for the job.

The following diagram shows the relative percentage of the top 10 CI tools used with GitHub.com.

![image](https://user-images.githubusercontent.com/6351798/49671027-caeb0780-fa23-11e8-836e-dd4f1472a968.png)

Our analysis also shows that many repositories use more than one CI service. This allows individuals within teams to use their favorites, instead of feeling stuck on one option.

The tools that will work best for your project depend on many factors, including:

- Programming language and application architecture
- Operating system and browsers you plan to support
- Your team’s experience and skills
- Scaling capabilities and plans for growth
- Geographic distribution of dependent systems and the people who use them
- Packaging and delivery goals

## Step 1: Enable Continuous Integration

Ready to see how CI can fit into your workflow? Let's install Travis CI, and start our very first CI build!

> Note: When you integrate with other services, private repositories may have additional costs. You can change the publicity of your repository in the **Settings** on GitHub.

### :keyboard: Activity: Enable Travis CI on this repository

1. Open the [Install Travis CI](https://github.com/apps/travis-ci/installations/new) link in a new tab.
1. Install Travis CI on this repository.
1. Create a [new pull request]({{ prUrl }}) using `base: main` and `compare: initial-travis-config`.

<hr>
<h3 align="center">I'll respond in your pull request with the next step</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._

Nice work getting this pull request opened!

This pull request adds a `.travis.yml` configuration file. This file is necessary to return a successful build. This configuration file is where we define how we want to build and test the code.

All projects have different needs, ranging from standard unit tests to custom configuration.  Regardless of the definition of "success" for your project, this is the place to define it.

There isn't much in this file right now, but we're going to change that. We'll make a change to configure the build environment.

You might be noticing a few things about this configuration file, like the programming language.


You can trigger Travis CI builds with new commits. To trigger Travis CI, add the below text in place of the `replace me with rvm` placeholder:

```yaml
2.5
```

## Step 2: Specify the Ruby version

To get the CI build to succeed, replace the placeholder text and commit the change.

### :keyboard: Activity: Define a specific version of a language

1. In this pull request, replace the placeholder text with `2.5`. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._

Nice work getting your CI build to succeed! :tada:

Notice that your pull request shows all checks have passed with 2 successful checks.

<img width="696" alt="screen shot 2019-01-03 at 12 24 52 pm" src="https://user-images.githubusercontent.com/6351798/50661613-e7199000-0f60-11e9-8bbf-a81e9654ced8.png">

You'll notice that there are two build status checks. One build is for the branch and the other build is for the pull request (more accurately, the merge of your `initial-travis-config` branch into the base branch `main`).

### Why did my CI build succeed?

The `.travis.yml` file defines your build environment and which automated tests to run. The entire delivery process is defined through this single `.travis.yml` file. If this file is present and your commit passes the tests as outlined in the `.travis.yml` file, your CI build will succeed.

## Step 3: Merge the configuration

Now that our CI build is succeeding, merge this pull request so the `.travis.yml` file is pushed to `main`.

### :keyboard: Activity: Share your configuration with the team by merging it

1. Click **merge pull request**, and delete your branch

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

In this pull request, I've added some tests to help ensure the project builds. This is just one example of how you can customize specific validations that will be ran when your CI starts a build. I need you to add a script to build our project in the `.travis.yml` file.
## Step 4: Add validation

Build your site.

### :keyboard: Activity: Add some automated validation to your project

1. In this pull request, add the following code to the `REPLACE-ME-WITH-BUILD-SCRIPT` placeholder in your `.travis.yml` file

```yaml
 bundle exec jekyll build
```

2. Commit your change. 

**You can do this by editing the file from the Files changed tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

The `.travis.yml` file treats configuration and build environments as code. Version control is an important part of secure collaboration for code. Configuration as code adds the benefits of Git version control for test and build environments.

Now that your CI build is succeeding, let's add some validations to your project.

<hr>
<h3 align="center">I've opened a <a href="{{ url }}">new pull request</a> for your next steps.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._

Now that you've added some validation tests to your CI build, it's time to turn on some branch protections. Protected branches ensure that collaborators cannot make irrevocable changes to specific branches. This also allows you to enable CI required status checks to pass before merging.

<details>
    <summary>Why use protected branches?</summary>
    Protected branches allow contributors to create branches and pull requests in your repository, while making sure those changes are throughly vetted before merging. When a repository employs a continuous integration service like Travis CI, branches can be protected based on their build statuses so the review process can be largely <i>automated</i>, giving contributors self-efficacy. Project maintainers also benefit by focusing their attention on gray areas and processes that can't be easily automated.  
</details>

<img width="727" alt="screen shot 2019-01-03 at 12 30 31 pm" src="https://user-images.githubusercontent.com/6351798/50661830-9ce4de80-0f61-11e9-9ab2-5efa5f5ebec6.png">

I've changed the protections for the `main` branch throughout the course so far to help keep you on track. Now, it's time for you to make some changes.

## Step 5: Protect the `main` branch

### :keyboard: Activity: Protect a branch based on the CI build status

1. Navigate to the [**Branches** section of the Settings]({{ repo }}/settings/branches) for this repository.
1. Under **Branch protection rules**, click the **Edit** button next to `main`.
1. Select **Require status checks to pass before merging**.
1. Uncheck **Require branches to be up to date before merging**.
    - _This is automatically checked, and can be a good idea. For this project, we'll uncheck it to reduce the extra commits and builds._
1. Select the **Travis CI - Branch** and **Travis CI - Pull Request** options
1. Click **Save changes**.
1. Return to your pull request and [**Approve the pull request**]({{ url }}/files#submit-review).

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

Awesome, nice work getting those branch protections in place :tada:

But, right before you enabled your branch protections, something happened. A contributor committed invalid syntax on `main` and broke your CI build. Luckily, your new test caught it and you turned on branch protections. These types of errors won't make it into future builds.

> Note: If your build is still processing, you may not see the failed test yet. If you wait a few minutes, it should be done soon.

Looking at your build status, click on the **Details** link as shown below in one of your builds:

<img width="697" alt="screen shot 2019-01-03 at 12 34 09 pm" src="https://user-images.githubusercontent.com/6351798/50661931-ea614b80-0f61-11e9-8db1-94b7597d1b21.png">

Navigate to the **Build Failed** section and click on the build failed link:

<img width="501" alt="screen shot 2019-01-03 at 12 37 40 pm" src="https://user-images.githubusercontent.com/6351798/50662014-285e6f80-0f62-11e9-909a-f8efdf6188a1.png">

Notice that you get the following error:

```shell
  Liquid Exception: Liquid syntax error (line 1): Unknown tag 'site' in docs/01_getting_ready_for_class.md
```

Jekyll uses Liquid, an open-source templating language. Liquid loads data dynamically and implements conditional logic. Some of the Liquid syntax in one of the files is incorrect.

## Step 6: Fix the broken build

Let's find the broken syntax and fix the build!

### :keyboard: Activity: Fix the build in your codebase

1. Apply the suggested change.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

Nice job finding and fixing that Liquid syntax!

It might take a moment, but notice as your build is complete that all checks have passed.

## Step 7: Merge code with a successful build

Now that your pull request has a successful build, let's merge it!

### :keyboard: Activity: Merge the pull request

1. Click **Merge pull request**, and delete your branch.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

With the addition of links to our code base, we should add a unit test as one of our Travis CI jobs that run whenever it builds. Let's add a test using HTMLProofer to test for any broken links, images, or HTML.

We'll now add the HTMLProofer test, but we'll also refactor some of the commands away from the config file into standalone test scripts.

## Step 8: Apply batch suggested fixes to refactor config

Let's make sure all links are valid by adding a link checker unit test, and packaging into test scripts.

### :keyboard: Activity: Check for broken links using Travis CI

1. Go to the _Files changed_ tab.
1. Next to each suggested change, click **Add suggestion to batch**.
1. At the top of the page, click **Commit suggestions** and enter a commit message.
1. Click **Commit changes**.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

<hr>
<h3 align="center">Navigate to your <a href="{{ url }}">new pull request</a> for next steps.</h3>

Nice work! We've added a unit test to check for broken links. When a broken link was committed to our pull request, the test caught it and let us know the build had failed.

Clicking on the **Details** link next to one of our statuses shows the following:

<img width="403" alt="screen shot 2019-01-03 at 1 17 26 pm" src="https://user-images.githubusercontent.com/6351798/50662565-1087eb00-0f64-11e9-90d9-001abf6cce5f.png">

Notice how the two stages **build** and **testlinks** both show as Travis CI jobs in our build. Also, notice that even though the `build` test succeeds, we are blocked from merging because our branch protection requires all jobs to pass in our build before merging.

<img width="727" alt="screen shot 2019-01-03 at 12 30 31 pm" src="https://user-images.githubusercontent.com/6351798/50662858-03b7c700-0f65-11e9-8a9a-48401d1864bf.png">

## Step 9: Fix the broken link

To get our checks to pass, let's fix the broken link so both Travis CI checks are passing. You can click on the **Details** link next to the failed **testlinks** Travis CI test for more information. By doing so, you'll find the following error:

```
External link https://help.github.com/setupgit failed: 404 No error
```

### :keyboard: Activity: Fix the broken link

1. In this pull request, change `https://help.github.com/setupgit` to `https://help.github.com/articles/set-up-git/`. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

Nice work!

It might take a moment, but once both the **build** and **testlinks** tests are passing, it's time to merge this pull request.

## Step 10: Merge the unit test

### :keyboard: Activity: Add the `testlinks` unit test to main

1. Review and approve this pull request.
1. Click **Merge pull request**, and delete your branch.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

Our workflow is looking pretty good! We have now set up some automated tests for any new changes. We can go one step further and add continuous deployment to our workflow.

### What is Continuous Deployment?

**Continuous Deployment**, or **CD**, is an extended step that builds from the automation in CI. CD is automation at various stages, deploying new changes to the different environment.

The goal of CD is to reduce the time it takes to finish a project. Automation provides shorter feedback loops. This could look like faster testing cycles, or faster deployment and user feedback.

There are several ways to deploy your code changes. For this repository, we'll deploy with GitHub Pages. If you'd like to learn more about GitHub Pages, there are a [few learning lab courses](https://lab.github.com/search?q=GitHub+pages) you might be interested in.

When deploying with GitHub Pages, you can choose to deploy from several locations. We're going to deploy from the `/docs` directory of this repository.  This will deploy only the contents of the `/docs` directory.

## Step 11: Deploy

Whenever there is a new commit on `main`, GitHub pages will deploy.

### :keyboard: Activity: Enable GitHub pages to deploy

1. Navigate to the [**Settings** tab](https://github.com/{{ user.username }}/{{ repo }}/settings).
1. Under GitHub pages, set the source to `main branch`.

<hr>
<h3 align="center">I'll respond below for your next steps.</h3>

<hr>
<h3 align="center">I created a <a href="{{ url }}">new issue</a>, look for my next response there.</h3>

Nice job enabling GitHub pages and setting up your continuous deployment.

You can see your deployment published here: https://{{ user.username }}.github.io/{{ repo }}.

<hr>
<h3 align="center">I'll respond in <a href="{{ url }}">your next issue</a>.</h3>

## Nice work

![celebrate](https://octodex.github.com/images/hula_loop_octodex03.gif)

Congratulations @{{ user.username }}, you've completed this course!

Your project is now live and deployed [here](https://{{ user.username }}.github.io/{{ repo }})!

Before we finish, let's review everything you completed in this course repository:

- Identified when a project is using continuous integration
- Learned the definition of continuous integration and why it is important
- Setup continuous integration on a project repository
- Setup protected branches based on a build status from Travis CI
- Learned how to customize your Travis CI builds
- Added unit tests
- Learned the definition of continuous deployment and why it is important
- Setup continuous deployment by enabling GitHub pages on your project


## What's next?
There's so much more you can do with continuous integration, and you have a solid start. Now...[what will you learn next]({{ host }}/courses)?

