exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    const data = JSON.parse(event.body);

    const name = data.name || "";
    const email = data.email || "";
    const hobbies = data.hobby || [];

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Email is required."
        })
      };
    }

    const response = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
          email: email,

          attributes: {
            FIRSTNAME: name,
            HOBBIES: Array.isArray(hobbies)
              ? hobbies.join(", ")
              : hobbies
          },

          listIds: [5],

          updateEnabled: true
        })
      }
    );

    const result = await response.text();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: result
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true
      })
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong."
      })
    };

  }
};