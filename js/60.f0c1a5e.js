(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{bvxU:function(e,t,n){"use strict";var a=n("rBHv"),s=n.n(a);s.a},rBHv:function(e,t,n){},s0Ml:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("q-tabs",{staticClass:"full-width text-white row shadow-2",attrs:{color:"faded"}},[n("q-route-tab",{staticClass:"bg-dark",attrs:{slot:"title",default:"",label:"All Events",to:"/allSMS",exact:""},slot:"title"}),e._l(e.getOpenEventOnly,function(e,t){return n("div",{key:t,attrs:{slot:"title"},slot:"title"},[n("q-route-tab",{attrs:{label:e.eventName,to:{name:"viewEventSMS",params:{eventKey:e[".key"]}}}})],1)})],2),n("router-view",{key:e.$route.fullPath})],1)},s=[];a._withStripped=!0;var r=n("cDf5"),o=n.n(r),i=n("kv6+"),l=n("+4JY");l["a"].setBrand;window.quasarConfig={brand:{saladyellow:"#00aab7"}};var d={mounted:function(){this.$bindAsArray("schedules",this.$database.ref("event_schedules")),this.$bindAsArray("events",this.$database.ref("events"))},components:{Calendar:i["a"]},computed:{getOpenEventOnly:function(){var e=this;try{var t,n=function(){console.log("events",e.events);var n=e.events,a=[];for(t=0;t<n.length;t++){var s=n[t].seasons;e.$lodash.filter(s,function(e){"open"===e.status&&a.push(e)})}var r=[],o=function(){var s=n[t][".key"];e.$lodash.filter(a,function(e){e.eventKey===s&&r.push(n[t])})};for(t=0;t<n.length;t++)o();return console.log("eventOpen",r),{v:r}}();if("object"===o()(n))return n.v}catch(e){return console.log("err",e),[]}}},data:function(){return{filter:"",events:[],schedules:[],startDate:new Date,someEventObject:[{id:1,summary:"Test event",description:"Some extra info goes here",location:"Office of the Divine Randomness, 1232 Main St., Denver, CO",start:{dateTime:"2018-10-16T14:00:00"},end:{dateTime:"2018-10-16T15:00:00"},color:"positive",attendees:[{id:5,email:"somebody@somewhere.com",displayName:"John Q. Public",organizer:!1,self:!1,resource:!1}]},{id:2,summary:"Test all-day event",description:"Some extra info goes here",start:{date:"2018-11-16"},end:{date:"2018-11-19"}},{id:3,summary:"Some other test event",description:"Some extra info goes here",start:{dateTime:"2018-11-17T10:00:00+0500"},end:{dateTime:"2018-11-17T12:30:00+0500"}}]}},methods:{}},u=d,c=(n("bvxU"),n("KHd+")),v=Object(c["a"])(u,a,s,!1,null,null,null);t["default"]=v.exports}}]);