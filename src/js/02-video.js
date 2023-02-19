import player from '@vimeo/player';



console.log(player);


// console.log(Player);

// window.Player = Player;
// var player = new Player('vimeo-player')


// function onYouTubeIframeAPIReady() {
//    player = new YT.Player('vimeo-player', {
//                          height: '500',
// 			playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0},
// 			width: '850',
// 			videoId: 'CyVuYAHiZb8',
// 			events: {
// 			  'onReady': onPlayerReady
// 			}
// 		 });
// }


// 	function onYouTubeIframeAPIReady() {
//     player = new YT.Player('vimeo-player', {
//         width: 600,
//         height: 400,
//         videoId: 'Xa0Q0J5tOP0',
//         playerVars: {
//             color: 'white',
//             playlist: 'taJ60kskkns,FG0fTKAqZ5g'
//         },
//         events: {
//             onReady: initialize
//         }
//     });
// }



const iframe = document.querySelector('#vimeo-player');

console.log(iframe);

    // const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });