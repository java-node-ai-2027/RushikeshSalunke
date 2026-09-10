// Load , display file  
async function loadFiles() {
    const res = await fetch("/api/files");
    const data = await res.json();
    const container = document.getElementById("files");
    container.innerHTML = "";
    if (!data.files || data.files.length === 0) {
        container.innerHTML = "<p>No files yet.</p>";
        return;
    }
    data.files.forEach(file => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <span>${file}</span>
            <button class="delete-btn" onclick="deleteFile('${file}')">Delete</button>
        `;
        container.appendChild(div);
    });
}
// Create new file
async function createFile() {
    const name = document.getElementById("fileName").value.trim();
    const content = document.getElementById("fileContent").value;
    if (!name) {
        alert("hey bro first enter file name");
        return;
    }
    await fetch("/api/files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, content })
    });
    document.getElementById("fileName").value = "";
    document.getElementById("fileContent").value = "";
    loadFiles();
}

// Delete file
async function deleteFile(name) {
    if (!confirm(`Delete ${name}?`)) return;
    await fetch(`/api/files/${name}`, { method: "DELETE" });
    loadFiles();
}
// Load and display notes from MongoDB
async function loadNotes() {
    const res = await fetch("/api/notes");
    const data = await res.json();
    const container = document.getElementById("notes");
    container.innerHTML = "";
    if (!data.notes || data.notes.length === 0) {
        container.innerHTML = "<p>No notes in MongoDB vro.</p>";
        return;
    }
    data.notes.forEach(note => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div>
                <strong>${note.title}</strong>
                <p>${note.content}</p>
            </div>
            <button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button>
        `;
        container.appendChild(div);
    });
}
// Create new note in MongoDB
async function createNote() {
    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();
    if (!title || !content) {
        alert("enter title ,content then only i proceed ");
        return;
    }
    await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
    loadNotes();
}

// Delete note from MongoDB
async function deleteNote(id) {
    if (!confirm("really Delete this note?")) return;
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    loadNotes();
}

// Load
//  files and notes on page open
loadFiles();
loadNotes();