import { createClient } from "contentful"

const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.API_TOKEN as string,
})

export default client
