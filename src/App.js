import './App.css'
import UsersContainer from './Components/Users/UsersContainer';
import Nav from './Components/Header/Nav'
import Form from './Components/Form/Form';
import UserContextProvider from './store/useContext';
import { useUserContext } from './store/useContext'


const  App = () => {
  const {show} = useUserContext()
  console.log(show)
  return (
    <UserContextProvider>
    <div className='conteiner'>
      <Nav/>
      <UsersContainer />
    </div>
    </UserContextProvider>
  );
}

export default App;
