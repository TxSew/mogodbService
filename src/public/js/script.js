
function timedown() {
    var gio=2;
    var phut=10;
    var giay=8;
   setInterval(function() {
       giay--;
       if (giay === -1){
           phut= phut -1;
           giay=59;
       }
       if (phut === -1){
           gio= gio -1;
           phut= 59;
       }
       var thongtin=gio+"h    "+  phut  +  "m    "+  giay+ "s";
    //đưa thông tin lên web
    //document.querySelector('.countdown').innerHTML=thongtin
    //document.querySelector('.countdown1').innerHTML=thongtin
   },1000)
}
timedown()


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:43,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    stagePadding:20,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,

        },
        1000:{
            items:3
        }
    }
})

/*modal*/
$(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
        
    
    
      
      
    // document ready  
    });

//Tab -Ui

//productManlist()

function bosuutaptab(){
    const all=document.querySelectorAll.bind(document)
    const products=all('.productsMan')
    const alltab=document.querySelectorAll('.tab')

    const tabActive=document.querySelector('.tab.active1')
    const line=document.querySelector('.line')
    line.style.left=tabActive.offsetLeft + 'px'
    line.style.width=tabActive.offsetWidth + 'px'
alltab.forEach(function(tab,index){
    const pane=products[index]
    tab.onclick=function(){
        tab.parentElement.querySelector('.tab.active1').classList.remove('active1')
        pane.parentElement.querySelector('.productsMan.active1').classList.remove('active1')
        line.style.left=tab.offsetLeft + 'px'
        line.style.width=tab.offsetWidth + 'px'
        tab.classList.add('active1')
        pane.classList.add('active1')
    }
})
}
bosuutaptab()




