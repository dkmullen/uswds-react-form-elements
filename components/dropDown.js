import { Label, Dropdown } from '@trussworks/react-uswds';

export default function Input(props) {
  const { id, name, defaultValue, className, label, options } = props;

  function renderOptions() {
    return options.map((option, index) => {
      const { label, value } = option;
      return (
        <option value={value} key={index}>
          {label}
        </option>
      );
    });
  }
  function select(event) {
    props.callback({ item: id, value: event.target.value });
  }
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Dropdown
        id={id}
        name={name ? name : id}
        defaultValue={defaultValue}
        className={className}
        onChange={select}
      >
        {renderOptions()}
      </Dropdown>
    </>
  );
}
