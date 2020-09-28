Module.register("MMM-RecyclingCalendar", {
    
  defaults: {
        zipCode: 8047, 
        daysToDisplay: 7,  
        url: "http://openerz.metaodi.ch/api/calendar.json",
        sort: "date"
      },

  // define required style sheets 
  getStyles: function () {
    return ["MMM-RecyclingCalendar.css"];
  },  
  
  // define required scripts
  // TOOD: add luxon script 
  getScripts: function(){
    return ["moment.js"]
  },
    
  start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);

        this.calendarData = [];
      
        this.getRecyclingData();
      },

  getRecyclingData: function(){
    this.sendSocketNotification('CALENDAR_GET', this.config);
  },
      
  notificationReceived: function(notification, payload, sender) {
    if (sender) {
      Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
    } else {
      Log.log(this.name + " received a system notification: " + notification);
    }

    
    // switch(notification) {
    //   case "DOM_OBJECTS_CREATED":
    //     var timer = setInterval(()=>{
    //       this.sendSocketNotification("MMM-RECYCLINGCALENDAR-CONFIG", this.count)
    //       this.count++
    //     }, 1000)
    //     break
    // }
  },

  socketNotificationReceived: function(notification, payload) {
    Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);

    if(notification == "CALENDAR_RESULT" && payload['result'].length > 0){
      // Log.log(payload['result']);
      // Log.log("Payload length: "+payload['result'].length);
      this.calendarData = payload['result'];  

      this.updateDom(1000);
    }

  },

  // TODO: #1 make wider appearance of calendar 
  getDom: function() {
    var wrapper = document.createElement("div");

    for(var i = 0; i<this.calendarData.length; i++){
      var entry = this.calendarData[i];

      var entriesContainer = document.createElement("div");
      entriesContainer.classList.add("entries-container");

      // add date 
      var dateEntry = document.createElement("span");
      dateEntry.classList.add("entry-date");
      var date = entry['date'];
      date = moment(date, 'YYYY-MM-DD').format('dddd');
      dateEntry.innerHTML = date;
      entriesContainer.appendChild(dateEntry);

      // add type 
      var typeEntry = document.createElement("span");
      typeEntry.classList.add("entry-type");
      typeEntry.innerHTML = entry['type'];
      entriesContainer.appendChild(typeEntry);

      wrapper.appendChild(entriesContainer);
    }

    return wrapper;
  },
})