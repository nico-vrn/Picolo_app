<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Picolo</title>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body onload="jenaijamais()" class="bg-gray-50 text-center text-gray-800 font-sans">
<div class="flex justify-center items-center min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <h2 id="quijoue" class="text-xl font-semibold text-red-600">Qui joue ?</h2>
        <h3 id="questionis" class="text-lg font-medium mb-4"></h3>
        <button onclick="jenaijamais()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Suivant</button>
        <a href="name.php" class="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-4">Quitter</a>
    </div>
</div>

    <script src="index.js"></script>
</body>
</html>
