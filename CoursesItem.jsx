import React from 'react';

function CoursesItem({id,name,fees}) {
  return (
    <div>
        <p>Course id is {id} </p>
        <p>Course name is {name}</p>
        <p>Course fees is {fees}</p>
    </div>
  )
}

export default CoursesItem;