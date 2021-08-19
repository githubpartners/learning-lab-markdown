# Write a Learning Lab course

_Your Learning Lab course will help developers around the world discover new technologies, learn new skills and build better software. You have knowledge to share and this course will help you take your first steps, today._

![](https://repository-images.githubusercontent.com/167021479/707ad880-586d-11ea-973f-688c4e8ab3e0)

**Tags**: Courses, Teaching, YAML, Learning Lab, Learning

---

# Welcome!

This course will walk you through creating your own Learning Lab course. If you've ever wanted to create a learning resource using Learning Lab, then you're in the right place! Together, we'll go through:

- Picking a topic
- Breaking the topic down into small steps
- Designing a learner centered course flow
- Choosing a project repository
- Mapping the small steps into GitHub events
- Writing responses
- Importing and creating your course

### Prerequisites

- **GitHub knowledge**: For this course, you'll need to know how to use GitHub to work with text files. If you need a refresher on the GitHub flow, check out [the Introduction to GitHub course]({{ host}}/courses/introduction-to-github). If you need a refresher on Markdown, check out [the Communicating using Markdown course]({{ host}}/courses/communicating-using-markdown).
- **Webhooks & the GitHub API**: You'll also need a general understanding of webhooks and the GitHub API.  Try [the Getting started with GitHub Apps course]({{ host}}/courses/getting-started-with-github-apps).

### Choosing a topic

The first thing we're going to do is talk about and choose a topic.

You may already have something in mind for your first course. In this course, you can actually start writing that idea and making it reality! If you're just curious about how to write a course or don't have an idea (yet), try  Markdown as a topic.

Here are some things to think about as you select your topic:

#### Things that work with GitHub

Does it happen on GitHub anyway? Learning Lab is best when it's working with something that it can interact with naturally. Things like painting would be difficult! Commits or interactions with GitHub are the perfect fit.

#### Scope and size

What's the scope or size? For example, JavaScript makes a lot of sense to teach on Learning Lab because code happens on GitHub. But, it's a really big topic. It may be a good idea to segment your topic into smaller parts. Remember, users can take a series of Labs. If you aren't sure what the right size is, that's OK - that should become more clear as we go on.

## Step 1: Choose a topic for your course

Whether you choose your own topic or one of ours, you'll stick with the same one throughout this course. Don't worry, you don't have to publish it right away - we'll show you how to keep your course hidden as a _Draft_ until you are ready to show it to the world.

### :keyboard: Activity: Tell us what you'd like to teach

1. Please comment below with the subject that you'd like to teach in your Learning Lab course. If you don't have an idea yet, you can use Markdown as your topic.

<hr>
<h3 align="center">I'll respond below when I detect a comment in this pull request.</h3>

Great! When you commented, you triggered something called a webhook that I heard, and now I'm here! You may be wondering if I checked to see if  what you wrote was a _real_ topic. We'll talk about that kind of logic later - both how to use it, and when to use it. (Spoiler - for this step, I didn't check! I am pretty smart, but not smart enough to tell if you typed a good idea or not.)

### Breaking goals into smaller steps

Now that you know what you want to teach, the next thing to do is break it down into steps. This can be tricky - put on a teacher hat and an engineer hat at the same time.

To break down the thing you want to teach, think about the observable behaviors. They should show that the user is doing it right. If you were watching this person, how would you know they have learned the thing? Some examples are:

- Close an issue
- Write a functional SQL query
- Merge a pull request
- Change code so a particular test passes

### How many goals?

The right number of "goals" may be different for different courses. But, our courses usually have between 7 and 20. For example, in the Communicating Using Markdown course, the steps (or goals) are:

- Create a task list
- Turn on GitHub Pages
- Add headers
- Merge your headers
- Add an image
- Add a profile link
- Merge your image and profile link
- Add a list
- Use emphasis
- Merge lists and emphasis

### What NOT to do

It is _not_ a good idea to have huge or ambiguous steps.

Put yourself in the shoes of a beginner. If you're asked to do something too big that you don't understand, it can be frustrating. Asking the learner to do something poorly defined creates confusion and misunderstandings. This can make the learner give up!

> Imagine you're taking a course on SQL as a beginner. If one of the steps is to write a full query, you might not know where to start. You may try your best, but still be confused about what isn't working. Or, if you can get it right from copying and pasting, you wouldn't understand it well enough to do it on your own. Stick to smaller steps, and include prerequisites at the beginning of the course.

## Step 2: Break your course into smaller steps

In the file in this pull request, write the steps as observable behaviors. It's OK if there are a lot. It's better to break it down into small steps. Then, you may realize the scope of the course is wrong. That is better than having huge or unmanageable steps.

> What's `#` in YAML? Any lines starting with `#` in the `config.yml` file are _comments_. We will use these for planning and documentation.

### :keyboard: Activity: Break down what you'd like to teach into smaller learning objectives

1. [Edit the `config.yml` document]({{ url }}). Break down the larger goal into smaller steps and add them to the commented descriptions on lines 26, 35, 40, 47, and 54.
2. In each step, notice the fields for `title` and `description`. These will be shown to the learner on Learning Lab. Write the titles and descriptions of each of your steps.
    - _You only need to worry about the title and description now. We'll fill in the rest later!_
3. Commit your changes.
4. Navigate _back_ to this pull request.

<hr>
<h3 align="center">I'll respond in this pull request when I detect a commit on this branch.</h3>


Nice work. As a robot, some things are really hard for me to check. This is one of them!

If you'd like to get some feedback on your steps before continuing with the course, reach out in the [GitHub Community]({{ communityBoard }}). Once you're ready, merge this pull request to move on to the next step.

## Step 3: Merge your learning objectives

Next, we'll merge this pull request. You can go ahead and take your time breaking these steps down. Use as many commits as you want.

### :keyboard: Activity: Merge the pull request breaking down your course topic into smaller learning objectives

1. Make any other changes or tweaks to the steps of your course by [editing the config]({{ url }}). Take your time!
1. Once you're ready, merge this pull request.

<hr>
<h3 align="center">I'll respond below when this pull request is merged.</h3>


Nice job merging! You can find your next steps in [your next pull request]({{ repoUrl }}/pull/2).

# Choosing a Template

One of the things that makes Learning Lab special is the ability to learn a skill _in context_. As you think about what you want to teach, it's critical to think about the context that you want to teach your topic in. 

Most courses make use of a [:book: template repository](https://lab.github.com/docs/course-ownership-and-repositories#the-repositories). Learning Lab clones the template repository from your account and then uses it to create a new repository on the learners account. Template repositories contain starter code and resources to help learners find their way.

> The template repository you designate will need to be owned by _the same account as this course repository_.

When creating or choosing a template repository for your course, consider two main points.

### Creating relevant content

First, how will this content help teach the concept? For example, if a course is teaching HTML, the success of the finished product should feature HTML.

If you're teaching JavaScript, an app makes sense. If you're teaching Markdown, maybe you don't need a project at all! With CSS, you could use a project relating to design.

Think of a project that is "real" and practical with the skill you're teaching. Don't introduce too many additional, and possibly confusing, concepts.

### Finished product

Second, is the finished product useful? At the end of the course, the finished repository should serve a purpose aside from the lessons. A working game, a portfolio or resume, or a collection of template documents are a few examples.

## Step 4: Reference the template

Select a template repository - or use ours - based on the points listed above.

### :keyboard: Activity: Edit the config file to reference your chosen template repository

1. Choose a repository to be a template.
    - It's important that {{ owner }}, the owner of _this_ repository, is also the owner of the template repository.
    - The template repository doesn't have to be complete at this point, but it should have at least one commit. If you don't know where to begin, create a new repository with a README on your account.
2. [Edit the `config.yml` file in this branch]({{ url }}) to replace the commented template `name` and `repo`.
    - **Important!** To ensure you can test this course, the template `name:` **must be different** than the name of this repository. The template name is what Learning Lab will name the repository when it is created on the learner's account. If the learner already has a repository with that name, it will fail --  so, make it unique.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


Uh oh! I see that this branch now has a merge conflict. A **Merge conflict** occurs when changes are made to the same part of the same file on two different branches. You usually find out about conflicts in a pull request. 

If you've solved merge conflicts before, you know what to do: go ahead and resolve it now.

If this is your first merge conflict, that's OK too. Here are instructions for resolving a merge conflict:

1. At the bottom of the page in the "This branch has conflicts that must be resolved" section of the Pull Request, click the **Resolve conflicts** button.
2. Look for the highlighted sections that begins with  `<<<<<<<  template` and ends with `>>>>>>> main`. These markers are added by Git to show you the content that is in conflict.
3. Choose the version that you'd like to keep - do you want to keep the content between `<<<<<<<  template` and `======`, or `======` and `>>>>>>> main`? 
4. Delete the content that you do not want to keep.
5. Next, remove the merge conflict markers by deleting the following lines:

       <<<<<<< template
       =======
        >>>>>>> main

6. With the merge conflict markers removed, click **Mark as resolved**.
7. Finally, click **Commit merge**.

Nice template. I'm going to merge this for you. You can find your next steps in [your next pull request]({{ repoUrl }}/pull/3).

# Events

Alright - you've chosen a project, and you've laid out the steps for your learners. Next, we're going to get into something new with Learning Lab: events! (You can learn more about events in [the documentation](https://lab.github.com/docs/events).)

An `event` is the webhook that is triggered when the learner does something in their repository. Every webhook for the learner's repository is sent to Learning Lab. These events are "read" by Learning Lab. If it is the event the bot has been waiting for, the bot will do what you command. Otherwise, it will ignore the event.  [You can see all of the events in GitHub's documentation](https://developer.github.com/v3/activity/events/types/). Some of the most common examples are `pull_request.synchronize` or `issue.comment`. 

### Map behaviors to events

How can each step translate to a GitHub event? Having too many of the same event may be a bad signal. Make sure that events represent things that you're trying to teach.

For example, you may want to show a lot of information to the learner, and then have them close the issue to signify they've read it. That may make sense for one or two steps in your course. But, imagine going through a whole course like that. It isn't actually checking if the learner read - it's checking if the learner knows how to close issues!

### Choose the right events

Try to choose events that correspond directly to what you want the learner to do. If you're trying to teach the learner to import a `npm` module into a `package.json` file, that commit should be the event.

| Behavior | Events |
| ------------- | ------------- |
| What can I observe that confirms the user demonstrated the skill or knowledge? | What event triggers are available through GitHub? |
| Write a function (commit) | [`pull_request.synchronize`](https://developer.github.com/v3/activity/events/types/#pullrequestevent) |
| Solve a merge conflict (commit) | [`push`](https://developer.github.com/v3/activity/events/types/#pushevent) |
| Open a pull request | [`pull_request`](https://developer.github.com/v3/activity/events/types/#pullrequestevent) |
| Implement a test | [`status`](https://developer.github.com/v3/activity/events/types/#statusevent) |
| Comment on an issue | [`issue_commented.created`](https://developer.github.com/v3/activity/events/types/#issuecommentevent) |

## Step 5: Map learning objectives to events

Next, your job is to map your learning objectives to events.

Remember the steps you wrote earlier? Let's find the corresponding events. You'll see some are already done for the examples, but you can focus on your own.

### :keyboard: Activity: Map the learning objectives you wrote to specific events from GitHub webhooks

1. Take a look through [GitHub's documentation for event triggers](https://developer.github.com/v3/activity/events/types/).
2. [Edit the `config.yml` file]({{ url }}) on line 29 and make note of the event trigger that matches your first objective.

> Not sure where to start? Use some of the events in the table above to get started!

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


# Outline the remaining steps

It is very important to choose events that correlate as directly as possible to what you're asking the learner to do. If you're not using gates* or other tests, the event _should_ be what you're asking the learner to do.

One way to do this is to structure events using dot notation. For example, you could use an event called `issue_comment`. This means Learning Lab would be looking for any event related to an issue_comment, like created, edited, or deleted. But, you could also be more specific in the event description with dot notation. If you use `issue_comment.created`, Learning Lab will only move on if the event is a newly created issue comment.

>_*Gates are an action within Learning Lab that allow you to use logic and verify the learner's behavior. We'll learn more about this later!

## Step 6: Create an outline of learning objectives as events

Go ahead and put in the events for the rest of the learning objectives. You can use this time to re-order them in a way that makes sense to you for a flow of a course.

### :keyboard: Activity: Using the same strategy of mapping learning objectives to events, create an outline of events for your course

1. [Edit the `config.yml` file]({{ url }}) on lines 36, 43, 50, and 57.
2. Map the rest of your learning objectives to [GitHub Events](https://developer.github.com/v3/activity/events/types/).

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


# 3 phases of a step

Have you ever thought about what teaching _is_? What are the behaviors that a good teacher has to make it easy to learn? Maybe you have - and maybe you haven't.

Let's break down teaching into three steps: 
- telling the learner what to do
- watching them to see if they do it or not
- giving them specific feedback about what they did or didn't do right. 

Repeat! That may sound simple, but it's the basis of fast feedback that is _learning_. :rainbow:

Just like we broke down your teaching goal into smaller steps, let's break down _teaching_ in the same way. Let's focus on the smallest possible unit of behavior we can identify.

For starters, let's choose writing unordered lists in Markdown. That's what we want the user to know how to do. Let's apply those three phases.

![Visual of three phases in circle](https://user-images.githubusercontent.com/9906718/72787595-8672f900-3c30-11ea-8417-4c1e4a8d96f3.png)

### Phase 1: Tell the learner what to do

What does the learner need to be able to exhibit the behavior that we want? Well, they'd need to know about Markdown, and it'd be nice if they had a computer with a keyboard, and a place to type the text. Let's assume those contextual things are taken care of. The main information that a learner would need would be, what is an unordered list? How is that written in Markdown? Then, we'd ask the user to do that.

### Phase 2: The learner does it and we observe

There's an important part of this step. It's not just the learner doing it, but it's how we are going to watch and observe if they did it correctly or not. In Learning Lab, this is usually an issue comment or a commit changing a file. We give them the space to try it out, and we watch via webhooks. We use gates to "check" if they did what we asked them to.

### Phase 3: Give the learner feedback

Based on the observation in the second phase, we can give them the feedback they need. We either confirm that they learned it, or let them know that they _didn't_ do it right, and they should try again. It's important to give the most specific feedback as possible. This is like unit tests - if they're vague, they're not helpful. The more personalized and exact the feedback can be, the better the learner will understand what they did right and/or wrong.

### How learning happens

This is how _all_ learning happens, through feedback, whether it's from a teacher in a classroom, a bot like me, or a stovetop that gives you the feedback "if you touch me, it HURTS!". Faster and more exact feedback is always a better teacher.

This is the process that we are going to use for each of the learning objectives you've written.

## Step 7: Choose the example that shows the three phases

Before we start writing some for this course, let's practice identifying this three phase process. There are four examples below - some of which are examples of this three phase process, and some of which _aren't_. For each example, there is a label. For each example that _is_ a good example of the three phases, add the corresponding label to this pull request. Once all of them match what I expect, I'll give you the next instructions.

If you get stuck, add the issue label "help" and I'll give you some more detail. 

### :keyboard: Activity: Apply a label that corresponds to the example showing the three phases of a step

1. Read the following examples, and their corresponding "labels". (Click the triangle next to each title to drop down the full text.)
2. When an example correctly includes all three phases, add the corresponding label to this issue. (You can include multiple labels!)
    - _Not sure how to add a label? On the right side of this issue, you'll see a section titled **Labels**. Click the word **Labels** to bring up a menu. Click a label title to toggle adding or removing it from an issue or pull request._
    - If you get stuck, apply the `help` label.

<details>
 <summary>1: Committing a header</summary>
 <br>
 
 - **Phase 1**: We open a pull request for the learner that is adding a blank markdown file. We tell them what headers are, and show them examples of how to write them using markdown syntax. We ask them to commit a change to the file in the pull request adding a header.
 - **Phase 2**: The learner commits and changes the file.
 - **Phase 3**: We accept the learner's commit and move on to the next step.

</details>

#### 



<details>
 <summary>2: Closing an issue</summary>
 <br>
 
 - **Phase 1**: We comment in an existing issue and ask the user to close that issue. We explain what closing an issue means, that issues can be reopened, and give examples of when it's appropriate to close an issue.
 - **Phase 2**: We use the webhook event specifically for closing issues. The learner closes an issue. We use a gate to validate that the correct issue is closed. Using this gate, we determine that the learner closed the wrong issue.
 - **Phase 3**: We reopen the issue that was closed but should have stayed open, and we comment telling the user that they closed the wrong issue. We link to the correct issue.

</details>

<details>
 <summary>3: Fixing a bug
</summary>
 <br>

 - **Phase 1**: We open a pull request for the learner in a repository with tests configured. The learner has already demonstrated the skills needed to understand the tests and the codebase. The pull request introduces a bug and has a failing test. We ask the learner to change the files in that pull request to fix the bug and make the tests pass.
 - **Phase 2**: The learner commits changes. We check using gates that the tests are passing, and that the tests haven't been removed. We see that the tests are passing.
 - **Phase 3**: We merge the pull request for the user and create the next task. We comment in the pull request congratulating them, and link them to their next instructions.

</details>

<details>
 <summary>4: Writing a function</summary>
 <br>

 - **Phase 1**: We are teaching about writing functions, and we give the learner several examples in an issue comment. We ask the learner to write a function.
 - **Phase 2**: We assume the learner will create a branch, make a commit, and open a pull request. Then, we will use a gate to check their function. Because we ask the learner to do this in an issue, the learner is unsure of where to do this. They write a function as a comment in the issue.
 - **Phase 3**: Since we are listening for a commit, and the gate is set to check after that event, there is no feedback triggered when the user comments on the issue.

</details>
<hr>
<h3 align="center">I'll respond below after you've added the correct labels.</h3>


Can't figure out which are the right labels? No worries! Here are the reasons and the answers:

#### Example 1: Committing a header 🛑

- **Why?**: This is not a proper example because it's missing an important part of step 2. While the user does change the file, we do not check that they do what we asked. They could have committed a list instead of a header! In phase 3, we move on to the next step, which is feedback to the learner that they did what we asked them. Now, the learner just learned that a list is a header. Do not apply this label.

#### Example 2: Closing an issue ✅

- **Why?**: In this example, we give the learner the instructions and the context they need to do what we want _and_ understand why. We also see that the learner doesn't follow the instructions that we gave. That's OK because we notice it, and redirect them to try again. We reinforce the initial instructions, but with different and/or more specific terms to give the learner a greater chance of success, and ultimately, of learning what we want them to learn. Apply this label.

#### Example 3: Fixing a bug ✅

- **Why?**: This includes the directions for the learner, specific tests to make sure they've accomplished the goal, and direct feedback about their success. Note that there isn't a lot of context around the instructions, because the learner has gained that context in previous steps. Apply this label.
  
#### Example 4: Writing a function 🛑

- **Why?**: The instructions for this step aren't clear enough for the learner to be successful. The balance between assuming context and over-instructing was too far into assumption. The learner could become frustrated because they are following the instructions to the best of their ability, yet the course gives them no feedback. Do not apply this label.


# 3 Phases: Why?

If you'd like to know the reasons each option was or wasn't a good example, click the drop-down below.

<details>
  <summary>Explanation of 3 phases</summary>
  <br>
  
  #### Example 1: Committing a header

- **Why?**: This is not a proper example because it's missing an important part of step 2. While the user does change the file, we do not check that they do what we asked. They could have committed a list instead of a header! In phase 3, we move on to the next step, which is feedback to the learner that they did what we asked them. Now, the learner just learned that a list is a header.

#### Example 2: Closing an issue

- **Why?**: In this example, we give the learner the instructions and the context they need to do what we want _and_ understand why. We also see that the learner doesn't follow the instructions that we gave. That's OK because we notice it, and redirect them to try again. We reinforce the initial instructions, but with different and/or more specific terms to give the learner a greater chance of success, and ultimately, of learning what we want them to learn.

#### Example 3: Fixing a bug

- **Why?**: This includes the directions for the learner, specific tests to make sure they've accomplished the goal, and direct feedback about their success. Note that there isn't a lot of context around the instructions, because the learner has gained that context in previous steps.
  
#### Example 4: Writing a function

- **Why?**: The instructions for this step aren't clear enough for the learner to be successful. The balance between assuming context and over-instructing was too far into assumption. The learner could become frustrated because they are following the instructions to the best of their ability, yet the course gives them no feedback.


</details>


# Writing responses

Let's do one together before we start going into the others. If the first learning objective is based on Issues - specifically, how to open one. What do we need to do in phase one to prompt the user to demonstrate that behavior in phase two?

Now is a good time to learn about _responses_. The `response` directory is where you store the files that will be what the bot says.

## Step 8: Create the first response

To practice, I've got a file ready for you in this pull request. Go ahead and write your instructions (phase 1 for this objective) in the file in this pull request and commit.

You may notice the file name and structure. They represent the best practices we've found to make things clear for our users.

### :keyboard: Activity: Write the first response, phase 1, for the first step of your course

1. [Edit the `01_first-response.md` file]({{ url }}) and write the instructions for your first step.
    - Remember, this is _your_ course. You choose what to teach, what the steps are, and what to say!

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


I noticed that though the correct file is edited, there isn't a lot of substance. It's okay to come back and edit these responses later to make them longer or more complete. But, in the meantime, you should write enough so that you can go through the course as a learner and remember what is expected for each step.

Try again - [Edit the `01_first-response.md` file with at least one sentence of instruction for yourself]({{ url }}).

# Learning Lab Actions

Awesome! You're probably thinking - how is Learning Lab validating that I did the thing just now!? And you have a point. With text, it's tricky - so I checked to make sure you wrote more than 5 words, but I'm not checking to see if you wrote anything that makes sense. For this type of step, it would be difficult to provide great feedback on what you wrote.

Every comment that I make is an example of a real, human-proofed answer. Compare your answer and notice - is yours similar? Is it very different? What would you change?

### Action `type: respond`

Now that you've written a response, we need to figure out _how_ to say it to with Learning Lab. Now is the time to learn about Learning Lab's _actions_. Actions are reusable modules that each Learning Lab course has access to. They are each designed to do very specific things, and nothing more. This is to optimize for reusability and simplicity.

There are all kinds of actions. Learning Lab can do different things like responding, opening pull requests, merging, and more. You can see all of the available actions in [Learning Lab's documentation](https://lab.github.com/docs/actions/).

## Step 9: Write the first Learning Lab action

You've got the response file, and now it's time to edit the `config` file with the proper action: respond. Because this is the first instruction, it belongs in the "before" step. That way, the learner knows what we are waiting for them to do when they first enter the course. It will look like this:

```
    before:
    - type: respond
      with: 01_first-response.md
```

### :keyboard: Activity: Write the first Learning Lab action for a response into your course's configuration file

1. [Edit the `config.yml` file in this pull request]({{ url }}) on lines 17 and 18 to add a respond type, referencing the file that you created for the response.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


I noticed that your commit to the `config.yml` file doesn't have what I am expecting.

I'm using a `gate` and using regular expressions to check that you have something committed that looks like:

```
type: respond
with: 01_first-response.md
```

Try again by [committing to the `config.yml` file on this branch]({{ url }}), and make sure your changes match my example above.

# Phase 2: Observation and Validation (with Gates)

Phase 2 is where we watch to see if the learner did what we asked them to do. With Learning Lab, we are watching for the _event_ to be sent by GitHub and then checking to see if it was the event we were expecting.

The events that are sent to Learning Lab alert Learning Lab that something has happened. But, to create a good learning experience, we should validate that the learner did the right thing. For example, if we ask a learner to commit a function to a file, we'll get an event when they've committed to a branch. But we would receive the same trigger, but they may not have committed to the correct file! In these cases, use a _gate action_ for validation. Gates can:

- Validate that a closed pull request was merged
- Check the contents of a comment or commit with regex
- Ensure an opened issue contains body text

A [:book: `gate`](https://lab.github.com/docs/actions/gate/) is a Learning Lab action. Gates are conditionals, and they behave much like a conditional in Javascript.

You can also get creative here - maybe you want to include tests in the template repository. When the tests are run, the status could be the event that you check.

## Step 10: Write a gate

As an example of how gates work, let's validate the learner's pull request title. This information is accessible to us [:book: from the payload](https://lab.github.com/docs/events#accessing-event-payloads) that is sent with the `pull_request.opened` event. 

You can see an example of all the information sent [in the GitHub Developer docs](https://developer.github.com/v3/activity/events/types/#webhook-payload-example-26).

We'll add the [:book: `left:` option](https://lab.github.com/docs/actions/gate/#options) to the gate, and compare its value to the expected pull request's title.

A completed example of this would look as follows, with comments on the right starting with a hash `#`:
```yaml
actions:
- type: gate                            # using the gate action
  left: '%payload.pull_request.title%'  # get the title from the pull request object inside of the payload
  operator: ===                         # check for strict equality, see more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity
  right: Add name to README             # this is the expected value
```

### :keyboard: Activity: Write a gate to check the user's first step

1. [Edit the `config.yml` file]({{ url }}) on this branch around line 32.
2. Add a `type: gate` action on line 32.
3. Add a `left:` option to the gate.
4. Set the gate's `left:` option. This could be to the pull request's title (`'%payload.pull_request.title%'`) or some other information from the payload based on the event trigger.
5. Set the gate's `operator:`, usually to `===`.
6. Set the gate's `right:` to the title we expect, like the name of the pull request, or regex for what is expected from the commit contents, or any other amount which makes sense in your case.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>

> Aren't sure what event and gate to use? No worries - you can borrow these:
> ```
> - title: Assign yourself
>   description: Assign the first issue to yourself.
>   event: issues.assigned
>   link: '{{ repoUrl }}/issues/1'
>   actions:
>   - type: gate
>     left: '%payload.pull_request.title%'
>     operator: ===
>     right: Add name to README
> ```


I noticed that your commit to the `config.yml` file doesn't have what I am expecting.

I'm using a `gate` and using regular expressions to check your commit. I'm literally checking for something like:

```
type: gate
left:
operator:
right:
```

But, each learner may have a different exact version. Yours may look like:

```
- type: gate
  left: '%payload.pull_request.title%'
  operator: ===
  right: "Creating the config file"
```

Try again by [committing to the `config.yml` file on this branch]({{ url }}), and make sure your changes match my example above. (Make sure your indentations are correct, too!)

# Phase 3: Feedback

Nice, now you've got phases one and two covered. It's time for phase 3.

What you do in Phase 3 will be based on what you saw in phase 2. Let's keep it simple for now and have only two possibilities: either the user did it right, or they didn't. This structure is pretty basic, but if you use your imagination, you can probably envision more interesting possibilities.

## Step 11: Write feedback for the learner

I just added two response files in this pull request - one for the "happy path" where the user did it right, and one to redirect them and give them help to get back on track. Fill in those response files now.

### :keyboard: Activity: Write feedback into the feedback response for the learner to let them know they've done it right

1. Edit the feedback files in this pull request with feedback about the success of their behavior.
   1. The first file is called [`responses/01_nice-work.md`]({{ niceUrl }})
   2. The second file is called [`responses/01_try-again.md`]({{ tryagainUrl }})
2. Because you are editing multiple files, it will be difficult for me to see that you have modified them both. To let me  know you're done, comment in this pull request.

<hr>
<h3 align="center">I'll respond below after you comment on this pull request.</h3>


I noticed that though the correct file is edited, there isn't a lot of substance. It's okay to come back and edit these responses later to make them longer or more complete. But, in the meantime, you should write enough so that you can go through the course as a learner and remember what is expected for each step.

Try again - [Edit the `01_nice-work.md` file with at least one sentence of instruction for yourself]({{ url }}), then comment in this pull request.

<hr>
<h3 align="center">I'll respond below after you comment on this pull request.</h3>


I noticed that though the correct file is edited, there isn't a lot of substance. It's okay to come back and edit these responses later to make them longer or more complete. But, in the meantime, you should write enough so that you can go through the course as a learner and remember what is expected for each step.

Try again - [Edit the `01_try-again.md` file with at least one sentence of instruction for yourself]({{ url }}), then comment in this pull request.

<hr>
<h3 align="center">I'll respond below after you comment on this pull request.</h3>


# Config logic

To put this response in the config, it will be very similar to phase 1. But, _where_ the action goes is different. We need to be careful of the gate here. If the gate fails, we can have special logic for the "unhappy path" response. The "happy path" response will be a regular response triggered if the gate is successful, like:

```
- type: gate
    left: '%payload.pull_request.base.ref%'
    operator: ===
    right: main
    else:
    - type: respond
      with: 01_try-again.md
- type: respond
  with: 01_nice-work.md
```

## Step 12: Write the config logic

Go ahead and edit the config to add the unhappy path _and_ the happy path response.

_Are you noticing that we're asking a bit more of you now? Since you've already added a response before, we're now asking you to do two at a time. This is on purpose - it's important to balance how much you're asking learners to do. It's bad to bore them, but it's also really bad to overwhelm them. Every learner is different, so try to pick a "middle of the road" solution. This is ours. What do you think?_

### :keyboard: Activity: Write the config logic for both responses to the learner in their first step

1. [Edit the config file]({{ url }}) in this pull request to include the logic for both responses around the gate.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


I noticed that your commit to the `config.yml` file doesn't have what I am expecting.

I'm using a `gate` and using regular expressions to check that you have something committed that looks like:

```
type: respond
with: 01_nice-work.md
```

Try again by [committing to the `config.yml` file on this branch]({{ url }}), and make sure your changes match my example above.

# Course metadata
  
Awesome work so far! Now, you've officially got your first step written. It's a good time to try this course out. Before we do, we need to pay some attention to the metadata in the config file, so that Learning Lab knows what to do with it.
  
The parts that we need now are the title, description, and the name of the learner's repository. Learning Lab also needs more detail around each step. The information is there in detail in comments in the config file.

Here are a few examples:

- [Introduction to GitHub](https://github.com/githubtraining/introduction-to-github/blob/main/config.yml)
```
title: Introduction to GitHub
description: If you are looking for a quick and fun introduction to GitHub, you've found it. This class will get you started using GitHub in less than an hour.
template:
  name: github-slideshow
  repo: caption-this-template
  description: 'A robot powered training repository :robot:'
```
- [Communicating Using Markdown](https://github.com/githubtraining/communicating-using-markdown/blob/main/config.yml)
```
title: "Communicating using Markdown"
description: "This course will walk you through everything you need to start organizing ideas and collaborating using Markdown, a lightweight language for text formatting."
template:
  name: "markdown-portfolio"
  repo: "communicating-using-md-template"
```
- [This course - Writing a Learning Lab course](https://github.com/githubtraining/write-a-ll-course/blob/main/config.yml)
```
title: Write a Learning Lab course
description: Use Learning Lab's strengths for fast feedback to author your own course.
template:
  name: lab-starter
  repo: write-a-ll-course-template
```

## Step 13: Create course metadata

### :keyboard: Activity: Add the course metadata like title and description to the configuration file

1. [Edit the config file]({{ url }}) (lines 1, 2, and 3) so the comments are gone, and your information is there.

<hr>
<h3 align="center">I'll respond below when I detect a commit on this branch.</h3>


I noticed that your commit to the `config.yml` file doesn't have what I am expecting.

I'm using a `gate` and using regular expressions to check that you have something committed that looks like:

```
title: Write a Learning Lab course
tagline: Learn how to author your own Learning Lab course.
description: Use Learning Lab's strengths for fast feedback to author your own course.
template:
  name: lab-starter
  repo: write-a-ll-course-template-2.0
```

Try again by [committing to the `config.yml` file on this branch]({{ url }}), and make sure your changes match my example above.

# Import your course

Woohoo! You could keep going - but now your course can actually be _tested_. Let's talk about that.

### Importing your course into Learning Lab

When you're ready to start testing your course, you'll need to import it into Learning Lab. Here are a few things you'll need to know.

### Create and test draft courses

When you create a new course on Learning Lab, the course will be [a draft](https://lab.github.com/docs/testing).  While in draft, you can test your course by going to the course dashboard, and clicking on **View course page** next to the course title.

You can continue to [work on your course](https://lab.github.com/docs/testing#test-your-course) while it is in draft. It will only be visible to you and other administrators of your repository.

## Step 14: Import the course

### :keyboard: Activity: Import this repository as a course on GitHub Learning Lab

1. Navigate to `{{ host }}/{{ owner }}/new`.
2. In the Repository name field, type in **{{ repo }}**.
3. Click **Create course**.
4. Take the draft course, which should be available at {{ host }}/{{ owner }}/{{ repo }}.
5. Once you are done, comment in this issue.

> If you need help troubleshooting, scroll down for some tips!

<hr>
<h3 align="center">I'll respond below when I detect a comment in this issue.</h3>


Nice job! I'll merge this pull request for you. Your next steps can be found in [your next issue]({{ repoUrl }}/issues/4).


# Troubleshooting: Importing a course

If you're having trouble importing your course, here are a few tips for troubleshooting.

## I can't find the place to import

There are a few different ways to create a course:

- Through the Learning Lab course builder
- Manually

Since we used the manual method in this course, follow the instructions in the ["Create the course on Learning Lab (manual option"](https://lab.github.com/docs/course-ownership-and-repositories#manual-repository-setup) paragraph.

This should lead you to a URL that looks like `https://lab.github.com/:owner/new`. _(Ex: https://lab.github.com/githubtraining/new)_

## My import fails and I don't know why

### Validate the YAML

Try to validate the YAML in the `config.yml` using a tool like [yamllint](http://www.yamllint.com/).

### Check response files

Check the responses referenced in the the `config.yml` file. Do they all exist? Are they in a directory called `responses`? Are there any typos?

### Get more detailed error messages

More detailed error messages are available for draft courses made from pull requests. To do this, the course must first be published. Create another branch with the most up-to-date version of your course. Edit the course version on the `main` branch to reduce the possibility for errors. (You can do this by matching [the boilerplate repository](https://github.com/githubtraining/write-a-ll-course-template/blob/main/config.yml).)

### Actions for every event

If you have events or steps listed in your `config.yml`, they need to have at least one action. Make sure that every step has correlating actions.

## Still stuck

If you're still stuck, visit us in the [Community Forum]({{ communityBoard }}) and we'll be happy to help!



# Try out your course

Go ahead and take the course! You'll be able to register for the course, and take it. What do you think?

## Step 15: Close the issue

### :keyboard: Activity: To signal that you've tested your course, close this issue

1. Once you're able to go through the course, close this issue.

<hr>
<h3 align="center">I'll respond below when I detect this issue is closed.</h3>

# Congratulations!

So, you've done it - you've started your own Learning Lab course. I will leave you here with the last set of instructions:

### Complete this course by following the three phase approach

- Phase 1 - tell the learner what to do.
- Phase 2 - watch if they do it.
- Phase 3 - tell them if they did it or not.

Remember, the "events" or "gates" should be as literally and closely mapped to the learning objective as possible.

### Choosing public vs private courses

Learning Lab courses are public by default. If you'd like to create private courses, you can sign up for the organization plan. Contact learninglab@github.com to learn more.

### Publish a course

When you're ready to [publish your course](https://lab.github.com/docs/publishing), just go to your course's dashboard and click the button! Once published, other users can register for and take your course.

### Maintaining launched courses

Once a course is published, you can continue to make updates to it by using pull requests. When you create a branch and a pull request in an existing course, Learning Lab will automatically create a draft deployment of that pull request so you can test. There will be links directly in your pull request, so you should be able to find it easily. These drafts are only accessible to the owner, or if the owner is an organization, those with administrator access.

### Using the Course Builder

This Learning Lab course has walked you through course creation from scratch - but we also have a Course Builder UI. The Course Builder will create a boilerplate repository and automatically import it for you. It also provides helpful tools to create and validate your course's yaml file.
If you need help, reach out in the [community forum]({{ communityBoard }}), or let us know at learninglab@github.com.

