const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const used = parseInt((totalmem() - freemem()) / 1024 / 1024)
    const percent = parseInt((used * 100) / total)
    const free = total - used
    const stats = {

        Total: `${total} MB`,
        Used: `${used} MB`,
        Free: `${free} MB`,
        Percentage: `${percent}%`
    }

    console.clear()
    console.table(stats)

}, 1000)
