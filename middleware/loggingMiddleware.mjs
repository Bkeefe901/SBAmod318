export default (req, res, next)=>{
    console.log(`Method: ${req.method} Path: ${req.url}`);
    next();
}