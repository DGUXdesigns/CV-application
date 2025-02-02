import '../css/input.css';

function Input({ type, name, placeholder, value, labelName, id, onChange }) {
  return (
    <div className="input-control">
      <label htmlFor={id}>{labelName}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
