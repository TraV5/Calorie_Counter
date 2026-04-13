import type { FC } from 'react';
import Button from '../common/Button';
import useCalorieStore from '../../store/useCalorieStore';

const FormButtons: FC = () => {
  const age = useCalorieStore(state => state.age);
  const height = useCalorieStore(state => state.height);
  const weight = useCalorieStore(state => state.weight);
  const errors = useCalorieStore(state => state.errors);
  const calculate = useCalorieStore(state => state.calculate);
  const reset = useCalorieStore(state => state.reset);
  
  const hasErrors = Boolean(errors.age || errors.height || errors.weight);
  const hasZeroValues = age === 0 || height === 0 || weight === 0;
  const isCalculateDisabled = hasErrors || hasZeroValues;

  return (
    <div className="form__buttons">
      <Button onClick={calculate} disabled={isCalculateDisabled} variant="primary">
        Рассчитать
      </Button>
      <Button onClick={reset} variant="secondary">
        Сбросить поля
      </Button>
    </div>
  );
};

export default FormButtons;