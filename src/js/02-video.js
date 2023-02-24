import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);



player.on('timeupdate', function(data) {
    const { seconds } = data
    return localStorage.setItem('timeNow', seconds)     
});


const nowPlay = localStorage.getItem("timeNow")



player.setCurrentTime(nowPlay).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    

    // !!!!!!Зробив по паузі, тому  lodash.throttle не було сенсу включати. бо по "on" мене напрягло, що рахуе три рази на секунду((


