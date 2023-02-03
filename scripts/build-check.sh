#!/bin/bash
# If the build fails, echo the message
npm run build || echo "[build-check] Your app build has one or more errors!"
