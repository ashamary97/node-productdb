var Express=require("express");
var bodyparser=require("body-parser");
var mongoose=require("mongoose")
var {productModel}=require("./model/product")


var app=Express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://asha:testdb@cluster0.gmzto.mongodb.net/studdb?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true})


app.post("/read", async(req,res)=>{
    try{
    var data=req.body;
    
    var productdata=new productModel(req.body);
    
    var result=await productdata.save();
    res.json(result)
    
    
    }
    
    catch(error){
    res.status(500).send(error)
    }
    })



    app.get("/viewall",async(req,res)=>{

        try{
           
            var result= await productModel.find();
    
            res.json(result);
            
    
        }
        catch(error){
            console.log(error)
            res.status(500).send(error)
        }
    
    
    })


app.post("/search", async(req,res)=>{
    try{

        productModel.find(req.body,  (error,data)=>{

            if(error){
                throw error;

            }
            else{
                res.json(data)

            }


        } )


    }
    catch(error){
        res.status(500).send(error)

    }
})



app.listen(process.env.PORT || 3000, (error)=>{

    if(error){
        console.log("Error")
    }
    else{
        console.log("Server running")
    }
    })