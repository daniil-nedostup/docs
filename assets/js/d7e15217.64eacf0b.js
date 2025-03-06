"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[82055],{53452:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"operator-guide/monitoring-and-observability/loki-irsa","title":"IAM Roles for Loki Service Accounts","description":"Guide on creating AWS IAM roles for Loki service accounts to use Amazon S3 as object storage, including policy creation and service account annotation.","source":"@site/versioned_docs/version-3.9/operator-guide/monitoring-and-observability/loki-irsa.md","sourceDirName":"operator-guide/monitoring-and-observability","slug":"/operator-guide/monitoring-and-observability/loki-irsa","permalink":"/docs/3.9/operator-guide/monitoring-and-observability/loki-irsa","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/monitoring-and-observability/loki-irsa.md","tags":[],"version":"3.9","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740847812000,"frontMatter":{"title":"IAM Roles for Loki Service Accounts","description":"Guide on creating AWS IAM roles for Loki service accounts to use Amazon S3 as object storage, including policy creation and service account annotation.","sidebar_label":"Loki IAM Roles"},"sidebar":"operatorGuideSidebar","previous":{"title":"Install Grafana Loki","permalink":"/docs/3.9/operator-guide/monitoring-and-observability/install-loki"},"next":{"title":"Multitenant Logging","permalink":"/docs/3.9/operator-guide/monitoring-and-observability/multitenant-logging"}}');var t=o(74848),s=o(28453);const r={title:"IAM Roles for Loki Service Accounts",description:"Guide on creating AWS IAM roles for Loki service accounts to use Amazon S3 as object storage, including policy creation and service account annotation.",sidebar_label:"Loki IAM Roles"},a="IAM Roles for Loki Service Accounts",c={},l=[{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"iam-roles-for-loki-service-accounts",children:"IAM Roles for Loki Service Accounts"})}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/monitoring-and-observability/loki-irsa"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Make sure that IRSA is enabled and ",(0,t.jsx)(n.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook/tree/master#amazon-eks-pod-identity-webhook",children:"amazon-eks-pod-identity-webhook"})," is deployed according to the ",(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})," documentation."]})}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to use Amazon Simple Storage Service ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," as object storage for Loki.\nIn this case ",(0,t.jsx)(n.a,{href:"https://grafana.com/docs/loki/latest/configure/examples/configuration-examples/",children:"Loki"})," requires access to AWS resources. Follow the steps below to create a required role:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create AWS IAM Policy ",(0,t.jsx)(n.code,{children:"AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki_policy"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListObjects",\n                "s3:ListBucket",\n                "s3:PutObject",\n                "s3:GetObject",\n                "s3:DeleteObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::loki-*"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::loki-*"\n            ]\n        }\n    ]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create AWS IAM Role ",(0,t.jsx)(n.code,{children:"AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki"})," with trust relationships:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/<OIDC_PROVIDER>"\n      },\n      "Action": "sts:AssumeRoleWithWebIdentity",\n      "Condition": {\n        "StringEquals": {\n          "<OIDC_PROVIDER>:sub": "system:serviceaccount:<LOKI_NAMESPACE>:edp-loki"\n      }\n    }\n  }\n]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Attach the ",(0,t.jsx)(n.code,{children:"AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki_policy"})," policy to the ",(0,t.jsx)(n.code,{children:"AWSIRSA<CLUSTER_NAME><LOKI_NAMESPACE>Loki"})," role."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," bucket with name ",(0,t.jsx)(n.code,{children:"loki-<CLUSTER_NAME>"})," exists."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Provide key value ",(0,t.jsxs)(n.strong,{children:['eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>',":role",'/AWSIRSA\u2039CLUSTER_NAME\u203a\u2039LOKI_NAMESPACE\u203aLoki"']})," into the ",(0,t.jsx)(n.strong,{children:"serviceAccount.annotations"})," parameter in ",(0,t.jsx)(n.em,{children:"values.yaml"})," during the ",(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/monitoring-and-observability/install-loki#installation",children:"Loki Installation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/infrastructure-providers/aws/enable-irsa",children:"Associate IAM Roles With Service Accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.9/operator-guide/monitoring-and-observability/install-loki",children:"Install Grafana Loki"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(96540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);