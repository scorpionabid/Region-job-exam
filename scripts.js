// Düyməyə basıldıqda yönləndirmə funksiyası
function redirectTo(link, jobTitle) {
    const confirmation = confirm(`Siz \"${jobTitle}\" imtahanına daxil olmaq istədiyinizə əminsiniz?`);
    if (confirmation) {
        window.location.href = link;
    }
}
