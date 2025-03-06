"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[29126],{16836:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator-guide/troubleshooting/container-registry-error","title":"Container Registry Error","description":"Troubleshooting steps for resolving connection issues with the container registry in KubeRocketCI, including credential updates through External Secret Operator and manual provisioning.","source":"@site/versioned_docs/version-3.9/operator-guide/troubleshooting/container-registry-error.md","sourceDirName":"operator-guide/troubleshooting","slug":"/operator-guide/troubleshooting/container-registry-error","permalink":"/docs/3.9/operator-guide/troubleshooting/container-registry-error","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/troubleshooting/container-registry-error.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Container Registry Error","description":"Troubleshooting steps for resolving connection issues with the container registry in KubeRocketCI, including credential updates through External Secret Operator and manual provisioning.","sidebar_label":"Container Registry Error"},"sidebar":"operatorGuideSidebar","previous":{"title":"Overview","permalink":"/docs/3.9/operator-guide/troubleshooting/overview"},"next":{"title":"Sync & Health Status","permalink":"/docs/3.9/operator-guide/troubleshooting/sync-health-status-unknown"}}');var i=n(74848),o=n(28453);const s={title:"Container Registry Error",description:"Troubleshooting steps for resolving connection issues with the container registry in KubeRocketCI, including credential updates through External Secret Operator and manual provisioning.",sidebar_label:"Container Registry Error"},a="Container Registry Error",l={},c=[{value:"Problem",id:"problem",level:2},{value:"Cause",id:"cause",level:2},{value:"Solution 1 (External Secret Operator)",id:"solution-1-external-secret-operator",level:2},{value:"Solution 2 (Manually Provisioned Credentials)",id:"solution-2-manually-provisioned-credentials",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"container-registry-error",children:"Container Registry Error"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/troubleshooting/container-registry-error"})}),"\n",(0,i.jsx)(r.h2,{id:"problem",children:"Problem"}),"\n",(0,i.jsx)(r.p,{children:"Failed to establish a connection with the container registry."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Container registry issue",src:n(90196).A+"",title:"Container registry issue",width:"1903",height:"1041"})}),"\n",(0,i.jsx)(r.h2,{id:"cause",children:"Cause"}),"\n",(0,i.jsx)(r.p,{children:"The user credentials are incorrect."}),"\n",(0,i.jsx)(r.h2,{id:"solution-1-external-secret-operator",children:"Solution 1 (External Secret Operator)"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Navigate to Cloud Provider's Management Console."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Navigate to ",(0,i.jsx)(r.code,{children:"AWS System Manager"})," -> ",(0,i.jsx)(r.code,{children:"Parameter Store"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Update the credentials for the container registry to ensure they are current and have the necessary permissions."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Wait for External Secret Operator Credential Update. Allow approximately 2 minutes for the External Secret Operator to detect and implement the credential changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"solution-2-manually-provisioned-credentials",children:"Solution 2 (Manually Provisioned Credentials)"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In the KubeRocketCI portal navigate ",(0,i.jsx)(r.strong,{children:"Configuration"})," -> ",(0,i.jsx)(r.strong,{children:"Artifacts Storage"})," -> ",(0,i.jsx)(r.strong,{children:"Registry"}),":"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Modify user credentials, including endpoint, user, or token, to ensure appropriate access rights."}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["For detailed instructions, visit the ",(0,i.jsx)(r.a,{href:"/docs/3.9/user-guide/manage-container-registries",children:"managing container registries."})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/3.9/user-guide/change-container-registry",children:"Change Container Registry"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},90196:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/registry_issue-331c33ce23fd6aee9719266a5e4657aa.png"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);