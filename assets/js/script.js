var defaultColor = '#fff';
var clickedColor = '#f0f0f0';

document.getElementById('one').addEventListener('click', function(){
    document.getElementById('two').style.backgroundColor=defaultColor;
    document.getElementById('category').style.backgroundColor=defaultColor;

    document.getElementById('three').style.backgroundColor=defaultColor;
    document.getElementById('due-date').style.backgroundColor=defaultColor;

    document.getElementById('one').style.backgroundColor=clickedColor;
    document.getElementById('description').style.backgroundColor=clickedColor;
});

document.getElementById('two').addEventListener('click', function(){
    document.getElementById('one').style.backgroundColor=defaultColor;
    document.getElementById('description').style.backgroundColor=defaultColor;

    document.getElementById('three').style.backgroundColor=defaultColor;
    document.getElementById('due-date').style.backgroundColor=defaultColor;

    document.getElementById('two').style.backgroundColor=clickedColor;
    document.getElementById('category').style.backgroundColor=clickedColor;
});

document.getElementById('three').addEventListener('click', function(){
    document.getElementById('one').style.backgroundColor=defaultColor;
    document.getElementById('description').style.backgroundColor=defaultColor;

    document.getElementById('two').style.backgroundColor=defaultColor;
    document.getElementById('category').style.backgroundColor=defaultColor;

    document.getElementById('three').style.backgroundColor=clickedColor;
    document.getElementById('due-date').style.backgroundColor=clickedColor;
});

$('.card-selector').click(function( event ) {
    var parent = $(this).parent();
    $(this).children().toggleClass("hide");
    $(parent[0].children[1]).toggleClass("strike");
    parent.toggleClass("delete");
});

function deleteContacts(){
    console.log("deleting selected contacts")
    var ids = [];
    $("li").each(function() {
        // console.log($( this )[0].children[0].classList.length);
        let card = $(this)[0].children[0];
        // console.log(card);
        if(card.classList.length == 2){
            console.log("id : ", card.id);
            ids.push(card.id);
        }
    });
    console.log(ids);

    $.post("/delete", { 'ids': ids } ).done(function(data){
        console.log(data);
        location.reload();
    });
}