const  aiservice  = require('../services/ai.service');

module.exports.getResponse =  async(req,res)=>{
    // console.log("BODY:", req.body); // Add this line
  const prompt = req.body.prompt;
    // console.log(prompt);
    if (!prompt) {
        return res.status(400).send("Prompt is required");
    }   
    const response =  await aiservice(prompt)
    res.send(response);
}