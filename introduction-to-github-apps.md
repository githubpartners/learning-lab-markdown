# Getting started with GitHub Apps

_Add your own GitHub feature, automate workflows, and more with GitHub Apps._

![](https://repository-images.githubusercontent.com/150165582/e7b06c80-586d-11ea-8147-4bbfe5a7eaa4)

**Tags**: webhooks, API, GitHub Apps, Probot, Installing

---

# Welcome to Getting started with GitHub Apps

We're going to work together to learn about GitHub Apps! We'll do this in this repository, which is a collection of resources - _games_ to be specific. Before we start using real GitHub applications, let's get some foundations out of the way.

### New to GitHub?

For this course, you'll need to know how to create a branch on GitHub, commit changes using Git, and open a pull request on GitHub. If you need a refresher on the GitHub flow, check out [the Introduction to GitHub course]({{ host}}/courses/introduction-to-github).

## Application vs GitHub Application
There are many types of applications, like the apps you might have on your phone. In this course, we'll focus on **GitHub Applications**, apps designed to work on GitHub.

GitHub Apps allow you to change GitHub's surface-level functionality through webhooks and GitHub's APIs. GitHub Apps act as top-layer tools that you can use to customize and automate routine processes.

Please note that GitHub Apps are very different from OAuth Apps. These have a different installation flow and have different rules around how they handle their data and access. If you'd like to learn more, check out the documentation on [the differences between GitHub and OAuth Apps](https://docs.github.com/apps/differences-between-apps/).

## Step 1: Get familiar with GitHub Apps

To learn more about GitHub Apps, you will install two on this repository. Make sure to install the apps on **this** repository only. Don't apply them to everything you have access to.

### :keyboard: Activity: Install your first apps :tada:

1. Install the <a href="https://probot.github.io/apps/wip/" target="_blank">WIP app</a> to this repository
1. Install the <a href="https://probot.github.io/apps/request-info/" target="_blank">Request Info app</a> to this repository
1. Close this issue

<hr>
<h3 align="center">After installing, close this issue and look for my response below</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


## Triggering GitHub Apps

Actions that a person or tool takes on GitHub can be used to trigger events. Creating an issue, making a commit, or leaving a comment, to name a few, are logged on GitHub. If GitHub doesn't use it, it can still be useful to other applications.

When you install an app, you give the app permission to receive some of this data from GitHub. That data allows the apps to react in ways that are useful to you. You can also allow the app to send information back, or change information completely.

It's important to mention that GitHub Apps are not people. You can't interact with them by doing things like using an @mention, or assigning them to review your work. On the other hand, they can do things that humans can't - like crunch big data, piece together networks of information and find bugs or errors that people wouldn't.

## App components

An app is like a home security system. It's equipped to watch your house at all times, but only notifies you for specific criteria.	When you install a home security system, you need to worry about a few components:

- **Electricity** to have the power to run continuously. You don't want failure when you aren't watching.
- **Standard behaviors** to detect things like movement, noise, and doors opening. You don't want to have to program it to understand these actions -- you want to select how it responds to them.
- A **location** that will be watched.
- A **notification delivery service** -- either to your phone, a dedicated security service, or both.

Just like a home security system, a GitHub App only watches for specific actions, and then responds in predetermined ways.

## Step 2: Trigger the WIP app

**WIP** is a common abbreviation to mean **work in progress**.

The app you've just installed is concerned with one action: changing the title of a pull request. Let's test it out and see what the result is by updating the title of this pull request.

### :keyboard: Activity: Test the app by editing the pull request title

1. To the right of the pull request title, click the **Edit** button
1. Add `WIP` to the beginning of the title
1. Click **Save**

<hr>
<h3 align="center">After changing the title, look for my response in this pull request</h3>


Nice work installing the apps on your repo. Now that the apps have been installed we need to tie the actions we perform on our repository with the apps. In the next step we will begin creating a connection between our repository, the actions we perform on it, and our new apps.

<hr>
<h3 align="center">Go look for the next set of instructions in your <a href="{{ url }}">first pull request</a></h3>


Your change doesn't look right. Make sure to add **WIP**, **do not merge**, or **work in progress** to the pull requests title.


Nice job! Something changed on this repo when you added the "WIP" command. Let's try to get more insight into our app before we look at those changes.

## Breaking down the WIP app components

- **Electricity**: Since this is a Probot app, the power to run comes from deployment, set up by the app creators. We don't need to worry about this until we build an app ourselves.
- **Standard behaviors**: GitHub has a list of [documented events](https://developer.github.com/webhooks/#events) that can alert an app.
- **Location**: Apps are designed to look for pre-determined events in whichever repositories they've been installed. On installation, it has to ask permission for each event type that it wants to monitor.
- **Notification service**: If the expected action occurs, a notification delivery is sent to the app as a webhook payload -- a specific set of data transmitted via GitHub's API.

GitHub Apps will then process this data in the background, responding to the repository with their expected default actions.

_Extra credit: For more information about webhooks, we recommend this [GitHub Community Forum](https://github.community/t5/GitHub-Enterprise-Best-Practices/Scalable-Continuous-Integration-CI-Patterns/ba-p/11270) article._

## Step 3:  Looking under the hood

For the next exercise, let's add our own notification service to get a better idea of what apps are receiving behind the scenes.

### :keyboard: Activity: Adding a webhook payload delivery service

1. Navigate to https://smee.io/ in another tab or window (keep this tab open for the rest of the course).
1. Click **Start a new channel**
1. Copy your unique "Webhook Proxy URL"
1. In [your webhooks settings]({{ repoUrl }}/settings/hooks), click **Add webhook**
1. Paste your unique smee.io URL in the "Payload URL" field
1. Choose `application/json` in the **Content type** dropdown
1. Leave the "Secret" field blank
1. For "Which events would you like to trigger this webhook?", select **Send me everything**
1. Click **Add webhook**
1. Return to this pull request and paste your smee.io URL as a comment

<hr>
<h3 align="center">Look for my response in a comment on this pull request</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


Oops! It looks like smee.io might not be installed successfully yet. Try the activity below one more time.

### :keyboard: Activity: Adding a webhook payload delivery service

1. Navigate to https://smee.io/ in another tab or window (keep this tab open for the rest of the course).
1. Click **Start a new channel**
1. Copy your unique "Webhook Proxy URL"
1. In [your webhooks settings]({{ repoUrl }}/settings/hooks), click **Add webhook**
1. Paste your unique smee.io URL in the "Payload URL" field
1. Leave the "Secret" field blank
1. For "Which events would you like to trigger this webhook?", select "**Send me everything**"
1. Click **Add webhook**
1. Return to this PR and paste your smee.io URL as a comment

<hr>
<h3 align="center">Look for my response in a comment on this pull request</h3>


Nice work adding smee.io!

## WIP on the surface
When you added "WIP" to the title of this pull request, something changed. Do you see that the pull request's status is "pending" with a yellow dot? This is to block merging while the title includes "WIP".

Let's breakdown how WIP works:

1. The app listens specifically for a change to a pull request title
2. When a pull request title changes, the app searches for the key-word, **"WIP"**
3. If the search finds "WIP", the app sends a request to GitHub's API to block merging in that pull request

## Step 4: Watching for webhooks

Let's use this next activity to find out what's happening behind the scenes.

### :keyboard: Activity: Remove WIP from pull request title
When you made this pull request a work in progress, I took it as a cue to add some good content to this repository! Now that we've got some real work, let's remove the WIP label so that we can merge.

1. To the right of the pull request title, click the **Edit** button
1. Remove `WIP` from the title
1. Click **Save**

<hr>
<h3 align="center">Look for my response in a comment on this pull request</h3>


Your change doesn't look right. Make sure to remove the words **WIP**, **do not merge**, or **work in progress** from the pull requests title.


## WIP below the surface

Since installation, smee.io has been running patiently in the background and keeping a ledger of each webhook event that we've performed on the repository.

When you edited the pull request title, that triggered a specific type of event.

When that event was triggered, it sent a payload of data to our app. Each type of event delivers a different payload template to the app. When customizing or creating apps, having this knowledge becomes crucial.

## Step 5: Name the event

Can you tell which type of event was sent back to the application when you changed the pull request header?

### :keyboard: Activity: Connecting actions on GitHub to events and payloads

1. Return to your unique smee.io link, accessible via your [settings]({{ repoUrl }}/settings/hooks) if you closed it
1. Identify the webhook event that was triggered. Remember, you edited the pull request title
1. Post the event exactly as it's written in smee.io in a comment on this pull request

<hr>
<h3 align="center">Look for my response in a comment on this pull request</h3>


Close! Since we edited the pull request title, the event that triggered this was `pull_request`. Notice that there are also `issue_comment` and `status` events being sent. 

In the next exercise, we'll take a look at how apps can take general event payloads and turn those into specific responses via the API.

## Step 6: Merging

After you removed WIP from the pull request title, the pull request was unblocked. Now, you're able to merge.

### :keyboard: Activity: Merge
1. Merge this pull request, and delete your branch

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


Perfect! As you might guess, pull_request is a broad event.

In the next exercise, we'll take a look at how apps can take general event payloads and turn those into specific responses via the API.

## Step 6: Merging

After you removed WIP from the pull request title, the pull request was unblocked. Now, you're able to merge.

### :keyboard: Activity: Merge
1. Merge this pull request, and delete your branch

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


Oh no! @{{ user.username }}, it looks like you have accidentally closed this pull request. To complete this activity, please use the instructions provided to close this issue in its correct sequence of steps. I'll open it again for you.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 7: Explore another app

Now that we've explored the WIP app, let's move onto what request info can do. We'll use request info to learn about how GitHub's API, webhooks, and configuration files can combine to give apps customized repository automation.

### :keyboard: Activity: Open a pull request
1. Open a pull request [using this link]({{ repoUrl }}/compare/request-info?expand=1), without changing the title or body

<hr>
<h3 align="center">I'll respond in your new pull request</a></h3>


## Request Info app
When a user opens an empty issue or pull request, the Request Info app will do exactly that -- request some more information.

It looks like you included some text in the body of the pull request, so you didn't see a response. To see what the app would have said, pay attention to the **Files changed** tab in the next activity.

## Configuration files
Per the app installation instructions, this app requires a `.github/config.yml` file for it to respond with a default message. I've already included that in this pull request for you. Some apps use these, and some don't use them at all. Some apps might use a `.json` file, while others might ask you to store configuration settings in a `.md` file.

This allows you to take default templates and extend them to your own projects.

## Step 8: Configure apps

Let's use your default template to learn about APIs. First, make a simple change to the standard message.

### :keyboard: Activity: Change the default message of your config.yml file
  1. Click on the **Files changed** tab
  1. Click the small grey pencil to edit the `config.yml` file
  1. Change the default YAML file message for request app
    - If you aren't sure where to find that, edit the reply on line 6
  1. Scroll down and commit your changes

<hr>
<h3 align="center">After you update this pull request, look for my comment below</h3>


## Request Info app
When a user opens an empty issue or pull request, the Request Info app will do exactly that -- request some more information.

You can see that Request Info has already responded to this pull request with a default message.

## Configuration files
Per the app installation instructions, this app requires a `.github/config.yml` file for it to respond with a default message. I've already included that in this pull request for you. Some apps use these, and some don't use them at all. Some apps might use a `.json` file, while others might ask you to store configuration settings in a `.md` file.

This allows you to take default templates and extend them to your own projects.

## Step 8: Configure apps

Let's use your default template to learn about APIs. First, make a simple change to the standard message.

### :keyboard: Activity: Change the default message of your config.yml file
  1. Click on the **Files changed** tab
  1. Click the small grey pencil to edit the `config.yml` file
  1. Change the default YAML file message for request app
    - If you aren't sure where to find that, edit the reply on line 6
  1. Scroll down and commit your changes

<hr>
<h3 align="center">After you update this pull request, look for my comment below</h3>


Your change wasn't expected. Make sure you are editing the `config.yml` file in this pull request. 


Nice job!

In the last pull request, we learned about webhooks and how the WIP and Request Info apps only respond to specific events. Webhooks allow you to build or set up GitHub Apps which subscribe to certain events on GitHub.  When one of those events is triggered, an HTTP POST payload response is sent to the webhook's configured URL. We saw this with our smee.io webhook.

But webhooks are only one side to this story. To see the other side, meet API endpoints. :wave:

## API endpoints

API stands for Application Programming Interface. APIs are used to share data or functionality. This is done by making an HTTP request to an API using an **endpoint**, and then receiving a reponse back.

For example, this is the endpoint to create a new pull request; `POST /repos/:owner/:repo/pulls`

When an event is triggered, the vastly more detailed GitHub API gives the bot an excessive amount of information (as a payload). The bot takes this payload, alters it slightly, and hands it back to GitHub's API, which delivers the change back to your repository.

## Step 9: Learn more about the GitHub API

### :keyboard: Activity: Discovering endpoints

1. Navigate to [this list](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps)
2. Find the endpoint that an app would use to create a label on an Issue
3. Post that endpoint as a comment

<hr>
<h3 align="center">After you comment, look for my response below</h3>


Nice try! The label creation endpoint, found [here](https://developer.github.com/v3/issues/labels/#create-a-label), looks like this: `POST /repos/:owner/:repo/labels`.

## APIs and Webhooks
APIs and Webhooks go hand in hand, but the distinction between them is important.

- Webhooks are specific "noise" interpreters. They listen for specific events to occur as their trigger.
- When an event is triggered, the vastly more detailed GitHub API gives the bot an excessive amount of information (as a payload). The bot takes this payload, alters it slightly, and hands it back to GitHub's API, which delivers the change back to your repository.
- The GitHub API can send information that makes changes to the platform, but only when prompted via webhook.
- The GitHub API _and_ GitHub's webhooks are both key components of GitHub Apps.

## Step 10: See your changes in action 

Now that you've made the change to your `config.yml` file, try to trigger that event to see the changes as a user.

### :keyboard: Activity: Test out your original changes to the config.yml
1. Go open a [blank issue]({{ repoUrl }}/issues/new) to see if the changes you made in your `config.yml` took effect!


Great work! That's the correct API endpoint.

## APIs and Webhooks
APIs and Webhooks go hand in hand, but the distinction between them is important.

- Webhooks are specific "noise" interpreters. They listen for specific events to occur as their trigger.
- When an event is triggered, the vastly more detailed GitHub API gives the bot an excessive amount of information (as a payload). The bot takes this payload, alters it slightly, and hands it back to GitHub's API, which delivers the change back to your repository.
- The GitHub API can send information that makes changes to the platform, but only when prompted via webhook.
- The GitHub API _and_ GitHub's webhooks are both key components of GitHub Apps.

## Step 10: See your changes in action

Now that you've made the change to your `config.yml` file, try to trigger that event to see the changes as a user.

### :keyboard: Activity: Test out your original changes to the config.yml
1. Go open a [blank issue]({{ repoUrl }}/issues/new) to see if the changes you made in your `config.yml` took effect!


## Well done!

Congratulations @{{ user.username }}, you've completed the **Introduction to GitHub Apps** course!

![congratulations](https://octodex.github.com/images/welcometocat.png)

## During this course you successfully:

- Learned what GitHub Apps are and how they're useful
- Understood their place in the SDLC and the greater ecosystem
- Were introduced to GitHub's APIs and their role with Apps
- Understood the basic functions of webhooks and how you can interact with them
- Installed two GitHub Probot Apps on our repository


### Probot & GitHub Apps

[Probot](https://probot.github.io/) is the basis of some of the coolest GitHub Apps out there. Most Probot Apps are already hosted, easy to install, and easy to discover. Probot is a framework to help you build GitHub Apps while using Node.js.

Want to learn more about Probot and GitHub Apps? Below are a few resources that will help you along your journey:
- [Probot Apps](https://probot.github.io/apps/)
- [Probot documentation](https://probot.github.io/docs/)
- [GitHub API documentation](https://developer.github.com/webhooks)
- [GitHub Marketplace](https://github.com/marketplace)

Here are some great examples of other Probot Apps:
- **[Stale](https://probot.github.io/apps/stale/)**: Closes issues and pull requests that have been around for a bit too long without activity
- **[Delete merged branch](https://probot.github.io/apps/delete-merged-branch/)**: After a merge, deletes the branch
- **[First timers](https://probot.github.io/apps/first-timers/)**: Creates an issue to help onboard new open source contributors to your community

### More detail
If you're curious about exactly why this worked, and what webhooks were used under the surface, click the detailed breakdown below.

<details><summary>A detailed breakdown</summary>

- As we dig into the documentation, we should see that the `issues` and `pull_request` events are the webhooks that trigger the GitHub API, since those look for ["opened" GitHub actions](https://developer.github.com/webhooks/#events).
- [This code snippet](https://github.com/behaviorbot/request-info/blob/master/index.js#L7) shows that our app is looking for two specific webhooks, `pull_request.opened` and `issues.opened`.
- Each event, when triggered, will return a specific [payload](https://developer.github.com/v3/activity/events/types/#events-api-payload-13), which basically just hands you a bunch of data that GitHub requested in the background through its API, for your specific event. Each webhook event has it's own payload example that you can reference in the documentation.
- In our case, we're looking for [title, body, and user](https://github.com/behaviorbot/request-info/blob/master/index.js#L17).
- The rest is mostly coding logic, which is beyond the scope of our course, but you can see an example of what the app does with that information [here](https://github.com/behaviorbot/request-info/blob/master/lib/PullRequestBodyChecker.js). In this case, it looks to check if the content exists, or if it's equal to the existing default templates without any changes.

</summary>

### Keep learning

Want to keep learning? Feel free to [check out our other courses]({{ host }}/courses)?


<hr>
<h3 align="center">I won't respond to this issue, go ahead and close it when finished!</h3>


