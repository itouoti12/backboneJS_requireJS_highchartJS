# requireJSリポジトリ

require.js  
backbone.js  
highchart.js  
の複合的な使用方法を確認するために作成した。  

各ディレクトリの内容を説明する。

#### 000_JsonServer
backboneJSでfetch処理を使うためのモックサーバ。  
セットアップ方法を記載。

#### 001_data_main
対象・・・requireJS  
data_main属性で実行対象を指定する方法。  
実行対象が「define」となっていても問題なく動く。

#### 002_require
対象・・・requireJS  
別途実行対象をscriptタグで指定する方法。  
実行対象は「require」となっていなければ動かない。

#### 003_define_error
対象・・・requireJS  
002の派生。  
実行対象を意図的に「define」とし、エラーが出ることを確認している。

#### 004_config_001
対象・・・requireJS  
configの読み込み方法その１
require.jsの読み込みより先にrequireフィールドを宣言し、
configを設定している。

#### 005_config_002
対象・・・requireJS  
configの読み込み方法その2
require.jsの読み込み後にrequire.config関数を呼び出し、
configを設定している。

#### 006_config_003
対象・・・requireJS  
config.jsの中からHelloWorldを呼び出している。

#### 007_backboneJS


#### 008_backboneJS
#### 009_backboneJS
#### 010_backboneJS
#### 011_backboneJS
#### 012_backboneJS
#### 013_highchartJS
#### 014_highchartJS
#### 015_highchartJS
#### 016_highchartJS
#### 017_highchartJS
#### 018_backboneJS
#### 019_highchartJS
