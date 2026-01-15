#!/usr/bin/env bash
set -o errexit

pip install -r backend/requirements.txt
python backend/manage.py migrate

cd frontend
npm install
npm run build
cd ..

# Ensure the directory exists to avoid OS errors
mkdir -p staticfiles

python backend/manage.py collectstatic --no-input