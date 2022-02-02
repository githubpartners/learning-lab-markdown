# Continuous integration with CircleCI

_Learn how to automatically test changes made to your project, freeing you up to write more amazing code._

![](https://repository-images.githubusercontent.com/160369709/8e483d80-586d-11ea-9576-9c0b48cc2e45)

**Tags**: Continuous Integration

---

In modern software development, developers integrate code into a shared repository several times a day. With such frequent code changes, how do you ensure your code is bug free? Continuous Integration (CI) is an approach to software development in which tests run automatically anytime code is changed, saving you time and giving your team improved reliability. Continuous Deployment or Delivery (CD) refers to whatever happens after these tests run. If they pass, your new code can be automatically deployed to production, with the help of a CI/CD platform like CircleCI.

## What you'll learn

- Define continuous deployment
- Identify how projects use CI
- Set up continuous integration for one of your projects
- Protect branches based on the result of a build from continuous integration
- Customize builds
- Add tests for your project

## What you'll build

![screen shot of finished GitHub pages site](https://user-images.githubusercontent.com/9906718/75550820-04e26800-5a33-11ea-896c-385316351ea4.png)

- You'll build a GitHub Pages site hosting documentation while using circle-ci to check the builds, run unit tests, and more.

## Prerequisites

Before you take this course, you may want to go through the [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github) course on Learning Lab.

## Projects used

This makes use of the following open source projects. Consider exploring these repos and maybe even making contributions!

- [Jekyll](https://github.com/jekyll/jekyll): a simple, blog-aware, static site generator.

## Audience

Developers, GitHub users, users new to Git, students, managers, teams


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

### Using CI and Learning Lab
In other courses, you may have noticed that some actions take me longer to respond to than others. In this course, many of the actions will be related to builds. Those builds sometimes take longer to build, up to several minutes. Don't be concerned if I take a few minutes to respond, or if I respond too quickly. Sometimes, I'll let you know what the build will say before it finishes! Please wait for the builds to finish before moving on to your next step.

## Step 1: Enable Continuous Integration

Ready to see how CI can fit into your workflow? Let's install CircleCI, and start our very first CI build!

> Note: When you integrate with other services, private repositories may have additional costs. You can change the publicity of your repository in the **Settings** on GitHub.

### :keyboard: Activity: Enable CircleCI and run your first build

1. Navigate to CircleCI's [sign in](https://circleci.com/signup/) page in a separate tab.
1. Sign in with GitHub and select your username as the organization, if asked. 
2. Under the **Projects** option in the side-bar menu, click the **Set up Project** button next to the **continuous-integration-circle** project. Click on **Use existing config**, we'll use the one already on this repository. 
    <details>
    <summary>Can't find your repository?</summary>
    Make sure you select your username from the drop-down on the top left.
    <img src="https://user-images.githubusercontent.com/16547949/50861557-0c463e00-1367-11e9-8b92-cd9537c410c1.png" alt="organization selection on CircleCI">
    </details>
3. Click the **Start building** button on step 5.

> _If the build is queued for a long period of time, I recommend to click Cancel Job and click Rebuild._

<hr>
<h3 align="center">I'll respond below for your next step</h3>

> _I'll need to wait for the CircleCI build status to complete before I will respond. If you don't see my response after the build completes, wait a few seconds and refresh the page for your next steps._


Great work enabling CI on your repository and running your first build!

### What's a build?

Every time you push code, your CI service clones your repository to a virtual environment. It installs necessary dependencies, compiles your code, and runs tests. If everything goes well, the "build" is successful. Sometimes, your build will fail the test, giving you valuable feedback to diagnose the issue.

### Build failure

Now that the integration is enabled, you might have noticed that the build failed.

![screen shot 2018-12-19 at 4 24 04 pm](https://user-images.githubusercontent.com/6351798/50254671-3631c380-03ac-11e9-9579-bbdadc8e753b.png)

Our build failed because it was missing key information -- we currently have a configuration file in our project, but only a version is defined. A configuration file is necessary for our CI to look for tests to run. Once we update this file, we'll be able to generate a successful build.

> Note: You may notice email notifications from the integration. To change the settings, see [CircleCI's documentation on notifications](https://circleci.com/docs/2.0/notifications/).

## Step 2: Introduce the configuration file

On GitHub, let's update the configuration file to our project to generate a successful build. I already created a branch and committed the updates to the configuration file. Next, you'll need to open up a pull request.

### :keyboard: Activity: Configure the integration with a special file

1. Create a [new pull request]({{ prUrl }}) using `base: main` and `compare: initial-circle-config`.

<hr>
<h3 align="center">I'll respond in your pull request with the next step.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._


Uh oh, it looks like you created the pull request with the wrong branch selected. To fix this, close this pull request and create a [new one]({{ prUrl }}). Make sure to use the `base: main` and `compare: initial-circle-config` branches. 

Nice work getting this pull request opened!

This pull request updates the `.circleci/config.yml` configuration file. This file is necessary to return a successful build and where we define how to build and test the code.

All projects have different needs, ranging from standard unit tests to custom configuration.  Regardless of the definition of "success" for your project, this is the place to define it.

There isn't much in this file right now, but we're going to change that. We'll make a change to configure the build environment.

Notice that this configuration file includes a Docker image to execute the build, defining the environment. There's also a `checkout` command that allows CircleCI to access your project.

CircleCI is only triggered by new commits. To trigger CircleCI, add the below text in place of the `REPLACE-ME-WITH-DOCKER-IMAGE` placeholder:

```yaml
githubtraining/ci-custom:latest
```

## Step 3: Specify the Docker image

To get the CI build to succeed, replace the placeholder text and commit the change.

### :keyboard: Activity: Select a specific configuration

1. In this pull request, replace the placeholder text with `githubtraining/ci-custom:latest`. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._


Nice work! Soon, your CI build should succeed! :tada:

When the build completes, notice that your pull request shows all checks have passed with 1 successful check. If it isn't showing up green in a few minutes, try refreshing the page. To see more details, you can click "See all checks".

![screen shot 2018-12-11 at 2 41 48 pm](https://user-images.githubusercontent.com/6351798/49832098-eec78980-fd52-11e8-9092-fb5fa903b793.png)

### Why did my CI build succeed?

The `.circleci/config.yml` file defines your build environment and tests. This important `config.yml` file defines the entire delivery process. Your CI build will succeed if:
- The `.circleci/config.yml` file is present
- Your commit passes the tests as outlined in the `config.yml` file

### Ensuring quality

Tests can be an important contributing factor to ensuring quality, but they're still only a piece of the puzzle. Integrations like CircleCI offer the most benefit with quality, high coverage tests.

No matter how well written your tests are, tests work best when paired with thorough review. Remember that all tests are most effective when paired with pull request reviews. To learn more about reviews on GitHub, take a look at the [Reviewing pull requests](https://lab.github.com/githubtraining/reviewing-pull-requests) Learning Lab course.

## Step 4: Merge the configuration

Now that our CI build is succeeding, merge this pull request so the `.circleci/config.yml` file is present on the `main` branch.

### :keyboard: Activity: Share your configuration with the team by merging it

1. Click **Merge pull request**.
1. Delete your branch.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._


In this pull request, I've added some tests to help ensure the project builds. This is one example of how you can customize specific validations to run when your CI starts a build. I need you to add a **run action** to your `.circleci/config.yml` file.

In this example, we'll build the project with `bundle exec jekyll build`. Depending on the programming language and project, you might use a different command, like `yarn run android` or `nvm package`. You can find more specific information on CircleCI configuration [in their documentation](https://circleci.com/docs/2.0/tutorials/).

## Step 5: Add validation

Build your site.

### :keyboard: Activity: Add some automated validation to your project

1. In this pull request, add the following code to the placeholder in your `.circleci/config.yml` file. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

```yaml
 bundle exec jekyll build
```

2. Commit your change.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._


The `.circleci/config.yml` file treats configuration and build environments as code. Version control is an important part of secure collaboration for code. Configuration as code adds the benefits of Git version control for test and build environments.

Now that your CI build is succeeding, let's add some validations to your project.

<hr>
<h3 align="center">I've opened a <a href="{{ url }}">new pull request</a> for your next steps.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response, wait a few seconds and refresh the page for your next steps._


Now that you've added some validation tests to your CI build, it's time to turn on branch protection. Protected branches ensure that collaborators cannot make irrevocable changes to specific branches. This also allows you to enable CI required status checks to pass before merging.

<details>
    <summary>Why use protected branches?</summary>
    Protected branches allow contributors to create branches and pull requests in your repository, while making sure those changes are throughly vetted before merging. When a repository employs a continuous integration service like CircleCI, branches can be protected based on their build statuses so the review process can be largely <i>automated</i>, giving contributors self-efficacy. Project maintainers also benefit by focusing their attention on gray areas and processes that can't be easily automated.  
</details>

![screen shot 2018-12-13 at 3 32 04 pm](https://user-images.githubusercontent.com/6351798/49971616-4baa7780-feec-11e8-950e-cce1985531d9.png)

I've changed the protections for the `main` branch throughout the course so far to help keep you on track. Now, it's time for you to make some changes.

## Step 6: Protect the `main` branch

### :keyboard: Activity: Protect a branch based on the CI build status

1. Navigate to the [**Branches** section of the Settings]({{ repo }}/settings/branches) for this repository.
1. Under **Branch protection rules**, click the **Edit** button next to `main`.
1. Select **Require status checks to pass before merging**.
1. Uncheck **Require branches to be up to date before merging**.
    - _This is automatically checked, and can be a good idea. For this project, we'll uncheck it to reduce the extra commits and builds._
1. Select the **ci/circleci:build** option.
1. Click **Save changes**.
1. Return to your pull request and [**Approve the pull request**]({{ url }}/files#submit-review).

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


Oops! Looks like you might have left a comment instead of an approval.

Please return to your pull request and [**Approve the pull request**](https://github.com/{{ user.username }}/{{ repo }}/pull/3/files#submit-review).


Awesome, nice work getting those branch protections in place :tada:

But, right before you enabled your branch protections, something happened. A contributor committed invalid syntax on `main` and broke your CI build. Luckily, your new test caught it and you turned on branch protections. These types of errors won't make it into future builds.

> Note: If your build is still processing, you may not see the failed test yet. If you wait a few minutes, it should be done soon.

Looking at your build status, click on the **Details** link as shown below:

![screen shot 2018-12-13 at 3 42 44 pm](https://user-images.githubusercontent.com/6351798/49972036-c1fba980-feed-11e8-9815-6413ec2a5e5e.png)

Notice that you get the following error:

```shell
  Liquid Exception: Liquid syntax error (line 1): Unknown tag 'site' in docs/01_getting_ready_for_class.md
```

Jekyll uses Liquid, an open-source templating language. Liquid loads data dynamically and implements conditional logic. Some of the Liquid syntax in one of the files is incorrect.

## Step 7: Fix the broken build

Let's find the broken syntax and fix the build!

### :keyboard: Activity: Fix the build in your codebase

1. Apply the suggested change.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


Nice job finding and fixing that Liquid syntax!

It might take a moment, but notice as your build is complete that all checks have passed.

## Step 8: Merge code with a successful build

Now that your pull request has a successful build, let's merge it!

### :keyboard: Activity: Merge the pull request

1. Click **Merge pull request**, and delete your branch.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


With the addition of links to our code base, we should add a unit test as one of our CircleCI jobs that run whenever it builds. 

Let's add a test using HTMLProofer to test for any broken links, images, or HTML. By adding this to our `testlinks` unit test, HTMLProofer will test our code before it gets merged.

CircleCI allows us to configure multiple jobs using a feature called [Workflows](https://circleci.com/docs/2.0/workflows-overview/). Since we're interested in performing two jobs (a build, and a test for links), we'll use Workflows.

I've already added some things necessary for HTMLProofer test to run, and implemented the use of the Workflows feature. Next, replace the placeholder text with the following:

```yaml
bundle exec htmlproofer ./_site --check-html
```

## Step 9: Add an HTMLProofer unit test

Let's make sure all links are valid by adding a link checker unit test.

### :keyboard: Activity: Check for broken links using CircleCI

1. In this pull request, replace the `REPLACE-ME-WITH-SCRIPT` placeholder text with `bundle exec htmlproofer ./_site --check-html`. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


<hr>
<h3 align="center">Navigate to your <a href="{{ url }}">new pull request</a> for next steps.</h3>


Nice work! We've added a unit test to check for broken links. When a broken link was committed to our pull request, the test caught it and let us know the build had failed.

![screen shot 2018-12-13 at 4 51 01 pm](https://user-images.githubusercontent.com/6351798/49974597-54547b00-fef7-11e8-899d-3a0f227bed10.png)

Notice how the two parts **build** and **testlinks** both show as CircleCI checks in our build, but the build unit test succeeds while the `testlinks` build fails due to a broken link. Also, notice that even though the `testlinks` test fails, we are still able to merge in the pull request. The branch protection only requires a build test before merging.

When adding tests, or **jobs**, you can decide which ones must pass before allowing the pull request to merge. This is the nature of managing your pipeline as code using [Workflows](https://circleci.com/docs/2.0/workflows-overview/).

![screen shot 2018-12-13 at 5 01 36 pm](https://user-images.githubusercontent.com/6351798/49974946-ca0d1680-fef8-11e8-890e-90a568b50c56.png)

## Step 10: Fix the broken link

Even though it's not required, let's fix the broken link so both CircleCI checks are passing. You can click on the **Details** link next to the failed **testlinks** CircleCI test for more information. By doing so, you'll find the following error:

```
External link https://help.github.com/setupgithub failed: 404 No error
```

### :keyboard: Activity: Fix the broken link

1. In this pull request, change `https://help.github.com/setupgithub` to `https://help.github.com/articles/set-up-git/`. **You can do this by editing the file from the _Files changed_ tab, or by scrolling down and accepting the suggested change.**

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


Nice work!

It might take a moment, but once both the **build** and **testlinks** tests are passing, it's time to merge this pull request.

## Step 11: Merge the unit test

### :keyboard: Activity: Add the `testlinks` unit test to main

1. Review and [**Approve the pull request**]({{ url }}/files#submit-review).
1. Click **Merge pull request**, and delete your branch.

<hr>
<h3 align="center">I'll respond below with your next step.</h3>


Our workflow is looking pretty good! We have now set up some automated tests for any new changes. We can go one step further and add continuous deployment to our workflow.

### What is Continuous Deployment?

**Continuous Deployment**, or **CD**, is an extended step that builds from the automation in CI. CD is automation at various stages, deploying new changes to the different environment.

The goal of CD is to reduce the time it takes to finish a project. Automation provides shorter feedback loops. This could look like faster testing cycles, or faster deployment and user feedback.

There are several ways to deploy your code changes. For this repository, we'll deploy with GitHub Pages. If you'd like to learn more about GitHub Pages, there are a [few learning lab courses](https://lab.github.com/courses?tag=GitHub%20Pages) you might be interested in.

When deploying with GitHub Pages, you can choose to deploy from several locations. We're going to deploy from the `/docs` directory of this repository.  This will deploy only the contents of the `/docs` directory.

## Step 12: Deploy

Whenever there is a new commit on `main`, GitHub pages will deploy.

### :keyboard: Activity: Enable GitHub pages to deploy

1. Navigate to the [**Settings**]({{ repo }}/settings) tab.
1. Under GitHub pages, set the source to `main branch` and click **Save**.

<hr>
<h3 align="center">I'll respond below for your next steps.</h3>


<hr>
<h3 align="center">I created a <a href="{{ url }}">new issue</a>, look for my next response there.</h3>


## Nice work

![celebrate](https://octodex.github.com/images/hula_loop_octodex03.gif)

Congratulations @{{ user.username }}, you've completed this course!

Your project is now live and deployed [here](https://{{ user.username }}.github.io/{{ repo }})!

Before we finish, let's review everything you completed in this course repository:

- Identified when a project is using continuous integration
- Learned the definition of continuous integration and why it is important
- Setup continuous integration on a project repository
- Setup protected branches based on a build status from CircleCI
- Learned how to customize your CircleCI builds
- Added unit tests
- Learned the definition of continuous deployment and why it is important
- Setup continuous deployment by enabling GitHub pages on your project


## What's next?
There's so much more you can do with continuous integration, and you have a solid start. Now...[what will you learn next]({{ host }}/courses)?


Nice job enabling GitHub pages and setting up your continuous deployment.

You can see your deployment published here: https://{{ owner }}.github.io/{{ repo }}.

<hr>
<h3 align="center">I'll respond in <a href="{{ url }}">your next issue</a>.</h3>


