const app = document.getElementById("main");

function render() {
    const hash = location.hash || "#/home";
    console.log(hash);
    switch (hash) {
        case "#/home":
        case "":
            app.innerHTML = "<h1>首页</h1>";
            break;
        case "#/about":
            app.innerHTML = "<h1>关于页面</h1>";
            break;
        default:
            app.innerHTML = "<h1>404</h1>";
    }
}
window.addEventListener("hashchange", render);
window.addEventListener("load", render);
