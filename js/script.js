const main = ()=>{
const likes = document.querySelectorAll(".trendimg_card-body--like");

likes.forEach(link=>{
   link.addEventListener("click", function(e){
      e.preventDefault();
      // console.log(this);
      const heart = this.children[0];
      heart.classList.toggle("fill");
      // console.log(heart);
   })
})

}

main();