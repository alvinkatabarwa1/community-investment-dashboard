import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-panel">
        <Topbar />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;