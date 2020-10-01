// const { hasUncaughtExceptionCaptureCallback } = require("process");

Module.register("MMM-RecyclingCalendar", {
    
  defaults: {
    zipCode: 8047, 
    daysToDisplay: 7,  
    url: "http://openerz.metaodi.ch/api/calendar.json",
    sort: "date",
    showDate: "daysAndDate",
    showType: "", 
    showStations: false,
    showExplanation: false
  },
  

  // define required style sheets 
  getStyles: function () {
    return ["MMM-RecyclingCalendar.css"];
  },  
  
  // define required scripts
  getScripts: function(){
    return ["moment.js"]
  },
    
  start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);

        this.calendarData = [];
        this.init = true;
      
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

    // console.log("payload: "+payload);

    // TODO: Error handling, if payload = empty 
    if(notification == "CALENDAR_RESULT" && payload['result'].length >= 0){
      // console.log("Payload length "+payload['result'].length);
      this.calendarData = payload['result'];    
      this.updateDom(1000);
    } else if (notification == "CALENDAR_ERROR"){
      this.updateDom(1000);    
    }
        
  },

  // TODO: add color images
  svgIconFactory: function(type) {
 
    var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttributeNS(null, "class", "entry-icon " + type);
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.file("icons/icon_sprite.svg#") + type);
    svg.appendChild(use);
    
    return(svg);

  },

  getDom: function() {
    var wrapper = document.createElement("div");

    if(this.init == true){
      wrapper.innerHTML = "Fetching results..."; 
      wrapper.className = "dimmed light small"; 
      this.init = false; 
      return wrapper; 
    }

    if(this.calendarData.length == 0){
      wrapper.innerHTML = "No results for set configuration."; 
      wrapper.className = "light small"; 
      return wrapper; 
    }


    for(var i = 0; i<this.calendarData.length; i++){
      var entry = this.calendarData[i];

      var entriesContainer = document.createElement("div");
      entriesContainer.classList.add("entries-container");

      // add date 
      var dateContainer = document.createElement("span");
      dateContainer.classList.add("entry-date");
      var date = entry['date'];
      switch(this.config.showDate){
        case 'inDays': 
          date = moment(date, 'YYYY-MM-DD').format('dddd');
          break;
        case 'shortDate':
          date = moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
          break; 
        case 'daysAndDate':
          date = moment(date, 'YYYY-MM-DD').format('dddd, DD.MM.YYYY');
          break;
      }
      dateContainer.innerHTML = date;
      entriesContainer.appendChild(dateContainer);

      // add icon for type 
      var iconContainer = document.createElement("span");
      iconContainer.classList.add("entry-icon-container"); 
      iconContainer.appendChild(this.svgIconFactory(entry['type']));
      entriesContainer.appendChild(iconContainer);

      // add explanation 
      if(this.config.showExplanation){
        var expContainer = document.createElement("span");
        expContainer.className = "xsmall light";
        expContainer.innerHTML = "["+entry['type']+"]"; 
        entriesContainer.appendChild(expContainer);
      }
      
      // add station 
      if(this.config.showStations && entry['station']){
        var stationContainer = document.createElement("div");
        stationContainer.className = "xsmall light";
        stationContainer.innerHTML = entry['station'];
        entriesContainer.appendChild(stationContainer);  
      }
      
      wrapper.appendChild(entriesContainer);
    }

    return wrapper;
  },
})