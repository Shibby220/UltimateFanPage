$(function(){
    $("form").on("button", function(event){
        event.prenetdefault();
        // prepare the request
        var request = gapi.client.youtube.search.list({
        part:"snippet",   
        })

    })
});
function init(){
   gapi.client.setApiKey("AIzaSyA2gNrwIhvykfBhU8IxUYL7T1HboCHCbfk");
   gapi.client.load("youtube","v3", function(){
       // yt api is ready
   }) 
}