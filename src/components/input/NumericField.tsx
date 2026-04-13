import type { FC } from 'react';
import useCalorieStore from '../../store/useCalorieStore';

type NumericFieldName = 'age' | 'height' | 'weight';

interface NumericFieldProps {
  field: NumericFieldName
  label: string
  min?: number
  max?: number
}

const NumericField: FC<NumericFieldProps> = ({ field, label, min = 0, max }) => {
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

export default NumericField