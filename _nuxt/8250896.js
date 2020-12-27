(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,e,n){"use strict";(function(t){var o=n(97),r=n(60);function l(){var data=Object(o.a)(["\n  mutation OwnerLogin($email: String, $password: String, $deviceToken: String) {\n  OwnerLogin(email: $email, password: $password, deviceToken: $deviceToken) {\n    firstName\n    lastName\n    email\n    phoneNo\n    profilePic\n    isEmailVerified\n    isPhoneVerified\n    billingType\n    billingAddress\n    jwt\n    msg\n    code\n  }\n}\n"]);return l=function(){return data},data}var c=n.n(r)()(l());e.a={name:"LoginAccount",data:function(){return{dialog:!1,showPassword:!1,text:"",form:{email:"",password:"",deviceToken:""},emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>8||"Password length is too short. Minimum length is 8."}]}},methods:{requestLogin:function(){var e=this;this.form.email&&this.form.password?this.$apollo.mutate({mutation:c,variables:{email:this.form.email,password:this.form.password,deviceToken:this.deviceToken}}).then((function(n){if(console.log("res---\x3e",n),200===n.status){var o=n.body.admin;console.log("user",o),o.jwt=n.body.jwtToken,console.log("user",o),e.$cookies.set(t.env.VUE_APP_USER_COOKIE,o,9e5),e.$store.commit("SET_ADMIN_DATA",o),e.authenticateUser(),e.$toasted.show("Login Success",{type:"success",duration:2e3}),e.$router.push(e.$route.query.redirect||"/dashboard")}else console.log("Login failed. Username or Password does not match."),e.$toasted.show("Username or password does not matched",{type:"error",duration:4e3})})).catch((function(t){console.log("error",t)})):console.log("input all filed")}}}}).call(this,n(144))},206:function(t,e,n){"use strict";n.r(e);var o=n(217),r=n(209),l=n(210),c={name:"Navbar",components:{Features:o.default,CreateAccount:r.default,LoginAccount:l.default},data:function(){return{errorMessages:"",cart:2}}},d=n(26),v=n(21),m=n.n(v),f=n(457),h=n(455),_=n(116),w=n(450),x=n(203),C=n(151),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("v-toolbar",{staticClass:"px-16 ml-0",staticStyle:{"background-color":"#00bcd4"},attrs:{flat:""}},[n("v-toolbar-title",[n("h2",{staticClass:"white--text pl-3",staticStyle:{"font-weight":"bold"}},[t._v("Service\n          "),n("span",{staticClass:"yellow--text"},[t._v("Hub")])])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"yellow--text",attrs:{text:""}},[t._v("Introduction")]),t._v(" "),n("v-btn",{staticClass:"yellow--text",attrs:{text:""}},[t._v("Demo")]),t._v(" "),n("v-btn",{staticClass:"yellow--text",attrs:{text:""}},[t._v("Pricing")]),t._v(" "),n("v-btn",{staticClass:"yellow--text",attrs:{text:""}},[t._v("More")]),t._v(" "),n("v-btn",{staticClass:"yellow--text mr-3 ",attrs:{icon:"",to:""}},[n("v-icon",[t._v("mdi-cart")]),t._v(" "),n("v-badge",{attrs:{color:"yellow black--text",content:t.cart}})],1),t._v(" "),n("login-account")],1)],1)])}),[],!1,null,"7319ff9c",null);e.default=component.exports;m()(component,{LoginAccount:n(210).default}),m()(component,{VBadge:f.a,VBtn:h.a,VIcon:_.a,VSpacer:w.a,VToolbar:x.a,VToolbarTitle:C.a})},207:function(t,e,n){"use strict";n.r(e);var o={},r=(n(403),n(26)),l=n(21),c=n.n(l),d=n(455),v=n(446),m=n(451),f=n(116),h=n(117),_=n(54),w=n(449),x=n(450),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"cyan darken-4 pa-10 "},[n("v-row",{staticClass:" py-6",staticStyle:{"border-bottom":"1px solid white"}},[n("v-col",{attrs:{cols:"6"}},[n("h2",{staticClass:"text-center font-weight-bold white--text mt-1"},[t._v("About Us")]),t._v(" "),n("p",{staticClass:"text-justify white--text pt-10 px-7"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ")]),t._v(" "),n("div",{staticClass:"my-8",attrs:{align:"center"}},[n("v-btn",{staticClass:"white--text",attrs:{href:"https://www.facebook.com/consoleIt.io",target:"_blank",icon:""}},[n("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{staticClass:"mx-5 white--text",attrs:{href:"https://www.instagram.com/console.it/",target:"_blank",icon:""}},[n("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),n("v-btn",{staticClass:"mx-5 white--text",attrs:{href:"https://www.youtube.com/watch?v=4dFKEZ1Bp0A",target:"_blank",icon:""}},[n("v-icon",[t._v("mdi-youtube")])],1),t._v(" "),n("v-btn",{staticClass:"mx-5 white--text",attrs:{href:"",target:"",icon:""}},[n("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{href:"",target:"",icon:""}},[n("v-icon",[t._v("mdi-whatsapp")])],1)],1)]),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-list-item",[n("v-list-item-content",{staticClass:"white--text"},[n("v-list-item-title",[n("h2",{staticClass:"mb-8 ml-16"},[t._v("Explore")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("\n            Home")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("Why\n            Us")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("Our\n            Services")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("FAQ")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("Quick Access")])]),t._v(" "),n("v-list-item-title",[n("a",{staticClass:"ml-16 white--text text-decoration-none",staticStyle:{"line-height":"25px"},attrs:{href:""}},[t._v("Contact\n            Us")])])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-list-item",[n("v-list-item-content",{staticClass:"white--text"},[n("v-list-item-title",[n("h2",{staticClass:"mb-8"},[t._v("Quick Contact")])]),t._v(" "),n("v-list-item-title",{staticClass:"mb-3"},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-phone")]),t._v("\n            +8801879-149501\n          ")],1),t._v(" "),n("v-list-item-title",{staticClass:"mb-3"},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-message")]),t._v("\n            contact@consoleit.io\n          ")],1),t._v(" "),n("v-list-item-title",{staticClass:"mb-7"},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-message")]),t._v("\n            official@consoleit.io\n          ")],1),t._v(" "),n("v-list-item-title",[n("h3",{staticClass:"mb-4"},[t._v("Office Address")])]),t._v(" "),n("v-list-item-title",[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-map-marker")]),t._v("\n            3rd floor, Rongdhonu-15 "),n("br"),n("span",{staticClass:"ml-7"},[t._v("Chowkidekhi, Sylhet.")])],1)],1)],1)],1)],1),t._v(" "),n("span",{staticClass:"white--text mt-8"},[t._v("© "+t._s((new Date).getFullYear())+" "),n("a",{staticClass:"text-decoration-none",attrs:{id:"footer",href:"https://consoleit.io/#/",target:"_blank"}},[t._v("Console.IT")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"mr-8 mt-8"},[n("a",{attrs:{id:"footer"}},[t._v("Privacy Policy")]),t._v(" "),n("a",{staticClass:"mx-4",attrs:{id:"footer"}},[t._v("Terms & Conditions")])])],1)}),[],!1,null,"02980976",null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VFooter:m.a,VIcon:f.a,VListItem:h.a,VListItemContent:_.a,VListItemTitle:_.b,VRow:w.a,VSpacer:x.a})},208:function(t,e,n){"use strict";n.r(e);n(48);var o=n(97),r=n(60);function l(){var data=Object(o.a)(["\n    query getAllSingleService{\n        ALlSingleService{\n            serviceName\n            parentType\n            servicePrice\n        }\n    }"]);return l=function(){return data},data}var c={name:"pricingTable",apollo:{ALlSingleService:n.n(r)()(l())},computed:{priceOfBasic:function(){var t=0;return(new Array).map((function(e,n){n<=4&&(t+=e.servicePrice)})),t},priceMedium:function(){var t=0;return(new Array).map((function(e,n){n<=6&&(t+=e.servicePrice)})),t},pricePremium:function(){var t=0;return[].map((function(e,n){n<=6&&(t+=e.servicePrice)})),t},PRICE:function(){}}},d=n(26),v=n(21),m=n.n(v),f=n(455),h=n(116),_=n(445),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-16"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",{staticStyle:{background:"#00bcd4"}},[n("tr",[n("th",{staticClass:"text-left"},[n("h3",[t._v("Features")])]),t._v(" "),n("th",{staticClass:"text-center"},[n("h3",[t._v("Basic")]),t._v(" "),n("h1",[t._v("BDT. "+t._s(t.priceOfBasic))]),t._v(" "),n("span"),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"white"}},[t._v("Get started now")])],1),t._v(" "),n("th",{staticClass:"text-center"},[n("h3",[t._v("Advance")]),t._v(" "),n("h1",[t._v("BDT. "+t._s(t.priceMedium))]),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"white"}},[t._v("Get started now")])],1),t._v(" "),n("th",{staticClass:"text-center pa-5"},[n("h3",[t._v("Premium")]),t._v(" "),n("h1",[t._v("BDT. "+t._s(t.pricePremium))]),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"white"}},[t._v("Get started now")])],1)])]),t._v(" "),n("tbody",t._l(t.ALlSingleService,(function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(e.serviceName)+" "+t._s(e.servicePrice))]),t._v(" "),n("td",{attrs:{align:"center"}},[o<=4?n("v-icon",{attrs:{color:"green lighten-2"}},[t._v("mdi-check-circle")]):n("v-icon",{attrs:{small:""}},[t._v(" mdi-minus")])],1),t._v(" "),n("td",{attrs:{align:"center"}},[o<=6?n("v-icon",{attrs:{color:"green lighten-2"}},[t._v("mdi-check-circle")]):n("v-icon",{attrs:{small:""}},[t._v(" mdi-minus")])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-icon",{attrs:{color:"green lighten-2"}},[t._v("mdi-check-circle")])],1)])})),0)]},proxy:!0}])}),t._v(" "),n("P",[t._v(t._s(t.PRICE))])],1)}),[],!1,null,"1a68096b",null);e.default=component.exports;m()(component,{VBtn:f.a,VIcon:h.a,VSimpleTable:_.a})},209:function(t,e,n){"use strict";n.r(e);var o=n(97),r=n(268),l=n.n(r),c=(n(397),n(269)),d=n.n(c),v=n(270),m=n.n(v),f=n(60);function h(){var data=Object(o.a)(["\nmutation OwnerSignUp($payload: OwnerInput) {\nOwnerSignUp(payload: $payload) {\n    id\n    firstName\n    lastName\n    email\n    phoneNo\n    jwt\n    msg\n  }\n}\n"]);return h=function(){return data},data}var _=n.n(f)()(h()),w={components:{VuePhoneNumberInput:l.a},name:"CreateAccount",data:function(){return{showPassword:!1,showConfirmPassword:!1,dialog:!1,isLoading:!1,form:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phoneNo:""},firstNameRules:[function(t){return!!t||"First Name is required"},function(t){return t.length>=3||"Name must be greater than 3 characters"}],lastNameRules:[function(t){return!!t||"Last name is required"},function(t){return t.length>=2||"Last name must be greater than 2 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>8||"Password length is too short. Minimum length is 8."}],confirmPasswordRules:[function(t){return!!t||"Password is required"}]}},methods:{isInputValid:function(){return this.form.firstName?this.form.firstName.length<3?(console.log("First name is too short"),!1):this.form.lastName?this.form.lastName.length<2?(console.log("Last name is too short"),!1):this.form.phoneNo?d.a.validate(this.form.phoneNumber,{format:"(xxx) xxx-xxxx"}).isValidate?this.form.email?m.a.validate(this.form.email)?this.form.password?this.form.password.length<8?(console.log("Password length is too short. Minimum length is 8."),!1):this.form.confirmPassword?this.form.confirmPassword!==this.form.password?(console.log("Confirm password does not match with password."),!1):void 0:(console.log("Confirm password required."),!1):(console.log("Password required."),!1):(console.log("Invalid email"),!1):(console.log("Email required."),!1):(console.log("Invalid phone number"),!1):(console.log("Phone number is required"),!1):(console.log("Last name required"),!1):(console.log("First name required"),!1)},requestSignUp:function(){var t=this;this.isInputValid()&&(this.isLoading=!0,this.$apollo.mutate({mutation:_,variables:{payload:{firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,phoneNo:this.form.phoneNo,password:this.form.password}}}).then((function(e){console.log(e),201===e.status?console.log("Login Success",e.data):(t.isLoading=!1,console.log("Registered Failed"))})).catch((function(e){t.log=!1,console.log("admin register error",e),0===e.status?console.log("No Internet"):console.log("error",e.data.msg)})))}}},x=n(26),C=n(21),y=n.n(C),k=n(455),P=n(200),V=n(32),S=n(454),N=n(453),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"320px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"blue--text mt-8",attrs:{text:"",block:""}},"v-btn",r,!1),o),[t._v("\n        Create Account?\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"grey lighten-4 orange--text text-lighten-1"},[t._v("Create Account")]),t._v(" "),n("div",{staticClass:"pa-5"},[n("v-text-field",{staticClass:"pb-0 mb-0",attrs:{dense:"",color:"black",type:"text",label:"First Name",placeholder:"First Name",rules:t.firstNameRules,"prepend-inner-icon":"mdi-account",outlined:"",required:""},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}}),t._v(" "),n("v-text-field",{attrs:{dense:"",color:"black",type:"text",label:"Last Name",placeholder:"Last Name",rules:t.lastNameRules,"prepend-inner-icon":"mdi-account",outlined:"",required:""},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}}),t._v(" "),n("VuePhoneNumberInput",{staticClass:"rounded mb-6",attrs:{"default-country-code":"BD","no-validator-state":""},model:{value:t.form.phoneNo,callback:function(e){t.$set(t.form,"phoneNo",e)},expression:"form.phoneNo"}}),t._v(" "),n("v-text-field",{attrs:{dense:"",color:"black",type:"email",label:"Email",placeholder:"Email",rules:t.emailRules,"prepend-inner-icon":"mdi-email",outlined:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-text-field",{attrs:{dense:"",color:"black",type:t.showPassword?"text":"password",label:"Password",placeholder:"Password",rules:t.passwordRules,"prepend-inner-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",outlined:"",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("v-text-field",{attrs:{dense:"",color:"black",type:t.showConfirmPassword?"text":"password",label:"Confirm Password",placeholder:"Confirm Password",rules:t.confirmPasswordRules,"prepend-inner-icon":"mdi-lock","append-icon":t.showConfirmPassword?"mdi-eye":"mdi-eye-off",outlined:"",required:""},on:{"click:append":function(e){t.showConfirmPassword=!t.showConfirmPassword}},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}}),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto",on:{click:function(e){return t.requestSignUp()}}},[t._v("Create Account")])],1)],1)],1)],1)],1)}),[],!1,null,"4fb0b386",null);e.default=component.exports;y()(component,{VBtn:k.a,VCard:P.a,VCardActions:V.a,VCardTitle:V.d,VDialog:S.a,VTextField:N.a})},210:function(t,e,n){"use strict";n.r(e);var o=n(150).a,r=n(26),l=n(21),c=n.n(l),d=n(455),v=n(200),m=n(32),f=n(454),h=n(448),_=n(116),w=n(453),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"320"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"yellow--text mr-3",attrs:{text:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{small:""}},[t._v("mdi-user")]),t._v("\n        Log in\n      ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",{staticClass:"pa-5 pt-0"},[n("v-card-title",{staticClass:"subtitle-1 pl-2 mb-8",staticStyle:{"border-bottom":"1px solid #ccc"}},[t._v("\n        Login\n      ")]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{color:"black mt-5",type:"email",label:"Email",placeholder:"Email",rules:t.passwordRules,"prepend-inner-icon":"mdi-account-circle",outlined:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-text-field",{attrs:{color:"black",label:"Password",type:"password",type:t.showPassword?"text":"password",placeholder:"Password",rules:t.passwordRules,"prepend-inner-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",outlined:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("v-card-actions",{},[n("v-btn",{attrs:{color:"primary white--text ",small:""},on:{click:function(e){return t.requestLogin()}}},[t._v("\n            Login\n          ")]),t._v(" "),n("v-btn",{staticClass:"blue--text ml-12",attrs:{text:""}},[t._v("Forget password?")])],1),t._v(" "),n("span",[n("CreateAccount")],1)],1)],1)],1)],1)}),[],!1,null,"54044f2b",null);e.default=component.exports;c()(component,{CreateAccount:n(209).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.d,VDialog:f.a,VForm:h.a,VIcon:_.a,VTextField:w.a})},217:function(t,e,n){"use strict";n.r(e);var o={components:{pricingTable:n(208).default},name:"LandingPageGetService",data:function(){return{deleting:!0,hide:!0,drawer:!1,dialog:!1,notifications:!1,sound:!0,widgets:!1,item:1,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}],items2:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}],country:["Bangladesh","India","Nepal","Japan"]}}},r=(n(349),n(26)),l=n(21),c=n.n(l),d=n(455),v=n(200),m=n(32),f=n(446),h=n(454),_=n(447),w=n(448),x=n(116),C=n(163),y=n(202),k=n(117),P=n(54),V=n(456),S=n(449),N=n(450),T=n(453),L=n(203),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-16 grey lighten-4",attrs:{id:"Services"}},[t.drawer?n("v-navigation-drawer",{staticClass:"float-right",attrs:{sticky:"",permanent:"",width:"320px",height:"auto"},scopedSlots:t._u([{key:"prepend",fn:function(){},proxy:!0}],null,!1,1321973649)},[n("div",{staticClass:" ma-5"},[n("span",{staticClass:"body-1 font-weight-bold"},[t._v("Cart "),t.deleting?n("span",[t._v("(1)")]):t._e(),t.deleting?t._e():n("span",[t._v("(0)")])]),t._v(" "),n("v-btn",{staticClass:"float-right",staticStyle:{"margin-top":"-6px"},attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",{staticClass:"black--text"},[t._v("mdi-close")])],1)],1),t._v(" "),t._v(" "),n("v-divider",{staticClass:"mx-5"}),t._v(" "),n("div",{staticClass:"px-5 pt-5 pb-0"},[n("span",[t._v("Your Items")]),t._v(" "),n("span",{staticClass:"float-right",staticStyle:{"font-size":"13px"}},[t._v("Subtotals: "),t.deleting?n("span",[t._v("1000")]):t._e(),t.deleting?t._e():n("span",[t._v("0")]),t._v("$")])]),t._v(" "),t.deleting?n("v-card",{staticClass:"ma-5",staticStyle:{border:"1px solid #ddd"},attrs:{flat:""}},[n("v-card-title",[n("span",{staticClass:"subtitle-1 font-weight-bold"},[t._v(" Restaurant Service ")]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.deleting=!t.deleting}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1),t._v(" "),n("v-card-subtitle",[t._v(" service 1")]),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[t._v("Price: "),n("span",{staticClass:"float-right font-weight-bold"},[t._v("50$")])]),t._v(" "),n("v-card-text",[t._v("VAT: "),n("span",{staticClass:"float-right font-weight-bold"},[t._v("5$")])]),t._v(" "),n("v-card-text",{staticClass:"black--text"},[t._v("Total: "),n("span",{staticClass:"float-right font-weight-bold"},[t._v("55$")])])],1):t._e(),t._v(" "),t.deleting?t._e():n("p",{staticClass:"ma-5 text-center"},[t._v("There is no item in your cart")]),t._v(" "),n("div",{staticClass:"ma-5"},[n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[t.deleting?n("v-btn",t._g(t._b({staticClass:"a black white--text",attrs:{block:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-cart")]),t._v("\n                Checkout\n              ")],1):t._e()]}}],null,!1,2496651600),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",{staticStyle:{"background-color":"#00bcd4"}},[n("v-toolbar",{attrs:{dark:"",color:"",tile:""}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("h3",[t._v("Transactions")])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"pa-16"},[n("h2",{staticClass:"text-center mb-5 white--text"},[t._v("Service "),n("span",{staticClass:"yellow--text"},[t._v("Hub")])]),t._v(" "),n("v-img",{staticClass:"mx-auto mb-10",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/600px-Windows_Settings_app_icon.png",width:"150px",height:"150px"}}),t._v(" "),n("div",{staticClass:"text-center font-weight-bold",staticStyle:{"font-size":"16px"}},t._l(5,(function(e,o){return n("p",{key:e,staticClass:"target-justify white--text"},[t._v(t._s(o+1)+". Lorem Ipsum\n                      is\n                      simply dummy text of the printing and typesetting industry. ")])})),0)],1),t._v(" "),n("v-col",[n("v-form",{staticClass:"pa-16"},[n("v-text-field",{staticClass:"black--text",attrs:{label:"Transaction ID",outlined:""}}),t._v(" "),n("v-text-field",{staticClass:"black--text",attrs:{label:"Transaction Number",outlined:""}}),t._v(" "),n("v-btn",{staticClass:"black",attrs:{dark:""}},[n("NuxtLink",{attrs:{to:"/profile"}},[t._v(" Send")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-btn",{staticClass:"mt-3 black--text",attrs:{block:"",outlined:""},on:{click:function(e){t.drawer=!t.drawer}}},[t._v("Continue To Shopping")])],1)],1):t._e(),t._v(" "),n("h2",{staticClass:"display-3 text-center font-weight-bold",staticStyle:{color:"#00bcd4"}},[t._v("Pricing")]),t._v(" "),n("p",{staticClass:"mt-3 text-center",staticStyle:{"font-size":"18px"}},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting\n      industry.")]),t._v(" "),n("v-row",{staticClass:"mx-auto"},t._l(3,(function(e,o){return n("v-col",{key:e},[n("div",{staticClass:"container"},[n("div",{staticClass:"card mx-auto"},[n("div",{staticClass:"circle"},[n("h2",[t._v("0"+t._s(o+1))])]),t._v(" "),n("div",{staticClass:"content mx-auto"},[n("v-list",{staticClass:"list ",attrs:{dense:""}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{staticStyle:{"border-bottom":"1px solid #ddd"},domProps:{textContent:t._s(e.text)}})],1)],1)})),1),t._v(" "),n("v-btn",{staticClass:"a pb-7",on:{click:function(e){(t.drawer=!t.drawer)&&(t.deleting=!0)}}},[n("v-icon",[t._v("mdi-cart")]),t._v("\n                Add to Cart\n              ")],1)],1)])])])})),1),t._v(" "),n("pricing-table")],1)}),[],!1,null,"0cfdf213",null);e.default=component.exports;c()(component,{PricingTable:n(208).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VDialog:h.a,VDivider:_.a,VForm:w.a,VIcon:x.a,VImg:C.a,VList:y.a,VListItem:k.a,VListItemContent:P.a,VListItemTitle:P.b,VNavigationDrawer:V.a,VRow:S.a,VSpacer:N.a,VTextField:T.a,VToolbar:L.a})},250:function(t,e,n){var content=n(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7388ab72",content,!0,{sourceMap:!1})},258:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("622b8c57",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("b2d8fbbe",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";var o=n(206),r=n(207),l={name:"RestaurantLandingPage",components:{Navbar:o.default,PageFooter:r.default}},c=n(26),d=n(21),v=n.n(d),m=n(444),f=n(213),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("navbar"),this._v(" "),e("v-main",[e("nuxt")],1),this._v(" "),e("page-footer")],1)}),[],!1,null,"1c877f24",null);e.a=component.exports;v()(component,{Navbar:n(206).default,PageFooter:n(207).default}),v()(component,{VApp:m.a,VMain:f.a})},279:function(t,e,n){"use strict";var o={name:"PageProfile"},r=n(26),l=n(21),c=n.n(l),d=n(444),v=n(452),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("nuxt")],1)],1)}),[],!1,null,"0f07ec52",null);e.a=component.exports;c()(component,{VApp:d.a,VContent:v.a})},282:function(t,e,n){n(283),n(284),t.exports=n(285)},315:function(t,e,n){"use strict";n(250)},316:function(t,e,n){(e=n(10)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},349:function(t,e,n){"use strict";n(258)},350:function(t,e,n){(e=n(10)(!1)).push([t.i,".container .card[data-v-0cfdf213]{position:relative;width:300px;height:420px;background-color:#fff;border-radius:10px;overflow:hidden;box-shadow:0 15px 25px rgba(0,0,0,.2);transition:.5s}.container .card .circle[data-v-0cfdf213]{position:relative;width:100%;height:100%;background-color:#000;-webkit-clip-path:circle(180px at center 0);clip-path:circle(180px at center 0);text-align:center}.container .card .circle h2[data-v-0cfdf213]{color:#fff;font-size:4.5em;padding:30px 0}.container .card .content[data-v-0cfdf213]{position:absolute;bottom:10px;padding:20px;text-align:center}.container .card .content .list[data-v-0cfdf213]{color:#666;width:260px}.container .card .content .a[data-v-0cfdf213]{position:relative;display:inline-block;padding:10px 20px;background:#000;color:#fff;border-radius:40px;text-decoration:none;margin-top:20px}.container .card:first-child .circle[data-v-0cfdf213],.container .card:first-child .content .a[data-v-0cfdf213],.container .card:nth-child(2) .circle[data-v-0cfdf213],.container .card:nth-child(2) .content .a[data-v-0cfdf213],.container .card:nth-child(3) .circle[data-v-0cfdf213],.container .card:nth-child(3) .content .a[data-v-0cfdf213]{background-color:#00bcd4}",""]),t.exports=e},403:function(t,e,n){"use strict";n(262)},404:function(t,e,n){(e=n(10)(!1)).push([t.i,"#footer[data-v-02980976]{font-weight:lighter;color:#fff}#footer[data-v-02980976]:hover{text-decoration:underline}",""]),t.exports=e},409:function(t,e){},410:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o}));var o=function(){return{serial:"First",price:10}}},79:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(315),n(26)),l=n(21),c=n.n(l),d=n(444),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[282,4,1,5]]]);