# MarkdownUrlGenerator
m2GMは、manabaの課題概要をGitHubMarkdownとして出力するGoogleChrome用ブックマークレットです。   
   
便利だと感じていただければStarをくださると喜びます。

# 使い方/動作
作成したブックマークレットをmanaba上の課題ページでクリックすると、manabaの課題概要をGitHubのマークダウン形式でコピーします。
   
課題ページは
 - 小テスト
 - アンケート
 - レポート
 の3つに対応しています。
   
### 生成されるリンク例
[hogehoge科目名]  (https://manaba.hoge~~~~~)   
第n回課題   
受付開始日時 | 2021-04-26 22:00:00   
受付終了日時 | 2021-04-27 00:00:00   
   
# 導入方法
 1. **GoogleChromeのブックマークマネージャーを開きます**(Ctrl+Shift+O)
 2. 右上の**新しいブックマーク**を開きます    
    
 ![image](https://user-images.githubusercontent.com/49768768/102811815-549e7f80-4409-11eb-88c3-e379b3f2e0d6.png)
    
 3. 名前には "m2GM" などの**任意の名前を入力**します。
 4. URLには以下の文字列を入力してください。([compiled.js](./compiled.js))    
   
```
javascript:(function(){var a=document.location.href;if(!1===a.startsWith("https://manaba"))alert("[\u30a8\u30e9\u30fc]\u5bfe\u8c61\u304cmanaba\u3067\u306f\u3042\u308a\u307e\u305b\u3093");else{var d=document.querySelector("table"),b=d.querySelector("th").innerHTML.trim();b=b.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,"").trim();var c=document.getElementById("coursename").innerHTML,e=d.querySelectorAll("tr");d="\u53d7\u4ed8\u958b\u59cb\u65e5\u6642 | "+e[2].querySelector("td").innerHTML;e="\u53d7\u4ed8\u7d42\u4e86\u65e5\u6642 | "+
e[3].querySelector("td").innerHTML;b="["+c+"]("+a+")\n"+b+"\n"+d+"\n"+e;a=document.createElement("div");c=document.createElement("pre");c.style.webkitUserSelect="auto";c.style.userSelect="auto";a.appendChild(c).textContent=b;b=a.style;b.position="fixed";b.right="200%";document.body.appendChild(a);document.getSelection().selectAllChildren(a);document.execCommand("copy");document.body.removeChild(a);alert("\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002")}})();
```
    
![image](https://user-images.githubusercontent.com/49768768/116085395-bcc3e180-a6d9-11eb-852c-5f3f09095708.png)

5. 保存を押して導入完了です。

# 注意事項
動作の保証などはいたしません。利用は自己責任でお願いします。

# 利用しているもの
 - [Closure Compiler](https://closure-compiler.appspot.com/home)
