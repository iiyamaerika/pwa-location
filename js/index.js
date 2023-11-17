// 取得したデータを表示
  function displayLocation(lat, lon, acc) {
      var txt = document.getElementById("txt");
      txt.innerHTML = "送信時刻:" + new Date() + "<br>" +
      "緯度, 経度: " + lat + ", " + lon + "<br>" +
      "精度: " + acc;
  }