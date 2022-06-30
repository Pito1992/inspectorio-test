import { Routes, Route, BrowserRouter } from "react-router-dom";
import { INDEX_URL, USER_PROFILE_URL } from './constants/urls';

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={INDEX_URL} element={<Home />} />
        <Route path={USER_PROFILE_URL}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
