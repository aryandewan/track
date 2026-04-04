import { signIn, signOut } from "@/auth";

export function SignIn({ provider }: { provider?: string }) {
  return (
    <form>
      {" "}
      <button className="bg-neutral-700 text-white p-2 rounded-md">
        {" "}
        // [!code ++] Sign In with {provider}
      </button>{" "}
    </form>
  );
}
export function SignOut() {
  return (
    <form>
      {" "}
      <button className="bg-neutral-700 text-white p-2 rounded-md">
        {" "}
        // [!code ++] Sign Out
      </button>{" "}
    </form>
  );
} 