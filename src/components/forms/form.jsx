import "./form.scss";
import EmojiPickerInput from "../emojiPicker/emojiPickerInput";
export default function Form() {
  function handleSubmit(e) {
    //eviter par defaut le comportement du navigateur
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" />
      <EmojiPickerInput />
      <button className="btn">Submit</button>
    </form>
  );
}
