document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.video-thumbnails img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('main-video').src = this.dataset.videoSrc;
        });
    });
  });
  