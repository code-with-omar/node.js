const EventEmitter = require('events')// events is a class
const emitter = new EventEmitter();
//register a listener for bellRing event
// emitter.on('bellRing',() => {
//     console.log(`Today School is finished today`)
// })
// emitter.emit('bellRing')

// emitter.on('bellRing', (parameter) => {
//     console.log(`Today School is finished ${parameter}`)
// })
//raise an event
// emitter.emit('bellRing','first period is done')// parameter pass

emitter.on('bellRing', ({ period, text }) => {
    console.log(`Today School is finished ${period} ${text}`)
})
// pass multiple parameter
emitter.emit('bellRing', {
    period: "first",
    text: 'period ended'
})