#!/usr/bin/env node
import chalk from 'chalk'
import { execSync } from 'child_process'
const { log } = console
const execute = cmd => {
    try {
        execSync(cmd, { stdio: 'inherit' })
    } catch (error) {
        console.error(chalk.bgRed.black(`${cmd} is failed.`, error))
        process.exit(-1)
    }
}

const repoName = process.argv[2] || 'default-wb-project'
const gitCloneCommand = `git clone https://github.com/mihalukva/base-wb-project.git ${repoName}`
const installDepsCommand = `cd ./${repoName} && npm install`

log(chalk.green('The base WB project is cloning in', chalk.bgCyan.black(repoName)))
execute(gitCloneCommand);
log(chalk.green(`Install dependencies.`));
execute(installDepsCommand);
log(chalk.green(`Everything was good.`));
log(chalk.yellow('To start project type:', chalk.bgCyan.black(`cd ./${repoName} && npm start`)))