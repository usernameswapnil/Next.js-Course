
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>TECHNICAL AGENCY</h1>
      <Link href={"/about"}>About</Link> <br /> <br />
      <Link href={"/services"}>Services</Link> <br /> <br />
      <Link href={"/blogs"}>Blogs</Link> <br /> <br />
      <Link href="/files">Files</Link>
    </div>
  );
}
