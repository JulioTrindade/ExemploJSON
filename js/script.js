

$.getJSON("database.json", function(data) {
  var bands = data.bands;
  var saida;
  for (i = 0; i < bands.length; i++) {
    saida += '<div class="row">';
    saida += '<div class="col-lg-4 band-img">';
    saida += '<img src="' + bands[i].foto + '" alt="' + bands[i].nome + '" title="' + bands[i].nome + '">';
    saida += '<h6> ' + bands[i].matricula + '</h6>';
    saida += '</div>';
    saida += '</div>';
  }

  document.getElementById('tela').innerHTML = saida;
});