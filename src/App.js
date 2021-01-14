import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <ContactCard name={"John Doe"} email={"johndoe@gmail.com"} phone_num={"123-456-7890"} />
      <ContactCard name={"Jone Doe"} email={"jonedoe@gmail.com"} phone_num={"567-432-4545"} />
      <ContactCard name={"Jimmy Doe"} email={"jimbo@gmail.com"} phone_num={"098-765-4321"} work_num={"093-432-5432"} />
    </div>
  );
}

export default App;
