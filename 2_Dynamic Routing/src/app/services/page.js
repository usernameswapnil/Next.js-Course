import Link from "next/link";
const Services=()=>{
    return(
        <div>
            <h1>ALL SERVICES</h1>
            <p><Link href="/services/web-dev">Web Development</Link></p>
            <p><Link href="/">App Development</Link></p>
            <p><Link href="/">SEO Development</Link></p>
            
        </div>
    )
}
export default Services;