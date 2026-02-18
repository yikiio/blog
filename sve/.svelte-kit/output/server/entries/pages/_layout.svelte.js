import { X as slot } from "../../chunks/index.js";
import "clsx";
function Header($$renderer) {
  $$renderer.push(`<header class="header"><div class="header__left"><a href="/" class="button"><span class="logo__text">h的个人网站</span></a></div> <div class="header__right"><div class="navbar__menus"><a href="/" class="navbar-menu button">首页</a> <a href="/archives/" class="navbar-menu button">归档</a></div> <button class="dropdown-icon button" id="btn-dropdown" type="button" aria-label="Open menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path></svg></button> <div class="dropdown-menus" id="dropdown-menus"><a href="/" class="dropdown-menu button">首页</a> <a href="/archives/" class="dropdown-menu button">归档</a></div></div></header>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="footer"><p class="footer-copyright">Copyright © 2024 <a href="/">Hexo</a></p> <p>Powered by <a href="https://hexo.io" target="_blank" rel="noopener noreferrer">Hexo</a> | Theme - <a href="https://github.com/ChrAlpha/hexo-theme-cards" target="_blank" rel="noopener noreferrer">Cards</a></p></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div id="app" tabindex="-1">`);
  Header($$renderer);
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
