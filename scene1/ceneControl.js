// sceneControl.js

// 最初にシーン1を表示、ナビ画面を非表示
window.onload = function() {
  document.getElementById("unity-container").style.display = "block";
  document.getElementById("magic-app").style.display = "none";
};

// シーン1で Enter が押されたらナビ画面へ切替
window.addEventListener("message", function(e){
  if (e.data === "scene1-enter") {
    document.getElementById("unity-container").style.display = "none";
    document.getElementById("magic-app").style.display = "block";
    console.log("✅ シーン1終了 → ナビ画面へ切替");
  }
});

// 経路検索中にシーン2を表示
function showScene2DuringNavigation() {
  document.getElementById("unity-container").style.display = "block";
  document.getElementById("magic-app").style.display = "none";
  document.getElementById("unity-container").src = "butterfly/index.html";
  console.log("🌀 経路検索中 → シーン2(butterfly)表示");
}

// 経路完了後ナビ画面へ戻す
function returnToNavAfterRoute() {
  document.getElementById("unity-container").style.display = "none";
  document.getElementById("magic-app").style.display = "block";
  console.log("✅ 経路完了 → ナビ画面復帰");
}