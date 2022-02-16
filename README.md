# Markdown files generated from Learning Lab courses

`X-` means migrated, `Z-` means won't migrate.

## How to regenerate these files

Note the renames on `X-` and `Z-` files.

1. https://github.com/settings/tokens
2. Make a PAT with repo permissions
3. `script/clone-course-repos`
4. `npm ci`
5. `script/write-markdown-files.mjs`

## heiskr's tips to migrating courses from Learning Lab Markdown

Start with these:

- [Checklist](https://github.com/githublearn/.github/blob/main/.github/ISSUE_TEMPLATE/new-course.md)
- [Quickstart guide](https://github.com/githublearn/quickstart-guide)
- [Course template](https://github.com/githublearn/template-template)

Learning Lab courses have varying degrees of content depth, relevance, and up-to-date-ness. We don't want these courses to have a high maintenance requirements, and we know learners don't like long courses.

So, in a word: **EDIT**.

- See a nice long body of copy for the learner to read? Cut it down to a sentence or two and then **link to GitHub Docs articles** instead. Docs articles are more likely to stay up-to-date.
- **Cut out administrative steps**, use `gh cli` instead. (Close issue, open PR, approve PR... if that's not the objective, automate it.)
- **Combine steps down.** For example, add upload action, read text/close issue, add download action, read text/close issue... can all be one step instead.
- Cut steps that are **tangent** to the learning objectives. Its fun to show off lots of features, but that can be really overwhelming and more to maintain.
- Where possible, update courses to be code-language agnostic. Markdown is the universal language of GitHub.
- If you really can't get it down to three to five steps, consider splitting the course into smaller courses.
