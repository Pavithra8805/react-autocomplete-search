import { useState } from 'react'
import './App.css'
import Resources from './resources/countryData.json'
function App() {
  const [value,setValue] = useState("")
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  }
  const handleKey = (e) => {
    if(e.key==='Escape'){
      console.log(e.key);
      document.getElementById('dropdown').style.display = 'none';
    }else{
      document.getElementById('dropdown').style.display = 'inline';
    }
  }
  return (
    <>

      <input type="text" value={value} onChange={onChange} onKeyDown={handleKey}/>
      <button onClick={() => onSearch(value)}>Search</button>
      <div id='dropdown'>
        {Resources.filter((item) => {
          const searchTerm = value.toLowerCase();
          const fullName = item.name.toLowerCase();

          return(
            searchTerm && 
            fullName.startsWith(searchTerm) &&
            fullName !== searchTerm
          );
        })
        .slice(0,10)
        .map((item) => (
          <div
            onClick={() => onSearch(item.name)}
            key={item.name}
          >
            {item.name}
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App

