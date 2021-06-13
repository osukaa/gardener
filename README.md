# gardener

> CLI tool for managing my digital garden

I created this tool because I already had a bunch of files in my obsidian vault, and in a different Gatsby site that I was trying to unify, and needed to setup the front matter in a standard way.

In essence this is a tool to manipulate files, or at least I'm trying to, because I generally use 3 types of files, `.md`, `.mdx`, `.apib`. 

_**Disclaimer:** This is tool is tailored to how I handle my markdown files._

## Commands

### Edit

The edit command will allow you to add values to the front matter of a set of markdown files.

If you negate a value, it will assume intent to delete that property.

It will be greedy by default, meaning that it will recursively find all markdown files in the current working directory.

The default extension it will look for is `.md`, you can add more extensions via `--extensions`.

```bash
$ gardener edit --frontmatter.tags weekly, topic
$ gardener edit --folders 'weekly/**' --frontmatter.tags weekly, topic
$ gardener edit --extensions mdx, apib
```
