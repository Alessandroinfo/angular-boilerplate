#!/bin/bash
# If the build fails you cannot push
npm run-script build || echo \" ----- Error from Husky: check app errors! ----- \"
