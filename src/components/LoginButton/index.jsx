import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className="bg-blue-50 flex w-fit">
        <p className="text-[0.625rem] whitespace-break-spaces">
          {" "}
          {session?.user?.email}
        </p>
        <img
          src={session?.user?.image}
          alt="image"
          className="rounded-full max-w-[1.5rem] w-full"
        />
        <button onClick={() => signOut()} className="w-full">
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
