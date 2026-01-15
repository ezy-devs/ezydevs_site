#!/usr/bin/env bash
# exit on error
set -o errexit

# --- 1. Backend Build ---
pip install -r backend/requirements.txt
python backend/manage.py migrate

# --- 2. Frontend Build ---
cd frontend
npm install
npm run build
cd ..

# --- 3. Finalize ---
python backend/manage.py collectstatic --no-input