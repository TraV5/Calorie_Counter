import type { FC } from 'react';

interface ResultItemProps {
  label: string;
  value: number;
}

const ResultItem: FC<ResultItemProps> = ({ label, value }) => (
  <div className="counter-result__item">
    <span className="counter-result__label">{label}</span>
    <span className="counter-result__value">{value} ккал</span>
  </div>
);

export default ResultItem;