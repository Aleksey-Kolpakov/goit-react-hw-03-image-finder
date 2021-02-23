(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2MEQK","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__20ozh"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__uLS00",Modal:"Modal_Modal__gtenr"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2d_1v"}},25:function(e,t,a){e.exports={Button:"Button_Button__10kML"}},26:function(e,t,a){e.exports={App:"App_App__1ooBU"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=a(10),i=a(4),l=a(5),u=a(7),h=a(6),m=a(12),d=a.n(m),p=a(23),b=a.n(p),g=(a(69),"19945506-a6680bfa60c04d980657bbe54"),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return d.a.get("https://pixabay.com/api/?key=".concat(g,"&q=").concat(e,"&per_page=12&page=").concat(t)).then((function(e){return e.data.hits}))},f=a(8),y=a.n(f),O=a(1),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuerry:""},e.handleChange=function(t){var a=t.target;e.setState({searchQuerry:a.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuerry),e.setState({searchQuerry:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("header",{className:y.a.Searchbar,children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:y.a["SearchForm-button"],children:Object(O.jsx)("span",{className:y.a["SearchForm-button-label"],children:"Search"})}),Object(O.jsx)("input",{className:y.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuerry",value:this.state.searchQuerry,onChange:this.handleChange})]})})}}]),a}(n.Component),S=a(24),_=a.n(S),x=function(e){var t=e.children;return Object(O.jsx)("ul",{className:_.a.ImageGallery,children:t})},I=a(13),M=a.n(I),w=function(e){var t=e.src,a=e.id,n=e.openImage;return Object(O.jsx)("li",{onClick:function(){return n(a)},className:M.a.ImageGalleryItm,children:Object(O.jsx)("img",{src:t,alt:"",className:M.a["ImageGalleryItem-image"]})})},N=a(25),k=a.n(N),F=function(e){var t=e.loadMore;return Object(O.jsx)("button",{onClick:t,className:k.a.Button,type:"button",children:"Load more"})},C=a(14),L=a.n(C),Q=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){t.target===t.currentTarget&&e.props.onCloseModal()},e.handleKeydown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.src;return Object(o.createPortal)(Object(O.jsx)("div",{onClick:this.closeModal,className:L.a.Overlay,children:Object(O.jsx)("div",{className:L.a.Modal,children:Object(O.jsx)("img",{src:e,alt:""})})}),Q)}}]),a}(n.Component),T=a(26),A=a.n(T),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuerry:"",pageNumber:1,imageToOpen:"",isLoading:!1},e.closeModal=function(){e.setState({imageToOpen:""})},e.searchImages=function(t){e.setState({searchQuerry:t})},e.openImage=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({imageToOpen:a.largeImageURL})},e.loadMore=function(){var t=e.state,a=t.searchQuerry,n=t.pageNumber;e.setState({isLoading:!0}),j(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),pageNumber:e.pageNumber+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=(n.images,n.searchQuerry);n.imageToOpen;t.searchQuerry!==r&&(this.setState({isLoading:!0}),j(r).then((function(e){return a.setState({images:Object(s.a)(e),pageNumber:a.state.pageNumber+1})})).finally((function(){return a.setState({isLoading:!1})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=(t.isModalOpen,t.imageToOpen),r=t.isLoading;return Object(O.jsxs)("div",{className:A.a.App,children:[Object(O.jsx)(v,{onSubmit:this.searchImages}),Object(O.jsx)(x,{children:a.map((function(t){return Object(O.jsx)(w,{id:t.id,src:t.previewURL,openImage:e.openImage},t.id)}))}),a.length>0&&Object(O.jsx)(F,{loadMore:this.loadMore}),n.length>0&&Object(O.jsx)(G,{onCloseModal:this.closeModal,src:n}),r&&Object(O.jsx)(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})]})}}]),a}(n.Component);c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3dftY",SearchForm:"Searchbar_SearchForm__wjlQY","SearchForm-button":"Searchbar_SearchForm-button__3sksS","SearchForm-button-label":"Searchbar_SearchForm-button-label__2Ptgo","SearchForm-input":"Searchbar_SearchForm-input__1Z-Mo"}}},[[71,1,2]]]);
//# sourceMappingURL=main.7b91c5fe.chunk.js.map