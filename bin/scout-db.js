const program = require('commander');
const db = require('../commands/db')

program
    .command('set')
    .description('Set-up PostgreSQL database')
    .action(() => db.set());

program.parse(process.argv)