/**
 * This code was generated by Builder.io.
 */
export const fetchNotifications = async () => {
  try {
    const response = await fetch("/api/notification");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};
