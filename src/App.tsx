import CalorieInput from './components/CalorieInput';
import CalorieResult from './components/CalorieResult';
import useCalorieStore from './store/useCalorieStore';
import './App.css';

function App() {
  const showResult = useCalorieStore(state => state.showResult)
  const title = showResult ? 'Результат расчета' : 'Калькулятор калорий';

  return (
    <div className="App">
      <div className="container">
        <h2 className="app__title">{title}</h2>
        <CalorieInput />
        <CalorieResult />
      </div>
    </div>
  );
}

export default App;