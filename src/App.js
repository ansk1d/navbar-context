import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';


export default () => {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}