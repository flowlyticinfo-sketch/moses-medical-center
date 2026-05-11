import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/i18n/LocaleContext';
import { ThemeProvider } from '@/i18n/ThemeContext';
import Landing from '@/pages/Landing';
import Tools from '@/pages/Tools';
function App() {
    return (_jsx(ThemeProvider, { children: _jsx(LocaleProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/tools", element: _jsx(Tools, {}) })] }) }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map