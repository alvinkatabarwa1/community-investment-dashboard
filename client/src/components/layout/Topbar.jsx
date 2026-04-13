function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Search projects, investors, locations" />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-button" aria-label="Messages">
          ✉
        </button>
        <button className="icon-button" aria-label="Notifications">
          🔔
        </button>

        <div className="profile-chip">
          <div className="avatar">A</div>
          <div>
            <p className="profile-name">Alvin Katabarwa</p>
            <p className="profile-role">Community Investor</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;