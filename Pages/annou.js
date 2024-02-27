function submitAnnouncement() {
    const announcementText = document.getElementById('announcementText').value;
    if (announcementText.trim() !== "") { // Check if the textarea is not just whitespace
        const announcementDiv = document.getElementById('announcements');
        const newAnnouncement = document.createElement('p');
        const newAnnouncementDiv = document.getElementById('p');

        newAnnouncement.textContent = announcementText;
        announcementDiv.appendChild(newAnnouncement);
        
        
        document.getElementById('announcementText').value = ''; // Clear the textarea after submission
    } else {
        alert('Please write an announcement before submitting.');
    }
}
