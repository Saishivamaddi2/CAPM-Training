module.exports = async(srv) => {
//implemnetion code
srv.on('greetings',(req,res)=>{
    return "good morning ! " + req.data.name
});
};