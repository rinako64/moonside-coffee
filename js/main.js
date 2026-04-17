// HERO画像スライドショー
let currentHeroBg = 1;
function switchHeroBg(){
  const bg1 = document.getElementById('heroBg1');
  const bg2 = document.getElementById('heroBg2');
  if(!bg1 || !bg2) return;
  if(currentHeroBg === 1){
    bg1.classList.remove('active');
    bg2.classList.add('active');
    currentHeroBg = 2;
  } else {
    bg2.classList.remove('active');
    bg1.classList.add('active');
    currentHeroBg = 1;
  }
}
setInterval(switchHeroBg, 6000);

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));

// スクロールで全ての波が揺れるアニメーション
const allWaves = document.querySelectorAll('.wiggle-svg');

function onScroll(){
  // ナビ
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60);
  
  // 全ての波を揺らす（横方向のtranslateのみ、波形は保持）
  const scrollY = window.scrollY;
  allWaves.forEach((wave, i) => {
    // 各波ごとにオフセットをつけて、まとまりすぎないようにする
    const phase = i * 0.8;
    const shift = Math.sin(scrollY * 0.005 + phase) * 3;
    wave.style.transform = `translateX(${shift}%)`;
  });
}

window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if(hamburger && navLinks){
  hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}