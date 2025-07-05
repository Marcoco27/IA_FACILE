import React from "react";

function App() {
  // Declare all your state and functions here (e.g., useState, handlers)
  // Example:
  // const [activeSection, setActiveSection] = React.useState('explorer');
  // const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  // ... (add all other state and handlers used in your JSX)

  return (
    <>
      {/* 
        If you are using React/JSX, Alpine.js attributes like x-data, x-init, :class, x-show, @click, etc. 
        are not valid. You must replace them with React state and event handlers.
        If you want to use Alpine.js, move this code to an .html file.
      */}
      <div className="flex flex-col h-screen bg-gray-100">
    {/* Mobile menu overlay */}
    {/* Replace Alpine.js x-show and @click with React state and onClick */}
    {/* Example: {mobileMenuOpen && ( ... )} */}
    {/* <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div> */}
    {/* Header */}
        <header className="bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="shrink-0 flex items-center">
                            <a href="#" className="text-2xl font-bold text-indigo-600">PromptGen</a>
                        </div>

                        {/* Desktop menu */}
                        <nav className="hidden md:flex space-x-4 ml-10">
                            <a
                              onClick={() => setActiveSection('explorer')}
                              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'explorer' ? 'text-indigo-600' : ''}`}
                            >
                              Explorer
                            </a>
                            <a
                              onClick={() => setActiveSection('builder')}
                              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'builder' ? 'text-indigo-600' : ''}`}
                            >
                              Constructeur
                            </a>
                            <a
                              onClick={() => setActiveSection('architectures')}
                              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'architectures' ? 'text-indigo-600' : ''}`}
                            >
                              Architectures
                            </a>
                            <a
                              onClick={() => setActiveSection('aide')}
                              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'aide' ? 'text-indigo-600' : ''}`}
                            >
                              Aide
                            </a>
                        </nav>
                    </div>

                    {/* Right section (Profile, etc.) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Profile dropdown (simplified) */}
                        {/* You need to implement dropdown logic in React */}
                        <div className="relative">
                            <div>
                                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    <span>Mon Compte</span>
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.439l3.71-3.229a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* Dropdown menu placeholder */}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Ouvrir le menu principal</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                onClick={() => { setActiveSection('explorer'); setMobileMenuOpen(false); }}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'explorer' ? 'text-indigo-600' : ''}`}
              >
                Explorer
              </a>
              <a
                onClick={() => { setActiveSection('builder'); setMobileMenuOpen(false); }}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'builder' ? 'text-indigo-600' : ''}`}
              >
                Constructeur
              </a>
              <a
                onClick={() => { setActiveSection('architectures'); setMobileMenuOpen(false); }}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'architectures' ? 'text-indigo-600' : ''}`}
              >
                Architectures
              </a>
              <a
                onClick={() => { setActiveSection('aide'); setMobileMenuOpen(false); }}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${activeSection === 'aide' ? 'text-indigo-600' : ''}`}
              >
                Aide
              </a>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section: Explorer */}
                    {activeSection === 'explorer' && (
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">Explorer les Prompts</h1>
                            {/* Search and filter */}
                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex-1 min-w-0">
                                        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Rechercher des prompts..." className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex sm:items-center">
                                        <div className="flex space-x-2">
                                            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="all">Toutes les catégories</option>
                                                {uniqueCategories.map(category => (
                                                    <option key={category} value={category}>{category}</option>
                                                ))}
                                            </select>
                                            <select value={techniqueFilter} onChange={e => setTechniqueFilter(e.target.value)} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="all">Toutes les techniques</option>
                                                {uniqueTechniques.map(technique => (
                                                    <option key={technique} value={technique}>{technique}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Prompt cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredPrompts().map(prompt => (
                                    <div key={prompt.id} className="bg-white shadow rounded-lg p-4 flex flex-col">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{prompt.title}</h3>
                                            <p className="mt-2 text-gray-700 text-sm">{prompt.objective}</p>
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <button onClick={() => openModal(prompt)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-2 text-sm">
                                                Voir le Prompt
                                            </button>
                                            <button onClick={() => copyToClipboard(prompt.text)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md px-4 py-2 text-sm">
                                                <span>{copyMessage}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Section: Builder */}
                    {activeSection === 'builder' && (
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">Constructeur de Prompts</h1>
                            {/* Builder form */}
                            <div className="bg-white shadow rounded-lg p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Persona */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Persona</label>
                                        <div className="mt-1">
                                            <textarea value={builder.persona} onChange={e => setBuilder({...builder, persona: e.target.value})} rows={2} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Agis comme un expert en..."></textarea>
                                        </div>
                                    </div>
                                    {/* Task */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Tâche</label>
                                        <div className="mt-1">
                                            <textarea value={builder.task} onChange={e => setBuilder({...builder, task: e.target.value})} rows={2} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Décris la tâche à accomplir..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                {/* Context and Few-Shot Examples */}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">Contexte (facultatif)</label>
                                    <div className="mt-1">
                                        <textarea value={builder.context} onChange={e => setBuilder({...builder, context: e.target.value})} rows={2} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Informations supplémentaires..."></textarea>
                                    </div>
                                </div>
                                {/* Few-Shot Examples */}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">Exemples (Few-Shot)</label>
                                    <div className="mt-1">
                                        {builder.fewShots.map((shot, index) => (
                                            <div key={index} className="flex gap-2 mb-2">
                                                <input value={shot.input} onChange={e => updateFewShot(index, 'input', e.target.value)} type="text" placeholder="Entrée" className="flex-1 block px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                <input value={shot.output} onChange={e => updateFewShot(index, 'output', e.target.value)} type="text" placeholder="Sortie" className="flex-1 block px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                <button onClick={() => removeFewShot(index)} className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2 text-sm">
                                                    Supprimer
                                                </button>
                                            </div>
                                        ))}
                                        <button onClick={addFewShot} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-2 text-sm">
                                            Ajouter un Exemple
                                        </button>
                                    </div>
                                </div>
                                {/* Format */}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">Format de Réponse (facultatif)</label>
                                    <div className="mt-1">
                                        <input value={builder.format} onChange={e => setBuilder({...builder, format: e.target.value})} type="text" placeholder="Markdown, JSON, etc." className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                {/* Buttons */}
                                <div className="mt-6 flex gap-2">
                                    <button onClick={testBuilderPrompt} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-4 py-2 text-sm">
                                        Tester le Prompt
                                    </button>
                                    <button onClick={optimizePrompt} className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-md px-4 py-2 text-sm">
                                        Optimiser le Prompt
                                    </button>
                                </div>
                                {/* Response Tabs */}
                                <div className="mt-4">
                                    <div className="flex rounded-md bg-gray-100 p-1">
                                        <button onClick={() => setBuilder({...builder, activeTab: 'test'})} className={`flex-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-md ${builder.activeTab === 'test' ? 'bg-white shadow' : ''}`}>
                                            Réponse du Modèle
                                        </button>
                                        <button onClick={() => setBuilder({...builder, activeTab: 'improvement'})} className={`flex-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-md ${builder.activeTab === 'improvement' ? 'bg-white shadow' : ''}`}>
                                            Prompt Amélioré
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        {builder.activeTab === 'test' && (
                                            <textarea value={builder.testResponse} readOnly rows={4} className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="La réponse du modèle apparaîtra ici..."></textarea>
                                        )}
                                        {builder.activeTab === 'improvement' && (
                                            <div className="prose max-w-full" dangerouslySetInnerHTML={{__html: builder.improvementResponse}}></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section: Architectures (Charts) */}
                    {activeSection === 'architectures' && (
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">Architectures des Prompts</h1>
                            {/* Chart.js chart */}
                            <div className="bg-white shadow rounded-lg p-4">
                                <canvas id="categoryChart"></canvas>
                            </div>
                        </div>
                    )}

                    {/* Section: Aide */}
                    {activeSection === 'aide' && (
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">Aide et Documentation</h1>
                            <div className="prose max-w-none">
                                <h2>Bienvenue dans la section d'aide</h2>
                                <p>Cette section est dédiée à vous aider à comprendre et à utiliser efficacement notre outil de génération de prompts.</p>
                                <h3>1. Explorer les Prompts</h3>
                                <p>Dans cette section, vous pouvez parcourir tous les prompts disponibles, les filtrer par catégorie ou technique, et en tester de nouveaux.</p>
                                <h3>2. Constructeur de Prompts</h3>
                                <p>Le constructeur de prompts vous permet de créer des prompts personnalisés en fonction de vos besoins spécifiques. Vous pouvez définir un persona, une tâche, ajouter des exemples, et spécifier le format de réponse souhaité.</p>
                                <h3>3. Architectures</h3>
                                <p>Cette section fournit des représentations visuelles (graphiques) des différentes architectures de prompts et de leurs performances.</p>
                                <h3>4. FAQ</h3>
                                <p>Consultez notre section FAQ pour des réponses aux questions courantes.</p>
                                <h3>5. Support</h3>
                                <p>Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter via le formulaire de contact.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    </div>

// Modal for prompt details (JSX)
    {isModalOpen && (
      <div className="fixed inset-0 z-50 overflow-auto bg-smoke-800 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{selectedPrompt.title}</h2>
            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm">{selectedPrompt.objective}</p>
          </div>

          <div className="bg-gray-100 rounded-md p-4 text-sm font-mono text-gray-800">{selectedPrompt.text}</div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => copyToClipboard(selectedPrompt.text)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md px-4 py-2 text-sm">
                  Copier
                </button>
                <button onClick={() => editInBuilder(selectedPrompt)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-2 text-sm">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        )}
        </>
      );
    }
    
    export default App;
