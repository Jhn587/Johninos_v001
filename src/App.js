import React, { useEffect } from 'react';

import './App.css';
import {
 PizzaOrderCreateForm 
} from './ui-components';
import {
 GetPizzaOrderForm 
} from './custom-components/GetPizzaOrderForm';


function App() {
  return (

    <div className="App">
      <Example />
      <PizzaOrderCreateForm
        onSubmit={(fields) => {
            // Example function to trim all string inputs
            const updatedFields = {}
            Object.keys(fields).forEach(key => {
                if (typeof fields[key] === 'string') {
                    updatedFields[key] = fields[key].trim()
                } else {
                    updatedFields[key] = fields[key]
                }
            })
            return updatedFields
        }}
      />
      <GetPizzaOrderForm />
    </div>
  );
}

function Example() {
  useEffect(() => {
    document.title = 'Johninos_v001';
  }, []);
}


export default App;
