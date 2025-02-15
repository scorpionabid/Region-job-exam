document.addEventListener('DOMContentLoaded', () => {
    // Select all exam buttons and columns
    const examButtons = document.querySelectorAll('.exam-button');
    const examColumns = document.querySelectorAll('.exam-column');

    // Function to check and show/hide exam columns
    function checkExamTimes() {
        // Use UTC time based on server time
        const now = new Date();
        const currentHour = now.getUTCHours();
        const currentMinute = now.getUTCMinutes();
        
        // Convert current time to minutes since midnight (UTC)
        const currentTimeInMinutes = currentHour * 60 + currentMinute;

        // Debug: Console log current UTC time for verification
        console.log(`Current UTC Time: ${currentHour}:${currentMinute}`);

        // Check 10:00 exam column (show at UTC 13:15)
        const exam10Column = document.getElementById('exam-10-00');
        const exam10Time = 13 * 60 + 15; // 13:15 UTC
        if (currentTimeInMinutes >= exam10Time) {
            exam10Column.style.display = 'block';
            console.log('10:00 Exam Column Activated');
        }

        // Check 12:00 exam column (show at UTC 13:20)
        const exam12Column = document.getElementById('exam-12-00');
        const exam12Time = 13 * 60 + 20; // 13:20 UTC
        if (currentTimeInMinutes >= exam12Time) {
            exam12Column.style.display = 'block';
            console.log('12:00 Exam Column Activated');
        }
    }

    // Rest of the code remains the same...
    examButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const position = button.getAttribute('data-position');
            const time = button.getAttribute('data-time');

            const isConfirmed = confirm(`${position} vəzifəsi üçün saat ${time}-da olan imtahana daxil olmaq istəyirsiniz?`);

            if (isConfirmed) {
                switch(position) {
                    case 'Laborant':
                        window.location.href = 'https://forms.microsoft.com/laborant';
                        break;
                    case 'Təsərrüfat Müdiri':
                        window.location.href = 'https://forms.microsoft.com/teserrufat-mudiri';
                        break;
                    case 'Kargüzar':
                        window.location.href = 'https://forms.microsoft.com/karguzar';
                        break;
                    case 'Kitabxana Müdiri':
                        window.location.href = 'https://forms.microsoft.com/kitabxana-mudiri';
                        break;
                    case 'Çağırışaqədər Hazırlıq Rəhbəri':
                        window.location.href = 'https://forms.microsoft.com/cagiris-rehberi';
                        break;
                    default:
                        alert('Bağışlayın, keçərli link tapılmadı.');
                }
            }
        });
    });

    // Initial check of exam times
    checkExamTimes();

    // Check exam times every minute
    setInterval(checkExamTimes, 60000);
});