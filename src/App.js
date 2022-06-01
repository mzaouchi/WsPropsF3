import './App.css';
import Child from './Components/Child';

function App() {
  var name = 'Mahmoud'
  let age = 24
  const pays = ['Tunis','France','Espagne','Italie']
  const user = {car :'Kia',city:'Lac',lolo:{bobo:'gomycode',fofo:'jojo'}}
  var salle = 'Lagos'
  const handleAlert=()=>{
    return alert('Hello Props')
  }
  const handleNAlert=(a)=>{
    return alert(`Hello ${a}`)
  }
  const show = false
  return (
   <div>
     <h1> WS PROPS</h1>
     <Child name={name} age={age}  pays={pays} user={user} salle={salle} handleAlert={handleAlert} handleNAlert={handleNAlert} show={show}>
       <h3>Props Children</h3>
       <img src='/1.png' alt='Not Found'/>
       <h2>Assad Video</h2>
     </Child>


   </div>
  );
}

export default App;
