# InnerSource fundamentals

_Organizations of all sizes and in all industries are chatting about InnerSource concepts. This course walks you through some of the key concepts of InnerSource and helps you build up an internal toolkit for adopting InnerSource practices._

![](https://repository-images.githubusercontent.com/179742490/dadf4900-586c-11ea-86d8-51df4a7f783e)

**Tags**: none

---

# Welcome!

This repository will be a working website that you can publish as your own InnerSource landing page.

![Screen Shot of final product](https://user-images.githubusercontent.com/6351798/56301905-009cad00-60f6-11e9-9bf4-ed1c1907ef55.png)

As we work, we'll create a resource that others can use within your organization. This repository will be useful even after you finish this course.

This is how this course will move along:

- Every new issue or pull request will start with a challenge question
- You'll answer the challenge question _(don't worry, there are no right or wrong answers!)_
- The question will highlight the importance of each topic in InnerSource practices

Here's your first challenge question!

### Challenge question

InnerSource and open source are the same thing.

- [ ] True
- [ ] False

<hr>
<h3 align="center">I'll respond when you check one of the boxes above.</h3>

This pull request is about repository ownership and naming conventions.

### Challenge question

Does a repository exist at https://github.com/githubtraining/training-manual?

- [ ] True, there is a repository at the given URL
- [ ] False, no repository exists at the given URL

<hr>
<h3 align="center">I'll respond when you check one of the boxes above.</h3>
### Answer :crystal_ball:

InnerSource and open source are very similar concepts, but they're not the same.

**Open source** software is public and typically accepts contributions from outside of an organization.

**InnerSource** is the practice of adopting open source patterns internally within your organization. An organization that practices InnerSource may or may not also maintain open source software.

<hr>
<h3 align="center">You can find your next steps in the <a href="{{ url }}">next pull request</a>.</h3>
### Answer :crystal_ball:

A repository _does_ exist at githubtraining/training-manual, but it is private.

![gif of repository, pointing to ownership by githubtraining organization, and to a private visibility](https://user-images.githubusercontent.com/6351798/56159957-32413700-5f83-11e9-90f6-c1b64ade39c4.gif)

<details>
<summary>Why can't you see it then? Review the <b>Files Changed</b> tab and see if you can figure it out. Expand this text if you'd like an explanation.</summary>

## Understanding repository visibility

There are three types of repository visibility: **public, internal, and private**.

Our repository, `githubtraining/training-manual`, isn't public. It could be _internal_, which means only members of the organizations that an account owns will see it. Or, it could be _private_, which means only teams and individuals that have been granted access to it can see it.

This is an example of why ownership structure is important. Otherwise, it can be difficult for members of your team to find and contribute to projects. Having too many disconnected organizations with restrictive permissions isolates each organization's work.

Here are some recommendations based on some :sparkles: admirable :sparkles: use of GitHub that we've seen:

- Use the internal visibility (currently in beta) if you're working on behalf of an [enterprise account](https://help.github.com/en/articles/about-enterprise-accounts).
- Name your repositories meaningfully. Usually a simple project or application name is best.

<hr>
</details>

### :keyboard: Activity: Review this pull request

1. Read the additions in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond after you merge this pull request.</h3>

This pull request is about making repositories discoverable.

### Challenge question

What is this repository for?

![gif of a repository with no description, link, or and just a few folders: .github, .vscode, _appendix, _events, _includes, _layouts](https://user-images.githubusercontent.com/6351798/56160925-995feb00-5f85-11e9-8a91-a611936c98bd.gif)

<hr>
<h3 align="center">I'll respond when I detect your new comment on this pull request.</h3>

You can find your next steps in your [next pull request]({{ url }}).


### Answer :crystal_ball:

This repository is the source code for https://services.github.com.

Did you guess it? Probably not, because it doesn't contain many of the necessary elements to make a repository discoverable.

Some suggestions to ensure your teammates can find your repository are:

- Use a descriptive repository name
- Give your repository a description
- Provide a URL for the deployment of the app, or documentation about this project

Discover more about how to make a repository discoverable by visiting the **Files Changed** tab. It's OK if you want to do this later, any resources we cover throughout the course will be available at the end.

### :keyboard: Activity: Discoverability

1. Review the additions about discoverability in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond when you merge this pull request.</h3>
Let's now learn about issue and pull request templates.

### Challenge question

Here are four different ways you could submit a bug report. Which is the _right_ way? 

- [ ] Open an issue on GitHub
- [ ] Create a Jira issue
- [ ] Open an internal support ticket
- [ ] Direct message or email the maintainer

<hr>
<h3 align="center">I'll respond when you check one of the boxes above.</h3>
You can find your next steps in your [next pull request]({{ url }}).


### Answer :crystal_ball:

Every project _can_ have a different way to submit bug reports, so all the answers are right.

But, how could you know? With issue and pull request templates, you can take the mystery out of the equation. Templates show those across the organization the preferred way to contribute.

### :keyboard: Activity: Review templates

1. Review the examples and types of template files in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond when you merge this pull request.</h3>
This pull request covers a few common workflows that may be used within your organization.

### Challenge question

Suppose you'd like to contribute to the repository pictured below. Which branch should you use as a base for your contributions?

![a screenshot of a repository's branches, they are: a protected master branch, a protected release-v1.0 branch. The rest are unprotected: bug-fix, green-colors, config-release-drafter, add-template](https://user-images.githubusercontent.com/16547949/56039935-5d1d5800-5d03-11e9-8a26-29d36cfc7499.png)

- [ ] `main`
- [ ] `release-v1.0`
- [ ] `bug-fix`
- [ ] `green-colors`
- [ ] `config-release-drafter`

<hr>
<h3 align="center">I'll respond when you check one of the boxes above.</h3>

You can find your next steps in your [next pull request]({{ url }}).


### Answer :crystal_ball:

The real answer is that, without documentation, we don't know!

This pull request covers the basics, but here are some recommendations to help any contributor know the right way to open pull requests: 
- Use protected branches. Doing so will allow you to accept pull requests without fear of breaking production code.
- Use `CODEOWNERS` in combination with protected branches to ensure the right people review changes.
- If you haven't picked a workflow, use a common and well documented one.
- Be explicit about your deployment and release strategy.

### :keyboard: Activity: Review workflow documentation

1. Review the changes in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond when you merge this pull request.</h3>
It's time to discuss project management!

### Challenge question

Here's some open issues in this company project. You're eager to help with this project. Which issue should you work on?

![screenshot of a repository with 5 open issues, none without labels and all opened by @githubteacher. The issues are: restyle the slides, improve the readme, add a caption to an existing slide, add a new slide, activity 1: your first caption](https://user-images.githubusercontent.com/16547949/56059253-a84e5f80-5d31-11e9-8acf-6ff46729019b.png)

- [ ] Issue 6: Restyle the slides
- [ ] Issue 5: Improve the README
- [ ] Issue 4: Add a caption to an existing slide
- [ ] Issue 3: Add a new slide
- [ ] Issue 2: Activity 1: Your first caption

<hr>
<h3 align="center">I'll respond when you check one of the answers above.</h3>
You can find your next steps in your [next pull request]({{ url }}).


### Answer :crystal_ball:

Without a clear project management strategy, you might as well pick any issue.

Being explicit about your project management tool will help potential contributors.  Whether it's inside of GitHub or elsewhere, communicate so they know whether their help is immediately helpful.

### :keyboard: Activity: Review project management strategies

1. Review the changes in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond when you merge this pull request.</h3>
Once you've implemented InnerSource strategies, how do you know it's working? 

### Challenge question

What might be some ways to measure the success of InnerSource strategies?

<hr>
<h3 align="center">I'll respond when you comment on this pull request.</h3>

You can find your next steps in your [next pull request]({{ url }}).


### Answer :crystal_ball:

Those are great ideas!

Here are some other ideas for measuring how well you're doing:

- Time to market
- Pull requests to fix bugs
- Pull requests to add suggested features
- Number of collaborators to a project outside of maintaining team

### :keyboard: Activity: Review measurement techniques

1. Review the changes in the `Files changed` tab
2. Approve this pull request (if needed)
3. Merge this pull request
4. Delete the branch

<hr>
<h3 align="center">I'll respond when you merge this pull request.</h3>
### Almost done!

It's time to publish the InnerSource toolkit you've been working on.

To publish:

1. Go to the **Settings** tab for this repository
1. Scroll down to the section titled _GitHub Pages_
1. Select **main branch** in the Source drop down

That's all! GitHub Pages will then deploy your site and report its status back to me.

<hr>
<h3 align="center">I'll respond when I detect that GitHub Pages has finished deploying your site.</h3>

You can find your next steps in your [next pull request]({{ url }}).


# :tada: Congratulations

You finished this course. You can see a deployed version of our work together at [your new GitHub Pages site]({{ deploymentURL }}). Feel free to share this link directly with others, or you can save the resources in one of the following ways.

### Saving course resources

1. If you'd like to just save the contents to your machine, you can:
   - Use this shortcut link to [download the files]({{ downloadURL }})
   - Download the files by clicking on the **Code** tab, clicking on **Clone or download** and clicking **Download ZIP**
   - [Clone the repository](https://help.github.com/en/articles/cloning-a-repository) to your machine
1. If you'd like to transfer the repository to an organization on GitHub:
   - If your organization is on GitHub.com, [fork it]({{ forkURL }})
   - If your organization is on GitHub Enterprise Server, [transfer the repository](https://help.github.com/enterprise/2.2/admin/articles/moving-a-repository-from-github-com-to-github-enterprise)

I won't track any further events in this repository.

Your next steps are in the [Innersource learning path](https://lab.github.com/githubtraining/innersource:-theory-to-practice).

