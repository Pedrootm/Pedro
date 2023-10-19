
   $(document).ready(function() {
 // Adicione um ouvinte de evento ao botão de pesquisa
      $('#searchButton').click(function() {
        const keyword = $('#nameInput').val(); // Obtenha o valor do campo de texto
    	window.open(`anime.html?animePath=${keyword}`, '_self');
      });

    });



    $(document).ready(function() {
      // Função para fazer a solicitação com base no nome digitado
      function searchWithKeyword(keyword) {
        $.get(`https://servernode-v7d3.onrender.com/search?s=${keyword}&submit=Buscar`, function(data) {
          $('#content').html(data);

 		addLinkClickListeners();

        });
      }

function addLinkClickListeners() {
  // Ouvinte de evento para os links que contêm a base "https://www.anitube.vip/anime/"
  $('a[href^="http://www.anitube.vip/anime/"]').click(function(e) {
    e.preventDefault(); // Impede o link de navegar para outra página
const animeUrl = $(this).attr('href'); // Obtém o URL do link
  const animePath = animeUrl.replace('http://www.anitube.vip/anime/', ''); // Extrai a parte após a base

  // Abre a página de detalhes do anime em uma nova guia
  window.open(`anime.html?animePath=${animePath}`, '_blank');
  });
}









     

    });


