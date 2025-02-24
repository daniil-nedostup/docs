"use strict";(self.webpackChunkkuberocketci_docs=self.webpackChunkkuberocketci_docs||[]).push([[98981],{415:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-guide/manage-branches","title":"Manage Branches","description":"Explore branch management in KubeRocketCI, from adding new branches, editing properties, to integrating pipelines for applications, libraries, and more.","source":"@site/versioned_docs/version-3.10/user-guide/manage-branches.md","sourceDirName":"user-guide","slug":"/user-guide/manage-branches","permalink":"/docs/user-guide/manage-branches","draft":false,"unlisted":false,"editUrl":"https://github.com/KubeRocketCI/docs/edit/main/docs/user-guide/manage-branches.md","tags":[],"version":"3.10","lastUpdatedBy":"Oleksandr_Stepanov@epam.com","lastUpdatedAt":1739954692000,"frontMatter":{"title":"Manage Branches","sidebar_label":"Manage Branches","description":"Explore branch management in KubeRocketCI, from adding new branches, editing properties, to integrating pipelines for applications, libraries, and more."},"sidebar":"userGuideSidebar","previous":{"title":"Manage Infrastructures","permalink":"/docs/user-guide/infrastructure"},"next":{"title":"Add Deployment Flow","permalink":"/docs/user-guide/add-cd-pipeline"}}');var s=i(74848),r=i(28453);const a={title:"Manage Branches",sidebar_label:"Manage Branches",description:"Explore branch management in KubeRocketCI, from adding new branches, editing properties, to integrating pipelines for applications, libraries, and more."},c="Manage Branches",l={},d=[{value:"Pipeline Management",id:"pipeline-management",level:2},{value:"Build Tool/Framework Approach",id:"build-toolframework-approach",level:3},{value:"Codebase Branch Settings",id:"codebase-branch-settings",level:3},{value:"Add New Branch",id:"add-new-branch",level:2},{value:"Edit Existing Branch",id:"edit-existing-branch",level:2},{value:"Build Branch",id:"build-branch",level:2},{value:"Delete Branch",id:"delete-branch",level:2},{value:"Related Articles",id:"related-articles",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"manage-branches",children:"Manage Branches"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kuberocketci.io/docs/user-guide/manage-branches/"})}),"\n",(0,s.jsx)(n.p,{children:"This page describes how to manage branches in the created component, whether it is an application, library, autotest or infrastructure. It also briefly explains two approaches of managing custom pipelines for codebases."}),"\n",(0,s.jsx)(n.h2,{id:"pipeline-management",children:"Pipeline Management"}),"\n",(0,s.jsx)(n.p,{children:"There are two approaches to define a codebases with Tekton pipelines:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.a,{href:"/docs/use-cases/tekton-custom-pipelines",children:"build tool and framework"})]}),"\n",(0,s.jsxs)(n.li,{children:["Using codebase ",(0,s.jsx)(n.a,{href:"/docs/use-cases/custom-pipelines-flow",children:"branch settings"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"build-toolframework-approach",children:"Build Tool/Framework Approach"}),"\n",(0,s.jsxs)(n.p,{children:["This approach involves ",(0,s.jsx)(n.a,{href:"/docs/use-cases/tekton-custom-pipelines",children:"adding your application"})," operating with language type and framework."]}),"\n",(0,s.jsxs)(n.p,{children:["In this approach, it is essential to create a pipeline name using the pattern: ",(0,s.jsx)(n.code,{children:"git_server_name-build_tool-framework-codebase_type-pipeline_type-codebase_versioning_type"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Follow this approach if you need to define multiple similar applications with identical settings, as this approach would be more beneficial."}),"\n",(0,s.jsx)(n.h3,{id:"codebase-branch-settings",children:"Codebase Branch Settings"}),"\n",(0,s.jsx)(n.p,{children:"This approach involves creating a component with Tekton pipelines and selecting it in the codebase branch settings."}),"\n",(0,s.jsxs)(n.p,{children:["In contrast to the approach based on ",(0,s.jsx)(n.a,{href:"/docs/use-cases/tekton-custom-pipelines",children:"build tool and framework"}),", this one offers two main advantages:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplified management"}),": This method eliminates the requirement for strict resource naming conventions. With this approach, pipelines can be created without following any predefined pattern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Branch-based logic"}),": With this method, pipelines can be defined not just for an application but also for specific branches within the application."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you need to frequently and quickly redefine a build or review pipeline, this approach is highly recommended."}),"\n",(0,s.jsx)(n.h2,{id:"add-new-branch",children:"Add New Branch"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["When working with libraries, pay attention when specifying the branch name: the branch name is involved in the formation of the library version, so it must comply with the ",(0,s.jsx)(n.a,{href:"https://semver.org/",children:"semantic versioning"})," rules for the library."]})}),"\n",(0,s.jsxs)(n.p,{children:["When adding a component, the default branch is a ",(0,s.jsx)(n.strong,{children:"main"})," branch. In order to add a new branch, follow the steps below:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Branches"})," block by clicking the component name link in the Components list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"+ Create branch"})," button:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Add branch",src:i(90027).A+"",title:"Add branch",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New branch",src:i(93564).A+"",title:"New branch",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["a. ",(0,s.jsx)(n.strong,{children:"Branch name"})," - type the branch name. Pay attention that this field remains static if you create a release branch. For the ",(0,s.jsx)(n.strong,{children:"Clone"})," and ",(0,s.jsx)(n.strong,{children:"Import"})," strategies: if you want to use the existing branch, enter its name into this field."]}),"\n",(0,s.jsxs)(n.p,{children:["b. ",(0,s.jsx)(n.strong,{children:"From commit hash"})," - paste the commit hash from which the branch will be created. For the ",(0,s.jsx)(n.strong,{children:"Clone"})," and ",(0,s.jsx)(n.strong,{children:"Import"})," strategies: Note that if the ",(0,s.jsx)(n.strong,{children:"From commit hash"})," field is empty, the latest commit from the branch name will be used."]}),"\n",(0,s.jsxs)(n.p,{children:["c. ",(0,s.jsx)(n.strong,{children:"Build pipeline"})," - select the build pipeline you want to use to build the application or leave the default one."]}),"\n",(0,s.jsxs)(n.p,{children:["d. ",(0,s.jsx)(n.strong,{children:"Review pipeline"})," - select the review pipeline you want to use to review the application or leave the default one."]}),"\n",(0,s.jsxs)(n.p,{children:["e. ",(0,s.jsx)(n.strong,{children:"View diagram"})," - view the pipeline to verify this is the exact pipeline you need:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"View pipeline diagram",src:i(98478).A+"",title:"View pipeline diagram",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To get the most out of managing build/review pipelines via KubeRocketCI portal, you should follow the ",(0,s.jsx)(n.strong,{children:"Add-Ons"})," approach for pipeline management."]})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Edit YAML"})," in the upper-right corner of the dialog to open the YAML editor and add a branch. Otherwise, fill in the required fields in the dialog:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Yaml edit",src:i(40568).A+"",title:"Yaml edit",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Adding of a new branch is indicated in the context of the ",(0,s.jsx)(n.code,{children:"EDP versioning"})," type."]})}),"\n",(0,s.jsx)(n.h2,{id:"edit-existing-branch",children:"Edit Existing Branch"}),"\n",(0,s.jsx)(n.p,{children:"To edit branch properties, follow the steps below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Branches"})," block by clicking the library name link in the Libraries list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the actions button and select ",(0,s.jsx)(n.strong,{children:"Edit"}),":"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Edit branch",src:i(55691).A+"",title:"Edit branch",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Change the branch options and click ",(0,s.jsx)(n.strong,{children:"Apply"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Select pipeline",src:i(69280).A+"",title:"Select pipeline",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:"a. Select another pipeline from the drop-down list."}),"\n",(0,s.jsxs)(n.p,{children:["b. Click the ",(0,s.jsx)(n.strong,{children:"View diagram"})," button."]}),"\n",(0,s.jsx)(n.p,{children:"c. View the pipeline structure and verify these are the exact pipelines you need."}),"\n",(0,s.jsx)(n.h2,{id:"build-branch",children:"Build Branch"}),"\n",(0,s.jsx)(n.p,{children:"In order to build branch from the latest commit, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Branches"})," block by clicking the library name link in the Libraries list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Build"})," button:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Build branch",src:i(87561).A+"",title:"Build branch",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["The pipeline run status is displayed near the branch name in the ",(0,s.jsx)(n.strong,{children:"Branches"})," block:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pipeline run status in KubeRocketCI portal",src:i(70795).A+"",title:"Pipeline run status in KubeRocketCI portal",width:"1922",height:"1114"})}),"\n",(0,s.jsxs)(n.p,{children:["The corresponding item appears in the ",(0,s.jsx)(n.strong,{children:"Pipelines"})," section:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pipeline run status",src:i(50287).A+"",title:"Pipeline run status",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:"As an alternative way, click the tree diagram icon to observe the real-time status of the pipeline run:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tree diagram icon",src:i(19660).A+"",title:"Tree diagram icon",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.p,{children:"The tree diagram window is presented below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tree diagram window",src:i(50939).A+"",title:"Tree diagram window",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h2,{id:"delete-branch",children:"Delete Branch"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The default ",(0,s.jsx)(n.strong,{children:"master/main"})," branch cannot be removed."]})}),"\n",(0,s.jsx)(n.p,{children:"In order to delete the added branch with the corresponding record in the KubeRocketCI portal database, do the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Branches"})," block by clicking the component name link in the components list."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the name related to the necessary branch and then click delete ",(0,s.jsx)(n.strong,{children:"Bucket"})," icon:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Delete branch",src:i(80352).A+"",title:"Delete branch",width:"1922",height:"1114"})}),"\n",(0,s.jsx)(n.h2,{id:"related-articles",children:"Related Articles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-application",children:"Add Application"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-library",children:"Add Library"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/user-guide/add-autotest",children:"Add Autotest"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},90027:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-addbranch-4dd128a657a918741a2315572beda002.png"},87561:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-build-branch-d6c33c56d53dbf327994dd7371d36b94.png"},93564:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-create-new-branch-862e7348f7584a580af932e9f4f5d112.png"},80352:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-delete-branch-ac556280957ec80ed91db3fcbb64e49a.png"},55691:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-edit-branch-c2082694d6a0bb5d334160d705e483bc.png"},98478:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-pipeline-diagram-84f61c34b0b5e4e7517d7777b197bfe9.png"},70795:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-pipeline-run-status-b9ed8ee9bb271edfed2cb84308d9cca6.png"},50287:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-pipelineruns-list-c65e3ea583394819f661ee975c4272e8.png"},69280:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-set-pipelines-1152db35d5113cfa39ebd6bc5fbe7da5.png"},19660:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-tree-diagram-icon-21ca465865b017b5607865a90f644248.png"},50939:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-tree-diagram-window-d133d663ece017ab0912572f9b24b8a6.png"},40568:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/branches-yaml-edit-4f63b1f4b666263c2ea37a9992a1f3b2.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);