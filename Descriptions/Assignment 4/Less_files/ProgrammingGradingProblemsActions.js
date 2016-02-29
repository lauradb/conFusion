define("bundles/content-feedback/actions/ProgrammingGradingProblemsActions",["require","exports","module","q","underscore","bundles/content-feedback/models/ProgrammingPartFeedback","bundles/content-feedback/utils/SubItemFeedbackAPIUtils","bundles/phoenix/template/models/userIdentity","bundles/programming/promises/learnerAssignment","bundles/programming/promises/submissionSummaries","js/lib/stringKeyTuple"],function(require,exports,module){"use strict";function buildSubmittedParts(r,t){var i=r.submissionLearnerSchema.get("parts"),e={};return t.toArray().reverse().forEach(function(r){_(r.get("parts")).each(function(t,n){var a=!!i[n];t.isSubmitted&&a&&(e[n]={part:t,submission:r})})}),_(e).chain().pairs().map(function(i){var e=n(i,2),a=e[0],r=e[1],t=r.part,s=r.submission;return{id:a,order:t.order,label:t.title,submissionId:o.stringKeyToTuple(s.get("id"))[2]}}).sortBy("order").value()}var n=function(){function sliceIterator(o,n){var e=[],r=!0,i=!1,a=void 0;try{for(var t=o[Symbol.iterator](),s;!(r=(s=t.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(d){i=!0,a=d}finally{try{!r&&t["return"]&&t["return"]()}finally{if(i)throw a}}return e}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return sliceIterator(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=require("q"),_=require("underscore"),i=require("bundles/content-feedback/models/ProgrammingPartFeedback"),r=require("bundles/content-feedback/utils/SubItemFeedbackAPIUtils"),t=require("bundles/phoenix/template/models/userIdentity"),a=require("bundles/programming/promises/learnerAssignment"),s=require("bundles/programming/promises/submissionSummaries"),o=require("js/lib/stringKeyTuple");exports.loadProgrammingSubmittedParts=function(i,o){var r=o.itemMetadata,d=[a({itemMetadata:r}),s({itemMetadata:r,userId:t.get("id"),courseId:r.get("course.id"),itemId:r.get("id")})],n=e.all(d).spread(buildSubmittedParts).then(function(e){i.dispatch("RECEIVED_PROGRAMMING_GRADING_SUBMITTED_PARTS",{submittedParts:e})});return n.done(),n},exports.loadProgrammingPartGradingFeedbacks=function(i,t){var a=t.courseId,s=t.itemId,o=t.parts,d=o.map(function(e){var t=r.getFeedback(a,s,e.id).then(function(r){return{partId:e.id,feedback:r}});return t.done(),t}),n=e.all(d).then(function(e){var r=_(e).reduce(function(e,r){return e[r.partId]=r.feedback,e},{});i.dispatch("RECEIVED_PROGRAMMING_GRADING_PART_FEEDBACKS",{feedbacks:r})});return n.done(),n},exports.saveProgrammingPartGradingFeedbacks=function(o,n){var a=n.courseId,s=n.itemId,d=n.parts;o.dispatch("RESET_PROGRAMMING_GRADING");var u=d.map(function(e){var n=new i(t.get("id"),a,s,e.submissionId,e.id,e.content);return r.postFeedback(a,s,e.id,n)});return e.all(u)}});