(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,n){var a=n(1),l=n(169).default,s=n(158).default,r=(n(168).default,n(141).default),i=function(e){return a.createElement("div",e)};e.exports=function(e){e.scope;var t=e.location;return a.createElement(s,{location:t},a.createElement(l,{title:"theming"}),a.createElement("div",null,a.createElement("h1",null,"Theming"),a.createElement("p",null,"The included styles mimic the defaults of Twitter Bootstrap 3.0. ",a.createElement("strong",null,"This is less an actual theme and more a neutral starting point for creating your own theme.")," Less and Sass versions of the styles are included in the react-widgets package, and can be tweaked or replaced to suit your needs."),a.createElement("p",null,"Follow the conventions for overriding default variable values for either Less or Sass, depending on what you use. All are stored in a ",a.createElement("code",null,"variables")," file, see ",a.createElement("code",null,"./lib/","{","less,scss","}","/variables.","{","less,scss","}")," for reference. There are a ton of knobs to tweak!"),a.createElement("h3",null,"Font and Input sizes"),a.createElement("p",null,"Component sizing is done via ",a.createElement("code",null,"em")," units, and the base font-size is ",a.createElement("code",null,"1em")," enabling components to scale with the surrounding font-size. If you want to use a fixed size adjust the ",a.createElement("code",null,"font-size")," variable. Using the default values, inputs look best at ",a.createElement("code",null,"14px"),", but you can also tweak the input height for different root font-sizes."),a.createElement(r,null,a.createElement(i,{title:"Sass",lang:"scss"},"\n$font-size: 16px;\n$input-height: 2.5em; // at 16px, this an even 40px\n\n    @import '~react-widgets/lib/scss/react-widgets';\n    "),a.createElement(i,{title:"Less",lang:"less"},"\n    @import '~react-widgets/lib/less/react-widgets';\n\n    @font-size: 16px;\n    @input-height: 2.5em; // at 16px, this an even 40px\n    "))))}},140:function(e,t,n){var a=n(164),l=a.highlight,s=a.languages;n(163),n(162),n(161),n(160),n(175),n(174),n(173),e.exports=function(e,t){return void 0===t&&(t="jsx"),l(e,s[t]||s.text)}},141:function(e,t,n){"use strict";n.r(t);var a=n(120),l=n(1),s=n.n(l),r=n(177),i=n.n(r),o=n(176),c=n.n(o),u=n(140),d=n.n(u),p=0;t.default=function(e){var t=e.children;return s.a.createElement(i.a,{defaultActiveKey:0,id:"tab-code-block-"+p++},s.a.Children.map(t,function(e,t){var n,l=e.props;return s.a.createElement(c.a,{title:l.title,eventKey:t},s.a.createElement("pre",{className:"pg-code-section"},s.a.createElement("code",{dangerouslySetInnerHTML:{__html:d()(Object(a.a)([(n=l.children,n.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"))]),l.lang||"jsx")}})))}))}}}]);
//# sourceMappingURL=component---src-pages-theming-md-0f9c2d7acc44951683b6.js.map