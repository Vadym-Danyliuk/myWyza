function openModal() {
    document.getElementById('consultationModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('consultationModal').style.display = 'none';
  }
  
  // Закриття модального вікна при натисканні за межами вікна
  window.onclick = function(event) {
    if (event.target == document.getElementById('consultationModal')) {
      closeModal();
    }
  }
  