document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの動作
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        // ハンバーガーアイコンの切り替え（オプション）
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // メニュー項目をクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // スムーズスクロール
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // ターゲットセクションの取得
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
            
            // アクティブリンクの更新
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // モバイル表示時はメニューを閉じる
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // ヘッダースクロールエフェクト
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            header.style.backgroundColor = '#1a1a1a';
        }
    });
    
    // フォーム送信
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォーム値の取得
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // フォームバリデーション
            if (!name || !email || !message) {
                alert('すべてのフィールドを入力してください。');
                return;
            }
            
            // フォーム送信シミュレーション
            alert('お問い合わせありがとうございます。すぐにご連絡いたします。');
            this.reset();
        });
    }
    
    // 画像ギャラリー機能
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 画像プレビュー用モーダル作成
            const modal = document.createElement('div');
            modal.classList.add('image-modal');
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '&times;';
            closeBtn.classList.add('close-modal');
            
            modal.appendChild(closeBtn);
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // モーダルスタイル
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '2000';
            
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '20px';
            closeBtn.style.right = '30px';
            closeBtn.style.color = 'white';
            closeBtn.style.fontSize = '40px';
            closeBtn.style.fontWeight = 'bold';
            closeBtn.style.cursor = 'pointer';
            
            // クリックでモーダルを閉じる
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // 外側クリックでモーダルを閉じる
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});
