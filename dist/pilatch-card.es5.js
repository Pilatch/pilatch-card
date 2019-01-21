function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

let PilatchCard =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(PilatchCard, _HTMLElement);

  function PilatchCard() {
    _classCallCheck(this, PilatchCard);

    return _possibleConstructorReturn(this, (PilatchCard.__proto__ || Object.getPrototypeOf(PilatchCard)).apply(this, arguments));
  }

  _createClass(PilatchCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "<div class=\"pilatch-card_container\">\n  <div class=\"pilatch-card_back\"></div>\n  <div class=\"pilatch-card_front\"></div>\n</div>";
    }
  }]);

  return PilatchCard;
}(HTMLElement);

;

(function () {
  var style = document.createElement('style');
  style.textContent = ':root {  /*    TODO calculate scaled card height and width based on viewport width    TODO calculate the pilatch-card-scale based on the relationship between the card height and scaled height,    if possible, as pilatch-card.css uses that in a few places.  */}pilatch-card .pilatch-card_container {  display: inline-block;  position: relative;  height: 350px;  width: 250px;  /* entire container, keeps perspective */  perspective: 1000px;}pilatch-card[binary] .pilatch-card_container {  /* Binary cards are presented rotate ninety degrees, so width and height are swapped. */  height: 250px;  width: 350px;}pilatch-card[binary] .pilatch-card_front {  background-position-x: -3750px;  background-position-y: -350px;}pilatch-card[binary] .pilatch-card_back {  background-position-x: -3750px;  background-position-y: -600px;}pilatch-card[nothing] .pilatch-card_container {  border: 2px dashed gray;  border-radius: 6px;}pilatch-card[nothing] .pilatch-card_front,pilatch-card[nothing] .pilatch-card_back {  background: none;}pilatch-card[clickable] {  cursor: pointer;}pilatch-card[known]:not([up]) .pilatch-card_front {  -webkit-backface-visibility: visible;  backface-visibility: visible;}pilatch-card[known]:not([up]) .pilatch-card_back {  opacity: 0.33;}pilatch-card .pilatch-card_front {  -webkit-backface-visibility: hidden;  backface-visibility: hidden;  background-image: url(assets/sprite.png);  background-size: 4100px 1050px;  position: absolute;  height: 100%;  width: 100%;}pilatch-card .pilatch-card_back {  -webkit-backface-visibility: hidden;  backface-visibility: hidden;  background-image: url(assets/sprite.png);  background-size: 4100px 1050px;  position: absolute;  height: 100%;  width: 100%;}pilatch-card:not([no-transition]) .pilatch-card_front {  /* flip speed goes here */  transition: transform 0.6s;}pilatch-card:not([no-transition]) .pilatch-card_back {  /* flip speed goes here */  transition: transform 0.6s;}pilatch-card .pilatch-card_back {  background-position-x: -3750px;  /* for firefox 31 */  transform: rotateY(0deg);  z-index: 2;}pilatch-card .pilatch-card_front {  /* initially hidden pane */  transform: rotateY(-180deg);}pilatch-card[suit=\'rock\'] .pilatch-card_front {  background-position-y: -350px;}pilatch-card[suit=\'scissors\'] .pilatch-card_front {  background-position-y: -700px;}pilatch-card[rank=\'2\'] .pilatch-card_front {  background-position-x: -250px;}pilatch-card[rank=\'3\'] .pilatch-card_front {  background-position-x: -500px;}pilatch-card[rank=\'4\'] .pilatch-card_front {  background-position-x: -750px;}pilatch-card[rank=\'5\'] .pilatch-card_front {  background-position-x: -1000px;}pilatch-card[rank=\'6\'] .pilatch-card_front {  background-position-x: -1250px;}pilatch-card[rank=\'7\'] .pilatch-card_front {  background-position-x: -1500px;}pilatch-card[rank=\'8\'] .pilatch-card_front {  background-position-x: -1750px;}pilatch-card[rank=\'9\'] .pilatch-card_front {  background-position-x: -2000px;}pilatch-card[rank=\'10\'] .pilatch-card_front {  background-position-x: -2250px;}pilatch-card[rank=\'11\'] .pilatch-card_front {  background-position-x: -2500px;}pilatch-card[rank=\'12\'] .pilatch-card_front {  background-position-x: -2750px;}pilatch-card[rank=\'13\'] .pilatch-card_front {  background-position-x: -3000px;}pilatch-card[rank=\'14\'] .pilatch-card_front {  background-position-x: -3250px;}pilatch-card[rank=\'15\'] .pilatch-card_front {  background-position-x: -3500px;}pilatch-card[up] .pilatch-card_back {  transform: rotateY(180deg);}pilatch-card[up] .pilatch-card_front {  transform: rotateY(0deg);}';
  document.head.appendChild(style);
})();

window.addEventListener('WebComponentsReady', () => {
  customElements.define('pilatch-card', PilatchCard);
});