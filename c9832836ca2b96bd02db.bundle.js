(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{556:function(e,n,a){e.exports={viewUser:"KDN1-cFBVBuXD4idSFYIv",viewUserImage:"_2dPsaYxnL5-ZOb1B9EanW1",viewUserInforTop:"fSa2Djjg2RNjpTUBjIZUW",viewUserInforCenter:"_3_-VvGM-aRp-3w96fUYWCI",viewUserInforCenterItem:"_16SHh2mMMGpdgqg0up-eUQ",viewUserInforBottom:"_2YN8St3XVwZtZrKaP-lOMg",viewUserModalMain:"_1YXs7tlYwQBiNng97vTJsH",viewUserModalButton:"_3MEaa-Zxi4lRBwZTHJHX3h",viewUserModalButtonConfig:"_12JH-J96SVSFis06UHPFoS",viewUserModalButtonConfigRed:"_2hs03HM8ag8JUnfMElLXEA"}},557:function(e,n,a){},608:function(e,n,a){e.exports={user:"y6M16sMaZMJm8t41tzJ4k"}},619:function(e,n,a){"use strict";a.r(n);var t=a(349),c=a.n(t),i=a(0),l=a.n(i),s=a(39),r=a(24),o=a(7),d=a(337),m=a(556),u=a.n(m),E=a(393),F=(a(557),l.a.memo((function(e){return console.log(e.loading,"asdassad"),l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:function(n){return(!1===e.loading||void 0===e.loading)&&(e.onClick?e.onClick(n):void 0)},className:"".concat(e.className," buttonComponent d-flex align-items-center justify-content-center ").concat("blue"===e.typeColor&&"buttonComponentBlue")},e.loading?l.a.createElement(E.a,null):e.text))}))),f=a(614),g=u.a.viewUser,v=u.a.viewUserImage,w=u.a.viewUserInfor,b=u.a.viewUserInforTop,C=u.a.viewUserInforCenter,U=u.a.viewUserInforBottom,p=u.a.viewUserInforCenterItem,N=u.a.viewUserModal,M=u.a.viewUserModalMain,B=u.a.viewUserModalButton,O=u.a.viewUserModalButtonConfig,k=u.a.viewUserModalButtonConfigRed,h=l.a.memo((function(e){var n=Object(d.a)("user",["detailUser","loadingBtn","showModalFriend"]),a=n.detailUser,t=n.loadingBtn,c=n.showModalFriend,s=Object(i.useCallback)((function(){e.addFriend(a._id)}),[a]),r=Object(i.useCallback)((function(){e.addFriendSuccess(a._id)}),[a]),o=Object(i.useCallback)((function(){e.closeFriend(a._id)}),[a]),m=Object(i.useCallback)((function(){e.modalFriend()}),[a]);return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("div",{className:"".concat(g)},l.a.createElement("div",{className:"".concat(v)},l.a.createElement("img",{src:a.image,alt:a.name})),l.a.createElement("div",{className:"".concat(w)},l.a.createElement("div",{className:"".concat(b," d-flex")},l.a.createElement("h6",null,a.name),!a.isFriend&&l.a.createElement(F,{text:"Kết bạn",typeColor:"blue",onClick:s,loading:t}),a.isFriend&&1===a.isFriend.status&&l.a.createElement(F,{text:"Bạn bè",onClick:m}),a.isFriend&&0===a.isFriend.status&&l.a.createElement(F,{text:"Chờ xác nhận",onClick:m})),l.a.createElement("div",{className:"".concat(C)},l.a.createElement("div",{className:"".concat(p)},l.a.createElement("strong",null,a.totalPost),l.a.createElement("span",null,"posts")),l.a.createElement("div",{className:"".concat(p)},l.a.createElement("strong",null,a.totalFriend),l.a.createElement("span",null,"friends"))),l.a.createElement("div",{className:"".concat(U)},l.a.createElement("span",null,a.description))),l.a.createElement(f.a,{title:"",visible:c,onCancel:function(){return e.modalFriend()},footer:null,className:"".concat(N)},l.a.createElement("div",{className:"".concat(M)},l.a.createElement("img",{src:a.image,alt:a.name}),a.isFriend&&1===a.isFriend.status&&l.a.createElement("h6",null,"Bạn và ",l.a.createElement("strong",null,a.name)," đang là bạn bè của nhau"),a.isFriend&&!a.isFriend.isOwner&&0===a.isFriend.status&&l.a.createElement("h6",null,"Yêu cầu kết bạn đang chờ ",l.a.createElement("strong",null,a.name)," xác nhận. Bạn có muốn hủy yêu cầu ?"),a.isFriend&&a.isFriend.isOwner&&0===a.isFriend.status&&l.a.createElement("h6",null,l.a.createElement("strong",null,a.name)," đang gửi yêu cầu kết bạn. Bạn có đồng ý?"),l.a.createElement("div",{className:"".concat(B)},a.isFriend&&1===a.isFriend.status&&l.a.createElement(F,{text:"Hủy bạn bè",onClick:o,loading:t,className:"".concat(O," ").concat(k)}),a.isFriend&&!a.isFriend.isOwner&&0===a.isFriend.status&&l.a.createElement(F,{text:"Hủy yêu cầu",onClick:o,loading:t,className:"".concat(O," ").concat(k)}),a.isFriend&&a.isFriend.isOwner&&0===a.isFriend.status&&l.a.createElement(F,{text:"Chấp nhận",onClick:r,loading:t,className:"".concat(O," ").concat(k)})),l.a.createElement("div",{className:"".concat(B)},a.isFriend&&(!a.isFriend.isOwner||1===a.isFriend.status)&&l.a.createElement(F,{text:"Đóng",onClick:function(){return e.modalFriend()},className:"".concat(O)}),a.isFriend&&a.isFriend.isOwner&&0===a.isFriend.status&&l.a.createElement(F,{text:"Hủy yêu cầu",onClick:o,loading:t,className:"".concat(O)}))))))})),j=l.a.memo((function(e){c()(e);var n=Object(o.f)().id,a=Object(s.b)();return Object(i.useEffect)((function(){a(Object(r.f)(n))}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{addFriend:function(e){a(Object(r.c)(e))},closeFriend:function(e){a(Object(r.e)(e))},modalFriend:function(){a(Object(r.b)())},addFriendSuccess:function(e){a(Object(r.d)(e))}}))})),x=a(608),I=a.n(x).a.user;n.default=function(e){return c()(e),l.a.createElement("section",{className:"".concat(I)},l.a.createElement(j,null))}}}]);