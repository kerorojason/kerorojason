(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{527:function(e,t,a){"use strict";a.r(t);a(296);var n=a(0),r=a.n(n),l=a(111),c=a(523),i=a(543),o=a(544),s=a(524),d=a(545),u=a(528),m=(a(33),a(146),a(1)),p=a.n(m),h=a(10),b=a.n(h),v=a(11),f=a.n(v),E=a(12),g=a.n(E),O=a(13),j=a.n(O),N=a(14),k=a.n(N),C=a(4),y=a.n(C),x=a(2),A=a.n(x),I=a(113),P=a.n(I),T=a(9),w=a.n(T),L=a(5),G=a.n(L),z=(a(6),a(47)),K=a(192),V=a(193),W=a(3),D=a(264);function S(e){var t=e.children,a=e.className,n=e.content,l=G()(a,"description"),c=Object(K.a)(S,e),i=Object(V.a)(S,e);return r.a.createElement(i,p()({},c,{className:l}),W.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content"],S.propTypes={},S.create=Object(D.c)(S,(function(e){return{content:e}}));var H=S;function J(e){var t=e.children,a=e.className,n=e.content,l=G()("header",a),c=Object(K.a)(J,e),i=Object(V.a)(J,e);return r.a.createElement(i,p()({},c,{className:l}),W.a.isNil(t)?n:t)}J.handledProps=["as","children","className","content"],J.propTypes={},J.create=Object(D.c)(J,(function(e){return{content:e}}));var M=J;function R(e){var t=e.children,a=e.className,n=e.content,l=e.description,c=e.floated,i=e.header,o=e.verticalAlign,s=G()(Object(z.e)(c,"floated"),Object(z.f)(o),"content",a),d=Object(K.a)(R,e),u=Object(V.a)(R,e);return W.a.isNil(t)?r.a.createElement(u,p()({},d,{className:s}),M.create(i),H.create(l),n):r.a.createElement(u,p()({},d,{className:s}),t)}R.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],R.propTypes={},R.create=Object(D.c)(R,(function(e){return{content:e}}));var Q=R,q=a(104);function B(e){var t=e.className,a=e.verticalAlign,n=G()(Object(z.f)(a),t),l=Object(K.a)(B,e);return r.a.createElement(q.a,p()({},l,{className:n}))}B.handledProps=["className","verticalAlign"],B.propTypes={},B.create=Object(D.c)(B,(function(e){return{name:e}}));var F=B,U=a(201),X=a.n(U),Y=a(294),Z=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=g()(this,(e=j()(t)).call.apply(e,[this].concat(r))),A()(y()(y()(a)),"handleClick",(function(e){a.props.disabled||w()(a.props,"onClick",e,a.props)})),a}return k()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,a=e.active,l=e.children,c=e.className,i=e.content,o=e.description,s=e.disabled,d=e.header,u=e.icon,m=e.image,h=e.value,b=Object(V.a)(t,this.props),v=G()(Object(z.a)(a,"active"),Object(z.a)(s,"disabled"),Object(z.a)("li"!==b,"item"),c),f=Object(K.a)(t,this.props),E="li"===b?{value:h}:{"data-value":h};if(!W.a.isNil(l))return r.a.createElement(b,p()({},f,E,{role:"listitem",className:v,onClick:this.handleClick}),l);var g=F.create(u,{autoGenerateKey:!1}),O=Y.a.create(m,{autoGenerateKey:!1});if(!Object(n.isValidElement)(i)&&X()(i))return r.a.createElement(b,p()({},f,E,{role:"listitem",className:v,onClick:this.handleClick}),g||O,Q.create(i,{autoGenerateKey:!1,defaultProps:{header:d,description:o}}));var j=M.create(d,{autoGenerateKey:!1}),N=H.create(o,{autoGenerateKey:!1});return g||O?r.a.createElement(b,p()({},f,E,{role:"listitem",className:v,onClick:this.handleClick}),g||O,(i||j||N)&&r.a.createElement(Q,null,j,N,i)):r.a.createElement(b,p()({},f,E,{role:"listitem",className:v,onClick:this.handleClick}),j,N,i)}}]),t}(n.Component);A()(Z,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),Z.propTypes={},Z.create=Object(D.c)(Z,(function(e){return{content:e}}));var $=Z;function _(e){var t=e.children,a=e.className,n=e.content,l=Object(K.a)(_,e),c=Object(V.a)(_,e),i=G()(Object(z.a)("ul"!==c&&"ol"!==c,"list"),a);return r.a.createElement(c,p()({},l,{className:i}),W.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content"],_.propTypes={};var ee=_,te=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=g()(this,(e=j()(t)).call.apply(e,[this].concat(r))),A()(y()(y()(a)),"handleItemOverrides",(function(e){return{onClick:function(t,n){w()(e,"onClick",t,n),w()(a.props,"onItemClick",t,n)}}})),a}return k()(t,e),f()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,l=a.bulleted,c=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,h=a.inverted,b=a.items,v=a.link,f=a.ordered,E=a.relaxed,g=a.selection,O=a.size,j=a.verticalAlign,N=G()("ui",O,Object(z.a)(n,"animated"),Object(z.a)(l,"bulleted"),Object(z.a)(c,"celled"),Object(z.a)(d,"divided"),Object(z.a)(m,"horizontal"),Object(z.a)(h,"inverted"),Object(z.a)(v,"link"),Object(z.a)(f,"ordered"),Object(z.a)(g,"selection"),Object(z.b)(E,"relaxed"),Object(z.e)(u,"floated"),Object(z.f)(j),"list",o),k=Object(K.a)(t,this.props),C=Object(V.a)(t,this.props);return W.a.isNil(i)?W.a.isNil(s)?r.a.createElement(C,p()({},k,{role:"list",className:N}),P()(b,(function(t){return $.create(t,{overrideProps:e.handleItemOverrides})}))):r.a.createElement(C,p()({},k,{role:"list",className:N}),s):r.a.createElement(C,p()({},k,{role:"list",className:N}),i)}}]),t}(n.Component);A()(te,"Content",Q),A()(te,"Description",H),A()(te,"Header",M),A()(te,"Icon",F),A()(te,"Item",$),A()(te,"List",ee),A()(te,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]),te.propTypes={};var ae=te,ne=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(ae,null,e.tags.map((function(t){var a=t.fieldValue===e.tag,r=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(ae.Item,{as:"span",key:t.fieldValue},n.createElement(ae.Icon,{name:"tag",color:a?"blue":null}),n.createElement(ae.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:r},t.fieldValue," (",t.totalCount,")")))})))))},re=(a(22),a(7),a(48),a(112),a(144)),le=a(525),ce=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(re.a,{pagination:!0},Object(le.times)(e.pageCount,(function(a){var r=(a+1).toString(),l=e.pageCount<10?5:3,c=+r-l<+t&&+r+l>+t,i=+r===e.pageCount;return c||1==+r||i?n.createElement(re.a.Item,{key:r,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+r+"/",name:r,active:t===r}):+r==e.pageCount-1||2==+r?n.createElement(re.a.Item,{key:r,disabled:!0},"..."):null})))},ie=a(526);a.d(t,"pageQuery",(function(){return oe}));t.default=Object(ie.b)((function(e){var t=e.data.tags.group,a=e.data.posts.edges,r=e.location.pathname,m=Math.ceil(e.data.posts.totalCount/10),p=n.createElement(c.a,null,a.map((function(e){var t=e.node,a=t.frontmatter,r=t.timeToRead,c=t.fields.slug,s=t.excerpt,d=a.author.avatar.children[0],u=Object(le.get)(a,"image.children.0.fixed",{}),m=n.createElement(i.a.Group,null,n.createElement(i.a,null,n.createElement(i.a.Avatar,{src:d.fixed.src,srcSet:d.fixed.srcSet}),n.createElement(i.a.Content,null,n.createElement(i.a.Author,{style:{fontWeight:400}},a.author.id),n.createElement(i.a.Metadata,{style:{margin:0}},a.updatedDate," - ",r," min read")))),p=n.createElement(o.a.Description,null,s,n.createElement("br",null),n.createElement(l.Link,{to:c},"Read more…"));return n.createElement(o.a,{key:c,fluid:!0,image:u,header:a.title,extra:m,description:p})})));return n.createElement(c.a,null,n.createElement(u.a,null),n.createElement(s.a,{vertical:!0},n.createElement(d.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},p,n.createElement(s.a,{vertical:!0,textAlign:"center"},n.createElement(ce,{Link:l.Link,pathname:r,pageCount:m}))),n.createElement("div",null,n.createElement(ne,{Link:l.Link,tags:t,tag:e.pageContext.tag})))))}));var oe="30877247"}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-a3616382026c88974f91.js.map