# QR-Code-generator
qr code project


A simple project to generate QR codes from text or URLs.  
Supports:
- Command-line usage (CLI)
- Web interface (Flask app)

### Features
- CLI: `python qr_cli.py --text "Hello" --output hello.png`
- Web: `python qr_web.py` → open [http://localhost:5000](http://localhost:5000)
- Custom scale for QR code size
- Download QR as PNG

### Installation
```bash
git clone https://github.com/your-username/QR-Code-Generator.git
cd QR-Code-Generator
pip install -r requirements.txt
