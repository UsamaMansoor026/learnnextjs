// Middleware file is always is in root directory not inside the app folder or any other folder.

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(async function middleware() {}, {
  // This array includes all the paths that are public and doesn't need protection.
  publicPaths: ["/"],
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
