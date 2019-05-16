const fs = require('fs');
const path = require('path');

const templateFolder = 'basic';
const challengesFolder = 'Challenges';

const challenges = fs.readdirSync(challengesFolder);
const newChallenge = 'C' + (challenges.length + 1);


const copyFileSync = (source, target) => {

  let targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

const copyFolderRecursiveSync = (source, target, newName) => {
  let files = [];

  //check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(newName));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}


copyFolderRecursiveSync(templateFolder, challengesFolder, newChallenge);