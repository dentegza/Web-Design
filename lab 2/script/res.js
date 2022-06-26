document.getElementById('res-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var points = 0;
    if (document.getElementById('flexRadioDefault03').checked == true)
        points++;
    if (document.getElementById('flexRadioDefault13').checked == true)
        points++;
    if (document.getElementById('flexRadioDefault21').checked == true)
        points++;
    if (document.getElementById('flexRadioDefault32').checked == true)
        points++;
    document.getElementById('show-res').innerHTML = "Result: "+points+"/4";
})