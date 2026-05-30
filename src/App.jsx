import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Admin from "./components/Admin";
import Team from "./components/Team";
import Team2 from "./components/Team2";
import Team3 from "./components/Team3";
import Login from "./components/Login";
import TeamLogin from "./components/TeamLogin";
import MemberLogin from "./components/Memberlogin";
import Mem from "./components/Mem";
import Mem2 from "./components/Mem2";
import Mem3 from "./components/Mem3";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* real pages */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team1" element={<Team />} />
        <Route path="/team2" element={<Team2 />} />
        <Route path="/team3" element={<Team3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teamlogin" element={<TeamLogin />} />
        <Route path="/memberlogin" element={<MemberLogin />} />
        <Route path="/mem" element={<Mem />} />
        <Route path="/mem2" element={<Mem2 />} />
        <Route path="/mem3" element={<Mem3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;