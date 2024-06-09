<script>
    document.addEventListener("DOMContentLoaded", function () {
        const h = "nightowl-color-scheme", l = "light", o = "dark";
        let n = null, t = l, g = !0, i = "currentState";
        
        try {
            n = localStorage;
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }

        function a() {
            const e = document.createElement("style");
            e.innerHTML = `
                .nightowl-light body{
                    filter: invert(0%);
                }
                
                .nightowl-dark {
                    background-color: #111;
                }

                .nightowl-dark body {
                    filter: invert(100%) hue-rotate(180deg);
                }

                .nightowl-dark img, .nightowl-dark video, .nightowl-dark iframe, .nightowl-dark .nightowl-daylight {
                    filter: invert(100%) hue-rotate(180deg);
                }

                .nightowl-dark .icon {
                    filter: invert(15%) hue-rotate(180deg);
                }

                .nightowl-dark pre {
                    filter: invert(6%);
                }

                .nightowl-dark li::marker {
                    color: #666;
                }
            `;
            document.head.appendChild(e);
            console.log("Style added");
        }

        function M(e) {
            g = !1;
            if (e.defaultMode === "dark") t = o;
            if (e.toggleButtonMode) i = e.toggleButtonMode;
            a();
            d();
            c();
        }

        function m() {
            t = o;
            const e = document.querySelector("html");
            if (e) {
                e.classList.remove("nightowl-light");
                e.classList.add("nightowl-dark");
            }
            console.log("Switched to dark mode");
        }

        function f() {
            t = l;
            const e = document.querySelector("html");
            if (e) {
                e.classList.remove("nightowl-dark");
                e.classList.add("nightowl-light");
            }
            console.log("Switched to light mode");
        }

        function k() {
            t = t === o ? l : o;
            w();
            console.log("Toggled mode");
        }

        function w() {
            if (t === o) m();
            else f();
            u();
        }

        function u() {
            const e = document.getElementById("nightowl-switcher-default");
            if (e) {
                const r = '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;"><path stroke-linecap="round" stroke-linejoin="round" fill="#fff" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>';
                const s = '<svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;"><path stroke-linecap="round" stroke-linejoin="round" fill="#000" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>';
                if (i === "newState") e.innerHTML = t === o ? r : s;
                else if (i === "currentState") e.innerHTML = t === o ? s : r;
            }
            console.log("Updated switcher icon");
        }

        function c() {
            const e = document.createElement("div");
            e.id = "nightowl-switcher-default";
            e.style.position = "sticky";
            e.style.bottom = "10%";
            e.style.left = "50%";
            e.style.transform = "translateX(-50%)";
            e.style.width = "50px";
            e.style.height = "50px";
            e.style.borderRadius = "50%";
            e.style.backgroundColor = "rgb(4, 98, 106)";
            e.style.display = "flex";
            e.style.justifyContent = "center";
            e.style.alignItems = "center";
            e.style.cursor = "pointer";
            e.style.zIndex = "9999";
            e.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            e.style.transition = "all 0.3s ease-in-out";
            e.style.overflow = "hidden";
            e.style.color = "#ffffff";
            e.addEventListener("click", () => {
                k();
                p();
            });
            document.body.appendChild(e);
            u();
            console.log("Switcher added to the page");
        }
            
        function y() {
            let e = null;
            try {
                if (n) e = n.getItem(h);
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
            if (e && [o, l].includes(e)) t = e;
            else if (v()) t = o;
        }

        function d() {
            y();
            w();
            console.log("Initialized mode");
        }

        function p() {
            if (t !== null) {
                try {
                    if (n) n.setItem(h, t);
                } catch (error) {
                    console.error("Error saving to localStorage:", error);
                }
            }
        }

        function v() {
            return window.matchMedia && (window.matchMedia("(prefers-color-scheme: dark)").matches || window.matchMedia("(prefers-color-scheme:dark)").matches);
        }

        // Initial call
        if (g) {
            a();
            d();
            c();
            s();
        }

        window.addEventListener("load", () => {
            if (g) {
                a();
                d();
                c();
            }
        });
    });
</script>
