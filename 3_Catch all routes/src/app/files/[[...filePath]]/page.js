export default async function File({params}) {
    const {filePath}=await params;
    return <div><h1> File <i>/{filePath?.join("/")}</i> </h1></div>
}