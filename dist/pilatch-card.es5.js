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

window.addEventListener('WebComponentsReady', () => {
  customElements.define('pilatch-card', PilatchCard);
});