function ActivityList({ activity }) {
  return (
    <div className="panel-card">
      <div className="panel-header">
        <h3>Recent Activity</h3>
        <button className="ghost-button">Refresh</button>
      </div>

      <div className="activity-list">
        {activity.map((item) => (
          <div key={item.id} className="activity-item">
            <div className="activity-dot" />
            <div>
              <p className="activity-title">
                {item.investorName} invested RWF {item.amount.toLocaleString()}
              </p>
              <p className="activity-subtitle">{item.project}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityList;