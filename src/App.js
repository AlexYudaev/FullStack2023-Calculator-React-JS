import { useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Screen from './Components/Screen';

import Wrapper from './Components/UI/Wrapper';

function App() {

  const [total, setTotal] = useState(0);
  const [screenString, setScreenString] =  useState(0)

  function onClickButton(value){

    console.log('clicked on ' + value);

    switch(value) {
      case '=' :
        setTotal(eval(screenString));
        setScreenString(eval(screenString));
      break;

      // case '+' :


      // break;

      // case '-' :

      // break;

      // case '/' : 

      // break;
      
      // case '*' : 

      // break;
      

      default: 
      if(screenString === 0){
        setScreenString( value)
      } else {
        setScreenString(screenString + value)
      }
    }  
  }


  return (
    <div className="App">
      <Wrapper>
          <Screen screenString={screenString} />
          <Buttons onClickButton={onClickButton} />
      </Wrapper>    
    </div>
  );
}

export default App;
