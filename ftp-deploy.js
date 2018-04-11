var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

console.log("Hello World");

var config = {
    username: "f00e8f00",
    password: "QSvE5grqG92HeSow", // optional, prompted if none given 
    host: "w0087eb6.kasserver.com",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/",
    include: ['*.*']
    // exclude: ['.git', '.idea', 'tmp/*', 'build/*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});

ftpDeploy.on('uploading', function(data) {
  data.totalFileCount;       // total file count being transferred 
  data.transferredFileCount; // number of files transferred 
  data.percentComplete;      // percent as a number 1 - 100 
  data.filename;             // partial path with filename being uploaded 
});
ftpDeploy.on('uploaded', function(data) {
  console.log(data);         // same data as uploading event 
});
