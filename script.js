/* 
   =========================================================================
   [KONEKSI ADMIN] - JAVASCRIPT UNTUK PORTAL ADMIN (admin.html)
   Gabungkan kod di bawah ke dalam script.js atau index.html kawan anda
   untuk menyokong log masuk (login) Warden/Admin.
   =========================================================================
*/

// Fungsi untuk membuka Login Modal Admin
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Fungsi untuk menutup Login Modal Admin
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Menutup modal secara automatik apabila pengguna klik di luar kawasan modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Pengendali Borang Log Masuk Admin (Admin Login Form Handler)
// Menyemak kredensial masuk admin dan menghala ke fail admin.html
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Kredensial masuk lalai untuk Admin / Warden
        if (email === 'admin@shmaas.com' && password === 'admin123') {
            showToast('Welcome Admin! Redirecting to dashboard...', 'success');
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 1500);
        } else {
            showToast('Invalid credentials! Try admin@shmaas.com / admin123', 'error');
        }
    });
}

// Fungsi Notifikasi Toast (digunakan semasa log masuk admin)
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.className = `toast show ${type}`;
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    } else {
        // Jika elemen toast tiada dalam HTML kawan anda, guna alert biasa sebagai alternatif
        alert(message);
    }
}