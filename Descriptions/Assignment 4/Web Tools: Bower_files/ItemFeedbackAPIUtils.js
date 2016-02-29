define("bundles/content-feedback/utils/ItemFeedbackAPIUtils",["require","exports","module","q","underscore","bundles/content-feedback/api/myFeedbackAPI","bundles/content-feedback/api/feedbackAPI","bundles/content-feedback/api/itemFeedbackCountsAPI","bundles/content-feedback/api/itemFeedbackCommentCountsAPI","bundles/content-feedback/api/feedbackAdminAPI","bundles/content-feedback/constants/FeedbackTypes","./ItemFeedbackUtils","jsuri"],function(require,exports,module){"use strict";var e=require("q"),_=require("underscore"),d=require("bundles/content-feedback/api/myFeedbackAPI"),n=require("bundles/content-feedback/api/feedbackAPI"),r=require("bundles/content-feedback/api/itemFeedbackCountsAPI"),u=require("bundles/content-feedback/api/itemFeedbackCommentCountsAPI"),c=require("bundles/content-feedback/api/feedbackAdminAPI"),a=require("bundles/content-feedback/constants/FeedbackTypes"),i=require("./ItemFeedbackUtils"),t=require("jsuri"),s={getFeedbackCount:function getFeedbackCount(n,c,i,d,s){var a=(new t).addQueryParam("q","course").addQueryParam("courseId",n).addQueryParam("feedbackSystem",c).addQueryParam("ratingValues",i).addQueryParam("countBy","itemId");if(d&&a.addQueryParam("categories",d),s)return e(u.get(a.toString()));return e(r.get(a.toString()))},get:function get(t){var d=i.getVisibleFlagCategories(),n=_(d).pluck("id").join(","),r=this.getFeedbackCount(t,a.Like,0),u=this.getFeedbackCount(t,a.Like,1),c=this.getFeedbackCount(t,a.Flag,0,n,!0);return e.all([r,u,c]).spread(function(t,d,n){var a={likes:d.elements[0].counts,dislikes:t.elements[0].counts,flags:n.elements[0].counts},e={};return _(a).each(function(a,t){_(a).each(function(d,a){e[a]||(e[a]={}),e[a][t]=d})}),_(e).each(function(d,t){_(a).each(function(d,a){e[t][a]||(e[t][a]=0)})}),e})},getFlagFeedbacks:function getFlagFeedbacks(c,i,s,o,d){var r=10,m=d?"subItem":"item",u=(new t).addQueryParam("q",m).addQueryParam("courseId",c).addQueryParam("itemId",i).addQueryParam("feedbackSystem",a.Flag).addQueryParam("ratingValues",0).addQueryParam("categories",s.id).addQueryParam("fields","debugInfo").addQueryParam("start",o*r).addQueryParam("limit",r);return d&&u.addQueryParam("subItemId",d),e(n.get(u.toString())).then(function(e){var a=e.elements,t=e.paging,d=t.total;return{feedbacks:a,totalCount:d}})},resolveFlagFeedback:function resolveFlagFeedback(a,d){var n=(new t).addQueryParam("action","resolve").addQueryParam("feedbackId",a).addQueryParam("category",d.id);return e(c.post(n.toString()))},getMyAll:function getMyAll(r,u,a){var c=a?"subItem":"item",n=(new t).addQueryParam("q",c).addQueryParam("courseId",r).addQueryParam("itemId",u);return a&&n.addQueryParam("genericSubItemId",a),e(d.get(n.toString())).then(function(e){return e.elements})},postMyFeedback:function postMyFeedback(r,u,c,i,a){var n=(new t).addQueryParam("action","submit").addQueryParam("courseId",r).addQueryParam("itemId",u).addQueryParam("feedbackSystem",c);return a&&n.addQueryParam("genericSubItemId",a),e(d.post(n.toString(),{data:i.toObject()}))},postMyLike:function postMyLike(e,t,d,n){return this.postMyFeedback(e,t,a.Like,d,n)},postMyFlag:function postMyFlag(e,t,d,n){return this.postMyFeedback(e,t,a.Flag,d,n)}};module.exports=s});