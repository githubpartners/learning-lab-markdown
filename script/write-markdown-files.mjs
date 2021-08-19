#!/usr/bin/env node

import fs from 'fs/promises'
import yaml from 'js-yaml'

async function main() {
  const courseDirs = await fs.readdir('courses')

  const courses = await Promise.all(
    courseDirs.map(async (courseDirName) => {
      const repoDir = `./courses/${courseDirName}/${courseDirName}`
      const configFile = await fs.readFile(`${repoDir}/config.yml`, 'utf8')
      return {
        courseDirName,
        repoDir,
        config: yaml.load(configFile),
        courseImagePath: await getCourseImage(courseDirName),
      }
    })
  )

  for (const course of courses) {
    await writeCourseMarkdown(course)
  }

  await writeIndexFile(courses)
}

async function writeCourseMarkdown({ courseDirName, repoDir, config, courseImagePath }) {
  console.log(`### Writing markdown file for ${courseDirName}`)

  let file = `# ${config.title}

_${config.description.trim()}_

![](${courseImagePath})

**Tags**: ${config.tags ? config.tags.join(', ') : 'none'}

---

`

  if (config.before) {
    const actions = listMdValuesRecursive(config.before)
    if (actions) {
      for (const response of actions) {
        try {
          file += await fs.readFile(`${repoDir}/responses/${response}`, 'utf8')
          file += '\n\n'
        } catch (e) {
          console.error(`No file named ${repoDir}/responses/${response}`)
        }
      }
    }
  }

  for (const [stepIndex, step] of config.steps.entries()) {
    const actions = listMdValuesRecursive(step.actions)
    if (actions) {
      for (const response of actions) {
        try {
          file += await fs.readFile(`${repoDir}/responses/${response}`, 'utf8')
          file += '\n\n'
        } catch (e) {
          console.error(`No file named ${repoDir}/responses/${response}`)
        }
      }
    } else {
      file += `## (${stepIndex + 1}) ${step.title || step.course}

_${step.description.trim()}_

[Link](${step.link || step.course})

`
    }
  }

  await fs.writeFile(`${courseDirName}.md`, file)

  console.log(`### Finished writing markdown file for ${courseDirName}`)
  console.log('')
}

async function getCourseImage(courseDirName) {
  const courseImageMetaFile = await fs.readFile(`./courses/${courseDirName}/image.json`, 'utf8')
  const courseImageMeta = JSON.parse(courseImageMetaFile)
  return courseImageMeta?.data?.repository?.openGraphImageUrl
}

function listMdValuesRecursive(xvalue) {
  if (typeof xvalue === 'string') {
    if (xvalue.endsWith('.md')) {
      return xvalue
    }
  } else if (Array.isArray(xvalue)) {
    return xvalue.map(listMdValuesRecursive).flat().filter(Boolean)
  } else if (typeof xvalue === 'object') {
    return Object.values(xvalue).map(listMdValuesRecursive).flat().filter(Boolean)
  }
}

async function writeIndexFile(courses) {
  console.log(`### Writing index.md`)

  let indexFile = `# Learning Lab Courses as Markdown

| | | | |
| -- | -- | -- | -- |
`

  for (const [courseIndex, { courseDirName, config, courseImagePath }] of courses.entries()) {
    if (courseIndex === 0) {
      indexFile += '| '
    }

    indexFile += [
      `[<img src="${courseImagePath}" width="200">](/${courseDirName}.md)`,
      '<br>',
      `[${config.title}](/${courseDirName}.md)`,
      '|',
    ].join(' ')

    if (courseIndex % 4 === 3) {
      indexFile += '\n| '
    }
  }

  await fs.writeFile('./index.md', indexFile)

  console.log(`### Finished writing index.md`)
}

await main()
