define("bundles/content-feedback/components/like/LikeContent",["require","exports","module","classnames","react-with-addons","./LikeFeedbackEditor","bundles/content-feedback/components/FeedbackComplete","i18n!nls/content-feedback","css!./__styles__/LikeContent"],function(require,exports,module){"use strict";function _defaults(e,r){for(var i=Object.getOwnPropertyNames(r),t=0;t<i.length;t++){var o=i[t],n=Object.getOwnPropertyDescriptor(r,o);n&&n.configurable&&void 0===e[o]&&Object.defineProperty(e,o,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(n,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),o=function get(i,a,p){var o=!0;e:for(;o;){var t=i,s=a,c=p;o=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,s);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,a=s,p=c,o=!0,e=n=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(c)}},a=require("classnames"),e=require("react-with-addons"),r=e.addons.CSSTransitionGroup,i=require("./LikeFeedbackEditor"),s=require("bundles/content-feedback/components/FeedbackComplete"),n=require("i18n!nls/content-feedback");require("css!./__styles__/LikeContent");var c=function(c){function LikeContent(){var e=this;_classCallCheck(this,LikeContent),o(Object.getPrototypeOf(LikeContent.prototype),"constructor",this).apply(this,arguments),this.state={showEditor:!1,showFeedbackComplete:!1},this.handleClick=function(){e.props.selected?(e.setState({showEditor:!1,showFeedbackComplete:!1}),e.props.onDeselect(e.props.comment)):(e.setState({showEditor:!0}),e.props.onSelect(e.props.comment))},this.handleSend=function(t){e.setState({showEditor:!1,showFeedbackComplete:!0}),e.props.onComment(t)},this.handleSkip=function(){e.setState({showEditor:!1,showFeedbackComplete:!1})},this.handleFeedbackCompleteTimeout=function(){e.setState({showFeedbackComplete:!1})}}return _inherits(LikeContent,c),t(LikeContent,[{key:"render",value:function render(){return e.createElement("div",{className:"rc-LikeContent"},e.createElement("div",{onClick:this.handleClick},this.props.children),this.props.withFeedback&&this.state.showEditor&&e.createElement(i,{onSend:this.handleSend,onSkip:this.handleSkip,initialCML:this.props.comment,placeholder:this.props.placeholder}),e.createElement(r,{transitionEnterTimeout:500,transitionLeaveTimeout:500,transitionName:"fade"},this.state.showFeedbackComplete&&e.createElement(s,{key:"feedback-complete",onTimeout:this.handleFeedbackCompleteTimeout},n("Thank you for your feedback."))))}}],[{key:"propTypes",value:{withFeedback:e.PropTypes.bool,selected:e.PropTypes.bool.isRequired,onDeselect:e.PropTypes.func.isRequired,onSelect:e.PropTypes.func.isRequired,onComment:e.PropTypes.func.isRequired,comment:e.PropTypes.object.isRequired,placeholder:e.PropTypes.string.isRequired},enumerable:!0},{key:"defaultProps",value:{withFeedback:!0},enumerable:!0}]),LikeContent}(e.Component);module.exports=c});