const program = require('commander');

program
    .command('web')
    .description('Search the query through the web')
    .option(
        '--coin <type>',
        'Add specific coin types in CSV format',
        'BTC,ETH,XRP'
    )
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(cmd => check.price(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
    program.outputHelp();
}