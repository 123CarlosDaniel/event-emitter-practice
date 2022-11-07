import events from 'events'

events.defaultMaxListeners = 19
class MyEmitter extends events {}

const myEmitter = new MyEmitter()

console.log('myEmitter : ', myEmitter.getMaxListeners())
myEmitter.setMaxListeners(25)

myEmitter.on('message', ()=> {
  console.log('hola desde el message')
})

console.log('myEmitter : ',myEmitter.getMaxListeners())