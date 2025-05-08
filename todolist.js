document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const taskList = document.getElementById("taskList");

  // 할 일 추가 함수
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");

      // 클릭하면 완료 처리 토글
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // 삭제 버튼 추가
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // li의 클릭 이벤트가 실행되지 않도록 함
        li.remove();
      });

      li.textContent = taskText;
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = ""; // 입력 필드 초기화
    }
  };

  // 버튼 클릭 시 할 일 추가
  addBtn.addEventListener("click", addTask);

  // Enter 키로도 할 일 추가
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // 전체 삭제 버튼 클릭 시 모든 할 일 삭제
  clearAllBtn.addEventListener("click", () => {
    if (confirm("모든 할 일을 삭제하시겠습니까?")) {
      taskList.innerHTML = "";
    }
  });
});
