2020-04-13T09:43:03.286768+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T09:43:03.286889+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T09_43_03_280Z-debug.log
2020-04-13T15:27:28.300428+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T15:27:34.173148+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T15:27:33.979959+00:00 app[web.1]: 
2020-04-13T15:27:33.979981+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T15:27:33.979981+00:00 app[web.1]: > node server.js
2020-04-13T15:27:33.979981+00:00 app[web.1]:
2020-04-13T15:27:34.040162+00:00 app[web.1]: internal/modules/cjs/loader.js:985
2020-04-13T15:27:34.040163+00:00 app[web.1]: throw err;
2020-04-13T15:27:34.040164+00:00 app[web.1]: ^
2020-04-13T15:27:34.040164+00:00 app[web.1]:
2020-04-13T15:27:34.040164+00:00 app[web.1]: Error: Cannot find module '/app/server.js'
2020-04-13T15:27:34.040165+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:982:15)
2020-04-13T15:27:34.040166+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:864:27)
2020-04-13T15:27:34.040166+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T15:27:34.040166+00:00 app[web.1]: at internal/main/run_main_module.js:18:47 {
2020-04-13T15:27:34.040167+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2020-04-13T15:27:34.040167+00:00 app[web.1]: requireStack: []
2020-04-13T15:27:34.040168+00:00 app[web.1]: }
2020-04-13T15:27:34.056174+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T15:27:34.056449+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T15:27:34.057507+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T15:27:34.057661+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T15:27:34.057829+00:00 app[web.1]: npm ERR!
2020-04-13T15:27:34.057967+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T15:27:34.058132+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T15:27:34.064308+00:00 app[web.1]:
2020-04-13T15:27:34.064437+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T15:27:34.064509+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T15_27_34_058Z-debug.log
2020-04-13T15:30:48.638289+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=c3d39054-0f52-4477-9378-9ece50595e15 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:30:48.848930+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=ffcd29a0-e403-44e1-a2ce-e2b477ec52c7 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:42:39.198304+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=8890ea24-4fc1-49a2-b4c4-37939ae309b2 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:42:39.029790+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=440bbe73-4602-4bf2-8150-152242d2fcce fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:43:27.679581+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=820f5cb5-c157-4e09-ae25-79969bad9b7b fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:43:27.831430+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=24ef1d56-27a6-40d7-b1c0-d79ba3f17791 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:45:49.000000+00:00 app[api]: Build started by user ymclapp@yahoo.com
2020-04-13T15:46:17.410216+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=6eef938d-6e15-41a9-8311-4092328c4a29 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:46:17.570519+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=712c1057-71b8-47eb-b5e6-e517c33fcdf1 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T15:46:21.306200+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T15:46:20.758526+00:00 app[api]: Release v7 created by user ymclapp@yahoo.com
2020-04-13T15:46:20.758526+00:00 app[api]: Deploy d9baeb96 by user ymclapp@yahoo.com
2020-04-13T15:46:22.000000+00:00 app[api]: Build succeeded
2020-04-13T15:46:26.663201+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T15:46:26.666596+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T15:46:26.517084+00:00 app[web.1]:
2020-04-13T15:46:26.517138+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T15:46:26.517139+00:00 app[web.1]: > node server.js
2020-04-13T15:46:26.517139+00:00 app[web.1]:
2020-04-13T15:46:26.562905+00:00 app[web.1]: internal/modules/cjs/loader.js:983
2020-04-13T15:46:26.562922+00:00 app[web.1]: throw err;
2020-04-13T15:46:26.562925+00:00 app[web.1]: ^
2020-04-13T15:46:26.562926+00:00 app[web.1]:
2020-04-13T15:46:26.562926+00:00 app[web.1]: Error: Cannot find module '/app/server.js'
2020-04-13T15:46:26.562943+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:980:15)
2020-04-13T15:46:26.562944+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:862:27)
2020-04-13T15:46:26.562949+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T15:46:26.562950+00:00 app[web.1]: at internal/main/run_main_module.js:18:47 {
2020-04-13T15:46:26.562950+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2020-04-13T15:46:26.562951+00:00 app[web.1]: requireStack: []
2020-04-13T15:46:26.562951+00:00 app[web.1]: }
2020-04-13T15:46:26.571041+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T15:46:26.571372+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T15:46:26.572888+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T15:46:26.573054+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T15:46:26.573256+00:00 app[web.1]: npm ERR!
2020-04-13T15:46:26.573411+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T15:46:26.573588+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T15:46:26.595383+00:00 app[web.1]:
2020-04-13T15:46:26.595599+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T15:46:26.595733+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T15_46_26_574Z-debug.log
2020-04-13T15:46:32.381566+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T15:46:32.250277+00:00 app[web.1]:
2020-04-13T15:46:32.250308+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T15:46:32.250308+00:00 app[web.1]: > node server.js
2020-04-13T15:46:32.250309+00:00 app[web.1]:
2020-04-13T15:46:32.299557+00:00 app[web.1]: internal/modules/cjs/loader.js:983
2020-04-13T15:46:32.299560+00:00 app[web.1]: throw err;
2020-04-13T15:46:32.299561+00:00 app[web.1]: ^
2020-04-13T15:46:32.299561+00:00 app[web.1]:
2020-04-13T15:46:32.299561+00:00 app[web.1]: Error: Cannot find module '/app/server.js'
2020-04-13T15:46:32.299562+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:980:15)
2020-04-13T15:46:32.299563+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:862:27)
2020-04-13T15:46:32.299563+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T15:46:32.299563+00:00 app[web.1]: at internal/main/run_main_module.js:18:47 {
2020-04-13T15:46:32.299564+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2020-04-13T15:46:32.299564+00:00 app[web.1]: requireStack: []
2020-04-13T15:46:32.299565+00:00 app[web.1]: }
2020-04-13T15:46:32.305255+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T15:46:32.305572+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T15:46:32.306934+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T15:46:32.307112+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T15:46:32.307296+00:00 app[web.1]: npm ERR!
2020-04-13T15:46:32.307404+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T15:46:32.307506+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T15:46:32.312723+00:00 app[web.1]:
2020-04-13T15:46:32.312901+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T15:46:32.312985+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T15_46_32_308Z-debug.log
2020-04-13T16:00:31.579928+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=f3cf719b-d9ff-40ff-ae94-1da9d6014441 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:00:31.734459+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=6c036a95-d697-4dbc-920b-cd2dd0d11166 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
