Module.register("MMM-RecyclingCalendar", {
    defaults: {
        foo: "I'm alive!",
        bar: "nope"
      },
    start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ') + this.name; 
        
        this.sendSocketNotification('MMM-RECYCLINGCALENDAR-CONFIG', this.config);

        this.count = 0
        var timer = setInterval(()=>{
          this.updateDom()
          this.count++
        }, 1000)
      },
      getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, World! " + this.config.foo;
        var subElement = document.createElement("p")
        subElement.innerHTML = "Count:" + this.count
        subElement.id = "COUNT"
        element.appendChild(subElement)
        return element
      },
      
      notificationReceived: function(notification, payload, sender) {
        switch(notification) {
          case "DOM_OBJECTS_CREATED":
            var timer = setInterval(()=>{
              this.updateDom()
              this.count++
            }, 1000)
            break
        }
      },
      socketNotificationReceived: function(notification, payload) {
        switch(notification) {
          case "I_DID":
            var elem = document.getElementById("COUNT")
            elem.innerHTML = payload;
            break
        }
      },
  })