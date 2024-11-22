import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

const questions = [ { type: 'input', name: 'link', message: 'Type the link you want to convert into qr:'}];

inquirer.prompt(questions).then(answers => {
    var qr_svg = qr.image(answers.link, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    var svg_string = qr.imageSync('answers.link', { type: 'png' });
    fs.writeFile('message.txt', answers.link, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});