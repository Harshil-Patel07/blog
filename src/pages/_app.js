import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
