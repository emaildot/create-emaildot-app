import React from 'react';
import {
  EmailMain,
  Div,
  Image,
  Link,
  Paragraph as P,
  List,
  ListItem,
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

const Goodbye = () => {
  return (
    <EmailMain
      title="Bye"
      googleFont="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,300,400,400i,500,600,700&display=swap"
      bodyStyles={{
        fontFamily:
          "'IBM Plex Sans', Helvetica Neue, Helvetica, Roboto, Segoe UI, sans-serif",
      }}
    >
      <Div>Goodbye</Div>
      <Image
        src="images/siddhesh-mangela-IchtL-8qllM-unsplash.jpg"
        alt="Pyramids"
        prodSrc="https://images.unsplash.com/photo-1620191648261-33835467aa3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
      />

      <Link href="https://github.com/siddacool/email-builder" target="_blank">
        Homepage
      </Link>

      <P>Yoooo</P>

      <List type="ol">
        <ListItem>One</ListItem>
        <ListItem>two</ListItem>
        <ListItem>three</ListItem>
      </List>

      <DataList data={dataListData} />
    </EmailMain>
  );
};

export default Goodbye;
