"use strict";function H265Decoder(){function a(){console.log("Construct H265 Codec"),b=Module.cwrap("init_jsFFmpeg","void",[]),c=Module.cwrap("context_jsFFmpeg","number",["number"]),d=Module.cwrap("decode_video_jsFFmpeg","number",["number","array","number","number"]),e=Module.cwrap("get_width","number",["number"]),f=Module.cwrap("get_height","number",["number"]),g=Module.cwrap("close_jsFFmpeg","number",["number"]),b(),a.prototype.init(),a.prototype.setIsFirstFrame(!1)}var b=null,c=null,d=null,e=null,f=null,g=null,h=null,i=new Uint8Array,j=265,k=!1;return a.prototype={init:function(){console.log("H265 Decoder init"),g(h),h=c(j)},setOutputSize:function(a){var b=1.5*a,c=Module._malloc(b);i=new Uint8Array(Module.HEAPU8.buffer,c,b)},decode:function(b,c){var g=null,j=null,k=null,l=c;g=Date.now(),d(h,b,b.length,i.byteOffset),j=Date.now()-g;var m=e(h),n=f(h);if(!a.prototype.isFirstFrame())return a.prototype.setIsFirstFrame(!0),{firstFrame:!0};if(m>0&&n>0){var o=new Uint8Array(i);return k={data:o,width:m,height:n,codecType:"h265",decodingTime:j,frameType:l}}},setIsFirstFrame:function(a){k=a},isFirstFrame:function(){return k}},new a}