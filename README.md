## reactel-to-html-server

https://reactel-to-html-server.vercel.app/api/ に POST で body を html で React Element を送ってください。
それを評価した HTML が帰ってきます。

example

```
$ curl -X POST "https://reactel-to-html-server.vercel.app/api/" \
  -H "Content-Type: application/json" \
  -d '{
  "html": "<div className={`taro`} style={{color: `red`, display: `flex`}}></div>"
}'

<div class=\"taro\" style=\"color:red;display:flex\" data-reactroot=\"\"></div>
```
