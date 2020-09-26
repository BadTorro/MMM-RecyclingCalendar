Module.register("MMM-RecyclingCalendar", {
    defaults: {
        foo: "I'm alive!"
      },
    start: function (){ // is executed when module is loaded successfully 
        this.count = 0
        var timer = setInterval(()=>{
          this.updateDom()
          this.count++
        }, 1000)
      },
      getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, World! " + this.config.foo
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
            elem.innerHTML = "Count:" + payload
            break
        }
      },
  })