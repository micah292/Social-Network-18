const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')


router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status.apply(500).json({message: err.message})
    }
})

router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
    name: req.body.name,
    subsribedToChannel: req,body,subsribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        ResizeObserver.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.patch('/:id', getSubscriber, (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name 
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel 
    }
})

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message: 'Deleted Subscriber'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
 })

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.find(req.params.id) 
        if(subscriber == null) {
            return res.status(404).json({message: 'Can not find subscriber'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber = subscriber
    next()
} 

module.exports = router