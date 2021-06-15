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

const renderFile = async ({ file, name }) => {
  const Component = await import(`./${inputFolder}/${file}`);

  const result = await ReactDOMServer.renderToStaticMarkup(
    /*#__PURE__*/ React.createElement(Component.default, null),
  );

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
