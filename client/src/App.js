// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Start from "./screens/Start";
import React from "react";

// React render function witch router
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

// basic render function for React components
function App() {
  return (
      <Start />
  );
}



export default App;