PS C:\Users\ymcla\DeltaV\301\cr-301d5\class-06\city-explore> heroku logs --tail
2020-04-13T15:46:32.312901+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T15:46:32.312985+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T15_46_32_308Z-debug.log
2020-04-13T16:00:31.579928+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=f3cf719b-d9ff-40ff-ae94-1da9d6014441 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:00:31.734459+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=6c036a95-d697-4dbc-920b-cd2dd0d11166 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:07:52.806666+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T16:07:58.892118+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T16:07:58.746719+00:00 app[web.1]:
2020-04-13T16:07:58.746738+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T16:07:58.746739+00:00 app[web.1]: > node server.js
2020-04-13T16:07:58.746739+00:00 app[web.1]:
2020-04-13T16:07:58.794945+00:00 app[web.1]: internal/modules/cjs/loader.js:983
2020-04-13T16:07:58.794946+00:00 app[web.1]: throw err;
2020-04-13T16:07:58.794947+00:00 app[web.1]: ^
2020-04-13T16:07:58.794947+00:00 app[web.1]:
2020-04-13T16:07:58.794947+00:00 app[web.1]: Error: Cannot find module '/app/server.js'
2020-04-13T16:07:58.794948+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:980:15)
2020-04-13T16:07:58.794948+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:862:27)
2020-04-13T16:07:58.794949+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T16:07:58.794949+00:00 app[web.1]: at internal/main/run_main_module.js:18:47 {
2020-04-13T16:07:58.794950+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2020-04-13T16:07:58.794950+00:00 app[web.1]: requireStack: []
2020-04-13T16:07:58.794950+00:00 app[web.1]: }
2020-04-13T16:07:58.801387+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T16:07:58.801707+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T16:07:58.802918+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T16:07:58.803084+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T16:07:58.803252+00:00 app[web.1]: npm ERR!
2020-04-13T16:07:58.803389+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T16:07:58.803517+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T16:07:58.809761+00:00 app[web.1]:
2020-04-13T16:07:58.810010+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T16:07:58.810052+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T16_07_58_804Z-debug.log
2020-04-13T16:10:03.592575+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=74ca4d03-0bda-4aae-aaff-e89ad0ef7bc0 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:10:03.748078+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=f6362c5c-64fc-4565-826e-a8e670cd484d fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:23:19.434179+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=133d30ef-7b79-4bb8-90bc-7151b6bf4312 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:23:19.282489+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=dbfe611f-2992-473b-92cb-dc8e0886222e fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:32:19.000000+00:00 app[api]: Build started by user ymclapp@yahoo.com
2020-04-13T16:32:28.832225+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=858545cc-0c79-48f9-b438-b5aad923c2ba fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:32:28.994209+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=b2121ad4-1266-4c9d-beb8-c6ef254c7236 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:32:43.651529+00:00 app[api]: Deploy 0d1b722f by user ymclapp@yahoo.com
2020-04-13T16:32:43.651529+00:00 app[api]: Release v8 created by user ymclapp@yahoo.com
2020-04-13T16:32:44.438897+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T16:32:45.000000+00:00 app[api]: Build succeeded
2020-04-13T16:32:49.866066+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T16:32:49.869214+00:00 heroku[web.1]: State changed from crashed to starting
2020-04-13T16:32:49.722019+00:00 app[web.1]:
2020-04-13T16:32:49.722037+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T16:32:49.722037+00:00 app[web.1]: > node server.js
2020-04-13T16:32:49.722037+00:00 app[web.1]:
2020-04-13T16:32:49.777921+00:00 app[web.1]: /app/server.js:82
2020-04-13T16:32:49.777922+00:00 app[web.1]: © 2020 GitHub, Inc.
2020-04-13T16:32:49.777922+00:00 app[web.1]:
2020-04-13T16:32:49.777923+00:00 app[web.1]:
2020-04-13T16:32:49.777923+00:00 app[web.1]: SyntaxError: Invalid or unexpected token
2020-04-13T16:32:49.777923+00:00 app[web.1]: at wrapSafe (internal/modules/cjs/loader.js:1070:16)
2020-04-13T16:32:49.777924+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:1120:27)
2020-04-13T16:32:49.777924+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
2020-04-13T16:32:49.777924+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:1000:32)
2020-04-13T16:32:49.777925+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:899:14)
2020-04-13T16:32:49.777925+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T16:32:49.777925+00:00 app[web.1]: at internal/main/run_main_module.js:18:47
2020-04-13T16:32:49.783636+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T16:32:49.783875+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T16:32:49.784838+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T16:32:49.784981+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T16:32:49.785167+00:00 app[web.1]: npm ERR!
2020-04-13T16:32:49.785306+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T16:32:49.785480+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T16:32:49.792060+00:00 app[web.1]:
2020-04-13T16:32:49.792262+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T16:32:49.792395+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T16_32_49_786Z-debug.log
2020-04-13T16:32:55.901591+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-13T16:32:55.693328+00:00 app[web.1]:
2020-04-13T16:32:55.693352+00:00 app[web.1]: > server@1.0.0 start /app
2020-04-13T16:32:55.693352+00:00 app[web.1]: > node server.js
2020-04-13T16:32:55.693353+00:00 app[web.1]:
2020-04-13T16:32:55.798068+00:00 app[web.1]: /app/server.js:82
2020-04-13T16:32:55.798070+00:00 app[web.1]: © 2020 GitHub, Inc.
2020-04-13T16:32:55.798070+00:00 app[web.1]:
2020-04-13T16:32:55.798070+00:00 app[web.1]:
2020-04-13T16:32:55.798071+00:00 app[web.1]: SyntaxError: Invalid or unexpected token
2020-04-13T16:32:55.798071+00:00 app[web.1]: at wrapSafe (internal/modules/cjs/loader.js:1070:16)
2020-04-13T16:32:55.798071+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:1120:27)
2020-04-13T16:32:55.798072+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
2020-04-13T16:32:55.798072+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:1000:32)
2020-04-13T16:32:55.798072+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:899:14)
2020-04-13T16:32:55.798073+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
2020-04-13T16:32:55.798073+00:00 app[web.1]: at internal/main/run_main_module.js:18:47
2020-04-13T16:32:55.804507+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2020-04-13T16:32:55.804795+00:00 app[web.1]: npm ERR! errno 1
2020-04-13T16:32:55.805980+00:00 app[web.1]: npm ERR! server@1.0.0 start: `node server.js`
2020-04-13T16:32:55.806074+00:00 app[web.1]: npm ERR! Exit status 1
2020-04-13T16:32:55.806185+00:00 app[web.1]: npm ERR!
2020-04-13T16:32:55.806270+00:00 app[web.1]: npm ERR! Failed at the server@1.0.0 start script.
2020-04-13T16:32:55.806344+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-04-13T16:32:55.811797+00:00 app[web.1]:
2020-04-13T16:32:55.812045+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2020-04-13T16:32:55.812236+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2020-04-13T16_32_55_806Z-debug.log
2020-04-13T16:35:00.714559+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=city-explore-yc.herokuapp.com request_id=83336d08-e183-4312-baf0-76af17468cb6 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
2020-04-13T16:35:00.896506+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=city-explore-yc.herokuapp.com request_id=f7ea902e-94d1-4ab6-9191-b8094c75e100 fwd="63.152.38.255" dyno= connect= service= status=503 bytes= protocol=https
