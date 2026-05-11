import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/i18n/LocaleContext';
import { ThemeProvider } from '@/i18n/ThemeContext';
import Landing from '@/pages/Landing';
import Tools from '@/pages/Tools';

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </Router>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
