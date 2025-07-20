import Link from "next/link";

const Blogs=()=>{
    return(
        <div>
            <h1>ALL BLOGS</h1>
            <Link href="/blogs/1">Blog 1</Link> <br /> <br />
            <Link href="/blogs/2">Blog 2</Link> <br /> <br />
            <Link href="/blogs/3">Blog 3</Link>
        </div>
    )
}
export default Blogs;