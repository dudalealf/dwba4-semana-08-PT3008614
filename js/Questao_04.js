class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto(){
    return this.primeiroNome + " " + this.segundoNome;
  }

  media(){
    return ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4));
  }

  situacao(){
    if(this.media() > 6){
      return "Aprovado";
    } 
    else {
      return "Reprovado";
    }
  }
}

function toString(aluno){
  alert("Nome: " + aluno.nomeCompleto() + "\nMédia: " + aluno.media() + "\nSituação: " + aluno.situacao());
}

var alunos = [new Aluno("João", "da Silva", 4, 5),
             new Aluno("Cristina", "Rocha", 8, 8),
             new Aluno("Angelo", "de Souza", 8, 3),
             new Aluno("João", "Oliveira", 2, 9),
             new Aluno("Maria", "Eduarda", 6, 8)];

alunos.forEach(toString);