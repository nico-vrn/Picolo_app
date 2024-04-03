<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Picolo</title>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body onload="init()" class="bg-gray-50 text-center text-gray-800 font-sans">
<div class="flex justify-center items-center min-h-screen"> <!-- Nouveau conteneur pour le centrage vertical -->
    <div id="all" class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-4">Indiquez vos prénoms :</h1>
        <input type="text" id="name" class="input text-base p-2 border border-gray-300 rounded-lg" placeholder="Votre nom...">
        <button onclick="ajouter_nom()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4">Ajouter</button>
        <a href="jenaijamais.php" onclick="enregistrer_name()" class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-4">START</a>
        <div id="names-container" class="mt-8 grid grid-cols-3 gap-4 justify-items-center"></div>
    </div>
</div>

    <script src="index.js"></script>
</body>
</html>
