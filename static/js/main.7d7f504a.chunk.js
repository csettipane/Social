(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{12:function(e,t,n){e.exports={post:"Post_post__k-M1c",header:"Post_header__3AX5r",user:"Post_user__2QsRD",content:"Post_content__37Op3",imgContainer:"Post_imgContainer__2pU2y",actions:"Post_actions__3NQsO",activity:"Post_activity__3NN-q",likes:"Post_likes__49vLf",time:"Post_time__M-QSi",comments:"Post_comments__2tLLM",addComment:"Post_addComment__3uswk"}},13:function(e,t,n){e.exports={header:"Profile_header__1714E",photo:"Profile_photo__Wnbjm",id:"Profile_id__2_pIX",user:"Profile_user__2VT9G",name:"Profile_name__2whgl",activity:"Profile_activity__iZABj",posts:"Profile_posts__u1_2F",followBtn:"Profile_followBtn__3y941",unfollowBtn:"Profile_unfollowBtn__1qmb7"}},15:function(e,t,n){e.exports={photo:"NewPost_photo__2oIUI",dropArea:"NewPost_dropArea__2L5wS",dragging:"NewPost_dragging__2FG7i",message:"NewPost_message__3pSJ4",image:"NewPost_image__3OeO2",desc:"NewPost_desc__3MQNB",actions:"NewPost_actions__mzfm8",error:"NewPost_error__2Y1jN"}},19:function(e,t,n){e.exports={navbar:"Navbar_navbar__2wlKY",navItem:"Navbar_navItem__2NzOj"}},22:function(e,t,n){e.exports={square:"PostThumbnail_square__12VQt",content:"PostThumbnail_content__OFWk7",image:"PostThumbnail_image__2kuQY"}},26:function(e,t,n){e.exports={container:"App_container__3CZYa",content:"App_content__2-hcV"}},31:function(e,t,n){e.exports={header:"Header_header__28L8Y"}},41:function(e,t,n){},42:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(30),o=n.n(a),r=(n(41),n(42),n(26)),i=n.n(r),l=n(31),d=n.n(l),j=n(1);var u=function(){return Object(j.jsxs)("header",{className:d.a.header,children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fcamera.svg?v=1614382899995",alt:"camera"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flogo.png?v=1614382900226",alt:"logo"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fmessage.svg?v=1614382900322",alt:"message"})})})]})},b=n(8),h=n(12),f=n.n(h),p=function(e){var t=Math.floor((new Date-new Date(e))/1e3),n=Math.floor(t/31556926);return n>=1?n+" years":(n=Math.floor(t/2592e3))>=1?n+" months":(n=Math.floor(t/86400))>=1?n+" days":(n=Math.floor(t/3600))>=1?n+" hours":(n=Math.floor(t/60))>=1?n+" minutes":Math.floor(t)+" seconds"};function m(e){return e.startsWith("/")?"/Social"+e:e}var O=n(7);var v=function(e){var t=Object(s.useState)(""),n=Object(b.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)(!1),r=Object(b.a)(o,2),i=r[0],l=r[1];return Object(j.jsxs)("article",{className:f.a.post,children:[Object(j.jsx)("header",{className:f.a.header,children:Object(j.jsxs)("button",{className:f.a.user,to:"/profile/".concat(e.user.id),children:[Object(j.jsx)("img",{src:m(e.user.photo),alt:"User Profile"}),Object(j.jsxs)("span",{children:[Object(j.jsx)(O.b,{to:"/profile/".concat(e.user.id),children:e.user.id},"/profile/".concat(e.user.id))," "]})]})}),Object(j.jsx)("section",{className:f.a.content,children:Object(j.jsx)("div",{className:f.a.imgContainer,children:Object(j.jsx)("img",{src:m(e.post.photo),alt:"Post"})})}),Object(j.jsxs)("section",{className:f.a.actions,children:[Object(j.jsx)("button",{children:e.likes.self?Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Funlike.svg?v=1614382900439",alt:"Unlike Action",onClick:function(){e.onUnlike(e.post.id)}}):Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flike.svg?v=1614382900207",alt:"Like Action",onClick:function(){e.onLike(e.post.id)}})}),Object(j.jsx)("button",{onClick:function(e){return l(!i)},children:Object(j.jsx)("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fcomment.svg?v=1614382900046",alt:"Comment Action"})})]}),Object(j.jsxs)("section",{className:f.a.activity,children:[Object(j.jsxs)("div",{className:f.a.likes,children:[e.likes.count," likes"]}),Object(j.jsxs)("div",{className:f.a.comments,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)(O.b,{to:"/profile/".concat(e.post.userId),children:e.post.userId},"/profile/".concat(e.post.userId))}),Object(j.jsx)("span",{children:e.post.desc})]}),e.comments.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)(O.b,{to:"/profile/".concat(e.userId),children:e.userId},"/profile/".concat(e.userId))}),Object(j.jsx)("span",{children:e.text})]},t)}))]}),Object(j.jsxs)("time",{className:f.a.time,children:[p(e.post.datetime).toUpperCase()," AGO"]}),i&&Object(j.jsxs)("form",{className:f.a.addComment,onSubmit:function(t){e.onComment(e.post.id,c),a(""),l(!1),t.preventDefault()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Post"})]})]})]})},x=n(5);n(48);var g=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),n=0;n<1e7&&!((new Date).getTime()-t>e);n++);}(1),e?e+t:t},_=n(21);n(50);_.a.initializeApp({apiKey:"AIzaSyDFRDgHXdGIuiUegOeNiBBDQM81e_PIqGo",authDomain:"socialapp-d7767.firebaseapp.com",projectId:"socialapp-d7767",storageBucket:"socialapp-d7767.appspot.com",messagingSenderId:"193443111563",appId:"1:193443111563:web:768c0121e797c9f38a2a8e"});var w=_.a.firestore(),I=_.a.auth();var N=Object(s.createContext)(),D=function(e){var t=Object(s.useState)(null),n=Object(b.a)(t,2),c=n[0],a=n[1],o=Object(s.useState)([]),r=Object(b.a)(o,2),i=r[0],l=r[1],d=Object(s.useState)([]),u=Object(b.a)(d,2),h=u[0],f=u[1],p=Object(s.useState)([]),m=Object(b.a)(p,2),O=m[0],v=m[1],_=Object(s.useState)([]),D=Object(b.a)(_,2),P=D[0],k=D[1],y=Object(s.useState)([]),C=Object(b.a)(y,2),S=C[0],L=C[1],A=Object(x.f)();return Object(s.useEffect)((function(){w.collection("users").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));l(t)})),w.collection("posts").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));f(t)})),w.collection("likes").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));v(t)})),w.collection("followers").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));k(t)})),w.collection("comments").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));L(t)}))}),[]),Object(j.jsx)(N.Provider,{value:{login:function(e,t){I.signInWithEmailAndPassword(e,t).then((function(e){w.collection("users").where("email","==",e.user.email).get().then((function(e){a(e.docs[0].data().id)})).catch((function(e){a(null)}))})),A.push("/")},posts:h,users:i,comments:S,likes:O,followers:P,addComment:function(e,t){var n={userId:c,postId:e,text:t,datetime:(new Date).toISOString()};L(S.concat(n)),w.collection("comments").add(n)},addLike:function(e){var t={userId:c,postId:e,datetime:(new Date).toISOString()};v(O.concat(t)),w.collection("likes").add(t)},removeLike:function(e){v(O.filter((function(t){return!(t.userId===c&&t.postId===e)}))),w.collection("likes").where("userId","==",c).where("postId","==",e).get().then((function(e){return e.forEach((function(e){return e.ref.delete()}))}))},addPost:function(e,t){var n={id:g("post"),userId:c,photo:e,desc:t,datetime:(new Date).toISOString()};f(h.concat(n)),w.collection("posts").add(n)},addFollower:function(e,t){var n={userId:e,followerId:t};k(P.concat(n)),w.collection("followers").add(n)},removeFollower:function(e,t){k(P.filter((function(n){return!(n.userId===e&&n.followerId===t)}))),w.collection("followers").where("userId","==",e).where("followerId","==",t).get().then((function(e){return e.forEach((function(e){return e.ref.delete()}))}))}},children:e.children})};var P=function(e){var t=Object(x.g)().postId,n=Object(s.useContext)(N),c=n.posts,a=n.users,o=n.comments,r=n.likes,i=n.currentUserId,l=n.addComment,d=n.addLike,u=n.removeLike;function b(e){return a.find((function(t){return t.id===e.userId}))}function h(e){return o.filter((function(t){return t.postId===e.id}))}function f(e){var t=r.filter((function(t){return t.postId===e.id}));return{self:t.some((function(e){return e.userId===i})),count:t.length}}return Object(j.jsx)("div",{children:c.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).filter((function(e){return void 0===t||e.id===t})).map((function(e){return Object(j.jsx)(v,{user:b(e),post:e,comments:h(e),likes:f(e),onComment:l,onLike:d,onUnlike:u},e.id)}))})};var k=function(){return Object(j.jsx)("h2",{children:"Explore"})},y=n(15),C=n.n(y),S=n(33),L=n(34),A=n(18),F=n(36),E=n(35),B=function(e){Object(F.a)(n,e);var t=Object(E.a)(n);function n(e){var s;return Object(S.a)(this,n),(s=t.call(this,e)).handleDragEnter=s.handleDragEnter.bind(Object(A.a)(s)),s.handleDrop=s.handleDrop.bind(Object(A.a)(s)),s.handleDragOver=s.handleDragOver.bind(Object(A.a)(s)),s.handleDragLeave=s.handleDragLeave.bind(Object(A.a)(s)),s}return Object(L.a)(n,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=c.a.Children.only(this.props.children);return c.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),n}(s.PureComponent);var T=function(e){var t=Object(s.useContext)(N).addPost,n=Object(s.useState)(!1),c=Object(b.a)(n,2),a=c[0],o=c[1],r=Object(s.useState)(""),i=Object(b.a)(r,2),l=i[0],d=i[1],u=Object(s.useState)(null),h=Object(b.a)(u,2),f=h[0],p=h[1],m=Object(s.useState)(""),O=Object(b.a)(m,2),v=O[0],g=O[1],_=Object(x.f)();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:C.a.photo,children:[f?Object(j.jsx)("img",{src:f,alt:"New Post"}):Object(j.jsx)("div",{className:C.a.message,children:"Drop your image"}),Object(j.jsx)(B,{onDragEnter:function(e){o(!0)},onDragLeave:function(e){o(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var n=new FileReader;n.onloadend=function(e){p(e.target.result)},n.readAsDataURL(t)}}o(!1)}},children:Object(j.jsx)("div",{className:[C.a.dropArea,a?C.a.dragging:null].join(" ")})})]}),Object(j.jsx)("div",{className:C.a.desc,children:Object(j.jsx)("textarea",{placeholder:"Describe...",rows:"2",value:l,onChange:function(e){d(e.target.desc)}})}),Object(j.jsx)("div",{className:C.a.error,children:v}),Object(j.jsxs)("div",{className:C.a.actions,children:[Object(j.jsx)("button",{onClick:function(){e.onPostCancel(),_.goBack()},children:"Cancel"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),null!==f?(t(f,l),g(""),_.push("/")):g("You need to add a photo!")},children:"Share"})]})]})};var M=function(){return Object(j.jsx)("h2",{children:"Activity"})},U=n(13),Q=n.n(U),q=n(22),W=n.n(q);var Y=function(e){return Object(j.jsx)("div",{className:W.a.square,children:Object(j.jsx)("div",{className:W.a.content,children:Object(j.jsx)("img",{className:W.a.image,src:m(e.post.photo),alt:"Post Thumbnail"})})})};var z=function(e){var t,n=Object(s.useContext)(N),c=n.posts,a=n.users,o=n.followers,r=n.currentUserId,i=n.addFollower,l=n.removeFollower,d=Object(x.g)(),u=void 0===d.userId?r:d.userId,b=a.find((function(e){return e.id===u})),h=c.filter((function(e){return e.userId===u})),f=o.filter((function(e){return e.userId===u})),p=o.filter((function(e){return e.followerId===u}));return t=void 0!==o.find((function(e){return e.userId===u&&e.followerId===r}))?Object(j.jsx)("button",{onClick:function(){l(u,r)},className:Q.a.unfollowBtn,children:"Unfollow"}):Object(j.jsx)("button",{onClick:function(){i(u,r)},className:Q.a.followBtn,children:"Follow"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:Q.a.header,children:[Object(j.jsx)("div",{className:Q.a.photo,children:Object(j.jsx)("img",{src:b.photo,alt:"Profile"})}),Object(j.jsx)("div",{className:Q.a.id,children:Object(j.jsx)("span",{children:u})}),Object(j.jsx)("div",{classname:Q.a.button,children:t})]}),Object(j.jsxs)("div",{className:Q.a.user,children:[Object(j.jsx)("div",{className:Q.a.name,children:b.name}),Object(j.jsx)("div",{className:Q.a.bio,children:b.bio})]}),Object(j.jsxs)("ul",{className:Q.a.activity,children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:h.length}),Object(j.jsx)("br",{}),"posts"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:f.length}),Object(j.jsx)("br",{}),"followers"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:p.length}),Object(j.jsx)("br",{}),"following"]})]}),Object(j.jsx)("div",{className:Q.a.posts,children:h.map((function(e){return Object(j.jsx)(O.b,{to:"/".concat(e.id),children:Object(j.jsx)(Y,{post:e})},e.id)}))})]})},G=n(19),R=n.n(G);var H=function(e){return Object(j.jsxs)("nav",{className:R.a.navbar,children:[Object(j.jsx)("div",{className:R.a.navItem,children:Object(j.jsx)(O.b,{to:"/",children:Object(j.jsx)("img",{src:m("/assets/home.svg"),alt:"Home"})})}),Object(j.jsx)("div",{className:R.a.navItem,children:Object(j.jsx)(O.b,{to:"/explore",children:Object(j.jsx)("img",{src:m("/assets/explore.svg"),alt:"Explore"})})}),Object(j.jsx)("div",{className:R.a.navItem,children:Object(j.jsx)(O.b,{to:"/newpost",children:Object(j.jsx)("img",{src:m("/assets/newpost.svg"),alt:"NewPost"})})}),Object(j.jsx)("div",{className:R.a.navItem,children:Object(j.jsx)(O.b,{to:"/activity",children:Object(j.jsx)("img",{src:m("/assets/activity.svg"),alt:"Activity"})})}),Object(j.jsx)("div",{className:R.a.navItem,children:Object(j.jsx)(O.b,{to:"/profile",children:Object(j.jsx)("img",{src:m("/assets/profile.svg"),alt:"Profile"})})})]})};var J=function(){return Object(j.jsx)(O.a,{basename:"/Social",children:Object(j.jsx)(D,{children:Object(j.jsx)("div",{className:i.a.container,children:Object(j.jsxs)("div",{className:i.a.content,children:[Object(j.jsx)(u,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/explore",children:Object(j.jsx)(k,{})}),Object(j.jsx)(x.a,{path:"/activity",children:Object(j.jsx)(M,{})}),Object(j.jsx)(x.a,{path:"/newpost",children:Object(j.jsx)(T,{})}),Object(j.jsx)(x.a,{path:"/profile/:userId?",children:Object(j.jsx)(z,{})}),Object(j.jsx)(x.a,{path:"/:postId?",children:Object(j.jsx)(P,{})})]}),Object(j.jsx)(H,{})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(j.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7d7f504a.chunk.js.map