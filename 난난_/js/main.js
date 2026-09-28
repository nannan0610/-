const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        // 모든 버튼의 active 제거
        filters.forEach((button) => {
            button.classList.remove("active");
        });

        // 현재 버튼 active
        filter.classList.add("active");

        // 선택한 카테고리
        const selectedCategory = filter.dataset.filter;

        // 프로젝트 표시 / 숨김
        projects.forEach((project) => {

            const projectCategory = project.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});