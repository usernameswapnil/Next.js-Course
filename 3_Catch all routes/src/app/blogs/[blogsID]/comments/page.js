const Blogs=async({params})=>{
        
        const {blogsID}=await params;
        return(
            <div>
                Comments {blogsID}
            </div>
        )
    
}
export default Blogs;