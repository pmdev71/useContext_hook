import React, { useContext } from 'react';
import ComponentFour from './ComponentFour';
import { UserContext } from '../context/userContext';

const ComponentThree = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h2>Admin Name and Age Come From Component 3</h2>
      <h4>Name: {data.admin.name}</h4>
      <h4>Age: {data.admin.age}</h4>

      <ComponentFour />
    </div>
  );
};

export default ComponentThree;
