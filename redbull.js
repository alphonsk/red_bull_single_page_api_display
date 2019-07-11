$(function(){

    $.ajax({
        type: 'GET',
        url: 'https://www.redbullshopus.com/products.json',
        success: function(data){
 
            for(var x=0; x<data.products.length; x++){
               $("#container").append("<div class='img'> <img src=" + data.products[x].images[0].src  + "  align='middle' style='width:80%'><div id='title'>"+ data.products[x].title+ "</div><div id='info'>"+ data.products[x].body_html+"</div");
            }
        }
    })
 });




 
 