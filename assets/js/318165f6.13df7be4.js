"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2345],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,sidebar_label:"CSI"},s="CSI",u={unversionedId:"04concepts/02csi",id:"04concepts/02csi",title:"CSI",description:"CSI is the abbreviation of Container Storage Interface. To have a better understanding of what we're going to do, the first thing we need to know is what the Container Storage Interface is. Currently, there are still some problems for already existing storage subsystem within Kubernetes. Storage driver code is maintained in the Kubernetes core repository which is difficult to test. But beyond that, Kubernetes needs to give permissions to storage vendors to check code into the Kubernetes core repository. Ideally, that should be implemented externally.",source:"@site/docs/04concepts/02csi.md",sourceDirName:"04concepts",slug:"/04concepts/02csi",permalink:"/docs/04concepts/02csi",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04concepts/02csi.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"CSI"},sidebar:"tutorialSidebar",previous:{title:"CAS",permalink:"/docs/04concepts/01cas"},next:{title:"CRD and CR",permalink:"/docs/04concepts/03crd"}},c={},p=[{value:"Extend CSI and Kubernetes",id:"extend-csi-and-kubernetes",level:2},{value:"Extend CSI spec",id:"extend-csi-spec",level:2},{value:"Extend \u201cIn-Tree\u201d Volume Plugin",id:"extend-in-tree-volume-plugin",level:2},{value:"Implement Volume Driver",id:"implement-volume-driver",level:3},{value:"Demonstration",id:"demonstration",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csi"},"CSI"),(0,a.kt)("p",null,"CSI is the abbreviation of Container Storage Interface. To have a better understanding of what we're going to do, the first thing we need to know is what the Container Storage Interface is. Currently, there are still some problems for already existing storage subsystem within Kubernetes. Storage driver code is maintained in the Kubernetes core repository which is difficult to test. But beyond that, Kubernetes needs to give permissions to storage vendors to check code into the Kubernetes core repository. Ideally, that should be implemented externally."),(0,a.kt)("p",null,"CSI is designed to define an industry standard that will enable storage providers who enable CSI to be available across container orchestration systems that support CSI."),(0,a.kt)("p",null,"The figure below shows a kind of high-level Kubernetes archetypes integrated with CSI."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CSI",src:n(3665).Z,width:"1198",height:"764"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three new external components are introduced to decouple Kubernetes and Storage Provider logic"),(0,a.kt)("li",{parentName:"ul"},"Blue arrows present the conventional way to call against API Server"),(0,a.kt)("li",{parentName:"ul"},"Red arrows present gRPC to call against Volume Driver")),(0,a.kt)("h2",{id:"extend-csi-and-kubernetes"},"Extend CSI and Kubernetes"),(0,a.kt)("p",null,"In order to enable the feature of expanding volume atop Kubernetes, we should extend several components including CSI specification, \u201cin-tree\u201d volume plugin, external-provisioner and external-attacher."),(0,a.kt)("h2",{id:"extend-csi-spec"},"Extend CSI spec"),(0,a.kt)("p",null,"The feature of expanding volume is still undefined in latest CSI 0.2.0. The new 3 RPCs, including ",(0,a.kt)("inlineCode",{parentName:"p"},"RequiresFSResize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ControllerResizeVolume")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeResizeVolume"),", should be introduced."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jade"},"service Controller {\n  rpc CreateVolume (CreateVolumeRequest)\n    returns (CreateVolumeResponse) {}\n\u2026\u2026\n  rpc RequiresFSResize (RequiresFSResizeRequest)\n    returns (RequiresFSResizeResponse) {}\n  rpc ControllerResizeVolume (ControllerResizeVolumeRequest)\n    returns (ControllerResizeVolumeResponse) {}\n}\nservice Node {\n  rpc NodeStageVolume (NodeStageVolumeRequest)\n    returns (NodeStageVolumeResponse) {}\n\u2026\u2026\n  rpc NodeResizeVolume (NodeResizeVolumeRequest)\n    returns (NodeResizeVolumeResponse) {}\n}\n")),(0,a.kt)("h2",{id:"extend-in-tree-volume-plugin"},"Extend \u201cIn-Tree\u201d Volume Plugin"),(0,a.kt)("p",null,"In addition to the extend CSI specification, the ",(0,a.kt)("inlineCode",{parentName:"p"},"csiPlugin")," interface within Kubernetes should also implement ",(0,a.kt)("inlineCode",{parentName:"p"},"expandablePlugin"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"csiPlugin")," interface will expand ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," representing for ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpanderController"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jade"},"type ExpandableVolumePlugin interface {\nVolumePlugin\nExpandVolumeDevice(spec Spec, newSize resource.Quantity, oldSize resource.Quantity) (resource.Quantity, error)\nRequiresFSResize() bool\n}\n")),(0,a.kt)("h3",{id:"implement-volume-driver"},"Implement Volume Driver"),(0,a.kt)("p",null,"Finally, to abstract complexity of the implementation, we should hard code the separate storage provider management logic into the following functions which is well-defined in the CSI specification:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CreateVolume"),(0,a.kt)("li",{parentName:"ul"},"DeleteVolume"),(0,a.kt)("li",{parentName:"ul"},"ControllerPublishVolume"),(0,a.kt)("li",{parentName:"ul"},"ControllerUnpublishVolume"),(0,a.kt)("li",{parentName:"ul"},"ValidateVolumeCapabilities"),(0,a.kt)("li",{parentName:"ul"},"ListVolumes"),(0,a.kt)("li",{parentName:"ul"},"GetCapacity"),(0,a.kt)("li",{parentName:"ul"},"ControllerGetCapabilities"),(0,a.kt)("li",{parentName:"ul"},"RequiresFSResize"),(0,a.kt)("li",{parentName:"ul"},"ControllerResizeVolume")),(0,a.kt)("h2",{id:"demonstration"},"Demonstration"),(0,a.kt)("p",null,"Let\u2019s demonstrate this feature with a concrete user case."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create storage class for CSI storage provisioner"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: csi-qcfs\nparameters:\n  csiProvisionerSecretName: orain-test\n  csiProvisionerSecretNamespace: default\nprovisioner: csi-qcfsplugin\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy CSI Volume Driver including storage provisioner ",(0,a.kt)("inlineCode",{parentName:"p"},"csi-qcfsplugin")," across Kubernetes cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create PVC ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc")," which will be dynamically provisioned by storage class ",(0,a.kt)("inlineCode",{parentName:"p"},"csi-qcfs")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: qcfs-pvc\n  namespace: default\n....\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 300Gi\n  storageClassName: csi-qcfs\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create MySQL 5.7 instance to use PVC ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In order to mirror the exact same production-level scenario, there are actually two different types of workloads including:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Batch insert to make MySQL consuming more file system capacity"),(0,a.kt)("li",{parentName:"ul"},"Surge query request"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dynamically expand volume capacity through edit pvc ",(0,a.kt)("inlineCode",{parentName:"p"},"qcfs-pvc")," configuration"))))}m.isMDXComponent=!0},3665:function(e,t,n){t.Z=n.p+"assets/images/csi-39c1b84e98a6cd90485e1b5c5627f45c.png"}}]);