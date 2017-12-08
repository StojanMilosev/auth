module.exports = function(app){
    app.get('/',function(req,res,next){
        res.send([
            {
                "type":"application",
                "name":"authorization server application"
            },
            {
                "type":"developer",
                "name":"stojan"
            }
        ]);
    });
};