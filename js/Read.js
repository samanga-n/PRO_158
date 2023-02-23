AFRAME.registerComponent("read", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "Superman",
          title: "Superman",
          url: "./assets/thumbnails/Cover_of_Superman_Comic_1st_Edition_-_Summer_1939.jpg",
        },
        {
          id: "Spiderman",
          title: "Spider Man",
          url: "./assets/thumbnails/ASM2022001_Davis-scaled.jpg",
        },
  
        {
          id: "captain-aero",
          title: "Captain Aero",
          url: "./assets/thumbnails/e75f47288e9660b0af2480f3596b58a6--sci-fi-comics-horror-comics.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./assets/thumbnails/829757.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
        // Title Text Element
        const titleEl = this.createTittle(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      
      entityEl.setAttribute("material",{
        color:"red",
        opacity:0.5,
      })
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("position",position)
     
       entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
      })
      return entityEl
    },
     
    createThumbnail: function(item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:15,
        height:25
      })
      entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
      entityEl.setAttribute("material",{
        src:item.url
      })
       return entityEl
    },
  
    createTittle: function(position,item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:60,
        color:"black",
        value:item.title
      })
      const textpos = position
      textpos.y=-20
      entityEl.setAttribute("position",textpos)
      entityEl.setAttribute("visible",true)
      return entityEl
    }
  
  });
  
