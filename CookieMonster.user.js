// ==UserScript==
// @name Cookie Monster
// @version 1
// @description load cookie monster mod
// @match /https?://orteil.dashnet.org/cookieclicker/
// ==/UserScript==

const readyCheck = setInterval(() => {
  const Game = unsafeWindow.Game;

  if (typeof Game !== 'undefined' && typeof Game.ready !== 'undefined' && Game.ready) {
    Game.LoadMod('https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js');
    clearInterval(readyCheck);
  }
}, 1000);
