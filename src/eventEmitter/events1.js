import events from 'events'

class MyEmitter extends events {
  
}

const emitter = new MyEmitter()

emitter.on('message', function(){
  console.log('A message was emitted!!!')
})

const runner = setInterval(() => {
  console.log('\n')
  emitter.emit('message')
}, 1000);

setTimeout(() => {
  clearInterval(runner)
}, 5000);
