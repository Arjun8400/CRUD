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

const userDeleteController = (req, res)=>{
    const userId = parseInt(req.params.id)
    console.log(userId)
    // const filterData = dbData.filter((element, index) =>index !== userId)
    // console.log(filterData)
}


const showDataController =(req, res)=>{
    res.json(dbData)
}


const userUpdateController = (req,res)=>{
    const index = req.params.id
    const singleData= dbData[index]
    res.json({data:singleData})
}

// const newUpdateValueController= (req ,res)=>{
//     console.log(req)

//     // const index = req.params.id
//     // const newValue = req.body.userName
//     // const newObj = {UserName:newValue}
//     // dbData.splice(index,1,newObj)
//     // res.json("Successfully Update..")
    

// }




const newUpdateValueController = (req, res) => {
    console.log("Params:", req.params);  // e.g. { id: '1' }
    console.log("Body:", req.body);      // e.g. { userName: "Arjun Prajapati" }
}

module.exports = {
    homecontroller,
    userDataController,
    dataController,
    showDataController,
    userDeleteController,
    userUpdateController,
    newUpdateValueController
}