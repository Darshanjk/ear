import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cookie from "cookie";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { accessToken } = req.body;
    if (accessToken) {
      const userConfig = {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      try {
        const { data: userData } = await axios.get(
          process.env.API_URL + "/api/v1/users/me",
          userConfig
        );
        res.setHeader("Set-Cookie", [
          cookie.serialize("access", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            path: "/",
          }),
        ]);

        res.status(200).json({ user: userData.user });
      } catch (error: any) {
        res.status(error.response.status).json(error.response.data);
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
