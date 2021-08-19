# GitHub Actions: Continuous Delivery with AWS

_Create two deployment workflows using AWS._

![](https://repository-images.githubusercontent.com/218276307/de270480-586d-11ea-960e-88f9624b4941)

**Tags**: GitHub Actions, Workflows, CD, Amazon Web Services (AWS), Deployment

---

# Welcome to the course!

We'll learn how to create a workflow that enables Continuous Delivery. You'll:
- create a workflow to deploy to staging based on a label
- create a workflow to deploy to production based on merging to main

Before you start, you should be familiar with GitHub and Continuous Integration. If you aren't sure where to start, you may want to check out these two Learning Lab courses:

- [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github)
- [Continuous Integration with GitHub Actions](https://lab.github.com/githubtraining/set-up-continuous-integration-with-github-actions)

### What is Continuous Delivery?

[Martin Fowler](https://martinfowler.com/bliki/ContinuousDelivery.html) defined Continuous Delivery very simply in a 2013 post as follows:

> Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

A lot of things go into delivering "continuously". These things can range from culture and behavior to specific automation. In this course, we're going to focus on deployment automation.

### Kicking off deployments

Every deployment is kicked off by some trigger. Engineers at many companies, like at GitHub, typically use a ChatOps command as a trigger. The trigger itself isn't incredibly important. In our use case, we'll use labels. When someone applies a "stage" label to a pull request, that'll be our indicator that we'd like to deploy our application to a staging environment.

## Step 1: Configure a trigger based on labels

In a GitHub Actions workflow, the `on` step defines what causes the workflow to run. In this case, we want the workflow to run whenever a label is applied to the pull request.

### :keyboard: Activity: Configure the workflow trigger based on a label being added

1. Edit the `deploy-staging.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/CHANGETHIS/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_
2. Change the name of the directory `CHANGETHIS` to `workflows`, so the title of this file with the path is `.github/workflows/deploy-staging.yml`
3. Edit the contents of this file to trigger on a label

Your result should look like this:

```yml
name: Staging deployment

on: 
  pull_request:
    types: [labeled]

jobs:
  build:
    runs-on: ubuntu-latest
```


It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!

# Job conditionals

GitHub Actions features powerful controls for when to execute jobs and the steps within them. One of these controls is `if`, which allows you run a job only when a specific condition is met. See [`jobs.<job_id>.if` in _Workflow syntax for GitHub Actions_](https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) for more information.

### Using information within GitHub

Workflows are part of the GitHub ecosystem, so each workflow run gives you access to a rich set of data that you can use to take fine-grained control.

We'd like to run our workflow on a specific label called **stage**, so we'll achieve this in a single line that packs a punch. We'll use:
- [`if:`](https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) is the conditional that will decide if the job will run
- [`contains()`](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#contains) is a function that allows us to determine if a value like say, a label named `"stage"`, is contained within a set of values like say, a label array `["bug", "stage", "feature request"]`
- `github.event.pull_request.labels` is specifically accessing the set of labels that triggered the workflow to run. It does this by accessing the [`github` object](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context), and the [`pull_request` event](https://help.github.com/en/github/automating-your-workflow-with-github-actions/events-that-trigger-workflows#pull-request-event-pull_request) that triggered the workflow.
- `github.event.pull_request.labels.*.name` uses [object filters](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context) to filter out all information about the labels, like their color or description, and lets us focus on just the label names. 

## Step 2: Trigger a job on specific labels

Let's put all this together to run our job only when a labeled named "stage" is applied to the pull request.

### :keyboard: Activity: Choose the Ubuntu environment for our app

1. Edit the `deploy-staging.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/workflows/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_
2. Edit the contents of the file to add a conditional

Your results should look like this:

```yml
name: Staging deployment

on: 
  pull_request:
    types: [labeled]

jobs:
  build:
    runs-on: ubuntu-latest

    if: contains(github.event.pull_request.labels.*.name, 'stage')
```

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!

# Workflow steps

So far, the workflow knows what the trigger is and what environment to run in. But, what exactly is supposed to run? The "steps" section of this workflow specifies actions and scripts to be run in the Ubuntu environment when new labels are added.

## Step 3: Write the steps for the staging workflow

We won't be going into detail on the steps of this workflow, but it would be a good idea to become familiar with the actions we're using. They are:

- [`actions/checkout`](https://github.com/actions/checkout)
- [`actions/upload-artifact`](https://github.com/actions/upload-artifact)
- [`actions/download-artifact`](https://github.com/actions/download-artifact)
- [`github/deploy-nodejs`](https://github.com/github/deploy-nodejs)

The course [_Using GitHub Actions for CI_](https://lab.github.com/githubtraining/github-actions:-continuous-integration) also teaches how to use most of these actions in details.

### :keyboard: Activity: Deploy a Node.js app to AWS for the first time

1. In a new tab, [create an AWS account](https://portal.aws.amazon.com/billing/signup) if you don't already have one.
    > Note: You may need a credit card to create an AWS account. If you're a student, you may also be able to take advantage of the [Student Developer Pack](https://education.github.com/pack) for access to AWS. If you'd like to continue with the course without an AWS account, Learning Lab will still respond, but none of the deployments will work.
1. **[Add a user](https://console.aws.amazon.com/iam/home?#/users$new?step=details)** in the IAM service with administrator permission.
    - For detailed instructions on adding users, see [_Creating an IAM User in Your AWS Account_](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) in the AWS docs.
1. In the confirmation screen, copy both the **Access key ID** and the **Secret access key** to a safe space. We'll use these in the next few steps as follows:
    - Access key ID ➡️ `AWS_ACCESS_KEY`
    - Secret access key ️️️ ➡️ `AWS_SECRET_KEY`
1. Back on GitHub, click on this repository's **[Secrets]({{ repoUrl }}/settings/secrets)** in the Settings tab.
1. Click **Add a new secret**
1. Name your new secret **AWS_ACCESS_KEY** and paste the value from the Access key ID generated on AWS.
1. Click **Add secret**.
1. Click **Add a new secret** again.
1. Name the second secret **AWS_SECRET_KEY** and paste the value from the Secret access key generated on AWS.
1. Click **Add secret**
2. Back in this pull request, edit the `.github/workflows/deploy-staging.yml` file to use a new action, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/workflows/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_
    ```yml
    - name: Deploy to AWS
      uses: github/deploy-nodejs@master
      env:
        AWS_ACCESS_KEY: {% raw %}${{ secrets.AWS_ACCESS_KEY }}{% endraw %}
        AWS_SECRET_KEY: {% raw %}${{ secrets.AWS_SECRET_KEY }}{% endraw %}
    ```
If you'd like to copy the full workflow file, it should look like this:

```yml
name: Staging deployment

on: 
  pull_request:
    types: [labeled]

jobs:
  build:
    if: contains(github.event.pull_request.labels.*.name, 'stage')

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/

  deploy:
    name: Deploy Node.js app to AWS
    needs: build
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: Deploy to AWS
        uses: github/deploy-nodejs@master
        env:
          AWS_ACCESS_KEY: {% raw %}${{ secrets.AWS_ACCESS_KEY }}{% endraw %}
          AWS_SECRET_KEY: {% raw %}${{ secrets.AWS_SECRET_KEY }}{% endraw %}
```


# Completed Workflow

Nice job, you've done it!

It won't be "working" yet, because our next step is to work on the configuration files that AWS will need. But, the logic for this workflow is complete.

## Step 4: Merge the staging workflow

### :keyboard: Activity: Merge this staging workflow pull request

1. Merge this pull request
2. Delete the `staging-workflow` branch

# AWS Configuration - S3 Buckets

GitHub Actions is cloud agnostic, so any cloud will work. We'll show how to deploy to AWS in this course.

### S3 Buckets

Amazon S3 Buckets are a very flexible type of data storage -- they can be configured to work in many different types of ways. They're popular for their security, scalability, and dependability. Our S3 Bucket will store our application, both in staging and in production.

## Step 5: Confirm AWS S3 configuration

### :keyboard: Activity: Create an S3 bucket

1. Navigate to the [Amazon S3](https://s3.console.aws.amazon.com/s3/home) service and click on **Create bucket**.
    - See [_Create a Bucket_](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) on AWS documentation for the most detailed instructions.
1. Name the bucket whatever you'd like, and jot the name down.
1. Select a region, and jot it down. You'll need it later. These examples use **US West (Oregon)**, also known as **us-west-2**. If you'd like to choose another region, make sure to update the `aws-config.yml` file to match.
1. For all other options, accept the defaults.
2. Edit the `.github/aws-config.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/aws-configuration/.github/aws-config.yml?). _(We recommend opening the quick link in another tab.)_
3. Change the value of `s3_bucket:` to match your chosen bucket name.
4. In the same file, confirm that the `region:` value matches your chosen region for the S3 bucket.
5. Commit your changes.

I'll respond when I detect a commit on this branch.

You can find your next steps in the [next pull request]({{ url }}).

# AWS Configuration files

To deploy successfully to our S3 bucket on AWS, we need a few special configuration files.

### `aws-config.yml`

The `aws-config.yml` file is needed with the `Deploy to AWS` Action that we're using. **How did we know that it's needed?** In the [documentation for the GitHub action](https://github.com/github/deploy-nodejs), there are specific instructions about including this file, and where it needs to sit within the repository.

Whenever you're using a GitHub Action, it's important to read the documentation. There may be details like what secrets or other template files are required for the Action to work as expected.

### `sam-template.yml`

This file is a bit trickier. The template `aws-config.yml` file that was documented with the action has a placeholder for this template, but doesn't specify what we should do.

This file is specific to deploying a serverless application to AWS. Specifically, an AWS SAM template tells AWS how to set up the application's architecture. Read more about it in [_AWS SAM Template Concepts_](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-template-basics.html) in the AWS documentation.

In our case, we created the `sam-template.yml` for you. It contains information that's specific about the application's endpoints and structure.

## Step 6: Approve the pull request

I've requested your approval on this pull request. Once you approve this, I will merge.

### :keyboard: Activity: Approve pull request adding `aws-config.yml` and `sam-template.yml`

1. Approve this pull request


Uh oh - you reviewed this pull request, but you didn't approve it. Please approve it. 

# Testing the workflow

Now that the proper configuration and workflow files are present, let's test this action out!

## Step 7: Test the staging action

In this pull request, there's a small change to the game. Once you add the label, you should be able to see the deployment!

### :keyboard: Activity: Add the proper label to this pull request

1. On the right hand side, click **Labels** or the gear next to it
2. Select the label titled **stage**


You can find your next steps in the [next pull request]({{ url }}).

# Different triggers

Deployments to production can be manual (like through a Chat Ops command), or automated (if, say, we trust our pull request review process and we've followed continuous integration practices).

We'll trigger a deployment to the production environment whenever something is committed to main. Our main branch is protected, so the only way for commits to appear on main is for a pull request to have been created and gone through the proper review process and merged.

## Step 8: Write the production deployment trigger

Let's create a new workflow that deals specifically with commits to main and handles deployments to prod.

### :keyboard: Activity: Write the production deployment trigger on merge to main

1. Edit the `deploy-prod.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/production-deployment-workflow/.github/CHANGETHIS/deploy-prod.yml?) _(We recommend opening the quick link in another tab)_
2. Rename the file in this pull request to `.github/workflows/deploy-prod.yml`
3. Add a `push` trigger
4. Add `branches` inside the push block
5. Add `- main` inside the branches block
6. Commit your changes to this branch

The file should look like this when you're finished:

```yml
name: Production deployment

on: 
  push:
    branches:
      - main
```


The deployment may take a few moments but you've done the right thing. Once the deployment is successful, you'll see green check marks for each run, and you'll see a URL for your deployment.

![a screenshot of the Actions logs showing a completed deployment with an Output section and a staging URL](https://user-images.githubusercontent.com/16547949/68046896-6aa42a80-fcb3-11e9-9927-f493201167dc.png)

You can wait for the deployment, or move on to the next steps in the [next pull request]({{ url }}). 

If you'd like to come back and merge this once their other workflow is done, you can. :tada:

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!

Great! The syntax you used tells GitHub Actions to only run that workflow when a commit is made to the main branch. 

# Deploying to production

Just like with the other workflow, we'll need to build our application and deploy to AWS using the same action as before because we are working with the same `Node.js` app. 

**Continuous delivery** is a concept that contains many behaviors and other, more specific concepts. One of those concepts is **test in production**. That can mean different things to different projects and different companies, and isn't a strict rule that says you are or aren't "doing CD".

In our case, we can match our production environment to be exactly like our staging environment. This minimizes opportunities for surprises once we deploy to production.

## Step 9: Complete the deployment to production workflow

### :keyboard: Commit the steps to the production workflow that allow you to deploy on merge to main

1. Edit the `deploy-prod.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/production-deployment-workflow/.github/workflows/deploy-prod.yml?) _(We recommend opening the quick link in another tab)_
2. Add a `build` and `deploy` job to the workflow

It should look like the file below when you are finished. Note that not much has changed from our staging workflow, except for our trigger.

```yml
name: Production deployment

on: 
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/

  deploy:
    name: Deploy Node.js app to AWS
    needs: build
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: Deploy to AWS
        uses:  github/deploy-nodejs@master
        env:
          AWS_ACCESS_KEY: {% raw %}${{ secrets.AWS_ACCESS_KEY }}{% endraw %}
          AWS_SECRET_KEY: {% raw %}${{ secrets.AWS_SECRET_KEY }}{% endraw %}
```


# Workflow steps

We'll add a final section to our production workflow that packages up our application in a Docker container and publishes it to GitHub Packages. This step is important for the traceability of your deployed artifacts.

We'll only use one new action here created by a GitHubber, which allows us to push a container to GitHub Packages. 
- `mattdavis0351/actions/docker-gpr`

All of this happens automatically once a pull request is merged!

## Step 10: Create the Docker image and push it to GitHub Packages

### :keyboard: Activity: Write the steps for the production deployment workflow

1. Edit the `deploy-prod.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/production-deployment-workflow/.github/workflows/deploy-prod.yml?) _(We recommend opening the quick link in another tab)_
1. Add a job to your workflow as follows:
    ```yml
    Build-and-Push-Docker-Image:
    runs-on: ubuntu-latest
    needs: build
    name: Docker Build, Tag, Push
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: Build, Tag, Push
        uses: mattdavis0351/actions/docker-gpr@v1
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          image-name: {{user.login}}-aws-ttt
    ```
1. Commit the workflow to this branch.

The complete workflow file should look like this:

```yml
name: Production deployment

on: 
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/

  deploy:
    name: Deploy Node.js app to AWS
    needs: build
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: Deploy to AWS
        uses:  github/deploy-nodejs@master
        env:
          AWS_ACCESS_KEY: {% raw %}${{ secrets.AWS_ACCESS_KEY }}{% endraw %}
          AWS_SECRET_KEY: {% raw %}${{ secrets.AWS_SECRET_KEY }}{% endraw %}

  Build-and-Push-Docker-Image:
    runs-on: ubuntu-latest
    needs: build
    name: Docker Build, Tag, Push
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: Build, Tag, Push
        uses: mattdavis0351/actions/docker-gpr@v1
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          image-name: {{user.login}}-aws-ttt
```


# Completed Workflow

Nice job, you've done it!

## Step 11: Merge the production workflow

### :keyboard: Activity: Merge this pull request and test the production deployment workflow

1. Merge this pull request
2. Delete the branch


## Nice work!

Now, we just have to wait for the deployment to occur, and for the package to be published to GitHub Packages. When it's completed, you should be able to see it in the [Packages]({{ repoUrl }}/packages) section of your repository. You can get the deployment URL in the [Actions]({{ repoUrl }}/actions) log, just like the staging URL.

:bangbang: Remember to destroy or disable the AWS services created during this course if you'd like to ensure they don't consume resources accidentally. As a reminder, the following resources were created on your AWS account:
- IAM user
- S3 bucket

![celebrate](https://octodex.github.com/images/jetpacktocat.png)

This course is now complete! I'll stop responding but the fun doesn't have to stop here. 

Now...[what will you learn next]({{ host }}/courses)?


