define("modules/clean/api_v2/datetime",["require","exports","tslib","modules/clean/datetime"],function(e,t,r,i){"use strict";function a(e){return i.format_date_utc(e,"yyyy-MM-ddTHH:mm:ssZ")}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importStar(i);t.formatTimestamp=a}),define("modules/clean/api_v2/default_team_client",["require","exports","tslib","modules/clean/api_v2/types","modules/clean/api_v2/client_base","modules/clean/viewer"],function(e,t,r,i,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(function(e){function t(t,r){var i=e.call(this,r)||this;return i.userProperties=t,i}return r.__extends(t,e),t.prototype._headers=function(e){var t;return r.__assign((t={},t[i.ApiV2HeaderNames.DropboxUid]=String(this.userProperties.id),t[i.ApiV2HeaderNames.DropboxTeamId]=String(s.Viewer.get_viewer().team_id),t[i.ApiV2HeaderNames.DropboxTeamAuthorization]=JSON.stringify({auth_role:String(s.Viewer.get_viewer().auth_role),auth_action_type:String(s.Viewer.get_viewer().auth_action_type)}),t),e.headers)},t})(a.ApiV2ClientBase);t.DefaultTeamApiV2Client=n}),define("modules/clean/api_v2/default_user_client",["require","exports","tslib","modules/clean/api_v2/types","modules/clean/api_v2/client_base"],function(e,t,r,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(function(e){function t(t,r){var i=e.call(this,r)||this;return i.userProperties=t,i}return r.__extends(t,e),t.prototype._headers=function(e){var t;return r.__assign((t={},t[i.ApiV2HeaderNames.DropboxUid]=String(this.userProperties.id),t[i.ApiV2HeaderNames.DropboxPathRoot]=String(this.userProperties.root_ns_id),t),e.headers)},t})(a.ApiV2ClientBase);t.DefaultUserApiV2Client=s});
//# sourceMappingURL=pkg-api_v2-extra.min.js-vfl1xNEOD.map