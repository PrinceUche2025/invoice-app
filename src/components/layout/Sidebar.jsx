import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Sidebar = ({ theme, toggleTheme }) => {
  return (
    <aside className="sidebar-nav">
      <style>{`
        .sidebar-nav {
          background-color: var(--sidebar-bg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
        }
        .logo-box {
          background-color: var(--purple);
          width: 72px;
          height: 72px;
          border-radius: 0 15px 15px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 901px) {
          .sidebar-nav {
            width: 100px;
            height: 100vh;
            flex-direction: column;
            border-radius: 0 20px 20px 0;
          }
          .logo-box { width: 100px; height: 100px; }
        }
      `}</style>

      <div className="logo-box">
        <div style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%' }}></div>
      </div>

      <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px' }}>
        {theme === 'light' ? <Moon size={22} color="#858BB2" /> : <Sun size={22} color="#FFD700" />}
      </button>
    </aside>
  );
};

export default Sidebar;