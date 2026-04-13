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

const RadioGroup = <TValue extends string = string>({ name, options, selectedValue, onChange }: RadioGroupProps<TValue>) => (
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

export default RadioGroup;