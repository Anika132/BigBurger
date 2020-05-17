(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(104),l=a.n(i);t.a=function(e){var t=[l.a.InputElement],a=null;switch(e.invalid&&e.shouldValidate&&e.isTouched&&t.push(l.a.Invalid),e.elementType){case"input":a=r.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":a=r.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":a=r.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:a=r.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.Label},e.label),a)}},104:function(e,t,a){e.exports={Input:"Input_Input_s67N0",Label:"Input_Label__n-1m",InputElement:"Input_InputElement_2-aFx",Invalid:"Input_Invalid_1sl1p"}},105:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary_1xBm4",BurgerCont:"CheckoutSummary_BurgerCont_30b-m"}},106:function(e,t,a){e.exports={ContactData:"ContactData_ContactData_1J81r",Input:"ContactData_Input_19h-A"}},110:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),i=a(7),l=a(6),o=a(8),u=a(0),c=a.n(u),s=a(2),d=a(15),m=a(57),p=a(34),h=a(105),v=a.n(h),g=function(e){return c.a.createElement("div",{className:v.a.CheckoutSummary},c.a.createElement("h1",null,c.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude0b"),"\xa0We hope it tastes well !!\xa0",c.a.createElement("span",{role:"img","aria-label":""},"\ud83d\ude0b")),c.a.createElement("div",{className:v.a.BurgerCont},c.a.createElement(m.a,{ingredients:e.ingredients,belongToCheckoutSummary:!0})),c.a.createElement(p.a,{btnType:"Danger",clicked:e.onCheckoutCancelled},"CANCEL"),c.a.createElement(p.a,{btnType:"Success",clicked:e.onCheckoutContinued},"CONTINUE"))},f=a(27),C=a(44),y=a(106),b=a.n(y),E=a(19),k=a(45),j=a(103),O=a(16),I=a(12),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Enter your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Enter your Street Address"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Enter your zipCode"},value:"",validation:{required:!0,minlength:5,maxlength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Enter your Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Enter your emailid"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,touched:!1}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(I.a)(a.state.orderForm[t],{value:e.target.value,valid:a.checkValidity(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(I.a)(a.state.orderForm,Object(f.a)({},t,n)),i=!0;for(var l in r)i=r[l].valid&&i;a.setState({orderForm:r,formIsValid:i})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if(this.props.email){var e=Object(I.a)(this.state.orderForm.email,{value:this.props.email,touched:!0,valid:!0}),t=Object(I.a)(this.state.orderForm,Object(f.a)({},"email",e)),a=!0;a=t.email.valid&&a,this.setState({orderForm:t,formIsValid:a})}}},{key:"checkValidity",value:function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minlength&&(a=e.length>=t.minlength&&a),t.maxlength&&(a=e.length<=t.minlength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return c.a.createElement(j.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,isTouched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),c.a.createElement(p.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(n=c.a.createElement(C.a,null)),c.a.createElement("div",{className:b.a.ContactData},c.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(u.Component),N=Object(d.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId,email:e.auth.email}},function(e){return{onOrderBurger:function(t,a){return e(O.g(t,a))}}})(Object(k.a)(_,E.a)),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=c.a.createElement(s.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(s.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(g,{ingredients:this.props.ings,onCheckoutCancelled:this.checkoutCancelledHandler,onCheckoutContinued:this.checkoutContinuedHandler}),c.a.createElement(s.b,{path:this.props.match.path+"/contact-data",component:N}))}return e}}]),t}(u.Component);t.default=Object(d.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(T)}}]);
//# sourceMappingURL=3.92c4d580.chunk.js.map