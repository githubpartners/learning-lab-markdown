# CodeQL for JavaScript: Unsafe jQuery Plugin

_In this course, we will use CodeQL to analyze the source code of Bootstrap,  and find unsafe calls to JQuery that could lead to cross-site scripting (XSS) attacks._

![](https://avatars.githubusercontent.com/u/2036237?s=400&v=4)

**Tags**: none

---

# Welcome to the CodeQL Unsafe JQuery course!
We created this course to help you quickly learn CodeQL, our query language and engine for code analysis. The goal is to find several cross-site scripting (XSS) vulnerabilities in the open-source software known as Bootstrap, using CodeQL and its libraries for analyzing JavaScript code. To find the real vulnerabilities, you'll need to write a sequence of queries, making them more precise at each step of the course.

### More detail
jQuery is an extremely popular, but old, open source JavaScript library designed to simplify things like HTML document traversal and manipulation, event handling, animation, and Ajax. The jQuery library supports modular plugins to extend its capabilities. Bootstrap is another popular JavaScript library, which has used jQuery's plugin mechanism extensively. However, the jQuery plugins inside Bootstrap used to be implemented in an unsafe way that could make the users of Bootstrap vulnerable to cross-site scripting (XSS) attacks. This is when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.

Four such vulnerabilities in Bootstrap jQuery plugins were fixed in the pull request `https://github.com/twbs/bootstrap/pull/27047`, and each was assigned a CVE.

The core mistake in these plugins was the use of the omnipotent jQuery `$` function to process the options that were passed to the plugin. For example, consider the following snippet from a simple jQuery plugin:

```javascript
let text = $(options.textSrcSelector).text();
```

This plugin decides which HTML element to read text from by evaluating `options.textSrcSelector` as a CSS-selector, or that is the intention at least. The problem in this example is that `$(options.textSrcSelector)` will execute JavaScript code instead if the value of `options.textSrcSelector` is a string like `"<img src=x onerror=alert(1)>".` The values in `options` cannot always be trusted.

In security terminology, jQuery plugin options are a **source** of user input, and the argument of `$` is an XSS **sink**.

The pull request linked above shows one approach to making such plugins safer: use a more specialized, safer function like `$(document).find` instead of `$`.
```javascript
let text = $(document).find(options.textSrcSelector).text();
```

In this course, we will use CodeQL to analyze the source code of Bootstrap, taken from before these vulnerabilities were patched, and identify the vulnerabilities.

## Step 1: Know where to get help!

Bookmark these useful documentation links:
- [Writing a basic JavaScript Code QL query](https://lgtm.com/help/lgtm/console/ql-javascript-basic-example)
- [Introduction to CodeQL](https://help.semmle.com/QL/learn-ql/introduction-to-ql.html)
- [Learning CodeQL](https://help.semmle.com/QL/learn-ql/) 

If you get stuck during this course and need some help, the best place to ask for help is on the GitHub Security Lab Slack. Request an invitation from the [Security Lab Get Involved page](https://securitylab.github.com/get-involved) and ask in the channel `#codeql-writing`. You can also visit our [forum](https://github.com/github/securitylab/discussions) to search for possible answers.

There are also sample solutions in [the course repository]({{repoUrl}}/tree/main/solutions), but please try to solve the tasks on your own first!

Hope this is exciting! Please close this issue now, and [continue to the next step]({{repoUrl}}/issues/2).

## Step 2: Setup your environment

We will use the CodeQL extension for Visual Studio Code. You will take advantage of IDE features like auto-complete, contextual help and jump-to-definition.

Don't worry, you'll do this setup only once, and you'll be able to use it for future CodeQL development.

Follow the instructions below. 


### :keyboard: Activity: Set up
1. Install the [Visual Studio Code IDE](https://code.visualstudio.com/).
1. Download and install the [CodeQL extension for Visual Studio Code](https://help.semmle.com/codeql/codeql-for-vscode.html). Full setup instructions are [here](https://help.semmle.com/codeql/codeql-for-vscode/procedures/setting-up.html).
1. [Set up the starter workspace](https://help.semmle.com/codeql/codeql-for-vscode/procedures/setting-up.html#using-the-starter-workspace).
    - **Important**: Don't forget to `git clone --recursive` or `git submodule update --init --remote`, so that you obtain the standard query libraries.
1. Open the starter workspace: File > Open Workspace > Browse to `vscode-codeql-starter/vscode-codeql-starter.code-workspace`.
1. Download the [esbena_bootstrap-pre-27047_javascript CodeQL database](https://github.com/githubsatelliteworkshops/codeql/releases/download/v1.0/esbena_bootstrap-pre-27047_javascript.zip).
1. Import the database into Visual Studio Code:
    - Click the **CodeQL** icon in the left sidebar.
    - Place your mouse over **Databases**, and click **Choose Database from Archive**.
    - Select the bootstrap database you just downloaded.
2. Clone [this course repository]({{repoUrl}}) on your local machine.
3. Add the course repository to your Visual Studio Code starter workspace, by navigating to File > Add Folder to Workspace... If you open this folder you should see several files in there, including `qlpack.yml` and `README.md`.

Please close this issue now, and [continue to the next step]({{repoUrl}}/issues/3).

## Step 3: Finding calls to the jQuery `$` function

You will now run a simple CodeQL query, to understand its basic concepts and get familiar with your IDE.

### :keyboard: Activity: Run a CodeQL query

1. Edit the file `calls-to-dollar.ql` with the following contents:
    ```ql
    import javascript

    from CallExpr dollarCall
    where dollarCall.getCalleeName() = "$"
    select dollarCall
    ```
    Don't copy / paste this code, but instead type it slowly. You will see the CodeQL auto-complete suggestions in your IDE as you type.
    
    - After typing `from` and the first letters of `CallExpr`, the IDE will propose a list of available _classes_ from the CodeQL library for JavaScript. This is a good way to discover what classes are available to represent standard patterns in the source code.
    - After typing `where dollarCall.` the IDE will propose a list of available _predicates_ that you can call on the variable `dollarCall`. 
    - Type the first letters of `getCalleeName()` to narrow down the list.
    - Move your cursor to a predicate name in the list to see its documentation. This is a good way to discover what predicates are available and what they mean.
    - A function call is called a `CallExpr` in the CodeQL JavaScript library.
    - We use the `=` operator to assert that two values are equal.

2. Run this query: Right-click on the query editor, then click **CodeQL: Run Query**.
3. Inspect the results appearing in the results panel. Click on the result hyperlinks to navigate to the corresponding locations in the Bootstrap code. Do you understand what this query does? You probably guessed it! This query finds all calls to the function named `$`.

Now it's time to submit your query. You will have 2 choices to do that, and we'll explain both of them in the comments below. Once you have chosen your method, submit your answer! 

Read carefully: you will need to follow the same steps to submit your answers to later steps. You can always come back to this issue later to check the submission instructions.

### Submission: Commit your query via a Pull Request

The first method to submit your query is via a Pull Request. Using a Pull request has several advantages:

- If you are following this course with a mentor, or with co-learners, you may want them to interact with your PR via review, additional commits, etc.
- Creating a PR is good practice when contributing to shared code.
- You will be able to track the execution of the query checker directly in the PR.

However this workflow is bit more involved than just directly committing to the default branch for the purposes of this course.

To submit this query via Pull Request, you can follow the following workflow:

1. First, refresh your default branch, commit your changes to a new branch, and push them:
    ```
    git checkout main
    git pull
    git checkout -b step-3
    git add .
    git commit -a -m "First Query"
    git push -u origin step-3
    ```
2. Then [open a pull request]({{repoUrl}}/compare/main...step-3).
3. Wait for the course to check your query. It will display a status on your pull request!
4. Once the check is completed, refresh your browser to get the next set of instructions.
5. If the status is green, merge your PR and follow these instructions.


### Submission: Commit your query directly to the default branch

This method is simpler. You won't have to juggle between branches, rebase onto the default branch, or create Pull Requests. However, merging directly to the default branch is not a good practice when you are contributing to a shared code base, so if you choose this method, please don't take this bad habit home with you!

To submit this query via a direct commit to the default branch, you can follow this workflow:

1. Commit your updated query file to your course repo:
    ```
    git add .
    git commit -m "Any message here - why not step 3"
    git push origin main
    ```
2. Wait for your work to be checked, and for the results to appear as a comment below. The checks shouldn't take more than 5 minutes.

    If the checks are successful, the course will close this issue and create a comment pointing you to the next step.
    If the checks are unsuccessful, the course will comment on your [latest commit]({{repoUrl/commits/main}}) with more information, so that you can fix your query and try again.

    To track the execution of the query checker, you can follow along in the [Actions panel]({{repoUrl}}/actions) if you like.

Ok, you're done with the setup, moving on!

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 4: Anatomy of a query

Now let's analyze what you have written. A CodeQL query has the following basic structure:
```ql
import /* ... path to some CodeQL libraries ... */

from /* ... variable declarations ... */
where /* ... logical formulas that say something about the variables ... */
select /* ... expressions to output ... */
```

The `from`/`where`/`select` part is the **query clause**: it describes what we are trying to find in the source code.

Let's look closer at the query we wrote in the previous step.
<details>
<summary>Show the query</summary>

  ```ql
    import javascript

    from CallExpr dollarCall
    where dollarCall.getCalleeName() = "$"
    select dollarCall
  ```

</details>

### Imports
At the top of the query is `import javascript`. This is an **import statement** . It brings into scope the standard CodeQL library that models JavaScript/TypeScript code, allowing us to use its features in our query. We'll use this library in every query, and in later steps we'll also use some more specialized libraries.

### Classes
In the `from` section, there is a declaration `CallExpr dollarCall`. Here we declare a variable named `dollarCall` which has the type `CallExpr`. `CallExpr` is a **class** declared in the standard library (you can jump to the definition using `F12`). A class represents a collection of values, in this case the collection of all function calls.

### Predicates
Now look at the expression `dollarCall.getCalleeName()` in the `where` section. Here we call the predicate `getCalleeName` on the variable `dollarCall` of type `CallExpr`. Predicates are the building blocks of a query: they express logical properties that we want to hold. Some predicates return results (like `getCalleeName`) , and some predicates do not (they just assert that a property must be true).

So far your query finds all functions with the name `$`. It does this by asserting that the result of `dollarCall.getCalleeName()` is equal to the string `"$"`. But what we want actually is to find the first *argument* of each of these calls.

One way to do this is to declare two variables: one to represent function calls, and one to represent call arguments. Then you will have to create a relationship between these variables in the `where` section, so that they are restricted to the first arguments of calls to functions named `$`.

### :keyboard: Activity: Find the 1st argument to all calls to `$`

We want to identify the expression that is used as the first argument for each call, such as in `$(<first-argument>)`.

1. Edit the file `calls-to-dollar-arg.ql` and start by copying your previous query.
2. Use the auto-completion feature to find the class that represents simple expressions, and declare a variable (eg. `dollarArg`) that belongs to this class.
3. Use auto-completion again on your `dollarCall` variable of type `CallExpr` to guess the predicate that gets the argument at a 0-based index. Start typing `get` and browse the predicates, and their contextual documentation.
4. Combine this with your logic from the previous step with an `and` in the `where` clause.
5. Once you're happy with the results, submit your solution.

 

Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 5: Using the jQuery library

So far we have looked for the function name `$`. Are there other ways of calling the jQuery `$` function? Perhaps the CodeQL library can handle these for us?

The CodeQL standard library for JavaScript has a built-in predicate `jquery()` to describe references to `$`. 
Calling the predicate `jquery()` returns all values that refer to the `$` function, and chaining this call with `getACall()`, will give you all calls to this function.

### :keyboard: Rewrite your query

Use this library to rewrite your previous query, that gets you all the first argument to a call to `$`. Use a new file `dollar-arg-node.ql`.

Notice that when you call `jquery()`, `getACall()`, and `getArgument()` in succession, you get return values of type `DataFlow::Node`, and not `Expr` as in your previous query, so you have to change your return variable to have this type.

### :book: The `DataFlow::Node` type

These **data flow nodes** describe a part of the source program that may have a value, and let us do more complex reasoning about this value. We'll learn more about these in the next section.

You new query should give you the same results as the previous one. Submit your solution in the new file `dollar-arg-node.ql` when you're happy with it.
Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 6: Finding jQuery plugin options

jQuery plugins are usually defined by assigning a value to a property of the `$.fn` object:

  ```javascript
  $.fn.copyText = function() { ... } // this function is a jQuery plugin
  ```

In the following steps, we'll find such plugins, and their options. We'll find
- where the property `$.fn` is read
- the functions that are assigned to properties of `$.fn`
- the option parameters of these functions


### :book: Learn about data flow nodes

Take a few minutes to read about the data flow nodes for JavaScript and TypeScript.
- The [data flow nodes](https://help.semmle.com/QL/learn-ql/javascript/dataflow.html#data-flow-nodes)
- The [source nodes](https://help.semmle.com/QL/learn-ql/javascript/dataflow.html#source-nodes) are places in the program that **introduce a new value**, from which the flow of data may be tracked. They are the source of this new value, either because they create a new object, such as object literals or functions, or because they represent a point where data enters the local data flow graph, such as parameters or property reads.
- The `DataFlow::FunctionNode` is a data flow node that corresponds to a function (expression or declaration)


### :keyboard: Finding jQuery property reads

You have already seen how to find references to the jQuery `$` function. Now find all places in the code that read the property `$.fn`. These results of your query will be of type `DataFlow::Node`.

Notice that `jquery()` returns a value of type `DataFlow::SourceNode`, from which the flow of data may be tracked. Use the auto-completion feature after `jquery().` to browse the predicates of this `DataFlow::SourceNode` type, and their documentation. Look for a predicate that gets you all reads of a property named `fn`.

Write your query in the file `property-read.ql` and submit it.

Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 7: Finding the jQuery plugins

In this step we want to detect the jQuery plugin assigned to our property, 
so basically the right hand side of the assignment in our previous example:

```javascript
$.fn.copyText = function() { ... } // this function is a jQuery plugin
```
But there might be some variation in how this code is written. For example, we might see intermediate assignments to local variables:

```javascript
let fn = $.fn
let f = function() { ... } // this function is a jQuery plugin
fn.copyText = f
```
The use of intermediate variables and nested expressions are typical source code examples that require use of **local data flow analysis** to detect our pattern.


### :book: Local data flow analysis

Data flow analysis helps us answer questions like: does this expression ever hold a value that originates from a particular other place in the program?

We have already encountered **data flow nodes**, described by the `DataFlow::Node` CodeQL class. They are places in the program that have a value. They are returned by useful predicates like `jquery()` in the library.

These nodes are separate and distinct from the AST (Abstract Syntax Tree, which represents the basic structure of the program) nodes, to allow for flexibility in how data flow is modeled.

We can visualize the data flow analysis problem as one of finding paths through a directed graph, where the nodes of the graph are data flow nodes, and the edges represent the flow of data between those elements. If a path exists, then the data flows between those two nodes.

The CodeQL JavaScript data flow library is very expressive. It has several classes that describe different places in the program that can have a value. We have seen `SourceNodes`; there are many other forms such as `ValueNodes`, `FunctionNodes`, `ParameterNodes`, and `CallNodes`. You can find out more in the [documentation](https://help.semmle.com/QL/learn-ql/javascript/dataflow.html).

When we are looking for the flow of information to or from these nodes within a single function or scope, this is called **local data flow analysis**. The CodeQL library has several predicates available on different types of data flow node that reason about local data flow, such as `getAPropertyRead()` that we used in the previous step.


### :keyboard: Find the plugin

Code your query in the file `jquery-plugins.ql`: 
Your query must find a function assigned to `$.fn.<some-property>`. To do so, you will use the predicate of `DataFlow::SourceNode` named `getAPropertySource()`, which finds a source node whose value is stored in a property of this node.

Submit your query.

Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 8: Finding the jQuery plugin options

Now we want to finally find the jQuery plugin options. 
These are the last parameter of the functions that we found in the previous step.


### :keyboard: Write your query

Edit the file `plugin-options.ql` and copy there your previous query.

1. Modify your `from` clause so that the variable that describes that jQuery plugin is of type `DataFlow::FunctionNode`. As the name suggests, this is a data flow node that refers to a function definition. By typing this variable with this type, your query will restrict the possible values for your plugin variable to this type only.
2. Use auto-completion on that variable to browse the predicates of `DataFlow::FunctionNode` and find the one that will get you the last parameter of that function. This parameter is typed `DataFlow::ParameterNode`
3. Modify your select statement to return both the plugin and the parameter.

Submit your query.


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 9: Detecting the sources 

We have now identified places in the program which receive jQuery plugin options, and which may be considered as **sources** of untrusted data. In this step we'll create a predicate that will hold true if a `DataFlow::Node` is such a source. This predicate will be helpful for our last query.

### :book: The `exists` quantifier

So far, we have declared variables in the `from` section of a query clause. Sometimes we need temporary variables in other parts of the query, and don't want to expose them in the query clause. The `exists` keyword helps us do this. It is a **quantifier**: it introduces temporary variables and checks if they satisfy a particular condition.

To understand how `exists` works, [visit the documentation](https://help.semmle.com/QL/ql-handbook/formulas.html#explicit-quantifiers).

Then let's take an example. In a previous step you created a query to get calls to `$`:
```ql
from CallExpr dollarCall
where dollarCall.getCalleeName() = "$"
select dollarCall
```

How would you transform this query to get only calls to `$` that have at least one argument? You could write: 
```ql
from CallExpr dollarCallWithArgument, Expr dollarArg
where dollarCallWithArgument.getCalleeName() = "$" and dollarArg = dollarCallWithArgument.getAnArgument()
select dollarCallWithArgument
```

But in that query `dollarArg` is not used other than as a temporary variable, so another way to write the same thing is to use the `exists` quantifier:
```ql
from CallExpr dollarCallWithArgument
where dollarCallWithArgument.getCalleeName() = "$" and exists(Expr dollarArg | dollarArg = dollarCallWithArgument.getAnArgument())
select dollarCallWithArgument
```

And we can simplify the query to finally write:
```ql
from CallExpr dollarCallWithArgument
where dollarCallWithArgument.getCalleeName() = "$" and exists(dollarCallWithArgument.getAnArgument())
select dollarCallWithArgument
```


### :keyboard: Identify sources

You will transform the previous query you wrote to identify the places in the program which receive jQuery plugin options, into a predicate called `isSource`, by using the `exists` quantifier. 

Edit the file `sources.ql` and fill in the `TODOs` in the template below. 

The `from ... where ... select` query here is just there to test your `isSource` predicate, 
and should give you the same results as your previous query. 

You notice that below the `source` is of type `DataFlow::Node` whereas in your previous query you used
`DataFlow::ParameterNode`. This is ok as a `ParameterNode` is a `Node`. 

Submit your query.

```ql
import javascript

predicate isSource(DataFlow::Node source) {
    exists(<TODO: declare temporary variables> |
      <TODO: clause that identifies your source as a jquery plugin option>
    )
}

from DataFlow::Node node
where isSource(node)
select node
```


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

## Step 10: Putting it all together

Great! you made it to the final step :tada:

We have now identified
- (a) [places in the program]({{repoUrl}}/blob/main/sources.ql) which receive jQuery plugin options, and which may be considered as **sources** of untrusted data, and 
- (b) [places in the program]({{repoUrl}}/blob/main/dollar-arg-node.ql) which are passed to the jQuery `$` function and may be interpreted as HTML, that we consider as **sinks**, in the sense that they will perform actions with the data they receive. We don't want these sinks to receive untrusted data. 

We now want to tie these two together to ask: does the untrusted data from a jQuery plugin option ever *flow* to the potentially unsafe `$` call?

This is also a data flow problem. However, it is larger in scope that the problems we have tackled so far, because the plugin options and the `$` call may be in different functions. We call this a **global data flow** problem.

:book: You can learn more about data flow analysis in JavaScript by reading the [documentation](https://help.semmle.com/QL/learn-ql/javascript/dataflow.html) and this [cheat sheet](https://help.semmle.com/QL/learn-ql/javascript/dataflow-cheat-sheet.html).


In this section we will create a **path problem** query capable of looking for global data flow, by populating this template:
```ql
/**
 * @name Cross-site scripting vulnerable plugin
 * @kind path-problem
 * @id js/xss-unsafe-plugin
 */
import javascript
import DataFlow::PathGraph

class Config extends TaintTracking::Configuration {
  Config() { this = "Config" }
  override predicate isSource(DataFlow::Node source) {
    /** TODO fill me in from step 9 **/ 
  }
  override predicate isSink(DataFlow::Node sink) {
    sink = /** TODO fill me in from step 5 **/
  }
}

from Config config, DataFlow::PathNode source, DataFlow::PathNode sink
where config.hasFlowPath(source, sink)
select sink, source, sink, "Potential XSS vulnerability in plugin."
```
In this template, we just have to define what are the **sources** and the **sinks** that we want to consider, and the CodeQL global data flow library will give us all the paths where data can flow from these sources to these sinks, using the predicate `hasFlowPath` that holds true when tainted data from a given source flows to a sink.

### :keyboard: Finish line! The final taint tracking query

Edit the file `final.ql` and paste the below template:
```ql
/**
* @name Cross-site scripting vulnerable plugin
* @kind path-problem
* @id js/xss-unsafe-plugin
*/

import javascript
import DataFlow::PathGraph

class Configuration extends TaintTracking::Configuration {
  Configuration() { this = "XssUnsafeJQueryPlugin" }

  override predicate isSource(DataFlow::Node source) {
      // Fill me in from Step 9
  }

  override predicate isSink(DataFlow::Node sink) {
      sink = // Fill me in from Step 5
  }
}

from Configuration cfg, DataFlow::PathNode source, DataFlow::PathNode sink
where cfg.hasFlowPath(source, sink)
select sink, source, sink, "Potential XSS vulnerability in plugin."
```

1. Replace the first `TODO` with the definition of `isSource` that you wrote in step 9.
2. We identified the sinks to be the first argument of a call to `$`. Use your step 5 query to replace the second `TODO`.  

This final query should find 5 results in the unpatched Bootstrap codebase. You can browse the results to check that some of them are indeed real vulnerabilities.

Submit your query when you're happy with the results.

Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

Take a look at the [instructions for the next step]({{next_issue}}) to continue.

Ooops! The query you submitted in {{commit}} didn't find the right results. Have a look at the [comment]({{commentUrl}}). 

To submit a new iteration of your query, you just have to push a new commit to the same branch (the default branch or the PR branch).

Congratulations, you have finished the course!

### What's next?

- Read the [tutorial on analyzing data flow in JavaScript and TypeScript](https://help.semmle.com/QL/learn-ql/javascript/dataflow.html).
- Explore the [open-source CodeQL queries and libraries](https://github.com/github/codeql), and [learn how to contribute a new query](https://github.com/github/codeql/blob/master/CONTRIBUTING.md).
- Visit the [GitHub Security Lab website](https://securitylab.github.com)
  - Try out the CodeQL [Capture-the-Flag challenges](https://securitylab.github.com/ctf).
  - Read about more vulnerabilities found using CodeQL on the GitHub Security Lab [research blog](https://securitylab.github.com/research).
  - Get [bounty rewards](https://securitylab.github.com/bounties) for contributing to securing open source by writing CodeQL queries.


