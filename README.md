JS + Node.jsによるWebクローラー/ネットエージェント [開発テクニック] サンプルソース
====

# Description
ソシム株式会社から発売された[「JS + Node.jsによるWebクローラー/ネットエージェント [開発テクニック]」](http://www.amazon.co.jp/exec/obidos/ASIN/4883379930)という書籍をもとに、記載されているサンプルソースを実際に書いて動作させたものです。

記載のコードではうまく動かなかった部分は[著者のサポートページ](http://kujirahand.com/blog/index.php?Node.js%E3%81%AB%E3%82%88%E3%82%8BWeb%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%E9%96%8B%E7%99%BA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF)や、自分なりに調べた内容を元に一部修正していますので、[ソシムのサポートページ](http://www.socym.co.jp/support/s-993)からダウンロード出来るサンプルとは異なります。

なお、章毎に使用しているモジュールが異なるため、章毎のディレクトリ内に pakage.json を作成して各フォルダに設置しています。

# サンプルソースとの相違点
### 第2章 HTMLの解析（リンクと画像の抽出）

|章|ファイル名|修正内容|
|---|:---|:---|
|第2章02|[showimage.js](ch02/02-analize/showimage.js)|fetch 対象の Wikipedia の URL に日本語が含まれており、404 エラーになるため、URL エンコードの処理を追加|
|第2章02|[dl-image.js](ch02/02-analize/dl-image.js)|fetch 対象の Wikipedia の URL に日本語が含まれており、404 エラーになるため、URL エンコードの処理を追加|
|第2章02|[dl-image.js](ch02/02-analize/dl-image.js)|ダウンドードする画像ファイルの URL に日本語が含まれるのを考慮するため、URL エンコードの処理を追加|
