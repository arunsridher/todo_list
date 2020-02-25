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
