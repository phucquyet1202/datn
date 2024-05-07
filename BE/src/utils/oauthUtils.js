import dotenv from "dotenv";
import axios from "axios";
import qs from "qs";

dotenv.config();

export const getGoogleOauthToken = async (code) => {
  const ROOT_URL = "https://oauth2.googleapis.com/token";

  const options = {
    code,
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
    client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
    grant_type: "authorization_code",
  };

  try {
    const { data } = await axios.post(ROOT_URL, qs.stringify(options), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return data;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

export const getGoogleUser = async (id_token, access_token) => {
  try {
    const ROOT_URL =
      "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=";

    const { data } = await axios.get(`${ROOT_URL}${access_token}`, {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error);

    throw Error(error);
  }
};
