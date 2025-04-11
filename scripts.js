document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('grundrissModal');
    
    // Get the modal image and caption elements
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    // Get all floor plan images
    const grundrissImages = document.querySelectorAll('.grundriss-img');
    
    // Add click event to all floor plan images
    grundrissImages.forEach(function(img) {
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            
            // Get the heading text of the parent container
            const heading = this.closest('.grundriss-container').querySelector('h3').textContent;
            modalCaption.textContent = heading;
        });
    });
    
    // Close the modal when clicking on the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close the modal when clicking outside of the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close the modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}); 