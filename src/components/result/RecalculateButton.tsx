import type { FC } from 'react';
import Button from '../common/Button';

interface RecalculateButtonProps {
  onClick: () => void;
}

const RecalculateButton: FC<RecalculateButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} variant="primary">
    Рассчитать заново
  </Button>
);

export default RecalculateButton;