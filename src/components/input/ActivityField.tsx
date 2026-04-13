import type { FC } from 'react';
import useCalorieStore, { type ActivityLevel } from '../../store/useCalorieStore';

const activityOptions = [
  { value: 'minimal', label: 'Минимальная' },
  { value: 'low', label: 'Низкая'},
  { value: 'medium', label: 'Средняя' },
  { value: 'high', label: 'Высокая' },
  { value: 'veryHigh', label: 'Очень высокая' },
] as const satisfies { value: ActivityLevel; label: string }[];

const ActivityField: FC = () => {
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

export default ActivityField