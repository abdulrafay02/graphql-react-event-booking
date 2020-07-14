export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/graphql"
    : "https://graphql-mern-event-booking-api.herokuapp.com/graphql";
