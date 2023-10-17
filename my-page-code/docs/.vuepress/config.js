const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../days');

const sidebarConfig = [];

const files = fs.readdirSync(directoryPath);

files.forEach(function (file) {
  console.log(file);
  sidebarConfig.push({
    title: `${file.split('.')[0]}`,
    path: `/days/${file}`,
  });
});


module.exports = {
  title: '🍉的失业生活',
  description: '🍉',
  themeConfig: {

    sidebar: [{
      title: '日记',
      collapsable: false,
      children: sidebarConfig,
    }]
  },
  dest: '../docs',
}