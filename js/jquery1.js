$(document).ready(function(){
    $("button").click(function(){
        console.log($("img").attr("src"));
        console.log($("img").attr("width"));
        $("a").attr("href","https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_attr_get");
        $("#p1").append("hgab");
        $("#p2").prepend("sdkjvnskj");
        $("#img1").remove();
        
    });
});