"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[23934],{72337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"operator-guide/microsoft-entra/argo-cd-authentication","title":"Guide: Microsoft Entra SSO integration with Argo CD","description":"This guide provides instructions on how to configure OIDC authentication for the Argo CD using Microsoft Entra as the Identity Provider.","source":"@site/docs/operator-guide/microsoft-entra/argo-cd-authentication.md","sourceDirName":"operator-guide/microsoft-entra","slug":"/operator-guide/microsoft-entra/argo-cd-authentication","permalink":"/docs/next/operator-guide/microsoft-entra/argo-cd-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/microsoft-entra/argo-cd-authentication.md","tags":[],"version":"current","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1737662090000,"frontMatter":{"id":"argo-cd-authentication","sidebar_label":"Argo CD"},"sidebar":"operatorGuideSidebar","previous":{"title":"Microsoft Entra OIDC Authentication: Overview","permalink":"/docs/next/operator-guide/microsoft-entra/oidc-authentication-overview"},"next":{"title":"Ansible AWX","permalink":"/docs/next/operator-guide/microsoft-entra/awx-operator-authentication"}}');var r=t(74848),s=t(28453);const o={id:"argo-cd-authentication",sidebar_label:"Argo CD"},c="Guide: Microsoft Entra SSO integration with Argo CD",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Microsoft Entra Application",id:"configuring-microsoft-entra-application",level:2},{value:"Creating the Groups",id:"creating-the-groups",level:2},{value:"Configuring Argo CD Helm chart",id:"configuring-argo-cd-helm-chart",level:2},{value:"Related Articles",id:"related-articles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"guide-microsoft-entra-sso-integration-with-argo-cd",children:"Guide: Microsoft Entra SSO integration with Argo CD"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/microsoft-entra/argo-cd-authentication/"})}),"\n",(0,r.jsx)(n.p,{children:"This guide provides instructions on how to configure OIDC authentication for the Argo CD using Microsoft Entra as the Identity Provider."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access to the ",(0,r.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"Microsoft Entra Admin Center"})," with administrative privileges."]}),"\n",(0,r.jsx)(n.li,{children:"Created Microsoft Entra Tenant."}),"\n",(0,r.jsxs)(n.li,{children:["Installed Argo CD (can be installed during ",(0,r.jsx)(n.strong,{children:"Configuring Helm chart"})," step)."]}),"\n",(0,r.jsxs)(n.li,{children:["Fork copy of the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository."]}),"\n",(0,r.jsx)(n.li,{children:"(Optional) Installed External Secrets Operator."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-microsoft-entra-application",children:"Configuring Microsoft Entra Application"}),"\n",(0,r.jsx)(n.p,{children:"To configure Microsoft Entra as the Identity Provider for the Argo CD, it is necessary to create and configure an Application in the Microsoft Entra Admin Center."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log in to the ",(0,r.jsx)(n.a,{href:"https://entra.microsoft.com/?feature.msaljs=true#home",children:"Microsoft Entra Admin Center"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Microsoft Entra Admin Center",src:t(50698).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the left sidebar menu, select ",(0,r.jsx)(n.strong,{children:"Applications"})," and click ",(0,r.jsx)(n.strong,{children:"App registrations"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"App registrations",src:t(13699).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"New registration"})," button."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"New registration",src:t(87095).A+"",width:"3364",height:"1648"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(n.strong,{children:"Name"}),", ",(0,r.jsx)(n.strong,{children:"Supported account types"})," and ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," (You can skip setting the ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," if you don't deploy Argo CD yet). Click ",(0,r.jsx)(n.strong,{children:"Register"})," to create the application."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(n.code,{children:"https://<Argo CD URL>/auth/callback"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Register application",src:t(16221).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the created application, navigate to the ",(0,r.jsx)(n.strong,{children:"Authentication"})," section from the left sidebar menu. In the ",(0,r.jsx)(n.strong,{children:"Implicit grant and hybrid flows"})," section, select ",(0,r.jsx)(n.strong,{children:"ID tokens"})," for the token type. In the ",(0,r.jsx)(n.strong,{children:"Allow public client flows"})," section, set the value to ",(0,r.jsx)(n.strong,{children:"No"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Authentication settings",src:t(44844).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"Certificates & secrets"})," section. In the ",(0,r.jsx)(n.strong,{children:"Client secrets"})," tab, click on the ",(0,r.jsx)(n.strong,{children:"New client secret"})," button to create a new secret. Fill in the required fields and click ",(0,r.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client secrets",src:t(44153).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the generated client secret value and store it securely. You will need this value to configure the Argo CD Helm chart."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Client secret",src:t(29920).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"Token configuration"})," section and click on ",(0,r.jsx)(n.strong,{children:"Add group claim"})," button. Choose the group type as ",(0,r.jsx)(n.strong,{children:"Security Groups"})," and for the ID token type, select ",(0,r.jsx)(n.strong,{children:"Group ID"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Token configuration",src:t(7636).A+"",width:"3364",height:"1660"})}),"\n",(0,r.jsxs)(n.p,{children:["Also, add the ",(0,r.jsx)(n.strong,{children:"preferred_username"})," and ",(0,r.jsx)(n.strong,{children:"email"})," optional claims."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Token configuration",src:t(22081).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"API permissions"})," section. Click on the ",(0,r.jsx)(n.strong,{children:"Add a permission"})," button. Select ",(0,r.jsx)(n.strong,{children:"Microsoft Graph"})," and then ",(0,r.jsx)(n.strong,{children:"Delegated permissions"}),". Add the following permissions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"email"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"openid"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"profile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"User.Read"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"API permissions",src:t(78789).A+"",width:"3364",height:"1660"})}),"\n",(0,r.jsxs)(n.p,{children:["After adding the permissions, click on the ",(0,r.jsx)(n.strong,{children:"Grant admin consent for 'Tenant name'"})," button to grant the required permissions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-groups",children:"Creating the Groups"}),"\n",(0,r.jsx)(n.p,{children:"To manage access to the Argo CD, it is necessary to create groups in the Microsoft Entra Admin Center and assign users to them."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Microsoft Entra Admin Center, in the left sidebar menu, select ",(0,r.jsx)(n.strong,{children:"Groups"})," and then ",(0,r.jsx)(n.strong,{children:"All groups"}),". Click on ",(0,r.jsx)(n.strong,{children:"New group"})," button to create a new group(s) for users who will have access to Argo CD (e.g., ",(0,r.jsx)(n.code,{children:"ArgoCDAdmins"}),", ",(0,r.jsx)(n.code,{children:"ArgoCDReadOnly"}),", etc.)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"New group",src:t(85803).A+"",width:"3364",height:"1647"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill in the required fields, such as ",(0,r.jsx)(n.strong,{children:"Groups type"})," and ",(0,r.jsx)(n.strong,{children:"Group name"}),". In the ",(0,r.jsx)(n.strong,{children:"Members"})," section, add users who will be part of the group."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Create group",src:t(43245).A+"",width:"3364",height:"1658"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Create"})," button and repeat this process for each required group."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-argo-cd-helm-chart",children:"Configuring Argo CD Helm chart"}),"\n",(0,r.jsxs)(n.p,{children:["To integrate Argo CD with configured Microsoft Entra Application, it is necessary to configure the Argo CD Helm chart. In this example, we will use the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"edp-cluster-add-ons"})," repository to deploy Argo CD to the Kubernetes (e.g. AWS EKS) cluster."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Application data, such as ",(0,r.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,r.jsx)(n.strong,{children:"Directory (tenant) ID"}),", can be found in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of the Application in the Microsoft Entra Admin Center.\n",(0,r.jsx)(n.img,{alt:"Application data",src:t(78551).A+"",width:"1292",height:"583"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Object ID"})," can be found in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of the group in the Microsoft Entra Admin Center.\n",(0,r.jsx)(n.img,{alt:"Group Object ID",src:t(96401).A+"",width:"1348",height:"912"})]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the forked ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons repository"})," and locate the ",(0,r.jsx)(n.code,{children:"values.yaml"})," file in the ",(0,r.jsx)(n.code,{children:"argo-cd"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Update the ",(0,r.jsx)(n.code,{children:"values.yaml"})," file with the following values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="argo-cd/values.yaml"',children:'argo-cd:\n  configs:\n    cm:\n      url: "https://<Argo CD URL>"\n      application.instanceLabelKey: argocd.argoproj.io/instance-edp\n      exec.enabled: true\n      oidc.config: |\n        name: Entra\n        issuer: https://login.microsoftonline.com/<Directory (tenant) ID>/v2.0\n        clientID: <Application (client) ID>\n        clientSecret: $keycloak-client-argocd-secret:clientSecret\n        requestedIDTokenClaims:\n          groups:\n            essential: true\n            value: "SecurityGroup"\n        requestedScopes:\n          - openid\n          - profile\n          - email\n    rbac:\n      scopes: \'[groups, email]\'\n      policy.csv: |\n        # default global admins\n        g, "<Object ID of ArgoCDAdmins group>", role:admin\n        # Default global developers\n        g, "<Object ID of ArgoCDReadOnly group>", role:readonly\n'})}),"\n",(0,r.jsx)(n.p,{children:"Replace the following placeholders with the actual values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Argo CD URL>"})," - Endpoint of the Argo CD."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Directory (tenant) ID>"})," - Directory (tenant) ID of the Microsoft Entra Tenant."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Application (client) ID>"})," - Application (client) ID from the Microsoft Entra Application settings."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Object ID of ArgoCDAdmins group>"})," - Object ID of the ",(0,r.jsx)(n.strong,{children:"ArgoCDAdmins"})," group created in the Microsoft Entra Admin Center."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Object ID of ArgoCDReadOnly group>"})," - Object ID of the ",(0,r.jsx)(n.strong,{children:"ArgoCDReadOnly"})," group created in the Microsoft Entra Admin Center."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update or create the ",(0,r.jsx)(n.code,{children:"keycloak-client-argocd-secret"})," secret with the Application Client Secret value."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using External Secrets Operator"}),"\n",(0,r.jsxs)(n.p,{children:["Be sure to update the AWS Parameter Store object path specified in the ",(0,r.jsx)(n.code,{children:"argo-cd/values.yaml"})," file in the ",(0,r.jsx)(n.code,{children:"eso.secretName"})," field with the Application Client Secret value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="AWS Parameter Store object"',children:'{\n  "clientSecret": "<Application Client secret>"\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Manual approach"}),"\n",(0,r.jsxs)(n.p,{children:["Create the ",(0,r.jsx)(n.code,{children:"keycloak-client-argocd-secret"})," secret manually using the following template:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="keycloak-client-argocd-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: keycloak-client-argocd-secret\n  namespace: <namespace>\n  label:\n    app.kubernetes.io/part-of: argocd\ndata:\n  clientSecret: <Application Client secret>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After updating the ",(0,r.jsx)(n.code,{children:"values.yaml"})," file, commit the changes to the repository and apply the changes with Helm or Argo CD."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the Microsoft Entra Application and add the ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," in the ",(0,r.jsx)(n.strong,{children:"Authentication"})," section if you haven't done it before."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Redirect URI"})," should be in the format ",(0,r.jsx)(n.code,{children:"https://<Argo CD URL>/auth/callback"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Redirect URI",src:t(27853).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verify that the OIDC authentication is configured correctly by logging in to Argo CD using the ",(0,r.jsx)(n.strong,{children:"Log in via Entra"})," option."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Argo CD login",src:t(64177).A+"",width:"3364",height:"1660"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After completing these steps, the Argo CD will be configured to use Microsoft Entra as the Identity Provider for authentication. Users will be able to log in to the Argo CD using their Microsoft Entra credentials."}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/next/operator-guide/microsoft-entra/oidc-authentication-overview",children:"OpenID Connect Authentication Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},13699:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/app-registrations-85bb491010c97a96c465bae8c5f3d238.png"},78789:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-api-permissions-934112a65e8ea9a992af98dfac577f51.png"},78551:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-application-data-f236be82780f855dfe8c61ce99d7002c.png"},44844:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-authentication-settings-fee68f40b5fb93541ad4e66c04017a64.png"},29920:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-client-secret-a7f8c58be742ffaf93b206d6eba9e87f.png"},44153:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-client-secrets-45c997e779bef6a786c64a82e831ded3.png"},96401:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-group-object-id-0ee7d714f276c5557106d03483770a64.png"},64177:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-login-a171ea22c6f5daa9284a527cd7527fe2.png"},27853:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-redirect-uri-96fd4ef6dff46ea7487a65b8abacb9df.png"},22081:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-token-configuration-2-5cb169b526fb0dcdd567713f446b7859.png"},7636:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/argocd-token-configuration-9176f3be4388ca2970357ff4039cc6d0.png"},43245:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-group-9dbf252dc7cd4c8f3b75962d9c234114.png"},50698:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/microsoft-entra-admin-center-156ae7d9496f05355dce9a20eca80969.png"},85803:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/new-group-e01c9c34e53e303a3e24acfa7233005c.png"},87095:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/new-registration-47e751488bf7b3fc6c9c019c7e635ac8.png"},16221:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/register-application-abe176af450d421aa7dd9713dd3bf5cf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);