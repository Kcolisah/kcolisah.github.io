const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  revealOnScroll();
});

const demoButtons = document.querySelectorAll(".demo-trigger");
const viewer = document.getElementById("projectViewer");
const viewerFrame = document.getElementById("viewerFrame");
const viewerTitle = document.getElementById("viewerTitle");
const viewerClose = document.getElementById("viewerClose");

const demoMap = {
  mortgage: {
    title: "Mortgage Calculator",
    src: "mortgage-demo.html"
  },
  salary: {
    title: "Salary Breakdown Calculator",
    src: "salary-demo.html"
  }
};


if (demoButtons.length && viewer && viewerFrame && viewerTitle && viewerClose) {
  demoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const demoKey = button.dataset.demo;
      const selectedDemo = demoMap[demoKey];

      if (!selectedDemo) return;

      viewerTitle.textContent = selectedDemo.title;
      viewerFrame.src = selectedDemo.src;
      viewer.classList.add("active");
      viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  viewerClose.addEventListener("click", () => {
    viewer.classList.remove("active");
    viewerFrame.src = "";
  });
}