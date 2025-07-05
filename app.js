function promptApp() {
    return {
        // App state
        activeSection: 'explorer',
        mobileMenuOpen: false,
        isModalOpen: false,
        isIdeaModalOpen: false,
        isLoading: false,
        apiError: '',

        // Data is now embedded directly to prevent loading errors
        prompts: [
            { "id": 1, "category": "Création de Contenu / SEO", "title": "Générateur d'article SEO", "objective": "Générer un article de blog complet, structuré et optimisé pour le SEO.", "text": "Agis comme un expert SEO et rédacteur web spécialisé dans [votre secteur]. Crée un article de blog de 1500 mots sur [sujet] qui cible le mot-clé principal [mot-clé]. Structure l'article avec une introduction accrocheuse, 5 sous-parties H2 avec H3 si nécessaire, et une conclusion avec call-to-action. Inclus des statistiques récentes, des exemples concrets, et optimise le contenu pour le référencement tout en gardant un style conversationnel et engageant.", "techniques": ["Rôle Prompting", "Instructions Spécifiques"] },
            { "id": 2, "category": "Création de Contenu / SEO", "title": "Article de Référence (10x)", "objective": "Générer un article de référence qui surpasse la concurrence en profondeur et en qualité.", "text": "Le but est de créer un contenu 10 fois mieux que vos concurrents sur le sujet [sujet de l'article]. Génère un article inégalé, riche en données chiffrées et étayé par des études récentes, en t'appuyant sur les derniers modèles comme ChatGPT ou Claude.", "techniques": ["Instructions Spécifiques", "Objectif Qualitatif"] },
            { "id": 3, "category": "Création de Contenu / Script Vidéo", "title": "Script Vidéo Engageant", "objective": "Générer un script structuré et engageant pour un contenu audiovisuel.", "text": "Crée un script de [durée] minutes sur le sujet [sujet]. Le public cible est [description de l'audience]. Structure le script avec: une introduction accrocheuse (30 secondes), 3-4 points principaux développés avec des exemples et des histoires, et une conclusion avec un appel à l'action clair. Ton: [conversationnel/éducatif/inspirant].", "techniques": ["Rôle Prompting", "Formatage de Sortie"] },
            { "id": 4, "category": "Marketing / Emailing", "title": "Email Marketing AIDA", "objective": "Rédiger un email marketing à fort taux de conversion en utilisant le modèle AIDA.", "text": "Crée un email marketing de [nombre] mots pour [objectif: vente/inscription/téléchargement] destiné à [audience cible]. L'email doit suivre la structure AIDA (Attention, Intérêt, Désir, Action), avoir un objet accrocheur de moins de 50 caractères, et inclure 3 points de douleur majeurs de cette audience. Termine par un CTA puissant et personnalisé. Ton: [professionnel/amical/urgent].", "techniques": ["Rôle Prompting", "Formatage de Sortie (AIDA)"] },
            { "id": 5, "category": "Business / Stratégie", "title": "Analyse SWOT", "objective": "Effectuer une analyse stratégique SWOT pour un projet ou une entreprise.", "text": "Créer une analyse SWOT pour mon idée d'entreprise dans le secteur [secteur]. Identifiez les Forces, Faiblesses, Opportunités et Menaces.", "techniques": ["Tâche Spécifique", "Formatage de Sortie"] },
            { "id": 6, "category": "Programmation / Génération de Code", "title": "Générateur de Fonction", "objective": "Générer une fonction de code complète et bien structurée dans un langage spécifique.", "text": "Generate a [language] function named \"[function name]\" that: Accepts the following parameters: \"[parameter name 1 (type)]\", \"[parameter name 2 (type)]\". Performs the following logic: \"[describe detailed logic and purpose]\". Returns \"[return type and description of what it returns]\".", "techniques": ["Formatage Structuré", "Instructions Spécifiques"] },
            { "id": 7, "category": "Programmation / Débogage", "title": "Débogueur de Code", "objective": "Identifier et corriger des erreurs dans un bloc de code.", "text": "Agis comme un débogueur expérimenté. J'ai écrit ce code en [langage] : [votre code]. Il devrait [comportement attendu] mais au lieu de cela, j'obtiens [erreur ou comportement incorrect]. Analyse mon code ligne par ligne, identifie les potentielles sources d'erreur, et suggère des corrections précises.", "techniques": ["Rôle Prompting", "Analyse de Code"] },
            { "id": 8, "category": "Raisonnement Logique / Mathématique", "title": "Résolution Étape par Étape", "objective": "Résoudre un problème mathématique en forçant une décomposition logique.", "text": "Je suis allé au marché et j'ai acheté 10 pommes. J'ai donné 2 pommes au voisin et 2 au dépanneur. Je suis ensuite allé acheter 5 pommes de plus et j'en ai mangé 1. Avec combien de pommes suis-je resté? Réfléchissons étape par étape.", "techniques": ["Zero-Shot Chain-of-Thought"] },
            { "id": 9, "category": "Raisonnement Logique / Classification", "title": "Classification par l'Exemple", "objective": "Résoudre un problème logique complexe en montrant un exemple de raisonnement.", "text": "La somme des nombres impairs de ce groupe donne un nombre pair : 4, 8, 9, 15, 12, 2, 1. R : L'addition de tous les nombres impairs (9, 15, 1) donne 25. La réponse est Faux.\n\nLa somme des nombres impairs de ce groupe donne un nombre pair : 15, 32, 5, 13, 82, 7, 1. R :", "techniques": ["Few-Shot Chain-of-Thought"] },
            { "id": 10, "category": "Créativité / Brainstorming", "title": "Scénario \"Et si?\"", "objective": "Stimuler la pensée créative et l'exploration d'idées non conventionnelles.", "text": "Explore des scénarios \"what if?\". Et si l'argent n'existait pas dans le monde d'aujourd'hui? Comment les économies fonctionneraient-elles?", "techniques": ["Question Ouverte", "Scénario Hypothétique"] },
            { "id": 11, "category": "Usage Personnel / Jeux", "title": "Jeu d'Aventure Textuel", "objective": "Créer une expérience de jeu de rôle textuelle et interactive.", "text": "Vous êtes un jeu vidéo textuel dans lequel vous me donnez des options (A, B, C, D) comme choix. Le scénario est [description du scénario]. Commencez.", "techniques": ["Rôle Prompting", "Jeu Interactif"] }
        ],
        techniques: [
            { "name": "Zero-Shot Prompting", "subtitle": "Demande directe sans exemple", "description": "C'est la forme la plus simple de prompting. On demande directement au modèle de réaliser une tâche, en supposant qu'il a déjà les connaissances nécessaires pour le faire. Idéal pour les tâches simples et générales.", "example": "Traduisez le texte suivant en anglais : \"Le prompt engineering est une discipline fascinante.\"" },
            { "name": "Few-Shot Prompting", "subtitle": "Guider avec quelques exemples", "description": "Une technique très puissante qui consiste à fournir plusieurs exemples (démonstrations) de la tâche à accomplir. Le modèle apprend alors le format et le raisonnement à partir de ces exemples pour traiter la nouvelle demande.", "example": "Tâche: Extraire la couleur.\nTexte: \"La voiture est rouge.\"\nCouleur: Rouge\n\nTexte: \"L'herbe est d'un vert éclatant.\"\nCouleur: Vert\n\nTexte: \"Le ciel est d'un bleu profond.\"\nCouleur:" },
            { "name": "Chain-of-Thought (CoT)", "subtitle": "Décomposer le raisonnement", "description": "Au lieu de demander une réponse directe, cette technique encourage le modèle à \"réfléchir étape par étape\". En explicitant son raisonnement, le modèle améliore considérablement sa précision sur les problèmes complexes (logique, mathématiques).", "example": "Q: Roger a 5 balles de tennis. Il en achète 2 autres boîtes de 3 balles chacune. Combien de balles a-t-il maintenant?\n\nA: Réfléchissons étape par étape. Roger commence avec 5 balles. Il achète 2 boîtes, et chaque boîte contient 3 balles. Donc, il achète 2 * 3 = 6 balles. Au total, il a maintenant 5 + 6 = 11 balles. La réponse est 11." },
            { "name": "Rôle Prompting (Persona)", "subtitle": "Assigner un rôle à l'IA", "description": "Cette technique consiste à donner un rôle ou une personnalité à l'IA au début du prompt. Par exemple, \"Agis comme un expert en cybersécurité\". Cela oriente le ton, le style, et la base de connaissances que le modèle utilisera.", "example": "Agis comme un chef cuisinier italien. Propose-moi une recette simple et authentique de pâtes à la carbonara pour deux personnes, en insistant sur les erreurs à ne pas commettre."}
        ],
        systemPrompts: [
            { "name": "NotebookLM", "provider": "Google", "icon": "📚", "mission": "Être un expert serviable qui répond aux requêtes en se basant exclusivement sur les sources fournies par l'utilisateur.", "constraints": "Citer toutes les informations avec la notation [i]. Ne pas utiliser d'informations externes sans le signaler explicitement.", "behavior": "Analytique, basé sur les sources, factuel." },
            { "name": "DALL-E (via GPT-4o)", "provider": "OpenAI", "icon": "🎨", "mission": "Générer des images à partir de descriptions textuelles très détaillées.", "constraints": "Ne pas créer d'images dans le style d'artistes post-1912. Ne pas nommer de personnages sous copyright.", "behavior": "Créatif, visuel, très réglementé." },
            { "name": "Claude 3.5 Sonnet", "provider": "Anthropic", "icon": "📜", "mission": "Être un assistant IA serviable, honnête et inoffensif, créé par Anthropic.", "constraints": "Refuser les requêtes dangereuses, contraires à l'éthique ou illégales. Éviter de donner des opinions personnelles.", "behavior": "Conversationnel, prudent, axé sur la sécurité." },
            { "name": "GitHub Copilot", "provider": "Microsoft", "icon": "💻", "mission": "Agir comme un expert en programmation IA et un assistant de codage.", "constraints": "Se concentrer sur le code et les sujets liés au développement. Adhérer aux meilleures pratiques de codage.", "behavior": "Technique, orienté code, collaboratif." }
        ],
        
        // State for Reference sections
        activeTechnique: 0,
        activeModel: 0,

        // Explorer state
        selectedPrompt: {},
        searchTerm: '',
        categoryFilter: 'all',
        techniqueFilter: 'all',
        copyMessage: 'Copier',
        
        // Idea generator state
        ideaTopic: '',
        ideaResults: [],

        // Builder state
        builder: {
            persona: '',
            task: '',
            context: '',
            format: '',
            fewShots: [],
            activeTab: 'test', // 'test' or 'improvement'
            testResponse: '',
            improvementResponse: '',
            apiError: '',
        },
        shareMessage: 'Partager',

        // Chart.js instance
        chartInstance: null,

        // Computed properties
        get uniqueCategories() { 
            return [...new Set(this.prompts.map(p => p.category))]; 
        },
        get uniqueTechniques() { 
            const all = this.prompts.flatMap(p => p.techniques); 
            return [...new Set(all)]; 
        },

        filteredPrompts() {
            if (!this.prompts) return [];
            return this.prompts.filter(p => {
                const searchMatch = this.searchTerm === '' || 
                    p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                    p.objective.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                    p.text.toLowerCase().includes(this.searchTerm.toLowerCase());
                const categoryMatch = this.categoryFilter === 'all' || p.category === this.categoryFilter;
                const techniqueMatch = this.techniqueFilter === 'all' || p.techniques.includes(this.techniqueFilter);
                return searchMatch && categoryMatch && techniqueMatch;
            });
        },

        // Methods
        openModal(prompt) { 
            this.selectedPrompt = prompt; 
            this.isModalOpen = true; 
            this.resetCopyMessage(); 
        },

        copyToClipboard(text) { 
            navigator.clipboard.writeText(text).then(() => { 
                this.copyMessage = 'Copié !'; 
                setTimeout(() => this.resetCopyMessage(), 2000); 
            }); 
        },
        
        resetCopyMessage() { 
            this.copyMessage = 'Copier'; 
        },

        editInBuilder(prompt) {
            this.builder.task = prompt.text;
            this.builder.persona = '';
            this.builder.context = '';
            this.builder.fewShots = [];
            this.builder.format = '';
            
            if (prompt.text.toLowerCase().startsWith('agis comme')) {
                const parts = prompt.text.split('.');
                this.builder.persona = parts[0] + '.';
                this.builder.task = parts.slice(1).join('.').trim();
            }
            
            this.isModalOpen = false;
            this.activeSection = 'builder';
        },

        addFewShot() { 
            this.builder.fewShots.push({ input: '', output: '' }); 
        },

        removeFewShot(index) { 
            this.builder.fewShots.splice(index, 1); 
        },

        generateBuilderPrompt() {
            let finalPrompt = '';
            if (this.builder.persona.trim()) finalPrompt += `${this.builder.persona.trim()}\n\n`;
            if (this.builder.task.trim()) finalPrompt += `${this.builder.task.trim()}\n\n`;
            if (this.builder.context.trim()) finalPrompt += `Voici quelques informations de contexte pour t'aider :\n"""\n${this.builder.context.trim()}\n"""\n\n`;
            const validShots = this.builder.fewShots.filter(shot => shot.input.trim() && shot.output.trim());
            if (validShots.length > 0) {
                finalPrompt += "Voici quelques exemples pour te guider :\n";
                validShots.forEach(shot => {
                    finalPrompt += `Entrée: "${shot.input.trim()}"\nSortie: "${shot.output.trim()}"\n`;
                });
                finalPrompt += "\n";
            }
            if (this.builder.format) finalPrompt += `La réponse doit être formatée comme ${this.builder.format}.`;
            return finalPrompt.trim() || 'Remplissez les champs pour générer un prompt...';
        },

        shareBuilderPrompt() {
            const dataToShare = {
                p: this.builder.persona,
                t: this.builder.task,
                c: this.builder.context,
                f: this.builder.format,
                s: this.builder.fewShots.filter(shot => shot.input && shot.output)
            };
            const jsonString = JSON.stringify(dataToShare);
            const encodedData = btoa(jsonString);
            const url = new URL(window.location.href);
            url.searchParams.set('prompt', encodedData);
            
            navigator.clipboard.writeText(url.toString()).then(() => {
                this.shareMessage = 'Copié !';
                setTimeout(() => { this.shareMessage = 'Partager'; }, 2000);
            });
        },
        
        async callGemini(prompt, isJson = false) {
            this.isLoading = true;
            this.apiError = '';
            this.builder.apiError = '';
            
            const apiKey = ""; // IMPORTANT: Replace with a secure method in a real application
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

            if (isJson) {
                payload.generationConfig = {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: { "title": { "type": "STRING" }, "objective": { "type": "STRING" } },
                            required: ["title", "objective"]
                        }
                    }
                };
            }

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error(`Erreur de l'API: ${response.statusText}`);
                const result = await response.json();
                if (result.candidates && result.candidates.length > 0) {
                    return result.candidates[0].content.parts[0].text;
                } else {
                    throw new Error("Aucune réponse valide reçue de l'API.");
                }
            } catch (error) {
                const errorMessage = `Une erreur est survenue: ${error.message}. Assurez-vous d'avoir configuré une clé API valide.`;
                this.apiError = errorMessage;
                this.builder.apiError = errorMessage;
                return null;
            } finally {
                this.isLoading = false;
            }
        },

        async generateIdeas() {
            if (!this.ideaTopic.trim()) return;
            this.ideaResults = [];
            const prompt = `Agis comme un expert en prompt engineering. Génère 5 idées de prompts créatifs et utiles sur le sujet suivant : "${this.ideaTopic}". Pour chaque idée, fournis un titre et un objectif clair.`;
            const result = await this.callGemini(prompt, true);
            if (result) {
                try {
                    this.ideaResults = JSON.parse(result);
                } catch(e) {
                    this.apiError = "Erreur lors de l'analyse de la réponse JSON.";
                }
            }
        },

        async testBuilderPrompt() {
            const prompt = this.generateBuilderPrompt();
            if (prompt === 'Remplissez les champs pour générer un prompt...') return;
            this.builder.testResponse = '';
            this.builder.improvementResponse = '';
            this.builder.apiError = '';
            this.builder.activeTab = 'test';
            const result = await this.callGemini(prompt);
            if (result) this.builder.testResponse = result;
        },

        async optimizePrompt() {
            const originalPrompt = this.generateBuilderPrompt();
            if (originalPrompt === 'Remplissez les champs pour générer un prompt...') return;
            this.builder.testResponse = '';
            this.builder.improvementResponse = '';
            this.builder.apiError = '';
            this.builder.activeTab = 'improvement';
            const metaPrompt = `Agis comme un expert en prompt engineering. Analyse le prompt suivant et propose une version améliorée pour obtenir des résultats plus précis et de meilleure qualité. Explique brièvement les changements que tu as faits sous la forme "### Améliorations". Le prompt à améliorer est :\n\n---\n\n${originalPrompt}`;
            const result = await this.callGemini(metaPrompt);
            if (result) {
                this.builder.improvementResponse = result
                    .replace(/### (.*)/g, '<strong class="text-indigo-600">$1</strong>')
                    .replace(/\n/g, '<br>');
            }
        },

        initChart() {
            if (this.chartInstance) this.chartInstance.destroy();
            const ctx = document.getElementById('categoryChart').getContext('2d');
            if (!ctx) return;
            const categoryCounts = this.prompts.reduce((acc, p) => ({...acc, [p.category]:(acc[p.category]||0)+1}), {});
            this.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(categoryCounts),
                    datasets: [{
                        label: 'Nombre de prompts',
                        data: Object.values(categoryCounts),
                        backgroundColor: 'rgba(79, 70, 229, 0.6)',
                        borderColor: 'rgba(79, 70, 229, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } }, x: { ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 } } },
                    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.raw}` } } }
                }
            });
        },

        init() {
            // 1. Load builder state from localStorage
            const savedBuilder = localStorage.getItem('promptBuilderState');
            if (savedBuilder) {
                Object.assign(this.builder, JSON.parse(savedBuilder));
            }

            // 2. Watch for changes in builder state to save to localStorage
            this.$watch('builder', (newValue) => {
                localStorage.setItem('promptBuilderState', JSON.stringify(newValue));
            }, { deep: true });

            // 3. Check for shared prompt in URL
            const urlParams = new URLSearchParams(window.location.search);
            const sharedPromptData = urlParams.get('prompt');
            if (sharedPromptData) {
                try {
                    const decodedData = atob(sharedPromptData);
                    const parsedData = JSON.parse(decodedData);
                    this.builder.persona = parsedData.p || '';
                    this.builder.task = parsedData.t || '';
                    this.builder.context = parsedData.c || '';
                    this.builder.format = parsedData.f || '';
                    this.builder.fewShots = parsedData.s || [];
                    this.activeSection = 'builder';
                    window.history.replaceState({}, document.title, window.location.pathname);
                } catch (e) {
                    console.error("Erreur d'analyse des données partagées:", e);
                }
            }

            // 4. Watch for section changes to initialize/update the chart
            this.$watch('activeSection', (value) => {
                if (value === 'architectures') {
                    this.$nextTick(() => this.initChart());
                }
            });
            
            // 5. Initial chart load if starting on the right section
            if (this.activeSection === 'architectures') {
                 this.$nextTick(() => this.initChart());
            }
        }
    }
}
