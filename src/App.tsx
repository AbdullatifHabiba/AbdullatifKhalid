import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DevOpsRoadmap from './pages/DevOpsRoadmap';

function App() {
  return (
    <Router basename="/AbdullatifKhalid">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/devops-roadmap" element={<DevOpsRoadmap />} />
      </Routes>
    </Router>
  );
}

export default App;
