# MOTUS Benmakhlouf-Aya
## function getRandomWord() : 
Retourne un mot aléatoire à partir d'un tableau WORDLIST que j'ai déclaré au début.

## function firstLetter() : 
Cette fonction stocke le résultat de getRandomWord() dans la variable randomWord, puis elle place la première lettre de ce mot aléatoire à la première position du tableau letterColumn (qui est le champ du tableau html).

## function guessedWord() : 
La fonction qui affiche ce que l'utilisateur a deviné (a saisi dans le input).
La boucle 'while' parcourt chaque lettre de 'currentGuess' et attribue chaque lettre correspondante à chaque élément de 'letterColumn'.

## functions misPlaced() et wellPlaced() :
Ces fonctions prennent deux paramètres, randomWord et currentGuess, et comparent chaque lettre entre elles à l'intérieur de la boucle while. Si une lettre est mal placée par rapport à 'randomWord', elles mettent à jour les classes CSS des éléments correspondants dans letterColumn. La même logique s'applique à la fonction wellPlaced().

## function checkPlayerInput() : 
Cette fonction principale vérifie les saisies du joueur.
### Si l'utilisateur devine le mot correctement 
La partie se termine avec l'affichage de tous les champs en orange (en appelant la fonction wellPlaced), et le programme affiche un message informant l'utilisateur qu'il a reussi. Le message est généré en utilisant la variable 'message' (qui stocke la classe msg du html)
### Si le joueur dépasse le nombre maximal de tentatives
La partie se termine et affiche le mot aléatoire (en appelant la fonction guessWord()).
### Si l'utilisateur n'a pas correctement deviné le mot 
Un message d'erreur qui s'affiche en indiquant le nombre de tentatives restantes. À chaque tentative incorrecte, le nombre de tentatives diminue, et les lettres bien placées, les lettres mal placées et les lettres qui n'existent pas dans le mot aléatoire sont évaluées (l'appel des fonctions wellPlaced et misPlaced)