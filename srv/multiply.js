module.exports = async(srv) => {
    
    srv.on('total',(req,res)=>{
        return req.data.n1 * req.data.n2
    });
    };