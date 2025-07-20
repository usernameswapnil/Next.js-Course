const Blogs=async({params})=>{
        
        const {blogsID}=await params;
        return(
            <div>
                Blog {blogsID}
            </div>
        )
    
}
export default Blogs;