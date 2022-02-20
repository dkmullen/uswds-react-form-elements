import { Label, Radio } from '@trussworks/react-uswds';

export default function RadioGroup(props) {
  function renderOptions() {
    return props.options.map((option, index) => {
      const { label, id, name, value } = option;
      return (
        <Radio
          id={id}
          name={name}
          label={label}
          key={index}
          value={value}
          onChange={select}
        />
      );
    });
  }
  function select(event) {
    props.callback({ item: props.options[0].name, value: event.target.value });
  }
  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <div id={props.id}>{renderOptions()}</div>
    </>
  );
}
