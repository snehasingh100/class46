class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()

        })
    }
update(state){
    database.ref("/").update({gameState:state})

    
}

    start(){
        form=new Form()
        form.display()
        player=new Player()
        playerCount=player.getCount()
        bike1=createSprite(width/2-50,height-100)
        bike1.addImage("bike1",bike1_img)
        bike2=createSprite(width/2+100,height-100)
        bike2.addImage("bike2",bike2_img)
        bikes=[bike1,bike2]

        
    }
    handleElements(){
        form.hide()
        form.titleImg.position(40,50)

    }
    play(){
        this.handleElements()
        Player.getPlayersInfo()
        if(allPlayers!==undefined){
            image(track,0,-height*5,width,height*6)
            drawSprites()
        }
    }
}