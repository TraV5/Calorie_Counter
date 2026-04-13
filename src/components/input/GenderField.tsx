import type { FC } from 'react';
import useCalorieStore from '../../store/useCalorieStore';
import RadioGroup from './RadioGroup';
import type { RadioOption } from './RadioGroup';

const GenderField: FC = () => {
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

export default GenderField;