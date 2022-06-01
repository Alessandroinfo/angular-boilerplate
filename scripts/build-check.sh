#!/bin/bash
# If the build fails you cannot push
npm run build || echo \" ----- Error from Husky: check app errors! ----- \"
