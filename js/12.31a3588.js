(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"E+0n":function(t,a,e){"use strict";var i=e("KkaI"),s=e.n(i);s.a},KkaI:function(t,a,e){},xbUP:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex flex-center"},[e("div",{staticStyle:{width:"420px","max-width":"90vw"}},[e("div",{staticClass:"flex flex-center container row text-center q-pa-lg q-pa-xs",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)","border-radius":"50px","max-height":"700px"}},[e("div",{staticClass:"col-12"}),e("div",{staticClass:"col-12 flex flex-center"},[e("q-card",{staticClass:"q-ma-sm bg-white flex ",staticStyle:{"max-width":"350px","max-height":"700px",height:"530px",width:"350px","border-radius":"20px"},attrs:{inline:""}},[e("q-card-media",{staticClass:"relative"},[e("q-parallax",{attrs:{src:"statics/unsplash.jpg",height:230}},[e("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")]),e("div",{staticClass:"image bg-white",staticStyle:{width:"140px",height:"140px","border-radius":"10px"}},[e("img",{staticStyle:{width:"130px",height:"130px",margin:"5px"},attrs:{src:"statics/MMALogo.jpg"}})])])],1),e("q-card-title",[e("b",{staticClass:"text-dark"},[t._v("WELCOME")])]),e("q-card-separator"),e("q-card-actions",[e("div",{staticClass:"container flex flex-center"},[e("div",{staticClass:"col-12 full-width q-pa-sm"},[e("q-input",{attrs:{value:"",inverted:"",type:"text","float-label":"Username",color:"dark",before:[{icon:"account_box",handler:function(){}}]},model:{value:t.accountNumber,callback:function(a){t.accountNumber=a},expression:"accountNumber"}})],1),e("div",{staticClass:"col-12 full-width q-pa-sm"},[e("q-input",{attrs:{value:"",inverted:"",type:"password","float-label":"Password",color:"dark",before:[{icon:"lock",handler:function(){}}]},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("div",{staticClass:"col-12 full-width q-pa-sm"},[e("q-btn",{attrs:{color:"dark",size:"lg",label:"SIGN IN",rounded:"",outline:"","icon-right":"send"},on:{click:t.signIn}})],1)])])],1)],1)])])])},s=[];i._withStripped=!0;e("INYr");var n={name:"PageIndex",mounted:function(){this.$bindAsArray("contractSigned",this.$database.ref("contractSigned"))},data:function(){return{contractSigned:[],accountNumber:"",password:""}},methods:{signIn:function(){var t=this,a=this.$lodash.findIndex(this.contractSigned,function(a){return a.accountNumber===t.accountNumber&&a.password===t.password});-1!=a?(console.log("index",a),console.log("sign",this.contractSigned),this.$q.localStorage.set("modelSigned",this.contractSigned[a][".key"]),this.$q.notify({message:"Login Succesful",type:"positive",color:"positive",textColor:"white",icon:"info"}),this.$router.push()):this.$q.notify({message:"Incorrect Username and Password",type:"negative",color:"negative",textColor:"white",icon:"warning"})}}},o=n,c=(e("E+0n"),e("KHd+")),r=Object(c["a"])(o,i,s,!1,null,null,null);a["default"]=r.exports}}]);