import type { FC } from 'react';
import useCalorieStore from '../store/useCalorieStore';
import GenderField from './input/GenderField';
import NumericField from './input/NumericField';
import ActivityField from './input/ActivityField';
import FormButtons from './input/FormButtons';

const CalorieInput: FC = () => {
  const showForm = useCalorieStore(state => state.showForm)

  if (!showForm) {
    return null;
  }

  return (
    <form className="form">
      <GenderField />
      <NumericField field="age" label="Возраст (лет)" max={150} />
      <NumericField field="height" label="Рост (см)" />
      <NumericField field="weight" label="Вес (кг)" />
      <ActivityField />
      <FormButtons />
    </form>
  )
}

export default CalorieInput