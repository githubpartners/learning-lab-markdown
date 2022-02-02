# Introduction to HTML

_If you are looking for a quick and fun introduction to the exciting world of programming, this course is for you. Learn fundamental HTML skills and build your first webpage in less than an hour._

![](https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30)

**Tags**: GitHub Pages

---

If you are an aspiring developer, creating a simple webpage is a great way to take your first steps into the exciting world of programming. The first skill you should learn is HTML.

HTML is the markup language that forms the backbone of the internet. In this course, you will build a clean, stunning webpage using HTML. As you build your page, we will show you how you can use GitHub Pages to host your website free of charge. Your new HTML skills will form an important foundation in your journey as a new developer.

## What you'll learn

We'll answer common questions like:

- What is HTML?
- What are tags & headers?
- How do you add lists, images, and links to your HTML page?
- What is a Pull Request?
- How do you use GitHub Pages?

And when you're done you'll be able to:
- Make a simple HTML website
- Use foundational HTML concepts, like tags, headers, lists, images, and links
- Introduce changes with Pull Requests
- Deploy a web page to GitHub pages

## What you'll build
![a custom website](https://user-images.githubusercontent.com/16547949/41006151-5e97deee-68ee-11e8-8b52-84f38cd3e567.png)

- Completed [source repository](https://github.com/githubtraining/intro-html-demo)
- Live [web page](https://githubtraining.github.io/intro-html-demo/) deployed to GitHub Pages.

## Prerequisites
None. This course is a great introduction to HTML.

## Projects used
This makes use of the following open source projects. Consider exploring these repos and maybe even making contributions!

- [Jekyll](https://github.com/jekyll/jekyll): a simple, blog-aware, static site generator.

## Audience

New developers, new GitHub users, students, managers, teams



---

# Let's build your first webpage

HTML is the markup language that forms the backbone of the internet. In this course, you will learn how to build a clean, stunning webpage using HTML which you can set as your browser's default start page. This is only the first step in your journey, but it will form an important foundation in your journey as a new developer.

![screenshot of final product](https://user-images.githubusercontent.com/16547949/41006151-5e97deee-68ee-11e8-8b52-84f38cd3e567.png)

## What is HTML?

HTML stands for **H**yper **T**ext **M**arkup **L**anguage. HTML is not a programming language. It is simply a way to describe the structure of your website. Your web browser reads the HTML document and displays it in the window.

## Where does your website begin?

When someone enters your web address, the web standards will automatically look for a file called index.html and display it in your browser. Most people call this your home page.

## Step 1: Hosting your webpage

It isn't enough to simply create a webpage on GitHub. You must deploy your webpage to a web host that is connected to the internet. For this course we will use GitHub Pages, but you could publish the HTML to any static host.

## :keyboard: Activity: Turn on GitHub Pages

1. Under your repository name, click [**Settings**]({{ repoUrl }}/settings).
1. In the **GitHub Pages** section, use the **Select source** drop-down menu to select `main` as your GitHub Pages publishing source.
1. Return to this issue.

> _I may take up to a minute to respond as I wait for GitHub Pages to create a deployment of your repository. If you don't see anything after a minute, refresh this page_.

> _For more information, see [Configuring a publishing source for GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) in the GitHub Help._

<hr>
<h3 align="center">I'll respond in this issue after GitHub Pages has finished deploying your site.</h3>


## Step 2: Open a pull request

GitHub Pages is now serving your web page at: {{ pagesUrl }}

It's not very special looking yet, is it? Web hosts (and GitHub Pages) look for a file titled `index.html` and serve that up. Since there's no `index.html` file in our repository, GitHub Pages displays the contents of the README by default. Let's change this by adding the `index.html` file to our repository.

### :keyboard: Activity: Add `index.html`

To help you get started, I have already created an `index.html` file for you on a branch called: `add-index`. All you need to do is create the pull request. Don't worry, I'll help you!

1. Create a pull request. You can either [use this direct link]({{ repoUrl }}/compare/main...add-index?expand=1), or go to the **Code** tab, click on **New Pull Request**, select **base: main**, and **compare: add-index**.
2. Add a descriptive title to your pull request, something like "Add the index.html file".
3. Add a descriptive body to your pull request.
4. Click **Create pull request**.

<hr>
<h3 align="center">I'll respond in your new pull request.</h3>


## Step 3: Add HTML document structure

Great job opening a pull request @{{ user.username }}! I've gone ahead and closed your [previous issue]({{ welcomeLink }}). 

This pull request contains some content, but it doesn't have any of the HTML structure that tells a browser how to structure the content. All pages created with HTML must contain tags that identify it as such. The tags look like this:

```html
<html>
    <body>
        The HTML content goes here.
    </body>
</html>
```

You may notice two copies of the HTML tag, and two copies of the body tag. We call these the _opening_ and _closing_ tags. Let's look at the same code, but include a little explanation.

- `<html>` is the opening HTML tag
- `<body>` is the opening body tag
- `</body>` is the closing body tag
- `</html>` is the closing HTML tag

In HTML, spacing doesn't really matter. We've added some tabs to make the code easier to see, but the web browser will ignore the extra spacing. Now that you understand the building blocks of HTML, let's add HTML to the `index.html` file in your project.

### :keyboard: Activity: Add the `html` and `body` tags to `index.html`

Apply this suggested change, or follow the instructions below if you'd like to type out the code manually.

```suggestion
<html>

  <body>
    Hello there, awesome person! 
  </body>

</html>
```

1. Click on **Files Changed** to see the newly added `index.html` file.
1. Click on the ellipsis (...) and select **Edit file**.
1. Before the existing content, add an opening `<html>` tag, and an opening `<body>` tag.
1. After the existing content, add a closing `</body>` tag, and a closing `</html>` tag.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

Uh oh, I didn't detect `<html>` and `<body>` tags. Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<html>`, `<body>`, `</body>`, and `</html>`.
2. Check the order of your tags. The opening `<html>` tag should appear first, followed by the opening `<body>` tag, then the content, the closing `<body>` tag, and the closing `<html>` tag.
3. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Activity: Add the `html` and `body` tags to `index.html`

1. Click on **Files Changed** to see the newly added `index.html` file.
1. Click on the ellipsis (...) and select **Edit file**.
1. Before the existing content, add an opening `<html>` tag, and an opeining `<body>` tag.
1. After the existing content, add a closing `</body>` tag, and a closing `</html>` tag.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

## Step 4: Add a page title

Your web page is beginning to take shape! HTML and body tags are important, but their effect isn't too visible. Next, we'll make a visible change, by giving your page a title. Your page's title will show up on the title bar in your web browser, or as the title of any tabs you've got open. The title is used in all sorts of other places!

![a screenshot of the title on a browser tab](https://user-images.githubusercontent.com/16547949/41006294-e990b476-68ee-11e8-8cfa-67c72c132095.png)

The title tag looks like this:

```html
<title>I am a title!</title>
```

But the title tag must be inside of a head tag. By now, you've noticed that tags have a hierarchical structure. In our prior example, the `html` tag was the parent of the `body` tag. In a similar fashion, the `head` tag will be the parent of the `title` tag, like so:

```html
<head>
    <title>I am a title!</title>
</head>
```

Finally, the `head` and `title` tags, will be children of the `html` tag, but siblings of the `body` tag.

```html
<html>
    <head>
        <title>I am a title!</title>
    </head>

    <body>
        Some content.
    </body>
</html>
```

### :keyboard: Activity: Give your page a title

Apply this suggested change, or follow the instructions below if you'd like to type out the code manually.

```suggestion
    <head>
        <title>My awesome web page</title>
    </head>

```

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Place an opening `<head>` tag and an opening `<title>` tag after the first opening `html` tag, but before the `body` tag.
1. Write out a title after the opening `title` tag.
1. Place a closing `</title>` tag and a closing `</head>` tag after your new title, but before the `body` tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

I didn't detect opening and closing `head` and `title` tags. Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<head>`, `<title>`, `</title>`, and `</head>`.
2. Check the order of your tags. The opening `<head>` tag should appear first, followed by the opening `<title>` tag, then the title itself, the closing `</title>` tag, and the closing `</head>` tag.
3. Make sure you placed the head and title tags after the `<html>` tag, but before the `<body>` tag.
4. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Activity: Give your page a title

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Place an opening `<head>` tag and an opening `<title>` tag after the first opening HTML tag, but before the body tag.
1. Write out a title after the opening title tag.
1. Place a closing `</title>` tag and a closing `</head>` tag after your new title, but before the body tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Commit directly to the `add-index` branch_.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

## Step 5: Merge your first pull request

:tada: Everything's going so well @{{ user.username }}! Now that you've got all the bits for a proper HTML page, let's merge it in and see how the browser interprets it.

### :keyboard: Activity: Merge the HTML, head, title, and body tags

1. Click on **Merge pull request** below.
1. Click on **Confirm merge**.
1. Click on **Delete branch**.

<hr>
<h3 align="center">I'll respond when you've merged this pull request.</h3>


## Step 6: Add a header

Take a peek at your shiny new web page! It can be found at: {{ pagesUrl }}

Headers create prominent text in the body of your web page. Headers come in different levels. For example, a header 1, or h1, is the largest, while a header 3, or h3, is smaller, and a header 6, or h6, smaller still. You can create headers in html using the h1, h2, h3, h4, h5, and h6 tags. Here's an example:

```html
<h1>I'm a header 1!</h1>
```

### :keyboard: Create a header for your web page


1. Edit the `index.html` file in your main branch by [using this direct link]({{ repoUrl }}/edit/main/index.html) or going to the **Code** tab, clicking on the `index.html` file, clicking the pencil :pencil: to edit the HTML.
2. Between the body tags, add an opening `<h1>` tag, some content for the header, and a closing `</h1>` tag. 
3. In the _Commit changes_ section, enter a commit message that describes what you've done.
4. Ensure you've selected _Create a new branch for this commit and start a pull request_.
5. Give your branch a descriptive name, like `add-headers-and-images`.
6. Click on **Propose file change**.
7. Give your pull request a title, and a comment.
8. Click on **Create pull request.**

<hr>
<h3 align="center">Look for my next response in your pull request</h3>


Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>.</h3>


I didn't detect an `<h1>` tag. Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the h1 tag: `<h1>`
2. Check the order of your tags. The opening `<h1>` tag should appear first, followed by your content, and then the closing `</h1>` tag.
3. Make sure you placed the header inside the `<body>` tags.
4. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Create a header for your web page

1. Click on the **Code** tab.
1. Click on the `index.html` file.
1. Click the pencil :pencil: to edit the HTML.
1. Inside the body tag, add an opening `<h1>` tag, some content for the header, and a closing `</h1>` tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Create a new branch for this commit and start a pull request_.
1. Give your branch a descriptive name, like `add-headers-and-images`.
1. Click on **Commit changes**.
1. Give your pull request a title, and a comment.
1. Click on **Create pull request.**

<hr>
<h3 align="center">I'll respond when you open a pull request.</h3>

## Step 7: Add an image

Fantastico! Headers will help you highlight segments of your web page. 

So far, we've used tags that stand on their own. However, we sometimes need to specify an attribute, which is information that the tag needs to do its work. For example, to display an image, we need an `<img>` tag, but we also need a source attribute so the browser knows the location of the image. We can add an attribute as follows:

```html
<img src="https://octodex.github.com/images/vinyltocat.png">
```

You'll also notice that the image tag doesn't need to close since it is considered to be an [empty](https://www.w3schools.com/html/html_elements.asp) tag.

### :keyboard: Activity: Add an image to your web page

Follow the instructions below to add an image.  You can use your GitHub avatar image (suggested below) or link to your image of choice.

```suggestion
<img src="{{ user.avatarUrl }}">

```

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Place an opening `<img>` tag between the body tags. Reminder: you don't need to close an `<img>` tag!
1. Set the `src` attribute to the image you would like to display. You can use your GitHub profile picture: `{{ user.avatarUrl }}`
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>


I didn't find the image! Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the image, `<img>`, tag with a source attribute: `<img src="`{{ user.avatarUrl }}`">`
3. Make sure you placed the image tag inside the body tags.
4. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Activity: Add an image to your web page

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Place an opening `<img>` tag inside the body tag.
1. Set the `src` attribute to your GitHub profile picture: ``{{ user.avatarUrl }}``
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

## Step 8: Merge your second pull request

:bowtie: What a spiffy photo, @{{ user.username }}!

You can now merge in your pull request. Don't forget to delete your branch!

### :keyboard: Activity: Merge the header and image 

1. Click on **Merge pull request** below.
1. Click on **Confirm merge**.
1. Click on **Delete branch**.

<hr>
<h3 align="center">I'll respond when you've merged this pull request.</h3>


## Step 9: Create a list

Your site with your new photo can be seen at: {{ pagesUrl }}

> Note: Sometimes it takes a few minutes for a GitHub Pages site to reload. If your changes still don't appear after a few minutes, you might try clearing the cache in your browser and refreshing the page. 

### Ordered and unordered lists

Lists are used all over the internet. They come in two flavors: ordered and unordered.

1. This
2. Is an
3. Ordered list

And...

- This
- Is an
- Unordered list

You can create a list using the `<ol>` tag for ordered lists, and the `<ul>` tag for unordered lists. Then, each item must be wrapped in an `<li>`, or list item, tag. Here's the code that generates the list I showed you above:

```html
<ol>
    <li>This</li>
    <li>Is an</li>
    <li>Ordered list</li>
</ol>
```

And...

```html
<ul>
    <li>This</li>
    <li>Is an</li>
    <li>Unordered list</li>
</ul>
```

For the next exercise, you are going to create a list of your favorite websites. Later, we will add links so you can access those links quickly. For now, focus on creating the individual list items.

### :keyboard: Activity: Create a list of your favorite sites

1. Edit the `index.html` file in your main branch by [using this direct link]({{ repoUrl }}/edit/main/index.html) or going to the **Code** tab, clicking on the `index.html` file, clicking the pencil :pencil: to edit the HTML.
1. Inside the body tag, create a list, either ordered or unordered, of your favorite sites on the internet.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Create a new branch for this commit and start a pull request_.
1. Give your branch a descriptive name, like `add-links-and-lists`.
1. Click on **Commit changes**.
1. Give your pull request a title, and a comment.
1. Click on **Create pull request.**

<hr>
<h3 align="center">Look for my response in your new pull request</h3>


Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>.</h3>


Uh oh, I didn't detect a list! Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<ul>` or `<ol>`, `<li>`, and `</ul>` or `</ol>`.
2. Check the order of your tags. The opening `<ul>` or `<ol>` tag should appear first, followed `<li>` and `</li>` tags, and then `</ul>` or `</ol>`.
3. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Create a list of your favorite sites

1. Edit the `index.html` file in your main branch by [using this direct link](https://github.com/{{ user.username }}/{{ repo }}/edit/main/index.html) or going to the **Code** tab, clicking on the `index.html` file, clicking the pencil :pencil: to edit the HTML.
1. Inside the body tag, create a list, either ordered or unordered, of your favorite sites on the interwebs.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Create a new branch for this commit and start a pull request_.
1. Give your branch a descriptive name, like `add-links-and-lists`.
1. Click on **Commit changes**.
1. Give your pull request a title, and a comment.
1. Click on **Create pull request.**

<hr>
<h3 align="center">I'll respond in your new pull request.</h3>


Uh oh, I didn't detect a list! Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<ul>` or `<ol>`, `<li>`, and `</ul>` or `</ol>`.
2. Check the order of your tags. The opening `<ul>` or `<ol>` tag should appear first, followed `<li>` and `</li>` tags, and then `</ul>` or `</ol>`.
3. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Create a list of your favorite sites

1. Edit the `index.html` file in your main branch by [using this direct link](https://github.com/{{ user.username }}/{{ repo }}/edit/main/index.html) or going to the **Code** tab, clicking on the `index.html` file, clicking the pencil :pencil: to edit the HTML.
1. Inside the body tag, create a list, either ordered or unordered, of your favorite sites on the interwebs.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Ensure you've selected _Create a new branch for this commit and start a pull request_.
1. Give your branch a descriptive name, like `add-links-and-lists`.
1. Click on **Commit changes**.
1. Give your pull request a title, and a comment.
1. Click on **Create pull request.**

<hr>
<h3 align="center">I'll respond in your new pull request.</h3>


## Step 10: Add links to your list

✅ Check
✅ That
✅ Off your list!

Great job with lists. Let's try adding some links, shall we?

### About hyperlinks

Hyperlinks allow people to navigate through pages on the web. Links are achieved with the anchor tag, `<a>`, and have two major components: the location they link to, and the content that should be linked. The location of the link is specified as a `href` attribute, and the content that should be linked can be specified between the opening and closing tags, like this:

{% if GHE_HOST %}
  https://pages.{{ GHE_HOST }}/{{ user.login }}/{{ repo }}
        ```
      <li><a href="https://{{ GHE_HOST }}">This is a link to GitHub!</a></li>
      ```
{% else %}
      ```
      <li><a href="https://github.com">This is a link to GitHub!</a></li>
      ```
{% endif %}

### :keyboard: Activity: Create links to your favorite sites

Apply this suggested change, or follow the instructions below if you'd like to type out the code manually. Please note that the suggested change may not be in the proper place for your list, so make sure it is inside of a set of `<ol>` or `<ul>` tags.

```suggestion
      <li>My favorite site is <a href="https://github.com">GitHub</a>!</li>
```

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. In the list you just created, add a link to each of your favorite sites to their respective URLs. You can do this by adding an opening anchor tag `<a>` tag with `href` attribute with your favorite site's URL, the name of the site inside the anchor tag, and a closing anchor `</a>` tag. Here is an example of a list item with a link:

{% if GHE_HOST %}
        ```
      <li><a href="https://{{ GHE_HOST }}">This is a link to GitHub!</a></li>
      ```
{% else %}
      ```
      <li><a href="https://github.com">This is a link to GitHub!</a></li>
      ```
{% endif %}

1. In the _Commit changes_ section, enter a commit message that describes what you've done.
2. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>


Uh oh, I didn't find any links! Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the tags: `<a href="SOME-SITE>` and `</a>`.
2. Check the order of your tags. The opening anchor tag with an `href` attribute, some content, and a closing anchor tag.d
3. Ensure you modified the `index.html` file, and not some other file. 

Let's try again!

### :keyboard: Create links to your favorite sites

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Link each of your favorite sites to their respective URLs. You can do this by adding an opening anchor tag `<a>` tag with `href` attribute with your favorite site's URL, the name of the site inside the anchor tag, and a closing anchor `</a>` tag. 
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.
1. Give your pull request a title, and a comment.
1. Click on **Create pull request.**

<hr>
<h3 align="center">I'll respond in your new pull request.</h3>

## Step 11: Merge your third pull request

Those links are looking great, @{{ user.username }}.

Go ahead and merge this pull request. Don't forget to delete your branch!

### :keyboard: Activity: Merge the list and links

1. Click on **Merge pull request** below.
1. Click on **Confirm merge**.
1. Click on **Delete branch**.

<hr>
<h3 align="center">I'll respond when you've merged this pull request.</h3>


## Step 12: Make it beautiful

You may be wondering why your page hasn't looked exactly the same as the sample I showed in the beginning. That's because HTML gives your webpage structure, but the simple tags you have learned so far don't tell the web browser how you want each page element to appear. 

The appearance of each page element is defined through styles and is the subject of another course. For now, I have added [a stylesheet]({{ repoUrl }}/blob/add-style/style.css) for you. 

For your webpage to use your new stylesheet, you just need to link it within the `<head>` of your `index.html` file. If you include the following link in your `index.html` file, your webpage will begin using the css file to make your website look awesome!

```html
  <link rel="stylesheet" href="style.css">
```

As an example, your `index.html` file might look like this:

```html
    <head>
        <title>I am a title!</title>
        <link rel="stylesheet" href="style.css">
    </head>
```

### :keyboard: Activity: Create a style to your site

1. Edit the `index.html` file in the `add-style` branch by [using this direct link]({{ repoUrl }}/edit/add-style/index.html) or going to the **Code** tab, selecting the `add-style` branch, clicking on the `index.html` file, and clicking the pencil :pencil: to edit.
1. Between the `<head>` tags, add the following `<link rel="stylesheet" href="style.css">`.
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

Great! I've opened a [new issue]({{ issueURL }}) for you.

<hr>
<h3 align="center">Go to the next issue <a href="{{ issueURL }}">here</a>.</h3>


Uh oh, I didn't find the <link> tag inside the <head>! Here are some troubleshooting steps:

1. Check your spelling. We're checking specifically for the following: `<link rel="stylesheet" href="style.css">`.
2. This must be after the opening `<head>` tag, and before the closing `</head>` tag.

Let's try again!

### :keyboard: Add the stylesheet

1. Click on **Files Changed**.
1. Click on the ellipsis (...) and select **Edit file**.
1. Add the link tag inside the `<head>` section of the index: `<link rel="stylesheet" href="style.css">`
1. In the _Commit changes_ section, enter a commit message that describes what you've done.
1. Click on **Commit changes**.

<hr>
<h3 align="center">I'll respond when I detect you've committed in this pull request.</h3>

## Step 13: Merge your final pull request

Your styles look great, @{{ user.username }}.

Go ahead and merge this pull request so we can all see the final result. Don't forget to delete your branch!

### :keyboard: Activity: Merge the stylesheet
1. Click on **Merge pull request** below.
1. Click on **Confirm merge**.
1. Click on **Delete branch**.

<hr>
<h3 align="center">I'll respond when you've merged this pull request.</h3>


### Show the world your finished page

Well done @{{ user.username }}, here is the finished result: {{ pagesUrl }}

You've learned the basics of HTML, and used it to build a simple webpage. 

Though this works, there's still more you can do to make sure you're up to date with standard conventions, like using an HTML validator.

{% if GHE_HOST %}
<h3 align="center"><a href="https://validator.w3.org/nu/?showsource=yes&doc=https://pages.{{ GHE_HOST }}/{{ user.login }}/{{ repo }}/">See validation</a></h3>
{% else %}
<h3 align="center"><a href="https://validator.w3.org/nu/?showsource=yes&doc=https://{{ user.login }}.github.io/{{ repo }}">See validation</a></h3>
{% endif %}


If you'd like, you can make your fancy new page the default start page for your web browser. Just follow the links below for more information:

- [Google Chrome](https://support.google.com/chrome/answer/95314?hl=en)
- [Safari](https://support.apple.com/guide/safari/set-your-homepage-ibrw1020/mac)
- [Firefox](https://support.mozilla.org/en-US/kb/how-to-set-the-home-page)
- [Microsoft Edge](https://support.microsoft.com/en-us/help/4027577/windows-change-your-home-page)


