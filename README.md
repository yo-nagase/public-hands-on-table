NextJSとgolangの開発環境をdockerで作るサンプルです。  
両方ともhot reloadに対応しており、一度起動したらあとはそのままコード修正すると自動的に反映されるので効率良い開発ができます。

## Dev containerで起動

vscodeを開き、画面左下の><アイコンをクリックします。client、serverフォルダを選択し、containerを開きます
![image](https://user-images.githubusercontent.com/19295829/200148805-cd30bfed-0bce-4586-99ca-cfe2aaf4f682.png)

画面中央上にプルダウンが表示されるので、その中から"open folder in container"を選択し、server, clientのどちらかを選択する
![image](https://user-images.githubusercontent.com/19295829/200148811-d03e8886-2193-4bbf-bed0-a80d332415ee.png)


## DockerComposeで起動

vscodeの機能を使わずに起動をする方法です。こちらの方が起動一回で済むので楽かも。

```docker
docker-compose build && docker-compose up
```


## アクセス確認
起動ができたら、それぞれアクセスをしてみます。

#### サーバーアクセス先
http://localhost:8888

#### クライアントアクセス先
http://localhost:3434

## 確認
ソースコードを修正してアクセスすると、修正内容が反映されていることを確認します。
