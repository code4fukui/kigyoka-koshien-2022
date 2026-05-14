# 起業家甲子園2022

このリポジトリは、日本の「起業家甲子園2022」のビジネスプランをアーカイブし、AI生成のフィードバックを追加したものです。オープンデータ、処理用スクリプト、および結果を展示する静的ウェブサイトが含まれています。

## ライブデモ

GitHub Pagesで、AI生成のアドバイス付きのプロジェクト展示をご覧いただけます:

**➡️ [https://code4fukui.github.io/kigyoka-koshien-2022/](https://code4fukui.github.io/kigyoka-koshien-2022/)**

このサイトでは、各チームのビジネスプラン（概要）と、AIによる発展のためのアドバイスを紹介しています。

## データ

データセットは[NICT ICTメンター・プラットフォーム](https://www.nict.go.jp/venture/ictmpre.html)から提供されており、[オープンデータライセンス](https://github.com/code4fukui/opendata-license)の下で公開されています。

#### 1. 起業家甲子園2022オープンデータ
全参加チームのオリジナルのビジネスプランデータです。
- [JSON](kigyoka-koshien-2022.json)
- [CSV](kigyoka-koshien-2022.csv)
- [CBOR](kigyoka-koshien-2022.cbor)

#### 2. AIコメント付きオープンデータ
オリジナルデータセットに、ChatGPTが生成した発展のためのアドバイスを追加したものです。
- [JSON](kigyoka-koshien-2022-ai.json)
- [CSV](kigyoka-koshien-2022-ai.csv)
- [CBOR](kigyoka-koshien-2022-ai.cbor)

## 自動化スクリプト

このプロジェクトでは、データの処理と静的サイトの構築に以下のDenoスクリプトを使用しています:

- `cnv.js`: 生のテキストデータをベースとなる `kigyoka-koshien-2022.json` ファイルに変換します。
- `make-comment.js`: 各ビジネスプランの概要をチャットAIに送信して発展のためのアドバイスを生成し、結果を保存します。
- `afterprocess.js`: AIが生成したコメントを整形し、画像の絶対パスを追加します。
- `makehtml.js`: 最終的に処理されたデータから、デモサイト用の静的HTMLページを `docs/` ディレクトリに生成します。

## 使い方

データファイルは直接使用できます。例えば、`jq` を使って最初のエントリのタイトルを抽出するには以下のようになります:

```bash
cat kigyoka-koshien-2022.json | jq '.[0].title'
```

## 関連リンク

- **ブログ記事:** [「起業家甲子園2022」オープンデータ＆AIでコメント、ビジネスプランを磨き、挑戦者とメンターを増やそう！](https://fukuno.jig.jp/3877)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
