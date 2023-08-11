export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/views/pages/trips",
    "/views/pages/reservations",
    "/views/pages/properties",
    "/views/pages/favorites",
  ],
};
