import type { FC } from 'react';
import useCalorieStore, { type ActivityLevel } from '../../store/useCalorieStore';
import Button from '../common/Button';

const activityOptions = [
  { value: 'minimal', label: 'Минимальная' },
  { value: 'low', label: 'Низкая'},
  { value: 'medium', label: 'Средняя' },
  { value: 'high', label: 'Высокая' },
  { value: 'veryHigh', label: 'Очень высокая' },
] as const satisfies { value: ActivityLevel; label: string }[];

export const ActivityField: FC = () => {
  const activity = useCalorieStore(state => state.activity)
  const setActivity = useCalorieStore(state => state.setActivity)

  return (
    <div className="form__group">
      <label className="form__label">Физическая активность</label>
      <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityLevel)} className="form__select">
        {activityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export const FormButtons: FC = () => {
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

export const GenderField: FC = () => {
  const gender = useCalorieStore(state => state.gender);
  const setGender = useCalorieStore(state => state.setGender);

  const genderOptions: RadioOption<'male' | 'female'>[] = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' }
  ];

  return (
    <div className="form__group">
      <label className="form__label">Пол</label>
      <RadioGroup name="gender" options={genderOptions} selectedValue={gender} onChange={setGender} />
    </div>
  );
};

type NumericFieldName = 'age' | 'height' | 'weight';

interface NumericFieldProps {
  field: NumericFieldName
  label: string
  min?: number
  max?: number
}

export const NumericField: FC<NumericFieldProps> = ({ field, label, min = 0, max }) => {
  const value = useCalorieStore(state => state[field])
  const error = useCalorieStore(state => state.errors[field])
  
  const setAge = useCalorieStore(state => state.setAge)
  const setHeight = useCalorieStore(state => state.setHeight)
  const setWeight = useCalorieStore(state => state.setWeight)
  
  const setter = field === 'age' ? setAge : field === 'height' ? setHeight : setWeight;

  return (
    <div className={`form__control ${error ? 'form__control_error' : ''}`}>
      <label className="form__label">{label}</label>
      <input
        type="number"
        value={value ?? ''}
        onChange={(e) => setter(Number(e.target.value))}
        className="form__input"
        min={min}
        max={max}
      />
      {error && <span className="form__error">{error}</span>}
    </div>
  )
}

export interface RadioOption<TValue extends string = string> {
  value: TValue;
  label: string;
}

export interface RadioGroupProps<TValue extends string = string> {
  name: string;
  options: RadioOption<TValue>[];
  selectedValue: TValue;
  onChange: (value: TValue) => void;
}

export const RadioGroup = <TValue extends string = string>({ name, options, selectedValue, onChange }: RadioGroupProps<TValue>) => (
  <div className="form__radio-group">
    {options.map(({ value, label }) => (
      <label key={value} className="form__radio-label">
        <input
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={() => onChange(value)}
          className="form__radio"
        />
        {label}
      </label>
    ))}
  </div>
);