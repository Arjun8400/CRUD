const homecontroller = (req, res)=>{
    res.send("hello express js")
}
const userDataController =(req, res)=>{
    res.send("user Name : - Arjun prajapati")
}

const dbData = []

 const dataController = (req, res)=>{
    dbData.push(req.body)
    res.json("Submit Success....")
 }


const showDataController =(req, res)=>{
    res.json(dbData)
}

module.exports = {
    homecontroller,
    userDataController,
    dataController,
    showDataController
}