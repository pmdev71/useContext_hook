import './App.css';
import { UserContext } from './context/userContext';
import ComponentOne from './component/ComponentOne';

function App() {
  const user = {
    name: 'Palash mandal',
    age: 24,
  };
  const admin = {
    name: 'Admin',
    age: 30,
  };
  return (
    <div className="App">
      <UserContext.Provider value={{ user, admin }}>
        <ComponentOne />
      </UserContext.Provider>
    </div>
  );
}

export default App;
