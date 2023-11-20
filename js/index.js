// GPS センサの値が変化したら何らか実行する geolocation.watchPosition メソッド
navigator.geolocation.watchPosition( (position) => {
  var lat  = position.coords.latitude;            // 緯度を取得
  var lng  = position.coords.longitude;           // 経度を取得
  var acc = position.coords.accuracy;            // 緯度・経度の精度を取得
  displayData(lat, lng, acc);                    // displayData 関数を実行
}, (error) => {
  alert('GPS情報が取得できません．権限を確認してください')
}, {
  enableHighAccuracy: true
});


// データを表示する displayData 関数


function displayData(lat, lng, acc) {
  var txt = document.getElementById("txt");       // データを表示するdiv要素の取得
  txt.innerHTML = "緯度, 経度: " + lat + ", " + lng + "<br>"  // データ表示
                + "精度: "       + acc;
}
