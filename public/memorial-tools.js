/* Memorial tools for Hannah Nyambura Karanja (Wa Ruth).
   This is a static GitHub Pages site: candles and drafts are stored only in each visitor's browser.
   A shared, moderated online guestbook requires a connected backend. */
(function () {
  'use strict';
  const HONOREE = 'Hannah Nyambura Karanja (Wa Ruth)';
  const CANDLE_KEY = 'hannah-memorial-candle-count-v1';
  const currentUrl = window.location.href.split('#')[0];
  const make = (tag, attrs, text) => {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (key === 'class') node.className = value;
      else if (key === 'html') node.innerHTML = value;
      else node.setAttribute(key, value);
    });
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function toast(message) {
    let el = document.getElementById('memorialToast');
    if (!el) { el = make('div', {id:'memorialToast', role:'status', 'aria-live':'polite'}); document.body.appendChild(el); }
    el.textContent = message; el.classList.add('is-visible');
    window.clearTimeout(toast.timer); toast.timer = window.setTimeout(() => el.classList.remove('is-visible'), 2600);
  }
  function getCandles() {
    try { return Math.max(0, Number(localStorage.getItem(CANDLE_KEY)) || 0); } catch (_) { return 0; }
  }
  function setCandles(value) {
    try { localStorage.setItem(CANDLE_KEY, String(value)); } catch (_) {}
  }
  function addCandle() {
    const count = getCandles() + 1; setCandles(count);
    const label = document.getElementById('candleCount');
    if (label) label.textContent = count.toLocaleString();
    toast('A candle has been lit in remembrance. 🕯');
  }
  function share() {
    const data = {title: 'In Loving Memory of ' + HONOREE, text: 'Remember her life, faith, and enduring legacy.', url: currentUrl};
    if (navigator.share) navigator.share(data).catch(() => {});
    else if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(currentUrl).then(() => toast('Memorial link copied.')).catch(() => window.prompt('Copy this memorial link:', currentUrl));
    else window.prompt('Copy this memorial link:', currentUrl);
  }
  function buildToolbar() {
    if (document.querySelector('.memorial-quick-tools')) return;
    const toolbar = make('div', {class:'memorial-quick-tools', 'aria-label':'Memorial tools'});
    const shareBtn = make('button', {type:'button', title:'Share this memorial', 'aria-label':'Share this memorial'}, '↗ Share');
    shareBtn.addEventListener('click', share);
    const candleBtn = make('button', {type:'button', title:'Light a remembrance candle on this device', 'aria-label':'Light a remembrance candle'}, '🕯 Light a candle');
    candleBtn.addEventListener('click', addCandle);
    const printBtn = make('button', {type:'button', title:'Print or save this page as PDF', 'aria-label':'Print or save as PDF'}, '⎙ Print / PDF');
    printBtn.addEventListener('click', () => window.print());
    const qrBtn = make('a', {href:'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=' + encodeURIComponent(currentUrl), target:'_blank', rel:'noopener noreferrer', title:'Open a QR code for this memorial'}, '▦ QR code');
    toolbar.append(shareBtn, candleBtn, printBtn, qrBtn);
    document.body.appendChild(toolbar);
    const candle = make('div', {class:'memorial-candle-note', 'aria-live':'polite'});
    candle.innerHTML = '<span aria-hidden="true">🕯</span><span><strong>Remembrance candles</strong><small><b id="candleCount">' + getCandles().toLocaleString() + '</b> lit on this device</small></span>';
    document.body.appendChild(candle);
  }
  function setupTributeComposer() {
    const form = document.getElementById('tributeComposer');
    if (!form) return;
    const output = document.getElementById('tributeOutput');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get('tributeName') || '').trim();
      const relation = String(data.get('tributeRelation') || '').trim();
      const message = String(data.get('tributeMessage') || '').trim();
      const permission = data.get('publishPermission') === 'yes';
      if (!message) { toast('Please write a few words before preparing your tribute.'); return; }
      const draft = 'TRIBUTE IN LOVING MEMORY OF ' + HONOREE + '\n' +
        'From: ' + (name || 'A friend') + (relation ? ' (' + relation + ')' : '') + '\n\n' + message +
        '\n\n' + (permission ? 'The writer has indicated permission to share this message with the family for review.' : 'Private draft — please ask the writer before publishing.');
      output.hidden = false;
      output.querySelector('pre').textContent = draft;
      const download = document.getElementById('downloadTribute');
      download.onclick = function () {
        const blob = new Blob([draft], {type:'text/plain;charset=utf-8'});
        const url = URL.createObjectURL(blob); const a = make('a', {href:url, download:'hannah-nyambura-karanja-tribute.txt'});
        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      };
      document.getElementById('copyTribute').onclick = function () {
        if (navigator.clipboard) navigator.clipboard.writeText(draft).then(() => toast('Tribute copied.')).catch(() => toast('Copy is not available in this browser.'));
        else toast('Copy is not available in this browser.');
      };
      const wa = document.getElementById('whatsappTribute');
      wa.href = 'https://wa.me/?text=' + encodeURIComponent(draft);
      toast('Your tribute draft is ready. It has not been published online.');
      output.scrollIntoView({behavior:'smooth', block:'nearest'});
    });
  }
  function setupGallerySearch() {
    const input = document.getElementById('gallerySearch');
    if (!input) return;
    input.addEventListener('input', function () {
      const term = input.value.trim().toLowerCase();
      document.querySelectorAll('.gallery-photo-card').forEach(card => {
        card.hidden = term && !card.textContent.toLowerCase().includes(term);
      });
    });
  }
  function setupPageActions() {
    document.querySelectorAll('[data-memorial-share]').forEach(btn => btn.addEventListener('click', share));
    document.querySelectorAll('[data-memorial-print]').forEach(btn => btn.addEventListener('click', () => window.print()));
  }
  function init() {
    buildToolbar(); setupTributeComposer(); setupGallerySearch(); setupPageActions();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();