function startWalkingNavigation() {
  var destination = document.getElementById("destination").value.trim();
  if (!destination) { alert("目的地を入力してください"); return; }

  // --- ここでシーン2表示 ---
  showScene2DuringNavigation();

  // 仮のルート計算（Google Maps API の例）
  console.log("ルート検索開始: " + destination);
  setTimeout(function() {
    // ルート計算完了後、ナビ画面に戻す
    returnToNavAfterRoute();
    document.getElementById("navigation-progress").innerText = "ルート計算完了";
  }, 3000); // 3秒後に仮処理
}