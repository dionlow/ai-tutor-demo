
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { LessonPage } from './pages/LessonPage';
import { LessonBetaPage } from './pages/LessonBetaPage';
import { HistoryBetaPage } from './pages/HistoryBetaPage';
import { HistoryPage } from './pages/HistoryPage';
import './App.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <p><Link to="lesson/friday-nights">friday-nights</Link></p>
        <p><Link to="lesson-beta/friday-nights">beta</Link></p>
      </ul>
    </div>
  );
}

function NoMatch() {
  return (
    <div className='page'>
      <h2>No Lesson Selected</h2>
      <Link to="lesson-beta/friday-nights">friday-nights</Link>
    </div>
  );
}

export default function App() {
  return (
    <div className='app'>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesson/:id" element={<LessonPage />} />
          <Route path="lesson/:id/history" element={<HistoryPage />} />

          {/* Testing Route */}
          <Route path="lesson-beta/:id" element={<LessonBetaPage />}>
            <Route path="history" element={<HistoryBetaPage />} />
          </Route>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  )
}


