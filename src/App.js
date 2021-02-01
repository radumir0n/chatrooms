import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/ChatFeed";

import LoginForm from "./components/LoginForm/LoginForm";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const projectID = "cec3d8bb-6dbe-4688-8072-e8265eb7552f";

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
