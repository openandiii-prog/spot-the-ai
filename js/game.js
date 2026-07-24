/* ============================================================
   SPOT THE AI — game engine
   Expects window.LEVELS from js/levels.js:
   [{ id, name, time, real, fake, diffs:[{label, real:{x,y,r}, fake:{x,y,r}}] }]
   Coordinates are percentages (0-100) of the square image, matching
   the SVG marker layer's viewBox="0 0 100 100".
   ============================================================ */
(function(){
  "use strict";

  const LEVELS = window.LEVELS || [];
  const BEST_KEY = "spotTheAI_best";

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const screenMenu = $("screenMenu"), screenGame = $("screenGame");
  const topbarHud = $("topbarHud");
  const btnStart = $("btnStart"), btnNextLevel = $("btnNextLevel"),
        btnRetryLevel = $("btnRetryLevel"), btnPlayAgain = $("btnPlayAgain"), btnHint = $("btnHint");
  const overlayLevel = $("overlayLevel"), overlayTimeout = $("overlayTimeout"), overlayFinal = $("overlayFinal");
  const imgReal = $("imgReal"), imgFake = $("imgFake");
  const wrapReal = imgReal.closest(".frame-img-wrap"), wrapFake = imgFake.closest(".frame-img-wrap");
  const frameA = $("frameA"), frameB = $("frameB");
  const flashA = $("flashA"), flashB = $("flashB");
  const markersA = $("markersA"), markersB = $("markersB");
  const foundPipsEl = $("foundPips");
  const roundBanner = $("roundBanner");
  const hudLevel = $("hudLevel"), hudLevelMax = $("hudLevelMax"), hudFound = $("hudFound"),
        hudFoundMax = $("hudFoundMax"), hudTimer = $("hudTimer"), hudTimerChip = $("hudTimerChip"),
        hudScore = $("hudScore");
  const bestScoreRow = $("bestScoreRow"), bestScoreVal = $("bestScoreVal");
  const sfxCorrect = $("sfxCorrect"), sfxWrong = $("sfxWrong"), sfxWin = $("sfxWin");

  const SVG_NS = "http://www.w3.org/2000/svg";

  // ---------- state ----------
  let levelIndex = 0;
  let score = 0;
  let totalMisses = 0;
  let totalFoundAll = 0;
  let foundSet = new Set();
  let timeLeft = 0;
  let timerId = null;
  let levelActive = false;
  let hintsLeft = 1;
  const HINT_COST = 8;
  let leftKey = "real", rightKey = "fake"; // which data key is shown on which physical side this round
  let awaitingRealGuess = false;
  let totalGuessCorrect = 0;
  let lastGuessCorrect = null;
  const GUESS_BONUS = 250;

  function playSfx(el){
    try{ el.currentTime = 0; el.play().catch(()=>{}); }catch(e){}
  }

  function showScreen(which){
    screenMenu.hidden = which !== "menu";
    screenGame.hidden = which !== "game";
    topbarHud.hidden = which !== "game";
  }

  function hideAllOverlays(){
    overlayLevel.hidden = true;
    overlayTimeout.hidden = true;
    overlayFinal.hidden = true;
  }

  // ---------- menu ----------
  function initMenu(){
    const best = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    if(best > 0){
      bestScoreVal.textContent = best;
      bestScoreRow.hidden = false;
    }
  }

  // ---------- level lifecycle ----------
  function startGame(){
    levelIndex = 0; score = 0; totalMisses = 0; totalFoundAll = 0; totalGuessCorrect = 0;
    hideAllOverlays();
    showScreen("game");
    loadLevel(levelIndex);
  }

  function loadLevel(i){
    const lvl = LEVELS[i];
    if(!lvl){ finalResults(); return; }
    foundSet = new Set();
    levelActive = true;
    hintsLeft = 1;
    awaitingRealGuess = false;
    lastGuessCorrect = null;
    frameA.classList.remove("guess-mode", "frame-correct", "frame-wrong");
    frameB.classList.remove("guess-mode", "frame-correct", "frame-wrong");

    // randomize which physical side shows the real photo this round, so the
    // final "which is real" call can't be pattern-matched by position
    const swap = Math.random() < 0.5;
    leftKey = swap ? "fake" : "real";
    rightKey = swap ? "real" : "fake";
    imgReal.src = lvl[leftKey];
    imgReal.alt = "Photo A: " + lvl.name;
    imgFake.src = lvl[rightKey];
    imgFake.alt = "Photo B: " + lvl.name;

    clearMarkers(markersA); clearMarkers(markersB);
    renderPips(lvl.diffs.length);
    updateHintUI();
    roundBanner.innerHTML = 'ROUND <b>' + (i+1) + '/' + LEVELS.length + '</b> &mdash; ' + lvl.name.toUpperCase();
    hudLevel.textContent = i+1;
    hudLevelMax.textContent = LEVELS.length;
    hudFound.textContent = "0";
    hudFoundMax.textContent = lvl.diffs.length;
    hudScore.textContent = score;
    timeLeft = lvl.time;
    updateTimerUI();
    if(timerId) clearInterval(timerId);
    timerId = setInterval(tick, 1000);
  }

  function tick(){
    if(!levelActive) return;
    timeLeft--;
    updateTimerUI();
    if(timeLeft <= 0){
      clearInterval(timerId);
      onTimeout();
    }
  }

  function updateTimerUI(){
    hudTimer.textContent = Math.max(0, timeLeft);
    hudTimerChip.classList.toggle("low", timeLeft <= 10);
  }

  function renderPips(n){
    foundPipsEl.innerHTML = "";
    for(let k=0;k<n;k++){
      const d = document.createElement("div");
      d.className = "pip";
      d.dataset.idx = k;
      foundPipsEl.appendChild(d);
    }
  }

  function clearMarkers(svg){ svg.innerHTML = ""; }

  function drawFoundMarker(svg, x, y){
    const g = document.createElementNS(SVG_NS, "g");
    g.setAttribute("class", "marker-ring");
    const core = document.createElementNS(SVG_NS, "circle");
    core.setAttribute("class", "core");
    core.setAttribute("cx", x); core.setAttribute("cy", y); core.setAttribute("r", 3.2);
    const ring = document.createElementNS(SVG_NS, "circle");
    ring.setAttribute("cx", x); ring.setAttribute("cy", y); ring.setAttribute("r", 5.5);
    const ping = document.createElementNS(SVG_NS, "circle");
    ping.setAttribute("class", "ping");
    ping.setAttribute("cx", x); ping.setAttribute("cy", y); ping.setAttribute("r", 1);
    g.appendChild(ping); g.appendChild(ring); g.appendChild(core);
    svg.appendChild(g);
  }

  function drawFoundMarkers(svg, spots){ spots.forEach(s => drawFoundMarker(svg, s.x, s.y)); }

  function drawMissedMarker(svg, x, y){
    const t = document.createElementNS(SVG_NS, "text");
    t.setAttribute("class", "marker-x show");
    t.setAttribute("x", x); t.setAttribute("y", y+2);
    t.setAttribute("text-anchor", "middle");
    t.textContent = "✕";
    svg.appendChild(t);
  }

  function drawMissedMarkers(svg, spots){ spots.forEach(s => drawMissedMarker(svg, s.x, s.y)); }

  // a diff's real/fake field may be a single {x,y,r} or an array of them
  // (some edits touch two symmetric objects, e.g. two pillows, two pigeons)
  function spotsOf(d, panel){
    const v = d[panel];
    return Array.isArray(v) ? v : [v];
  }

  function scoreFloat(wrap, x, y, text, cls){
    const el = document.createElement("div");
    el.className = "score-float";
    el.style.left = x + "%";
    el.style.top = y + "%";
    el.textContent = text;
    if(cls) el.style.color = cls;
    wrap.appendChild(el);
    setTimeout(()=> el.remove(), 1000);
  }

  function updateFoundHud(n){ hudFound.textContent = n; }
  function updateScoreHud(){ hudScore.textContent = Math.max(0, score); }

  function updateHintUI(){
    btnHint.disabled = hintsLeft <= 0;
    btnHint.querySelector("span").textContent = hintsLeft > 0 ? "💡 HINT" : "💡 USED";
  }

  function drawHintMarker(svg, x, y){
    const g = document.createElementNS(SVG_NS, "g");
    g.setAttribute("class", "marker-hint");
    const c = document.createElementNS(SVG_NS, "circle");
    c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("r", 6);
    g.appendChild(c);
    svg.appendChild(g);
    return g;
  }

  function useHint(){
    if(!levelActive || hintsLeft <= 0) return;
    const lvl = LEVELS[levelIndex];
    const targetIdx = lvl.diffs.findIndex((d, idx) => !foundSet.has(idx));
    if(targetIdx < 0) return;
    hintsLeft--;
    updateHintUI();
    timeLeft = Math.max(1, timeLeft - HINT_COST);
    updateTimerUI();
    const d = lvl.diffs[targetIdx];
    const marksA = spotsOf(d, leftKey).map(s => drawHintMarker(markersA, s.x, s.y));
    const marksB = spotsOf(d, rightKey).map(s => drawHintMarker(markersB, s.x, s.y));
    setTimeout(() => { marksA.forEach(m => m.remove()); marksB.forEach(m => m.remove()); }, 1800);
  }

  // ---------- click handling ----------
  function distPct(rect, clientX, clientY){
    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100
    };
  }

  function handlePanelClick(panel, side, wrap, svg, flashEl, frameEl, evt){
    if(awaitingRealGuess){ handleRealGuess(side); return; }
    if(!levelActive) return;
    const lvl = LEVELS[levelIndex];
    const rect = wrap.getBoundingClientRect();
    const p = distPct(rect, evt.clientX, evt.clientY);

    // check unfound diffs first (closest match wins, so overlapping hit zones
    // resolve to whichever diff the click is actually nearest to)
    let hitIdx = -1, hitDist = Infinity;
    lvl.diffs.forEach((d, idx) => {
      if(foundSet.has(idx)) return;
      spotsOf(d, panel).forEach(s => {
        const dist = Math.hypot(p.x - s.x, p.y - s.y);
        if(dist <= s.r && dist < hitDist){ hitDist = dist; hitIdx = idx; }
      });
    });

    // no new hit: ignore clicks landing on an already-found spot (neutral, no penalty)
    if(hitIdx < 0){
      for(const idx of foundSet){
        const spots = spotsOf(lvl.diffs[idx], panel);
        if(spots.some(s => Math.hypot(p.x - s.x, p.y - s.y) <= s.r)) return;
      }
    }

    if(hitIdx >= 0){
      registerHit(hitIdx, wrap, p);
    } else {
      registerMiss(wrap, flashEl, frameEl, p);
    }
  }

  function registerHit(idx, wrap, clickPt){
    foundSet.add(idx);
    const lvl = LEVELS[levelIndex];
    const d = lvl.diffs[idx];
    drawFoundMarkers(markersA, spotsOf(d, leftKey));
    drawFoundMarkers(markersB, spotsOf(d, rightKey));
    score += 100;
    totalFoundAll++;
    updateScoreHud();
    updateFoundHud(foundSet.size);
    scoreFloat(wrap, clickPt.x, clickPt.y, "+100", "var(--success)");
    const pip = foundPipsEl.querySelector('[data-idx="' + idx + '"]');
    if(pip) pip.classList.add("filled");
    playSfx(sfxCorrect);

    if(foundSet.size === lvl.diffs.length){
      levelActive = false;
      clearInterval(timerId);
      setTimeout(startRealGuess, 350);
    }
  }

  // ---------- final call: which photo is real? ----------
  function startRealGuess(){
    awaitingRealGuess = true;
    roundBanner.innerHTML = '<b>ALL 5 FOUND</b> &mdash; now tap the photo you think is REAL';
    frameA.classList.add("guess-mode");
    frameB.classList.add("guess-mode");
  }

  function handleRealGuess(side){
    awaitingRealGuess = false;
    frameA.classList.remove("guess-mode");
    frameB.classList.remove("guess-mode");
    const correctSide = leftKey === "real" ? "A" : "B";
    const correct = side === correctSide;
    lastGuessCorrect = correct;
    if(correct){ score += GUESS_BONUS; totalGuessCorrect++; updateScoreHud(); }
    const correctFrame = correctSide === "A" ? frameA : frameB;
    const wrongFrame = correctSide === "A" ? frameB : frameA;
    correctFrame.classList.add("frame-correct");
    if(!correct) wrongFrame.classList.add("frame-wrong");
    playSfx(correct ? sfxWin : sfxWrong);
    setTimeout(() => {
      correctFrame.classList.remove("frame-correct");
      wrongFrame.classList.remove("frame-wrong");
      levelComplete();
    }, 1400);
  }

  function registerMiss(wrap, flashEl, frameEl, clickPt){
    totalMisses++;
    score = Math.max(0, score - 20);
    updateScoreHud();
    scoreFloat(wrap, clickPt.x, clickPt.y, "-20", "var(--danger)");
    flashEl.classList.remove("hit"); void flashEl.offsetWidth; flashEl.classList.add("hit");
    frameEl.classList.remove("shake"); void frameEl.offsetWidth; frameEl.classList.add("shake");
    playSfx(sfxWrong);
  }

  // ---------- level end states ----------
  function levelComplete(){
    const lvl = LEVELS[levelIndex];
    const timeBonus = timeLeft * 5;
    const guessBonus = lastGuessCorrect ? GUESS_BONUS : 0;
    score += timeBonus;
    updateScoreHud();
    $("statFound").textContent = lvl.diffs.length + "/" + lvl.diffs.length;
    $("statGuess").textContent = lastGuessCorrect ? ("✓ CORRECT (+" + GUESS_BONUS + ")") : "✗ MISSED";
    $("statGuess").style.color = lastGuessCorrect ? "var(--success)" : "var(--danger)";
    $("statTimeBonus").textContent = "+" + timeBonus;
    $("statRoundScore").textContent = "+" + (lvl.diffs.length * 100 + guessBonus + timeBonus);
    $("levelResultEyebrow").textContent = (levelIndex === LEVELS.length - 1) ? "FINAL ROUND CLEAR" : "ROUND " + (levelIndex+1) + " CLEAR";
    btnNextLevel.querySelector("span").textContent = (levelIndex === LEVELS.length - 1) ? "SEE FINAL REPORT" : "NEXT ROUND";
    playSfx(sfxWin);
    overlayLevel.hidden = false;
  }

  function onTimeout(){
    levelActive = false;
    const lvl = LEVELS[levelIndex];
    lvl.diffs.forEach((d, idx) => {
      if(foundSet.has(idx)) return;
      drawMissedMarkers(markersA, spotsOf(d, leftKey));
      drawMissedMarkers(markersB, spotsOf(d, rightKey));
    });
    $("statFoundTimeout").textContent = foundSet.size + "/" + lvl.diffs.length;
    overlayTimeout.hidden = false;
  }

  function retryLevel(){
    overlayTimeout.hidden = true;
    loadLevel(levelIndex);
  }

  function nextLevel(){
    overlayLevel.hidden = true;
    levelIndex++;
    if(levelIndex >= LEVELS.length){
      finalResults();
    } else {
      loadLevel(levelIndex);
    }
  }

  function finalResults(){
    showScreen("game");
    hideAllOverlays();
    const totalDiffs = LEVELS.reduce((s,l)=>s+l.diffs.length, 0);
    $("finalScore").textContent = Math.max(0, score);
    $("finalRounds").textContent = LEVELS.length + "/" + LEVELS.length;
    $("finalFound").textContent = totalFoundAll + "/" + totalDiffs;
    $("finalGuess").textContent = totalGuessCorrect + "/" + LEVELS.length;
    $("finalMisses").textContent = totalMisses;

    const best = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);
    if(score > best){
      localStorage.setItem(BEST_KEY, String(score));
      $("newBestBadge").hidden = false;
    } else {
      $("newBestBadge").hidden = true;
    }
    overlayFinal.hidden = false;
  }

  function playAgain(){
    hideAllOverlays();
    showScreen("menu");
    initMenu();
  }

  // ---------- wire up ----------
  btnStart.addEventListener("click", startGame);
  btnNextLevel.addEventListener("click", nextLevel);
  btnRetryLevel.addEventListener("click", retryLevel);
  btnHint.addEventListener("click", useHint);
  btnPlayAgain.addEventListener("click", playAgain);

  wrapReal.addEventListener("click", (e) => handlePanelClick(leftKey, "A", wrapReal, markersA, flashA, frameA, e));
  wrapFake.addEventListener("click", (e) => handlePanelClick(rightKey, "B", wrapFake, markersB, flashB, frameB, e));

  initMenu();
  showScreen("menu");
})();
