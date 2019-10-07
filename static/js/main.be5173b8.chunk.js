(window["webpackJsonpmattermost-themes"]=window["webpackJsonpmattermost-themes"]||[]).push([[0],{27:function(e,n,t){e.exports=t(63)},32:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),i=t.n(o),f=(t(32),t(2)),l=t(1);function d(){var e=Object(f.a)(["\n        padding: 15px;\n        background-color: #454545;\n        color: #fff;\n        display: flex;\n        flex-direction: row;\n        font-size: 2rem;\n\n        h3 {\n            margin: 0;\n\n            span:first-child {\n                color: #12d7e6;            \n            }\n        }\n    "]);return d=function(){return e},e}var c=function(){var e=l.c.div(d());return a.a.createElement(e,null,a.a.createElement("h3",null,a.a.createElement("span",null,"Mattermost "),a.a.createElement("span",null,"Themes")))},b=t(24),s=t(22),g=t.n(s);function m(){var e=Object(f.a)(["\n      height: 100%;\n      background-color: #454545;\n      padding: 3rem;\n    "]);return m=function(){return e},e}var u=function(e){var n=l.c.div(m()),t={dots:!0,infinite:!1,lazyLoad:!0,speed:500,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:2400,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]};return e.isOnboarding&&(t.slidesToShow=1,t.slidesToScroll=1,t.responsive=[]),a.a.createElement(n,null,a.a.createElement(g.a,t,e.children))};function h(){var e=Object(f.a)(["\n        display: flex;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        justify-content: center;\n        align-items: center;\n\n        &:hover {\n            opacity: 1;\n            background: ",";\n        }\n\n        span {\n            font-size: 2rem;\n            color: ",";\n        }\n    "]);return h=function(){return e},e}function C(){var e=Object(f.a)(["\n        background: url(","/img/",");\n        background-repeat: no-repeat;\n        background-size: cover;\n        cursor: pointer;\n        width: 100%;\n        height: 30rem;\n    "]);return C=function(){return e},e}function B(){var e=Object(f.a)(["\n        color: ",";\n    "]);return B=function(){return e},e}function x(){var e=Object(f.a)(["\n        display: flex;\n        width: 100%;\n        height: 3rem;\n        justify-content: center;\n        align-items: center;\n        background: ",";\n    "]);return x=function(){return e},e}function T(){var e=Object(f.a)(["\n        display: flex;\n        flex-direction: column;\n        border-radius: 1.2rem;\n        overflow: hidden;\n        margin-right: 2rem;\n    "]);return T=function(){return e},e}var p=function(e){var n=a.a.createRef(),t=l.c.div(T()),r=l.c.div(x(),e.theme.sidebarBg),o=l.c.p(B(),e.theme.sidebarText),i=l.c.div(C(),"/mattermost-themes",e.image),f=l.c.div(h(),function(e,n){var t=e.replace("#",""),r=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16);return"rgba(".concat(r,", ").concat(a,", ").concat(o,", ").concat(n,")")}(e.theme.sidebarBg,.8),e.theme.sidebarText);return a.a.createElement(t,{onClick:function(){var t=JSON.stringify(e.theme);t=(t=t.replace(" ","")).replace("\n","");var r=document.createElement("textarea");r.value=t,r.readOnly=!0,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),n.current.innerHTML="Copied!"}},a.a.createElement(r,null,a.a.createElement(o,null,e.name)),a.a.createElement(i,null,a.a.createElement(f,{onMouseLeave:function(){n.current.innerHTML="Copy style"}},a.a.createElement("span",{ref:n},"Copy style"))))},v=t(6),H=t(13),k=t.n(H);function E(){var e=Object(f.a)(["\n        display: flex;\n        flex: 0;\n        justify-content: flex-end;\n        padding: 20px;\n        margin: 0;\n        cursor: pointer;\n        color: #12d7e6;\n        text-decoration: underline;\n        font-size: 1.5rem;\n    "]);return E=function(){return e},e}function y(){var e=Object(f.a)(["\n            width: auto;\n        "]);return y=function(){return e},e}function w(){var e=Object(f.a)(["\n        margin: 0 auto;\n        width: 100%;\n        height: auto;\n\n        ","\n    "]);return w=function(){return e},e}function I(){var e=Object(f.a)(["\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n    "]);return I=function(){return e},e}function j(){var e=Object(f.a)(["\n        color: #fff;\n        text-align: center;\n        font-size: 3rem;\n    "]);return j=function(){return e},e}function F(){var e=Object(f.a)(["\n        height: 100%;\n    "]);return F=function(){return e},e}function A(){var e=Object(f.a)(["\n        flex: 1;\n    "]);return A=function(){return e},e}k.a.setAppElement("#root");var O=function(e){var n=l.c.div(A()),t=l.c.div(F()),r=l.c.p(j()),o=l.c.div(I()),i=l.c.img(w(),Object(v.a)("tablet")(y())),f=l.c.p(E()),d={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center"},content:{padding:0,border:"none",background:"#454545",display:"flex",flexDirection:"column",width:"auto",maxWidth:750,top:"initial",bottom:"initial",left:window.innerWidth<=750?10:"initial",right:window.innerWidth<=750?10:"initial"}};return a.a.createElement(k.a,{isOpen:e.isModalOpen,onRequestClose:e.closeModal,style:d},a.a.createElement(f,{onClick:e.closeModal},"Close tutorial"),a.a.createElement(n,null,a.a.createElement(u,{isOnboarding:!0},a.a.createElement(t,null,a.a.createElement(r,null,"1. ",a.a.createElement("strong",null,"Click on a thumbnail "),"to copy it to your clipboard."),a.a.createElement(o,null,a.a.createElement(i,{src:"".concat("/mattermost-themes","/img/onboarding/onboarding_1.png")}))),a.a.createElement(t,null,a.a.createElement(r,null,"2. Navigate to your ",a.a.createElement("strong",null,"account settings "),"on any Mattermost server."),a.a.createElement(o,null,a.a.createElement(i,{src:"".concat("/mattermost-themes","/img/onboarding/onboarding_2.png")}))),a.a.createElement(t,null,a.a.createElement(r,null,"3. Go to the ",a.a.createElement("strong",null,"Display menu, "),"and open the ",a.a.createElement("strong",null,"Themes tab.")),a.a.createElement(o,null,a.a.createElement(i,{src:"".concat("/mattermost-themes","/img/onboarding/onboarding_3.png")}))),a.a.createElement(t,null,a.a.createElement(r,null,"4. Select ",a.a.createElement("strong",null,"Custom Theme, "),"paste the selected theme ",a.a.createElement("strong",null,"over the textbox, "),"and ",a.a.createElement("strong",null,"save!")),a.a.createElement(o,null,a.a.createElement(i,{src:"".concat("/mattermost-themes","/img/onboarding/onboarding_4.png")}))))))},U=[{name:"Arc",thumbnailUrl:"arc.png",type:"dark",theme:{sidebarBg:"#373d48",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#4a5664",sidebarTextActiveBorder:"#5294e2",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#303641",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#5294e2",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#4d5667",centerChannelColor:"#ffffff",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#fff2bb",mentionHighlightLink:"#2f81b7",codeTheme:"github",mentionBg:"#5294e2"}},{name:"Blue Ocean",thumbnailUrl:"blueOcean.png",type:"light",theme:{sidebarBg:"#3686be",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#2e3234",sidebarTextActiveBorder:"#7db461",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#215f8b",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#7db461",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#fff2bb",mentionHighlightLink:"#2f81b7",codeTheme:"github",mentionBg:"#215F8B"}},{name:"devRant",thumbnailUrl:"devRant.png",type:"dark",theme:{sidebarBg:"#383952",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#f99a66",sidebarTextActiveBorder:"#f99a66",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#54556e",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#48c14a",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#c14857",mentionColor:"#ffffff",centerChannelBg:"#54556e",centerChannelColor:"#ffffff",newMessageSeparator:"#f80",linkColor:"#aaaab8",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#c14857",mentionHighlightLink:"#e0b333",codeTheme:"solarized-dark",mentionBg:"#c14857"}},{name:"Dracula",thumbnailUrl:"dracula.png",type:"dark",theme:{sidebarBg:"#282a36",sidebarText:"#f8f8f2",sidebarUnreadText:"#f8f8f2",sidebarTextHoverBg:"#6272a4",sidebarTextActiveBorder:"#8be9fd",sidebarTextActiveColor:"#8be9fd",sidebarHeaderBg:"#44475a",sidebarHeaderTextColor:"#f8f8f2",onlineIndicator:"#50fa7b",awayIndicator:"#ffb86c",dndIndicator:"#f74343",mentionBj:"#ff79c6",mentionColor:"#282a36",centerChannelBg:"#282a36",centerChannelColor:"#f8f8f2",newMessageSeparator:"#ffb86c",linkColor:"#8be9fd",buttonBg:"#ff79c6",buttonColor:"#282a36",errorTextColor:"#ff5555",mentionHighlightBg:"#282a36",mentionHighlightLink:"#ffb86c",codeTheme:"monokai",mentionBg:"#ff79c6"}},{name:"Eighties Light",thumbnailUrl:"eightiesLight.png",type:"light",theme:{sidebarBg:"#f2f0ec",sidebarText:"#515151",sidebarUnreadText:"#515151",sidebarTextHoverBg:"#b8b8b8",sidebarTextActiveBorder:"#f2777a",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#e8e6df",sidebarHeaderTextColor:"#515151",onlineIndicator:"#99cc99",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#fff2bb",mentionHighlightLink:"#2f81b7",codeTheme:"github",mentionBg:"#66cccc"}},{name:"Ember.js",thumbnailUrl:"emberJs.png",type:"light",theme:{sidebarBg:"#faf4f1",sidebarText:"#717171",sidebarUnreadText:"#717171",sidebarTextHoverBg:"#e5dbd6",sidebarTextActiveBorder:"#e77562",sidebarTextActiveColor:"#e77562",sidebarHeaderBg:"#faf4f1",sidebarHeaderTextColor:"#717171",onlineIndicator:"#e46651",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#e46651",mentionHighlightLink:"#2f81b7",codeTheme:"github",mentionBg:"#E46651"}},{name:"Facebook",thumbnailUrl:"facebook.png",type:"light",theme:{sidebarBg:"#4e69a2",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#38528b",sidebarTextActiveBorder:"#38528b",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#38528b",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#1fad38",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#385898",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#fff9d7",mentionHighlightLink:"#385898",codeTheme:"github",mentionBg:"#CD2323"}},{name:"GitHub",thumbnailUrl:"github.png",type:"light",theme:{sidebarBg:"#fafbfc",sidebarText:"#24292e",sidebarUnreadText:"#666666",sidebarTextHoverBg:"#ffefc6",sidebarTextActiveBorder:"#e9f0f7",sidebarTextActiveColor:"#1d4880",sidebarHeaderBg:"#24292e",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#28a745",awayIndicator:"#f1e05a",dndIndicator:"#e34c26",mentionBj:"#0366d6",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#24292e",newMessageSeparator:"#f80",linkColor:"#0366d6",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#ffefc6",mentionHighlightLink:"#0366d6",codeTheme:"github",mentionBg:"#0366d6"}},{name:"Gruvbox Dark",thumbnailUrl:"gruvboxDark.png",type:"dark",theme:{awayIndicator:"#fabd2f",buttonBg:"#689d6a",buttonColor:"#ebdbb2",centerChannelBg:"#3c3836",centerChannelColor:"#ebdbb2",codeTheme:"monokai",errorTextColor:"#fb4934",linkColor:"#83a598",mentionBj:"#b16286",mentionColor:"#fbf1c7",mentionHighlightBg:"#d65d0e",mentionHighlightLink:"#fbf1c7",newMessageSeparator:"#d65d0e",onlineIndicator:"#b8bb26",sidebarBg:"#282828",sidebarHeaderBg:"#1d2021",sidebarHeaderTextColor:"#ebdbb2",sidebarText:"#ebdbb2",sidebarTextActiveBorder:"#d65d0e",sidebarTextActiveColor:"#fbf1c7",sidebarTextHoverBg:"#d65d0e",sidebarUnreadText:"#fe8019"}},{name:"Hacktoberfest 2019",thumbnailUrl:"hacktoberfest.png",type:"dark",theme:{sidebarBg:"#152347",sidebarText:"#adb5c9",sidebarUnreadText:"#d8dee9",sidebarTextHoverBg:"#1d2e5c",sidebarTextActiveBorder:"#a11ec6",sidebarTextActiveColor:"#a11ec6",sidebarHeaderBg:"#1d2e5c",sidebarHeaderTextColor:"#adb5c9",onlineIndicator:"#92eaff",awayIndicator:"#fff922",dndIndicator:"#ff9353",mentionBj:"#ff06a6",mentionColor:"#ffffff",centerChannelBg:"#1d2e5c",centerChannelColor:"#adb5c9",newMessageSeparator:"#ff06a6",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#fff922",mentionHighlightLink:"#a11ec6",codeTheme:"solarized-dark",mentionBg:"#ff06a6"}},{name:"Light Purple",thumbnailUrl:"lightPurple.png",type:"light",theme:{sidebarBg:"#e3dae6",sidebarText:"#594275",sidebarUnreadText:"#594275",sidebarTextHoverBg:"#eee8d5",sidebarTextActiveBorder:"#5a30b0",sidebarTextActiveColor:"#553977",sidebarHeaderBg:"#b49fc2",sidebarHeaderTextColor:"#594275",onlineIndicator:"#52a84d",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#fdf8ff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#553977",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#eee8d5",mentionHighlightLink:"#594275",codeTheme:"github",mentionBg:"#bd72cc"}},{name:"Monokai",thumbnailUrl:"monokai.png",type:"light",theme:{awayIndicator:"#B8B884",buttonBg:"#90AD58",buttonColor:"#FFFFFF",centerChannelBg:"#FFFFFF",centerChannelColor:"#444444",codeTheme:"monokai",linkColor:"#90AD58",mentionBg:"#7E9949",mentionColor:"#FFFFFF",mentionHighlightBg:"#54850C",mentionHighlightLink:"#FFFFFF",newMessageSeparator:"#90AD58",onlineIndicator:"#99CB3F",sidebarBg:"#262626",sidebarHeaderBg:"#363636",sidebarHeaderTextColor:"#FFFFFF",sidebarText:"#FFFFFF",sidebarTextActiveBorder:"#7E9949",sidebarTextActiveColor:"#FFFFFF",sidebarTextHoverBg:"#525252",sidebarUnreadText:"#CCCCCC"}},{name:"Nord",thumbnailUrl:"nord.png",type:"dark",theme:{sidebarBg:"#2e3440",sidebarText:"#d8dee9",sidebarUnreadText:"#d8dee9",sidebarTextHoverBg:"#3b4252",sidebarTextActiveBorder:"#88c0d0",sidebarTextActiveColor:"#88c0d0",sidebarHeaderBg:"#3b4252",sidebarHeaderTextColor:"#d8dee9",onlineIndicator:"#a3be8c",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#3b4252",centerChannelColor:"#ffffff",newMessageSeparator:"#88c0d0",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#81a1c1",mentionHighlightLink:"#2f81b7",codeTheme:"solarized-dark",mentionBg:"#81A1C1"}},{name:"One Dark",thumbnailUrl:"oneDark.png",type:"dark",theme:{sidebarBg:"#21252b",sidebarText:"#abb2bf",sidebarUnreadText:"#abb2bf",sidebarTextHoverBg:"#3a3f4b",sidebarTextActiveBorder:"#4d78cc",sidebarTextActiveColor:"#d7dae0",sidebarHeaderBg:"#282c34",sidebarHeaderTextColor:"#abb2bf",onlineIndicator:"#98c379",awayIndicator:"#d19a66",dndIndicator:"#be5046",mentionBj:"#98c379",mentionColor:"#ffffff",centerChannelBg:"#282c34",centerChannelColor:"#abb2bf",newMessageSeparator:"#c67add",linkColor:"#61afef",buttonBg:"#4d78cc",buttonColor:"#ffffff",errorTextColor:"#f44747",mentionHighlightBg:"#525a69",mentionHighlightLink:"#61afef",codeTheme:"monokai",mentionBg:"#98c379"}},{name:"Python",thumbnailUrl:"python.png",type:"light",theme:{sidebarBg:"#306998",sidebarText:"#f4f4f4",sidebarUnreadText:"#f4f4f4",sidebarTextHoverBg:"#5a9fd4",sidebarTextActiveBorder:"#ffd43b",sidebarTextActiveColor:"#f4f4f4",sidebarHeaderBg:"#ffd43b",sidebarHeaderTextColor:"#575757",onlineIndicator:"#6eca5f",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#3776ab",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#ffd43b",mentionHighlightLink:"#575757",codeTheme:"github",mentionBg:"#FFD43B"}},{name:"Reddit Dark",thumbnailUrl:"redditDark.png",type:"dark",theme:{sidebarBg:"#030303",sidebarText:"#818384",sidebarUnreadText:"#959697",sidebarTextHoverBg:"#1a1a1b",sidebarTextActiveBorder:"#ff3000",sidebarTextActiveColor:"#ff3000",sidebarHeaderBg:"#1a1a1b",sidebarHeaderTextColor:"#818384",onlineIndicator:"#38978d",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#0079d3",mentionColor:"#ffffff",centerChannelBg:"#030303",centerChannelColor:"#818384",newMessageSeparator:"#ff7500",linkColor:"#ff4500",buttonBg:"#0079d3",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#ff7500",mentionHighlightLink:"#0079d3",codeTheme:"solarized-dark",mentionBg:"#0079d3"}},{name:"Reddit Light",thumbnailUrl:"redditLight.png",type:"light",theme:{sidebarBg:"#f7f7f7",sidebarText:"#336699",sidebarUnreadText:"#336699",sidebarTextHoverBg:"#b3cce6",sidebarTextActiveBorder:"#b3cce6",sidebarTextActiveColor:"#ff3000",sidebarHeaderBg:"#cee3f8",sidebarHeaderTextColor:"#336699",onlineIndicator:"#38978d",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#ff7500",linkColor:"#ff4500",buttonBg:"#0079d3",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#ff7500",mentionHighlightLink:"#336699",codeTheme:"github",mentionBg:"#ff7500"}},{name:"Retro Terminal",thumbnailUrl:"retroTerminal.png",type:"dark",theme:{sidebarBg:"#000000",sidebarText:"#00ff00",sidebarUnreadText:"#00ff00",sidebarTextHoverBg:"#007500",sidebarTextActiveBorder:"#006600",sidebarTextActiveColor:"#00ff00",sidebarHeaderBg:"#000000",sidebarHeaderTextColor:"#00ff00",onlineIndicator:"#00ff00",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#000000",centerChannelColor:"#00ff00",newMessageSeparator:"#f80",linkColor:"#007500",buttonBg:"#006600",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#007500",mentionHighlightLink:"#ffffff",codeTheme:"solarized-dark",mentionBg:"#ff0000"}},{name:"Solarized Dark",thumbnailUrl:"solarizedDark.png",type:"dark",theme:{awayIndicator:"#E0B333",buttonBg:"#859900",buttonColor:"#fdf6e3",centerChannelBg:"#073642",centerChannelColor:"#93a1a1",codeTheme:"solarized-dark",linkColor:"#268bd2",mentionBj:"#dc322f",mentionColor:"#ffffff",mentionHighlightBg:"#d33682",mentionHighlightLink:"#268bd2",newMessageSeparator:"#cb4b16",onlineIndicator:"#2AA198",sidebarBg:"#073642",sidebarHeaderBg:"#002B36",sidebarHeaderTextColor:"#FDF6E3",sidebarText:"#FDF6E3",sidebarTextActiveBorder:"#d33682",sidebarTextActiveColor:"#FDF6E3",sidebarTextHoverBg:"#CB4B16",sidebarUnreadText:"#FDF6E3",errorTextColor:"#dc322f"}},{name:"Solarized Light",thumbnailUrl:"solarizedLight.png",type:"light",theme:{sidebarBg:"#fdf6e3",sidebarText:"#657b83",sidebarUnreadText:"#073642",sidebarTextHoverBg:"#eee8d5",sidebarTextActiveBorder:"#657b83",sidebarTextActiveColor:"#587e75",sidebarHeaderBg:"#eee8d5",sidebarHeaderTextColor:"#657b83",onlineIndicator:"#859900",awayIndicator:"#b58900",dndIndicator:"#cb4b16",mentionBj:"#657b83",mentionColor:"#eee8d5",centerChannelBg:"#fdf6e3",centerChannelColor:"#657b83",newMessageSeparator:"#eee8d5",linkColor:"#859900",buttonBg:"#587e75",buttonColor:"#eee8d5",errorTextColor:"#cb4b16",mentionHighlightBg:"#d33682",mentionHighlightLink:"#eee8d5",codeTheme:"solarized-light",mentionBg:"#d33682"}},{name:"Vue.js",thumbnailUrl:"vueJs.png",type:"light",theme:{sidebarBg:"#34495e",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#42b983",sidebarTextActiveBorder:"#42b983",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#42b983",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#2e835d",awayIndicator:"#e0b333",dndIndicator:"#f74343",mentionBj:"#ffffff",mentionColor:"#ffffff",centerChannelBg:"#ffffff",centerChannelColor:"#333333",newMessageSeparator:"#f80",linkColor:"#2389d7",buttonBg:"#26a970",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#42b983",mentionHighlightLink:"#ffffff",codeTheme:"github",mentionBg:"#42B983"}},{name:"Windows 95",thumbnailUrl:"windows95.png",type:"light",theme:{sidebarBg:"#327c7e",sidebarText:"#ffffff",sidebarUnreadText:"#ffffff",sidebarTextHoverBg:"#001f7e",sidebarTextActiveBorder:"#001f7e",sidebarTextActiveColor:"#ffffff",sidebarHeaderBg:"#001f7e",sidebarHeaderTextColor:"#ffffff",onlineIndicator:"#00ff00",awayIndicator:"#ffff00",dndIndicator:"#f74343",mentionBj:"#ff00ff",mentionColor:"#ffffff",centerChannelBg:"#c3c7cb",centerChannelColor:"#000000",newMessageSeparator:"#f80",linkColor:"#0000ff",buttonBg:"#0000ff",buttonColor:"#ffffff",errorTextColor:"#fd5960",mentionHighlightBg:"#0000ff",mentionHighlightLink:"#00ffff",codeTheme:"github",mentionBg:"#ff00ff"}}];function S(){var e=Object(f.a)(["\n        margin-left: 2rem;\n        border-radius: 4px;\n        border: none;\n        background-color: #12d7e6;\n        padding: 10px;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #3ce3f0;\n        }\n    "]);return S=function(){return e},e}function M(){var e=Object(f.a)(["\n        font-weight: bold;\n    "]);return M=function(){return e},e}function L(){var e=Object(f.a)(["\n        line-height: 1.5;\n        padding-inline-start: 2rem;\n        margin-left: 2rem;\n    "]);return L=function(){return e},e}function D(){var e=Object(f.a)(["\n        font-weight: 400;\n        text-indent: 2rem;\n        font-size: 2.3rem;\n    "]);return D=function(){return e},e}function z(){var e=Object(f.a)(["\n        margin-top: 2rem;\n    "]);return z=function(){return e},e}function R(){var e=Object(f.a)(["\n        display: flex;\n        flex-direction: column;\n        font-size: 1.5rem;\n        color: #fff;\n    "]);return R=function(){return e},e}var W=function(){var e=Object(r.useState)(!1),n=Object(b.a)(e,2),t=n[0],o=n[1];Object(r.useEffect)((function(){localStorage.getItem("mmthemesOnboardingCompleted")||o(!0)}));var i=l.c.div(R()),f=l.c.div(z()),d=l.c.h3(D()),c=l.c.ol(L()),s=l.c.span(M()),g=l.c.button(S()),m=[],h=[];return U.forEach((function(e){var n=a.a.createElement(p,{key:e.name,name:e.name,image:e.thumbnailUrl,theme:e.theme});"light"===e.type?m.push(n):h.push(n)})),a.a.createElement(i,null,a.a.createElement(O,{isModalOpen:t,closeModal:function(){localStorage.setItem("mmthemesOnboardingCompleted","true"),o(!1)},contentLabel:"How To"}),a.a.createElement(f,null,a.a.createElement(d,null,"How to:"),a.a.createElement(c,null,a.a.createElement("li",null,a.a.createElement(s,null,"Click on a thumbnail "),"to copy it to your clipboard"),a.a.createElement("li",null,"Go to a Mattermost server of your choice"),a.a.createElement("li",null,"Navigate to the ",a.a.createElement(s,null,"Main Menu's Account Settings")),a.a.createElement("li",null,"Select ",a.a.createElement(s,null,"Display "),"and toggle the ",a.a.createElement(s,null,"Custom "),"button"),a.a.createElement("li",null,a.a.createElement(s,null,"Paste the theme "),"inside the text box and ",a.a.createElement(s,null,"Save"))),a.a.createElement(g,{onClick:function(){localStorage.removeItem("mmthemesOnboardingCompleted"),o(!0)}},"View detailed tutorial")),a.a.createElement(f,null,a.a.createElement(d,null,"Light Themes"),a.a.createElement(u,null,m)),a.a.createElement(f,null,a.a.createElement(d,null,"Dark Themes"),a.a.createElement(u,null,h)))},G=t(25);function J(){var e=Object(f.a)(["\n        color: #d4d4d4;\n        display: flex;\n        flex-direction: column;\n        line-height: 1.5;\n        align-items: center;\n\n        span {\n            margin-top: 2rem;\n        }\n\n        span > a {\n            text-decoration: none;\n            color: #12d7e6;\n        }\n    "]);return J=function(){return e},e}function N(){var e=Object(f.a)(["\n      height: 4.5rem;\n      color: #d4d4d4;\n      padding-right: 1.5rem;\n    "]);return N=function(){return e},e}function P(){var e=Object(f.a)(["\n      display: flex;\n      flex-direction: row;\n      text-decoration: none;\n      color: #d4d4d4;\n      margin-left: 2rem;\n\n      &:hover {\n        color: #fff;\n\n        svg {\n          color: #fff;\n        }\n      }\n    "]);return P=function(){return e},e}function V(){var e=Object(f.a)(["\n            flex-direction: row;\n        "]);return V=function(){return e},e}function _(){var e=Object(f.a)(["\n        margin-top: 5rem;\n        padding: 1.5rem;\n        background-color: #454545;\n        display: flex;\n        flex-direction: column;\n        font-size: 1.7rem;\n        justify-content: space-between;\n        align-items: center;\n        min-height: 10rem;\n\n        ","\n\n        span {\n            text-decoration: none;\n            color: #d4d4d4;\n            \n        }\n\n        span > a {\n            color: blue;\n        }\n    "]);return _=function(){return e},e}var q=function(){var e=l.c.div(_(),Object(v.a)("tablet")(V())),n=l.c.a(P()),t=Object(l.c)(G.a)(N()),r=l.c.div(J());return a.a.createElement(e,null,a.a.createElement(n,{href:"https://github.com/avasconcelos114/mattermost-themes"},a.a.createElement("span",null,a.a.createElement(t,null)),a.a.createElement("p",null,"View on GitHub")),a.a.createElement(r,null,a.a.createElement("span",null,"This is an open source initiative not affiliated with ",a.a.createElement("a",{href:"https://mattermost.com"},"Mattermost Inc.")),a.a.createElement("span",null,"Created for the ",a.a.createElement("a",{href:"https://hacktoberfest.digitalocean.com/"},"2019 Hacktoberfest "),"by",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/avasconcelos114/"},"Andre Vasconcelos")," & ",a.a.createElement("a",{href:"https://github.com/josephk96"},"Soo Hwan Kim"))))};t(60),t(61);function K(){var e=Object(f.a)(["\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        font-size: 62.5%;\n        background-color: #515151;\n    }\n"]);return K=function(){return e},e}var $=Object(l.a)(K());var Q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement($,null),a.a.createElement(c,null),a.a.createElement(W,null),a.a.createElement(q,null))};t(14),t(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.be5173b8.chunk.js.map