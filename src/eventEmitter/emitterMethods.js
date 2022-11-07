import events from 'events'

class MyEmitter extends events {}

const myEmitter = new MyEmitter()


myEmitter.on('message', ()=>{
  console.log('method on')
})
.addListener('message', ()=> {
  console.log('method add listener')
})
.prependListener('message', ()=> {
  console.log('method prependlistener')
})
.once('message', ()=> {
  console.log('method once')
})
.prependOnceListener('message', ()=> {
  console.dir('method prependeOnceListener', {colors : true})
})
console.log('\n')
myEmitter.emit('message')