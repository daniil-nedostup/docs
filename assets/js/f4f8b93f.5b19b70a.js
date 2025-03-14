"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[61239],{73101:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-guide/gitops","title":"Manage GitOps","description":"Explore the GitOps section in KubeRocketCI for automating infrastructure and application deployments with a Git repository-driven approach.","source":"@site/versioned_docs/version-3.9/user-guide/gitops.md","sourceDirName":"user-guide","slug":"/user-guide/gitops","permalink":"/docs/3.9/user-guide/gitops","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/gitops.md","tags":[],"version":"3.9","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741617610000,"frontMatter":{"title":"Manage GitOps","description":"Explore the GitOps section in KubeRocketCI for automating infrastructure and application deployments with a Git repository-driven approach.","sidebar_label":"Manage GitOps"},"sidebar":"userGuideSidebar","previous":{"title":"Manage Clusters","permalink":"/docs/3.9/user-guide/cluster"},"next":{"title":"Manage Container Registries","permalink":"/docs/3.9/user-guide/manage-container-registries"}}');var n=i(74848),o=i(28453);const r={title:"Manage GitOps",description:"Explore the GitOps section in KubeRocketCI for automating infrastructure and application deployments with a Git repository-driven approach.",sidebar_label:"Manage GitOps"},d="Manage GitOps",a={},l=[{value:"Overview",id:"overview",level:2},{value:"Add GitOps Repository",id:"add-gitops-repository",level:2},{value:"GitOps Usage",id:"gitops-usage",level:2},{value:"Delete GitOps Repository",id:"delete-gitops-repository",level:2},{value:"Related Articles",id:"related-articles",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"manage-gitops",children:"Manage GitOps"})}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/gitops"})}),"\n",(0,n.jsxs)(t.p,{children:["This page is dedicated to the ",(0,n.jsx)(t.code,{children:"GitOps"})," section of the ",(0,n.jsx)(t.code,{children:"Configuration"}),' tab, the process of establishing the GitOps repository, outline benefits it extends to users within the platform capabilities. GitOps, short for "Git Operations", is a modern approach to managing and automating infrastructure and application deployments. In GitOps, the desired state of your environment is declared and stored in a Git repository. With GitOps, you can ensure that your infrastructure and applications are always in sync with your intended configurations and readily adapt to changing requirements.']}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["The purpose of the ",(0,n.jsx)(t.code,{children:"GitOps"})," section is to provide users with the ability to customize the state of their environments with the help of GitOps approach that enables you to store your entire deployment configuration in a Git repository, providing version control for changes, consistent collaboration, and automated deployments. Enforcing GitOps allows you to declaratively define and automate your configurations, ensuring consistency, version control, and collaboration within your team."]}),"\n",(0,n.jsx)(t.h2,{id:"add-gitops-repository",children:"Add GitOps Repository"}),"\n",(0,n.jsx)(t.p,{children:"GitOps repository is added in two steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to ",(0,n.jsx)(t.strong,{children:"Configuration"})," -> ",(0,n.jsx)(t.strong,{children:"Deployment"}),"-> ",(0,n.jsx)(t.strong,{children:"GitOps"})," and click the ",(0,n.jsx)(t.strong,{children:"+ Add GitOps Repository"})," button:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Required fields",src:i(54187).A+"",title:"GitOps section",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Choose one of the Git servers, fill in the required fields and click ",(0,n.jsx)(t.strong,{children:"Save"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Required fields",src:i(91025).A+"",title:"GitOps menu",width:"3364",height:"1662"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check the GitOps repository connected to the platform:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"System Codebase",src:i(67931).A+"",title:"System Codebase",width:"3364",height:"1662"})}),"\n",(0,n.jsxs)(t.p,{children:["As the result, the ",(0,n.jsx)(t.code,{children:"Codebase"})," of ",(0,n.jsx)(t.code,{children:"system"})," type will be added to the Codebase list of the ",(0,n.jsx)(t.strong,{children:"Components"})," section:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GitOps Codebase",src:i(68973).A+"",title:"GitOps Codebase",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"The platform allows only one GitOps repository at a time."})}),"\n",(0,n.jsx)(t.h2,{id:"gitops-usage",children:"GitOps Usage"}),"\n",(0,n.jsx)(t.p,{children:"Once the GitOps repository is added to the platform, you can set custom parameters for the deployed Helm Chart. To redefine the parameters, follow the steps below:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Within the GitOps repository, follow the naming convention ",(0,n.jsx)(t.code,{children:"<pipeline-name>/<stage-name>/<application-name>-values.yaml"})," to create the chart values file, e.g. ",(0,n.jsx)(t.code,{children:"mypipe/dev/fastapi-demo-values.yaml"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the necessary custom values to the ",(0,n.jsx)(t.code,{children:"mypipe/dev/fastapi-demo-values.yaml"})," file, and then commit the file to the default branch of the GitOps repository."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"Environments"})," section. Open the created environment, open its stage and deploy it with the ",(0,n.jsx)(t.strong,{children:"Values override"})," checkbox selected as it is shown below:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GitOps Codebase",src:i(94630).A+"",title:"GitOps Codebase",width:"3364",height:"1662"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"delete-gitops-repository",children:"Delete GitOps Repository"}),"\n",(0,n.jsx)(t.p,{children:"In case you need to delete the GitOps repository, do the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Delete the GitOps repository in the Git provider."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Delete the Codebase custom resource using the ",(0,n.jsx)(t.code,{children:"kubectl delete"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl delete Codebase krci-gitops -n krci\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/3.9/user-guide/add-cd-pipeline",children:"Add CD Pipeline"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/3.9/operator-guide/add-ons-overview",children:"Cluster Add-Ons Overview"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/3.9/user-guide/cluster",children:"Manage Clusters"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},91025:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/gitops_menu-8d6e50a304f23c761c17fb73fe38b7a6.png"},67931:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/gitops_repo_added-4e9718eaa0b87dc16902a1d18d21dfef.png"},54187:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/gitops_section-7c53c6ef7e9f1abd2d64025aefba2046.png"},68973:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/system_codebase-bd638ef48ed8b78eb3e8c77929f1bd0e.png"},94630:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/values_override_deploy-7f8fb4b0b6238fca996bc8b887c6ea63.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);