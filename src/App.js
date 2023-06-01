import { useContext, useState, createContext } from 'react';
import './App.css';
//import P from 'prop-types';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContexte = createContext();


// eslint-disable-next-line
const Div = ({ children  }) => {
  return (
      <>
        <H1 />
        <P />
      </>
    ) 
};

// eslint-disable-next-line
const H1 = () => {
  const { contextState: {title, counter} } = useContext(GlobalContexte);
  return <h1>{title} {counter}</h1>
};

// eslint-disable-next-line
const P = () => {
  const { contextState: {body, counter}, contextState, setContextState } = useContext(GlobalContexte);
  return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>
};

function App() {
  const [ contextState, setContextState ] = useState(globalState)
  
  return (
    <GlobalContexte.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContexte.Provider>
  )
}

export default App;
