const calltoApi = async (query,values) => {
    try {
        const response = await fetch("/api/db", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({query, values}),
        });

        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
    }
}

export const fetchNotifications = async () => {
    const query = `SELECT * FROM linkwithtext where section='notificationbanner'`;
    const values = [];
    return await calltoApi(query,values);
};

export const fetchAnnouncements = async () => {
    const query = `SELECT * FROM linkwithtext where section='announcebanner'`;
    const values = [];
    return await calltoApi(query,values);
};

export const fetchTermsLinks = async () => {
    const query = `SELECT * FROM linkwithtext where section='termslink'`;
    const values = [];
    return await calltoApi(query,values);
};

export const fetchSubscriptionData = async () => {
    const query = `SELECT * FROM buttondata where section='subscriptionbutton'`;
    const values = [];
    return await calltoApi(query,values);
};

export const fetchLoginData = async () => {
    const query = `SELECT * FROM buttondata where section='loginbutton'`;
    const values = [];
    return await calltoApi(query,values);
};



  