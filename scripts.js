document.addEventListener('DOMContentLoaded', () => {
    // Select all exam buttons
    const examButtons = document.querySelectorAll('.exam-button');

    // Add click event listener to each button
    examButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior

            // Get position and time from data attributes
            const position = button.getAttribute('data-position');
            const time = button.getAttribute('data-time');

            // Show confirmation alert
            const isConfirmed = confirm(`${position} vəzifəsi üçün saat ${time}-da olan imtahana daxil olmaq istəyirsiniz?`);

            // If confirmed, redirect to Microsoft Forms (replace with actual links)
            if (isConfirmed) {
                switch(position) {
                    case 'Laborant':
                        window.location.href = 'https://forms.office.com/r/fQ3z6Uwq7b';
                        break;
                    case 'Təsərrüfat Müdiri':
                        window.location.href = 'https://forms.office.com/r/f02xum1QDT';
                        break;
                    case 'Kargüzar':
                        window.location.href = 'https://forms.office.com/r/2LMj9C0MGS';
                        break;
                    case 'Kitabxana Müdiri':
                        window.location.href = 'https://forms.office.com/r/7kjjdXF2fK';
                        break;
                    case 'Çağırışaqədər Hazırlıq Rəhbəri':
                        window.location.href = 'https://forms.office.com/r/JsQDfzT3PU';
                        break;
                    case 'Kompüter Laborantı':
                        window.location.href = 'https://forms.office.com/r/sHL2KQSzkQ';
                        break;
                    case 'Uşaq Birliyi Rəhbəri':
                        window.location.href = 'https://forms.office.com/r/WpiZTuP032';
                        break;
                    case 'Mühasib':
                        window.location.href = 'https://forms.office.com/r/hyv3J2mZXi';
                        break;
                    case 'Psixoloq':
                        window.location.href = 'https://forms.office.com/r/aSCaB6Pd92';
                        break;
                    default:
                        alert('Bağışlayın, keçərli link tapılmadı.');
                }
            }
        });
    });
});