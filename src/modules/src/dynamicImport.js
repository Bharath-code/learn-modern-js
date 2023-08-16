


//dynamic import
const shapes = ['circle','circle','square']
    for (const shape of shapes) {
      if (shape === "circle") {
        const circle = await import("./circle.js");
        circle.render()
      } else if (shape === "square") {
        const square = await import("./square.js");
        square.render()
      }
    }

    console.log("inside conditional dynamic import");
    for(const shape of shapes){
        
        const {render} = await import(`./${shape}.js`)
        render()
    }

export {};
