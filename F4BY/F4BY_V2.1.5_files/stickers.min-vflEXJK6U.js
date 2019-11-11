define(["require","exports","tslib","react","classnames","prop-types","comments2/components/sticker_component/sticker_pane","comments2/components/sticker_component/sticker_tab","spectrum/icon_arrow","comments2/components/sticker_component/sticker_contants"],function(e,t,r,n,c,s,o,a,i,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importStar(n),c=r.__importDefault(c),s=r.__importStar(s);var m=(function(e){function t(t){var r=e.call(this,t)||this;return r.scrollPaneRef=n.createRef(),r.onLeftArrowPress=function(){r.setState({scrollOffset:Math.max(0,r.state.scrollOffset-l.SCROLL_DISTANCE)})},r.onRightArrowPress=function(){r.setState({scrollOffset:Math.min(r.maxScroll,r.state.scrollOffset+l.SCROLL_DISTANCE)})},r.handleChangeSelection=function(e){e!==r.state.selected&&(r.setState({selected:e}),r.resetScrollPane())},r.state={maxScroll:1,scrollOffset:0,selected:0},r}return r.__extends(t,e),Object.defineProperty(t.prototype,"localization",{get:function(){return this.context.localization},enumerable:!0,configurable:!0}),t.prototype.componentDidUpdate=function(){var e=this.maxScroll;e!==this.state.maxScroll&&this.setState({maxScroll:e})},Object.defineProperty(t.prototype,"maxScroll",{get:function(){var e=this.props.stickerPacks,t=this.state,r=t.maxScroll,n=t.scrollOffset,c=n>0,s=n<r,o=(c?l.STICKER_ARROW_WIDTH:0)+(s?l.STICKER_ARROW_WIDTH:0);return Math.max(e.length*l.STICKER_TAB_ITEM_WIDTH-l.STICKER_INNER_WIDTH+o,0)},enumerable:!0,configurable:!0}),t.prototype.resetScrollPane=function(){this.scrollPaneRef.current&&(this.scrollPaneRef.current.scrollTop=0)},t.prototype.renderLeftChevronButton=function(){return n.createElement("button",{"aria-label":this.localization.a11yPrevStickerSet,className:c.default("sc-sticker-arrow","sc-sticker-arrow-left",{"sc-sticker-arrow-hide":0===this.state.scrollOffset}),onClick:this.onLeftArrowPress},n.createElement("div",{className:"sc-sticker-arrow-container"},n.createElement(i.IconArrow,{name:"right"})))},t.prototype.renderRightChevronButton=function(){var e=this.state,t=e.scrollOffset,r=e.maxScroll;return n.createElement("button",{"aria-label":this.localization.a11yNextStickerSet,className:c.default("sc-sticker-arrow","sc-sticker-arrow-right",{"sc-sticker-arrow-hide":t===r}),onClick:this.onRightArrowPress},n.createElement("div",{className:"sc-sticker-arrow-container"},n.createElement(i.IconArrow,{name:"right"})))},t.prototype.renderTabs=function(e){var t=this.state.scrollOffset,r="translate("+-t+"px)";return n.createElement("div",{className:"sc-sticker-nav"},this.renderLeftChevronButton(),n.createElement("div",{className:"sc-sticker-inner"},n.createElement("div",{className:"sc-sticker-inner-window",style:{transform:r}},e)),this.renderRightChevronButton())},t.prototype.render=function(){var e=this,t=this.props.stickerPacks,r=this.state.selected;if(t.length>0){var c=t.map(function(t,c){return n.createElement(a.StickerTabComponent,{key:t.id,stickerPack:t,isSelected:c===r,onClick:function(){return e.handleChangeSelection(c)}})}),s=t.map(function(t,c){return n.createElement(o.StickerPaneComponent,{key:t.id,stickerPack:t,isSelected:c===r,onStickerSelected:e.props.onStickerSelected})});return n.createElement("div",{className:"sc-sticker-container",tabIndex:-1},this.renderTabs(c),n.createElement("div",{className:"sc-sticker-divider"}),n.createElement("div",{className:"sc-sticker-pane-scroll",ref:this.scrollPaneRef},s))}return null},t})(n.Component);t.Stickers=m,m.contextTypes={localization:s.object}});
//# sourceMappingURL=stickers.min.js-vflY5pBxE.map