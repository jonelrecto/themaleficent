(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{X7YW:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("q-toolbar",{staticClass:"q-py-none",attrs:{color:"faded"}},[n("q-icon",{attrs:{name:"attach_money",size:"30px"}}),n("q-toolbar-title",{attrs:{shrink:""}},[n("span",{staticClass:"text-white"},[e._v("Sales Reports")])]),n("q-tabs",{staticClass:"text-white row",attrs:{color:"faded",animated:"",swipeable:"",align:"justify"}},[n("q-route-tab",{attrs:{slot:"title",default:"",label:"All Sales",to:"/sales",exact:""},slot:"title"}),e._l(e.events,function(e,t){return n("div",{key:t,attrs:{slot:"title"},slot:"title"},[n("q-route-tab",{attrs:{label:e.eventName,to:{name:"salesReportsByEvent",params:{eventKey:e[".key"]}}}})],1)})],2)],1),n("router-view",{key:e.$route.fullPath})],1)},s=[],o=(n("91GP"),n("lSNA")),r=n.n(o),l=(n("a1Th"),n("RIqP")),i=n.n(l),c=(n("rGqo"),{created:function(){this.loadSelectedEvent()},mounted:function(){this.$bindAsArray("events",this.$database.ref("events")),this.$bindAsArray("models",this.$database.ref("models")),this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("contractSigned",this.$database.ref("contractSigned")),this.$bindAsArray("showUpModels",this.$database.ref("showUpModels")),this.$bindAsArray("paymentTransactions",this.$database.ref("payment_transactions"))},computed:{getEventsWithSeason:function(){var e=this,t=new Array;return this.$lodash.forEach(this.events,function(n){e.$lodash.has(n,"seasons")&&t.push(n)}),t},getEventSeasons:function(){return console.log("event seasons in select",this.selectedEvent.seasons),this.selectedEvent.seasons}},data:function(){return{selectedEvent:{},graphSeasons:[],data:[{name:"Teen Fashion Festival",data:{Season1:10032,Season2:1001492,Season3:100150,Season4:100500}}],events:[],models:[],schedules:[],contractSigned:[],showUpModels:[],paymentTransactions:[],columns:[{name:"season",required:!0,label:"Season",align:"center",field:"seasonNumber",sortable:!0,classes:"color: primary",style:"width: 500px, color: primary"},{name:"contractSigned",required:!0,label:"Contract Signed",align:"center",sortable:!0},{name:"fullPaid",required:!0,label:"Full Paid",align:"center",sortable:!0},{name:"installment",required:!0,label:"Installment",align:"center",sortable:!0},{name:"rate",required:!0,label:"Rate",align:"center",field:"totalAmount",sortable:!0},{name:"grossSales",required:!0,label:"Gross Sales",align:"center",sortable:!0}],tableData:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Frozen Yogurts",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"}]}},methods:{getGrossSales:function(e){console.log("p",e);var t=e.row.seasonName,n=this.$lodash.filter(this.paymentTransactions,function(e){return e.seasonName===t}),a=this.$lodash.sumBy(n,function(e){return e.transaction_amount=parseFloat(e.transaction_amount),e.transaction_amount});return console.log("filter trans",a),a},getFullPaid:function(e){var t=e.row.seasonName,n=this.$lodash.filter(this.contractSigned,function(e){return e.seasonName===t}),a=this.$lodash.filter(n,function(e){return"full"===e.paymentTerms});return console.log("fullterm",a),a.length},getInstallment:function(e){var t=e.row.seasonName,n=this.$lodash.filter(this.contractSigned,function(e){return e.seasonName===t}),a=this.$lodash.filter(n,function(e){return"installment"===e.paymentTerms});return a.length},loadSelectedEvent:function(){this.selectedEvent=this.$store.state.startUp.events[0],this.test()},getContractSigned:function(e){var t=e.row.seasonName,n=this.$lodash.filter(this.contractSigned,function(e){return e.seasonName===t});return n.length},clickEvent:function(e){this.selectedEvent=e,this.test(),console.log("event",this.selectedEvent)},getGrossSales2:function(e){console.log("p",e);var t=this,n=e.seasonName,a=t.$lodash.filter(t.paymentTransactions,function(e){return e.seasonName===n}),s=t.$lodash.sumBy(a,function(e){return e.transaction_amount=parseFloat(e.transaction_amount),e.transaction_amount});return console.log("filter trans",s),s},print:function(){var e=this.$lodash.map(this.columns,function(e){return{text:e.label}}),t=this.eventName;console.log("columns",e);for(var n=[],a=i()(this.mappedModels),s=0;s<a.length;s++){a[s].paymentTerms&&a[s].paymentTerms;var o=[a[s].dateSigned,a[s].fullName,a[s].eventName,a[s].seasonAndBatch,a[s].seasonRate,a[s].mobileNumber,a[s].email];n.push(o)}console.log("mappedModels",this.mappedModels.length.toString());for(var r={content:[{image:logo,width:100,height:70,alignment:"center"},{text:"3rd Floor Forab Building Kamuning Quezon City",alignment:"center",margin:[5,5,5,5]},{text:"Payment Records: Not Paid - ".concat(t),alignment:"left",margin:[5,5,5,5]},{style:"tableExample",table:{headerRows:1,body:[e]},layout:{hLineWidth:function(e,t){return 0===e||e===t.table.body.length?2:1},vLineWidth:function(e,t){return 0===e||e===t.table.widths.length?2:1},hLineColor:function(e,t){return 0===e||e===t.table.body.length?"black":"gray"},vLineColor:function(e,t){return 0===e||e===t.table.widths.length?"black":"gray"}}},{text:"Not Paid Models: ".concat(this.mappedModels.length),alignment:"left",margin:[1,1,1,1]},{text:"Date prepared: ".concat(this.$moment(new Date).format("lll")),alignment:"left",margin:[2,8,2,2]},{text:"Prepared By: ".concat(this.userLoggedIn[0].lastName,", ").concat(this.userLoggedIn[0].firstName),alignment:"left",margin:[2,2,7,2]},{text:"Approved By: ",alignment:"left",margin:[2,2,2,2]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},tableExample:{fontSize:8,margin:[1,1,1,1]}}},l=0;l<n.length;l++)r.content[3].table.body.push(n[l]);console.log("dd",r),pdfMake.createPdf(r).download("PaymentReports_NotPaid_".concat(t))},test:function(){var e=this,t=this.$lodash.map(this.selectedEvent.seasons,function(t){var n="Season".concat(t.seasonNumber),a=e.getGrossSales2(t);return console.log("name gross",n,a),r()({},n,a)}),n=new Array,a={name:this.selectedEvent.eventName,data:Object.assign({},t[0])};n.push(a),this.graphSeasons=n},test2:function(){}}}),d=c,u=n("KHd+"),h=Object(u["a"])(d,a,s,!1,null,null,null);t["default"]=h.exports}}]);