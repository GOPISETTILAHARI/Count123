$(document).ready(function() {
    var count=1;
    var inter1 = setInterval(function(){
        var r = Math.floor(Math.random() * 3) + 1;
        console.log(r);
        $('#box')
        .append($('<div class="num">'+r+'</div>'));

        $('.num').animate({left:"100%"},1500,"linear", function(){
            $(this).remove(); 
        });
                   
    },2000);
        
    $(document).keypress(function(e){
        if(e.which === 32){
            $('#girl').animate({top:"50px"},300)
            .animate({top: "300px"},300)
        }
    });  

    var inter2 = setInterval(function(){
        var p=$('#girl').position();
        $('#box').children('.num').each(function(){
            var o=$(this).position();
            console.log(o,p);
            if( (p.left <= o.left + 50 && p.left + 100 >= o.left)&& (o.top -50 <= p.top && o.top + 50 >= p.top)){
                // $('.num').remove();
                var r = parseInt($('.num').text());
                $('.num').remove();
                if(r === count){
                    if(count === 3){
                        clearInterval(inter1);
                        $('#box')
                        .append($(`<button class="bb"><a href="file:///home/user/Downloads/mine/minesweeper-master/game.html">${r},${count}, Win</a></button>`));
                    //    alert();
                      
                    }
                    count+=1;
                    
                }else{
                    clearInterval(inter1);
                    $('#box')
                     .append($(`<button class="bb"><a href="file:///home/user/Downloads/mine/minesweeper-master/game.html">${r},${count}, Game Over</a></button>`));
                    // alert(`${r},${count}, Game Over`);
                    
                }
            }
        });
    },100);
        

});


    
    

    
    
  
   
