// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Start from "./screens/Start";
import React from "react";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           render={() => (
//             <Start />
//           )}
//         />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
      <Start />
  );
}



export default App;