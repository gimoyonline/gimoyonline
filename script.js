// Konfigurasi Supabase
const SUPABASE_URL = 'GANTI_DENGAN_PROJECT_URL_KAMU';
const SUPABASE_ANON_KEY = 'GANTI_DENGAN_ANON_PUBLIC_KEY_KAMU';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi untuk mengambil data dari tabel 'catatan'
async function ambilCatatan() {
    const listEl = document.getElementById('list-catatan');
    
    const { data, error } = await _supabase
        .from('catatan')
        .select('*')
        .order('id', { ascending: false });

    if (error) {
        console.error('Gagal memuat data:', error);
        listEl.innerHTML = '<li>Gagal memuat data dari database.</li>';
        return;
    }

    if (data.length === 0) {
        listEl.innerHTML = '<li>Belum ada catatan.</li>';
        return;
    }

    // Tampilkan data ke HTML
    listEl.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.isi;
        listEl.appendChild(li);
    });
}

// Fungsi untuk menambah data baru ke database
document.getElementById('form-catatan').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputPesan = document.getElementById('input-pesan');
    const teks = inputPesan.value;

    const { error } = await _supabase
        .from('catatan')
        .insert([{ isi: teks }]);

    if (error) {
        alert('Gagal menyimpan: ' + error.message);
    } else {
        inputPesan.value = '';
        ambilCatatan(); // Refresh daftar catatan
    }
});

// Jalankan saat pertama kali halaman dibuka
ambilCatatan();
