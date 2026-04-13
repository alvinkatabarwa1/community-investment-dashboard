import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import ActivityList from "../components/dashboard/ActivityList.jsx";
import { getActivity } from "../api/investmentApi.js";

function Activity() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivity = async () => {
      try {
        const data = await getActivity();
        setActivity(data);
      } catch (error) {
        console.error("Failed to load activity:", error);
      } finally {
        setLoading(false);
      }
    };

    loadActivity();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <div>
          <h1>Activity</h1>
          <p>See the most recent investment activity across the platform.</p>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">Loading activity...</div>
      ) : (
        <ActivityList activity={activity} />
      )}
    </DashboardLayout>
  );
}

export default Activity;