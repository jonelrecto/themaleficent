(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"2rlu":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md"},[a("q-btn",{attrs:{label:"test"},on:{click:t.zzTestingButton}}),a("div",{staticClass:"row q-my-md"},[a("div",{staticClass:"col-2"},[a("q-list",{attrs:{"inset-separator":"",highlight:""}},[a("q-list-header",[t._v("Seasons")]),t._l(t.getSeasons,function(e,n){return a("q-item",{key:n,nativeOn:{click:function(a){t.selectedSeason=e}}},[a("q-item-main",[t._v(t._s(e.seasonName))]),a("q-item-side",{attrs:{right:""}},["standby"===e.status?a("q-item-tile",{attrs:{icon:"build",color:"warning"}}):t._e(),"open"===e.status?a("q-item-tile",{attrs:{icon:"sync",color:"blue"}}):t._e(),"finished"===e.status?a("q-item-tile",{attrs:{icon:"done",color:"green"}}):t._e()],1)],1)})],2)],1),a("div",{staticClass:"col q-ml-md"},[a("q-table",{attrs:{title:t.selectedSeason.seasonName,data:t.getRecords,columns:t.Modelcolumns,filter:t.filter,"row-key":"batchNumber"},scopedSlots:t._u([{key:"top-left",fn:function(e){return[a("q-field",{attrs:{label:t.selectedSeason.seasonName}},[a("q-btn-group",{staticClass:"q-mx-md",attrs:{outline:""}},[a("q-btn",{attrs:{outline:"",size:"sm",label:"Due"},on:{click:t.showDue}}),a("q-btn",{attrs:{outline:"",size:"sm",label:"Verified"},on:{click:t.showVerified}})],1)],1),a("q-btn-group",{staticClass:"q-mx-md",attrs:{outline:""}},[a("q-btn",{attrs:{outline:"",size:"sm",label:"Fully Paid"}}),a("q-btn",{attrs:{outline:"",size:"sm",label:"PassDue"}}),a("q-btn",{attrs:{outline:"",size:"sm",label:"OverDue"}})],1)]}},{key:"top-right",fn:function(e){return[a("q-search",{staticClass:"bg-dark",staticStyle:{width:"180px"},attrs:{"hide-underline":"",inverted:""},on:{input:t.test},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]}},{key:"body-cell-firstName",fn:function(e){return a("q-td",{attrs:{props:e}},[t._v("\n          "+t._s(e.row.firstName)+"\n          ")])}},{key:"body-cell-payments",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn-dropdown",{attrs:{label:"Payment Records",size:"sm"}},t._l(t.getModelsPaymentTransactions(e.row[".key"]),function(e,n){return a("q-list",{key:n,attrs:{highlight:"",link:"",dense:""}},[a("q-item",[a("q-item-main",{},[t._v("₱ "+t._s(e.transaction_amount)+" - "+t._s(e.title.slice(-10))+" - "+t._s(t.$moment(e.create_time).format("ll")))])],1)],1)}))],1)}},{key:"body-cell-verification",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{size:"sm",disabled:t.verified_full,label:"Payment Verification",color:"teal",icon:"money"},nativeOn:{click:function(a){t.showPaymentVerification(e.row)}}})],1)}}])})],1)]),t.paymentVerificationModal?a("q-modal",{attrs:{"content-css":{minWidth:"35vw",minHeight:"40vh"}},model:{value:t.paymentVerificationModal,callback:function(e){t.paymentVerificationModal=e},expression:"paymentVerificationModal"}},[a("q-modal-layout",[a("q-toolbar",{staticClass:"bg-dark full-width"},[a("q-toolbar-title",[t._v("\n              Payment Verification - "),a("span",{staticClass:"q-caption"},[t._v(t._s(t.paymentID))])])],1),a("div",{staticClass:"q-pa-lg"},[t.termSelection?a("div",[a("q-field",{attrs:{icon:"money",label:"Payment Terms"}},[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{push:"",label:"Full Payment"},on:{click:t.clickFull}}),a("q-btn",{attrs:{push:"",label:"Installment"},on:{click:t.clickInstallment}})],1)],1)],1):t._e(),a("q-input",{staticClass:"q-ma-sm q-my-lg",attrs:{type:"number","stack-label":"Transaction Amount"},model:{value:t.transactionAmount,callback:function(e){t.transactionAmount=e},expression:"transactionAmount"}}),a("q-input",{staticClass:"q-ma-sm q-my-lg",attrs:{"stack-label":"BDO Branch"},model:{value:t.bdoBranch,callback:function(e){t.bdoBranch=e},expression:"bdoBranch"}}),a("q-btn",{staticClass:"full-width",attrs:{size:"md",label:"Save Payment Details",color:"teal"},on:{click:t.savePaymentDetails}})],1)],1)],1):t._e()],1)},s=[];n._withStripped=!0;a("INYr"),a("a1Th");var i=a("MVZn"),o=a.n(i),l=a("lSNA"),r=a.n(l),c=a("RIqP"),d=a.n(c),u=(a("rGqo"),a("yt8O"),a("VVcl")),h=a.n(u),m=a("kv6+"),f=a("9JDm"),y={created:function(){var t=this;this.eventKey=this.$route.params.eventKey,this.$bindAsArray("findEvent",this.$database.ref("events"),null,function(){t.$bindAsArray("schedules",t.$database.ref("event_schedules"),null,function(){t.loadSelectSeason()})})},mounted:function(){this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("event",this.$database.ref("events").orderByKey().equalTo(this.eventKey)),this.$bindAsArray("payment_transactions",this.$database.ref("payment_transactions")),this.$bindAsArray("contractsigned",this.$database.ref("contractSigned"))},components:{CalendarView:h.a,CalendarAgenda:m["b"]},computed:{getAllTransactions:function(){var t=this;try{var e=this.payment_transactions;console.log("payment_transactions",e);var a=this.$lodash.groupBy(e,"modelKey"),n=this.$lodash.keys(a);console.log("keys",n);for(var s=[],i=this.contractsigned,o=0;o<n.length;o++)for(var l=0;l<i.length;l++)n[o]===i[l][".key"]&&s.push(i[l]);var r=this.$lodash.filter(s,function(e){return e.seasonName===t.selectedSeason.seasonName});return console.log("*SortedPayment",r),r}catch(t){return console.log("err",t),[]}},agendaSeasonSchedules:function(){try{var t=d()(this.seasonEventSchedules);console.log("activities",t);var e=this.$lodash.map(t,function(t){if("payment"!==t.type)return{id:t.id,summary:t.title,description:t.details?t.details:"",location:t.location?t.location:"",start:{dateTime:new Date(t.startDate).toISOString()},end:{dateTime:new Date(t.endDate).toISOString()},color:"faded"}}),a=this.$lodash.compact(e);return a}catch(t){return[]}},seasonEventSchedules:function(){var t=this;try{var e=new Array,a=d()(this.seasonBatches);return this.$lodash.forEach(a,function(a){t.$lodash.forEach(a.activities,function(t){t.startDate=new Date(t.startDate),t.endDate=new Date(t.endDate),e.push(t)})}),e}catch(t){return[]}},getSeasonName:function(){try{return this.selectedSeason.seasonName}catch(t){return""}},customBatches:function(){var t=this;try{var e=new Array,a=d()(this.seasonBatches[0].activities);return console.log("selectedSeason",a),this.$lodash.forEach(this.seasonBatches,function(a){var n=[],s=0,i=0;t.$lodash.forEach(a.activities,function(e){new Array;if(e.dueDate){var a=r()({},"".concat(t.$lodash.capitalize(e.type)," Start"),e.startDate),o=r()({},"".concat(t.$lodash.capitalize(e.type)," End"),e.endDate);n.push(a),n.push(o)}else if("payment"===e.type){++s;var l=r()({},"".concat(t.$lodash.capitalize(e.type)," ").concat(s),e.startDate);n.push(l)}else if("workshop"===e.type){++i;var c=r()({},"".concat(t.$lodash.capitalize(e.type)," ").concat(i),e.startDate);n.push(c)}else{var d=r()({},"".concat(t.$lodash.capitalize(e.type)),e.startDate);n.push(d)}});for(var l=0;l<n.length;l++){var c=t.$lodash.keys(n[l])[0],d=n[l][c];console.log("value",d),n[c]=c,n[c]=d}n.splice(0,n.length),console.log("cust2",n),e.push(o()({},n))}),console.log("custom batches",e),e}catch(t){return[]}},customColumn:function(){var t=this;try{var e=this.seasonBatches[0].activities,a=new Array,n=0,s=0;this.$lodash.forEach(e,function(e){if(e.dueDate){var i={name:t.$lodash.capitalize(e.type)+"Start",required:!0,label:t.$lodash.capitalize(e.type)+" Start",align:"left",field:t.$lodash.capitalize(e.type)+" Start"},o={name:t.$lodash.capitalize(e.type)+"End",required:!0,label:t.$lodash.capitalize(e.type)+" End",align:"left",field:t.$lodash.capitalize(e.type)+" End"};a.push(i),a.push(o)}else if("payment"===e.type){n++;var l={name:e.title,required:!0,label:"".concat(t.$lodash.capitalize(e.type)," ").concat(n),align:"left",field:"".concat(t.$lodash.capitalize(e.type)," ").concat(n)};a.push(l)}else if("workshop"===e.type){s++;var r={name:e.title,required:!0,label:"".concat(t.$lodash.capitalize(e.type)," ").concat(s),align:"left",field:"".concat(t.$lodash.capitalize(e.type)," ").concat(s)};a.push(r)}else{var c={name:e.title,required:!0,label:t.$lodash.capitalize(e.type),align:"left",field:t.$lodash.capitalize(e.type)};a.push(c)}});var i={name:"batchNumber",label:"Batch",align:"left"};return a.splice(0,0,i),console.log("custom column",a),a}catch(t){return[]}},seasonBatches:function(){var t=this;try{var e=this.$lodash.filter(this.schedules,function(e){return e.eventKey===t.eventKey&&e.seasonName===t.selectedSeason.seasonName});return e}catch(t){return[]}},latestSeason:function(){var t=this.getSeasons.length;return this.getSeasons[t-1]},getSeasons:function(){try{return this.event[0].seasons}catch(t){return[]}},getLastPaymentDueDate:function(){for(var t=this.seasonBatches,e=[],a=[],n=0;n<t.length;n++)this.$lodash.filter(t[n].activities,function(t){"payments"===t.type||"payment"===t.type?e.push(t):a.push(t)});console.log("allpayments",e);var s=new Date;console.log("dateToday",s);for(var i=[],o=[],l=0;l<e.length;l++){var r=new Date(e[l].startDate),c=f["d"].getDateDiff(r,s);console.log(""+l,r+c),c<=0?i.push(e[l]):o.push(e[l])}console.log("duepayments",i);var d=this.$lodash.findLast(i,function(t){return t});return console.log("lastduedate",d),d},getModelswithUnpaidDuethisWeek:function(){var t=this,e=this.getLastPaymentDueDate;console.log("lastduedate",e);var a=new Date;console.log("lastduedate",e.startDate),console.log("_today",a);var n=f["d"].getDateDiff(e.startDate,a);console.log("diff",n);for(var s=this.$lodash.filter(this.contractsigned,function(e){return e.eventKey===t.eventKey&&e.seasonName===t.selectedSeason.seasonName}),i=s,o=[],l=[],r=0;r<i.length;r++)if(0===i[r].balance);else this.$lodash.filter(i[r].paymentDueDate,function(t){t.startDate===e.startDate&&!1===t.paidStatus&&n<4&&n>-3?(i[r].toPayAmount=e.amount,i[r].toPayId=t.id,i[r].toPayTitle=t.title,o.push(i[r])):l.push(i[r])});return console.log("_sorted",o),o},getModelswithPaidDuethisWeek:function(){var t=this,e=this.getLastPaymentDueDate;console.log("lastduedate",e);var a=new Date;console.log("lastduedate",e.startDate),console.log("_today",a);var n=f["d"].getDateDiff(e.startDate,a);console.log("diff",n);for(var s=this.$lodash.filter(this.contractsigned,function(e){return e.eventKey===t.eventKey&&e.seasonName===t.selectedSeason.seasonName}),i=s,o=[],l=[],r=0;r<i.length;r++)if(0===i[r].balance)this.$lodash.filter(i[r].paymentDueDate,function(t){t.startDate===e.startDate&&n<4&&n>-3&&o.push(i[r])});else this.$lodash.filter(i[r].paymentDueDate,function(t){t.startDate===e.startDate&&!0===t.paidStatus&&n<4&&n>-3?o.push(i[r]):l.push(i[r])});return console.log("_sorted",o),o},getRecords:function(){try{return"due"===this.showRecords?(this.verified_full=!1,this.getModelswithUnpaidDuethisWeek):(this.verified_full=!0,this.getModelswithPaidDuethisWeek)}catch(t){return[]}}},data:function(){return{filter:"",contractsigned:[],verified_full:!1,payment_transactions:[],startingDayOfWeek:0,showEventTimes:!0,showDate:new Date,schedules:[],selectedSeason:{},viewMode:"batchMode",events:[],event:[],active:!0,eventKey:"",showRecords:"due",paymentVerificationModal:!1,transactionAmount:0,bdoBranch:"",payTerms:"",paymentID:"",termSelection:!1,modelAccount:{},columns:[{name:"desc",required:!0,label:"Dessert (100g serving)",align:"left",field:"name",sortable:!0,classes:"my-class",style:"width: 500px"}],Modelcolumns:[{name:"firstName",required:!0,label:"First Name",align:"left",sortable:!0,field:"firstName"},{name:"lastName",required:!0,label:"Last Name",align:"left",sortable:!0,field:"lastName"},{name:"balance",required:!0,label:"Remaining Balance",align:"left",sortable:!0,field:"balance"},{name:"payments",required:!0,label:"Payment Records",align:"left",sortable:!0},{name:"verification",required:!0,label:"Payment Verification",align:"left",sortable:!0}],tableData:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"}]}},methods:{dropOnDate:function(t,e){},clickEvent:function(t){},setShowDate:function(t){this.showDate=t},getCol:function(t){console.log("c",t)},loadSelectSeason:function(){var t=this;try{var e=this.findEvent;console.log("_events",e);var a=this.$lodash.filter(e,function(e){return e[".key"]===t.eventKey})[0],n=a.seasons.length;this.selectedSeason=a.seasons[n-1]}catch(t){this.selectedSeason={}}},test:function(){console.log("seasonBatches",this.seasonBatches)},getModelsPaymentTransactions:function(t){try{var e=this.$lodash.filter(this.payment_transactions,function(e){return e.modelKey===t});return console.log("modelpayments",e),e}catch(t){return console.log("error",t),[]}},zzTestingButton:function(){},showDue:function(){this.showRecords="due"},showVerified:function(){this.showRecords="verified"},showPaymentVerification:function(t){this.paymentVerificationModal=!0,this.paymentID=t.toPayId,this.modelAccount=t,"undefined"===typeof t.payTerms?(this.termSelection=!0,this.transactionAmount=0):(this.termSelection=!1,this.transactionAmount=t.toPayAmount)},clickFull:function(){this.payTerms="full";var t=this.modelAccount,e=t.balance,a=t.regFee,n=e-a;console.log("modelClickFull",n),this.transactionAmount=n},clickInstallment:function(){this.payTerms="installment";var t=this.modelAccount;console.log("modelClickInstallment",t.toPayAmount),this.transactionAmount=t.toPayAmount},savePaymentDetails:function(){var t=this,e=this.modelAccount,a=this.payTerms,n=e.toPayId,s={};s.transaction_amount=this.transactionAmount,s.id=e.toPayId,s.bdoBranch=this.bdoBranch,s.create_time=(new Date).toString(),s.payTerms=this.payTerms,s.batchKey=e.batchKey,s.eventKey=e.eventKey,s.seasonName=e.seasonName,s.title=e.toPayTitle,s.transaction_currency="PHP",s.modelKey=e[".key"],console.log("paymentDetails_999",s),console.log("paymentDetails_999",a);var i=this.$lodash.filter(e.activitiesAttended,function(t){if("orientation"!==t.type)return t});if(""===this.bdoBranch||0===this.transactionAmount)this.$q.notify({message:"Payment not Approved",type:"negative",color:"negative",textColor:"white",icon:"negative"});else if("full"===a){var l=parseInt(e.balance),r=parseInt(s.transaction_amount),c=parseInt(e.regFee),d=l-(r+c);this.$database.ref("contractSigned/"+e[".key"]+"/paymentTerms").set("full"),this.$database.ref("payment_transactions").push(s).then(function(){t.$database.ref("contractSigned/"+e[".key"]+"/balance").set(d).then(function(){var e=o()({},t.modelAccount),a=e[".key"];delete e[".key"];for(var n=function(){var n=i[s].id,o=e.batchKey;setTimeout(function(){t.$database.ref("attendance/"+o+"/"+n+"/models/").child(a).set(e)},1e3)},s=0;s<i.length;s++)n();t.showPaymentVerified=!0,t.$q.notify({message:"Payment Verified",type:"positive",color:"positive",textColor:"white",icon:"positive"})})})}else{l=parseInt(e.balance),r=parseInt(s.transaction_amount);var u=l-r;this.$database.ref("contractSigned/"+e[".key"]+"/paymentTerms").set("installment").then(function(){t.$database.ref("payment_transactions").push(s).then(function(){t.$database.ref("contractSigned/"+e[".key"]+"/balance").set(u).then(function(){var a=t.getDueDateIndex(n,e);t.$database.ref("contractSigned/"+e[".key"]+"/paymentDueDate/"+a+"/paidStatus").set(!0).then(function(){var a=o()({},t.modelAccount),s=a[".key"];delete a[".key"],console.log("installment s1",t.getDuePaymentDate(n,e).startDate);var i=t.getDuePaymentDate(n,e);console.log("installment s2",t.getNextPayment(n,e).startDate);var l=t.getNextPayment(n,e);if("undefined"===typeof l){console.log("installment s3 - END GAME",t.getActivitiesAfterAllPayment(i,e));for(var r=t.getActivitiesAfterAllPayment(i,e),c=function(){var e=r[d].id,n=a.batchKey;console.log("push id",e),setTimeout(function(){t.$database.ref("attendance/"+n+"/"+e+"/models/").child(s).set(a)},1e3)},d=0;d<r.length;d++)c();t.$q.notify({message:"Payment Verified",type:"positive",color:"positive",textColor:"white",icon:"positive"})}else{console.log("installment s3 - BETWEEN",t.getActivitiesBetween(i,l,e));var u=t.getActivitiesBetween(i,l,e),h=function(){var e=u[d].id,n=a.batchKey;console.log("push id",e),setTimeout(function(){t.$database.ref("attendance/"+n+"/"+e+"/models/").child(s).set(a)},1e3)};for(d=0;d<u.length;d++)h();t.$q.notify({message:"Payment Verified",type:"positive",color:"positive",textColor:"white",icon:"positive"})}})})})})}},getDueDateIndex:function(t,e){var a=this.$lodash.findIndex(e.paymentDueDate,function(e){return e.id===t});return a},getDuePaymentDate:function(t,e){var a=this.$lodash.filter(e.paymentDueDate,function(e){return e.id===t});return a[0]},getNextPayment:function(t,e){var a=this.$lodash.findIndex(e.paymentDueDate,function(e){return e.id===t}),n=a+1,s=this.$lodash.nth(e.paymentDueDate,n);return s},getActivitiesBetween:function(t,e,a){var n=new Date(t.startDate),s=new Date(e.startDate),i=[];this.$lodash.filter(a.activitiesAttended,function(t){var e=new Date(t.startDate);f["d"].isBetweenDates(e,n,s)&&i.push(t)});return i},getActivitiesAfterAllPayment:function(t,e){var a=new Date(t.startDate),n=this.$lodash.filter(e.activitiesAttended,function(t){var e=new Date(t.startDate);if(a<e)return t});return n}}},p=y,v=a("KHd+"),g=Object(v["a"])(p,n,s,!1,null,null,null);e["default"]=g.exports}}]);