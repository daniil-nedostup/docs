"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[43335],{65739:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"operator-guide/cd/deploy-rpm","title":"Deploy RPM Packages","description":"Explore the deployment of RPM packages in KubeRocketCI using the default and AWX approaches for efficient application delivery on Linux distributions.","source":"@site/versioned_docs/version-3.10/operator-guide/cd/deploy-rpm.md","sourceDirName":"operator-guide/cd","slug":"/operator-guide/cd/deploy-rpm","permalink":"/docs/operator-guide/cd/deploy-rpm","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/operator-guide/cd/deploy-rpm.md","tags":[],"version":"3.10","lastUpdatedBy":"Sergiy Kulanov","lastUpdatedAt":1740938144000,"frontMatter":{"title":"Deploy RPM Packages","description":"Explore the deployment of RPM packages in KubeRocketCI using the default and AWX approaches for efficient application delivery on Linux distributions.","sidebar_label":"Deploy RPM Packages"},"sidebar":"operatorGuideSidebar","previous":{"title":"Manual Approval in Pipelines","permalink":"/docs/operator-guide/cd/manual-approval"},"next":{"title":"Deployment Strategies Overview","permalink":"/docs/operator-guide/cd/auto-stable-trigger-type"}}');var t=i(74848),r=i(28453);const o={title:"Deploy RPM Packages",description:"Explore the deployment of RPM packages in KubeRocketCI using the default and AWX approaches for efficient application delivery on Linux distributions.",sidebar_label:"Deploy RPM Packages"},a="Deploy RPM Packages",l={},c=[{value:"Features of Each Approach",id:"features-of-each-approach",level:3},{value:"Built-in Pipeline",id:"built-in-pipeline",level:4},{value:"AWX Operator",id:"awx-operator",level:4},{value:"Default Approach",id:"default-approach",level:2},{value:"Integration Flow",id:"integration-flow",level:3},{value:"GitOps Repository Structure",id:"gitops-repository-structure",level:3},{value:"AWX Approach",id:"awx-approach",level:2},{value:"AWX Integration Flow",id:"awx-integration-flow",level:3},{value:"AWX Integration",id:"awx-integration",level:3},{value:"AWX Integration Prerequisites",id:"awx-integration-prerequisites",level:3},{value:"AWX Integration Procedure",id:"awx-integration-procedure",level:3},{value:"Related Articles",id:"related-articles",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s,Head:o}=n;return s||h("Details",!0),o||h("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-rpm-packages",children:"Deploy RPM Packages"})}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/operator-guide/cd/deploy-rpm"})}),"\n",(0,t.jsxs)(n.p,{children:["KubeRocketCI can use two types of deployment packages: Helm chart and RPM packages. While the Helm chart is the default deployment package in KubeRocketCI, using RPM packages is beneficial for specific Linux distributions, such as Oracle, Fedora, openSUSE, and others where these packages are supported and widespread. To learn more about RPM packages, refer to the official ",(0,t.jsx)(n.a,{href:"https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/rpm_packaging_guide/getting-started-with-rpm-packaging#introduction-to-rpm-packaging_getting-started-with-rpm-packaging",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In KubeRocketCI, RPM support allows to collect applications, store them as Nexus artifacts, and deploy them using the ",(0,t.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/index.html",children:"Ansible"})," tool. KubeRocketCI is support two approach to work with RPM packages:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default approach"}),": This approach involves configuring deployments using a GitOps repository and Kubernetes secrets."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWX approach"}),": This approach involves deploying applications using the ",(0,t.jsx)(n.a,{href:"https://ansible.readthedocs.io/projects/awx/en/latest/",children:"AWX"})," tool."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"features-of-each-approach",children:"Features of Each Approach"}),"\n",(0,t.jsx)(n.h4,{id:"built-in-pipeline",children:"Built-in Pipeline"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full GitOps Configuration"}),": All resources, including roles, inventories, hosts, tasks, and instance keys, are fully managed via GitOps."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quick Start"}),": Enables a fast setup process without the need for third-party utilities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalable"}),": Easily scales to accommodate an increasing number of tasks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Customizable Task Execution"}),": Offers flexible configuration of task execution sequences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"No UI"}),": Operates entirely without a graphical user interface, relying on code-based configurations."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"awx-operator",children:"AWX Operator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User-Friendly Interface"}),": Features a convenient UI for managing configurations and tasks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partial Code-Based Configurations"}),": Retrieves some configurations (such as Ansible tasks) directly from the repository."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"UI-Based Configuration"}),": All configurations are performed within the graphical user interface."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"default-approach",children:"Default Approach"}),"\n",(0,t.jsx)(n.p,{children:"The first method to delivery RPM packages is using KubeRocketCI RPM deploy pipeline."}),"\n",(0,t.jsx)(n.h3,{id:"integration-flow",children:"Integration Flow"}),"\n",(0,t.jsx)(n.p,{children:"Default approach involves the following steps:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR;\n    A(Onboard GitOps repository) --\x3e B(Create secret for GitOps repository) --\x3e C(Create secret for Ansible host's) --\x3e D(Create application) --\x3e E(Select deploy pipeline)"}),"\n",(0,t.jsx)(n.p,{children:"Here is a breakdown of the scheme above:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Onboard GitOps repository"}),": GitOps repository is used to store pre-deploy information (such as dependencies) and Ansible configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create secret for GitOps repository"}),": A secret providing access to the GitOps repository."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create secret for Ansible host's"}),": This is a secret used by Ansible to manage the instances where the application will be deployed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create application"}),": ",(0,t.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add application"})," to KubeRocketCI as an RPM package."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Select deploy pipeline"}),": Choose a specific deploy pipeline when creating/editing an environment to deploy RPM packages."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By completing these steps, will be able to add, build, and deploy RPM applications."}),"\n",(0,t.jsx)(n.p,{children:"To set up RPM integration, follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the KubeRocketCI portal. Navigate to ",(0,t.jsx)(n.strong,{children:"Configuration"})," -> ",(0,t.jsx)(n.strong,{children:"Deployment"})," -> ",(0,t.jsx)(n.strong,{children:"GitOps"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GitOps tab",src:i(86317).A+"",title:"GitOps tab",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Specify the GitOps repository in the ",(0,t.jsx)(n.code,{children:"username/repository_name"})," format:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add GitOps repository",src:i(78479).A+"",title:"Add GitOps repository",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create and apply the secret for the GitOps repository by running the command below. Specify SSH key path, Git account, and repository name:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cd-ansible-gitops-key\n  namespace: <krci>\ndata:\n  id_rsa: $(cat /path/to/repo_id_rsa | base64 | tr -d '\\n')\n  url: $(echo -n \"git@github.com:edp-robot/ansible-gitops.git\" | base64 | tr -d '\\n')\ntype: Opaque\nEOF\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create and apply the secret for the hosts by running the command below. Don't forget to specify SSH key path:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: cd-ansible-ssh-key\n  namespace: <krci>\ndata:\n  id_rsa: $(cat /path/to/instance_id_rsa | base64 | tr -d '\\n')\ntype: Opaque\nEOF\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"creating codebases"}),", in the ",(0,t.jsx)(n.strong,{children:"Deployment option"})," field, select the ",(0,t.jsx)(n.strong,{children:"rpm-package"})," option:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create RPM application",src:i(58728).A+"",title:"Create RPM application",width:"1896",height:"922"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.a,{href:"/docs/user-guide/manage-environments#add-a-new-environment",children:"creating"})," or ",(0,t.jsx)(n.a,{href:"/docs/user-guide/manage-environments#edit-environment",children:"editing"})," environments, in the ",(0,t.jsx)(n.strong,{children:"Deploy pipeline template"})," field, select ",(0,t.jsx)(n.strong,{children:"deploy-ansible"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"pre-deploy.yml"})," file will take affect only if the ",(0,t.jsx)(n.strong,{children:"Values override"})," option is enabled when deploying application."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create Ansible environment",src:i(46985).A+"",title:"Create Ansible environment",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(n.h3,{id:"gitops-repository-structure",children:"GitOps Repository Structure"}),"\n",(0,t.jsx)(n.p,{children:"Below is a structure of a GitOps repository designed for deploying RPM packages:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: repository structure"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nexus.repo\ninventory.ini\npre-deploy.yml\n\u251c\u2500\u2500 web\n\u2502   \u251c\u2500\u2500 dev\n\u2502   \u2502   \u251c\u2500\u2500 nano\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 01_playbook.yml\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 02_playbook.yml\n\u2502   \u2502   \u2514\u2500\u2500 atop\n\u2502   \u2502       \u251c\u2500\u2500 01_playbook.yml\n\u2502   \u2502       \u2514\u2500\u2500 02_playbook.yml\n\u2502   \u251c\u2500\u2500 qa\n\u2502   \u2502   \u251c\u2500\u2500 nano\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 01_playbook.yml\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 02_playbook.yml\n\u2502   \u2502   \u2514\u2500\u2500 atop\n\u2502   \u2502       \u251c\u2500\u2500 01_playbook.yml\n\u2502   \u2502       \u2514\u2500\u2500 02_playbook.yml\n\u2502   \u2514\u2500\u2500 prod\n\u2502       \u251c\u2500\u2500 nano\n\u2502       \u2502   \u251c\u2500\u2500 01_playbook.yml\n\u2502       \u2502   \u2514\u2500\u2500 02_playbook.yml\n\u2502       \u2514\u2500\u2500 atop\n\u2502           \u251c\u2500\u2500 01_playbook.yml\n\u2502           \u2514\u2500\u2500 02_playbook.yml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 dev\n    \u2502   \u251c\u2500\u2500 nano\n    \u2502   \u2502   \u251c\u2500\u2500 01_playbook.yml\n    \u2502   \u2502   \u2514\u2500\u2500 02_playbook.yml\n    \u2502   \u2514\u2500\u2500 atop\n    \u2502       \u251c\u2500\u2500 01_playbook.yml\n    \u2502       \u251c\u2500\u2500 02_playbook.yml\n    \u2502       \u2514\u2500\u2500 03_playbook.yml\n    \u251c\u2500\u2500 qa\n    \u2502   \u251c\u2500\u2500 nano\n    \u2502   \u2502   \u251c\u2500\u2500 01_playbook.yml\n    \u2502   \u2502   \u251c\u2500\u2500 02_playbook.yml\n    \u2502   \u2514\u2500\u2500 atop\n    \u2502       \u251c\u2500\u2500 01_playbook.yml\n    \u2502       \u251c\u2500\u2500 02_playbook.yml\n    \u2502       \u2514\u2500\u2500 03_playbook.yml\n    \u2514\u2500\u2500 prod\n        \u251c\u2500\u2500 mysql\n        \u2502   \u251c\u2500\u2500 01_playbook.yml\n        \u2502   \u2514\u2500\u2500 02_playbook.yml\n        \u2514\u2500\u2500 cc\n            \u251c\u2500\u2500 01_playbook.yml\n            \u251c\u2500\u2500 02_playbook.yml\n            \u2514\u2500\u2500 03_playbook.yml\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"The main configuration files description:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"nexus.repo"}),": Contains the configuration for connecting to Nexus, to pull artifacts to the instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"inventory.ini"}),": Contains groups with instances, user credentials, and additional settings for connecting to the instances."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"pre-deploy.yml"}),": Contains general playbooks that contain a set of tasks that must be done before starting work, such as copying and connecting Nexus config, installing additional packages depending on the group."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The rest of the files are example of deployment configurations. The KubeRocketCI deploy pipeline uses naming pattern to comparisons deployment flows/environment with file structure in GitOps repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"<deployment-flow-name>/<environment-name>/<package-name>/01_<file>.yml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example, the ",(0,t.jsx)(n.strong,{children:"web/qa/nano/01_copy-file.yml"})," file related to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Application: ",(0,t.jsx)(n.strong,{children:"nano"})]}),"\n",(0,t.jsxs)(n.li,{children:["Deployment Flow: ",(0,t.jsx)(n.strong,{children:"web"})]}),"\n",(0,t.jsxs)(n.li,{children:["Environment: ",(0,t.jsx)(n.strong,{children:"qa"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The file name must begin with its serial number (e.g., 01, 02, 03, ...), followed by an underscore."}),"\n",(0,t.jsx)(n.h2,{id:"awx-approach",children:"AWX Approach"}),"\n",(0,t.jsx)(n.p,{children:"The second approach to manage RPM packages is AWX-based. It features user interface and considered more simple."}),"\n",(0,t.jsx)(n.h3,{id:"awx-integration-flow",children:"AWX Integration Flow"}),"\n",(0,t.jsx)(n.p,{children:"Default approach involves the following steps:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR;\n    A(Onboard Ansible Git repository) --\x3e B(Install AWX) --\x3e C(Configure AWX)--\x3e D(Create application) --\x3e E(Select deploy pipeline)"}),"\n",(0,t.jsx)(n.p,{children:"Here is a breakdown of the scheme above:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Onboard Ansible Git repository"}),": Create an Ansible Git repository that contains playbooks that will be used in deploy pipelines."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install AWX"}),": Set Up AWX application. We recommend using ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/add-ons-overview",children:"cluster add-ons"})," to install it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Configure AWX"}),": Once AWX tool is installed, open its UI to create AWX Project, Inventory, Templates, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create application"}),": ",(0,t.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add application"})," to KubeRocketCI as an RPM package."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Select deploy pipeline"}),": Choose a specific deploy pipeline when creating/editing an environment to deploy RPM packages."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"awx-integration",children:"AWX Integration"}),"\n",(0,t.jsx)(n.p,{children:"AWX Integration implies creating a Git repository, installing AWX and configuring it via UI."}),"\n",(0,t.jsx)(n.h3,{id:"awx-integration-prerequisites",children:"AWX Integration Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that External Secrets Operator is ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/secrets-management/install-external-secrets-operator",children:"installed"})," and ",(0,t.jsx)(n.a,{href:"/docs/operator-guide/secrets-management/external-secrets-operator-integration",children:"configured"})," properly."]}),"\n",(0,t.jsx)(n.h3,{id:"awx-integration-procedure",children:"AWX Integration Procedure"}),"\n",(0,t.jsx)(n.p,{children:"To set up RPM integration using AWX tool, follow the steps below. Completing these steps enables the addition, building, and deployment of RPM applications:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Onboard Ansible Git repository where will store Ansible configuration files. Below is a structure of an Ansible Git repository designed for deploying RPM packages:"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"View: repository structure"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"package-install.yaml\n  \u2514\u2500\u2500 roles\n      \u251c\u2500\u2500 pre-deploy\n      \u2502   \u251c\u2500\u2500 tasks\n      \u2502   \u2502   \u2514\u2500\u2500 role.yaml\n      \u2502   \u251c\u2500\u2500 files\n      \u2502   \u2502   \u2514\u2500\u2500 nexus.repo\n      \u251c\u2500\u2500 package-install\n      \u2502   \u2514\u2500\u2500 tasks\n      \u2502       \u2514\u2500\u2500 role.yaml\n      \u2514\u2500\u2500 test-app-dev-web\n          \u2514\u2500\u2500 tasks\n              \u2514\u2500\u2500 role.yaml\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Here is a breakdown of the scheme above:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"package-install.yaml"}),": This is the main file that refers to playbooks located in the ",(0,t.jsx)(n.strong,{children:"roles"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"roles"}),": This directory contains all the Ansible roles that will be executed in deploy pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"pre-deploy"}),": This is the first role the ",(0,t.jsx)(n.strong,{children:"package-install.yaml"})," file refers to. It connects to Nexus storage to interact with the application. Need to specify the required parameters in the ",(0,t.jsx)(n.strong,{children:"<repo-name>/roles/pre-deploy/files/nexus.repo"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"package-install"}),": This role contains the playbooks that install all the dependencies to AWS EC2 instances."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"test-app-dev-web"}),": This role contains the application playbooks, named according to the ",(0,t.jsx)(n.strong,{children:"<codebase-name>-<deployment-flow-name>-<environment-name>"})," convention. It will be executed only if the ",(0,t.jsx)(n.strong,{children:"Values override"})," parameter is set to ",(0,t.jsx)(n.strong,{children:"true"})," in the Deployment Flow during the component deployment process."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install AWX via ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"cluster add-ons"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["a. Create private repository based on the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons",children:"cluster add-ons"})," fork."]}),"\n",(0,t.jsxs)(n.p,{children:["b. In the AWX Operator ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/addons/awx-operator/values.yaml",children:"values.yaml"})})," file, specify hostname, secretName. OIDC mechanism is optional."]}),"\n",(0,t.jsxs)(n.p,{children:["c. In the Argo CD application ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/clusters/core/apps/values.yaml",children:"values.yaml"})})," file, enable the AWX operator:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"awx-operator:\n  createNamespace: true\n  enable: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["d. Synchronize state in Argo CD. Refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/edp-cluster-add-ons/blob/main/README.md",children:"README.md"})," file for more details."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure AWX via UI:"}),"\n",(0,t.jsx)(n.p,{children:"a. Once AWX operator is deployed, navigate to its UI using the hostname specified earlier:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWX main menu",src:i(75822).A+"",title:"AWX main menu",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:["b. (Optional) Configure OIDC. Navigate to ",(0,t.jsx)(n.strong,{children:"Settings"})," -> ",(0,t.jsx)(n.strong,{children:"Generic OIDC settings"})," and specify the required fields:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OIDC Key"}),": Enter ",(0,t.jsx)(n.strong,{children:"awx"}),";"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OIDC Secret"}),": This is the client secret data;"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": Specify the Keycloak realm URL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Generic OIDC settings",src:i(64e3).A+"",title:"Generic OIDC settings",width:"1922",height:"1114"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["c. Navigate to ",(0,t.jsx)(n.strong,{children:"Resources"})," -> ",(0,t.jsx)(n.strong,{children:"Credentials"})," and create two credentials:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For Git repository"}),": These credentials of the ",(0,t.jsx)(n.strong,{children:"Source Control"})," type must contain the SSH key with access to the Ansible Git repo:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Git credentials",src:i(43662).A+"",title:"Git credentials",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For AWS instances"}),": These credentials with access to the ",(0,t.jsx)(n.strong,{children:"Hosts"})," must contain the SSH key:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWS EC2 credentials",src:i(76720).A+"",title:"AWS EC2 credentials",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:["d. Navigate to ",(0,t.jsx)(n.strong,{children:"Resources"})," -> ",(0,t.jsx)(n.strong,{children:"Project"})," and create a new project. The ",(0,t.jsx)(n.code,{children:"Source Control URL"})," specifies the repository containing the ",(0,t.jsx)(n.a,{href:"#awx-integration-flow",children:"Ansible project"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create AWX project",src:i(60531).A+"",title:"Create AWX project",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:["e. Navigate to ",(0,t.jsx)(n.strong,{children:"Resources"})," -> ",(0,t.jsx)(n.strong,{children:"Inventories"})," and create an inventory using the ",(0,t.jsx)(n.strong,{children:"Add inventory"})," option:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWX inventory",src:i(64495).A+"",title:"AWX inventory",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:["f. Navigate to ",(0,t.jsx)(n.strong,{children:"Resources"})," -> ",(0,t.jsx)(n.strong,{children:"Hosts"})," and add hosts' IP addresses:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWX hosts",src:i(42034).A+"",title:"AWX hosts",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.p,{children:["g. Navigate to ",(0,t.jsx)(n.strong,{children:"Resources"})," -> ",(0,t.jsx)(n.strong,{children:"Templates"}),". Create job template called ",(0,t.jsx)(n.strong,{children:"package-install"})," as follows:"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Don't forget to select the ",(0,t.jsx)(n.strong,{children:"Prompt on launch"})," checkbox for ",(0,t.jsx)(n.strong,{children:"inventory"}),", ",(0,t.jsx)(n.strong,{children:"limit"}),", and ",(0,t.jsx)(n.strong,{children:"variables"})," fields."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWX template",src:i(9541).A+"",title:"AWX template",width:"1922",height:"1114"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create application with the ",(0,t.jsx)(n.strong,{children:"rpm-package"})," deployment option. Refer to the ",(0,t.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add Application"})," page for more details:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create RPM application",src:i(58728).A+"",title:"Create RPM application",width:"1896",height:"922"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.a,{href:"/docs/user-guide/manage-environments#add-a-new-environment",children:"creating environments"}),", in the ",(0,t.jsx)(n.strong,{children:"Deploy pipeline template"})," field, select ",(0,t.jsx)(n.strong,{children:"deploy-ansible-awx"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create Ansible environment",src:i(66886).A+"",title:"Create Ansible environment",width:"1922",height:"1114"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["(Optional) When deploying application, enable the ",(0,t.jsx)(n.strong,{children:"Values override"})," option to apply configuration from the Ansible Git repository to be executed specifically for this component:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Values override option",src:i(80144).A+"",title:"Values override option",width:"1922",height:"1114"})}),"\n",(0,t.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/operator-guide/cd/customize-deploy-pipeline",children:"Customize Deploy Pipeline"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/user-guide/add-cd-pipeline",children:"Add Deployment Flow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/user-guide/manage-environments",children:"Manage Deployment Flows"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},86317:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ansible-add-gitops-b370f4ce79cdec24056e16b0a2f34d23.png"},66886:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ansible-deploy-ansible-awx-19925d60bd029e13e03cefd7484eab08.png"},46985:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ansible-deploy-ansible-2ed8c14aea44ff47455b9d00b542dc96.png"},78479:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ansible-gitops-1908177304e575328985cb3ee2d6e84b.png"},80144:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ansible-values-override-e5f3d29727698d34d2b0343e545f5e93.png"},60531:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-create-project-9d06d4258c61fb6a321234fd7f4b04bf.png"},76720:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-ec2-credentials-adab0c1883941a401f0ed600bfd0d29c.png"},43662:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-git-credentials-e330d89b7c17dd56d8fbf7397d20aca5.png"},42034:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-hosts-778bad4d4315ba3c371f544b63ea190a.png"},64495:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-inventory-69f9a4f1e3cf2a7c33be8d45066fce95.png"},75822:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-main-menu-8100e938853c25059d1b3eb14e5332d1.png"},64e3:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-oidc-settings-2fd526db0a31ea04725e05f9398d84c5.png"},9541:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/awx-template-a7e402f97da04a584c174d3a3c51978d.png"},58728:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/rpm-1a7f9ceb40e514608f65ac466c389251.gif"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);