define("bundles/content-feedback/actions/ItemFeedbackActions",["require","exports","module","underscore","bundles/content-feedback/constants/FeedbackTypes","bundles/content-feedback/models/FlagFeedback","bundles/content-feedback/models/LikeFeedback","bundles/content-feedback/utils/ItemFeedbackAPIUtils"],function(require,exports,module){"use strict";var _=require("underscore"),t=require("bundles/content-feedback/constants/FeedbackTypes"),c=require("bundles/content-feedback/models/FlagFeedback"),n=require("bundles/content-feedback/models/LikeFeedback"),e=require("bundles/content-feedback/utils/ItemFeedbackAPIUtils");exports.getItemFeedback=function(i,d){var a=d.courseId,s=d.itemId,o=d.subItemId;return e.getMyAll(a,s,o).then(function(a){var e=_(a).find(function(e){return e.feedbackSystem===t.Like}),d=_(a).find(function(e){return e.feedbackSystem===t.Flag}),s=null,o=null;e&&(s=new n(e.rating.value,e.rating.active,e.comments.generic)),d&&(o=new c(d.rating.active,d.comments)),i.dispatch("RECEIVE_FEEDBACK",{likeFeedback:s,flagFeedback:o})})},exports.likeItem=function(d,t){var i=t.courseId,a=t.itemId,s=t.comment,o=t.questionId,c=new n(1,!0,s);return d.dispatch("RECEIVE_LIKE",{likeFeedback:c}),e.postMyLike(i,a,c,o).done()},exports.cancelLikeItem=function(d,t){var i=t.courseId,a=t.itemId,s=t.comment,o=t.questionId,c=new n(0,!1,s);return d.dispatch("RECEIVE_LIKE",{likeFeedback:c}),e.postMyLike(i,a,c,o).done()},exports.dislikeItem=function(d,t){var i=t.courseId,a=t.itemId,s=t.comment,o=t.questionId,c=new n(0,!0,s);return d.dispatch("RECEIVE_LIKE",{likeFeedback:c}),e.postMyLike(i,a,c,o).done()},exports.cancelDislikeItem=function(d,t){var i=t.courseId,a=t.itemId,s=t.comment,o=t.questionId,c=new n(0,!1,s);return d.dispatch("RECEIVE_LIKE",{likeFeedback:c}),e.postMyLike(i,a,c,o).done()},exports.flagItem=function(d,n){var i=n.courseId,a=n.itemId,s=n.comments,o=n.active,u=n.questionId,t=new c(o,s);return d.dispatch("RECEIVE_FLAG",{flagFeedback:t}),e.postMyFlag(i,a,t,u).done()}});