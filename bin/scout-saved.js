const program = require('commander');
const saved = require('../commands/saved');

program
    .command("show")
    .description('Show the saved/bookmarked results')
    .action(() => saved.show())

program
    .command("delete")
    .description('Delete the saved/bookmarked result(s)')
    .option("--id <id>", "id of the saved result")
    .action(cmd => saved.delete(cmd.id))

program.parse(process.argv);