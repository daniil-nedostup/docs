"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[79647],{73550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"quick-start/integrate-argocd","title":"Integrate Argo CD","description":"Guide on integrating Argo CD with KubeRocketCI for Continuous Deployment, including installation steps, Argo CD configuration for GitHub access, and project setup.","source":"@site/versioned_docs/version-3.10/quick-start/integrate-argocd.md","sourceDirName":"quick-start","slug":"/quick-start/integrate-argocd","permalink":"/docs/quick-start/integrate-argocd","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/quick-start/integrate-argocd.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"Integrate Argo CD","description":"Guide on integrating Argo CD with KubeRocketCI for Continuous Deployment, including installation steps, Argo CD configuration for GitHub access, and project setup.","sidebar_label":"Integrate Argo CD"},"sidebar":"quickStartSidebar","previous":{"title":"Create Application","permalink":"/docs/quick-start/create-application"},"next":{"title":"Deploy Application","permalink":"/docs/quick-start/deploy-application"}}');var o=t(74848),a=t(28453);const i={title:"Integrate Argo CD",description:"Guide on integrating Argo CD with KubeRocketCI for Continuous Deployment, including installation steps, Argo CD configuration for GitHub access, and project setup.",sidebar_label:"Integrate Argo CD"},s="Integrate Argo CD",c={},l=[{value:"Installation",id:"installation",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:t,Head:r}=n;return t||u("Details",!0),r||u("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"integrate-argo-cd",children:"Integrate Argo CD"})}),"\n",(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/quick-start/integrate-argocd"})}),"\n",(0,o.jsx)(n.p,{children:"KubeRocketCI employs Argo CD as a Continuous Deployment tool for its purposes. This page provides guidance on the installation procedure for Argo CD."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"To install Argo CD, follow the steps below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a Helm Chart repository:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm repo add argocd https://argoproj.github.io/argo-helm\nhelm repo update\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create the ",(0,o.jsx)(n.code,{children:"argocd-values.yaml"})," file and paste the following data:"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"View: argocd-values.yaml"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"redis-ha:\n  enabled: false\nredis:\n  enabled: true\n\nserver:\n  replicas: 1\n  env:\n    - name: ARGOCD_API_SERVER_REPLICAS\n      value: '1'\n\n  ingress:\n    enabled: true\n    hosts:\n      # after domain creation update\n      - \"argocd-dev.example.com\"\n\n  # we use Keycloak so no DEX is required\ndex:\n  enabled: false\n\n  # Disabled for multitenancy env with single instance deployment\napplicationSet:\n  enabled: false\n\nconfigs:\n  secret:\n    # -- Create the argocd-secret\n    createSecret: true\n  cm:\n    application.instanceLabelKey: argocd.argoproj.io/instance-kuberocketci\n\n  params:\n    server.insecure: true\n    application.namespaces: >-\n      edp\n"})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Apply the argocd-values.yaml file using the ",(0,o.jsx)(n.code,{children:"helm install"})," command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install argo-cd argocd/argo-cd --values argocd-values.yaml --version 5.51.4 --create-namespace --atomic -n argocd\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"It may take a while for the Argo CD to be installed. The installation time depends on cluster capabilities."})}),"\n",(0,o.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.p,{children:"The next step is to integrate Argo CD with the platform. Proceed with the instructions below:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the directory that stores the ",(0,o.jsx)(n.code,{children:"ed25519"})," key created during the ",(0,o.jsx)(n.a,{href:"/docs/quick-start/integrate-github",children:"GitHub integration"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the SSH private key to the Argo CD namespace. Make sure to provide the appropriate value for the ",(0,o.jsx)(n.code,{children:"ACCOUNT_NAME"})," variable:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'EDP_NAMESPACE=edp\nVCS_HOST="github.com"\nACCOUNT_NAME="<github_account>"\nURL="ssh://git@${VCS_HOST}:22/${ACCOUNT_NAME}"\nkubectl create secret generic ${EDP_NAMESPACE} -n argocd \\\n--from-file=sshPrivateKey=ed25519 \\\n--from-literal=url="${URL}"\nkubectl label --overwrite secret ${EDP_NAMESPACE} -n argocd "argocd.argoproj.io/secret-type=repo-creds"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add GitHub host to the Argo CD config map with known hosts:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'VCS_HOST="github.com"\nKNOWN_HOSTS_FILE="/tmp/ssh_known_hosts"\nARGOCD_KNOWN_HOSTS_NAME="argocd-ssh-known-hosts-cm"\nrm -f ${KNOWN_HOSTS_FILE}\nkubectl get cm ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd -o jsonpath=\'{.data.ssh_known_hosts}\' > ${KNOWN_HOSTS_FILE}\nssh-keyscan ${VCS_HOST} >> ${KNOWN_HOSTS_FILE}\nkubectl create configmap ${ARGOCD_KNOWN_HOSTS_NAME} -n argocd --from-file ${KNOWN_HOSTS_FILE} -o yaml --dry-run=client | kubectl apply -f -\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create the argocd-project.yaml file, using, for example, the ",(0,o.jsx)(n.code,{children:"edp"})," name:"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"View: argocd-project.yaml"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"  apiVersion: argoproj.io/v1alpha1\n  kind: AppProject\n  metadata:\n    name: edp\n    namespace: argocd\n    # Finalizer that ensures that project is not deleted until it is not referenced by any application\n    finalizers:\n      - resources-finalizer.argocd.argoproj.io\n  spec:\n    description: CD pipelines for my application\n    roles:\n      - name: developer\n        description: Users for kuberocketci tenant\n        policies:\n          - p, proj:edp:developer, applications, create, edp/*, allow\n          - p, proj:edp:developer, applications, delete, edp/*, allow\n          - p, proj:edp:developer, applications, get, edp/*, allow\n          - p, proj:edp:developer, applications, override, edp/*, allow\n          - p, proj:edp:developer, applications, sync, edp/*, allow\n          - p, proj:edp:developer, applications, update, edp/*, allow\n          - p, proj:edp:developer, repositories, create, edp/*, allow\n          - p, proj:edp:developer, repositories, delete, edp/*, allow\n          - p, proj:edp:developer, repositories, update, edp/*, allow\n          - p, proj:edp:developer, repositories, get, edp/*, allow\n    destinations:\n      # ensure we can deploy to ns with tenant prefix\n      - namespace: 'edp-*'\n      # allow to deploy to specific server (local in our case)\n        server: https://kubernetes.default.svc\n    # Deny all cluster-scoped resources from being created, except for Namespace\n    clusterResourceWhitelist:\n    - group: ''\n      kind: Namespace\n    # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy\n    namespaceResourceBlacklist:\n    - group: ''\n      kind: ResourceQuota\n    - group: ''\n      kind: LimitRange\n    - group: ''\n      kind: NetworkPolicy\n    # we are ok to create any resources inside namespace\n    namespaceResourceWhitelist:\n    - group: '*'\n      kind: '*'\n    # enable access only for specific git server. The example below 'edp' - it is namespace where KubeRocketCI is deployed\n    sourceRepos:\n      - ssh://git@github.com:22/<github_account>/*\n    # enable capability to deploy objects from namespaces\n    sourceNamespaces:\n      - edp\n"})}),(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Please enter your GitHub account name at ",(0,o.jsx)(n.code,{children:"<github_account>"}),"."]})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Retrieve the Argo CD admin secret and securely save it, as it will be required for further steps:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now that all the necessary preparations are completed, we can proceed with the ",(0,o.jsx)(n.a,{href:"/docs/quick-start/deploy-application",children:"Application Deployment"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);