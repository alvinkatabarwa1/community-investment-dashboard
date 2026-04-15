const API_BASE_URL = "/api";

export async function getSummary() {
  const response = await fetch(`${API_BASE_URL}/summary`);

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_BASE_URL}/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export async function getActivity() {
  const response = await fetch(`${API_BASE_URL}/activity`);

  if (!response.ok) {
    throw new Error("Failed to fetch activity");
  }

  return response.json();
}

export async function getInvestments() {
  const response = await fetch(`${API_BASE_URL}/investments`);

  if (!response.ok) {
    throw new Error("Failed to fetch investments");
  }

  return response.json();
}

export async function createInvestment(payload) {
  const response = await fetch(`${API_BASE_URL}/investments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Failed to create investment");
  }

  return response.json();
}