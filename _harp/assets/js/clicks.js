/* back arrow click should go home only on /writings/, otherwise go to /writings/ */

var backAnchor = document.getElementById('back');

function handleClick(event) {
    event.preventDefault();
    
    if(window.location.pathname === '/writings/') {
        window.location.href='../';
        console.log('home');
    } else {
        window.location.href='../writings/';
        console.log('/writings/');
    }
}

backAnchor.addEventListener('click', handleClick, false);
