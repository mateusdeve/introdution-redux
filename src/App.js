import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { login } from './store/login';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.login.user);
  console.log(data);
  function handleSubmit(e){
    e.preventDefault();
    dispatch(login({username, password}))
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Usuário:</label>
        <input value={username} onChange={e => setUsername(e.target.value) } style={{display: 'block'}} type="text" id="name"/>

        <label htmlFor="senha">Senha:</label>
        <input value={password} onChange={e => setPassword(e.target.value) } style={{display: 'block'}} type="text" id="senha"/>
        <button>entrar</button>
        <p>{data?.email}</p>
      </form>
    </div>
  );
}

export default App;
