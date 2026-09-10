/* ============================================================
   SIRAWM — shared.js
   Kode & helper yang dipakai bersama oleh login.html, index.html,
   dan cetak.html. File ini TIDAK dibungkus IIFE supaya semua isinya
   bisa diakses langsung oleh script di masing-masing halaman.
   ============================================================ */
"use strict";

/* ============================================================
   ICONS
   ============================================================ */
const ICON = {
  drop:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5S5 11 5 15.5a7 7 0 0 0 14 0C19 11 12 2.5 12 2.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M2.8 19c1.3-3.4 3.6-5 6.2-5s4.9 1.6 6.2 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.5 5.3a3.2 3.2 0 0 1 0 6.2M18 19c-.7-2-1.8-3.4-3.2-4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  gauge:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" stroke-width="1.7"/><path d="M12 15l4-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 15h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 9.5h17M8 3v3.3M16 3v3.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 20h4.2L19 9.2a2.4 2.4 0 0 0-3.4-3.4L5 16.5V20Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M13.5 7.3 16.7 10.5" stroke="currentColor" stroke-width="1.6"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none"><path d="M5 7h14M9.5 7V5.2a1.2 1.2 0 0 1 1.2-1.2h2.6a1.2 1.2 0 0 1 1.2 1.2V7M7.5 7 8.3 19a2 2 0 0 0 2 1.9h3.4a2 2 0 0 0 2-1.9L16.5 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 12.5 9.5 18 20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5v11.5M7.5 11l4.5 4.5L16.5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 17.5v2A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  printer:'<svg viewBox="0 0 24 24" fill="none"><path d="M6.5 8.5V4h11v4.5M6.5 17.5H5A1.5 1.5 0 0 1 3.5 16v-4a1.5 1.5 0 0 1 1.5-1.5h14A1.5 1.5 0 0 1 20.5 12v4a1.5 1.5 0 0 1-1.5 1.5h-1.5M6.5 13.5h11v6.5h-11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  empty:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 7.5 12 3l8 4.5M4 7.5v9L12 21m-8-4.5L12 12m0 9 8-4.5v-9M12 12l8-4.5M12 12V3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16l-6 7.5V19l-4 2v-8.5L4 5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 21.5s7-6.8 7-12.2A7 7 0 0 0 5 9.3c0 5.4 7 12.2 7 12.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.3" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.4" stroke="currentColor" stroke-width="1.6"/></svg>',
};

/* ============================================================
   STATE & GLOBALS
   ============================================================ */
const state = { role:'Admin', route:'dashboard', token: localStorage.getItem('token'), userName: 'Admin', userId: null };
// IP lokal PC (backend) di jaringan WiFi -- dipakai HANYA saat development lokal (XAMPP)
const LOCAL_SERVER_IP = '192.168.0.104';
// URL backend production di Vercel -- ganti kalau URL Vercel berubah
const PRODUCTION_API_BASE = 'https://sirawm-backend-app.vercel.app/api';

const isNativeApp = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === LOCAL_SERVER_IP;

const API_BASE = (isLocalHost && !isNativeApp)
  ? (window.location.protocol === 'file:' || !window.location.hostname)
    ? `http://${LOCAL_SERVER_IP}:5050/api`                    // dibuka lewat double-click file (file://)
    : `${window.location.protocol}//${window.location.hostname}:5050/api` // dibuka lewat browser/XAMPP lokal
  : PRODUCTION_API_BASE;                                      // dibuka dari luar / sebagai app Android-iOS -> pakai backend Vercel

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ============================================================
   EFEK PERCIKAN AIR — berlaku global di semua tombol .btn/.btn-primary
   ============================================================ */
function spawnWaterSplash(btn, clientX, clientY){
  const rect = btn.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const size = Math.max(rect.width, rect.height) * 1.9;

  const ring = document.createElement('span');
  ring.className = 'ripple-ring';
  ring.style.left = x + 'px';
  ring.style.top = y + 'px';
  ring.style.width = size + 'px';
  ring.style.height = size + 'px';
  btn.appendChild(ring);
  ring.addEventListener('animationend', () => ring.remove());

  const jumlahTetes = 6;
  for (let i = 0; i < jumlahTetes; i++) {
    const drop = document.createElement('span');
    drop.className = 'splash-drop';
    const sudut = (Math.PI * 2 * i / jumlahTetes) + (Math.random() * 0.6 - 0.3);
    const jarak = 14 + Math.random() * 16;
    drop.style.left = x + 'px';
    drop.style.top = y + 'px';
    drop.style.setProperty('--dx', Math.cos(sudut) * jarak + 'px');
    drop.style.setProperty('--dy', Math.sin(sudut) * jarak + 'px');
    drop.style.animationDelay = (Math.random() * 0.05) + 's';
    btn.appendChild(drop);
    drop.addEventListener('animationend', () => drop.remove());
  }
}

document.addEventListener('pointerdown', (e) => {
  const btn = e.target.closest('.btn, .btn-primary');
  if (!btn) return;
  spawnWaterSplash(btn, e.clientX, e.clientY);
});

/* ============================================================
   TOAST & HELPERS
   ============================================================ */
function toast(msg){
  const host = $('#toastHost');
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = ICON.check + `<span>${esc(msg)}</span>`;
  host.appendChild(el);
  setTimeout(()=>{ el.classList.add('out'); setTimeout(()=>el.remove(), 320); }, 2600);
}

function pill(status){
  const cls = STATUS_PILL[status] || 'neutral';
  return `<span class="pill ${cls}">${ICON.check}${esc(status)}</span>`;
}

const STATUS_PILL = {
  'Selesai':'ok', 'Proses':'warn', 'Belum':'danger', 'Aktif':'ok', 'Nonaktif':'neutral',
  'Baik':'ok', 'Perlu diganti':'warn', 'Rusak':'danger',
  'Disetujui':'ok', 'Menunggu':'neutral', 'Perlu Feedback':'danger',
  'Normal':'ok', 'Buram Terbaca':'warn', 'WM Rusak':'danger', 'WM Mati':'danger',
};
function riverDivider(){
  return `<svg class="river-divider" viewBox="0 0 1200 34" preserveAspectRatio="none">
    <path class="wave-path" fill="none" stroke="url(#gDiv)" stroke-width="2.4" stroke-linecap="round" d="M0,20 C150,4 300,34 450,18 C600,2 750,32 900,16 C1000,6 1100,22 1200,12"/>
    <defs><linearGradient id="gDiv" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0a4b6d"/><stop offset="55%" stop-color="#2ea3d6"/><stop offset="100%" stop-color="#6fdcea"/>
    </linearGradient></defs>
  </svg>`;
}

/* ============================================================
   API HELPER
   ============================================================ */
async function downloadFile(endpoint, filename) {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { ...(token && { 'Authorization': `Bearer ${token}` }) }
    });
    if (!res.ok) throw new Error('Gagal membuat file laporan');
    const blob = await res.blob();

    const isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

    if (isNative && window.Capacitor?.Plugins?.Filesystem) {
      // Di aplikasi Android/iOS: simpan file ke penyimpanan HP lewat plugin Capacitor Filesystem, lalu tawarkan opsi share/buka
      const { Filesystem, Directory } = window.Capacitor.Plugins;
      const base64Data = await blobToBase64(blob);
      const saved = await Filesystem.writeFile({
        path: filename,
        data: base64Data,
        directory: Directory.Documents,
        recursive: true
      });
      if (window.Capacitor.Plugins.Share) {
        await window.Capacitor.Plugins.Share.share({
          title: filename,
          url: saved.uri
        });
      }
      toast('Laporan tersimpan: ' + filename);
    } else {
      // Di browser desktop/XAMPP: cara download standar
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
      toast('Laporan berhasil diunduh');
    }
  } catch (e) {
    console.error(e);
    toast('Gagal mengunduh laporan');
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  };
  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Gagal mengambil data');
  return json;
}

/* ============================================================
   FITUR FOTO KAMERA + LOKASI (dipakai di Verifikasi Baca Meter)
   ============================================================ */

// Ubah koordinat GPS jadi alamat yang bisa dibaca manusia, pakai
// layanan gratis OpenStreetMap Nominatim (tanpa API key/biaya).
async function reverseGeocode(lat, lon){
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=18`, {
      headers: { 'Accept-Language': 'id' }
    });
    if (!res.ok) return null;
    const j = await res.json();
    return j.display_name || null;
  } catch(e) {
    return null; // offline / GPS di tengah hutan tanpa data jalan -> tetap lanjut tanpa alamat
  }
}

// Format tanggal-waktu ala watermark kamera GPS, contoh:
// "Kamis, 10 September 2026 • 12:01:50 WIB"
function formatWaktuWatermark(date){
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'][date.getDay()];
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'][date.getMonth()];
  const jam = date.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  return `${hari}, ${date.getDate()} ${bulan} ${date.getFullYear()} \u2022 ${jam} WIB`;
}

// Menggambar kotak watermark semi-transparan (alamat, koordinat, waktu)
// di bagian bawah canvas foto — meniru gaya aplikasi kamera GPS.
function drawWatermarkOnCanvas(ctx, w, h, meta){
  const { lat, lon, alamat, waktu } = meta;
  const baris = [];
  baris.push(alamat || (lat != null ? `${lat.toFixed(6)}, ${lon.toFixed(6)}` : 'Lokasi tidak tersedia'));
  if (lat != null) baris.push(`Koordinat: ${lat.toFixed(6)}, ${lon.toFixed(6)}`);
  baris.push(formatWaktuWatermark(waktu || new Date()));

  const fontUtama = Math.max(13, Math.round(w * 0.028));
  const fontKedua = Math.max(11, Math.round(w * 0.022));
  const lineH = Math.round(fontUtama * 1.5);
  const padX = Math.round(w * 0.03);
  const boxH = padX * 1.4 + lineH * baris.length;

  ctx.fillStyle = 'rgba(4,12,18,0.62)';
  ctx.fillRect(0, h - boxH, w, boxH);

  ctx.fillStyle = '#ffffff';
  ctx.textBaseline = 'top';
  let ty = h - boxH + padX * 0.7;
  baris.forEach((line, i) => {
    ctx.font = (i === 0 ? `600 ${fontUtama}px sans-serif` : `${fontKedua}px sans-serif`);
    ctx.fillText(line, padX, ty);
    ty += lineH;
  });
}

function applyRolePermissions(){
  const isAdmin = state.role === 'Admin';
  $$('.admin-only').forEach(el=> el.style.display = isAdmin ? '' : 'none');
}

/* ============================================================
   AUTH GUARD — dipakai index.html & cetak.html supaya tidak bisa
   diakses tanpa login, dan otomatis memulihkan sesi dari token
   tersimpan (localStorage) tanpa perlu login ulang.
   ============================================================ */
async function requireAuth(){
  const token = localStorage.getItem('token');
  if (!token) { window.location.href = 'login.html'; return null; }

  state.token = token;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    state.userId = payload.id;
    state.role = payload.role || 'Admin';
  } catch(e) { /* token rusak, akan ketahuan lewat pengecekan profil di bawah */ }

  try {
    const json = await apiFetch('/profile');
    state.userName = (json.data && json.data.nama) || 'Admin';
    return state;
  } catch(e) {
    // token sudah tidak valid/kadaluarsa di server -> hapus & lempar ke login
    localStorage.removeItem('token');
    state.token = null;
    window.location.href = 'login.html';
    return null;
  }
}

function doLogout(){
  localStorage.removeItem('token');
  state.token = null;
  window.location.href = 'login.html';
}
