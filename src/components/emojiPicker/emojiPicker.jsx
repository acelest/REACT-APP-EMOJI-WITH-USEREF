import "./emojiPicker.scss";

import { data as emojiList } from "./data.jsx";
import { forwardRef, useRef, useState, useEffect } from "react";

export default function EmojiPicker(props, inputRef) {
  const [isOpen, SetIsOpen] = useState(false);
  const [emoji, setEmoji] = useState(emojiList);
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <button className="btn-emoji" type="button" onClick={handleClickOpen}>
        😊
      </button>
    </div>
  );
}
