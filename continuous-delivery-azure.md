# GitHub Actions: Continuous Delivery with Azure

_Create two deployment workflows using GitHub Actions and Microsoft Azure._

![](https://repository-images.githubusercontent.com/247808107/d6de8f80-684a-11ea-97d2-5705e8595f0d)

**Tags**: GitHub Actions, Microsoft Azure, Workflows, CD, Deployment

---

# Welcome to the course!

We'll learn how to create a workflow that enables Continuous Delivery. You'll:
- create a workflow to deploy to staging based on a label
- create a workflow to deploy to production based on merging to main

Before you start, you should be familiar with GitHub and Continuous Integration. If you aren't sure where to start, you may want to check out these two Learning Lab courses:

- [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github)
- [Continuous Integration with GitHub Actions](https://lab.github.com/githubtraining/github-actions:-continuous-integration/)

### What is Continuous Delivery?

[Martin Fowler](https://martinfowler.com/bliki/ContinuousDelivery.html) defined Continuous Delivery very simply in a 2013 post as follows:

> Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

A lot of things go into delivering "continuously". These things can range from culture and behavior to specific automation. In this course, we're going to focus on deployment automation.

### Setting up environments and kicking off deployments

Automation works at its best when a set of triggers work harmoniously to set up and deploy to target environments. Engineers at many companies, like at GitHub, typically use a ChatOps command as a trigger. The trigger itself isn't incredibly important.

In our use case, we'll use labels as triggers for multiple tasks:
- When someone applies a "spin up environment" label to a pull request, that'll tell GitHub Actions that we'd like to set up our resources on an Azure environment.
- When someone applies a "stage" label to a pull request, that'll be our indicator that we'd like to deploy our application to a staging environment.
- When someone applies a "destroy environment" label to a pull request, we'll tear down any resources that are running on our Azure account.

For now, we'll focus on staging. We'll spin up and destroy our environment in a later step.

## Step 1: Configure a trigger based on labels

In a GitHub Actions workflow, the `on` step defines what causes the workflow to run. In this case, we want the workflow to run whenever a label is applied to the pull request.

### :keyboard: Activity: Configure the workflow trigger based on a label being added

1. Edit the `deploy-staging.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/CHANGETHIS/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_
2. Change the name of the directory `CHANGETHIS` to `workflows`, so the title of this file with the path is `.github/workflows/deploy-staging.yml`. If you're working on the GitHub.com user interface, see the suggestion below for how to rename.
3. Edit the contents of this file to trigger a job called `build` on a label

<details><summary>Changing the name of a directory</summary>

If you're working locally, rename your file or drag-and-drop the file into the proper directory as you'd normally do. If you're working on GitHub.com, you can change the name of a directory by changing its filename and using the Backspace key until you reach the directory, as follows:
1. In the file name field, click in front of the first character in the file name
1. Press <kbd>Backspace</kbd> or <kbd>Delete</kbd> on your keyboard until you see the path you want to keep. You can continue to press <kbd>Backspace</kbd> even if the text box with the file name is empty. 
1. Enter the new name for your directory.
1. Enter `/` to let GitHub know this should be a new directory.
</details>

Your resulting file should be in `.github/workflows/deploy-staging.yml` and it should look like this:

```yml
name: Stage the app

on: 
  pull_request:
    types: [labeled]

jobs:
  build:
    runs-on: ubuntu-latest
```

---

I'll respond when you push a commit on this branch.

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Job conditionals

GitHub Actions features powerful controls for when to execute jobs and the steps within them. One of these controls is `if`, which allows you run a job only when a specific condition is met. See [`jobs.<job_id>.if` in _Workflow syntax for GitHub Actions_](https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) for more information.

### Using information within GitHub

Workflows are part of the GitHub ecosystem, so each workflow run gives you access to a rich set of data that you can use to take fine-grained control.

We'd like to run our workflow on a specific label name, suppose that it's **peacock**. We can run the workflow based on that label name with the following single line that packs a punch: `if: contains(github.event.pull_request.labels.*.name, 'peacock')`. Here's how it works:
- [`if:`](https://help.github.com/en/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) is the conditional that will decide if the job will run
- [`contains()`](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#contains) is a function that allows us to determine if a value like say, a label named `"peacock"`, is contained within a set of values like say, a label array `["bug", "stage", "peacock", "feature request"]`
- `github.event.pull_request.labels` is specifically accessing the set of labels that triggered the workflow to run. It does this by accessing the [`github` object](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context), and the [`pull_request` event](https://help.github.com/en/github/automating-your-workflow-with-github-actions/events-that-trigger-workflows#pull-request-event-pull_request) that triggered the workflow.
- `github.event.pull_request.labels.*.name` uses [object filters](https://help.github.com/en/github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context) to filter out all information about the labels, like their color or description, and lets us focus on just the label names. 

## Step 2: Trigger a job on specific labels

Let's put all this together to run our job only when a labeled named "stage" is applied to the pull request.

### :keyboard: Activity: Add a conditional to select from labels

1. Edit the `deploy-staging.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/workflows/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_
1. Edit the contents of the file to add a block for environment variables before your jobs, as follows.
    ```yaml
    env:
      DOCKER_IMAGE_NAME: {{user.login}}-azure-ttt
      IMAGE_REGISTRY_URL: docker.pkg.github.com
      #################################################
      ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
      #################################################
      #################################################
      ### REPLACE USERNAME WITH GH USERNAME         ###
      AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
      #################################################
    ```
1. Edit the contents of the file to add a conditional that filters the `build` job using a label called "stage".

Your results should look like this:

```yml
name: Stage the app

on: 
  pull_request:
    types: [labeled]

env:
  DOCKER_IMAGE_NAME: {{user.login}}-azure-ttt
  IMAGE_REGISTRY_URL: docker.pkg.github.com
  #################################################
  ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
  #################################################
  #################################################
  ### REPLACE USERNAME WITH GH USERNAME         ###
  AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
  #################################################

jobs:
  build:
    runs-on: ubuntu-latest

    if: contains(github.event.pull_request.labels.*.name, 'stage')
```

---

I'll respond when you push a commit on this branch.

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Workflow steps

So far, the workflow knows what the trigger is and what environment to run in. But, what exactly is supposed to run? The "steps" section of this workflow specifies actions and scripts to be run in the Ubuntu environment when new labels are added.

## Step 3: Set up the environment for your app

We won't be going into detail on the steps of this workflow, but it would be a good idea to become familiar with the actions we're using. They are:

- [`actions/checkout`](https://github.com/actions/checkout)
- [`actions/upload-artifact`](https://github.com/actions/upload-artifact)
- [`actions/download-artifact`](https://github.com/actions/download-artifact)
- [`azure/webapps-container-deploy`](https://github.com/Azure/webapps-container-deploy)

The course [_Using GitHub Actions for CI_](https://lab.github.com/githubtraining/github-actions:-continuous-integration) also teaches how to use most of these actions in details.

### :keyboard: Activity: Store your credentials in GitHub secrets and finish setting up your workflow
1. In a new tab, [create an Azure account](https://azure.microsoft.com/en-us/free/) if you don't already have one. If your Azure account is created through work, you may encounter issues accessing the necessary resources -- we recommend creating a new account for personal use and for this course. 
    > Note: You may need a credit card to create an Azure account. If you're a student, you may also be able to take advantage of the [Student Developer Pack](https://education.github.com/pack) for access to Azure. If you'd like to continue with the course without an Azure account, Learning Lab will still respond, but none of the deployments will work.
1. Create a [new subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription) in the Azure Portal. 
    > Note: your subscription must be configured "Pay as you go" which will require you to enter billing information. This course will only use a few minutes from your free plan, but Azure requires the billing information. 
1. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) on your machine. 
1. In your terminal, run:
    ```shell
    az login
    ```
1. Copy the value of the `id:` field to a safe place. We'll call this `AZURE_SUBSCRIPTION_ID`. Here's an example of what it looks like:
    ```shell
    [
    {
      "cloudName": "AzureCloud",
      "id": "f****a09-****-4d1c-98**-f**********c", # <-- Copy this id field
      "isDefault": true,
      "name": "some-subscription-name",
      "state": "Enabled",
      "tenantId": "********-a**c-44**-**25-62*******61",
      "user": {
        "name": "mdavis******@*********.com",
        "type": "user"
        }
      }
    ]
    ```
1. In your terminal, run the command below. **Note: The `\` character works as a line break on Unix based systems.  If you are on a Windows based system the `\` character will cause this command to fail.  Place this command on a single line if you are using Windows.**
    ```shell
    az ad sp create-for-rbac --name "GitHub-Actions" --role contributor \
                              --scopes /subscriptions/{subscription-id} \
                              --sdk-auth
                              
    # Replace {subscription-id} with the same id stored in AZURE_SUBSCRIPTION_ID.
    ```   
1. Copy the entire contents of the command's response, we'll call this `AZURE_CREDENTIALS`. Here's an example of what it looks like:
    ```shell
    {
      "clientId": "<GUID>",
      "clientSecret": "<GUID>",
      "subscriptionId": "<GUID>",
      "tenantId": "<GUID>",
      (...)
    } 
    ```
1. Back on GitHub, click on this repository's **[Secrets]({{ repoUrl }}/settings/secrets)** in the Settings tab.
1. Click **New secret**
1. Name your new secret **AZURE_SUBSCRIPTION_ID** and paste the value from the `id:` field in the first command.
1. Click **Add secret**.
1. Click **New secret** again.
1. Name the second secret **AZURE_CREDENTIALS** and paste the entire contents from the second terminal command you entered.
1. Click **Add secret**
1. Back in this pull request, edit the `.github/workflows/deploy-staging.yml` file to use some new actions, or [use this quick link]({{ repoUrl }}/edit/staging-workflow/.github/workflows/deploy-staging.yml?) _(We recommend opening the quick link in another tab)_

If you'd like to copy the full workflow file, it should look like this:

```yml
name: Stage the app

on: 
  pull_request:
    types: [labeled]

env:
  DOCKER_IMAGE_NAME: {{user.login}}-azure-ttt
  IMAGE_REGISTRY_URL: docker.pkg.github.com
  #################################################
  ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
  #################################################
  #################################################
  ### REPLACE USERNAME WITH GH USERNAME         ###
  AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
  #################################################

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

  Build-Docker-Image:
    runs-on: ubuntu-latest
    needs: build
    name: Build image and store in GitHub Packages
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: create image and store in Packages
        uses: mattdavis0351/actions/docker-gpr@1.3.0
        with:
          repo-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
          image-name: {% raw %}${{env.DOCKER_IMAGE_NAME}}{% endraw %}

  Deploy-to-Azure:
    runs-on: ubuntu-latest
    needs: Build-Docker-Image
    name: Deploy app container to Azure
    steps:
      - name: "Login via Azure CLI"
        uses: azure/login@v1
        with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

      - uses: azure/docker-login@v1
        with:
          login-server: {% raw %}${{env.IMAGE_REGISTRY_URL}}{% endraw %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Deploy web app container
        uses: azure/webapps-deploy@v2
        with:
          app-name: {% raw %}${{env.AZURE_WEBAPP_NAME}}{% endraw %}
          images: {% raw %}${{env.IMAGE_REGISTRY_URL}}/${{ github.repository }}/${{env.DOCKER_IMAGE_NAME}}:${{ github.sha }}{% endraw %}

      - name: Azure logout
        run: |
          az logout
```

---

I'll respond when you push a commit on this branch.

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Completed Workflow

Nice job, you've done it!

It won't be "working" yet, because our next step is to work on the configuration files that our cloud provider will need. But, the logic for this workflow is complete.

## Step 4: Merge the staging workflow

### :keyboard: Activity: Merge this staging workflow pull request

1. Merge this pull request
2. Delete the `staging-workflow` branch

---

I'll respond when you merge this pull request.
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Azure configuration

GitHub Actions is cloud agnostic, so any cloud will work. We'll show how to deploy to Azure in this course.

### Azure resources

We'll use the following Azure resources in this course:
- A [web app](https://docs.microsoft.com/en-us/azure/app-service/overview) is how we'll be deploying our application to Azure.
- A [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups) is a collection of resources, like web apps and virtual machines (VMs).
- An [App Service plan](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans) is what runs our web app and manages the billing (our app should run for free).

Through the power of GitHub Actions, we can create, configure, and destroy these resources through our workflow files. 

## Step 5: Spin up, configure, and destroy Azure resources

### :keyboard: Activity: Use your workflow file to configure your cloud resources

1. Edit the `.github/CHANGETHIS/spinup-destroy.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/azure-configuration/.github/CHANGETHIS/spinup-destroy.yml?). _(We recommend opening the quick link in another tab.)_
1. Rename the file to `.github/workflows/spinup-destroy.yml`
1. Change the value of the `AZURE_WEBAPP_NAME:` to `{{ user.login }}-ttt-app`
1. Commit your changes.

The file should look like this:

```yaml
name: Configure Azure environment

on: 
  pull_request:
    types: [labeled]

env:
  AZURE_RESOURCE_GROUP: cd-with-actions
  AZURE_APP_PLAN: actions-ttt-deployment
  AZURE_LOCATION: '"Central US"'
  #################################################
  ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
  #################################################
  #################################################
  ### REPLACE USERNAME WITH GH USERNAME         ###
  AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
  #################################################

jobs:
  setup-up-azure-resources:
    runs-on: ubuntu-latest

    if: contains(github.event.pull_request.labels.*.name, 'spin up environment')

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Azure login
        uses: azure/login@v1
        with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

      - name: Create Azure resource group
        if: success()
        run: |
          {% raw %}az group create --location ${{env.AZURE_LOCATION}} --name ${{env.AZURE_RESOURCE_GROUP}} --subscription ${{secrets.AZURE_SUBSCRIPTION_ID}}{% endraw %}

      - name: Create Azure app service plan
        if: success()
        run: |
          {% raw %}az appservice plan create --resource-group ${{env.AZURE_RESOURCE_GROUP}} --name ${{env.AZURE_APP_PLAN}} --is-linux --sku F1 --subscription ${{secrets.AZURE_SUBSCRIPTION_ID}}{% endraw %}

      - name: Create webapp resource
        if: success()
        run: |
          {% raw %}az webapp create --resource-group ${{ env.AZURE_RESOURCE_GROUP }} --plan ${{ env.AZURE_APP_PLAN }} --name ${{ env.AZURE_WEBAPP_NAME }}  --deployment-container-image-name nginx --subscription ${{secrets.AZURE_SUBSCRIPTION_ID}}{% endraw %}

      - name: Configure webapp to use GitHub Packages
        if: success()
        run: |
          {% raw %}az webapp config container set --docker-custom-image-name nginx --docker-registry-server-password ${{secrets.GITHUB_TOKEN}} --docker-registry-server-url https://docker.pkg.github.com --docker-registry-server-user ${{github.actor}} --name ${{ env.AZURE_WEBAPP_NAME }} --resource-group ${{ env.AZURE_RESOURCE_GROUP }} --subscription ${{secrets.AZURE_SUBSCRIPTION_ID}}{% endraw %}

  destroy-azure-resources:
    runs-on: ubuntu-latest

    if: contains(github.event.pull_request.labels.*.name, 'destroy environment')

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Azure login
        uses: azure/login@v1
        with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

      - name: Destroy Azure environment
        if: success()
        run: |
          {% raw %}az group delete --name ${{env.AZURE_RESOURCE_GROUP}} --subscription ${{secrets.AZURE_SUBSCRIPTION_ID}} --yes{% endraw %}
```

---

I'll respond when I detect a commit on this branch.

{% if url contains "pull" %}
You can find your next steps in the [next pull request]({{ url }}).
{% else %}
You can find your next steps in the [next issue]({{ url }}).
{% endif %}
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Configuring your Azure environment

To deploy successfully to our Azure environment, we've created a new workflow with two jobs:
1. **Set up Azure resources** will run if the pull request contains a label with the name "spin up environment". 
1. **Destroy Azure resources** will run if the pull request contains a label with the name "destroy environment".

In addition to each job, there's a few global environment variables:
- `AZURE_RESOURCE_GROUP`, `AZURE_APP_PLAN`, and `AZURE_WEBAPP_NAME` are names for our resource group, app service plan, and web app, respectively, which we'll reference over multiple steps and workflows
- `AZURE_LOCATION` lets us specify the [region](https://azure.microsoft.com/en-us/global-infrastructure/regions/) for the data centers, where our app will ultimately be deployed. 

### Setting up Azure resources

The first job sets up the Azure resources as follows:
1. Logs into your Azure account with the [`azure/login`](https://github.com/Azure/login) action. The `AZURE_CREDENTIALS` secret you created earlier is used for authentication.
1. Creates an [Azure resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups) by running [`az group create`](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-create) on the Azure CLI, which is [pre-installed on the GitHub-hosted runner](https://help.github.com/en/actions/reference/software-installed-on-github-hosted-runners).
1. Creates an [App Service plan](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans) by running  [`az appservice plan create`](https://docs.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create) on the Azure CLI.
1. Creates a [web app](https://docs.microsoft.com/en-us/azure/app-service/overview) by running [`az webapp create`](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-create) on the Azure CLI.
1. Configures the newly created web app to use [GitHub Packages](https://help.github.com/en/packages/publishing-and-managing-packages/about-github-packages) by using [`az webapp config`](https://docs.microsoft.com/en-us/cli/azure/webapp/config?view=azure-cli-latest) on the Azure CLI. Azure can be configured to use its own [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/), [DockerHub](https://docs.docker.com/docker-hub/), or a custom (private) registry. In this case, we'll configure GitHub Packages as a custom registry. 

### Destroying Azure resources

The second job destroys Azure resources so that you do not use your free minutes or incur billing. The job works as follows:
1. Logs into your Azure account with the [`azure/login`](https://github.com/Azure/login) action. The `AZURE_CREDENTIALS` secret you created earlier is used for authentication.
1. Deletes the resource group we created earlier using [`az group delete`](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-delete) on the Azure CLI.

## Step 6: Approve the pull request

I've requested your approval on this pull request. Once you approve this, I will merge.

### :keyboard: Activity: Approve pull request adding the necessary configuration files

1. Apply the "spin up environment" label to this pull request
1. Wait for the GitHub Actions workflow to run and spin up your Azure environment. You can follow along in the Actions tab or in the pull request merge box.
1. Once the workflow succeeds, approve this pull request

---

I'll respond when I receive an approval on this pull request.

Uh oh - I was looking for you to review the pull request titled **Configure cloud provider**. 
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Testing the workflow

Now that the proper configuration and workflow files are present, let's test our actions!

## Step 7: Test the GitHub Actions workflows

In this pull request, there's a small change to the game. Once you add the label, you should be able to see the deployment!

### :keyboard: Activity: Add the proper label to this pull request

1. On the right hand side, click **Labels** or the gear next to it
2. Select the label titled **stage**

---

I'll respond when you apply a label to this pull request.
{% if url contains "pull" %}
You can find your next steps in the [next pull request]({{ url }}).
{% else %}
You can find your next steps in the [next issue]({{ url }}).
{% endif %}
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Different triggers

Deployments to production can be manual (like through a Chat Ops command), or automated (if, say, we trust our pull request review process and we've followed continuous integration practices).

We'll trigger a deployment to the production environment whenever something is committed to main. Our main branch is protected, so the only way for commits to appear on main is for a pull request to have been created and gone through the proper review process and merged.

## Step 8: Write the production deployment trigger

Let's create a new workflow that deals specifically with commits to main and handles deployments to prod.

### :keyboard: Activity: Write the production deployment trigger on merge to main

1. Edit the `deploy-prod.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/production-deployment-workflow/.github/CHANGETHIS/deploy-prod.yml?) _(We recommend opening the quick link in another tab)_
1. Rename the file in this pull request to `.github/workflows/deploy-prod.yml`
1. Add a `push` trigger
1. Add `branches` inside the push block
1. Add `- main` inside the branches block
1. Add the same environment block as before:
    ```yaml
    env:
      AZURE_RESOURCE_GROUP: cd-with-actions
      AZURE_APP_PLAN: actions-ttt-deployment
      AZURE_LOCATION: '"Central US"'
      #################################################
      ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
      #################################################
      #################################################
      ### REPLACE USERNAME WITH GH USERNAME         ###
      AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
      #################################################
    ```
1. Commit your changes to this branch

The file should look like this when you're finished:

```yml
name: Production deployment

on: 
  push:
    branches:
      - main

env:
  AZURE_RESOURCE_GROUP: cd-with-actions
  AZURE_APP_PLAN: actions-ttt-deployment
  AZURE_LOCATION: '"Central US"'
  #################################################
  ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
  #################################################
  #################################################
  ### REPLACE USERNAME WITH GH USERNAME         ###
  AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
  #################################################
```

---

I'll respond when you push a commit on this branch.

The deployment may take a few moments but you've done the right thing. Once the deployment is successful, you'll see green check marks for each run, and you'll see a URL for your deployment.

![a screenshot of the Actions logs showing a completed deployment with an Output section and a staging URL](https://user-images.githubusercontent.com/16547949/75822370-dc79a700-5d6d-11ea-8840-0a792f0639a5.png)

You can wait for the deployment, or move on to the next steps in the [next pull request]({{ url }}). 

If you'd like to come back and merge this once the other workflow is done, just approve this pull request and merge. :tada:

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
Great! The syntax you used tells GitHub Actions to only run that workflow when a commit is made to the main branch. 

# Deploying to production

Just like with the other workflow, we'll need to build our application and deploy to Azure using the same action as before because we are working with the same `Node.js` app. 

**Continuous delivery** is a concept that contains many behaviors and other, more specific concepts. One of those concepts is **test in production**. That can mean different things to different projects and different companies, and isn't a strict rule that says you are or aren't "doing CD".

In our case, we can match our production environment to be exactly like our staging environment. This minimizes opportunities for surprises once we deploy to production.

## Step 9: Complete the deployment to production workflow

### :keyboard: Activity: Add jobs to a production deployment workflow

1. Edit the `deploy-prod.yml` file on this branch, or [use this quick link]({{ repoUrl }}/edit/production-deployment-workflow/.github/workflows/deploy-prod.yml?) _(We recommend opening the quick link in another tab)_
2. Add a `build` and `deploy` job to the workflow

It should look like the file below when you are finished. Note that not much has changed from our staging workflow, except for our trigger, and that we won't be filtering by labels.

```yml
name: Production deployment

on: 
  push:
    branches:
      - main

env:
  DOCKER_IMAGE_NAME: {{user.login}}-azure-ttt # Must not exist as a package associated with a different repo!
  IMAGE_REGISTRY_URL: docker.pkg.github.com
  #################################################
  ### USER PROVIDED VALUES ARE REQUIRED BELOW   ###
  #################################################
  #################################################
  ### REPLACE USERNAME WITH GH USERNAME         ###
  AZURE_WEBAPP_NAME: {{user.login}}-ttt-app
  #################################################

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

  Build-Docker-Image:
    runs-on: ubuntu-latest
    needs: build
    name: Build image and store in GitHub Packages
    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Download built artifact
        uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public

      - name: create image and store in Packages
        uses: mattdavis0351/actions/docker-gpr@1.3.0
        with:
          repo-token: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
          image-name: {% raw %}${{env.DOCKER_IMAGE_NAME}}{% endraw %}

  Deploy-to-Azure:
    runs-on: ubuntu-latest
    needs: Build-Docker-Image
    name: Deploy app container to Azure
    steps:
      - name: "Login via Azure CLI"
        uses: azure/login@v1
        with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

      - uses: azure/docker-login@v1
        with:
          login-server: {% raw %}${{env.IMAGE_REGISTRY_URL}}{% endraw %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Deploy web app container
        uses: azure/webapps-deploy@v2
        with:
          app-name: {% raw %}${{env.AZURE_WEBAPP_NAME}}{% endraw %}
          images: {% raw %}${{env.IMAGE_REGISTRY_URL}}/${{ github.repository }}/${{env.DOCKER_IMAGE_NAME}}:${{ github.sha }}{% endraw %}

      - name: Azure logout
        run: |
          az logout
```

---

I'll respond when you push a commit on this branch.

It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
# Completed Workflow

Nice job, you've done it!

## Step 11: Merge the production workflow

### :keyboard: Activity: Merge this pull request and test the production deployment workflow

1. Merge this pull request
2. Delete the branch

---

I'll respond when you merge this pull request.
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
## Nice work!

Now, we just have to wait for the deployment to occur, and for the package to be published to GitHub Packages. When it's completed, you should be able to see it in the [Packages]({{ repoUrl }}/packages) section of your repository. You can get the deployment URL in the [Actions]({{ repoUrl }}/actions) log, just like the staging URL.

# The cloud environment

Throughout the course you've spun up resources that, if left unattended, could incur billing or consume your free minutes from the cloud provider. Let's tear down those environments so that you can keep your minutes for more learning!

## Step 12: Clean up your environment

### :keyboard: Activity: Destroy any running resources so you don't incur charges

1. Apply the **destroy environment** label to this pull request.

---

I'll respond when you apply a label to this pull request. 
It looks like you took an action I didn't expect. 

I expected you to {{ expected }}. Please try that to continue!
Now that you've applied the proper label, let's wait for the GitHub Actions workflow to complete. When it's finished, you can confirm that your environment has been destroyed by visiting your app's URL, or by logging into the Azure portal to see it is not running.

This course is now complete! I'll stop responding but the fun doesn't have to stop here. 

![celebrate](https://octodex.github.com/images/jetpacktocat.png)

Now...[what will you learn next]({{ host }}/courses)?

