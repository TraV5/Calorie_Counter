import type { FC } from 'react';
import useCalorieStore from '../store/useCalorieStore';
import ResultItem from './result/ResultItem';
import RecalculateButton from './result/RecalculateButton';

const CalorieResult: FC = () => {
  const result = useCalorieStore(state => state.result)
  const showResult = useCalorieStore(state => state.showResult)
  const showFormOnly = useCalorieStore(state => state.showFormOnly)
  
  if (!showResult) {
    return null;
  }

  return (
    <div className={`counter-result ${showResult ? 'counter-result_active' : ''}`}>
      <ResultItem label="Базальнный метаболизм:" value={result.basic} />
      <ResultItem label="С учетом активности:" value={result.withActivity} />
      <RecalculateButton onClick={showFormOnly} />
    </div>
  );
};

export default CalorieResult;