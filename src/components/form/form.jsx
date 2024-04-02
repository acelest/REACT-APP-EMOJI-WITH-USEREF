import "../form/form.scss";
import EmojiPickerInput from "../emojiPicker/emojiPickerInput.jsx";
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" />
        <EmojiPickerInput />
        <button className="btn">Envoyer</button>
      </form>
    </>
  );
}
