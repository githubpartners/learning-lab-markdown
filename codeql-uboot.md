# CodeQL U-Boot Challenge (C/C++)

_Learn to use CodeQL, a query language that helps find bugs in source code. Find 9 remote code execution vulnerabilities in the open-source project Das U-Boot, and join the growing community of security researchers using CodeQL._

![](https://avatars.githubusercontent.com/u/2036237?s=400&v=4)

**Tags**: none

---

## Welcome to the CodeQL U-Boot Challenge for C/C++

We created this course to help you quickly learn CodeQL, our query language and engine for code analysis. The goal is to find several remote code execution (RCE) vulnerabilities in the open-source software known as U-Boot, using CodeQL and its libraries for analyzing C/C++ code. To find the real vulnerabilities, you'll need to write a sequence of queries, making them more precise at each step of the course.

### More detail

The goal is to find a set of 9 remote-code-execution vulnerabilities in the U-Boot boot loader. These vulnerabilities were originally discovered by GitHub Security Lab researchers and have since been fixed. An attacker with positioning on the local network, or control of a malicious NFS server, could potentially achieve remote code execution on the U-Boot powered device. This was possible because the code read data from the network (that could be attacker-controlled) and passed it to the length parameter of a call to the `memcpy` function. When such a length parameter is not properly validated before use, it may lead to exploitable memory corruption vulnerabilities.

U-Boot contains hundreds of calls to both `memcpy` and `libc` functions that read data from the network. You can often recognize network data being acted upon through use of the `ntohs` (network to host short) and `ntohl` (network to host long) functions or macros. These swap the byte ordering for integer values that are received in network ordering to the host's native byte ordering (which is architecture dependent).

In this course, you will use [CodeQL](https://codeql.com) to find such calls. Many of those calls may actually be safe, so throughout this course you will refine your query to reduce the number of false positives, and finally track down the unsafe calls to `memcpy` that are influenced by remote input.

Upon completion of the course, you will have created a CodeQL query that is able to find variants of this common vulnerability pattern.

## Step 1: Know where to get help

Bookmark these useful documentation links:

- [Writing a basic C++ Code QL query](https://lgtm.com/help/lgtm/console/ql-cpp-basic-example)
- [Introduction to CodeQL](https://codeql.github.com/docs/writing-codeql-queries/introduction-to-ql/)
- [CodeQL Docs](https://codeql.github.com/docs/) 

If you get stuck during this course and need some help, the best place to ask for help is on the GitHub Security Lab Slack. Request an invitation from the [Security Lab Get Involved page](https://securitylab.github.com/get-involved) and ask in the channel `#codeql-writing`. There are also sample solutions in [the course repository]({{repoUrl}}/tree/main/solutions), but please try to solve the tasks on your own first!

Hope this is exciting! Please close this issue now, then wait for the next set of instructions to appear in a comment below.


## Step 2: Setup your environment

We will use the CodeQL extension for Visual Studio Code. You will take advantage of IDE features like auto-complete, contextual help and jump-to-definition.

Don't worry, you'll do this setup only once, and you'll be able to use it for future CodeQL development.

Follow the instructions below. 



### :keyboard: Activity: Set up
1. This course is using GitHub actions. Please make sure that GitHub actions is enabled on this repository: [Enable actions]({{repoUrl}}/actions)
1. Install the [Visual Studio Code IDE](https://code.visualstudio.com/).
1. Go to the [CodeQL starter workspace repository](https://github.com/github/vscode-codeql-starter/), and follow the instructions in that repository's README. When you are done, you should have the CodeQL extension installed and the `vscode-codeql-starter` workspace open in Visual Studio Code.
1. Download and unzip [this U-Boot CodeQL database](https://downloads.lgtm.com/snapshots/cpp/uboot/u-boot_u-boot_cpp-srcVersion_d0d07ba86afc8074d79e436b1ba4478fa0f0c1b5-dist_odasa-2019-07-25-linux64.zip), which corresponds to revision [`d0d07ba`](https://github.com/u-boot/u-boot/tree/d0d07ba86afc8074d79e436b1ba4478fa0f0c1b5).
1. Import the database into Visual Studio Code ([see documentation](https://help.semmle.com/codeql/codeql-for-vscode/procedures/using-extension.html#choosing-a-database)). This is the database that we'll be running queries on for the duration of this course.
1. Clone [this course repository]({{repoUrl}}) on your local machine.
1. Add the course repository to your Visual Studio Code starter workspace, by navigating to `File -> Add Folder to Workspace...`. If you open this folder you should see several files in there, including `qlpack.yml` and `README.md`.

When you're done setting up, please close this issue, then wait for the next set of instructions to appear in a comment below.


Let's [continue to the next step]({{next_issue}}).


## Step 3: Your first query

You will now run a simple CodeQL query, to understand its basic concepts and get familiar with your IDE.

### :keyboard: Activity: Run a CodeQL query

1. Edit the file `3_function_definitions.ql` with the following contents:
    ```ql
    import cpp

    from Function f
    where f.getName() = "strlen"
    select f, "a function named strlen"
    ```
    Don't copy / paste this code, but instead type it slowly. You will see the CodeQL auto-complete suggestions in your IDE as you type.
    
    - After typing `from` and the first letters of `Function`, the IDE will propose a list of available _classes_ from the CodeQL library for C/C++. This is a good way to discover what classes are available to represent standard patterns in the source code.
    - After typing `where f.` the IDE will propose a list of available _predicates_ that you can call on the variable `f`. 
    - Type the first letters of `getName()` to narrow down the list.
    - Move your cursor to a predicate name in the list to see its documentation. This is a good way to discover what predicates are available and what they mean.

1. Run this query: Right-click on the query editor, then click **CodeQL: Run Query**.
1. Inspect the results appearing in the results panel. Click on the result hyperlinks to navigate to the corresponding locations in the U-Boot code. Do you understand what this query does? You probably guessed it! This query finds all functions with the name `strlen`.

Now it's time to submit your query. You will have 2 choices to do that, and we'll explain both of them in the comments below. Once you have chosen your method, submit your answer! 

Read carefully: you will need to follow the same steps to submit your answers to later steps. You can always come back to this issue later to check the submission instructions.


### Submission: Commit your query via a Pull Request

The first method to submit your query is via a Pull Request. Using a Pull request has several advantages:

- If you are following this course with a mentor, or with co-learners, you may want them to interact with your PR via review, additional commits, etc.
- Creating a PR is good practice when contributing to shared code.
- You will be able to track the execution of the query checker directly in the PR.

However this workflow is bit more involved than just directly committing to main for the purposes of this course.

To submit this query via Pull Request, you can follow the following workflow:

1. First, refresh your main branch, commit your changes to a new branch, and push them:
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



### Submission: Commit your query directly to main

This method is simpler. You won't have to juggle between branches, rebase onto main, or create Pull Requests. However, merging directly to main is not a good practice when you are contributing to a shared code base, so if you choose this method, please don't take this bad habit home with you!

To submit this query via a direct commit to main, you can follow this workflow:

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


Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


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
  import cpp

  from Function f
  where f.getName() = "strlen"
  select f, "a function named strlen"
  ```

</details>

### Imports

At the top of the query is `import cpp`. This is an **import statement**. It brings into scope the standard CodeQL library that models C/C++ code, allowing us to use its features in our query. We'll use this library in every query, and in later steps we'll also use some more specialized libraries.

### Classes

In the `from` section, there is a declaration `Function f`. Here we declare a variable named `f` which has the type `Function`. `Function` is a **class** declared in the standard library (you can jump to the definition using <kbd>F12</kbd>). A class represents a collection of values, in this case the collection of all C/C++ functions in the source code.

### Predicates

Now look at the expression `f.getName()` in the `where` section. Here we call the predicate `getName` on the variable `f` of type `Function`. Predicates are the building blocks of a query: they express logical properties that we want to hold. Some predicates return results (like `getName`), and some predicates do not (they just assert that a property must be true).

So far your query finds all functions with the name `strlen`. It does this by asserting that the result of `f.getName()` is equal to the string `"strlen"`.


### :keyboard: Activity: Find all functions named `memcpy`

1. Edit the file `4_memcpy_definitions.ql`
1. Copy the query you wrote in step 3 into this file, and modify the `where` clause so that the query finds all definitions of functions named `memcpy` instead.
1. Run your query on the U-Boot codebase to verify the results.
1. Submit your solution as explained previously.


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 5: Using different classes and their predicates

We want to identify integer values that are supplied from network data. A good way to spot those is to look for use of network ordering conversion macros such as `ntohl`, `ntohll`, and `ntohs`.

In the `from` section of the query, you declare some variables, and state the  types of those variables. The type tells us what the possible values are for the variable.

In the previous query you were querying for values in the class `Function` to find functions in the source code. We have to query a different type to find macros in the source code instead. Can you guess its name?

*NOTE: These Network ordering conversion utilities can be macros or functions depending on the platform. In this course, we are looking at a Linux database, where they are macros.*



### :keyboard: Activity: Find all `ntoh*` macros

1. Edit the file `5_macro_definitions.ql`
1. Write a query that finds the definitions of the macros named `ntohs`, `ntohl` or `ntohll`. Use the auto-completion in the Visual Studio Code extension to guide you:
    - Wait a moment after typing `from` to get a list of available classes in the CodeQL standard library for C/C++. Which class in this list represents macros? Create a variable with this class as its type.
    - In the `where` section, type `<your_variable_name>` followed by a dot `.`, and wait a moment to get the list of predicates available for a value in the variable's type. Hover over each predicate to see the inline documentation.
    - Which predicate will give us the name of a macro?
    - Use the `or` keyword to combine multiple conditions where you want at least one condition to be met. Here we are interested in three possible macro names.
1. To write a more compact query that searches for all three macros at once, instead of using three cases combined by `or` you have 2 choices:
    - Use a regular expression. Check out the predicate `string::regexpMatch` in the [built-in predicates for string](https://help.semmle.com/QL/ql-spec/language.html#built-ins-for-string). CodeQL uses the [`java.util.Pattern` regexp conventions](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html).
    - Use a [_set literal expression_](https://help.semmle.com/QL/ql-handbook/expressions.html#set-literal-expressions) to equate `<your_variable_name>` to a list of choices `<your_variable_name> in ["bar", "baz", "quux"]`
1. Once you're happy with the results, submit your solution.


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 6: Relating two variables

In step 4, you wrote a query that finds the **definitions** of functions named `memcpy` in the codebase. Now, we want to find all the **calls** to `memcpy` in the codebase.

One way to do this is to declare two variables: one to represent functions, and one to represent function calls. Then you will have to create a relationship between these variables in the `where` section, so that they are restricted to only functions that are named `memcpy`, and calls to exactly those functions.


### :keyboard: Activity: Find all the calls to `memcpy`

1. Edit the file `6_memcpy_calls.ql`
1. Use the auto-completion feature to find the class that represents function calls, and declare a variable that belongs to this class.
1. Use auto-completion again on your function call variable to guess the predicate that tells us the target function that is being called.
1. Combine this with your logic from step 4 to make sure the target function is named `memcpy`.
1. Once you're happy with the results, submit your solution.

**Tip:** You can have a look at the following C++ example. Note that your query will be simpler as you won't need to consider the `declaringType`.

> Finds calls to `std::map<...>::find()`
>
> ```ql
> import cpp
>
> from FunctionCall call, Function fcn
> where
>   call.getTarget() = fcn and
>   fcn.getDeclaringType().getSimpleName() = "map" and
>   fcn.getDeclaringType().getNamespace().getName() = "std" and
>   fcn.hasName("find")
> select call
> ```

**Note:** Once you have good results, you can try to make your query more compact by omitting the intermediate `Function` variable. The 2 queries below are equivalent:

```ql
from Class1 c1, Class2 c2
where
  c1.getClass2() = c2 and
  c2.getProp() = "something"
select c1
```

```ql
from Class1 c1
where c1.getClass2().getProp() = "something"
select c1
```


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 7: Relating two variables, continued

In step 5, you wrote a query that finds the **definitions** of macros named  `ntohs`, `ntohl` and `ntohll` in the codebase. Now, we want to find all the **invocations** of these macros in the codebase.

This will be similar to what you did in step 6, where you created variables for functions and function calls, and restricted them to look for a particular function and its calls.

**Note**: A macro invocation is a place in the source code that calls a particular macro. This is comparable to how a function call is a place in the source code that calls a particular function.


### :keyboard: Activity: Find all the invocations of `ntoh*` macros

This query will look like the previous one, but with macros instead of functions.

1. Edit the file `7_macro_invocations.ql`
1. Use the auto-completion to find the class that represents macro invocations, and declare a variable that belongs to this class.
1. Use auto-completion again on your macro invocation variable, to find the predicate that tells us the target macro being invoked.
1. Combine this with your logic from step 5 to make sure the target is one of the `ntoh*` macros.
1. As in the previous step, you can make your query more compact by omitting superfluous variable declarations.
1. Once you're happy with the results, submit your solution.

Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 8: Changing the selected output

In the previous step, you found invocations of the macros we are interested in. Modify your query to find the top-level **expressions** these macro invocations expand to.

**Note**: An expression is a source code element that can have a value at runtime. Invoking a macro can bring various source code elements into scope, including expressions.


### :keyboard: Activity: Find the expressions that correspond to macro invocations

As before, if you don't know how a piece of source code is represented in the library, you can use the auto-completion and contextual help to discover the classes and predicates you need.

1. Edit the file `8_macro_expressions.ql` with the previous query
2. Use the [`getExpr()` predicate](https://help.semmle.com/qldoc/cpp/semmle/code/cpp/Macro.qll/predicate.Macro$MacroInvocation$getExpr.0.html) in the `select` section, to return the wanted expressions. 
3. Once you're happy with the results, submit your solution.



Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 9: Write your own class

In this step we will learn how to write our own CodeQL classes. This will help us make the logic of our query more readable, easier to reuse, and easier to refine.

We'd like to find the same results as in the previous step, i.e. the top level expressions that correspond to the `ntohl`, `ntohs` and `ntohll` macro invocations. It would be useful if we could refer to all such expressions directly, just like we can use `MacroInvocation` from the standard library to refer to all macro invocations.

We will define a **class** to describe exactly this set of expressions, and use it in the last step of this course.

The `Expr` class is the set of _all_ expressions, and we are interested in a more specific set of expressions, so the class we write will be a **subclass** of `Expr`.

### The `exists` quantifier

So far, we have declared variables in the `from` section of a query clause. Sometimes we need temporary variables in other parts of the query, and don't want to expose them in the query clause. The `exists` keyword helps us do this. It is a **quantifier**: it introduces temporary variables and checks if they satisfy a particular condition.

To understand how `exists` works, [visit the documentation](https://codeql.github.com/docs/ql-language-reference/formulas/#explicit-quantifiers).

Then look at this example from the “[Find the thief](https://codeql.github.com/docs/writing-codeql-queries/find-the-thief/)” CodeQL tutorial:

```ql
from Person t
where exists(string c | t.getHairColor() = c)
select t
```

This query selects all persons with a hair color that is a `string`. So we'll get all persons that are not bald, since we are able to find a `c` that defines their hair color. We don't really need `c` in the query except to know that it exists.


### :keyboard: Activity: Write your own `NetworkByteSwap` class

1. We recommend that you first [read the documentation on CodeQL classes](https://codeql.github.com/docs/ql-language-reference/types/#classes).
1. Edit the file `9_class_network_byteswap.ql` with the template below:

    ```ql
    import cpp

    class NetworkByteSwap extends Expr {
      NetworkByteSwap () {
        // TODO: replace <class> and <var>
        exists(<class> <var> |
          // TODO: <condition>
        )
      }
    }

    from NetworkByteSwap n
    select n, "Network byte swap"
    ```

1. This class `extends Expr`, which means it is a subclass of `Expr`, and it begins by taking all values from `Expr`. Now you need to restrict it to only the expressions we are interested in, which satisfy the condition of step 8.
   - You can do this by editing the [characteristic predicate](https://codeql.github.com/docs/ql-language-reference/types/#characteristic-predicates) `NetworkByteSwap() { ... }`. The template includes the `exists` quantifier, which will help.
   - Declare a temporary variable in the `exists` that refers to a macro invocation.
   - Constrain this macro invocation in the condition section of the `exists`. Use the same logic from the `where` section of your query in step 8.
   - How is the macro invocation related to the expression? Use the same logic from the `select` section of your query in step 8. You can refer to the macro invocation using the name of the variable you created, and you can refer to the expression using the `this` variable.
1. Once you're happy with the results, submit your solution.


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


## Step 10: Data flow and taint tracking analysis

Great! You made it to the final step!

In step 9 we found expressions in the source code that are likely to have integers supplied from remote input, because they are being processed with invocations of `ntoh`, `ntohll`, or `ntohs`. These can be considered **sources** of remote input.

In step 6 we found calls to `memcpy`. These calls can be unsafe when their length arguments are controlled by a remote user. Their length arguments can be considered **sinks**: they should not receive user-controlled values without further validation.

Combining these pieces of information,
we know that code is vulnerable if tainted data **flows** from a network integer source to a sink in the length argument of a `memcpy` call.

However, how do we know whether data from a particular source might reach a particular sink? This is known as **data flow** or **taint tracking** analysis. Given the number of results (hundreds of `memcpy` calls and a large number of macro invocations), it would be quite a lot of work to triage all these cases manually.

To make our triaging job easier, we will have CodeQL do this analysis for us.

You will now write a query to track the flow of tainted data from network-controlled integers to the `memcpy` length argument. As a result you will find 9 real vulnerabilities!

To achieve this, we’ll use the CodeQL [taint tracking](https://codeql.github.com/docs/codeql-language-guides/analyzing-data-flow-in-cpp/) library. This library allows you to describe **sources** and **sinks**, and its predicate `hasFlowPath` holds true when tainted data from a given source flows to a sink.


### :keyboard: Activity: Write a taint tracking query

1. Edit the file `10_taint_tracking.ql` with the template below. Note the annotation `path-problem` and the pattern used in the `select` section. This pattern allows CodeQL to interpret these results as a "path" through the code, and display the path in your IDE.
1. Copy and paste your definition of the `NetworkByteSwap` class from step 9.
1. Write the `isSource` predicate.  This should recognize an expression in an invocation of `ntohl`, `ntohs` or `ntohll`.
    - You already described these expressions in the `NetworkByteSwap` class from step 9. Here we need to check that the source corresponds to a value that belongs to this class.
    - To check if a value belongs to CodeQL class, use the `<value> instanceof <myclass>` construct.
    - Note that the `source` variable is of type `DataFlow::Node`, while your `NetworkByteSwap` class is a subclass of `Expr`, so we cannot just write `source instanceof NetworkByteSwap`. (Try this and the compiler will give you an error.) Use auto-completion on `source` to discover the predicate that lets us view it as an `Expr`.
1. Write the `isSink` predicate: The sink should be the size argument of calls to `memcpy`.
    - Use auto-completion to find the predicate that returns the `n`th argument of a function call.
    - Use the predicate you discovered when writing `isSource` to view the `sink` as an `Expr`.
1. Run your query. Note that the first run will take a little longer than the previous queries, since data flow analysis is more complex.

Submit your query when you're happy with the results.

**Tip:** For a complete example, read [this article](https://securitylab.github.com/research/cve-2018-4259-macos-nfs-vulnerability).

```ql
/**
 * @kind path-problem
 */

import cpp
import semmle.code.cpp.dataflow.TaintTracking
import DataFlow::PathGraph

class NetworkByteSwap extends Expr {
  // TODO: copy from previous step
}

class Config extends TaintTracking::Configuration {
  Config() { this = "NetworkToMemFuncLength" }

  override predicate isSource(DataFlow::Node source) {
    // TODO
  }
  override predicate isSink(DataFlow::Node sink) {
    // TODO
  }
}

from Config cfg, DataFlow::PathNode source, DataFlow::PathNode sink
where cfg.hasFlowPath(source, sink)
select sink, source, sink, "Network byte swap flows to memcpy"
```


Congratulations, looks like the query you introduced in {{commit}} finds the correct results!

If you created a pull request, merge it.

Let's [continue to the next step]({{next_issue}}).


Ooops! The query you submitted in {{commit}} didn't find the right results. Please take a look at the [comment]({{commentUrl}}) and try again.

To submit a new iteration of your query, you just have to push a new commit to the same branch (`main` or the PR branch).


Congratulations, you have finished the course! You can merge your last outstanding Pull Request if you have one. Don't hesitate to give us feedback; find us at <https://securitylab.github.com/get-involved>. And recommend this course to your friends if it was useful!


