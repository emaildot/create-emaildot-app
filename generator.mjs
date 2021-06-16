import React from 'react';
import { promises as fs } from 'fs';
import Promise from 'promise';
import fsPure from 'fs';
import ReactDOMServer from 'react-dom/server';
import jsBeautify from 'js-beautify';
import { kebabize } from './lib/utils';
import generatorConfig from './generator.config';

const { outputExtension = 'html' } = generatorConfig || {};

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
  const start = `<!DOCTYPE html>`;

  let toReturn = `${start}${result}`;

  toReturn = jsBeautify.html(toReturn);

  return toReturn;
};

const renderFile = async ({ file, name }) => {
  const Component = await import(`./${inputFolder}/${file}`);

  let result = await ReactDOMServer.renderToStaticMarkup(
    /*#__PURE__*/ React.createElement(Component.default, null),
  );

  result = wrapper(result);

  fs.writeFile(`${outputFolder}/${name}.${outputExtension}`, result);
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
