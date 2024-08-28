"use strict";(self.webpackChunkifood_github_io=self.webpackChunkifood_github_io||[]).push([[576],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),i=a(4581),c=a(9960),m="sidebar_q+wC",s="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",h="sidebarItemLinkActive_wcJs",g=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:h},e.title))}))))}var v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,c=e.children,m=(0,r.Z)(e,v),s=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(7294),n=a(6010),l=a(3905),i=a(5999),c=a(9960),m=a(4996),s=a(2822),o=a(7440),u=a(6753),d="blogPostTitle_d4p0",h="blogPostData_-Im+",g="blogPostDetailsFull_xD8n",p=a(62),v="image_9q7L";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:v,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(c.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},f="authorCol_8c0z";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",f),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var Z=function(e){var t,a,v,E,f=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,m.C)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,T=e.metadata,y=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,w=T.date,I=T.formattedDate,x=T.permalink,C=T.tags,U=T.readingTime,R=T.title,B=T.editUrl,F=T.authors,O=null!=(t=k.image)?t:_.image,S=!L&&y,M=C.length>0;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=L?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},L?R:r.createElement(c.Z,{itemProp:"url",to:x},R)),r.createElement("div",{className:(0,n.Z)(h,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",f(U))),r.createElement(b,{authors:F,assets:k}))),O&&r.createElement("meta",{itemProp:"image",content:Z(O,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:o.Z},N)),(M||y)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[g]=L,a))},M&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":S})},r.createElement(p.Z,{tags:C})),L&&B&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:B})),S&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":M})},r.createElement(c.Z,{to:T.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(5999),l=a(7462),i=a(3366),c=a(6010),m="iconEdit_mS5F",s=["className"],o=function(e){var t=e.className,a=(0,i.Z)(e,s);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(2822);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(o,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return h}});var r=a(3366),n=a(7462),l=a(7294),i=a(6010),c=a(5999),m=a(2822),s="anchorWithStickyNavbar_y2LR",o="anchorWithHideOnScrollNavbar_3ly5",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},h=function(e){return"h1"===e?d:(t=e,function(e){var a,d=e.id,h=(0,r.Z)(e,u),g=(0,m.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,n.Z)({},h,{className:(0,i.Z)("anchor",(a={},a[o]=g,a[s]=!g,a)),id:d}),h.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,h)});var t}},7440:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7462),n=a(3366),l=a(7294),i=a(2859),c=a(9960),m=a(9055),s=a(9649),o=a(6010),u=a(2822),d="details_h+cY";function h(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",d,t.className)}))}var g=["mdxType","originalType"];var p={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,n.Z)(r,g));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(m.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(m.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(h,(0,r.Z)({},e,{summary:a}),n)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(9960),i="tag_WK-t",c="tagRegular_LXbV",m="tagWithCount_S5Zl";var s=function(e){var t,a=e.permalink,s=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[c]=!o,t[m]=o,t))},s,o&&r.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(5999),i=a(7774),c="tags_NBRY",m="tag_F03v";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);