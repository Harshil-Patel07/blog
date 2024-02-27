import { blogPageData } from "@/queries";
import { client } from "../../../sanity/lib/client";

export default function handler(req, res) {
  const fetchData = async () => {
    try {
      const data = await client.fetch(blogPageData);
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
  };

  fetchData();
}
