define(["require","exports","tslib","external/classnames","external/prop-types","react","spectrum/button","spectrum/popover","modules/clean/filepath","modules/clean/react_format","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/utils","modules/clean/react/share_download/util","modules/clean/react/share_download/models","modules/clean/react/share_download/util","modules/clean/share_download/types","modules/clean/react/title_bubble","modules/core/i18n","modules/core/browser_detection","modules/clean/react/file_viewer_sidebar/buttons/icon"],function(t,e,o,i,s,r,n,a,l,p,d,c,u,h,m,f,_,b,g,D,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=o.__importDefault(i),s=o.__importDefault(s),r=o.__importDefault(r),l=o.__importStar(l);var C=function(t){return D.is_mobile_or_tablet()||!t.title?r.default.createElement(r.default.Fragment,null,t.children):r.default.createElement(b.TitleBubble,{content:t.title,isTargetPositionFixed:!0,position:b.TitleBubble.POSITIONS.BOTTOM_ALIGN_RIGHT,distanceFromTarget:10},t.children)},T=(function(t){function e(e){var o=t.call(this,e)||this;return o.state={isDisabled:!0},o}return o.__extends(e,t),e.prototype.componentDidMount=function(){this.setState({isDisabled:this.props.isDisabled})},e.prototype.render=function(){var t={"download-button":!0,control__button:!0,"control__button--collapsed":this.props.isCollapsed};return this.props.className&&(t[this.props.className]=!0),r.default.createElement(C,{title:this.props.title},r.default.createElement(n.Button,{className:i.default(t),style:{display:"-webkit-box"},variant:this.props.importance,disabled:this.state.isDisabled,onClick:this.props.onClick,"aria-label":this.props.title},this.props.children))},e.defaultProps={isDisabled:!1,importance:"secondary"},e})(r.default.Component),y=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.render=function(){var t=this,e=function(e){e.preventDefault(),t.props.onClick&&t.props.onClick(t.props.option),t.props.option.handler(),d.logUserAction(t.props.option.userAction,u.getSplitButtonUserActionContext(c.SplitButtonActionLocation.Main,t.props.location))};return r.default.createElement(T,{isDisabled:this.props.isDisabled,onClick:e,importance:this.props.importance,isCollapsed:this.props.isCollapsed,title:"string"==typeof this.props.targetText?this.props.targetText:p.reactFormatToString(this.props.targetText)},this.props.isCollapsed?r.default.createElement(w.ButtonIcon,{name:"download-file",isPrimary:"primary"===this.props.importance}):this.props.targetText)},e})(r.default.Component);e.DownloadSimpleButton=y;var x=(function(t){function e(e){var o=t.call(this,e)||this;return o.onPopoverSelection=function(t){h.callOptionHandler(t,c.SplitButtonActionLocation.Split,o.props.onClick,o.props.location)()},o.state={isDisabled:!0},o}return o.__extends(e,t),e.prototype.componentDidMount=function(){this.setState({isDisabled:this.props.isDisabled})},e.prototype.renderIcon=function(){return r.default.createElement(w.ButtonIcon,{name:"download-file",isPrimary:"primary"===this.props.importance,"aria-label":"string"==typeof this.props.targetText?this.props.targetText:p.reactFormatToString(this.props.targetText)})},e.prototype.renderPopover=function(){var t=this.props.options.map(function(t){return r.default.createElement(a.PopoverContentItem,{key:t.text,value:t,disabled:t.isDisabled},t.text)}),e={"download-button":!0,control__button:!0,"control__button--collapsed":this.props.isCollapsed};return r.default.createElement(a.Popover,{key:"download-dropdown",onSelection:this.onPopoverSelection},r.default.createElement(a.PopoverTrigger,{"aria-label":"string"==typeof this.props.targetText?this.props.targetText:p.reactFormatToString(this.props.targetText)},r.default.createElement(n.Button,{className:i.default(e),tagName:"span",variant:this.props.importance,disabled:this.state.isDisabled},this.props.isCollapsed?this.renderIcon():this.props.targetText)),r.default.createElement(a.PopoverContent,{attachment:"right"},t))},e.prototype.render=function(){return this.props.isDisabled?r.default.createElement(T,{isDisabled:!0,importance:this.props.importance,title:this.props.title,isCollapsed:this.props.isCollapsed},this.props.isCollapsed?this.renderIcon():this.props.targetText):this.renderPopover()},e.defaultProps={importance:"secondary"},e})(r.default.Component);e.DownloadDropdown=x;var v=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.isDownloadAllowed=function(){return this.props.sharePermission.canDownloadRoles.length>0},e.prototype.getTargetText=function(t){if(this.isDownloadAllowed())return t>1?g._("Download ▾"):g._("Download");if(this.props.user&&this.props.user.is_cdm_member){var e=l.filename(this.props.user.cdm_tmf_path);return e.length>25?g._("Add to my member folder"):p.reactFormat(g._("Add to <strong>%(cdm_tmf_name)s</strong> folder"),{cdm_tmf_name:e,strong:r.default.createElement("strong",{style:{fontWeight:800}})})}return g._("Add to Dropbox")},e.prototype.getTooltipLabel=function(){return _.isPendingEntry(this.props.copyable)?g._("Download is unavailable while file is uploading."):g._("Downloads disabled.")},e.prototype.render=function(){var t=f.getDownloadOptions(this.props.sharePermission,this.props.sharedLinkInfo,this.props.shareToken,this.props.copyable,this.context.authModalKind||null);if(this.props.downloadOnly){var e=new m.ShareDownloadActionOption({isDisabled:!0}),o=!0;return this.isDownloadAllowed()&&(e=m.ShareDownloadActionOption.buildDirectOption(this.props.sharedLinkInfo),o=!1),r.default.createElement(y,{isDisabled:o,targetText:g._("Download"),option:e,onClick:this.props.onClick,location:this.props.location,importance:this.props.importance,isCollapsed:this.props.isCollapsed})}return 0===t.length?r.default.createElement(x,{targetText:g._("Download"),isDisabled:!0,options:[new m.ShareDownloadActionOption({isDisabled:!0})],onClick:this.props.onClick,location:this.props.location,title:this.getTooltipLabel(),importance:this.props.importance,isCollapsed:this.props.isCollapsed}):1===t.length?r.default.createElement(y,{isDisabled:!1,targetText:this.getTargetText(t.length),option:t[0],onClick:this.props.onClick,location:this.props.location,importance:this.props.importance,isCollapsed:this.props.isCollapsed}):r.default.createElement(x,{targetText:this.getTargetText(t.length),options:t,onClick:this.props.onClick,location:this.props.location,isDisabled:!1,importance:this.props.importance,isCollapsed:this.props.isCollapsed})},e.contextTypes={authModalKind:s.default.oneOf(["immediate","download",null])},e})(r.default.Component);e.ShareDownloadButton=v});
//# sourceMappingURL=button_component.min.js-vflzS5Xyd.map