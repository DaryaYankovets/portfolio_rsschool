document.addEventListener('DOMContentLoaded', () => {

    /* start: --- animation --- */
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
    let options = {
    threshold:  [0.3] };
    let observer = new IntersectionObserver(onEntry, options);
    let elementsAnimation = document.querySelectorAll('.element-animation');
    
    elementsAnimation.forEach(elem => observer.observe(elem));
    /* end: --- animation --- */

   
});