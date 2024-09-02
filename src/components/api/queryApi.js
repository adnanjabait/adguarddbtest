const calltoApi = async (query, values) => {
    try {
        const response = await fetch("/api/azure-db", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query, values }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
    }
};

export const fetchNotifications = async () => {
    const query = `SELECT TOP 10 * FROM [SalesLT].[Address]`;
    const values = [];
    return await calltoApi(query, values);
};
