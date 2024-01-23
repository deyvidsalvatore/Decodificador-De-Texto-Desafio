# Decodificador de Texto - Challenge 1
Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

# Modelo principal do Figma
<a href="https://www.figma.com/file/iLVTPx4iqP7XfdiGwoOEcf/Alura-Challenge---Desafio-1---L%C3%B3gica?type=design&node-id=2%3A213&mode=design&t=e8idH57pdzaUZtgb-1">![Figma Logo](docs/figma.png) Acesse o modelo aqui</a>

# Descrição do desafio
As "chaves" de criptografia que utilizaremos são:

```
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
```

**Requisitos:**
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
```
"gato" => "gaitober"
gaitober" => "gato"
```

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.
Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.