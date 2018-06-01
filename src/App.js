import * as React from 'react';
import { ChildComponent } from './Components/ChildComponent';
import './App.css';

class App extends React.Component<{},{}> {
  render() {
    return (
      <ChildComponent title="Modal Preguntas" logo="logo-company" nameCompany={<h2>Banco de Crédito</h2>}>
        {(name) => (name)? <div>{name}</div>: false}
      </ChildComponent>
    );
  }
}

export default App;
