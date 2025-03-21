(() => {
    const style = document.createElement('style');
    style.textContent = `
        .nebula-x {
            position: fixed;
            top: 20px;
            left: 20px;
            background: #1a1a1a;
            color: #e0e0e0;
            padding: 15px;
            border: 1px solid #8a2be2;
            width: 400px;
            font-family: 'Arial', sans-serif;
            z-index: 10000;
            transform: scale(0.8);
            opacity: 0;
            transition: transform 0.2s ease-out, opacity 0.2s ease-out;
            cursor: move;
        }
        
        .nebula-x.visible {
            transform: scale(1);
            opacity: 1;
        }
        
        .header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 10px;
            border-bottom: 2px solid #8a2be2;
            margin-bottom: 10px;
            position: relative;
        }
        
        .title-icon {
            width: 24px;
            height: 24px;
        }
        
        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            background: none;
            border: none;
            color: #e0e0e0;
            font-size: 18px;
            cursor: pointer;
            padding: 5px;
        }
        
        .close-btn:hover {
            color: #8a2be2;
        }
        
        .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .tab {
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            padding: 5px;
            transition: all 0.3s;
            font-size: 18px;
        }
        
        .tab:hover {
            background: #8a2be233;
        }
        
        .tab.active {
            border-bottom: 2px solid #8a2be2;
        }
        
        .page-content {
            min-height: 200px;
            padding: 15px;
            background: #2a2a2a;
            border: 1px solid #8a2be2;
        }
        
        .page-content p {
            margin: 0;
            color: #e0e0e0;
        }
        
        .hidden {
            display: none;
        }
        
        .info-box {
            background: #1a1a1a;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            border: 1px solid #8a2be2;
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
        }
        
        .input-group {
            margin-bottom: 10px;
        }
        
        .input-group input {
            width: 100%;
            padding: 5px;
            background: #1a1a1a;
            border: 1px solid #8a2be2;
            color: #e0e0e0;
            border-radius: 5px;
        }
        
        .input-group textarea {
            width: 100%;
            height: 30vh;
            padding: 5px;
            background: #1a1a1a;
            border: 1px solid #8a2be2;
            color: #e0e0e0;
            resize: none;
            border-radius: 5px;
        }
        
        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        
        .button-group button {
            background: #8a2be2;
            border: none;
            color: #fff;
            padding: 8px 16px;
            cursor: pointer;
            transition: background 0.3s;
            font-size: 14px;
            border-radius: 5px;
            flex: 1;
        }
        
        .button-group button:hover {
            background: #7b1fa2;
        }
        
        .title-text {
            font-weight: bold;
            background: linear-gradient(90deg, #d8b4fe, #8a2be2);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s linear infinite;
        }
        
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .home-icon {
            display: block;
            margin: 0 auto 15px;
            width: 50px;
            height: 50px;
            transition: transform 0.3s ease;
        }
        
        .home-icon:hover {
            transform: scale(1.1);
        }
        
        .home-textbox {
            width: 94%;
            padding: 10px;
            background: #1a1a1a;
            border: 1px solid #8a2be2;
            color: #e0e0e0;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 0 10px rgba(138, 43, 226, 0);
            transition: box-shadow 0.3s ease;
        }
        
        .home-textbox:hover {
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.7);
        }
    `;
    document.head.appendChild(style);

    const ui = document.createElement('div');
    ui.className = 'nebula-x';
    
    ui.innerHTML = `
        <div class="header">
            <img class="title-icon" src="https://i.ibb.co/5WPL4trn/nebx.png" alt="Title Icon">
            <h2 class="title-text" style="margin: 0;">Nebula X</h2>
            <button class="close-btn">✕</button>
        </div>
        <div class="tabs" id="tabs-container"></div>
        <div class="page-content" id="page-content"></div>
    `;

    const tabs = [
        { 
            name: 'Home', 
            icon: 'https://i.ibb.co/d1nY4Pf/icons8-home-100.png', 
            content: `
                <img class="home-icon" src="https://i.ibb.co/5WPL4trn/nebx.png" alt="Home Icon">
                <div class="home-textbox" readonly>
                    - Nebula X | v1.0.1 -<br>
                    Cheats for skole<br>
                    <a href="https://nebx.vercel.app" target="_blank" style="color: #8a2be2;">https://nebx.vercel.app</a>
                </div>
            ` 
        },
        { 
            name: 'Campus', 
            icon: 'https://i.ibb.co/LhXYy7Df/iconn.png', 
            content: `
                <p>Viser svaret på Campus oppgaver.</p>
                <div class="button-group">
                    <button id="vis-svar-btn">Vis Svar</button>
                </div>
            ` 
        },
        { 
            name: 'Forms', 
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Google_Forms_logo_%282014-2020%29.svg/1489px-Google_Forms_logo_%282014-2020%29.svg.png', 
            content: `
                <p>Jukseark - pastebin.com</p>
                <div class="input-group">
                    <textarea id="pastebin-content" readonly></textarea>
                </div>
                <div class="input-group">
                    <input type="text" id="pastebin-url" placeholder="Lim in Pastebin lenke her..">
                </div>
                <div class="button-group">
                    <button id="kopier-btn">Kopier</button>
                    <button id="last-btn">Last</button>
                </div>
            ` 
        },

        { 
            name: 'AI', 
            icon: 'https://chatgptaihub.com/wp-content/uploads/2023/06/ChatGPT-logo-with-color-Background.png', 
            content: `
                <div class="input-group">
                    <input type="text" id="ai-question" placeholder="Spør AI-en...">
                </div>
                <div class="input-group">
                    <textarea id="ai-answer" placeholder="AI-svar vil vises her..." readonly></textarea>
                </div>
                <div class="button-group">
                    <button id="ask-ai-btn">Spør</button>
                    <button id="clear-ai-btn">Tøm</button>
                    <button id="copy-ai-btn">Kopier</button>
                </div>
            ` 
        },

        { 
            name: 'Misc', 
            icon: 'https://i.ibb.co/zWc7H8qJ/icons8-info-100.png', 
            content: `
                <div class="info-box">
                    <p>Nebula X - Cheats for skole</p>
                </div>
                <div class="info-box">
                    <p>Oppdaterings Versjon - 1.0.1</p>
                </div>
                <div class="info-box">
                    <p>Hurtigtast: Right Ctrl - skjul/vis</p>
                </div>
                <div class="info-box">
                    <p>Funker på Chromebook & PC</p>
                </div>
            ` 
        }
    ];

    const tabsContainer = ui.querySelector('#tabs-container');
    const contentArea = ui.querySelector('#page-content');

    let formsContent = '';

    tabs.forEach((tab, index) => {
        const tabElement = document.createElement('button');
        tabElement.className = 'tab' + (index === 0 ? ' active' : '');
        tabElement.innerHTML = `<img src="${tab.icon}" alt="${tab.name}" width="20" height="20">`;
        tabElement.title = tab.name;
        tabElement.onclick = () => switchTab(index);
        tabsContainer.appendChild(tabElement);
    });

    function switchTab(index) {
        ui.querySelectorAll('.tab').forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });

        if (index === 2) {
            contentArea.innerHTML = tabs[index].content;
            const textarea = contentArea.querySelector('#pastebin-content');
            if (textarea) textarea.value = formsContent;
        } else {
            contentArea.innerHTML = tabs[index].content;
        }

        if (index === 3) {
            let isProcessing = false;
            
            document.getElementById('ask-ai-btn').addEventListener('click', async () => {
                if (isProcessing) return;
                
                const question = document.getElementById('ai-question').value;
                const answerBox = document.getElementById('ai-answer');
                const btn = document.getElementById('ask-ai-btn');
                
                answerBox.value = "Thinking...";
                btn.disabled = true;
                isProcessing = true;
        
                try {
                    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDVBbw6fu6dLB-TQwNJPIfW2Rk0sadKzuI", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    text: `Answer concisely and accurately: ${question}`
                                }]
                            }]
                        }),
                    });
        
                    const data = await response.json();
                    
                    if (!response.ok) {
                        throw new Error(data.error?.message || "API error");
                    }
        
                    answerBox.value = data.candidates?.[0]?.content?.parts?.[0]?.text 
                        || "No response generated";
                        
                } catch (error) {
                    console.error(error);
                    answerBox.value = error.message.includes("429") 
                        ? "Too many requests. Wait a minute and try again." 
                        : "Error: " + error.message;
                } finally {
                    btn.disabled = false;
                    isProcessing = false;
                }
            });
        
            document.getElementById('clear-ai-btn').addEventListener('click', () => {
                document.getElementById('ai-question').value = '';
                document.getElementById('ai-answer').value = '';
            });

            document.getElementById('copy-ai-btn').addEventListener('click', () => {
                const answer = document.getElementById('ai-answer').value;
                if (answer) {
                    navigator.clipboard.writeText(answer).catch(() => {});
                }
            });
        }

        if (index === 0) {
            const homeIcon = contentArea.querySelector('.home-icon');
            if (homeIcon) {
                homeIcon.addEventListener('mouseenter', () => {
                    homeIcon.style.transform = 'scale(1.1)';
                });
                homeIcon.addEventListener('mouseleave', () => {
                    homeIcon.style.transform = 'scale(1)';
                });
            }
        } else if (index === 1) {
            const visSvarBtn = document.getElementById('vis-svar-btn');
            if (visSvarBtn) {
                visSvarBtn.addEventListener('click', () => {
                    document.getElementById('get-correct-answer-btn').click();
                });
            }
        } else if (index === 2) {
            const kopierBtn = document.getElementById('kopier-btn');
            const lastBtn = document.getElementById('last-btn');

            if (kopierBtn) {
                kopierBtn.addEventListener('click', copyPastebinContent);
            }
            if (lastBtn) {
                lastBtn.addEventListener('click', loadPastebinContent);
            }
        }
    }

    switchTab(0);

    let isDragging = false;
    let offsetX, offsetY;

    ui.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('tab') || e.target.classList.contains('close-btn')) return;
        isDragging = true;
        offsetX = e.clientX - ui.getBoundingClientRect().left;
        offsetY = e.clientY - ui.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            ui.style.left = `${e.clientX - offsetX}px`;
            ui.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.body.appendChild(ui);

    setTimeout(() => {
        ui.classList.add('visible');
    }, 10);

    let isVisible = true;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Control' && e.location === 2) {
            isVisible = !isVisible;
            ui.style.display = isVisible ? 'block' : 'none';
        }
    });

    const closeBtn = ui.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        ui.remove();
    });

    function copyPastebinContent() {
        const textarea = document.getElementById('pastebin-content');
        textarea.select();
        document.execCommand('copy');
    }

    async function loadPastebinContent() {
        const urlInput = document.getElementById('pastebin-url');
        const textarea = document.getElementById('pastebin-content');
        const url = urlInput.value.trim();

        if (!url) {
            alert('Vennligst lim inn en gyldig Pastebin URL.');
            return;
        }

        try {
            const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            const text = await response.text();
            textarea.value = text;
            formsContent = text;
        } catch (error) {
            alert('Kunne ikke laste inn innholdet. Sjekk URL-en.');
        }
    }
})();
