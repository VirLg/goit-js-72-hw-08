import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);



player.on('timeupdate', function(data) {
    const { seconds } = data

    return localStorage.setItem('timeNow', seconds)     
});


const nowPlay = localStorage.getItem("timeNow")

const responce = localStorage.getItem("timeNow")?? 0


player.setCurrentTime(responce)


    
    
    
    
    
    
    

