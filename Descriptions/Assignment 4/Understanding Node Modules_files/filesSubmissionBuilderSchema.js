define("bundles/programming/models/filesSubmissionBuilderSchema",["require","exports","module","backbone"],function(require,exports,module){"use strict";var Backbone=require("backbone"),e=Backbone.Model.extend({defaults:{typeName:"files",suggestedFilenames:null},getSuggestedFilename:function getSuggestedFilename(e){return this.get("suggestedFilenames")[e]}});module.exports=e});