
const envelope = document.getElementById('envelope');
const hymn = document.getElementById('hymnAudio');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  
  setTimeout(() => {
    Swal.fire({
      imageUrl: 'assets/img/og.png',
      imageAlt: 'Funeral Invitation',
      width: '650px',
      padding: '2rem',
      background: '#fff',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      didOpen: () => {
        hymn.play().catch(() => {
          console.warn('Autoplay blocked — tap to allow audio.');
        });
      },
      willClose: () => {
        hymn.pause();
        hymn.currentTime = 0;
        envelope.classList.remove('open');
      }
    });
  }, 1000);
});