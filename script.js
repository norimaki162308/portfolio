document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('video-modal');
    const modalPlayer = document.getElementById('video-player');
    const closeButton = document.querySelector('.close-button');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-video-src');
            if (videoSrc) {
                // Vimeoの場合は autoplay パラメータを追加
                const finalSrc = videoSrc.includes('vimeo') 
                    ? `${videoSrc}?autoplay=1` 
                    : `${videoSrc}?autoplay=1`;
                modalPlayer.setAttribute('src', finalSrc);
                modal.style.display = 'flex';
            }
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';
        // 重要: モーダルを閉じる際に、動画の再生を停止する
        modalPlayer.setAttribute('src', ''); 
    };

    closeButton.addEventListener('click', closeModal);

    // モーダルの背景をクリックしても閉じるようにする
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// 【CLIENT WORKSセクションの動画再生ボタン用コード】
const clientPlayButtons = document.querySelectorAll('.play-button');
clientPlayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video-src');
        if (videoSrc) {
            const finalSrc = videoSrc.includes('vimeo') 
                ? `${videoSrc}?autoplay=1` 
                : `${videoSrc}?autoplay=1`;
            modalPlayer.setAttribute('src', finalSrc);
            modal.style.display = 'flex';
        }
    });
});
