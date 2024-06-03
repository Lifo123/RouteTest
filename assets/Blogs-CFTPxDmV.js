const __vite__fileDeps=["assets/Footer-BCUzNWhV.js","assets/index-BVT5ioZx.js","assets/index-Xf9fjH8l.css","assets/Input-D90aUtGg.js","assets/Footer-CSKFUzeR.css","assets/Header-BQWWIiJB.js","assets/Header-DFzZvt8B.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as a,j as e,a as d,_ as l}from"./index-BVT5ioZx.js";const p=a.lazy(()=>l(()=>import("./Footer-BCUzNWhV.js"),__vite__mapDeps([0,1,2,3,4]))),f=a.lazy(()=>l(()=>import("./Header-BQWWIiJB.js"),__vite__mapDeps([5,1,2,6])));function w(){const[h,c]=a.useState([]),[n,u]=a.useState(null),i=a.useRef([]);return a.useEffect(()=>{const t=document.querySelectorAll("body .sec-article h2, body .sec-article h3"),s=[];let o=null;t.forEach(r=>{r.tagName==="H2"?(o={item:r.innerText,subitems:[]},s.push(o)):r.tagName==="H3"&&o&&o.subitems.push(r.innerText)}),c(s)},[]),a.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{const r=o.target.getAttribute("id");o.isIntersecting&&(u(`#${r.replace(/ /g,"-")}`),console.log(o),console.log("hola"))})},{rootMargin:"5% 0% -70% 0%",threshold:1});return i.current.forEach(s=>{t.observe(s)}),()=>{t.disconnect()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(a.Suspense,{fallback:e.jsx(d,{t:2}),children:e.jsx(f,{})}),e.jsxs("main",{className:"sec-article d-grid g-20 w-80 m-auto g-10 mt-40",children:[e.jsxs("section",{className:"f-col br-10 g-15",children:[e.jsx("h1",{id:"Post",children:"Blog Post"}),e.jsx("h2",{id:"Title",ref:t=>i.current[1]=t,children:"Title"}),e.jsx("p",{children:"Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages."}),e.jsxs("p",{children:["Using Markdown is ",e.jsx("code",{children:" different"})," than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different."]}),e.jsx("p",{children:"For example, to denote a heading, you add a number sign before it (e.g., # Heading One). Or to make a phrase bold, you add two asterisks before and after it (e.g., **this text is bold**). It may take a while to get used to seeing Markdown syntax in your text, especially if you’re accustomed to WYSIWYG applications. The screenshot below shows a Markdown file displayed in the Visual Studio Code text editor."}),e.jsx("blockquote",{children:e.jsx("p",{children:"The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions."})}),e.jsx("h2",{id:"Kicking-the-Tires",ref:t=>i.current[2]=t,children:"Kicking the Tires"}),e.jsxs("li",{children:[e.jsx("p",{children:"The best way to get started with Markdown is to use it. That’s easier than ever before thanks to a variety of free tools."}),e.jsxs("p",{children:["You don’t even need to ",e.jsx("a",{href:"/",children:"download"})," anything. There are several online Markdown editors that you can use to try writing in Markdown. Dillinger is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane."]})]}),e.jsx("p",{children:"The best way to get started with Markdown is to use it. That’s easier than ever before thanks to a variety of free tools."}),e.jsxs("p",{children:["You don’t even need to ",e.jsx("a",{href:"/",children:"download"})," anything. There are several online Markdown editors that you can use to try writing in Markdown. Dillinger is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane."]}),e.jsx("p",{children:e.jsx("img",{src:"https://mdg.imgix.net/assets/images/dillinger.png"})}),e.jsx("p",{children:"You’ll probably want to keep the Dillinger website open as you read through this guide. That way you can try the syntax as you learn about it. After you’ve become familiar with Markdown, you may want to use a Markdown application that can be installed on your desktop computer or mobile device."}),e.jsx("h2",{id:"How-Does-it-Work?",ref:t=>i.current[3]=t,children:"How Does it Work?"}),e.jsx("p",{children:"You might be wondering why people use Markdown instead of a WYSIWYG editor. Why write with Markdown when you can press buttons in an interface to format your text? As it turns out, there are several reasons why people use Markdown instead of WYSIWYG editors."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:["Markdown can be used for everything. People use it to create ",e.jsx("a",{href:"#Title",children:"websites"}),", ",e.jsx("a",{href:"#Post",children:"documents"}),", ",e.jsx("a",{href:"#notes",children:"notes"}),", ",e.jsx("a",{href:"#books",children:"books"}),", ",e.jsx("a",{href:"#presentations",children:"presentations"}),", ",e.jsx("a",{href:"#email",children:"email messages"}),", and ",e.jsx("a",{href:"#documentation",children:"technical documentation"}),"."]})}),e.jsx("li",{children:e.jsx("p",{children:"Markdown is portable. Files containing Markdown-formatted text can be opened using virtually any application. If you decide you don’t like the Markdown application you’re currently using, you can import your Markdown files into another Markdown application. That’s in stark contrast to word processing applications like Microsoft Word that lock your content into a proprietary file format."})}),e.jsx("li",{children:e.jsx("p",{children:"Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system."})}),e.jsx("li",{children:e.jsx("p",{children:"Markdown is future proof. Even if the application you’re using stops working at some point in the future, you’ll still be able to read your Markdown-formatted text using a text editing application. This is an important consideration when it comes to books, university theses, and other milestone documents that need to be preserved indefinitely."})}),e.jsx("li",{children:e.jsxs("p",{children:["Markdown is everywhere. Websites like ",e.jsx("a",{href:"/tools/reddit/",children:"Reddit"})," and GitHub support Markdown, and lots of desktop and web-based applications support it."]})})]}),e.jsx("p",{children:"Dillinger makes writing in Markdown easy because it hides the stuff happening behind the scenes, but it’s worth exploring how the process works in general."}),e.jsx("p",{children:"When you write in Markdown, the text is stored in a plaintext file that has an .md or .markdown extension. But then what? How is your Markdown-formatted file converted into HTML or a print-ready document?"}),e.jsx("p",{children:"The short answer is that you need a Markdown application capable of processing the Markdown file. There are lots of applications available — everything from simple scripts to desktop applications that look like Microsoft Word. Despite their visual differences, all of the applications do the same thing. Like Dillinger, they all convert Markdown-formatted text to HTML so it can be displayed in web browsers."}),e.jsx("p",{children:e.jsx("img",{src:"https://mdg.imgix.net/assets/images/markdown-flowchart.png"})}),e.jsx("h2",{id:"Whats-Markdown-Good-For?",ref:t=>i.current[4]=t,children:"Whats Markdown Good For?"}),e.jsx("p",{children:"Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents."}),e.jsx("h3",{id:"Websites",ref:t=>i.current[5]=t,children:"Websites"}),e.jsx("p",{children:"Markdown was designed for the web, so it should come as no surprise that there are plenty of applications specifically designed for creating website content."}),e.jsx("p",{children:"If you’re familiar with HTML, CSS, and version control, check out Jekyll, a popular static site generator that takes Markdown files and builds an HTML website. One advantage to this approach is that GitHub Pages provides free hosting for Jekyll-generated websites. If Jekyll isn’t your cup of tea, just pick one of the many other static site generators available."}),e.jsx("h3",{id:"Collaboration",ref:t=>i.current[6]=t,children:"Collaboration"}),e.jsxs("p",{children:["Collaboration and team messaging applications are a popular way of communicating with coworkers and friends at work and home. These applications don’t utilize all of Markdown’s features, but the features they do provide are fairly useful. For example, the ability to bold and italicize text without using the WYSIWYG interface is pretty handy. ",e.jsx("a",{href:"/tools/slack/",children:"Slack"}),", ",e.jsx("a",{href:"/tools/discord/",children:"Discord"}),", ",e.jsx("a",{href:"/tools/wiki-js/",children:"Wiki.js"}),", and ",e.jsx("a",{href:"/tools/mattermost/",children:"Mattermost"})," are all good collaboration applications."]}),e.jsx("h3",{id:"Documentation",ref:t=>i.current[7]=t,children:"Documentation"}),e.jsxs("p",{children:["Markdown is a natural fit for technical documentation. Companies like GitHub are increasingly switching to Markdown for their documentation — check out their ",e.jsx("a",{href:"https://github.com/blog/1939-how-github-uses-github-to-document-github",children:"blog post"})," about how they migrated their Markdown-formatted documentation to ",e.jsx("a",{href:"/tools/jekyll/",children:"Jekyll"}),". If you write documentation for a product or service, take a look at these handy tools:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://readthedocs.org",children:"Read the Docs"})," can generate a documentation website from your open source Markdown files. Just connect your GitHub repository to their service and push — Read the Docs does the rest. They also have a ",e.jsx("a",{href:"https://readthedocs.com/",children:"service for commercial entities"}),"."]}),e.jsxs("li",{children:[e.jsx("a",{href:"/tools/mkdocs/",children:"MkDocs"})," is a fast and simple static site generator that’s geared towards building project documentation. Documentation source files are written in Markdown and configured with a single YAML configuration file. MkDocs has several ",e.jsx("a",{href:"https://www.mkdocs.org/user-guide/styling-your-docs/",children:"built in themes"}),", including a port of the ",e.jsx("a",{href:"https://readthedocs.org/",children:"Read the Docs"})," documentation theme for use with MkDocs. One of the newest themes is ",e.jsx("a",{href:"https://squidfunk.github.io/mkdocs-material/",children:"MkDocs Material"}),"."]}),e.jsxs("li",{children:[e.jsx("a",{href:"/tools/docusaurus/",children:"Docusaurus"})," is a static site generator designed exclusively for creating documentation websites. It supports translations, search, and versioning."]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://vuepress.vuejs.org/",children:"VuePress"})," is a static site generator powered by ",e.jsx("a",{href:"https://vuejs.org/",children:"Vue"})," and optimized for writing technical documentation."]}),e.jsxs("li",{children:[e.jsx("a",{href:"/tools/jekyll/",children:"Jekyll"})," was mentioned earlier in the section on websites, but it’s also a good option for generating a documentation website from Markdown files. If you go this route, be sure to check out the ",e.jsx("a",{href:"https://idratherbewriting.com/documentation-theme-jekyll/",children:"Jekyll documentation theme"}),"."]})]}),e.jsx("h2",{id:"Wasa",ref:t=>i.current[8]=t,children:"Wasa"}),e.jsx("p",{children:"Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages."}),e.jsxs("p",{children:["Using Markdown is ",e.jsx("code",{children:" different"})," than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different."]})]}),e.jsx("aside",{className:"sec-TOC br-10",children:e.jsx("ul",{className:"f-col",children:h.map((t,s)=>e.jsxs("li",{children:[e.jsx("a",{href:`#${t.item.replace(/ /g,"-")}`,className:n===`#${t.item.replace(/ /g,"-")}`?"toc-active":"",children:t.item}),t.subitems.length>0&&e.jsx("ul",{children:t.subitems.map((o,r)=>e.jsx("a",{href:`#${o.replace(/ /g,"-")}`,className:n===`#${o.replace(/ /g,"-")}`?"toc-active":"",children:o},r))})]},s))})})]}),e.jsx(a.Suspense,{fallback:e.jsx(d,{t:2}),children:e.jsx(p,{})})]})}export{w as default};