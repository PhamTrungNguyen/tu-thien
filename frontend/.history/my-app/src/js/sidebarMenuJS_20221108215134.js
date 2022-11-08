export const handleRenderHomeAdmin = () => {
    const shrink_btn = document.querySelector(".shrink-btn");
    const search = document.querySelector(".search");
    const sidebar_links = document.querySelectorAll(".sidebar-links a");
    const active_tab = document.querySelector(".active-tab");
    const shortcuts = document.querySelector(".sidebar-links h4");
    const tooltip_elements = document.querySelectorAll(".tooltip-element");
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-auth");

    let activeIndex;

    if (shrink_btn) {
        shrink_btn.addEventListener("click", () => {
            document.body.classList.toggle("shrink");
            // setTimeout(moveActiveTab, 400);

            shrink_btn.classList.add("hovered");

            setTimeout(() => {
                shrink_btn.classList.remove("hovered");
            }, 500);
        });
    }

    if (search) {
        search.addEventListener("click", () => {
            document.body.classList.remove("shrink");
            search.lastElementChild.focus();
        });
    }

    // function moveActiveTab() {
    //     let topPosition = activeIndex * 58 + 2.5;

    //     if (activeIndex > 5) {
    //         topPosition += shortcuts.clientHeight;
    //     }

    //     active_tab.style.top = `${topPosition}px`;
    // }

    function changeLink() {
        sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
        this.classList.add("active");

        activeIndex = this.dataset.active;

        // moveActiveTab();
    }

    sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

    function showTooltip() {
        let tooltip = this.parentNode.lastElementChild;
        let spans = tooltip.children;
        let tooltipIndex = this.dataset.tooltip;

        Array.from(spans).forEach((sp) => sp.classList.remove("show"));
        spans[tooltipIndex].classList.add("show");

        tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)
            }%`;
    }

    tooltip_elements.forEach((elem) => {
        elem.addEventListener("mouseover", showTooltip);
    });

    sign_up_btn &&
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

    sign_in_btn &&
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
};

export const handleRenderHomeAuth = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-auth");
    sign_up_btn &&
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

    sign_in_btn &&
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
};
