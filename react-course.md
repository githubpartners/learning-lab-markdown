# Introduction to React

_In this course, you will learn the basics of React.js through building a gradebook web application to manage assignments, students, and grades._

![](https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7)

**Tags**: none

---

# Set up a React Application Locally

Hello and welcome!

Before starting this course, we recommend completing the [Introduction to GitHub Learning Lab](https://lab.github.com/githubtraining/introduction-to-github) first with the option for working locally in the command line.

### What's in our React App

Let's take a look of what our React App looks like right now. We will go through our file structure which is a [standard React setup](https://facebook.github.io/create-react-app/docs/getting-started). You will not be editing any files in this step, but the structure is important for future code references.

![File Structure](https://user-images.githubusercontent.com/25253905/61294641-28e68700-a78b-11e9-9bc1-ff468312ca8b.png)

##### `package.json`

The `package.json` file is our roadmap of the app. It tells us the name of the app, the version, the different dependencies we need to run our app, and more.

##### `public/`

The `public/` directory contains our `index.html` file. The `index.html` file directs us to the rest of the web application that requires additional processing.

##### `src`

This is where most of your code will go. You'll notice we have `App.jsx` along with other `jsx` files. But, what is `jsx`? Think of `jsx` as a mix between `html` and `javascript`. We can write tags, functions, and classes. Take a look at the `App.jsx` file. Some of that contents might look familiar from `html`, like `<div/>` tags.

## Step 1: Set up the project locally

In this repository, we have two branches - `main` and `changes`. We will be working off of the `changes` branch. Let's go ahead and get started.

### :keyboard: Activity: Clone the repository and install Node

1. Open your terminal
    - If you're using a Windows operating system, we recommend downloading and using [git bash](https://git-scm.com/downloads) as your terminal
2. Change directories into a location where you want to keep this project
3. Clone this repository: `git clone {{ repoUrl }}`
4. Move into the repository's directory: `cd intro-react`
5. Checkout to the `changes` branch: `git checkout changes`
6. Open the `intro-react` folder in your favorite text editor
7. Check for Node installation: `node -v`
8. [Install Node](https://nodejs.org/en/download/) if it is not installed
9. In your repository folder, install the necessary packages: `npm install`
10. Start the React Application: `npm start`

Your browser should automatically open `http://localhost:3000/`, and you should see our barebones gradebook application.

You'll see that our app can't really do anything! All we have is three buttons! We are going to add all the functionality.


### :keyboard: Activity: Open a Pull Request

1. [Create a pull request to base `main` from `changes` branch]({{repoUrl}}/compare/main...changes)
2. Title your pull request `Changes`

I'll respond with next steps in your pull request.

# Building Blocks of ~~Life~~ Apps -  Components

Awesome! You successfully opened a pull request!

In this Pull Request you will:

- Add components
- Pass data to child components
- Create and use state variables
- Use callback functions to communicate data

First, we'll learn about components.

## Components

**Components** are the **building blocks of React apps**. Think of components as different parts of the app. Each button is a component, each paragraph of text is a component, and so on. From html, you might recognize some of the built in components like `<div />` and `<li />`. In React, we can create our own components! How cool is that?

### Components in `src/App.jsx`

![Assignments Solution](https://user-images.githubusercontent.com/25253905/61293228-11f26580-a788-11e9-90ac-9612c2bddf6b.png)

In our [solution](https://githubtraining.github.io/react-solution/), our assignments page looks like the above. The overall webpage is a component called `App`. Inside `App` there are other components like buttons, titles, and custom components that we can create (like the Assginments List).

Take a look at the following line in `src/App.jsx`.

```javascript
class App extends React.Component
```

This line takes a component's properties to create a component named "App". In the `render` method of `App`, there are other components like `<button/>`. These components are **child components** because they are all a part of its parent, `App`.

Scroll down to add a header component.


## Step 2: Adding components

Let's add a child component and give our app a header. At the end of the step, your app should like the following:

![App with header](https://user-images.githubusercontent.com/25253905/61294086-eb352e80-a789-11e9-96ab-8b6cb09b3791.png)

### :keyboard: Activity: Add an `h3` component to `src/App.jsx`

1. In `src/App.jsx`, replace line 92 with this header component:
    ```jsx
    <h3 className="Box-title d-flex flex-justify-center">GradeBook</h3>
    ```
2. Save your file
3. To run the code, move inside the repository directory in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your code to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "add a header component"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>


It looks like you did not correctly replace line 92 with the correct `h3` component in `src/App.jsx`.

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Interacting with `child` components with `props`

Now, let's discuss how we can reuse the same component with different properties.

That might sound a little confusing, but let's take a look. Go to our final [solution](https://githubtraining.github.io/react-solution/) and add some assignments along with students. You might start to notice that both lists look the same, but with different values. In fact, both lists are the same component!

How do we pass different values to a component? We pass **properties** to the component, otherwise known as **props**.

[Props are the input to components](https://reactjs.org/docs/components-and-props.html). Props allow us to reuse a component (like a list) in multiple places within our app. 

### Props used for Assignments and Students Pages

![Finished Assignments Page](https://user-images.githubusercontent.com/25253905/61293228-11f26580-a788-11e9-90ac-9612c2bddf6b.png)

![Finished Students Page](https://user-images.githubusercontent.com/25253905/61293769-46b2ec80-a789-11e9-88b3-c660f436f5bf.png)

Take a look at our final solution for our assignments and students page above. You'll see that they look similar. The lists used in the assignments and students pages use the same component, but with different values (props). Next, we'll learn to pass different values to the same components.


## Step 3: Import a Child Component

In this step, we will import the `List` component that we created for you into `App`.

### :keyboard: Activity: Import a List component to `src/App.jsx`

1. At the top of `src/App.jsx`, replace line 3 with:
    ```js
    import List from "./List";
    ```
2. Save your file
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "import list component"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>


It looks like you did not import the `List` component into `App`.

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


# Conditional Rendering

Let's take a look at what the code between lines 52 and 61 means. When we click the `Assignments` button, the list for assignments is assigned to the variable `tabChoice`. `tabChoice` is rendered in the `render` method.

But how do we specialize the `List` for our assignments? This where our props come into play. We create properties such as `placeholder`, and `currList`. We then assign values to them.

## Step 4: Import Assignments

Now that we imported the child component, let's use it in our code. At the end of this step, you should be able to click on the `Assignments` tab and render the following:

![No Title Assignments](https://user-images.githubusercontent.com/25253905/61294177-1ddf2700-a78a-11e9-963d-8b6d2a4f7b82.png)

### :keyboard: Activity: Uncomment the assignments conditional in `src/App.jsx`

1. In `src/App.jsx`, uncomment the conditional statement between lines 52 and 61
2. Save your changes
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "uncomment assignment rendering"
    git push
    ```
<hr>
<h3 align="center">Watch below this comment for my response.</h3>


It looks like you didn't uncomment the proper line.

Please try again.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 5: Adding a `prop`

What does the `List` component do with the information we just included? Adding `this.props` tells the component to look for the property that was passed to it.

To see, open the `src/List.jsx` file. In the `render` method, in our input tag, notice that we set our `placeholder` to `this.props.placeholder`. Then, at the bottom of our `render` method, we loop through our `this.props.currList`. This shows each item in the list that we pass.

Let's go ahead and replace the current title with another `prop`.

### :keyboard: Activity: Replace the title prop in `src/List.jsx`

1. In `src/List.jsx`, replace line 31 with `{this.props.title}`
2. Save your changes
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/List.jsx
    git commit -m "use a prop for the header"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>


It looks like you did not replace the title with a prop in the correct place.

Ensure that:
- you're editing `src/List.jsx`
- you edit line 31
- your prop is within the `<p className="h2">` and `</p>` tag. 

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## State Variables

So now, we learned how to pass data to components, but let's talk about the data itself.

There are two types of data: **static data** and **dynamic data**.

Static data doesn't change. Things like a title on a page or the name of a button would be static data.

Dynamic data, on the other hand, is data that does change. In our example, we can change it by adding an item to the list. Our list of assignments would also be considered dynamic data. But,  how do we deal with dynamic data in React?

Scroll below to take a look in the code!


## State variables

In React, we store dynamic data in **state variables**. Let's take a look at how we store state variables. In `src/App.jsx`, take a look at the constructor. You'll see that we declare our state variables using `this.state = {.....}`.

Currently, in `App`, we have three state variables:
- `buttonClicked` - This stores which button was clicked. It is a state variable because the button that is clicked has the ability to change.
- `assignments` - This stores the list of assignments. It is a state variable because the list changes every time a new assignment is added.
- `grades` - This should store the grade for each student. However, we have no way to store students, so let's fix that!

## Step 6: Add a state variable

Let's add a way to store students as a variable.

### :keyboard: Activity: Add a state variable to `src/App.jsx`

1. On line 11 of `src/App.jsx`, add a state variable named `students`
2. Set `students` equal to an empty array
3. Add a comma: `students: [],`
4. Save your changes
5. To run your code, move inside your repo folder in your terminal and run `npm start`
6. Exit the process in your terminal using `Ctrl + C`
7. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "add a state variable for students"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>

It looks like you did not add a `students` state variable.

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


### Explaining `this.setState`

How do we change data within a state variable?

Unfortunately, we can't just do `this.state.studentsList = .....` to change data.

To set the state of a state variable we have to use the method, `this.setState`.

Take a look at the method on line 30 in `src/App.jsx`

When this method is called, it is adding `assignmentName` to our state variable `assignments` by setting the state of `assignments` to itself with the concatenation of `assignmentName`.

We are going to set some state in next steps.


## Step 7: Create a method

Now that we see how it works with assignments, let's try it with students! We will create an `addStudent` method to add students the same way we add assignments.

### :keyboard: Activity: Create an `addStudent` method in `src/App.jsx`

1. On line 37 of `src/App.jsx`, create a method called `addStudent` below the comment
   - `addStudent` should take `studentName` as a parameter
   - `addStudent` should concat `studentName` to the end of `students` list that we created earlier
    - **Hint**: You can copy the same format for the `addAssignment` method
2. Save your changes
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "create addStudent method"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>

It looks like you did not create an `addStudent` function with the parameter: `studentName`.

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 8: Binding a method

Since we created a method that changes a state variable, we have to bind it to our class. Then, when we call it, we know what method to reference.

### :keyboard: Activity: Bind `addStudent` to `App`

1. Uncomment line 18 of `src/App.jsx` to bind `addStudent` to `App`
2. Save your changes
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process in your terminal using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "bind addStudent to App"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>

It looks like you didn't uncomment the proper line.

Please try again.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Callback Functions

The last thing you need to know before you can call yourself a React Developer is callback functions.  We said that we can pass data to the child with `props`, but what about passing data from the child to the parent?

With **callback functions**, we are able to do just that. We **pass a function as a prop**, and then the child component can call the function that was defined in the parent. Let's look at an example below.

### Example of passing functions as props

So where exactly are those functions we created to set state getting called?

On line 63 in `src/App.jsx`, it looks like we pass the `addAssignment` function as a prop in this chunk of code.

Navigate to `src/List.jsx` and take a look at the code between lines 18 and 25 in `src/List.jsx`.

```jsx
handleSubmit(event) {
    this.setState({
      value: ""
    });

    this.props.addFunction(this.state.value);
    event.preventDefault();
}
```

When the submit button is clicked, we call the `addFunction` with the value of our input box. For assignments, the `addFunction` references the `this.addAssignment` in `App`. So when we call `this.props.addFunction`, we are calling back to the parent component and using the parent's function.

Scroll below for next steps.

## Step 9: Adding the correct props

There are some issues with this code. We want to be modifying the `students` list, not the `assignments` list.

Let's change some props between lines 71 and 80 to render the correct components when we click `Students`.

### :keyboard: Activity: Change the props for Students

1. Uncomment the conditional statement between lines 65 and 75 of `src/App.jsx`
2. On line 68, change the `placeholder` prop to `"Add Student..."`
3. On line 69, change the `currList` prop to `{this.state.students}`
4. On line 70, change the `addFunction` prop to `{this.addStudent}`
5. Save your changes
6. To run your code, move inside your repo folder in your terminal and run `npm start`
7. Exit the process in your terminal using `Ctrl + C`
8. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "change props for students rendering"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>

It looks like you did not replace the props for student rendering.

Try again!

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 10: Include Grades

Let's get our grades working! At the end of this activity, your code should now be able to add assignments, students, and grades.

### :keyboard: Activity: Uncomment the grades conditional in `src/App.jsx`

1. In the `src/App.jsx` file, uncomment the conditional statement between lines 77 and 86 for our `grades` tab
2. Save your changes
3. To run your code, move inside your repo folder in your terminal and run `npm start`
4. Exit the process using `Ctrl + C`
5. Stage, commit, and push your changes to the `changes` branch:
    ```
    git add src/App.jsx
    git commit -m "uncomment grades section"
    git push
    ```

<hr>
<h3 align="center">Watch below this comment for my response.</h3>


It looks like you didn't uncomment the proper line.

Please try again.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.


## Step 11: Merge your pull request

Now that we've approved the changes, it's time to merge the pull request.

### :keyboard: Activity: Merge the `changes` branch into `main`

1. Click the `Merge Pull Request` button

<hr>
<h3 align="center">Watch below this comment for my response.</h3>

## Congratulations!

Congratulations on finishing Introduction to React. To update your local course, use `git checkout main` and `git pull`.

Although this course certainly doesn't mean you are a React expert, we hope you have the tools to explore further content on your own. Here are some cool resources for further learning:

- [Create your own React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Deploying a React App to GitHub Pages](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)

