class Form 
{
  constructor() 
  {
    this.input=createInput("name");
    this.button=createButton("PLAY")
    this.title=createImg("./assets/title.png")
    this.greeting=createElement("h2")
  }

  display()
  {
    this.input.position(width/2,height/2);
    this.input.class("customInput");
    this.button.position(width/2+40,height/2+50)
    this.button.class("customButton");
    this.button.size(100,30)
    this.title.position(120,50)
    this.title.class("gameTitle")
    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    this.greeting.html("WELCOME " +this.input.value()+" WAIT FOR OTHER PLAYERS TO JOIN")
    this.greeting.position(500,300)
    this.greeting.class("greeting")
    })

  }





  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
