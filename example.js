// console.log(process.argv)
// console.log(process.argv.slice(2))
// console.log( process.env.NODE_ENV)
process.on('SIGKILL', function(){
  console.log('信息收到')
})