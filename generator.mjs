import React from 'react';
import { promises as fs } from 'fs';
import Promise from 'promise';
import fsPure from 'fs';
import ReactDOMServer from 'react-dom/server.js';
import { kebabize } from './lib/EmailBuilder/utils.js';

const inputFolder = 'lib/pages';
const outputFolder = 'build';

const getFileList = () => {
  let fileList = [];
  fsPure.readdirSync(inputFolder).forEach((file) => {
    let name = file.replace('.js', '');
    name = kebabize(name);

    fileList.push({
      name,
      file,
    });
  });

  return fileList;
};

const wrapper = (result) => {
  const start = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body> `;

  const end = ` </body>
  </html>`;

  return `${start}${result}${end}`;
};

const renderFile = async ({ file, name }) => {
  const Component = await import(`./${inputFolder}/${file}`);

  let result = await ReactDOMServer.renderToStaticMarkup(
    /*#__PURE__*/ React.createElement(Component.default, null),
  );

  result = wrapper(result);

  fs.writeFile(`${outputFolder}/${name}.html`, result);
};

const start = async () => {
  try {
    const fileListPromises = getFileList();

    await Promise.all(fileListPromises).then((values) => {
      values.forEach((value) => {
        renderFile(value);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

start();
