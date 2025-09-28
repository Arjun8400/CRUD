const homecontroller = (req, res)=>{
    res.send("hello express js")
}
const userDataController =(req, res)=>{
    res.send("user Name : - Arjun prajapati")
}


module.exports = {
    homecontroller,
    userDataController
}