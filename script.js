
// Анимация появления при прокрутке страницы
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('animation-show');
      }
      else{
        change.target.classlist.remove('animation-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  