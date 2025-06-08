export default function Greeting({ value, onChange }) {
  //Greeting Screen
  return (
    <div className="flex-container" id="greeting">
      <form>
        <label for="name-input">
          What is your first name?
          <br />
          <input type="text" name="name" value={value} onChange={onChange} />
        </label>
      </form>
    </div>
  );
}
