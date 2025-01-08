import React from 'react';
import { useParams } from 'react-router-dom';


function Contact() {
  const {id} = useParams();
  return (
    <div>Contact
      <p>Id fetched from Route {id}</p>
    </div>
  )
};

export default Contact;