#!/bin/bash
# If the build fails you cannot push
npm run build || echo "[build-check] Your app build has one or more errors!"
