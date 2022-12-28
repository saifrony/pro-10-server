const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors =require('cors');

app.use(cors());


const course =require('./data/course.json');


app.get('/course', (req, res)=> {
    res.send(course);
});





// app.get('/course/:id',(req,res)=>{  
//     const id = req.params.id;
//     const course= news.find(n=>n._id === id);
//     res.send(course);
    
// });
// app.get('/catagory/:id',(req,res)=>{
    
//     const id = req.params.id;
//     if(id==='08'){
//         res.send(news);
//     }else{
//         const cata_newses= news.filter(n => n.category_id === id);
//         res.send (cata_newses);
//     }
   
    
// });


app.listen(port,()=>{
     console.log('dream news, port', port);
})