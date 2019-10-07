/**
 *
 * Job Description
 *   @param jobTitle: @typeparam Array<string | number>,
 *   @param date: @typeparam 'Array<string | number>',
 *   @param jobLocal: @typeparam Array<string | number>,
 *   @param description: @typeparam Array<string | number>,
 *   @param color: @typeparam string,
 *   @param id: @typeparam string
 *
 */
export interface JobDescription {
  jobTitle: Array<string | number> ;
  date: Array<string | number>;
  jobLocal: Array<string | number>;
  description: Array<string | number>;
  color: string;
  id: string;
}

/**
 *
 *  Muda o estado do elemento para ficar visivel
 * o element (agarra o id do child) quando clicado (Melhoria possivel)
 *
 */
export function triggerDiv(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
      element.style.display = 'block';
      // element.classList.add('alert alert-success');
    } else {
      element.style.display = 'none';
      // element.classList.remove('alert alert-success');
    }
}
