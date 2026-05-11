// app.jsx
// Placeholder content for app.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import TweaksPanel from './tweaks-panel';
import Icons from './icons';
import Sections from './sections';

function App() {
  return (
    <div>
      <TweaksPanel />
      <Icons />
      <Sections />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));