#!/usr/bin/env node

const {execSync} = require('child_process');
const { readSync } = require('fs');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }catch(err){
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nevobit/react-typescript-template ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i -g pnpm && pnpm install`;

console.log(`Clonning the repository with name ${repoName}`);
const checked = runCommand(gitCheckoutCommand);
if(!checked) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const intalledDeps = runCommand(installDepsCommand);
if(!intalledDeps) process.exit(-1);

console.log('Congratulations! You are ready. Follow the following commands to start');
console.log(`cd ${repoName} && pnpm install`);
