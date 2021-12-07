
import React, {useState} from 'react';

import Navigation from './components/Navigation';
import Animacion from './components/Animacion';

const App = () => {  

  const [animated, setAnimated] = useState(false);

/*   if (!animated)

  return(
    <Animacion
    setAnimated={setAnimated}
    ></Animacion>
  )
else */
  return(
    <Navigation/>
  )
};

export default App;

