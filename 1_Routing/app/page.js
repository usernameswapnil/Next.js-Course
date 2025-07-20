
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>WELCOME!</h1>
      <Link href="/about">About</Link> <br />
      <Link href="/services">Services</Link>
    </div>
  );
}
