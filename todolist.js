document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const clearAllButton = document.getElementById('clearAllButton');
  const taskList = document.getElementById('taskList');

  // 할 일 추가 함수
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');

      // 클릭하면 완료 처리 토글
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      // 삭제 버튼 추가
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '했다';
      deleteButton.classList.add('deleteButton');
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation(); // li의 클릭 이벤트가 실행되지 않도록 함
        li.remove();
      });

      li.textContent = taskText;
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = ''; // 입력 필드 초기화
    }
  };

  // 버튼 클릭 시 할 일 추가
  addButton.addEventListener('click', addTask);

  // Enter 키로도 할 일 추가
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  // 전체 삭제 버튼 클릭 시 모든 할 일 삭제
  clearAllButton.addEventListener('click', () => {
    if (confirm('모든 할 일을 삭제하시겠습니까?')) {
      taskList.innerHTML = '';
    }
  });
});
// input 요소 가져오기
const taskInput = document.getElementById('taskInput');

// focus 이벤트 리스너 추가
taskInput.addEventListener('focus', function () {
  // placeholder 텍스트 지우기
  this.placeholder = '';
});

// blur 이벤트 리스너 추가 (입력 창 밖으로 클릭했을 때)
taskInput.addEventListener('blur', function () {
  // placeholder 텍스트 다시 넣기
  if (this.value === '') {
    this.placeholder = '뭐 할지 끄적거려봐';
  }
});
