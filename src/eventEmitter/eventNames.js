import events from 'events'

class MyEmitter extends events {}

const myEmitter = new MyEmitter()

function dataListener() {
  console.log('Predefined data listener')
}

myEmitter.on('data', () => {
  console.log('data event emitter')
})
.addListener('data', dataListener)
.once('data', ()=> {
  console.log('once emitted')
})
.on('event2', ()=> {
  console.log('event 2')
})


const names = myEmitter.eventNames()
const eventCount = myEmitter.listenerCount('data')
const lists = myEmitter.listeners('data')
console.log({names})
console.log({eventCount})  
console.log({lists})