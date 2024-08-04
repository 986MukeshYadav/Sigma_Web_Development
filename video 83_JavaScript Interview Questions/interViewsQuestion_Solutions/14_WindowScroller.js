// 14) The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.


function smoothScrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

document.addEventListener('content',function(){
    const scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click',smoothScrollToTop);
});