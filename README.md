Serverless Shared Library
=========================

*IMPORTANT: This project is deprecrated. Please head on over to https://www.npmjs.com/package/serverless-hq for a more inclusive Serverless boilerplate solution.*

We like to structure our Serverless Framework applications as a directory with multiple services, each representing various silos of functionality. To better facilitate our applications, we needed the ability to share functions and methods between all our services.

## Strategy

Because Lambda needs everything packaged nice and neatly into small zip folders that contain each service, this plugin essentially takes your ```lib``` folder and continually syncs it within all your services. In doing so, this plugin also minifies and browserify's your library to keep things fairly optimized. An added benefit is when you're developing, you won't be confused as to what's minified and what's not, so you're constantly aware of where to edit. For i.e., you don't want to be editing any synced and minified ```lib``` code inside your services, because they'll be overwritten by your master ```lib``` directory.

## Quick Start

1. Create your ```lib``` folder with an entry ```index.js``` file, alongside your service directories.
2. Make sure you include ```serverless-shared-library``` into your ```serverless.yml``` and ```plugins:``` markup.
3. Inside your functions, call ```const lib = require('./lib.js')``` for full access to your shared library! 
4. Run ```serverless offline``` or ```serverless deploy``` and your library now lives in your service, but it's all shared! Now go code your heart out.
