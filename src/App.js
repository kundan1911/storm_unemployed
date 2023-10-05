import './App.css';
import Auth from './Auth';
import EmployeeAuthButtons from './EmployeeAuthButtons';
import Store from './Store';
import UserInfoDialog from './UserInfoDialog';

function App() {
  return (
    <div className="App">
      {/* Snehaaa */}
      <EmployeeAuthButtons/>
      {/* <Store/> */}
      {/* <Auth/> */}
      <UserInfoDialog/>
    </div>
  );
}

export default App;


// const handleLoginClick = () => {
//   // Implement your login logic here
//   alert('Login clicked'); // Replace with actual login logic
// };

// const handleRegistrationClick = () => {
//   // Implement your registration logic here
//   alert('Registration clicked'); // Replace with actual registration logic
// };