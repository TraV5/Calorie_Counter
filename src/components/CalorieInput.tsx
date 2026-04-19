import type { FC } from 'react';
import useCalorieStore from '../store/useCalorieStore';
import * as input from './input/InputFile';

const CalorieInput: FC = () => {
  const showForm = useCalorieStore(state => state.showForm)

 

  if (!showForm) {
    return null;
  }

  return (
    <form className="form">
      <input.GenderField />
      <input.NumericField field="age" label="Возраст (лет)" max={150} />
      <input.NumericField field="height" label="Рост (см)" />
      <input.NumericField field="weight" label="Вес (кг)" />
      <input.ActivityField />
      <input.FormButtons />
    </form>
  )
}

export default CalorieInput