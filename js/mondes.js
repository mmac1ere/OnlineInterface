
                    const titre = document.querySelector(".img");/*ici on choisi la balise où affecter l'animation*/
                    titre.style.position = "absolute";/* ici ca definit la position*/
                    let topPos = 0;/*initialisation de la variable topPos*/
                    let dir = 3;/*initialisation de la variable dir pour direction*/

                   function montedescend() {/*definition de fonction*/
                      if (topPos == 500){ dir = 3}/*condition sur la position*/
                      else if (topPos == -150) { dir = -3}/*condition sur la position*/
                      topPos += 2 * dir;/*instruction*/
                       titre.style.top = '$ {topPos}px';
                       requestAnimationFrame(montedescend);
                   }

                   requestAnimationFrame(montedescend);
                
        