export default function Greeting({ value, onChange}) {
    return (
    <div>
      <form>
        <label>
          What is your first name?
          <input type="text" name="name" value={value} onChange={onChange} />
        </label>
      </form>
    </div>
  );
}
