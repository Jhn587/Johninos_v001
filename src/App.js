import logo from './logo.svg';
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

export default App;
