'use strict';

const cmd = {
  command: 'edit',
  description: 'Edit front matter of a set of files',
  builder: (yargs) => (
    yargs.option('f', {
      alias: 'folders',
      type: 'array',
      description: 'set of folders to include',
    }).option('x', {
      alias: 'extensions',
      type: 'array',
      description: 'set of extensions to include',
      default: ['md'],
      defaultDescription: 'Only markdown included by default'
    })
  ),
  async handler(/* argv */) {
    console.log('calling from: %s', process.cwd());
  },
};

module.exports = cmd;

