import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

const ComponentFour = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h2>User Name and Age Come From Component 4</h2>
      <h4>Name: {data.user.name}</h4>
      <h4>Age: {data.user.age}</h4>
    </div>
  );
};

export default ComponentFour;
