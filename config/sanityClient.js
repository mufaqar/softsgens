import { createClient } from "next-sanity";
  const config = {
      projectId: "o606bp5f",
      dataset: "production",
      apiVersion: "2021-10-14",
      useCdn: false
  }

  export const sanityClient = createClient(config);