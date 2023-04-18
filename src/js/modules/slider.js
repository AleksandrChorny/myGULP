export function go() {
   const slider = document.querySelector('.slider');
   const slideElems = document.querySelector('.slider__items');
   const slideElem = document.querySelectorAll('.slider__item');
   const left = slideElems.getBoundingClientRect().left;

   console.log(slider.scrollLeft)
   const scroll1 = slider.scrollLeft + 200;
   const div = document.createElement('div');
   div.classList.add('q');
   slideElems.prepend(div);
   slider.scroll(scroll1, 0);

   slider.addEventListener('scroll', scroll);

   function scroll() {

      slideElems.getBoundingClientRect().left
      el.getBoundingClientRect().left

      const coordinate = (el.right - el.left) / 2 - slideElems.getBoundingClientRect().left + slideElems.clientWidth / 2
      //const div = document.createElement('div')
      //console.log(slideElems)
      //slideElems.append(div)
      slideElem.forEach(el => {
         //el.getBoundingClientRect().right
         //console.log(left);

         //console.log(el);
         //console.log(el.getBoundingClientRect().right);

         if (el.getBoundingClientRect().left < left) {
            //const new = el;
            //const div = document.createElement('div')
            el.classList.add('scroll')
            //console.log(slideElems)
            //slideElems.remove(el)
            //slideElems.append(el)
            console.log(el);

         }
         //console.log(slideElems.clientWidth);
         //console.log(slideElems.getBoundingClientRect().left);


      })

   }

   document.addEventListener('click', () => {
      console.log(slider.scrollLeft)
      const scroll = slider.scrollLeft + 200;
      const div = document.createElement('div');
      div.classList.add('q');
      slideElems.prepend(div);
      slider.scroll(scroll, 0);
      //const left = slideElems.getBoundingClientRect().left
      //slideElems.style.left = left;
      //console.log(slideElems)
   })
}