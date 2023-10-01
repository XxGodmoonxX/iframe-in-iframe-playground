指定したURLをiframeとして読み込む  
元はと言えばiframeの中で更にiframeある場合どうなるか検証したかった  
けど他にも普通にiframeとして読み込んだときの動作確認に便利

http://localhost のものをiframeとして読み込んでみたい場合`https`のページで`http`のものiframeとしては読み込めないので、このリポジトリでローカルでポート番号かぶらないように（Next.jsだと https://nextjs.org/docs/pages/api-reference/next-cli#development とか）立ち上げてinputにlocalhostのURLを入力すると動作確認できて便利