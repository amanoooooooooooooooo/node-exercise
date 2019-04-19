    let server = net.createServer(function(socket) {
        console.log('TempSocket start')
        
        socket.on('data', function(data) {
            console.log('TempSocket onData ', data)
        })
    
        socket.pipe(socket);
        socket.on('end', function(err){
            console.log('TempSocket onEnd ')
        })
        socket.on('error', function(err) {
            console.log('TempSocket error', err)
         })
    
    })
    
    server.listen(3003)
