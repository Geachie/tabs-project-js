const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if(id){
    // remove active
    btns.forEach((btn)=>{
      btns.classList.remove('active');
      // add active to clicked btn
      e.target.classList.add('active');
    });     
    // hide other articles
    articles.forEach((article)=>{
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});