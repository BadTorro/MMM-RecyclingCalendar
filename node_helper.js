const NodeHelper = require("node_helper");
const moment = require("moment");
const fetch = require('node-fetch');
const { resolveNs } = require("dns");

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node_helper.js for module: "+this.name);
  },

  getCalendarData: function(payload){
    var startdate = moment().format('YYYY-MM-DD');
    var enddate = moment(startdate, 'YYYY-MM-DD').add(payload.daysToDisplay, 'days');

    var url = new URL(payload.url);

    var params = new URLSearchParams();
    params.append('zip', payload.zipCode);
    params.append('start', startdate);
    params.append('end', enddate);
    params.append('sort', payload.sort);
    if(payload.showType != ""){
      params.append('types', payload.showType);
    }
    params.append('limit', 50);

    url.search = params.toString();
    
    console.log("URL: "+url);


    (async () => {
      try {
        var response = await fetch(url, {
          method: 'GET', 
          headers: {'Content-Type': 'application/json'}, 
        });
        var json = "";
        if(response.status >= 200 && response.status <= 299){
          json = await response.json();
          // console.log(json);             
          this.sendSocketNotification('CALENDAR_RESULT', json);
        } else {
          console.log(response.status, response.statusText);
          this.sendSocketNotification('CALENDAR_ERROR', "error");
        }
      } catch (error){
        console.log(error);
      }
    })();
  },



  socketNotificationReceived: function(notification, payload) {
    // console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);

    if(notification == "CALENDAR_GET"){
      this.getCalendarData(payload);
    }
  },
})