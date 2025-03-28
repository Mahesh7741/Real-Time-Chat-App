import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./Layout/Login";
import { ChatPage2 } from "./Layout/ChatPage2";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.getItem("chat-username") ? (
            <Navigate to="/chat" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<ChatPage2 />} />
    </Routes>
  );
}

export default App;

// import {
//   Redirect,
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   useHistory,
// } from "react-router-dom";
// import { Login } from "./Layout/Login";
// import { ChatPage2 } from "./Layout/ChatPage2";
// function App() {
//   const history = useHistory();

//   if (localStorage.getItem("chat-username")) {
//     history.push("/chat");
//   } else history.push("/login");

//   return (
//     <Router>
//       <Switch>
//         <Route exact path={"/"}>
//           <Redirect to={"/login"}></Redirect>
//         </Route>
//         <Route path={"/login"}>
//           <Login></Login>
//         </Route>

//         <Route path={"/chat"}>
//           <ChatPage2></ChatPage2>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
