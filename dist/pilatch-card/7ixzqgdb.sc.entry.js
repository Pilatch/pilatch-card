const a=window.PilatchCard.h;class c{render(){return a("div",{class:"pilatch-card_container"},a("div",{class:"pilatch-card_back"}),a("div",{class:"pilatch-card_front"}))}static get is(){return"pilatch-card"}static get style(){return"pilatch-card .pilatch-card_container{display:inline-block;position:relative;height:350px;width:250px;-webkit-perspective:1000px;perspective:1000px}pilatch-card[binary] .pilatch-card_container{height:250px;width:350px}pilatch-card[binary] .pilatch-card_front{background-position-x:-3750px;background-position-y:-350px}pilatch-card[binary] .pilatch-card_back{background-position-x:-3750px;background-position-y:-600px}pilatch-card[nothing] .pilatch-card_container{border:2px dashed grey;border-radius:6px}pilatch-card[nothing] .pilatch-card_back,pilatch-card[nothing] .pilatch-card_front{background:none}pilatch-card[clickable]{cursor:pointer}pilatch-card[known]:not([up]) .pilatch-card_front{-webkit-backface-visibility:visible;backface-visibility:visible}pilatch-card[known]:not([up]) .pilatch-card_back{opacity:.33}pilatch-card .pilatch-card_back,pilatch-card .pilatch-card_front{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-image:url(https://pilatch.com/sites/default/files/pilatch-card/sprite.png);background-size:4100px 1050px;position:absolute;height:100%;width:100%}pilatch-card:not([no-transition]) .pilatch-card_back,pilatch-card:not([no-transition]) .pilatch-card_front{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}pilatch-card .pilatch-card_back{background-position-x:-3750px;-webkit-transform:rotateY(0deg);transform:rotateY(0deg);z-index:2}pilatch-card .pilatch-card_front{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}pilatch-card[suit=rock] .pilatch-card_front{background-position-y:-350px}pilatch-card[suit=scissors] .pilatch-card_front{background-position-y:-700px}pilatch-card[rank=\"2\"] .pilatch-card_front{background-position-x:-250px}pilatch-card[rank=\"3\"] .pilatch-card_front{background-position-x:-500px}pilatch-card[rank=\"4\"] .pilatch-card_front{background-position-x:-750px}pilatch-card[rank=\"5\"] .pilatch-card_front{background-position-x:-1000px}pilatch-card[rank=\"6\"] .pilatch-card_front{background-position-x:-1250px}pilatch-card[rank=\"7\"] .pilatch-card_front{background-position-x:-1500px}pilatch-card[rank=\"8\"] .pilatch-card_front{background-position-x:-1750px}pilatch-card[rank=\"9\"] .pilatch-card_front{background-position-x:-2000px}pilatch-card[rank=\"10\"] .pilatch-card_front{background-position-x:-2250px}pilatch-card[rank=\"11\"] .pilatch-card_front{background-position-x:-2500px}pilatch-card[rank=\"12\"] .pilatch-card_front{background-position-x:-2750px}pilatch-card[rank=\"13\"] .pilatch-card_front{background-position-x:-3000px}pilatch-card[rank=\"14\"] .pilatch-card_front{background-position-x:-3250px}pilatch-card[rank=\"15\"] .pilatch-card_front{background-position-x:-3500px}pilatch-card[up] .pilatch-card_back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}pilatch-card[up] .pilatch-card_front{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}"}}export{c as PilatchCard};