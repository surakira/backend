const express=require('express')
const organ_control=require('../controller/authcontroler')
const event_control=require('../controller/eventcontff');
const appont_contrrol=require('../controller/appoint_control')
const dooner_Control=require('../controller/doner_control')
const charity_Control=require('../controller/charity_Control')
const router=express.Router()
router.post('/event',event_control.addevent)
router.post('/appoint',appont_contrrol.addappoint)
router.post('/doner',dooner_Control.addDoner)
router.post('/charity',charity_Control.addcharity)


module.exports=router