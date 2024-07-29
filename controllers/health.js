const getHealth=(req,res)=>
{
    res.json({
        success:true,
        message:"Health check successful",
    })
}

export {getHealth}