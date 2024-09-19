// เมื่อโหลดหน้าเว็บครั้งแรกให้แสดงโปรเจกต์ทั้งหมด
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cagetory-item').forEach(item => {
      item.classList.add('active');
    });
  });
  
  // จัดการหมวดหมู่เมื่อมีการคลิกปุ่มหมวดหมู่
  document.querySelectorAll('.category').forEach(categoryBtn => {
    categoryBtn.addEventListener('click', () => {
      // เอาคลาส active ออกจากปุ่มทุกปุ่ม
      document.querySelectorAll('.category').forEach(btn => btn.classList.remove('active'));
  
      // เพิ่มคลาส active ให้กับปุ่มที่กด
      categoryBtn.classList.add('active');
  
      const selectedCategory = categoryBtn.getAttribute('data-category');
  
      // แสดงโปรเจกต์ที่ตรงหมวดหมู่และซ่อนโปรเจกต์ที่ไม่ตรงหมวดหมู่
      document.querySelectorAll('.cagetory-item').forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  });
  
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex";
        popup.classList.add('open'); // Add the 'open' class to trigger the animation
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.remove('open'); // Remove the 'open' class
        setTimeout(() => {
            popup.style.display = "none";
        }, 500); // Timeout should match the animation duration (0.5s in this case)
    }
}