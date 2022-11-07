import events from 'events'

class MyEmitter extends events {
  
}

const emitter = new MyEmitter()

const emitterFunction = function () {
  console.log('A message was emitted!!!')
}

emitter.on('message',emitterFunction)

const runner = setInterval(() => {
  console.log('\n')
  emitter.emit('message')
}, 1000);

setTimeout(() => {
  emitter.removeListener('message', emitterFunction )
  clearInterval(runner)
}, 2000);
