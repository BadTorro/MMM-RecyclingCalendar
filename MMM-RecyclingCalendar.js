Module.register("MMM-RecyclingCalendar", {
    
  defaults: {
    zipCode: 8047, 
    daysToDisplay: 7,  
    url: "http://openerz.metaodi.ch/api/",
    sort: "date",
    showDate: "shortDate",
    showType: "general", 
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

    if(notification == "CALENDAR_RESULT" && payload['result'].length > 0){
      // Log.log(payload['result']);
      // Log.log("Payload length: "+payload['result'].length);
      this.calendarData = payload['result'];  

      this.updateDom(1000);
    }

  },

  svgIconFactory: function(type) {

    console.log("SUBMITTED TYPE: "+type);

    // type = "compost";
    // var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    // svg.setAttributeNS(null, "class", "entry-icon " + type);
    // var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    // use.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.file("/icons/icon_sprite.svg#") + type);
    // svg.appendChild(use);
    
    // return(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttributeNS(null, "class", "entry-icon " + type);
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.file("/icons/trash.svg#") + type);
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
      wrapper.innerHTML = "No results"; 
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
      }
      dateContainer.innerHTML = date;
      entriesContainer.appendChild(dateContainer);

      // add type 
      // var typeEntry = document.createElement("span");
      // typeEntry.classList.add("entry-type");
      // typeEntry.innerHTML = entry['type'];
      // entriesContainer.appendChild(typeEntry);
    
      // add icon for type 
      var iconContainer = document.createElement("span");
      iconContainer.classList.add("entry-icon-container");
      iconContainer.appendChild(this.svgIconFactory(entry['type']));
      entriesContainer.appendChild(iconContainer);

      wrapper.appendChild(entriesContainer);
    }

    return wrapper;
  },
})