import { useRef } from "react";
import EmojiPicker from "./emojiPicker.jsx";

export default function EmojiPickerInput() {
  const refInput = useRef(null);
  return (
    <div className="box-emoji">
      <label htmlFor="message">Message..</label>
      <EmojiPicker ref={refInput} />
      <textarea ref={refInput} name="" id="message"></textarea>
    </div>
  );
}
