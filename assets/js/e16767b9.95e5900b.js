"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[17430],{66199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"operator-guide/devsecops/defectdojo","title":"Integrate DefectDojo","description":"Inspect the main steps to perform for installing DefectDojo via Helm Chart.","source":"@site/versioned_docs/version-3.9/operator-guide/devsecops/defectdojo.md","sourceDirName":"operator-guide/devsecops","slug":"/operator-guide/devsecops/defectdojo","permalink":"/docs/3.9/operator-guide/devsecops/defectdojo","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/devsecops/defectdojo.md","tags":[],"version":"3.9","lastUpdatedBy":"oleksandr_taruraiev","lastUpdatedAt":1738683460000,"frontMatter":{},"sidebar":"operatorGuideSidebar","previous":{"title":"Integrate DependencyTrack","permalink":"/docs/3.9/operator-guide/devsecops/dependency-track"},"next":{"title":"Install Grafana Loki","permalink":"/docs/3.9/operator-guide/monitoring-and-observability/install-loki"}}');var r=t(74848),o=t(28453),a=t(65537),l=t(79329);const i={},c="Integrate DefectDojo",d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Installation DefectDojo Cluster Add-On Approach",id:"installation-defectdojo-cluster-add-on-approach",level:2},{value:"Installation DefectDojo Helm Chart Approach",id:"installation-defectdojo-helm-chart-approach",level:2},{value:"Configuration DefectDojo ci-user",id:"configuration-defectdojo-ci-user",level:2},{value:"Integration DefectDojo with KubeRocketCI",id:"integration-defectdojo-with-kuberocketci",level:2},{value:"Related Articles",id:"related-articles",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s,Head:i}=n;return s||j("Details",!0),i||j("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"integrate-defectdojo",children:"Integrate DefectDojo"})}),"\n",(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/devsecops/defectdojo/"})}),"\n",(0,r.jsx)(n.p,{children:"Inspect the main steps to perform for installing DefectDojo via Helm Chart."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["It is also possible to install DefectDojo using the add-ons approach. For details, please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"KubeRocketCI addons approach"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Kubectl version 1.26.0+ is installed. Please refer to the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/releases/download/",children:"Kubernetes official website"})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://helm.sh",children:"Helm"})," version 3.14.0+ is installed. Please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/helm/helm/releases",children:"Helm page"})," on GitHub for details."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/DefectDojo/django-DefectDojo/tree/master/helm/defectdojo",children:"DefectDojo Helm Chart"}),"\nand ",(0,r.jsx)(n.a,{href:"https://github.com/DefectDojo/django-DefectDojo/blob/dev/readme-docs/KUBERNETES.md",children:"Deploy DefectDojo into the Kubernetes cluster"})," sections for details."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation-defectdojo-cluster-add-on-approach",children:"Installation DefectDojo Cluster Add-On Approach"}),"\n",(0,r.jsxs)(n.p,{children:["To install DefectDojo in environment, it's recommended to use the resources provided in the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"Cluster Add-Ons"})," repository. Leveraging the Cluster Add-Ons simplifies the deployment and management process, providing a streamlined method to integrate DefectDojo into infrastructure."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to the forked cluster Add-Ons repository and align the ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/defectdojo/values.yaml",children:"defectdojo values.yaml"})," file. Follow the instructions to deploy DefectDojo."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update the configuration to enable ",(0,r.jsx)(n.strong,{children:"DefectDojo"})," in ",(0,r.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml",children:"Add-Ons"})," repository:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="clusters/core/apps/values.yaml"',children:"defectdojo:\n  createNamespace: true\n  enable: true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Sync resources and wait till the all ",(0,r.jsx)(n.strong,{children:"DefectDojo"})," resources is created:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DefectDojo ArgoCD applications",src:t(34126).A+"",title:"DefectDojo ArgoCD applications",width:"1852",height:"1209"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-defectdojo-helm-chart-approach",children:"Installation DefectDojo Helm Chart Approach"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check that a security namespace is created. If not, run the following command to create it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create namespace defectdojo\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"For the OpenShift users",type:"warning",children:[(0,r.jsxs)(n.p,{children:["When using the OpenShift platform, install the ",(0,r.jsx)(n.code,{children:"SecurityContextConstraints"})," resource. In case of using a custom namespace for ",(0,r.jsx)(n.code,{children:"defectdojo"}),", change the namespace in the ",(0,r.jsx)(n.code,{children:"users"})," section."]}),(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"View: defectdojo-scc.yaml"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'allowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: true\nallowPrivilegedContainer: false\nallowedCapabilities: null\napiVersion: security.openshift.io/v1\nallowedFlexVolumes: []\ndefaultAddCapabilities: []\nfsGroup:\n  type: MustRunAs\n  ranges:\n    - min: 999\n      max: 65543\ngroups: []\nkind: SecurityContextConstraints\nmetadata:\n  annotations:\n      "helm.sh/hook": "pre-install"\n  name: defectdojo\npriority: 1\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n- KILL\n- MKNOD\n- SETUID\n- SETGID\nrunAsUser:\n  type: MustRunAsRange\n  uidRangeMin: 1\n  uidRangeMax: 65543\nseLinuxContext:\n  type: MustRunAs\nsupplementalGroups:\n  type: RunAsAny\nusers:\n- system:serviceaccount:defectdojo:defectdojo\n- system:serviceaccount:defectdojo:defectdojo-rabbitmq\n- system:serviceaccount:defectdojo:default\nvolumes:\n- configMap\n- downwardAPI\n- emptyDir\n- persistentVolumeClaim\n- projected\n- secret\n'})})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a chart repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm repo add defectdojo 'https://raw.githubusercontent.com/DefectDojo/django-DefectDojo/helm-charts'\nhelm repo update\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create PostgreSQL admin secret:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl -n defectdojo create secret generic defectdojo-postgresql-specific \\\n--from-literal=postgresql-password=<postgresql_password> \\\n--from-literal=postgresql-postgres-password=<postgresql_postgres_password>\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"postgresql_password"})," and ",(0,r.jsx)(n.code,{children:"postgresql_postgres_password"})," passwords must be 16 characters long."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create Rabbitmq admin secret:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl -n defectdojo create secret generic defectdojo-rabbitmq-specific \\\n--from-literal=rabbitmq-password=<rabbitmq_password> \\\n--from-literal=rabbitmq-erlang-cookie=<rabbitmq_erlang_cookie>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"rabbitmq_password"})," password must be 10 characters long."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"rabbitmq_erlang_cookie"})," password must be 32 characters long."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create DefectDojo admin secret:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl -n defectdojo create secret generic defectdojo \\\n--from-literal=DD_ADMIN_PASSWORD=<dd_admin_password> \\\n--from-literal=DD_SECRET_KEY=<dd_secret_key> \\\n--from-literal=DD_CREDENTIAL_AES_256_KEY=<dd_credential_aes_256_key> \\\n--from-literal=METRICS_HTTP_AUTH_PASSWORD=<metric_http_auth_password>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"dd_admin_password"})," password must be 22 characters long."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"dd_secret_key"})," password must be 128 characters long."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"dd_credential_aes_256_key"})," password must be 128 characters long."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"metric_http_auth_password"})," password must be 32 characters long."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install DefectDojo v.2.22.4 using ",(0,r.jsx)(n.a,{href:"https://github.com/DefectDojo/django-DefectDojo/tree/master/helm/defectdojo",children:"defectdojo/defectdojo"})," Helm chart v.1.6.69:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install \\\ndefectdojo \\\n--version 1.6.69 \\\ndefectdojo/defectdojo \\\n--namespace defectdojo \\\n--values values.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Check out the ",(0,r.jsx)(n.em,{children:"values.yaml"})," file sample of the DefectDojo customization:"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"View: values.yaml"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"tag: 2.22.4\nfullnameOverride: defectdojo\nhost: defectdojo.<ROOT_DOMAIN>\nsite_url: https://defectdojo.<ROOT_DOMAIN>\nalternativeHosts:\n  - defectdojo-django.defectdojo\n\ninitializer:\n  # should be false after initial installation was performed\n  run: true\ndjango:\n  ingress:\n    enabled: true # change to 'false' for OpenShift\n    activateTLS: false\n  uwsgi:\n    livenessProbe:\n      # Enable liveness checks on uwsgi container. Those values are use on nginx readiness checks as well.\n      # default value is 120, so in our case 20 is just fine\n      initialDelaySeconds: 20\n"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For the OpenShift platform, install a Route:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"View: defectdojo-route.yaml"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kind: Route\napiVersion: route.openshift.io/v1\nmetadata:\n  name: defectdojo\n  namespace: defectdojo\nspec:\n  host: defectdojo.<ROOT_DOMAIN>\n  path: /\n  tls:\n    insecureEdgeTerminationPolicy: Redirect\n    termination: edge\n  to:\n    kind: Service\n    name: defectdojo-django\n  port:\n    targetPort: http\n  wildcardPolicy: None\n\n"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-defectdojo-ci-user",children:"Configuration DefectDojo ci-user"}),"\n",(0,r.jsx)(n.p,{children:"To prepare DefectDojo for integration with KubeRocketCI, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create ci user in DefectDojo UI:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Login to DefectDojo UI using ",(0,r.jsx)(n.code,{children:"admin"})," credentials:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo \"DefectDojo admin password: $(kubectl \\\nget secret defectdojo \\\n--namespace=defectdojo \\\n--output jsonpath='{.data.DD_ADMIN_PASSWORD}' \\\n| base64 --decode)\"\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Go to User section"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create new user Global role ",(0,r.jsx)(n.code,{children:"Maintainer"})," permission:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DefectDojo update manual secret",src:t(54164).A+"",title:"DefectDojo set user permission",width:"1828",height:"1163"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get a token of the DefectDojo user:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Login to the DefectDojo UI using the credentials from previous steps."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on profile button select the ",(0,r.jsx)(n.code,{children:"API v2 key"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the API key."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DefectDojo api key",src:t(95175).A+"",title:"DefectDojo api-key",width:"1826",height:"949"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration-defectdojo-with-kuberocketci",children:"Integration DefectDojo with KubeRocketCI"}),"\n",(0,r.jsxs)(n.p,{children:["Provision the secret using ",(0,r.jsx)(n.code,{children:"Portal UI"}),", ",(0,r.jsx)(n.code,{children:"Manifest"})," or with the ",(0,r.jsx)(n.code,{children:"externalSecrets"})," operator:"]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"portal",values:[{label:"Portal UI",value:"portal"},{label:"Manifest",value:"manifest"},{label:"External Secrets Operator",value:"eso"}],children:[(0,r.jsxs)(l.A,{value:"portal",children:[(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Portal"})," open ",(0,r.jsx)(n.strong,{children:"Configuration"})," -> ",(0,r.jsx)(n.strong,{children:"SECURITY"})," -> ",(0,r.jsx)(n.strong,{children:"DEFECTDOJO"}),". Update or click ",(0,r.jsx)(n.strong,{children:"+ ADD INTEGRATION"})," fill fields ",(0,r.jsx)(n.code,{children:"Quick Link URL"}),", ",(0,r.jsx)(n.code,{children:"URL"})," and ",(0,r.jsx)(n.code,{children:"Token"})," click the ",(0,r.jsx)(n.code,{children:"save"})," button."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DefectDojo update manual secret",src:t(83258).A+"",title:"DefectDojo update manual secret",width:"3584",height:"2016"})})]}),(0,r.jsx)(l.A,{value:"manifest",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: ci-defectdojo\n  namespace: edp\n  labels:\n    app.edp.epam.com/secret-type: defectdojo\n    app.edp.epam.com/integration-secret: "true"\nstringData:\n  url: https://defectdojo.example.com\n  token: <token>\n'})})}),(0,r.jsxs)(l.A,{value:"eso",children:[(0,r.jsx)(n.p,{children:"Store defectdojo URL and Token in AWS Parameter Store with following format:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"ci-defectdojo":\n{\n  "url": "https://defectdojo.example.com",\n  "token": "XXXXXXXXXXXX"\n}\n'})}),(0,r.jsxs)(n.p,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Portal"})," open ",(0,r.jsx)(n.strong,{children:"Configuration"})," -> ",(0,r.jsx)(n.strong,{children:"SECURITY"})," -> ",(0,r.jsx)(n.strong,{children:"DefectDojo"})," and see the ",(0,r.jsx)(n.code,{children:"Managed by External Secret"})," message."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DefectDojo managed by external secret operator",src:t(50639).A+"",title:"DefectDojo managed by external secret operator",width:"3584",height:"2016"})}),(0,r.jsxs)(n.p,{children:["More details about the External Secrets Operator integration procedure can be found in the ",(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})," page."]})]})]}),"\n",(0,r.jsx)(n.p,{children:"After following the instructions provided, you should be able to integrate your DefectDojo with the KubeRocketCI using one of the available scenarios."}),"\n",(0,r.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/secrets-management/install-external-secrets-operator",children:"Install External Secrets Operator"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/secrets-management/external-secrets-operator-integration",children:"External Secrets Operator Integration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/3.9/operator-guide/artifacts-management/harbor-installation",children:"Install Harbor"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(34164),o=t(65627),a=t(56347),l=t(50372),i=t(30604),c=t(11861),d=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,h]=j({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{i.push(e)},onKeyDown:h,onClick:d,...o,className:(0,r.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function D(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(D,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(n))}},34126:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/defectdojo-addons-deploy-fa8544b7422667b6ba8bbeb3c928145d.png"},95175:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/defectdojo-api-key-f1c098a52e1e0e5c606e6c9c250e85b5.png"},54164:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/defectdojo-createuser-d2086677de2d29ff5dfd53a3cb6e0e8b.png"},50639:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/defectdojo-external-secret-039127f066c92030073cd045df38425e.png"},83258:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/defectdojo-token-5914e7a256c24b309b46298b028485ea.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);