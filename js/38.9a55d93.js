(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{eqbn:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md"},[t.byBatchShow?a("div",{staticClass:"col q-ml-md"},[a("q-table",{attrs:{data:t.ByBatchTableData,loading:t.tableLoading,columns:t.columns,pagination:t.pagination,separator:"cell","no-data-label":"Empty Activities","row-key":"id",filter:t.filter},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[a("q-btn-group",{staticClass:"q-ma-sm",attrs:{rounded:""}},[a("q-btn",{attrs:{color:"primary",rounded:"",label:"By Batch"},on:{click:t.showByBatch}}),a("q-btn",{attrs:{color:"secondary",rounded:"",label:"By Day"},on:{click:t.showFullDay}})],1),a("q-select",{staticClass:"text-white",staticStyle:{"min-width":"150px"},attrs:{inverted:"",color:"dark",options:t.mapActivities,"stack-label":"Activities"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]}},{key:"top-left",fn:function(e){return[a("q-toggle",{attrs:{label:"See All Schedules","checked-icon":"visibility","unchecked-icon":"visibility_off"},model:{value:t.seeAll,callback:function(e){t.seeAll=e},expression:"seeAll"}})]}},{key:"body-cell-activity",fn:function(e){return a("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(e.row.upcomingAct)+"\n        ")])}},{key:"body-cell-date",fn:function(e){return a("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(t.$moment(e.row.date).format("ll"))+"\n            ")])}},{key:"body-cell-time",fn:function(e){return a("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(t.$moment(e.row.forSort).format("LT"))+"\n            ")])}},{key:"body-cell-action",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{color:"primary",to:{name:"attendanceList",params:{id:e.row.key,title:e.row.id,type:e.row.upcomingAct}}}},[t._v("\n              attendance List\n            ")]),a("q-btn",{staticClass:"q-ml-sm",attrs:{color:"secondary",icon:"print"},on:{click:function(a){t.selectedAttendancePrint(e.row)}}})],1)}}])})],1):t._e(),t.fullDayShow?a("div",{staticClass:"col q-ml-md"},[a("q-table",{attrs:{data:t.getFullDayTableData,loading:t.tableLoading,columns:t.fullDayColumns,pagination:t.pagination,separator:"cell","no-data-label":"Empty Activities","row-key":".key",filter:t.filter},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top-right",fn:function(e){return[a("q-btn-group",{staticClass:"q-ma-sm",attrs:{rounded:""}},[a("q-btn",{attrs:{color:"primary",rounded:"",label:"By Batch"},on:{click:t.showByBatch}}),a("q-btn",{attrs:{color:"secondary",rounded:"",label:"By Day"},on:{click:t.showFullDay}})],1),a("q-select",{staticClass:"text-white",staticStyle:{"min-width":"150px"},attrs:{inverted:"",color:"dark",options:t.mapActivities,"stack-label":"Activities"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]}},{key:"top-left",fn:function(e){return[a("h4",{staticClass:"q-mr-lg"},[t._v("Upcoming Schedule"),a("span",{staticClass:"text-secondary text-weight-bold"},[t._v(" Day View")])]),a("q-toggle",{attrs:{label:"See All Schedules","checked-icon":"visibility","unchecked-icon":"visibility_off"},model:{value:t.seeAllFullDay,callback:function(e){t.seeAllFullDay=e},expression:"seeAllFullDay"}})]}},{key:"body-cell-date",fn:function(e){return a("q-td",{attrs:{props:e}},[t._v("\n            "+t._s(t.$moment(e.row.date).format("ll"))+"\n            ")])}},{key:"body-cell-batches",fn:function(e){return a("q-td",{attrs:{props:e}},t._l(e.row.batchTitles,function(e){return a("q-list",{key:e,staticClass:"no-border",attrs:{dense:""}},[a("q-item",{staticClass:"q-caption align-center"},[t._v(t._s(e))])],1)}))}},{key:"body-cell-action",fn:function(e){return a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{color:"primary",to:{name:"attendanceFullDay",params:{id:e.row.routerParam,date:e.row.date,type:e.row.type}}}},[t._v("\n              attendance List\n            ")]),a("q-btn",{staticClass:"q-ml-sm",attrs:{color:"secondary",icon:"print"},on:{click:function(a){t.selectedFullAttendancePrint(e.row)}}})],1)}}])})],1):t._e(),a("q-modal",{attrs:{"content-css":{minWidth:"100vw",minHeight:"100vh"},maximized:""},model:{value:t.showPrintModal,callback:function(e){t.showPrintModal=e},expression:"showPrintModal"}},[a("q-modal-layout",{staticClass:"text-center"},[a("q-toolbar",{staticClass:"noprint",attrs:{slot:"header",color:"dark"},slot:"header"},[a("q-btn",{staticClass:"fixed-right q-ma-sm",attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(e){t.showPrintModal=!1}}}),a("q-btn",{attrs:{"icon-right":"print",color:"secondary",label:"print"},on:{click:function(e){t.printPdf()}}}),a("q-toolbar-title",[a("span",{staticClass:"capitalize"},[t._v(t._s(t.selectedAttendance.id))])])],1),a("div",{staticClass:"absolute-center row modal_size text-center q-mt-lg"},[a("q-table",{staticClass:"no-shadow",staticStyle:{width:"95vw",height:"95vh"},attrs:{title:"",data:t.getModels,loading:t.tableLoading,columns:t.Modelcolumns,pagination:t.Modelpagination,separator:"cell","hide-bottom":"","row-key":".key",filter:t.filter},on:{"update:pagination":function(e){t.Modelpagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return[a("span",{staticClass:"capitalize q-display-1"},[t._v(t._s(t.selectedAttendance.seasonName)+"  - Batch "+t._s(t.selectedAttendance.batchNumber)+" "+t._s(t.selectedAttendance.upcomingAct))])]}},{key:"body-cell-fullname",fn:function(e){return a("q-td",{attrs:{props:e}},[a("span",{staticClass:"q-title capitalize"},[t._v(t._s(e.row.firstName)+" "+t._s(e.row.lastName))])])}}])})],1)],1)],1),a("q-modal",{attrs:{"content-css":{minWidth:"100vw",minHeight:"100vh"},maximized:""},model:{value:t.showFullPrintModal,callback:function(e){t.showFullPrintModal=e},expression:"showFullPrintModal"}},[a("q-modal-layout",{staticClass:"text-center"},[a("q-toolbar",{staticClass:"noprint",attrs:{slot:"header",color:"dark"},slot:"header"},[a("q-btn",{staticClass:"fixed-right q-ma-sm",attrs:{flat:"",round:"",dense:"",icon:"clear"},on:{click:function(e){t.showFullPrintModal=!1}}}),a("q-btn",{attrs:{"icon-right":"print",color:"secondary",label:"print"},on:{click:function(e){t.printPdf()}}}),a("q-toolbar-title",[a("span",{staticClass:"capitalize"},[t._v(t._s(t.selectedFull.date))])])],1),a("div",{staticClass:"absolute-center row modal_size text-center q-mt-lg"},[a("q-table",{staticClass:"no-shadow",staticStyle:{width:"95vw",height:"95vh"},attrs:{title:"",data:t.getModelsFull,loading:t.tableLoading,"rows-per-page-options":t.RowsPage,columns:t.ModelFullcolumns,pagination:t.Modelpagination,separator:"cell","hide-bottom":"","row-key":"accountNumber",filter:t.filter},on:{"update:pagination":function(e){t.Modelpagination=e}},scopedSlots:t._u([{key:"top",fn:function(e){return t._l(t.selectedFull.batchTitles,function(e){return a("div",{key:e.value,staticClass:"full-width"},[a("h6",{staticClass:"q-ma-xs"},[t._v(t._s(e))])])})}},{key:"body-cell-fullname",fn:function(e){return a("q-td",{attrs:{props:e}},[a("span",{staticClass:"q-title capitalize"},[t._v(t._s(e.row.firstName)+" "+t._s(e.row.lastName))])])}},{key:"body-cell-event",fn:function(e){return a("q-td",{attrs:{props:e}},[a("span",{staticClass:"q-title capitalize"},[t._v(t._s(e.row.seasonName))])])}},{key:"body-cell-time",fn:function(e){return a("q-td",{attrs:{props:e}},[a("span",{staticClass:"q-title capitalize"},[t._v(t._s(t.$moment(e.row.activityTime).format("LT")))])])}}])})],1)],1)],1)],1)},i=[];n._withStripped=!0;var s=a("J4zp"),o=a.n(s),l=(a("f3/d"),a("dRSK"),a("Vd3H"),a("lSNA")),r=a.n(l),c=a("MVZn"),u=a.n(c),d=(a("KKXr"),a("cDf5")),h=a.n(d),f=(a("rGqo"),a("RIqP")),m=a.n(f),p=a("VVcl"),v=a.n(p),y=a("kv6+"),g={created:function(){this.eventKey=this.$route.params.eventKey,this.loadSelectSeason()},mounted:function(){this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("event_schedules",this.$database.ref("event_schedules")),this.$bindAsArray("event",this.$database.ref("events").orderByKey().equalTo(this.eventKey)),this.$bindAsArray("payment_transactions",this.$database.ref("payment_transactions")),this.$bindAsArray("contractsigned",this.$database.ref("contractSigned")),this.$bindAsArray("courses",this.$database.ref("settings/courses")),this.$bindAsArray("model_list",this.$database.ref("models")),this.$bindAsArray("attendance",this.$database.ref("attendance")),this.$bindAsArray("events",this.$database.ref("events")),this.$bindAsArray("batch",this.$database.ref("event_schedules"))},components:{CalendarView:v.a,CalendarAgenda:y["b"]},computed:{getSeasons:function(){try{return this.event[0].seasons}catch(t){return[]}},getActivities:function(){var t=this,e=new Array,a=m()(this.event_schedules);return this.$lodash.forEach(a,function(a){t.$lodash.forEach(a.activities,function(t){t.batchKey=a[".key"],e.push(t)})}),e},getEvents:function(){return this.events},getStartDate:function(t){new Date(t.row.startDate)},mapActivities:function(){for(var t=this,e=this.$lodash.filter(this.courses,function(t){return t}),a=[],n=0;n<e.length;n++)for(var i=e[n].activities,s=0;s<i.length;s++)if("Payment"!==i[s].label){var o=i[s].label;a.push(o)}var l=this.$lodash.uniq(a),r=this.$lodash.map(l,function(e){return{label:e,value:t.$lodash.lowerCase(e)}}),c=[],u={label:"All",value:""};c.push(u);for(var d=0;d<r.length;d++){var h=r[d];c.push(h)}return this.filter="",this.mapEventActivities,c},mapEventActivities:function(){var t=[];this.$lodash.map(this.getActivities,function(e){return"payment"!=e.type&&t.push(e),e});return console.log("filtered payments",t),t},getMapActivities:function(){var t=this,e=this.$lodash.map(this.event_schedules,function(e){return{key:e[".key"],eventName:e.eventName,eventKey:e.eventKey,seasonName:e.seasonName,batchNumber:e.batchNumber,id:t.upcomingActivity(e.activities).id,upcomingAct:t.upcomingActivity(e.activities).type,date:t.$moment(t.upcomingActivity(e.activities).startDate).format("ll"),forSort:new Date(t.upcomingActivity(e.activities).startDate),time:t.$moment(t.upcomingActivity(e.activities).startDate).format("LT")}});return e},getAllAttendance:function(){try{for(var t=this.mapEventActivities,e=this.OpenSeasonOnly,a=this.batch,n=[],i=[],s=0;s<a.length;s++)for(var o=0;o<e.length;o++)a[s].seasonName===e[o].seasonName?n.push(a[s]):i.push(a[s]);for(var l=[],r=[],c=0;c<t.length;c++)for(var u=0;u<n.length;u++)if(t[c].batchKey===n[u][".key"]){var d={key:n[u][".key"],upcomingAct:t[c].type,eventKey:n[u].eventKey,forSort:new Date(t[c].startDate),eventName:n[u].eventName,seasonName:n[u].seasonName,batchNumber:n[u].batchNumber,id:t[c].id,date:this.$moment(t[c].startDate).format("ll"),time:this.$moment(t[c].startDate).format("LT")};l.push(d)}else r.push(t[c]);var h=this.$lodash.orderBy(l,"forSort","asc");return h}catch(t){return console.log("err",t),[]}},getFilteredActivities:function(){var t=this;if(!0===this.seeAllFullDay){var e=this.$lodash.filter(this.getAllAttendance,function(e){return e.eventKey===t.$route.params.eventKey}),a=this.$lodash.groupBy(e,function(t){return t.date+t.upcomingAct}),n=this.$lodash.filter(a,function(t,e,a){return t[".key"]=e,a});return console.log("filteredUNIQ",n),n}var i=this.$lodash.filter(this.FilterActivitiesOpenSeason,function(e){return e.eventKey===t.$route.params.eventKey}),s=this.$lodash.groupBy(i,function(t){return t.date+t.upcomingAct}),o=this.$lodash.filter(s,function(t,e,a){return t[".key"]=e,a});return o},getFullDayTableData:function(){for(var t=[],e=0;e<this.getFilteredActivities.length;e++){var a=this.getFilteredActivities[e];t.push({date:this.getDateForTable(a),type:this.getTypeForTable(a),batchKeys:this.getBatchesPerDate(a),batchTitles:this.getBatchNameForTable(a),routerParam:this.getRouterLink(a),sortDate:this.getSortableDate(a)})}return t},OpenSeasonOnly:function(){try{for(var t=this.events,e=[],a=[],n=this.$lodash.filter(t,function(t){return t.seasons}),i=0;i<n.length;i++)for(var s=0;s<n[i].seasons.length;s++)"open"===n[i].seasons[s].status?e.push(n[i].seasons[s]):a.push(n[i].seasons[s]);return e}catch(t){return console.log(t),[]}},FilterActivitiesOpenSeason:function(){try{for(var t=this.getMapActivities,e=this.OpenSeasonOnly,a=[],n=[],i=0;i<t.length;i++)for(var s=0;s<e.length;s++)t[i].seasonName===e[s].seasonName?a.push(t[i]):n.push(t[i]);return a}catch(t){return console.log(t),[]}},ByBatchTableData:function(){var t=this;try{var e=this.getAllAttendance,a=this.FilterActivitiesOpenSeason;if(!0===this.seeAll){console.log("ByBatchTableData",e);var n=this.$lodash.filter(e,function(e){return e.eventKey===t.$route.params.eventKey}),i=this.$lodash.filter(n,function(t){return"payment"===t.upcomingAct||"payments"===t.upcomingAct?0:t});return i}var s=this.$lodash.filter(a,function(e){return e.eventKey===t.$route.params.eventKey});return console.log("ByBatchTableData",s),s}catch(t){return console.log("err",t),[]}},getModels:function(){try{var t=this.selectedAttendance.key,e=this.selectedAttendance.id,a=this.selectedAttendance.upcomingAct;if(console.log(e+t+a),"orientation"!==a)return console.log("activity models",this.returnAttendanceList(t,e)),this.returnAttendanceList(t,e);console.log("orientation");var n=this.$lodash.filter(this.model_list,function(e){return e.batchKey===t});return console.log("modellist",n),n}catch(t){return[]}},getModelsFull:function(){var t=this;try{if(void 0===h()(this.selectedFull))return[];if("orientation"!==this.selectedFull.type){var e=this.selectedFull.routerParam,a=this.$lodash.split(e,"$"),n=this.selectedFull.date,i=this.selectedFull.type;console.log("activityDate",n),console.log("split batches",a);var s=[];return this.$lodash.forEach(a,function(e){var a=e;console.log("key NOT orientation",a);var o=t.returnBatchActivity(a),l=[],r="",c=null,d=t.$moment(new Date(n)).format("ll");t.$lodash.map(o,function(e){var a=t.$moment(new Date(e.startDate)).format("ll");e.type===i&&d===a?(r=e.id,c=new Date(e.startDate)):l.push(e)});console.log("key",a),console.log("titles",r);for(var h=t.returnAttendanceList(a,r),f=0;f<h.length;f++){var m=u()({},h[f]);m.activityID=r,m.activityTime=c,s.push(m)}}),console.log("modelsBatch",s),s}var o,l,r=function(){var e=t.selectedFull.routerParam,a=t.$lodash.split(e,"$"),n=t.selectedFull.sortDate,i=t.selectedFull.type;console.log("activityDate",n),console.log("split batches orientation",a);var s=[],r=function(){var e=a[o],r=t.returnBatchActivity(e),c=[],u="",d=null,h=t.$moment(new Date(n)).format("ll");t.$lodash.map(r,function(e){var a=t.$moment(new Date(e.startDate)).format("ll");e.type===i&&h===a?(u=e.id,d=new Date(e.startDate)):c.push(e)});for(l=0;l<t.model_list.length;l++)if(t.model_list[l].batchKey===a[o]){var f=t.model_list[l];f.activityID=u,f.activityTime=d,s.push(f)}};for(o=0;o<a.length;o++)r();return console.log("all models in batches",s),{v:s}}();if("object"===h()(r))return r.v}catch(t){return[]}}},data:function(){var t;return t={filter:"",contractsigned:[],payment_transactions:[],startingDayOfWeek:0,showEventTimes:!0,showDate:new Date,schedules:[],selectedSeason:{},viewMode:"batchMode",events:[],event:[],batch:[],eventKey:"",batchActivity:[],attendanceListFull:[],batchActivity2:[],RowsPage:[0],selectedAttendance:{},selectedFull:{},showPrintModal:!1,showFullPrintModal:!1,seeAll:!1,seeAllFullDay:!1,fullDayShow:!1,byBatchShow:!0,activities:[],selectActivity:""},r()(t,"events",[]),r()(t,"event_schedules",[]),r()(t,"model_list",[]),r()(t,"tableLoading",!1),r()(t,"fullDayColumns",[{name:"date",required:!0,label:"Date",align:"left",sortable:!0,field:"sortDate"},{name:"type",required:!0,label:"Activity Type",align:"left",sortable:!0,field:"type"},{name:"batches",required:!0,label:"Batches",align:"left"},{name:"action",required:!0,label:"Action",align:"center",sortable:!0}]),r()(t,"columns",[{name:"season",required:!0,label:"Season",align:"left",field:"seasonName",sortable:!0},{name:"batch",required:!0,label:"Batch",align:"left",field:"batchNumber",sortable:!0},{name:"activity",required:!0,label:"Upcoming Activity",align:"left",sortable:!0,field:"upcomingAct"},{name:"date",required:!0,label:"Date",align:"left",sortable:!0,field:"forSort"},{name:"time",required:!0,label:"Time",align:"left",sortable:!0,field:"forSort"},{name:"action",required:!0,label:"Action",align:"center",sortable:!0}]),r()(t,"Modelcolumns",[{name:"fullname",required:!0,label:"Full Name",align:"left"},{name:"signature",required:!0,label:"Signature",align:"left"}]),r()(t,"ModelFullcolumns",[{name:"fullname",required:!0,label:"Full Name",align:"left"},{name:"event",required:!0,label:"Event",align:"left"},{name:"time",required:!0,label:"Time",align:"left"},{name:"signature",required:!0,label:"Signature",align:"left"}]),r()(t,"pagination",{sortBy:null,descending:!1,page:1,rowsPerPage:10}),r()(t,"Modelpagination",{sortBy:null,descending:!1,page:1,rowsPerPage:0}),t},methods:{dropOnDate:function(t,e){},clickEvent:function(t){},setShowDate:function(t){this.showDate=t},getCol:function(t){console.log("c",t)},loadSelectSeason:function(){var t=this;try{var e=this.$store.state.startUp.events;console.log("events",e);var a=this.$lodash.filter(e,function(e){return e[".key"]===t.eventKey})[0],n=a.seasons.length;this.selectedSeason=a.seasons[n-1],console.log("this.selectedSeason",this.selectedSeason)}catch(t){this.selectedSeason={}}},test:function(){console.log("seasonBatches",this.seasonBatches)},getModelsPaymentTransactions:function(t){try{var e=this.$lodash.filter(this.payment_transactions,function(e){return e.modelKey===t});return console.log("modelpayments",e),e}catch(t){return console.log("error",t),[]}},getBatchesPerDate:function(t){for(var e=t,a=[],n=0;n<e.length;n++){var i=e[n].key;a.push(i)}var s=this.$lodash.join(a,"$"),o=this.$lodash.split(s,"$");return o},getRouterLink:function(t){for(var e=t,a=[],n=0;n<e.length;n++){var i=e[n].key;a.push(i)}var s=this.$lodash.join(a,"$");this.$lodash.split(s,"$");return s},getBatchNameForTable:function(t){for(var e=t,a=[],n=0;n<e.length;n++){var i=e[n].id,s=e[n].seasonName,o=this.$moment(e[n].forSort).format("LT"),l=this.$lodash.join([s,i,o]," / ");a.push(l)}var r=this.$lodash.join(a,"$"),c=this.$lodash.split(r,"$");return c},getDateForTable:function(t){var e=t[0].date;return e},getSortableDate:function(t){var e=t[0].forSort;return e},getTypeForTable:function(t){var e=t[0].upcomingAct;return e},showByBatch:function(){this.fullDayShow=!1,this.byBatchShow=!0},showFullDay:function(){this.fullDayShow=!0,this.byBatchShow=!1},upcomingActivity:function(t){for(var e=t,a=new Date,n=[],i=0;i<e.length;i++){var s=this.$mathMixin.dayDiff(a,new Date(e[i].startDate));s>=0&&"payment"!=e[i].type&&n.push(e[i])}var o=n.sort(function(t,e){var a=new Date(t.startDate),n=new Date(e.startDate);return a-n});return o[0]},showSeason:function(t){console.log("show season",t)},getTitle:function(t){var e=t.row.activities;this.$lodash.map(e,function(t){return t.title})},mySort:function(t,e,a){var n=this.computedCols.find(function(t){return t.name===e});if(null===n||void 0===n.field)return t;var i=a?-1:1,s="function"===typeof n.field?function(t){return n.field(t)}:function(t){return t[n.field]};return t.sort(function(t,e){var a=s(t),l=s(e);if(null===a||void 0===a)return-1*i;if(null===l||void 0===l)return 1*i;if(n.sort)return n.sort(a,l)*i;if(isNumber(a)&&isNumber(l))return(a-l)*i;if(isDate(a)&&isDate(l))return sortDate(a,l)*i;if("boolean"===typeof a&&"boolean"===typeof l)return(t-e)*i;var r=[a,l].map(function(t){return(t+"").toLowerCase()}),c=o()(r,2);return a=c[0],l=c[1],a<l?-1*i:a===l?0:i})},selectedAttendancePrint:function(t){this.selectedAttendance=t,console.log("for print",t),this.showPrintModal=!0},printPdf:function(){window.print()},selectedFullAttendancePrint:function(t){this.selectedFull=t,console.log("for print",t),this.showFullPrintModal=!0},returnBatchActivity:function(t){var e=[];this.$lodash.forEach(this.event_schedules,function(a){a[".key"]===t&&e.push(a)});var a=[];return this.$lodash.forEach(e,function(t){a.push(t.activities)}),console.log("found",e),console.log("activities",a),a[0]},returnAttendanceList:function(t,e){var a=[];if(this.$lodash.forEach(this.attendance,function(e){e[".key"]===t&&a.push(e)}),"undefined"===typeof a[0])return[];console.log("keyfound",a[0]),console.log("title",e);var n=a[0],i=[];return console.log("zero",n[e].models),this.$lodash.map(n[e].models,function(t,e,a){t[".key"]=e,i.push(t)}),console.log("models",i),i}}},b=g,w=a("KHd+"),A=Object(w["a"])(b,n,i,!1,null,null,null);e["default"]=A.exports}}]);