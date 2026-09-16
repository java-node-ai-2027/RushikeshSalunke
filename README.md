# 🛡️ DocShield OCR

### Secure Document OCR, PII De-identification & AI Text Cleaning

DocShield OCR is a privacy-focused document processing application that extracts text from uploaded images, detects and removes Personally Identifiable Information (PII), cleans OCR-generated text using a locally hosted Large Language Model (LLM), and stores the processed document in MongoDB.

The project is built using **Node.js without Express**, **Tesseract.js**, **Microsoft Presidio**, **Ollama + Qwen3**, and **MongoDB**.

---

## ✨ Features

* 📤 Upload document/image files
* 🔍 Extract text using Tesseract OCR
* 🔐 Detect PII using Microsoft Presidio Analyzer
* 🕵️ De-identify detected PII using Microsoft Presidio Anonymizer
* 🤖 Clean OCR errors using a locally running Qwen3 LLM through Ollama
* 🗄️ Store processed documents in MongoDB
* 🌐 Simple browser-based interface
* 🚫 No external LLM API is required
* 🔒 De-identified text is sent to the local Ollama instance
* 🔎 Retrieve previously processed documents through an API

---

# 🏗️ Architecture

```text
                    User
                     │
                     ▼
              ┌──────────────┐
              │   Browser    │
              │  Upload UI   │
              └──────┬───────┘
                     │
                     │ POST /upload
                     ▼
              ┌──────────────┐
              │   Node.js    │
              │ HTTP Server  │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Tesseract.js │
              │     OCR      │
              └──────┬───────┘
                     │
                     │ OCR Text
                     ▼
              ┌──────────────┐
              │   Presidio   │
              │   Analyzer   │
              └──────┬───────┘
                     │
                     │ Detected PII
                     ▼
              ┌──────────────┐
              │   Presidio   │
              │  Anonymizer  │
              └──────┬───────┘
                     │
                     │ De-identified Text
                     ▼
              ┌──────────────┐
              │    Ollama    │
              │   Qwen3:4b   │
              └──────┬───────┘
                     │
                     │ Cleaned Text
                     ▼
              ┌──────────────┐
              │   MongoDB    │
              │   Database   │
              └──────────────┘
```

---

# 🔄 Processing Flow

When a user uploads an image:

```text
Image
  ↓
Save uploaded file
  ↓
Tesseract OCR
  ↓
Raw OCR text
  ↓
Presidio Analyzer
  ↓
Detect PII
  ↓
Presidio Anonymizer
  ↓
De-identified text
  ↓
Ollama + Qwen3
  ↓
Cleaned text
  ↓
MongoDB
```

For example, OCR may initially produce:

```text
Patient Name: John Smith
Email: john@example.com
Age: 45
Diagnosis: Rheumatoid Arthritis
```

After de-identification:

```text
Patient Name: <PERSON>
Email: <EMAIL_ADDRESS>
Age: 45
Diagnosis: Rheumatoid Arthritis
```

After AI text cleaning:

```text
Patient Name: <PERSON>
Email: <EMAIL_ADDRESS>
Age: 45
Diagnosis: Rheumatoid Arthritis
```

The exact output depends on the uploaded document and OCR quality.

---

# 🧰 Technologies Used

| Technology                    | Purpose                        |
| ----------------------------- | ------------------------------ |
| Node.js                       | Backend server                 |
| Native Node.js HTTP           | HTTP server without Express    |
| Tesseract.js                  | OCR                            |
| Microsoft Presidio Analyzer   | PII detection                  |
| Microsoft Presidio Anonymizer | PII replacement                |
| Ollama                        | Local LLM runtime              |
| Qwen3:4b                      | OCR text cleaning              |
| MongoDB                       | Document storage               |
| HTML/CSS/JavaScript           | Frontend                       |
| Busboy                        | Multipart file upload handling |

---

# 📁 Project Structure

```text
DocShield-OCR/
│
├── src/
│   │
│   ├── server.js
│   ├── deidentify.js
│   ├── ollama.js
│   ├── index.html
│   │
│   ├── uploads/
│   │
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

Depending on your final project structure, folder names may be slightly different.

---

# 💻 Prerequisites

Before running the project, install the following:

### 1. Node.js

Install Node.js from the official website:

[Node.js](https://nodejs.org/?utm_source=chatgpt.com)

Check installation:

```bash
node --version
npm --version
```

Node.js 18+ is recommended.

---

### 2. MongoDB

Install MongoDB Community Server:

[MongoDB Community Server](https://www.mongodb.com/try/download/community?utm_source=chatgpt.com)

Verify MongoDB is running.

The application uses:

```text
mongodb://127.0.0.1:27017
```

The application creates/uses:

```text
Database:
ocr_database

Collection:
ocr_documents
```

You do not need to manually create the database or collection. MongoDB creates them when the first document is inserted.

---

### 3. Ollama

Install Ollama:

[Ollama](https://ollama.com/?utm_source=chatgpt.com)

Check installation:

```bash
ollama --version
```

---

### 4. Qwen3 Model

Download the model:

```bash
ollama pull qwen3:4b
```

Check installed models:

```bash
ollama list
```

You should see:

```text
qwen3:4b
```

Test it:

```bash
ollama run qwen3:4b
```

Then type:

```text
Hello
```

If Qwen responds, the model is working.

Exit the interactive model using:

```text
Ctrl + C
```

---

### 5. Microsoft Presidio

DocShield OCR uses two Presidio services:

```text
Presidio Analyzer
Presidio Anonymizer
```

The application expects:

```text
Analyzer:
http://localhost:5002

Anonymizer:
http://localhost:5001
```

You must have both services running before uploading documents.

---

# 🔐 Running Presidio

Presidio can be run using Docker.

Make sure Docker Desktop is installed:

[Docker Desktop](https://www.docker.com/products/docker-desktop/?utm_source=chatgpt.com)

Start the Analyzer:

```bash
docker run -d --name presidio-analyzer -p 5002:3000 mcr.microsoft.com/presidio-analyzer:latest
```

Start the Anonymizer:

```bash
docker run -d --name presidio-anonymizer -p 5001:3000 mcr.microsoft.com/presidio-anonymizer:latest
```

Check running containers:

```bash
docker ps
```

You should see ports similar to:

```text
5002 -> 3000
5001 -> 3000
```

---

# 📦 Install Node.js Dependencies

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Enter the project:

```bash
cd DocShield-OCR
```

Install dependencies:

```bash
npm install
```

Important dependencies include:

```text
tesseract.js
mongodb
busboy
```

---

# ⚙️ Configuration

The current application uses local services.

### MongoDB

```js
const mongoUrl = "mongodb://127.0.0.1:27017";
```

### Presidio Analyzer

```text
http://localhost:5002/analyze
```

### Presidio Anonymizer

```text
http://localhost:5001/anonymize
```

### Ollama

```text
http://localhost:11434/api/chat
```

### Model

```text
qwen3:4b
```

If you change ports or use remote services, update the configuration accordingly.

For a production version, these values should be moved into environment variables instead of being hard-coded.

---

# ▶️ Running the Application

Before starting Node.js, make sure:

```text
✅ MongoDB is running
✅ Docker is running
✅ Presidio Analyzer is running
✅ Presidio Anonymizer is running
✅ Ollama is running
✅ qwen3:4b is installed
```

Then start the Node.js server:

```bash
node server.js
```

Expected output:

```text
MongoDB connected
Server running at http://localhost:3000
```

---

# 🌐 Open the Application

Open your browser:

```text
http://localhost:3000
```

You should see the DocShield OCR interface.

---

# 📤 How to Use

## Step 1 — Select an Image

Click:

```text
Select Image
```

Choose a document image.

Recommended formats for the current version:

```text
.jpg
.jpeg
.png
```

---

## Step 2 — Upload

Click:

```text
Upload Image
```

The backend performs:

```text
Upload
 ↓
OCR
 ↓
PII Detection
 ↓
PII De-identification
 ↓
AI Text Cleaning
 ↓
MongoDB Storage
```

The terminal should show:

```text
File received
Filename: example.jpg
Type: image/jpeg
File saved: ...

Starting OCR...
OCR text extracted

De-identification completed

Sending text to Ollama...
Ollama response received
Ollama JSON received

Ollama cleaning completed

OCR data saved in MongoDB
```

---

# 📄 View Extracted Documents

Click:

```text
See Extracted Text
```

The frontend sends:

```http
GET /documents
```

The server retrieves documents from:

```text
ocr_database
    └── ocr_documents
```

and returns JSON.

Example:

```json
[
  {
    "_id": "68c...",
    "fileName": "medical-report.jpg",
    "deidentifiedText": "Patient: <PERSON>...",
    "cleanedText": "Patient: <PERSON>...",
    "createdAt": "2026-09-15T12:30:00.000Z"
  }
]
```

---

# 🔌 API Endpoints

## POST `/upload`

Uploads an image and processes it.

### Request

```http
POST /upload
Content-Type: multipart/form-data
```

The uploaded file is processed through the complete OCR pipeline.

### Success Response

```json
{
  "message": "Upload done and OCR done",
  "id": "68c..."
}
```

---

## GET `/documents`

Returns all processed documents.

```http
GET /documents
```

### Example response

```json
[
  {
    "_id": "68c...",
    "fileName": "document.jpg",
    "deidentifiedText": "...",
    "cleanedText": "...",
    "createdAt": "2026-09-15T12:30:00.000Z"
  }
]
```

---

## GET `/documents?id=<id>`

Returns a specific document.

Example:

```text
GET /documents?id=68c123456789abcdef
```

The server validates the MongoDB `ObjectId` before querying.

---

# 🗄️ MongoDB Document Structure

Documents are stored like:

```json
{
  "_id": "MongoDB ObjectId",
  "fileName": "medical-report.jpg",
  "deidentifiedText": "Patient: <PERSON>...",
  "cleanedText": "Patient: <PERSON>...",
  "createdAt": "Date"
}
```

### Fields

| Field              | Description                    |
| ------------------ | ------------------------------ |
| `_id`              | MongoDB-generated document ID  |
| `fileName`         | Original uploaded filename     |
| `deidentifiedText` | Text after Presidio processing |
| `cleanedText`      | Text cleaned by Qwen3          |
| `createdAt`        | Processing timestamp           |

---

# 🔒 Privacy & Security

The project is designed around a privacy-first processing flow.

The important sequence is:

```text
Raw OCR Text
     ↓
Presidio
     ↓
De-identified Text
     ↓
Ollama
```

This means the application attempts to remove detected PII **before sending the text to the local LLM**.

Ollama runs locally, so the application does not require sending the text to an external LLM API.

However, this project should **not be considered production-ready for handling real medical or highly sensitive data without additional security, validation, access control, logging controls, encryption, and compliance review.**

---

# 🧠 Why Presidio Comes Before Ollama

The order is intentional.

### ❌ Unsafe design

```text
OCR
 ↓
Ollama
 ↓
Presidio
```

The LLM receives the raw OCR text first.

### ✅ Current design

```text
OCR
 ↓
Presidio
 ↓
De-identified Text
 ↓
Ollama
```

The LLM receives de-identified text.

This reduces the amount of identifiable information exposed to the LLM component.

---

# 🤖 Why Ollama?

Ollama allows the application to run an LLM locally.

Instead of:

```text
Node.js
   ↓
Internet
   ↓
External LLM API
```

the application uses:

```text
Node.js
   ↓
localhost:11434
   ↓
Ollama
   ↓
Qwen3
```

This makes it useful for experimenting with privacy-sensitive document processing.

---

# 🧩 Why Tesseract?

Tesseract converts text inside an image into machine-readable text.

For example:

```text
Image

┌──────────────────────────┐
│ Patient Name: John Smith │
│ Age: 45                  │
│ Email: john@example.com  │
└──────────────────────────┘
```

becomes:

```text
Patient Name: John Smith
Age: 45
Email: john@example.com
```

This text can then be processed by Presidio.

---

# 🛠️ Troubleshooting

## 1. Tesseract says "Unknown format"

Example:

```text
Error in pixReadStream:
Unknown format
```

The current version should preferably be tested with:

```text
.jpg
.jpeg
.png
```

Some formats such as AVIF may not work correctly with the current OCR pipeline.

Convert the image to PNG or JPG and try again.

---

## 2. Ollama request keeps running

Check Ollama:

```bash
ollama list
```

Make sure:

```text
qwen3:4b
```

exists.

Test:

```bash
ollama run qwen3:4b
```

Also verify the API:

```powershell
Invoke-RestMethod http://localhost:11434/api/tags
```

The Node application uses:

```text
http://localhost:11434/api/chat
```

not HTTPS.

---

## 3. Presidio connection error

If you see:

```text
Presidio Analyzer failed
```

check:

```bash
docker ps
```

The Analyzer should be accessible through:

```text
http://localhost:5002
```

The Anonymizer should be accessible through:

```text
http://localhost:5001
```

---

## 4. MongoDB connection error

Check whether MongoDB is running.

The application expects:

```text
mongodb://127.0.0.1:27017
```

You can also check your MongoDB installation using:

```bash
mongosh
```

Then:

```javascript
show databases
```

---

## 5. "See Extracted Text" shows nothing

First check the Node terminal.

A successful upload should reach:

```text
OCR data saved in MongoDB
```

If the terminal stops before this line, the document may not have been saved yet.

The processing sequence is:

```text
OCR
 ↓
Presidio
 ↓
Ollama
 ↓
MongoDB
```

If any step fails, MongoDB insertion will not happen.

---

# 🧪 Testing Checklist

Before reporting an issue, verify:

```text
[ ] Node.js installed
[ ] MongoDB running
[ ] Docker running
[ ] Presidio Analyzer running
[ ] Presidio Anonymizer running
[ ] Ollama running
[ ] qwen3:4b installed
[ ] Node dependencies installed
[ ] server.js starts successfully
[ ] JPG/PNG image used
[ ] Upload request reaches Node
[ ] OCR completes
[ ] Presidio completes
[ ] Ollama completes
[ ] MongoDB document is created
```

---

# 🚀 Future Improvements

Possible improvements for future versions:

* [ ] Support PDF documents
* [ ] Add AVIF/WebP image conversion
* [ ] Add PDF OCR
* [ ] Add better OCR preprocessing
* [ ] Add more PII entity types
* [ ] Add environment variables
* [ ] Add request validation
* [ ] Add file-size limits
* [ ] Add authentication
* [ ] Add rate limiting
* [ ] Add structured logging
* [ ] Add Docker Compose
* [ ] Add automated tests
* [ ] Add API documentation
* [ ] Add pagination for documents
* [ ] Add document deletion
* [ ] Add download/export functionality
* [ ] Improve frontend UI
* [ ] Add production-grade error handling

---

# 📚 What This Project Demonstrates

This project demonstrates practical experience with:

### Backend Development

* Node.js
* Native HTTP server
* HTTP methods
* REST APIs
* Request/response handling
* Multipart file uploads
* Status codes
* Async/await
* Error handling

### Database

* MongoDB
* MongoDB client
* Database and collections
* Document insertion
* Document retrieval
* ObjectId
* Query filters
* Sorting

### OCR

* Tesseract.js
* Image-to-text processing

### Cybersecurity / Privacy

* PII detection
* PII de-identification
* Microsoft Presidio
* Privacy-aware processing pipeline

### AI / LLM

* Ollama
* Local LLM execution
* Qwen3
* Prompt engineering
* AI-assisted OCR cleanup

---

# 👨‍💻 Author

**Rushikesh Salunke**

B.Tech – Information Technology

Interested in:

* Backend Development
* Java
* Node.js
* SQL
* Cybersecurity
* AI/LLM Applications

---

# ⭐ Project Goal

The goal of DocShield OCR is to demonstrate how a document-processing pipeline can combine:

```text
OCR
+
Privacy / PII Protection
+
Local AI
+
Database Storage
+
Backend APIs
```

into a single application.

---

# ⚠️ Disclaimer

This project is intended for educational, development, and demonstration purposes.

PII detection systems such as Presidio may not detect every sensitive piece of information. OCR can also produce incorrect text. The application should therefore not be assumed to provide complete privacy protection or medical-data compliance.

Do not use the project with real sensitive/medical data in production without appropriate security controls, validation, access controls, encryption, auditing, and compliance review.

---

## 📄 License

Add a license appropriate for your project.

For example:

```text
MIT License
```

if you decide to release the project under MIT.
