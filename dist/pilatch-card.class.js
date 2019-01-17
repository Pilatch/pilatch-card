class PilatchCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="pilatch-card_container">
  <div class="pilatch-card_back"></div>
  <div class="pilatch-card_front"></div>
</div>`;
  }

}

customElements.define('pilatch-card', PilatchCard);