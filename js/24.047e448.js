(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{UUzx:function(e,t,s){"use strict";s.r(t);var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-toolbar",{attrs:{color:"faded"}},[s("q-toolbar-title",[e._v("\n\t\t\tCreate Schedule\n\t\t")]),e.$store.state.schedules.isCreateNewBatch?e._e():s("q-btn",{attrs:{rounded:"",inverted:"",color:"primary"},on:{click:e.newBatchModal}},[e._v("Create New Batch")]),e.$store.state.schedules.isCreateNewBatch?s("q-toggle",{staticClass:"center",attrs:{"unchecked-icon":"visibility_off","checked-icon":"visibility",label:"View All Schedules"},model:{value:e.isSeeAllSchedules,callback:function(t){e.isSeeAllSchedules=t},expression:"isSeeAllSchedules"}}):e._e(),e.$store.state.schedules.isCreateNewBatch?s("q-btn",{staticClass:"q-mx-md",attrs:{rounded:"",inverted:"",color:"secondary"},on:{click:e.saveBatchSchedule}},[e._v("Save")]):e._e(),e.$store.state.schedules.isCreateNewBatch?s("q-btn",{attrs:{rounded:"",inverted:"",color:"negative"},on:{click:e.cancel}},[e._v("Cancel")]):e._e()],1),s("router-view")],1)},a=[],l={computed:{isSeeAllSchedules:{get:function(){return this.$store.state.schedules.isViewAllSched},set:function(e){this.$store.commit("schedules/isSeeAllSchedules",e)}}},methods:{newBatchModal:function(){this.$store.commit("schedules/updateNewBatchModal",!0)},saveBatchSchedule:function(){var e=this;this.$q.dialog({title:"Save",message:"Do you want to save?",ok:"Yes",cancel:"No"}).then(function(){e.$store.dispatch("schedules/saveBatchSchedule",{fireb:e.$firebase.database(),quasu:e.$q,lodash:e.$lodash})}).catch(function(){})},cancel:function(){var e=this;this.$q.dialog({title:"Discard",message:"Do you want to discard batch?",ok:"Yes",cancel:"No"}).then(function(){e.$store.commit("schedules/clearActivities"),e.$store.commit("schedules/restoreTaskList"),e.$store.commit("schedules/updateIsCreateNewBatch",!1)}).catch(function(){})}}},o=l,i=s("KHd+"),n=Object(i["a"])(o,c,a,!1,null,null,null);t["default"]=n.exports}}]);