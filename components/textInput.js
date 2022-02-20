import { Label, TextInput } from '@trussworks/react-uswds';

export default function Input(props) {
  const { id, name, type, placeholder, validationStatus, label } = props;
  function updateValue(event) {
    props.callback({ item: id, value: event.target.value });
  }
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        id={id}
        name={name ? name : id}
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        validationStatus={validationStatus ? validationStatus : 'success'}
        onChange={updateValue}
      />
    </>
  );
}
