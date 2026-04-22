@echo off
echo Setting up Nagpur Real Estate Platform...

echo Installing Backend Dependencies...
cd backend
pip install -r requirements.txt
cd ..

echo Installing Frontend Dependencies...
cd frontend
npm install
cd ..

echo Setup Complete!
pause
