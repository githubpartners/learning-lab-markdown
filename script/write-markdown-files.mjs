#!/usr/bin/env node

import fs from 'fs/promises'
import yaml from 'js-yaml'

// TODO add the remaining githubtraining courses

async function main () {
  const courseDirs = await fs.readdir('courses')

  for (const courseDirName of courseDirs) {
    await writeCourseMarkdown(courseDirName)
  }

  console.log(`### Writing index.md`)

  let indexFile = `# Learning Lab Courses as Markdown

| | | | |
| -- | -- | -- | -- |
`

  for (const [courseIndex, courseDirName] of courseDirs.entries()) {
    if (courseIndex === 0) {
      indexFile += '| '
    }

    const courseImagePath = await getCourseImage(courseDirName)
    indexFile += `[<img src="${courseImagePath}" width="200">](/${courseDirName}.md) <br> [${courseDirName.split('-').join(' ')}](/${courseDirName}.md) |`

    if (courseIndex % 4 === 3) {
      indexFile += '\n| '
    }
  }

  await fs.writeFile('./index.md', indexFile)

  console.log(`### Finished writing index.md`)
}

async function writeCourseMarkdown (courseDirName) {
  console.log(`### Writing markdown file for ${courseDirName}`)

  const repoDir = `./courses/${courseDirName}/${courseDirName}`

  const config = await yaml.load(await fs.readFile(`${repoDir}/config.yml`, 'utf8'))

  const courseImagePath = await getCourseImage(courseDirName)

  let file = `# ${config.title}

_${config.description}_

![](${courseImagePath})

**Tags**: ${config.tags ? config.tags.join(', ') : 'none'}

---

`

  if (config.before) {
    for (const block of config.before) {
      if (block.body) {
        file += await fs.readFile(`${repoDir}/responses/${block.body}`, 'utf8')
        file += '\n'
      }

      if (block.comments) {
        for (const commentName of block.comments) {
          file += await fs.readFile(`${repoDir}/responses/${commentName}`, 'utf8')
          file += '\n'
        }
      }
    }
  }

  for (const [stepIndex, step] of config.steps.entries()) {
    const actions = listMdValuesRecursive(step.actions)
    if (actions) {
      for (const response of actions) {
        file += await fs.readFile(`${repoDir}/responses/${response}`, 'utf8')
        file += '\n'
      }
    } else {
      file += `## (${stepIndex + 1}) ${step.title || step.course}

_${step.description}_

[Link](${step.link || step.course})

`
    }
  }

  await fs.writeFile(`${courseDirName}.md`, file)

  console.log(`### Finished writing markdown file for ${courseDirName}`)
  console.log('')
}

async function getCourseImage (courseDirName) {
  return JSON.parse(await fs.readFile(`./courses/${courseDirName}/image.json`, 'utf8'))?.data?.repository?.openGraphImageUrl
}

function listMdValuesRecursive (xvalue) {
  if (typeof xvalue === 'string') {
    if (xvalue.endsWith('.md') && !xvalue.includes('docs') && !xvalue.includes('index') && !xvalue.includes('_includes') && !xvalue.includes('{{') && !xvalue.includes('README') && !xvalue.includes('CONTRIBUTING') && !xvalue.includes('LICENSE') && !xvalue.includes('code-of-conduct') && !xvalue.includes('%') && !xvalue.includes('CODE_OF_CONDUCT') && !xvalue.includes('responses')) {
      return xvalue
    }
  } else if (Array.isArray(xvalue)) {
    return xvalue.map(listMdValuesRecursive).flat().filter(Boolean)
  } else if (typeof xvalue === 'object') {
    return Object.values(xvalue).map(listMdValuesRecursive).flat().filter(Boolean)
  }
}

await main()
