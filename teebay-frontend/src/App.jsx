import { Login } from './components/Login';
import SignUp from './components/SignUp';
import TestTable from './components/TestTable';

function App() {
  const handleLogin = () => {
    // Implement your login logic here
    console.log('User logged in'); // For demonstration
  };

  return (
    <div>
      <Login />
      <TestTable />
      <SignUp/>
    </div>
  );
}

export default App;
