import { RecintosZoo } from './recintos-zoo';

test('Deve retornar recintos viáveis para 2 macacos', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('MACACO', 2);
  expect(resultado).toEqual({
    recintosViaveis: [
      "Recinto 1 (espaço livre: 5 total: 10)",
      "Recinto 2 (espaço livre: 3 total: 5)",
      "Recinto 3 (espaço livre: 2 total: 7)"
    ]
  });
});

test('Deve retornar erro para animal inválido', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('UNICORNIO', 1);
  expect(resultado).toEqual({ erro: "Animal inválido" });
});

test('Deve retornar erro para quantidade inválida', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('LEAO', 0);
  expect(resultado).toEqual({ erro: "Quantidade inválida" });
});

test('Deve retornar erro para recinto sem espaço para leão', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('LEAO', 2);
  expect(resultado).toEqual({ erro: "Não há recinto viável" });
});

// Testes adicionais

test('Deve retornar recintos viáveis para 1 crocodilo', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('CROCODILO', 1);
  expect(resultado).toEqual({
    recintosViaveis: ["Recinto 4 (espaço livre: 7 total: 8)"]
  });
});

test('Deve retornar recintos viáveis para 1 gazela', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('GAZELA', 1);
  expect(resultado).toEqual({
    recintosViaveis: [
      "Recinto 1 (espaço livre: 7 total: 10)",
      "Recinto 3 (espaço livre: 4 total: 7)"
    ]
  });
});

test('Deve retornar erro para hipopótamo sem recinto adequado', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('HIPOPOTAMO', 1);
  expect(resultado).toEqual({ erro: "Não há recinto viável" });
});

test('Deve retornar recintos viáveis para 1 hipopótamo no recinto savana e rio', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('HIPOPOTAMO', 1);
  expect(resultado).toEqual({
    recintosViaveis: ["Recinto 3 (espaço livre: 3 total: 7)"]
  });
});

test('Deve retornar erro se quantidade exceder o espaço total do recinto', () => {
  const zoo = new RecintosZoo();
  const resultado = zoo.analisaRecintos('MACACO', 12);
  expect(resultado).toEqual({ erro: "Não há recinto viável" });
});

