"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[75339],{65653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/artifacts-management/harbor-oidc","title":"Harbor OIDC Configuration","description":"Guidelines for configuring OIDC authorization with Harbor in KubeRocketCI, enabling Single Sign-On capabilities for enhanced security and user management.","source":"@site/docs/operator-guide/artifacts-management/harbor-oidc.md","sourceDirName":"operator-guide/artifacts-management","slug":"/operator-guide/artifacts-management/harbor-oidc","permalink":"/docs/next/operator-guide/artifacts-management/harbor-oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/artifacts-management/harbor-oidc.md","tags":[],"version":"current","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1741605107000,"frontMatter":{"title":"Harbor OIDC Configuration","description":"Guidelines for configuring OIDC authorization with Harbor in KubeRocketCI, enabling Single Sign-On capabilities for enhanced security and user management.","sidebar_label":"Harbor OIDC Configuration"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Harbor","permalink":"/docs/next/operator-guide/artifacts-management/harbor-installation"},"next":{"title":"Integrate Harbor With Tekton","permalink":"/docs/next/operator-guide/artifacts-management/harbor-integration"}}');var t=r(74848),o=r(28453);const a={title:"Harbor OIDC Configuration",description:"Guidelines for configuring OIDC authorization with Harbor in KubeRocketCI, enabling Single Sign-On capabilities for enhanced security and user management.",sidebar_label:"Harbor OIDC Configuration"},c="Harbor OIDC Configuration",s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Keycloak",id:"configure-keycloak",level:2},{value:"Configure Harbor",id:"configure-harbor",level:2},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"harbor-oidc-configuration",children:"Harbor OIDC Configuration"})}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/artifacts-management/harbor-oidc"})}),"\n",(0,t.jsxs)(n.p,{children:["This guide outlines the steps for integrating ",(0,t.jsx)(n.a,{href:"https://openid.net/connect/",children:"OIDC (OpenID Connect) authorization"})," with Harbor, facilitating Single Sign-On (SSO) capabilities. By adopting OIDC, Harbor gains a unified authentication mechanism, simplifying user access management and enhancing security. This approach centralizes user permissions and access control, streamlining administration through a singular configuration interface."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before the beginning, ensure your installation meets the following criteria:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/auth/keycloak",children:"Keycloak"})," is installed;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/install-kuberocketci",children:"KubeRocketCI"})," is installed."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-keycloak",children:"Configure Keycloak"}),"\n",(0,t.jsx)(n.p,{children:"This section details the procedure to configure Harbor with Keycloak for secure authentication using the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Generate the Keycloak Client Secret:"}),"\n",(0,t.jsxs)(n.p,{children:["Start by creating a secret named ",(0,t.jsx)(n.code,{children:"keycloak-client-harbor-secret"})," for Keycloak. This can be accomplished either through the commands provided below or by employing the External Secrets Operator. The secret acts as a secure token for establishing communication between Keycloak and Harbor."]}),"\n",(0,t.jsxs)(n.p,{children:["Generate the secret using OpenSSL and store it in a Kubernetes secret within the platform namespace (e.g, ",(0,t.jsx)(n.code,{children:"krci"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"KEYCLOAK_CLIENT_HARBOR_SECRET=$(openssl rand -base64 32 | head -c 32)\nkubectl -n krci create secret generic keycloak-client-harbor-secret \\\n    --from-literal=cookie-secret=${KEYCLOAK_CLIENT_HARBOR_SECRET}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy the KeycloakClient Custom Resource:"}),"\n",(0,t.jsxs)(n.p,{children:["Proceed to create the ",(0,t.jsx)(n.code,{children:"KeycloakClient"})," custom resource by applying the ",(0,t.jsx)(n.code,{children:"harborkeycloakclient.yaml"})," configuration in the appropriate namespace. This step involves utilizing the previously generated ",(0,t.jsx)(n.code,{children:"keycloak-client-harbor-secret"}),". Upon successful deployment, Keycloak will register Harbor as a client, with the Kubernetes secret serving as the client password."]}),"\n",(0,t.jsxs)(n.p,{children:["Apply the ",(0,t.jsx)(n.code,{children:"harborkeycloakclient.yaml"})," to establish the resource:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1.edp.epam.com/v1\nkind: KeycloakClient\nmetadata:\n  name: harbor\nspec:\n  advancedProtocolMappers: true\n  clientId: harbor\n  directAccess: true\n  public: false\n  secret: keycloak-client-harbor-secret\n  defaultClientScopes:\n    - profile\n    - email\n    - roles\n  targetRealm: control-plane\n  webUrl: <harbor_endpoint>\n  protocolMappers:\n    - name: roles\n      protocol: openid-connect\n      protocolMapper: oidc-usermodel-realm-role-mapper\n      config:\n        access.token.claim: true\n        claim.name: roles\n        id.token.claim: true\n        userinfo.token.claim: true\n        multivalued: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure to replace ",(0,t.jsx)(n.code,{children:"<harbor_endpoint>"})," with your actual Harbor URL. This configuration links Harbor to Keycloak, enabling OIDC-based Single Sign-On (SSO) for a streamlined authentication process."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-harbor",children:"Configure Harbor"}),"\n",(0,t.jsx)(n.p,{children:"The next stage is to configure Harbor. Proceed with following the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in to Harbor UI with an account that has Harbor system administrator privileges. To get the administrator password, execute the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get secret harbor -n harbor -o jsonpath='{.data.HARBOR_ADMIN_PASSWORD}' | base64 --decode\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Administration"})," -> ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Authentication"}),". Configure OIDC using the parameters below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"auth_mode: oidc_auth\noidc_name: keycloak\noidc_endpoint: <keycloak_endpoint>/auth/realms/control-plane\noidc_client_id: harbor\noidc_client_secret: <keycloak-client-harbor-secret>\noidc_groups_claim: roles\noidc_admin_group: administrator\noidc_scope: openid,email,profile,roles\nverify_certificate: true\noidc_auto_onboard: true\noidc_user_claim: preferred_username\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbor Authentication Configuration",src:r(15634).A+"",title:"Harbor Authentication Configuration",width:"945",height:"733"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As a result, users will be prompted to authenticate themselves when logging in to Harbor UI."}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/auth/configure-keycloak-oidc-eks",children:"EKS OIDC With Keycloak"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/next/operator-guide/artifacts-management/harbor-integration",children:"Integrate Harbor With KubeRocketCI Pipelines"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15634:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/oidc-harbor-cfg-ui-ba2afd2f4d61c7959b3dbe9753970bd2.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var i=r(96540);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);