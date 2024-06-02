import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

export default function emojiPickerInput() {
  const refInput = useRef(null);

  return (
    <div className="box-emoji">
      <label htmlFor="message">Text message</label>
      <EmojiPicker ref={refInput} />
      <textarea name="" id="message" ref={refInput}></textarea>
    </div>
  );
}
