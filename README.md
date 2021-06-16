# Email Builder

an Email builder laveraging the server side rendering of `ReactDOMServer` to create statically generated Email templates

- Preview - `npm start`
- Generate email templates - `npm run build` - results will be in `./build` folder

## Pages

Whatever is put inside `./src/pages/` folder is considered as a new email layout

The basic structure of a mail layout

```jsx
// ./src/pages/WelcomeMail.jsx
import React from 'react';
import { EmailMain, Div } from '../EmailBuilder';

const WelcomeMail = () => {
  return (
    <EmailMain>
      <Div>Hello</Div>
    </EmailMain>
  );
};

export default WelcomeMail;
```

## Config

configuration is stored in `./generator.config.js` file

file structure

```js
// ./generator.config.js
export default {
  outputExtension: 'html',
};
```

### Config options

- outputExtension - output extension of final build files. `deafult: html`

## Develop and test

Email Builder uses Snowpack for development server

use `npm start` to start dev server

### Routing

The development routing is based on react router so all pages should be added `./src/add-routes-here.js`

### Public folder

but global resources in public folder

## Generate/Build Email

use `npm run build` to generate emails based contents in pages folder. generated pages will appear in
`./build` folder

---

## Utils

```js
import { isProd } from '../utils';
```

### isProd

value is true for build and false for development

## Components

Email builder provides a verity of components

```jsx
import {
  EmailMain,
  Div,
  Image,
  Link,
  Paragraph as P,
  List,
  ListItem,
  RawHTML,
  DataList,
} from '../EmailBuilder';
```

### EmailMain

Main email layout

Props:

- styles - inline css - type: `Object`, default: `{}`
- bodyStyles - inline css for body tag - type: `Object`, default: `{}`
- title - page title - type: `String`, default: ` `
- googleFont - google font href - type: `String`, default: ` `, e.g. `https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,300,400,400i,500,600,700&display=swap`

### Div

`<div>` tag with style reset

Props:

- styles - inline css - type: `Object`, default: `{}`

### Image

`<img>` tag with extra features

Props:

- styles - inline css - type: `Object`, default: `{}`
- src - img src tag
- prodSrc - production src, applicable if isProd - type: `String`, default: ` `

### Link

`<a>` with style reset

Props:

- styles - inline css - type: `Object`, default: `{}`

### Paragraph

`<p>` tag with style reset

Props:

- styles - inline css - type: `Object`, default: `{}`

### List

a tag that can act either as `<ul>` or `<ol>`

Props:

- styles - inline css - type: `Object`, default: `{}`
- type - can be either 'ol' or 'ul' - type: `String`, default: `ul`

### ListItem

`<li>` tag with style reset

Props:

- styles - inline css - type: `Object`, default: `{}`

### RawHTML

treat value as raw HTML

example

```jsx
import React from 'react';
import { Div, RawHTML } from '../EmailBuilder';

const text = `<p>
  <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>`;

const Welcome = () => {
  return (
    <Div>
      <RawHTML>{text}</RawHTML>
    </Div>
  );
};

export default Welcome;
```

### DataList

data list based on `<List>` tag

Props:

- styles - inline css - type: `Object`, default: `{}`
- type - can be either 'ol' or 'ul' - type: `String`, default: `ul`
- listItemStyles - inline css for list items - type: `Object`, default: `{}`
- keyField - - unique data key field - type: `String`, default: `id`
- data - list data - type: `Array`, default: `[]`
  - id - type: `String`, isRequired if now keyField is selected
  - description - type: `String, ReactElement`, default: ` `
  - styles - inline css for a perticular data list item - type: `Object`, default: `{}`
  - isRawHTML - weather to treat the string as raw HTML, helpful if you have `<b>` tags - type: `Boolean`, default: `false`

example

```jsx
import React from 'react';
import {
  Div
  DataList,
} from '../EmailBuilder';

const dataListData = [
  {
    id: '1',
    description: 'one',
  },
  {
    id: '2',
    description: 'two',
  },
  {
    id: '3',
    description: (
      <>
        <b>Three</b> Three
      </>
    ),
  },
  {
    id: '4',
    description: '<b>Four</b>',
    isRawHTML: true,
  },
];

const Welcome = () => {
  return (
    <Div>
      <DataList data={dataListData} />
    </Div>
  );
};

export default Welcome;
```

---
