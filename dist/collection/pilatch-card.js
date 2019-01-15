export class PilatchCard {
    render() {
        return (h("div", { class: "pilatch-card_container" },
            h("div", { class: "pilatch-card_back" }),
            h("div", { class: "pilatch-card_front" })));
    }
    static get is() { return "pilatch-card"; }
    static get style() { return "/**style-placeholder:pilatch-card:**/"; }
}
