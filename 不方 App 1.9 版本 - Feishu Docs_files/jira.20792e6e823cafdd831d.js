(this.webpackJsonp=this.webpackJsonp||[]).push([["jira"],{"/CvD":function(e,t,n){"use strict";var i,a,r,s;n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),(a=i=i||{})[a.NotSupport=0]="NotSupport",a[a.Text=1]="Text",a[a.Number=2]="Number",a[a.SingleSelect=3]="SingleSelect",a[a.MultiSelect=4]="MultiSelect",a[a.DateTime=5]="DateTime",(s=r=r||{})[s.Textarea=1]="Textarea",s[s.Editor=2]="Editor"},"2kJ3":function(e,t,n){"use strict";n.r(t);var i=n("EUcq");t.default=i.a},"76g8":function(e,t,n){},C5wY:function(e,r,o){"use strict";(function(e){o.d(r,"a",function(){return t}),o.d(r,"b",function(){return a});var t,n=o("lSNA"),i=o.n(n),s=o("skFV");(t=t||{}).JiraMaster="JiraMaster";var c=i()({},t.JiraMaster,{name:e("doc.common.jira_master"),onlineId:"cli_9c394c5cc1ff910b",stagingId:"cli_9ce3a894d0f89107",source:"isv_jiramaster"});function a(e){var t=c[e],n=t.name,i=t.onlineId,a=t.stagingId,r=t.source;return{name:n,id:Object(s.D)()&&a?a:i,source:r}}}).call(this,o("2vAP"))},EUcq:function(e,O,N){"use strict";(function(i){N.d(O,"a",function(){return E});var e=N("ZvzK"),c=N.n(e),t=N("RIqP"),a=N.n(t),n=N("lwsE"),r=N.n(n),s=N("W8MJ"),o=N.n(s),l=N("a1gu"),u=N.n(l),d=N("Nsbk"),h=N.n(d),f=N("7W2i"),p=N.n(f),v=N("cDf5"),m=N.n(v),y=N("q1tI"),k=N.n(y),b=N("O725"),j=N("2ACu"),S=N("svPQ"),g=N("4PSP"),I=N("Hj9z"),_=(N("djg9"),function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":m()(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;0<=c;c--)(a=e[c])&&(s=(r<3?a(s):3<r?a(t,n,s):a(t,n))||s);return 3<r&&s&&Object.defineProperty(t,n,s),s}),C=200,E=function(e){function n(e){var t;return r()(this,n),(t=u()(this,h()(n).call(this,e))).state={hoverIcon:!1,hoverPopover:!1,hideTimer:null,configureItems:[]},t}return p()(n,e),o()(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({configureItems:this.props.configureItems})}},{key:"setVisible",value:function(t,n){var e=a()(this.state.configureItems).map(function(e){return e.id===t?Object.assign({},e,{visible:n}):e});this.setState({configureItems:e})}},{key:"handleHoverChange",value:function(e){var t=this,n=Object.assign({},this.state,e),i=n.hoverIcon,a=n.hoverPopover,r=n.hideTimer;r&&clearTimeout(r);var s=i||a?null:setTimeout(function(){return t.setState({hideTimer:null})},C);this.setState({hoverIcon:i,hoverPopover:a,hideTimer:s})}},{key:"handleMouseEnterIcon",value:function(){this.handleHoverChange({hoverIcon:!0})}},{key:"handleMouseLeaveIcon",value:function(){this.handleHoverChange({hoverIcon:!1})}},{key:"handleMouseEnterPopover",value:function(){this.handleHoverChange({hoverPopover:!0})}},{key:"handleMouseLeavePopover",value:function(){this.handleHoverChange({hoverPopover:!1})}},{key:"handleItemClick",value:function(e){var t=!e.visible;this.props.onChange(e.id,t)&&(this.setVisible(e.id,t),Object(j.default)("toggle_attribute",{field_name:e.name,action:"click_field_visibleswitch",source:"editorbar",block_type:"isv_jiramaster",view_status:"card",attr_op_status:e.visible?"cancel":"effective"}))}},{key:"renderConfigureItem",value:function(e){var t=this;return k.a.createElement("li",{key:e.id,className:"jira-field-configure--item",onClick:function(){return t.handleItemClick(e)}},k.a.createElement(S.a,{className:"jira-field-configure--checkbox",checked:e.visible}),k.a.createElement("span",{className:"jira-field-configure--item-text"},I.JiraIssueCreator.getFieldName(i,e.id)||e.name))}},{key:"renderConfigureItems",value:function(){return k.a.createElement("div",{className:"jira-field-configure--items-menu",onMouseEnter:this.handleMouseEnterPopover,onMouseLeave:this.handleMouseLeavePopover},k.a.createElement("div",{className:"jira-field-configure--items-menu-title"},k.a.createElement("span",null,i("doc.jira.field_show_config"))),k.a.createElement("div",{className:"jira-field-configure--items-list"},this.state.configureItems.map(this.renderConfigureItem)))}},{key:"render",value:function(){var e=this.state,t=e.hoverIcon,n=e.hoverPopover,i=e.hideTimer,a=!!(t||n||i),r=Math.random().toString(36).slice(2),s="jira-field-configure--".concat(r);return k.a.createElement(c.a,{key:"jira-field-configure",prefixCls:"cp-dropdown",placement:"bottomCenter",align:{offset:[37,10]},overlay:this.renderConfigureItems(),getPopupContainer:function(){return document.getElementById(s)},visible:a},k.a.createElement("div",{id:s},k.a.createElement(b.a,{className:"jira-field-configure--icon",onMouseEnter:this.handleMouseEnterIcon,onMouseLeave:this.handleMouseLeaveIcon})))}}]),n}(k.a.Component);_([Object(g.Bind)()],E.prototype,"handleHoverChange",null),_([Object(g.Bind)()],E.prototype,"handleMouseEnterIcon",null),_([Object(g.Bind)()],E.prototype,"handleMouseLeaveIcon",null),_([Object(g.Bind)()],E.prototype,"handleMouseEnterPopover",null),_([Object(g.Bind)()],E.prototype,"handleMouseLeavePopover",null),_([Object(g.Bind)()],E.prototype,"handleItemClick",null),_([Object(g.Bind)()],E.prototype,"renderConfigureItem",null)}).call(this,N("2vAP"))},Lnrf:function(e,P,x){"use strict";(function(c){x.d(P,"a",function(){return L});var e=x("o0o1"),a=x.n(e),t=x("yXPU"),r=x.n(t),n=x("lwsE"),s=x.n(n),i=x("W8MJ"),o=x.n(i),l=x("a1gu"),u=x.n(l),d=x("Nsbk"),h=x.n(d),f=x("7W2i"),p=x.n(f),v=x("cDf5"),m=x.n(v),y=x("3Hq1"),k=x("q1tI"),b=x.n(k),j=x("kKIs"),S=x("UlbS"),g=x("LaDK"),I=x("2ACu"),_=x("4PSP"),C=x("nHtH"),E=x("4jTF"),O=x("kUgE"),N=(x("sdbe"),function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":m()(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;0<=c;c--)(a=e[c])&&(s=(r<3?a(s):3<r?a(t,n,s):a(t,n))||s);return 3<r&&s&&Object.defineProperty(t,n,s),s}),T=j.a.SyncIcon,M=j.a.SyncingIcon,w=j.a.FailIcon,R=3e4,L=function(e){function n(e){var t;return s()(this,n),(t=u()(this,h()(n).call(this,e))).state={status:e.lastSyncTime?g.b.COMMON:g.b.SYNCING,timestamp:0,lastSyncTime:e.lastSyncTime},t}function t(){return i.apply(this,arguments)}var i;return p()(n,e),o()(n,[{key:"UNSAFE_componentWillUpdate",value:function(e,t){this.setWidth(t),this.state.status===g.b.COMMON&&t.status===g.b.SYNCING&&this.clearTimer()}},{key:"componentDidUpdate",value:function(e,t){this.setStatus(e),this.setTimer(t)}},{key:"componentWillUnmount",value:function(){this.clearTimer(),this.lastSyncTimeRef=null}},{key:"setWidth",value:function(e){this.state.status===g.b.COMMON&&e.status===g.b.SYNCING&&this.lastSyncTimeRef&&!this.width&&(this.width=this.lastSyncTimeRef.clientWidth)}},{key:"setStatus",value:function(e){var t,n=this.props,i=n.jiraSyncStatus,a=n.blockToken;!a||e.jiraSyncStatus[a]!==(t=i[a])&&this.setState({status:t,lastSyncTime:Date.now()})}},{key:"setTimer",value:function(e){var t=this,n=this.state.status;e.status!==n&&(n!==g.b.COMMON&&n!==g.b.SYNCING&&n!==g.b.SOME_ISSUES_SYNC_FAIL?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.setState({status:g.b.COMMON}),t.timer=null},R)):n===g.b.COMMON&&(this.timer=setInterval(function(){t.setState({timestamp:+new Date})},6e4)))}},{key:"clearTimer",value:function(){this.state.status===g.b.COMMON?this.timer&&clearInterval(this.timer):this.timer&&clearTimeout(this.timer),this.timer=null}},{key:"syncJira",value:function(e){var t=this.props,n=t.syncJira,i=t.blockToken;this.setState({status:g.b.SYNCING}),i&&n(e)}},{key:"handleClickRetry",value:function(e){e.preventDefault(),e.stopPropagation(),this.syncJira("retry_btn")}},{key:"handleClickSync",value:function(e){e.preventDefault(),e.stopPropagation(),this.syncJira("refresh_btn")}},{key:"connectToJira",value:function(){var t=this;E.c.getInstance().startConnect(E.b.Jira,function(e){e===E.a.CONNECT_SUCCESS&&t.syncJira("connect")})}},{key:"handleClickConnect",value:(i=r()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.jiraAuthStatus,this.connectToJira(),Object(I.default)("client_start_connect",{connect_obj:"jira",source:"synctips",jira_type:t.jiraType});case 3:case"end":return e.stop()}},e,this)})),t)},{key:"getLastSyncTimeRef",value:function(e){this.lastSyncTimeRef=e}},{key:"handleOpenJiraLink",value:function(){var e=this.props.openJiraLink;e&&e("block")}},{key:"renderIssueCount",value:function(){var e=this.props,t=e.totalIssueCount,n=e.currIssueCount,i=e.isLoading,a=void 0!==i&&i,r=this.state.status,s=Object(O.isEnLanguage)();return!Object(y.default)(t)&&!Object(y.default)(n)&&n<t&&!a&&![g.b.SYNCING,g.b.SERVER_SYNCING].includes(r)?b.a.createElement("div",{className:"issue-count-text"},c("doc.jira.data_too_large"),s&&c("doc.jira.first_of_issues",n),b.a.createElement(S.Tooltip,{showDelay:80,title:c("doc.jira.issue_count_tooltip"),placement:"top"},b.a.createElement("span",{className:"active-text",onClick:this.handleOpenJiraLink}," ".concat(t," "))),c("doc.jira.count_issues"),!s&&c("doc.jira.first_of_issues",n)):null}},{key:"renderLastSyncTime",value:function(){var e=this.props,t=e.tooltipPlacement,n=void 0===t?"top":t,i=e.tooltipDisable,a=void 0!==i&&i,r=this.state.lastSyncTime,s=Object(C.a)(r);return b.a.createElement(S.Tooltip,{disable:a,showDelay:80,title:c("doc.jira.sync_jira_issue"),placement:n},b.a.createElement("div",{className:"last-sync-time",ref:this.getLastSyncTimeRef,onClick:this.handleClickSync},b.a.createElement("div",{style:{display:"inline-block"}},b.a.createElement(T,{className:"icon",style:this.iconStyle})),b.a.createElement("span",{className:"text"},c("doc.jira.last_sync_time_at"),s)))}},{key:"renderSyncing",value:function(){var e=this.props.syncingPosition,t=void 0===e?"center":e,n={width:this.width?"".concat(this.width,"px"):"unset",textAlign:t};return b.a.createElement("div",{className:"syncing",style:n},b.a.createElement(M,{className:"icon",style:this.iconStyle}),b.a.createElement("span",{className:"text"},c("doc.jira.syncing")),b.a.createElement("span",{className:"dot"},"..."))}},{key:"renderRetry",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_fail"),activeText:c("doc.jira.retry"),handler:this.handleClickRetry})}},{key:"renderNeedConnect",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_fail"),activeText:c("doc.jira.auth_retry"),handler:this.handleClickConnect})}},{key:"renderNoPermission",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_no_permission")})}},{key:"renderNoJira",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_no_jira")})}},{key:"renderCanNotUse",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_can_not_use")})}},{key:"renderNoBaseUrl",value:function(){return this.renderSyncFail({tipText:c("doc.jira.sync_no_base_url")})}},{key:"renderSomeIssueSyncFail",value:function(){return this.renderSyncFail({tipText:c("doc.jira.some_issue_sync_fail"),activeText:c("doc.jira.retry"),handler:this.handleClickRetry})}},{key:"renderSyncFail",value:function(e){var t=e.tipText,n=e.activeText,i=e.handler,a=this.props.showFailIcon,r=void 0!==a&&a;return b.a.createElement("div",{className:"sync-fail"},r&&b.a.createElement(w,{className:"icon is-fail",style:this.iconStyle}),b.a.createElement("span",null,t),n&&b.a.createElement("span",{className:"can-click",onClick:i},n))}},{key:"renderContent",value:function(){var e=this.props.isLoading;if(void 0!==e&&e)return this.renderSyncing();switch(this.state.status){case g.b.COMMON:return this.renderLastSyncTime();case g.b.SYNCING:case g.b.SERVER_SYNCING:return this.renderSyncing();case g.b.FAIL_RETRY:return this.renderRetry();case g.b.FAIL_AUTH:return this.renderNeedConnect();case g.b.FAIL_PERMISSION:return this.renderNoPermission();case g.b.FAIL_NO_JIRA:return this.renderNoJira();case g.b.FAIL_CAN_NOT_USE:return this.renderCanNotUse();case g.b.FAIL_NO_BASE_URL:return this.renderNoBaseUrl();case g.b.SOME_ISSUES_SYNC_FAIL:return this.renderSomeIssueSyncFail()}}},{key:"render",value:function(){return b.a.createElement("div",{className:"jira-issue-sync-button",style:this.props.style},this.renderContent(),this.renderIssueCount())}},{key:"iconStyle",get:function(){var e=this.props.iconSize,t=void 0===e?24:e;return{width:"".concat(t,"px"),height:"".concat(t,"px")}}}]),n}(b.a.Component);N([Object(_.Bind)()],L.prototype,"handleClickRetry",null),N([Object(_.Bind)()],L.prototype,"handleClickSync",null),N([Object(_.Bind)()],L.prototype,"handleClickConnect",null),N([Object(_.Bind)()],L.prototype,"getLastSyncTimeRef",null),N([Object(_.Bind)()],L.prototype,"handleOpenJiraLink",null)}).call(this,x("2vAP"))},O725:function(e,t,n){"use strict";var i=n("pVnL"),a=n.n(i),r=n("QILm"),s=n.n(r),c=n("q1tI"),o=n.n(c);t.a=function(e){e.styles;var t=s()(e,["styles"]);return o.a.createElement("svg",a()({width:"24",height:"24",viewBox:"0 0 24 24"},t),o.a.createElement("path",{d:"M11.99 16.61c2.35 0 4.53-1.48 6.56-4.7-1.97-3.2-4.15-4.67-6.56-4.67-2.41 0-4.58 1.47-6.54 4.67 2.01 3.22 4.18 4.7 6.54 4.7zM4 11.92C6.19 7.84 8.85 5.8 11.99 5.8c3.14 0 5.8 2.05 8.01 6.13-2.26 4.09-4.93 6.13-8.01 6.13S6.25 16.01 4 11.92zm8 2.89c1.6 0 2.9-1.3 2.9-2.89A2.9 2.9 0 0012 9.04a2.9 2.9 0 00-2.9 2.88 2.9 2.9 0 002.9 2.89zm0-1.44a1.45 1.45 0 110-2.88c.8 0 1.45.64 1.45 1.43 0 .8-.65 1.45-1.45 1.45z",fillRule:"evenodd"}))}},djg9:function(e,t,n){},iX0f:function(e,t,n){"use strict";n.r(t);var i=n("m/+l"),a=n("zoZt"),r=n("rWdK"),s=n("XMIC"),c=n("8mZy"),o=function(e){return{jiraAuthStatus:Object(r.a)(e)}},l={openModal:s.c,fetchJiraAuthStatus:c.g},u=Object(i.connect)(o,l)(a.a);t.default=u},kKIs:function(e,t,n){"use strict";var i=n("pVnL"),a=n.n(i),r=n("QILm"),s=n.n(r),c=n("q1tI"),o=n.n(c),l=function(e){e.styles;var t=s()(e,["styles"]);return o.a.createElement("svg",a()({width:"24",height:"24",viewBox:"0 0 24 24"},t),o.a.createElement("path",{d:"M12.15 5a7.2 7.2 0 015.35 2.36V5.89c0-.21.17-.39.39-.39h.72c.22 0 .39.17.39.39v3.86a.75.75 0 01-.02.18L19 10h-.04a.75.75 0 01-.71.5h-3.87a.39.39 0 01-.38-.39V9.4c0-.21.17-.39.39-.39h2.46a5.64 5.64 0 00-4.7-2.5c-3.1 0-5.62 2.46-5.62 5.5s2.52 5.5 5.62 5.5a5.61 5.61 0 005.23-3.5H19c-.88 2.9-3.61 5-6.85 5C8.2 19 5 15.87 5 12s3.2-7 7.15-7z",fillRule:"evenodd"}))},u=function(e){var t=e.styles,n=void 0===t?{}:t,i=s()(e,["styles"]);return o.a.createElement("svg",a()({className:n["loading-spinner"]||"loading-spinner",width:"40",height:"40",viewBox:"0 0 66 66"},i),o.a.createElement("circle",{className:n["spinner-path"]||"spinner-path",fill:"none",cx:"33",cy:"33",r:"30"}))},d=function(e){e.styles;var t=s()(e,["styles"]);return o.a.createElement("svg",a()({width:"24",height:"24",viewBox:"0 0 24 24"},t),o.a.createElement("path",{d:"M9.91 16.06l8.22-8.22a.37.37 0 01.53 0l.53.53c.15.14.15.38 0 .53l-9.01 9.01a.38.38 0 01-.53 0l-.53-.53-4.25-4.24a.37.37 0 010-.53l.54-.53a.37.37 0 01.53 0l3.97 3.98z",fill:"none",fillRule:"evenodd"}))},h=function(e){e.styles;var t=s()(e,["styles"]);return o.a.createElement("svg",a()({width:"24",height:"24",viewBox:"0 0 24 24"},t),o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("path",{d:"M0 0h24v24H0z"}),o.a.createElement("path",{d:"M12 18.5c3.73 0 6.5-2.77 6.5-6.5S15.73 5.5 12 5.5A6.33 6.33 0 005.5 12c0 3.73 2.77 6.5 6.5 6.5zm0 1.5a8 8 0 110-16 8 8 0 010 16zm-.39-5.5h.78c.2 0 .37.17.37.38v.75c0 .2-.17.37-.37.37h-.78a.38.38 0 01-.37-.37v-.75c0-.21.17-.38.37-.38zm.02-6.5h.74c.21 0 .38.17.38.38v4.83c0 .2-.17.37-.38.37h-.74a.37.37 0 01-.38-.37V8.38c0-.2.17-.38.38-.38z",fill:"#2B2F36"})))};n.d(t,"a",function(){return f});var f={SyncIcon:l,SyncingIcon:u,SuccessIcon:d,FailIcon:h}},mdCP:function(e,t,n){"use strict";var i=n("pVnL"),a=n.n(i),r=n("QILm"),s=n.n(r),c=n("q1tI"),o=n.n(c);t.a=function(e){e.styles;var t=s()(e,["styles"]);return o.a.createElement("svg",a()({viewBox:"0 0 16 16",fill:"#88909A"},t),o.a.createElement("path",{d:"M8 15.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-1a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM6 8.22v-.5C7.1 6.53 7.93 5.99 8.52 6.1c.89.17.8.94.74 1.23-.05.3-1.8 4.6-1.44 4.66.24.04.72-.34 1.44-1.16v.63C8.6 12.48 7.75 13 6.68 13c-.67 0-.82-.59-.56-1.26.56-1.46 1.52-3.95 1.52-4.42 0-.47-.54-.17-1.63.9zM8.7 5.3a1.15 1.15 0 110-2.3 1.15 1.15 0 010 2.3z"}))}},n5Qk:function(e,t,n){"use strict";n.r(t);var i=n("Lnrf"),a=n("m/+l"),r=n("rWdK"),s=function(e){return{jiraAuthStatus:Object(r.a)(e),jiraSyncStatus:Object(r.c)(e)}},c=Object(a.connect)(s)(i.a);t.default=c},sdbe:function(e,t,n){},zoZt:function(e,F,J){"use strict";(function(l){J.d(F,"a",function(){return x});var e=J("lwsE"),i=J.n(e),t=J("W8MJ"),a=J.n(t),n=J("a1gu"),r=J.n(n),s=J("Nsbk"),c=J.n(s),o=J("7W2i"),u=J.n(o),d=J("cDf5"),h=J.n(d),f=J("q1tI"),p=J.n(f),v=J("2ACu"),m=J("TSYQ"),y=J.n(m),k=J("EzSe"),b=J("C5wY"),j=J("4PSP"),S=J("jryj"),g=J("CcW+"),I=J("D28M"),_=J("kUgE"),C=J("LsEt"),E=J.n(C),O=J("LaDK"),N=J("mdCP"),T=J("4jTF"),M=J("/CvD"),w=J("Hj9z"),R=J("n5Qk"),L=J("7ZH0"),P=(J("76g8"),function(e,t,n,i){var a,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":h()(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;0<=c;c--)(a=e[c])&&(s=(r<3?a(s):3<r?a(t,n,s):a(t,n))||s);return 3<r&&s&&Object.defineProperty(t,n,s),s}),x=function(e){function n(e){var t;return i()(this,n),(t=r()(this,c()(n).call(this,e))).timer=null,t.state={isFocus:!1,isHover:!1,isOnline:!0,searchResult:[],selectedKey:"",isSelected:!1,typeIconUrl:e.typeIconUrl},t}return u()(n,e),a()(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setTypeIconUrl()}},{key:"componentDidMount",value:function(){this.handleEventBinding("on")}},{key:"componentWillUnmount",value:function(){this.clearTimer(),this.handleEventBinding("off")}},{key:"handleEventBinding",value:function(e){var t="on"===e?"addEventListener":"removeEventListener";document[t]("click",this.handleDocumentClick),window[t]("online",this.handleOnline),window[t]("offline",this.handleOffline)}},{key:"handleOnline",value:function(){this.setIsOnline(!0)}},{key:"handleOffline",value:function(){this.setIsOnline(!1)}},{key:"setIsOnline",value:function(e){e!==this.state.isOnline&&this.setState({isOnline:e})}},{key:"clearTimer",value:function(){this.timer&&clearTimeout(this.timer),this.timer=null}},{key:"setTypeIconUrl",value:function(){var e=this,t=this.props.typeIconUrl;this.timer=setTimeout(function(){e.timer=null,e.setState({typeIconUrl:E.a})},5e3);var n=document.createElement("img");n.onload=function(){e.clearTimer(),e.state.typeIconUrl!==t&&e.setState({typeIconUrl:t})},n.src=t}},{key:"handleDocumentClick",value:function(e){var t;e.detail&&(t=!1,Object(I.l)(e.target,"block-id-".concat(this.props.blockId))&&(t=!0),this.state.isFocus!==t&&this.setState({isFocus:t}))}},{key:"handleMouseEnter",value:function(){this.setIsHover(!0)}},{key:"handleMouseLeave",value:function(){this.setIsHover(!1)}},{key:"setIsHover",value:function(e){e!==this.state.isHover&&this.setState({isHover:e})}},{key:"handleKeyClick",value:function(){var e=this.props.jiraAuthStatus;Object(k.b)(this.props.linkUrl),Object(v.default)("click_openorigin_link",{link_type:"jira",source:"block",view_status:"card",jira_type:e.jiraType,open_with_app:"false"})}},{key:"handleInputClick",value:function(e){var t=this,n=this.props,i=n.jiraAuthStatus,a=n.fetchJiraAuthStatus,r=i.authState,s=i.canApply,c=i.baseUrl,o="error";switch(r){case O.a.FETCH_FAIL:a(),L.a.show({tip:l("doc.jira.fetch_auth_fail"),type:o});break;case O.a.NO_JIRA:L.a.show({tip:l("doc.jira.no_open_to_edit"),type:o});break;case O.a.OPEN_JIRA:s?L.a.show({tip:l("doc.jira.no_permission_to_edit_comma"),type:o,actionText:l("doc.jira.click_to_apply"),handle:function(){t.props.openModal(S.MODAL_TYPES.APPLY_APP_AUTH,{app:b.a.JiraMaster})}}):L.a.show({tip:l("doc.jira.no_permission_to_edit"),type:o});break;case O.a.WITHIN_JIRA:c?L.a.show({tip:l("doc.jira.edit_need_connect"),type:o,actionText:l("doc.jira.connect"),positive:"en"===Object(_.getLanguage)(),handle:this.handleConnect}):L.a.show({tip:l("doc.jira.contact_admin_to_check_base_url"),type:o})}}},{key:"handleConnect",value:function(){var e=this.props.jiraAuthStatus.jiraType;Object(v.default)("client_start_connect",{connect_obj:"jira",source:"edit_toast",jira_type:e}),T.c.getInstance().startConnect(T.b.Jira)}},{key:"renderOfflineInfo",value:function(){var e=this.state,t=e.isHover,n=e.isOnline;return t&&!n?p.a.createElement("div",{className:"block--offline-info"},p.a.createElement(N.a,{className:"block--offline__icon"}),p.a.createElement("span",null,l("doc.jira.edit_not_support_offline"))):null}},{key:"renderHeader",value:function(){var e=this.props,t=e.issueKey,n=e.lastSyncTime,i=e.blockToken,a=e.renderHighlight,r=e.syncJira,s=e.isPresentation,c=this.state.typeIconUrl;return p.a.createElement("div",{className:"jira-issue--card__header"},p.a.createElement("img",{className:"jira-issue-type-icon",src:c}),p.a.createElement("span",{className:"jira-issue-key",onClick:this.handleKeyClick},a(t,"issueKey")),p.a.createElement(R.default,{tooltipDisable:s,lastSyncTime:n,blockToken:i,syncJira:r}))}},{key:"setOptions",value:function(e,t){return Object.assign({},e,{property:Object.assign({},e.property,{options:t})})}},{key:"replaceRecordName",value:function(e){return e.map(function(e){return Object.assign({},e,{name:w.JiraIssueCreator.getFieldName(l,e.id)||e.name})})}},{key:"renderForm",value:function(){var e=this.props,t=e.onIssueRecordValueChange,n=e.editable,i=e.onSelectOptionsCreate,a=e.onClearRecordReEditValue,r=this.state.isOnline,s=y()("jira-issue--card__form",{disable:this.fromDisable});return p.a.createElement("div",{className:s},p.a.createElement(g.a,{canReEdit:!0,labelWidth:103,editable:n,readonly:this.fromDisable,textEngine:M.b.Textarea,isOnline:r,disableOffline:!0,disableStyleHotKey:!0,recordList:this.recordList,onRecordValueChange:t,onClearRecordReEditValue:a,onSelectOptionsCreate:i,onInputClick:this.handleInputClick}))}},{key:"getJiraIssueCardRef",value:function(e){this.jiraIssueCardRef=e}},{key:"render",value:function(){var e=y()("jira-issue--card",{"is-focus":this.state.isFocus,"is-selected":this.props.selected});return p.a.createElement("div",{ref:this.getJiraIssueCardRef,className:e,style:this.jiraIssueCardStyle,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.renderOfflineInfo(),this.renderHeader(),this.renderForm())}},{key:"recordList",get:function(){var e=this.props.recordMap;e.summary&&(e.summary=this.setOptions(e.summary,{disableEnter:!0}));var t=Object.values(e).filter(function(e){return e.visible}).sort(function(e,t){return e.sort-t.sort});return this.replaceRecordName(t)}},{key:"fromDisable",get:function(){var e=this.props,t=e.isPresentation,n=e.jiraAuthStatus;return t||n.authState!==O.a.HAS_CONNECTED}},{key:"jiraIssueCardStyle",get:function(){var e=this.props,t=e.size,n=e.isPresentation&&t&&t.width?Math.min(1.8,t.width/this.jiraIssueCardWidth):1;return{width:t?t.width:"auto",height:t&&t.height?t.height/n:"unset",zoom:n,overflow:t&&t.height?"auto":"unset"}}},{key:"jiraIssueCardWidth",get:function(){return this.jiraIssueCardRef.offsetWidth}}]),n}(p.a.Component);P([Object(j.Bind)()],x.prototype,"handleOnline",null),P([Object(j.Bind)()],x.prototype,"handleOffline",null),P([Object(j.Bind)()],x.prototype,"handleDocumentClick",null),P([Object(j.Bind)()],x.prototype,"handleMouseEnter",null),P([Object(j.Bind)()],x.prototype,"handleMouseLeave",null),P([Object(j.Bind)()],x.prototype,"handleKeyClick",null),P([Object(j.Bind)()],x.prototype,"handleInputClick",null),P([Object(j.Bind)()],x.prototype,"handleConnect",null),P([Object(j.Bind)()],x.prototype,"getJiraIssueCardRef",null)}).call(this,J("2vAP"))}}]);
//# sourceMappingURL=jira.af754f9b6ef5ba38eadb.js.map