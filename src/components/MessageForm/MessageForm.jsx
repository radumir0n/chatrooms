import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="message-form"
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button
        type="submit"
        className="send-button"
        style={{ backgroundColor: "lightgray", width: "100px" }}
      >
        Send
      </button>
      <button
        onClick={handleLogOut}
        className="send-button"
        style={{ backgroundColor: "#eb4d4b", color: "#fff", width: "100px" }}
      >
        Log Out
      </button>
    </form>
  );
};

export default MessageForm;
