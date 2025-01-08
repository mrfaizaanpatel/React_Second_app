import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function About() {
  let[searchParam, setSearchParams]= useSearchParams();
  const navigate=useNavigate();
  console.log(searchParam.get("city"));
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>{navigate("/")}}>Click Here</button>
    </div>
  )
}

export default About;


// /about?----=-----