import React from 'react';
import { EmailMain, Div, Image } from '../EmailBuilder';

const Goodbye = () => {
  return (
    <EmailMain title="Bye">
      <Div>Goodbye</Div>
      <Image
        src="images/siddhesh-mangela-IchtL-8qllM-unsplash.jpg"
        alt="Pyramids"
        prodSrc="https://images.unsplash.com/photo-1620191648261-33835467aa3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
      />
    </EmailMain>
  );
};

export default Goodbye;
