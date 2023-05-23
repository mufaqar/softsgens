import{r as l,j as o,am as re,ai as H,aQ as oe,an as ie,cu as ae,y as U,A as ce,I as ue,ay as le,t as v,P as de,cv as me,Q as pe,cw as fe,cx as he,cy as ye,aC as ge,b6 as Te,J as Y,k as w,ag as $,a9 as Ie,bD as Le,a7 as _,a6 as D,aj as Se,F as be,aY as Re,cz as Pe,ae as k,m as ve,v as Ce,x as _e,b0 as A,cA as Ee,cB as xe,cC as De,cD as je,aW as M,h as Fe,cE as we,cc as Ae,cd as Oe,a_ as $e,cF as ke,cG as Me,bH as N,bJ as Ne,cH as Be,by as We,b1 as qe,be as He,cI as Ue,cJ as Ye,cK as ze,bz as Ge}from"./desk-257f76bb-48440d02.js";import{useDeskTool as Ve,useDeskToolSetting as B,Delay as Ke}from"./index-9e58f0f1-892bf522.js";import{P as Qe}from"./PaneItem-baaea00f-de9beb07.js";import"./index-473283cc.js";const W=100,O=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},Xe={};function Je(e,s){return e._id?Y(e._id):"item-".concat(s)}function Ze(e){return De(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function ut(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:u,showIcons:y}=e,b=U(),{collapsed:S}=ge(),{collapsed:L,index:g}=Te(),[R,P]=l.useState(!1);l.useEffect(()=>{if(L)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=l.useCallback(d=>{const I=Y(d._id),m=s===I;return o(Qe,{icon:y===!1?!1:void 0,id:I,pressed:!c&&m,selected:c&&m,layout:f,schemaType:b.get(d._type),value:d})},[s,c,f,b,y]),p=l.useMemo(()=>{if(!R)return null;if(n)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:v(Ie,{paddingX:4,paddingY:5,space:4,children:[o(Le,{as:"h3",children:"Could not fetch list items"}),v(_,{as:"p",children:["Error: ",o("code",{children:n.message})]}),u&&o(D,{children:o(H,{icon:Se,onClick:u,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o(Ke,{ms:300,children:v(be,{children:[o(Re,{muted:!0}),o(D,{marginTop:3,children:o(_,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(w,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:o(D,{paddingX:4,paddingY:5,children:o(_,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===O;return v(D,{padding:2,children:[i.length>0&&o(Pe,{gap:1,getItemKey:Je,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(L)),r&&o(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(_,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(_,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",O," documents"]})})]})},[n,t,a,h,r,i,u,T,R,L,g]);return o(ve,{overflow:S?void 0:"auto",children:p})}const G=l.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=Ve(),h=l.useMemo(()=>({setLayout:u=>{let{layout:y}=u;c(y)},setSortOrder:u=>{r(u)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(H,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});G.displayName="DocumentListPaneHeader";const lt={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new je,t=n.next.bind(n);return e.pipe(M(r=>({client:r.client,query:r.query,params:r.params})),Fe(we),Ae(1),Oe()).pipe($e(r=>{const i=ke(r.client,r.query,r.params,s).pipe(M(dt),Me());return N(A({loading:!0}).pipe(Ne(400),Be(i)),i)})).pipe(We(lt),qe((r,i)=>He(A(mt(r)),N(Ue(window,"online"),n).pipe(Ye(1),ze(i)))),Ge((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=Ce(_e),[i,f]=l.useState(!1),h=l.useRef(i),[u,y]=l.useState(null),b=(u==null?void 0:u.error)||null,S=(u==null?void 0:u.loading)||u===null,L=u==null?void 0:u.onRetry,g=(s=u==null?void 0:u.result)==null?void 0:s.documents,R=l.useMemo(()=>g?Ze(g):null,[g]),P=l.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),m=(c==null?void 0:c.by)||[],C=i?O:W,E=m.length>0?m:z.by,x=st(E);if(p){const j=d.concat(p).join(",");return["*[".concat(t,"] {").concat(j,"}"),"order(".concat(x,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(t,"]|order(").concat(x,")[0...").concat(C,"]{").concat(I,"}")},[t,i,c]),T=l.useCallback(p=>{let{toIndex:d}=p;S||h.current||d>=W/2&&(f(!0),h.current=!0)},[S]);return l.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const I=pt(A({client:r,query:P,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>I.unsubscribe()},[n,r,i,P,a]),l.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:b,fullList:i,handleListChange:T,isLoading:S,items:R,onRetry:L}}const q=[];function ht(e){const s=l.useRef(e);return xe(s.current,e)||(s.current=e),s.current}const Lt=l.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=U(),{name:h}=ce(),{defaultLayout:u="default",displayOptions:y,initialValueTemplates:b=q,menuItems:S,menuItemGroups:L,options:g,title:R}=r,{apiVersion:P,defaultOrdering:T=q,filter:p}=g,d=ht(g.params||Xe),I=r.source,m=l.useMemo(()=>tt(p,d),[p,d]),C=(y==null?void 0:y.showIcons)!==!1,[E,x]=B(m,"layout",u),j=l.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:z,[T]),[F,V]=B(m,"sortOrder",j),K=m&&F?ot(F,f.get(m)):F,Q=ue(K),X=nt(p),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:Q,apiVersion:P});return o(le,{name:I||h,children:v(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(G,{index:t,initialValueTemplates:b,menuItems:S,menuItemGroups:L,setLayout:x,setSortOrder:V,title:R}),o(ut,{childItemId:n,error:J,filterIsSimpleTypeContraint:X,fullList:Z,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:C})]})})});export{Lt as default};
