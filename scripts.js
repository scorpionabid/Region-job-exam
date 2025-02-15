// Exam düymələri üçün event listener
document.addEventListener('DOMContentLoaded', () => {
    // Bütün exam düymələrini seç
    const examButtons = document.querySelectorAll('.exam-button');

    // Hər düyməyə klik eventi əlavə et
    examButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Səhifənin defolt davranışını dayandır
            e.preventDefault();

            // Vəzifənin adını al
            const position = button.getAttribute('data-position');

            // İstifadəçidən təsdiq al
            const isConfirmed = confirm(`${position} vəzifəsi üçün imtahana daxil olmaq istədiyinizdən əminsiniz?`);

            // Təsdiq olunubsa, Microsoft Forms linksinə yönləndir
            if (isConfirmed) {
                window.location.href = button.getAttribute('href');
            }
        });
    });
});