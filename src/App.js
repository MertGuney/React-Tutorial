import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  const test = 35;
  const isAuth = true;
  return (
    <div className='container'>
      <Navbar/>
      <h1 style={{color:"red",fontSize:"100px"}}>Merhaba</h1>
      <h1>1+1 Toplamı:{1+1}</h1>
      <h4 className='header'>{"mert".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {isAuth?<p> Kullanıcı kayıtlı</p>:<p>Kullanıcı kayıtlı değil</p>}
      </div>
      <div>
        <h4>User Component</h4>
        <User/>
      </div>
    </div>
  );
}

export default App;
