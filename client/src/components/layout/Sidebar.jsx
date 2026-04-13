import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand-block">
          <div className="brand-logo">KC</div>
          <div>
            <h2>Kigali Community Invest</h2>
            <p>Investment Dashboard</p>
          </div>
        </div>

        <div className="sidebar-group">
          <p className="sidebar-heading">Menu</p>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/investments"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            Investments
          </NavLink>

          <NavLink
            to="/activity"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            Activity
          </NavLink>
        </div>

        <div className="sidebar-group">
          <p className="sidebar-heading">General</p>
          <button className="sidebar-link">Docs</button>
          <button className="sidebar-link">Help</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;