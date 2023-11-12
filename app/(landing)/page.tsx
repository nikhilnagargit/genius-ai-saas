import { Button } from "@/components/ui/button";
import Link from "next/link";
function LandingPage() {
  return (
    <>
      <div>
        <Link href="/sign-in">
          <Button>Sign IN</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>

      <div>Landing Page (Unprotected)</div>
    </>
  );
}

export default LandingPage;
