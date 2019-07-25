var express = require('express');
var router = express.Router();
const ypi = require('youtube-playlist-info');
router.get('/', function(req, res, next) {
  ypi("AIzaSyBvFOaQqZH_BdJJ8pL0b-WNUvVoByxev0M", "PLEXedA_rYzg9E2cU_k6GCmLL4pjtpUBCc").then(items => {
        var arr =[]
        items.map((item,index)=>{
        arr.push('https://www.youtube.com/watch?v='+item.resourceId.videoId)
        
        })
        res.json(arr);
  }).catch(console.error);
});


module.exports = router;
