import { Component } from '@stencil/core'

@Component({
  tag: 'pilatch-card',
  styleUrl: 'pilatch-card.css'
})
export class PilatchCard {
  render() {
    return (
      <div class="pilatch-card_container">
        <div class="pilatch-card_back"></div>
        <div class="pilatch-card_front"></div>
      </div>
    )
  }
}
