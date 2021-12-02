
     $(".trending_tabs-link").on("click", function(e){
      e.preventDefault();

      $(".trending_tabs-link").removeClass('tabs_link-active');
      $(".trending_card").removeClass('card_tab-active');

      $(this).addClass('tabs_link-active');
      $($(this).attr("href")).addClass("card_tab-active"); 
});
