export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://graphql-mern-event-booking-api.herokuapp.com/graphql"
    : "http://localhost:4000/graphql";
