class PilatchCard extends HTMLElement {
  connectedCallback() {
    let shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.innerHTML = `<div class="pilatch-card_container">
  <div class="pilatch-card_back"></div>
  <div class="pilatch-card_front"></div>
</div><style>:root {
  /*
    TODO calculate scaled card height and width based on viewport width
    TODO calculate the pilatch-card-scale based on the relationship between the card height and scaled height,
    if possible, as pilatch-card.css uses that in a few places.
  */
}

:host .pilatch-card_container {
  display: inline-block;
  position: relative;
  height: 350px;
  width: 250px;
  /* entire container, keeps perspective */
  perspective: 1000px;
}

:host([binary]) .pilatch-card_container {
  /* Binary cards are presented rotate ninety degrees, so width and height are swapped. */
  height: 250px;
  width: 350px;
}

:host([binary]) .pilatch-card_front {
  background-position-x: -3750px;
  background-position-y: -350px;
}

:host([binary]) .pilatch-card_back {
  background-position-x: -3750px;
  background-position-y: -600px;
}

:host([nothing]) .pilatch-card_container {
  border: 2px dashed gray;
  border-radius: 6px;
}

:host([nothing]) .pilatch-card_front,
:host([nothing]) .pilatch-card_back {
  background: none;
}

:host([clickable]) {
  cursor: pointer;
}

:host([known]:not([up])) .pilatch-card_front {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}

:host([known]:not([up])) .pilatch-card_back {
  opacity: 0.33;
}

:host .pilatch-card_front {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: url(/node_modules/pilatch-card/assets/sprite.png);
  background-size: 4100px 1050px;
  position: absolute;
  height: 100%;
  width: 100%;
}

:host .pilatch-card_back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: url(/node_modules/pilatch-card/assets/sprite.png);
  background-size: 4100px 1050px;
  position: absolute;
  height: 100%;
  width: 100%;
}

:host(:not([no-transition])) .pilatch-card_front {
  /* flip speed goes here */
  transition: transform 0.6s;
}

:host(:not([no-transition])) .pilatch-card_back {
  /* flip speed goes here */
  transition: transform 0.6s;
}

:host .pilatch-card_back {
  background-position-x: -3750px;
  /* for firefox 31 */
  transform: rotateY(0deg);
  z-index: 2;
}

:host .pilatch-card_front {
  /* initially hidden pane */
  transform: rotateY(-180deg);
}

:host([suit='rock']) .pilatch-card_front {
  background-position-y: -350px;
}

:host([suit='scissors']) .pilatch-card_front {
  background-position-y: -700px;
}

:host([rank='2']) .pilatch-card_front {
  background-position-x: -250px;
}

:host([rank='3']) .pilatch-card_front {
  background-position-x: -500px;
}

:host([rank='4']) .pilatch-card_front {
  background-position-x: -750px;
}

:host([rank='5']) .pilatch-card_front {
  background-position-x: -1000px;
}

:host([rank='6']) .pilatch-card_front {
  background-position-x: -1250px;
}

:host([rank='7']) .pilatch-card_front {
  background-position-x: -1500px;
}

:host([rank='8']) .pilatch-card_front {
  background-position-x: -1750px;
}

:host([rank='9']) .pilatch-card_front {
  background-position-x: -2000px;
}

:host([rank='10']) .pilatch-card_front {
  background-position-x: -2250px;
}

:host([rank='11']) .pilatch-card_front {
  background-position-x: -2500px;
}

:host([rank='12']) .pilatch-card_front {
  background-position-x: -2750px;
}

:host([rank='13']) .pilatch-card_front {
  background-position-x: -3000px;
}

:host([rank='14']) .pilatch-card_front {
  background-position-x: -3250px;
}

:host([rank='15']) .pilatch-card_front {
  background-position-x: -3500px;
}

:host([up]) .pilatch-card_back {
  transform: rotateY(180deg);
}

:host([up]) .pilatch-card_front {
  transform: rotateY(0deg);
}</style>`;
  }

  querySelector(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  querySelectorAll(selector) {
    return this.shadowRoot.querySelectorAll(selector);
  }

}

customElements.define('pilatch-card', PilatchCard);