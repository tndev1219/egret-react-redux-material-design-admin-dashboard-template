(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2233:function(e,a,t){"use strict";t.r(a);var m=t(30),r=t(35),c=t(39),n=t(38),s=t(40),l=t(1),i=t.n(l),o=t(1381),d=t(1380),u=t(1382),p=t(1330),E=t(1369),x=t(604),N=t(1378),g=t(64),h=t(0),f=t.n(h),v=t(120),C=function(e){function a(){var e,t;Object(m.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(n.a)(a)).call.apply(e,[this].concat(s)))).state={},t.getTotalCost=function(){var e=t.props.cartList,a=0;return(void 0===e?[]:e).map(function(e){a+=e.amount*e.price}),a},t.handleChange=function(e,a){var m=e.target.value,r=t.props;(0,r.updateCartAmount)(r.user.userId,a,Math.abs(m))},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.cartList,m=void 0===t?[]:t,r=a.user,c=a.deleteProductFromCart;return i.a.createElement(o.a,{elevation:3,className:"cart m-sm-30"},i.a.createElement("div",{className:"cart__topbar py-16 px-16"},i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,lg:3,md:3,sm:3,xs:3}),i.a.createElement(d.a,{item:!0,lg:4,md:4,sm:4,xs:4},i.a.createElement("h6",{className:"m-0"},"Name")),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"Price")),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"Quantity")),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"Total")))),i.a.createElement(u.a,null),m.map(function(a){return i.a.createElement("div",{key:a.id,className:"cart__item py-16 px-16"},i.a.createElement(d.a,{container:!0,alignItems:"center"},i.a.createElement(d.a,{item:!0,lg:3,md:3,sm:3,xs:3},i.a.createElement("div",{className:"flex flex-middle"},i.a.createElement(p.a,{size:"small",onClick:function(){return c(r.userId,a.id)}},i.a.createElement(E.a,{fontSize:"small"},"clear")),i.a.createElement("div",{className:"px-16"},i.a.createElement("img",{className:"border-radius-4",src:a.imgUrl,alt:a.title})))),i.a.createElement(d.a,{item:!0,lg:4,md:4,sm:4,xs:4},i.a.createElement("h6",{className:"m-0"},a.title),i.a.createElement("p",{className:"mt-8 m-0 text-muted"},a.description)),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"$",a.price)),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement(x.a,{variant:"outlined",name:"amount",type:"number",value:a.amount,onChange:function(t){return e.handleChange(t,a.id)},inputProps:{style:{padding:"10px",width:"70px"}}})),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"$",a.price*a.amount))))}),i.a.createElement("div",{className:"cart__bottom"},i.a.createElement(u.a,{className:"mb-48"}),i.a.createElement(d.a,{container:!0,className:"mb-48 px-16"},i.a.createElement(d.a,{item:!0,lg:3,md:3,sm:3,xs:3}),i.a.createElement(d.a,{item:!0,lg:4,md:4,sm:4,xs:4}),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0}),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"Total")),i.a.createElement(d.a,{item:!0,lg:!0,md:!0,sm:!0,xs:!0,className:"text-center"},i.a.createElement("h6",{className:"m-0"},"$",this.getTotalCost().toFixed(2)))),i.a.createElement("div",{className:"flex flex-middle mb-16 px-16"},i.a.createElement(x.a,{variant:"outlined",placeholder:"Discount Coupon",className:"flex-grow-1",inputProps:{style:{padding:"9px 10px"}}}),i.a.createElement(N.a,{className:"mx-12",variant:"contained",color:"secondary"},"Apply"),i.a.createElement(N.a,{variant:"contained",color:"primary",onClick:function(){return e.props.history.push("/ecommerce/checkout")}},"Checkout"))))}}]),a}(l.Component);a.default=Object(g.b)(function(e){return{getCartList:f.a.func.isRequired,deleteProductFromCart:f.a.func.isRequired,updateCartAmount:f.a.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}},{getCartList:v.l,deleteProductFromCart:v.j,updateCartAmount:v.p})(C)}}]);
//# sourceMappingURL=67.91d2e3bb.chunk.js.map